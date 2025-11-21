const fs = require('fs');
const path = require('path');

// Read ui_animations.json
const animationsData = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../ui_animations.json'), 'utf8')
);

const animations = animationsData.iOS_Modern_UI_Animations;

// Base directory for library
const libraryDir = path.join(__dirname, '../components/animations/library');

// Create library directory if it doesn't exist
if (!fs.existsSync(libraryDir)) {
    fs.mkdirSync(libraryDir, { recursive: true });
}

// Helper function to convert animation name to URL-friendly folder name
function toFolderName(animationName) {
    return animationName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
}

// Get detailed animation configuration based on exact animation name
function getAnimationConfig(animationName, category) {
    const name = animationName.toLowerCase();
    const config = {
        demoHTML: '',
        keyframes: '',
        animationClass: '',
        extraJS: '',
        demoStyles: ''
    };

    // === SYSTEM NAVIGATION ===
    if (name.includes('navigation push/pop slide')) {
        config.demoHTML = `<div class="screen-container">
            <div class="screen screen-1">
                <div class="nav-bar">
                    <h3>Screen 1</h3>
                </div>
                <div class="screen-content">
                    <p>First Screen</p>
                    <button class="nav-button">Push Next →</button>
                </div>
            </div>
            <div class="screen screen-2">
                <div class="nav-bar">
                    <button class="back-btn">← Back</button>
                    <h3>Screen 2</h3>
                </div>
                <div class="screen-content">
                    <p>Second Screen</p>
                </div>
            </div>
        </div>`;

        config.keyframes = `@keyframes slideInRight {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
}

@keyframes slideOutRight {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(100%);
    }
}`;

        config.animationClass = `.screen-2.animate {
    animation: slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}`;

        config.demoStyles = `.screen-container {
    position: relative;
    width: 300px;
    height: 500px;
    background: white;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.screen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
}

.screen-2 {
    transform: translateX(100%);
}

.nav-bar {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.nav-bar h3 {
    margin: 0;
    flex: 1;
}

.back-btn {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
}

.screen-content {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.nav-button {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 12px;
    cursor: pointer;
    font-weight: 600;
}`;
    }

    // === PARALLAX ===
    else if (name.includes('parallax')) {
        config.demoHTML = `<div class="parallax-container">
            <div class="parallax-layer layer-1">Background</div>
            <div class="parallax-layer layer-2">Middle</div>
            <div class="parallax-layer layer-3">Foreground</div>
        </div>`;

        config.keyframes = `@keyframes parallax1 {
    from { transform: translateY(-10px); }
    to { transform: translateY(10px); }
}

@keyframes parallax2 {
    from { transform: translateY(-20px); }
    to { transform: translateY(20px); }
}

@keyframes parallax3 {
    from { transform: translateY(-30px); }
    to { transform: translateY(30px); }
}`;

        config.animationClass = `.layer-1.animate { animation: parallax1 2s ease-in-out infinite alternate; }
.layer-2.animate { animation: parallax2 2s ease-in-out infinite alternate; }
.layer-3.animate { animation: parallax3 2s ease-in-out infinite alternate; }`;

        config.demoStyles = `.parallax-container {
    position: relative;
    width: 300px;
    height: 400px;
    background: #1a1a2e;
    border-radius: 16px;
    overflow: hidden;
}

.parallax-layer {
    position: absolute;
    width: 100%;
    height: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
}

.layer-1 {
    top: 0;
    background: rgba(102, 126, 234, 0.3);
}

.layer-2 {
    top: 33%;
    background: rgba(102, 126, 234, 0.6);
}

.layer-3 {
    top: 66%;
    background: rgba(102, 126, 234, 0.9);
}`;
    }

    // === MODAL SHEET SLIDE ===
    else if (name.includes('modal') && name.includes('sheet') && name.includes('slide')) {
        config.demoHTML = `<div class="modal-demo-container">
            <div class="modal-backdrop"></div>
            <div class="bottom-sheet">
                <div class="sheet-handle"></div>
                <div class="sheet-header">
                    <h3>Bottom Sheet</h3>
                </div>
                <div class="sheet-content">
                    <p>This is a bottom sheet with spring damping animation</p>
                    <button class="sheet-action">Action</button>
                </div>
            </div>
        </div>`;

        config.keyframes = `@keyframes slideUpSpring {
    from {
        transform: translateY(100%);
    }
    to {
        transform: translateY(0);
    }
}

@keyframes fadeInBackdrop {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}`;

        config.animationClass = `.bottom-sheet.animate {
    animation: slideUpSpring 0.6s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.modal-backdrop.animate {
    animation: fadeInBackdrop 0.3s ease-out;
}`;

        config.demoStyles = `.modal-demo-container {
    position: relative;
    width: 350px;
    height: 600px;
    background: #f0f0f0;
    border-radius: 24px;
    overflow: hidden;
}

.modal-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
}

.bottom-sheet {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: white;
    border-radius: 24px 24px 0 0;
    box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.2);
    transform: translateY(100%);
}

.sheet-handle {
    width: 40px;
    height: 4px;
    background: #ddd;
    border-radius: 2px;
    margin: 12px auto;
}

.sheet-header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #eee;
}

.sheet-header h3 {
    margin: 0;
}

.sheet-content {
    padding: 1.5rem;
}

.sheet-action {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 12px;
    margin-top: 1rem;
    cursor: pointer;
}`;

        config.extraJS = `
        // Animate backdrop too
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            playBtn.addEventListener('click', () => {
                backdrop.classList.remove('animate');
                void backdrop.offsetWidth;
                backdrop.classList.add('animate');
            });
            
            window.addEventListener('load', () => {
                setTimeout(() => {
                    backdrop.classList.add('animate');
                }, 300);
            });
        }`;
    }

    // === BUTTON PRESS SQUISH ===
    else if (name.includes('button') && name.includes('press') && name.includes('squish')) {
        config.demoHTML = `<button class="demo-press-button">
            <span class="material-icons-round">touch_app</span>
            Press Me
        </button>`;

        config.keyframes = `@keyframes buttonPress {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.97);
    }
    100% {
        transform: scale(1);
    }
}`;

        config.animationClass = `.demo-press-button.animate {
    animation: buttonPress 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}`;

        config.demoStyles = `.demo-press-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1.25rem 2.5rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 16px;
    font-size: 1.125rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
    transition: box-shadow 0.2s;
}

.demo-press-button:hover {
    box-shadow: 0 6px 24px rgba(102, 126, 234, 0.5);
}`;
    }

    // === SPRING BOUNCE ===
    else if (name.includes('spring') || (name.includes('bounce') && name.includes('button'))) {
        config.demoHTML = `<button class="demo-spring-button">
            <span class="material-icons-round">check_circle</span>
            Success!
        </button>`;

        config.keyframes = `@keyframes springBounce {
    0%, 100% {
        transform: scale(1);
    }
    25% {
        transform: scale(1.15);
    }
    50% {
        transform: scale(0.95);
    }
    75% {
        transform: scale(1.05);
    }
}`;

        config.animationClass = `.demo-spring-button.animate {
    animation: springBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}`;

        config.demoStyles = `.demo-spring-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1.25rem 2.5rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 16px;
    font-size: 1.125rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
}`;
    }

    // === SWITCH TOGGLE ===
    else if (name.includes('switch') && name.includes('toggle')) {
        config.demoHTML = `<div class="toggle-switch">
            <div class="switch-track">
                <div class="switch-thumb"></div>
            </div>
        </div>`;

        config.keyframes = `@keyframes toggleOn {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(28px);
    }
}

@keyframes trackColorChange {
    from {
        background: rgba(0, 0, 0, 0.1);
    }
    to {
        background: #667eea;
    }
}`;

        config.animationClass = `.switch-thumb.animate {
    animation: toggleOn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.switch-track.animate {
    animation: trackColorChange 0.3s ease-out forwards;
}`;

        config.demoStyles = `.toggle-switch {
    display: flex;
    align-items: center;
    justify-content: center;
}

.switch-track {
    width: 60px;
    height: 32px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    position: relative;
    cursor: pointer;
}

.switch-thumb {
    width: 26px;
    height: 26px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 3px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}`;

        config.extraJS = `
        // Animate track too
        const track = document.querySelector('.switch-track');
        if (track) {
            playBtn.addEventListener('click', () => {
                track.classList.remove('animate');
                void track.offsetWidth;
                track.classList.add('animate');
            });
            
            window.addEventListener('load', () => {
                setTimeout(() => {
                    track.classList.add('animate');
                }, 300);
            });
        }`;
    }

    // === CHECKBOX TICK ===
    else if (name.includes('checkbox') && name.includes('tick')) {
        config.demoHTML = `<div class="checkbox-demo">
            <svg width="50" height="50" viewBox="0 0 50 50">
                <rect class="checkbox-box" x="5" y="5" width="40" height="40" rx="8" />
                <path class="checkbox-check" d="M15 25 L22 32 L35 18" />
            </svg>
        </div>`;

        config.keyframes = `@keyframes drawCheck {
    from {
        stroke-dashoffset: 60;
    }
    to {
        stroke-dashoffset: 0;
    }
}

@keyframes fillBox {
    from {
        fill: white;
    }
    to {
        fill: #667eea;
    }
}`;

        config.animationClass = `.checkbox-check.animate {
    animation: drawCheck 0.5s ease-out forwards;
}

.checkbox-box.animate {
    animation: fillBox 0.3s ease-out forwards;
}`;

        config.demoStyles = `.checkbox-demo {
    display: flex;
    align-items: center;
    justify-content: center;
}

.checkbox-box {
    fill: white;
    stroke: #667eea;
    stroke-width: 2;
}

.checkbox-check {
    fill: none;
    stroke: white;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 60;
    stroke-dashoffset: 60;
}`;

        config.extraJS = `
        // Animate both elements
        const checkboxBox = document.querySelector('.checkbox-box');
        const checkboxCheck = document.querySelector('.checkbox-check');
        
        playBtn.addEventListener('click', () => {
            checkboxBox.classList.remove('animate');
            checkboxCheck.classList.remove('animate');
            void checkboxBox.offsetWidth;
            checkboxBox.classList.add('animate');
            checkboxCheck.classList.add('animate');
        });
        
        window.addEventListener('load', () => {
            setTimeout(() => {
                checkboxBox.classList.add('animate');
                checkboxCheck.classList.add('animate');
            }, 300);
        });`;
    }

    // === BLUR ===
    else if (name.includes('blur') || name.includes('liquid blur')) {
        config.demoHTML = `<div class="blur-demo-card">
            <div class="blur-content">
                <span class="material-icons-round">blur_on</span>
                <h3>Dynamic Blur</h3>
                <p>Background blurs dynamically</p>
            </div>
        </div>`;

        config.keyframes = `@keyframes dynamicBlur {
    0%, 100% {
        filter: blur(0px);
        opacity: 1;
    }
    50% {
        filter: blur(12px);
        opacity: 0.8;
    }
}`;

        config.animationClass = `.blur-demo-card.animate {
    animation: dynamicBlur 2s ease-in-out infinite;
}`;

        config.demoStyles = `.blur-demo-card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 3rem 2rem;
    border-radius: 24px;
    width: 300px;
    text-align: center;
}

.blur-content .material-icons-round {
    font-size: 4rem;
    margin-bottom: 1rem;
}

.blur-content h3 {
    margin: 0.5rem 0;
}

.blur-content p {
    margin: 0.5rem 0 0;
    opacity: 0.9;
}`;
    }

    // === ELEVATION/LIFT ===
    else if (name.includes('lift') || name.includes('elevation')) {
        config.demoHTML = `<div class="lift-card">
            <span class="material-icons-round">layers</span>
            <h3>Elevation</h3>
            <p>Card lifts with shadow</p>
        </div>`;

        config.keyframes = `@keyframes elevationLift {
    from {
        transform: translateY(0);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    to {
        transform: translateY(-12px);
        box-shadow: 0 24px 48px rgba(0, 0, 0, 0.25);
    }
}`;

        config.animationClass = `.lift-card.animate {
    animation: elevationLift 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}`;

        config.demoStyles = `.lift-card {
    background: white;
    padding: 2rem;
    border-radius: 20px;
    width: 250px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.lift-card .material-icons-round {
    font-size: 3rem;
    color: #667eea;
    margin-bottom: 1rem;
}

.lift-card h3 {
    margin: 0.5rem 0;
    color: #1c1b1f;
}

.lift-card p {
    margin: 0.5rem 0 0;
    color: #666;
}`;
    }

    // === PULSE ===
    else if (name.includes('pulse')) {
        config.demoHTML = `<div class="pulse-icon">
            <span class="material-icons-round">notifications_active</span>
        </div>`;

        config.keyframes = `@keyframes pulseEffect {
    0%, 100% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.1);
        opacity: 0.8;
    }
}`;

        config.animationClass = `.pulse-icon.animate {
    animation: pulseEffect 1.5s ease-in-out infinite;
}`;

        config.demoStyles = `.pulse-icon {
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

.pulse-icon .material-icons-round {
    font-size: 3rem;
}`;
    }

    // === DEFAULT FALLBACK ===
    else {
        // Use the original generic implementation
        config.demoHTML = `<div class="demo-box">
            <span class="material-icons-round">animation</span>
            <span class="demo-text">${animationName}</span>
        </div>`;

        config.keyframes = `@keyframes ${toFolderName(animationName)} {
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}`;

        config.animationClass = `.animate {
    animation: ${toFolderName(animationName)} 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}`;

        config.demoStyles = `.demo-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem 3rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
}

.demo-box .material-icons-round {
    font-size: 3rem;
}

.demo-text {
    font-size: 1.25rem;
    font-weight: 600;
}`;
    }

    return config;
}

