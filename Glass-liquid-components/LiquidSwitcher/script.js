// Liquid Switcher Logic
document.addEventListener('DOMContentLoaded', () => {
    const switcher = document.querySelector('.liquid-switcher');
    const inputs = document.querySelectorAll('.switcher-input');

    if (!switcher) return;

    inputs.forEach(input => {
        input.addEventListener('change', (e) => {
            const current = e.target.getAttribute('c-option');

            // Update c-previous attribute after animation
            setTimeout(() => {
                switcher.setAttribute('c-previous', current);
            }, 400);

            // Handle Theme Change
            const theme = e.target.value;
            if (theme === 'dark') {
                document.body.classList.add('dark-mode');
            } else if (theme === 'light') {
                document.body.classList.remove('dark-mode');
            } else {
                // Auto mode - check system preference
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.body.classList.add('dark-mode');
                } else {
                    document.body.classList.remove('dark-mode');
                }
            }
        });
    });
});
