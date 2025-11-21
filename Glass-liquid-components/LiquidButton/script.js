// Liquid Button Component Script
// Handles interactions and advanced effects

document.addEventListener('DOMContentLoaded', () => {
    const liquidButtons = document.querySelectorAll('.liquid-button');

    liquidButtons.forEach(button => {
        // Add ripple effect on click
        button.addEventListener('click', function (e) {
            // Don't trigger if disabled or loading
            if (this.disabled || this.classList.contains('loading')) {
                return;
            }

            // Create ripple
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');

            // Get button dimensions
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            this.appendChild(ripple);

            // Remove ripple after animation
            setTimeout(() => ripple.remove(), 600);
        });

        // Enhanced hover effect - update liquid layers
        button.addEventListener('mouseenter', function () {
            if (this.disabled || this.classList.contains('loading')) {
                return;
            }

            const liquidEffect = this.querySelector('.liquid-effect');
            if (liquidEffect) {
                liquidEffect.style.animation = 'liquidPulse 2s ease-in-out infinite';
            }
        });

        button.addEventListener('mouseleave', function () {
            const liquidEffect = this.querySelector('.liquid-effect');
            if (liquidEffect) {
                liquidEffect.style.animation = 'liquidPulse 3s ease-in-out infinite';
            }
        });

        // Keyboard accessibility
        button.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Theme Change Detection
    const observeThemeChange = () => {
        const html = document.documentElement;
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') {
                    console.log('Theme changed to:', html.getAttribute('data-theme') || 'light');
                    // Re-animate liquid effects on theme change
                    liquidButtons.forEach(btn => {
                        const effect = btn.querySelector('.liquid-effect');
                        if (effect) {
                            effect.style.animation = 'none';
                            setTimeout(() => {
                                effect.style.animation = 'liquidPulse 3s ease-in-out infinite';
                            }, 50);
                        }
                    });
                }
            });
        });

        observer.observe(html, {
            attributes: true,
            attributeFilter: ['data-theme']
        });
    };

    observeThemeChange();

    // Add demo console logging
    console.log('Liquid Button Component Loaded');
    console.log(`Found ${liquidButtons.length} liquid buttons`);
});

// Export for ES6 modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        init: () => {
            console.log('Liquid Button module initialized');
        }
    };
}