// Continue with the rest of the file...
console.log('\n🎨 Regenerating animation preview pages with accurate effects...\n');

let generatedCount = 0;
let totalAnimations = 0;

// Count total
Object.keys(animations).forEach(category => {
    totalAnimations += animations[category].length;
});

console.log(`Generating ${totalAnimations} enhanced animation previews...\n`);

Object.keys(animations).forEach((categoryKey) => {
    const categoryAnimations = animations[categoryKey];

    categoryAnimations.forEach((animation) => {
        const animationName = animation.name;
        const folderName = toFolderName(animationName);
        const animationDir = path.join(libraryDir, folderName);
        const config = getAnimationConfig(animationName, categoryKey);

        // Create directory
        if (!fs.existsSync(animationDir)) {
            fs.mkdirSync(animationDir, { recursive: true });
        }

        // Generate HTML with custom demo
        const html = generateEnhancedHTML(animationName, categoryKey, folderName, config);
        fs.writeFileSync(path.join(animationDir, 'index.html'), html);

        // Generate CSS with custom keyframes
        const css = generateEnhancedCSS(animationName, categoryKey, folderName, config);
        fs.writeFileSync(path.join(animationDir, 'styles.css'), css);

        generatedCount++;
        process.stdout.write(`\r✓ Generated: ${generatedCount}/${totalAnimations} - ${animationName}`);
    });
});

