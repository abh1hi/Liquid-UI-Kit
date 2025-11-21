// Liquid Card Tilt Effect
document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.liquid-card');
    const layers = document.querySelector('.liquid-layers');

    if (!card || !layers) return;

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation based on mouse position
        const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg rotation
        const rotateY = ((x - centerX) / centerX) * 5;

        // Apply tilt to the whole card
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;

        // Move the internal layers slightly for depth
        layers.style.transform = `translateX(${-rotateY}px) translateY(${-rotateX}px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        layers.style.transform = 'translate(0, 0)';
    });
});
