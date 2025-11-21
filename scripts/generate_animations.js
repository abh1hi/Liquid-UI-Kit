const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const ANIMATIONS_JSON_PATH = path.join(ROOT_DIR, 'ui_animations.json');
const ANIMATIONS_LIB_DIR = path.join(ROOT_DIR, 'components', 'animations', 'library');
const COMPONENTS_DIR = path.join(ROOT_DIR, 'components');
const MANIFEST_PATH = path.join(ROOT_DIR, 'components', 'animations', 'manifest.js');

// Helper to create slug
const toSlug = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

async function generateAnimations() {
    const manifestAnimations = {};

    if (!fs.existsSync(ANIMATIONS_LIB_DIR)) {
        console.log('Animations library directory does not exist. Skipping animation scan.');
        return {};
    }

    // Load animation config to get targets
    let animationsConfig = {};
    try {
        animationsConfig = JSON.parse(fs.readFileSync(ANIMATIONS_JSON_PATH, 'utf8'));
    } catch (e) {
        console.error('Failed to read ui_animations.json', e);
    }

    // Create a lookup map: categorySlug -> animSlug -> targets
    const configLookup = {};
    for (const [category, animations] of Object.entries(animationsConfig)) {
        const catSlug = toSlug(category);
        configLookup[catSlug] = {};

        if (!Array.isArray(animations)) continue;

        for (const anim of animations) {
            const name = typeof anim === 'string' ? anim : anim.name;
            const targets = typeof anim === 'string' ? ['all'] : (anim.targets || ['all']);
            const animSlug = toSlug(name);
            configLookup[catSlug][animSlug] = targets;
        }
    }

    const categories = fs.readdirSync(ANIMATIONS_LIB_DIR);

    for (const category of categories) {
        const categoryPath = path.join(ANIMATIONS_LIB_DIR, category);
        if (!fs.statSync(categoryPath).isDirectory()) continue;

        const categorySlug = toSlug(category);
        manifestAnimations[categorySlug] = [];

        const animations = fs.readdirSync(categoryPath);
        for (const animName of animations) {
            const animPath = path.join(categoryPath, animName);
            if (!fs.statSync(animPath).isDirectory()) continue;

            const animSlug = toSlug(animName);
            const className = `ui-anim-${categorySlug}-${animSlug}`;

            const targets = (configLookup[categorySlug] && configLookup[categorySlug][animSlug]) || ['all'];

            manifestAnimations[categorySlug].push({
                name: animName,
                displayName: animName.replace(/-/g, ' '),
                id: animSlug,
                className: className,
                path: `/components/animations/library/${categorySlug}/${animSlug}`,
                cssPath: `/components/animations/library/${categorySlug}/${animSlug}/style.css`,
                targets: targets
            });
        }
    }

    return manifestAnimations;
}

function scanComponents(dir) {
    const results = [];
    if (!fs.existsSync(dir)) return results;

    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            results.push(...scanComponents(fullPath));
        } else if (file.endsWith('.html')) {
            // Check if it's a component file (heuristic: same name as folder or index.html)
            const parentDir = path.basename(dir);
            const name = path.basename(file, '.html');

            if (name === parentDir || name === 'index') {
                // It's a component
                const relativePath = path.relative(COMPONENTS_DIR, fullPath).replace(/\\/g, '/');
                results.push({
                    name: parentDir.charAt(0).toUpperCase() + parentDir.slice(1),
                    path: '/components/' + relativePath
                });
            }
        }
    }
    return results;
}

async function main() {
    try {
        const animations = await generateAnimations();
        console.log('Animations generated.');

        console.log('Scanning components...');
        const components = scanComponents(COMPONENTS_DIR);
        console.log(`Found ${components.length} components.`);

        const manifestContent = `
// Auto-generated manifest
const UI_MANIFEST = {
    animations: ${JSON.stringify(animations, null, 4)},
    components: ${JSON.stringify(components, null, 4)}
};

if (typeof module !== 'undefined') {
    module.exports = UI_MANIFEST;
}
`;
        fs.writeFileSync(MANIFEST_PATH, manifestContent);
        console.log(`Manifest written to ${MANIFEST_PATH}`);

    } catch (error) {
        console.error('Error:', error);
    }
}

main();