console.log(`\n\n✅ Successfully regenerated ${generatedCount} enhanced animation previews!\n`);

// HTML generator function
function generateEnhancedHTML(animationName, category, folderName, config) {
    const categoryFormatted = category.replace(/_/g, ' ');

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${animationName} - Animation Preview</title>
    <link rel="stylesheet" href="../../../css/main.css">
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet">
</head>
<body>
    <div class="animation-preview-page">
        <header class="preview-header">
            <a href="../index.html" class="back-link">
                <span class="material-icons-round">arrow_back</span>
                Back to Library
            </a>
            <div class="animation-info">
                <span class="category-badge">${categoryFormatted}</span>
                <h1 class="animation-title">${animationName}</h1>
            </div>
        </header>

        <div class="preview-container">
            <div class="demo-area">
                ${config.demoHTML}
            </div>
            
            <div class="controls">
                <button class="play-btn" id="playBtn">
                    <span class="material-icons-round">play_arrow</span>
                    Play Animation
                </button>
            </div>
        </div>
    </div>

    <script>
        const playBtn = document.getElementById('playBtn');
        const demoElements = document.querySelectorAll('.demo-area > *');
        
        playBtn.addEventListener('click', () => {
            demoElements.forEach(elem => {
                elem.classList.remove('animate');
                // Recursively remove animate class from children
                elem.querySelectorAll('.animate').forEach(child => child.classList.remove('animate'));
                void elem.offsetWidth; // Force reflow
                elem.classList.add('animate');
                // Recursively add animate class to children that need it
                elem.querySelectorAll('[class*="switch-"], [class*="checkbox-"]').forEach(child => {
                    child.classList.add('animate');
                });
            });
        });

        // Auto-play on load
        window.addEventListener('load', () => {
            setTimeout(() => {
                demoElements.forEach(elem => {
                    elem.classList.add('animate');
                    elem.querySelectorAll('[class*="switch-"], [class*="checkbox-"]').forEach(child => {
                        child.classList.add('animate');
                    });
                });
            }, 300);
        });
        ${config.extraJS}
    </script>
</body>
</html>`;
}

// CSS generator function
function generateEnhancedCSS(animationName, category, folderName, config) {
    return `/* ${animationName} Animation */

.animation-preview-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 2rem;
}

