// MacOS-style Dock Magnification
document.addEventListener('DOMContentLoaded', () => {
    const dock = document.querySelector('.dock-items');
    const items = document.querySelectorAll('.dock-item');

    if (!dock) return;

    const maxScale = 1.5;
    const range = 150; // Distance of effect

    dock.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;

        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            const itemCenterX = rect.left + rect.width / 2;

            // Calculate distance from mouse to item center
            const distance = Math.abs(mouseX - itemCenterX);

            let scale = 1;

            if (distance < range) {
                // Calculate scale based on distance (closer = larger)
                // Cosine curve for smooth falloff
                const normalizedDistance = distance / range;
                const curve = Math.cos(normalizedDistance * Math.PI / 2);
                scale = 1 + (maxScale - 1) * curve;
            }

            item.style.transform = `scale(${scale})`;
            item.style.marginBottom = `${(scale - 1) * 20}px`; // Lift up slightly
        });
    });

    dock.addEventListener('mouseleave', () => {
        items.forEach(item => {
            item.style.transform = 'scale(1)';
            item.style.marginBottom = '0';
        });
    });
});
