// Load and display animations from ui_animations.json
async function loadAnimations() {
    try {
        const response = await fetch('../../ui_animations.json');
        const data = await response.json();

        const container = document.getElementById('showcase-container');
        const animations = data.iOS_Modern_UI_Animations;

        // Create sections for each category
        Object.keys(animations).forEach((categoryKey, index) => {
            const categoryData = animations[categoryKey];
            const section = createCategorySection(categoryKey, categoryData, index === 0);
            container.appendChild(section);
        });

    } catch (error) {
        console.error('Error loading animations:', error);
    }
}

// Create a category section
function createCategorySection(categoryKey, animations, isExpanded = false) {
    const section = document.createElement('div');
    section.className = 'animation-category';

    // Format category name
    const categoryName = categoryKey.replace(/_/g, ' ');

    // Category header
    const header = document.createElement('div');
    header.className = 'category-header';
    header.innerHTML = `
        <h2 class="category-title">
            <span class="material-icons-round">play_circle</span>
            ${categoryName}
        </h2>
        <span class="material-icons-round category-toggle ${isExpanded ? 'expanded' : ''}">expand_more</span>
    `;

    // Category content
    const content = document.createElement('div');
    content.className = `category-content ${isExpanded ? 'expanded' : ''}`;

    // Create animation cards
    animations.forEach((animation, index) => {
        const card = createAnimationCard(animation, categoryKey, index);
        content.appendChild(card);
    });

    // Toggle functionality
    header.addEventListener('click', () => {
        const toggle = header.querySelector('.category-toggle');
        toggle.classList.toggle('expanded');
        content.classList.toggle('expanded');
    });

    section.appendChild(header);
    section.appendChild(content);

    return section;
}

// Create an animation card
function createAnimationCard(animationData, categoryKey, index) {
    const card = document.createElement('div');
    card.className = 'animation-card';

    // Animation info
    const info = document.createElement('div');
    info.className = 'animation-info';

    const name = document.createElement('h3');
    name.className = 'animation-name';
    name.textContent = animationData.name;

    const targets = document.createElement('div');
    targets.className = 'animation-targets';
    animationData.targets.forEach(target => {
        const badge = document.createElement('span');
        badge.className = 'target-badge';
        badge.textContent = target;
        targets.appendChild(badge);
    });

    info.appendChild(name);
    info.appendChild(targets);

    // Demo area
    const demo = createAnimationDemo(animationData, categoryKey);

    card.appendChild(info);
    card.appendChild(demo);

    return card;
}

// Create animation demo
function createAnimationDemo(animationData, categoryKey) {
    const demoContainer = document.createElement('div');
    demoContainer.className = 'animation-demo';

    // Create demo element based on animation type
    const demoElement = createDemoElement(animationData.name, categoryKey);
    demoContainer.appendChild(demoElement);

    // Create trigger button
    const triggerBtn = document.createElement('button');
    triggerBtn.className = 'trigger-btn';
    triggerBtn.textContent = 'Play Animation';

    // Add click handler to trigger animation
    triggerBtn.addEventListener('click', () => {
        triggerAnimation(demoElement, animationData.name, categoryKey);
    });

    demoContainer.appendChild(triggerBtn);

    return demoContainer;
}