.preview-header {
    max-width: 1200px;
    margin: 0 auto 3rem;
}

.back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: white;
    text-decoration: none;
    font-weight: 500;
    margin-bottom: 2rem;
    padding: 0.75rem 1.25rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    transition: all 0.2s;
}

.back-link:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(-4px);
}

.animation-info {
    margin-top: 1.5rem;
}

.category-badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 1rem;
}

.animation-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    margin: 0;
}

.preview-container {
    max-width: 1200px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 24px;
    padding: 3rem;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

.demo-area {
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5f5f5;
    border-radius: 16px;
    padding: 3rem;
    margin-bottom: 2rem;
}

/* Custom Demo Styles */
${config.demoStyles}

/* Animation Keyframes */
${config.keyframes}

/* Animation Class */
${config.animationClass}

/* Controls */
.controls {
    text-align: center;
}

.play-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    transition: all 0.2s;
}

.play-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(102, 126, 234, 0.5);
}

.play-btn:active {
    transform: translateY(0);
}

/* Responsive */
@media (max-width: 768px) {
    .animation-preview-page {
        padding: 1rem;
    }
    
    .animation-title {
        font-size: 1.75rem;
    }
    
    .preview-container {
        padding: 1.5rem;
    }
    
    .demo-area {
        padding: 2rem 1rem;
        min-height: 250px;
    }
}`;
}
