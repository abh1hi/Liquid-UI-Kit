function setActive(element) {
    // Remove active class from all siblings
    const siblings = element.parentElement.children;
    for (let item of siblings) {
        item.classList.remove('active');
    }
    // Add active class to clicked element
    element.classList.add('active');
}

// Category Filter Logic (Simple visual toggle)
document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.mobile-view .glass-button.sm');

    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all
            categoryButtons.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            btn.classList.add('active');
        });
    });
});