// Create demo element based on animation type
function createDemoElement(animationName, categoryKey) {
    const element = document.createElement('div');
    element.className = 'demo-element';

    // Customize based on animation type
    if (animationName.includes('button') || animationName.includes('Button')) {
        element.innerHTML = '<span class="material-icons-round">touch_app</span> Button';
    } else if (animationName.includes('icon') || animationName.includes('Icon') || animationName.includes('Symbol')) {
        element.innerHTML = '<span class="material-icons-round">star</span>';
        element.style.padding = '1.5rem';
        element.style.borderRadius = '50%';
    } else if (animationName.includes('card') || animationName.includes('Card')) {
        element.innerHTML = '<div style="text-align: center;"><span class="material-icons-round" style="font-size: 2rem;">credit_card</span><br>Card</div>';
        element.style.padding = '2rem';
    } else if (animationName.includes('modal') || animationName.includes('Modal') || animationName.includes('sheet') || animationName.includes('Sheet')) {
        element.innerHTML = '<span class="material-icons-round">web_asset</span> Modal';
        element.style.width = '200px';
    } else if (animationName.includes('switch') || animationName.includes('Switch') || animationName.includes('toggle') || animationName.includes('Toggle')) {
        element.innerHTML = `
            <div style="width: 60px; height: 30px; background: rgba(255,255,255,0.3); border-radius: 15px; position: relative;">
                <div style="width: 26px; height: 26px; background: white; border-radius: 50%; position: absolute; top: 2px; left: 2px; transition: all 0.3s;"></div>
            </div>
        `;
        element.style.background = 'transparent';
    } else if (animationName.includes('checkbox') || animationName.includes('Checkbox')) {
        element.innerHTML = `
            <svg width="30" height="30" viewBox="0 0 30 30">
                <rect width="30" height="30" rx="6" fill="white" stroke="currentColor" stroke-width="2"/>
                <path d="M8 15 L13 20 L22 10" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="50" stroke-dashoffset="50"/>
            </svg>
        `;
        element.style.background = 'transparent';
    } else if (animationName.includes('blur') || animationName.includes('Blur') || animationName.includes('glass') || animationName.includes('Glass')) {
        element.innerHTML = '<span class="material-icons-round">blur_on</span> Blur Effect';
    } else if (animationName.includes('shadow') || animationName.includes('Shadow') || animationName.includes('elevation') || animationName.includes('Elevation')) {
        element.innerHTML = '<span class="material-icons-round">layers</span> Elevation';
    } else if (animationName.includes('list') || animationName.includes('List')) {
        element.innerHTML = `
            <div style="width: 100%;">
                <div style="background: rgba(255,255,255,0.2); padding: 0.5rem; border-radius: 6px; margin-bottom: 0.5rem;">List Item 1</div>
                <div style="background: rgba(255,255,255,0.2); padding: 0.5rem; border-radius: 6px; margin-bottom: 0.5rem;">List Item 2</div>
                <div style="background: rgba(255,255,255,0.2); padding: 0.5rem; border-radius: 6px;">List Item 3</div>
            </div>
        `;
        element.style.width = '100%';
    } else {
        element.innerHTML = `<span class="material-icons-round">animation</span> ${animationName.split(' ')[0]}`;
    }

    return element;
}

// Trigger animation based on type
function triggerAnimation(element, animationName, categoryKey) {
    // Remove all animation classes
    element.className = 'demo-element';

    // Force reflow
    void element.offsetWidth;

    // Determine which animation to apply
    const name = animationName.toLowerCase();

    if (name.includes('slide') && (name.includes('push') || name.includes('pop') || name.includes('transition'))) {
        element.classList.add('anim-slide-in');
    } else if (name.includes('spring') || name.includes('bounce')) {
        element.classList.add('anim-spring-bounce');
    } else if (name.includes('fade')) {
        element.classList.add('anim-fade-in');
    } else if (name.includes('scale') || name.includes('pop-in')) {
        element.classList.add('anim-scale-up');
    } else if (name.includes('pulse')) {
        element.classList.add('anim-pulse');
        setTimeout(() => element.classList.remove('anim-pulse'), 3000);
    } else if (name.includes('blur')) {
        element.classList.add('anim-blur');
        setTimeout(() => element.classList.remove('anim-blur'), 2000);
    } else if (name.includes('shimmer') || name.includes('vibrancy')) {
        element.classList.add('anim-shimmer');
        setTimeout(() => element.classList.remove('anim-shimmer'), 2000);
    } else if (name.includes('wiggle') || name.includes('jiggle')) {
        element.classList.add('anim-wiggle');
    } else if (name.includes('lift') || name.includes('elevation')) {
        element.classList.add('anim-lift');
    } else if (name.includes('sheet') && name.includes('slide')) {
        element.classList.add('anim-slide-up-sheet');
    } else if (name.includes('expand') || name.includes('resize')) {
        element.classList.add('anim-expand');
    } else if (name.includes('morph') && name.includes('corner')) {
        element.classList.add('anim-morph');
        setTimeout(() => element.classList.remove('anim-morph'), 2000);
    } else if (name.includes('press') || name.includes('squish')) {
        element.classList.add('anim-button-press');
        setTimeout(() => {
            element.classList.remove('anim-button-press');
            element.classList.add('anim-spring-bounce');
        }, 100);
    } else if (name.includes('checkbox') && name.includes('tick')) {
        const path = element.querySelector('path');
        if (path) {
            path.style.animation = 'checkmark 0.5s ease-out forwards';
            setTimeout(() => {
                path.style.animation = '';
                path.style.strokeDashoffset = '50';
            }, 2000);
        }
    } else if (name.includes('switch') && name.includes('toggle')) {
        const knob = element.querySelector('div > div');
        if (knob) {
            const isOn = knob.style.left === '32px';
            knob.style.left = isOn ? '2px' : '32px';
            element.querySelector('div').style.background = isOn ? 'rgba(255,255,255,0.3)' : '#667eea';
        }
    } else {
        // Default animation
        element.classList.add('anim-spring-bounce');
    }

    // Remove animation class after completion (except for infinite animations)
    if (!name.includes('pulse') && !name.includes('blur') && !name.includes('shimmer') && !name.includes('morph')) {
        setTimeout(() => {
            element.className = 'demo-element';
        }, 1000);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadAnimations);
