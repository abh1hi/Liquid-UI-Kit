class App {
    constructor() {
        this.nav = document.getElementById('sidebar-nav');
        this.stage = document.getElementById('component-stage');
        this.title = document.getElementById('current-component-title');
        this.sidebarNav = document.getElementById('sidebar-nav');

        // Component Registry
        this.components = {
            'Core': [
                { id: 'buttons', name: 'Buttons', path: 'components/core/buttons/buttons.html' },
                { id: 'inputs', name: 'Inputs', path: 'components/core/inputs/inputs.html' },
                { id: 'toggles', name: 'Toggles & Switches', path: 'components/core/toggles/toggles.html' },
                { id: 'sliders', name: 'Sliders', path: 'components/core/sliders/sliders.html' },
                { id: 'badges', name: 'Badges & Chips', path: 'components/core/badges/badges.html' },
                { id: 'icon-button', name: 'Icon Button', path: 'components/core/icon-button/icon-button.html' },
                { id: 'segmented-buttons', name: 'Segmented Buttons', path: 'components/core/segmented-buttons/segmented-buttons.html' },
                { id: 'divider', name: 'Divider', path: 'components/core/divider/divider.html' },
                { id: 'spinner', name: 'Spinner', path: 'components/core/spinner/spinner.html' }
            ],
            'Navigation': [
                { id: 'bottom-nav', name: 'Bottom Navigation', path: 'components/navigation/bottom-nav.html' },
                { id: 'tabs', name: 'Tabs', path: 'components/navigation/tabs/tabs.html' },
                { id: 'breadcrumbs', name: 'Breadcrumbs', path: 'components/navigation/breadcrumbs/breadcrumbs.html' },
                { id: 'app-bar', name: 'App Bar', path: 'components/navigation/app-bar/app-bar.html' },
                { id: 'drawer', name: 'Navigation Drawer', path: 'components/navigation/drawer/drawer.html' },
                { id: 'drawer', name: 'Navigation Drawer', path: 'components/navigation/drawer/drawer.html' },
                { id: 'stepper', name: 'Stepper', path: 'components/navigation/stepper/stepper.html' },
                { id: 'rail', name: 'Navigation Rail', path: 'components/navigation/rail/rail.html' },
                { id: 'command-palette', name: 'Command Palette', path: 'components/navigation/command-palette/command-palette.html' }
            ],
            'Feedback': [
                { id: 'modals', name: 'Modals', path: 'components/feedback/modals/modals.html' },
                { id: 'toasts', name: 'Toasts', path: 'components/feedback/toasts/toasts.html' },
                { id: 'tooltips', name: 'Tooltips', path: 'components/feedback/tooltips/tooltips.html' },
                { id: 'progress', name: 'Progress', path: 'components/feedback/progress/progress.html' },
                { id: 'skeletons', name: 'Skeletons', path: 'components/feedback/skeletons/skeletons.html' },
                { id: 'confirmation-dialog', name: 'Confirmation Dialog', path: 'components/feedback/confirmation-dialog/confirmation-dialog.html' },
                { id: 'action-sheet', name: 'Action Sheet', path: 'components/feedback/action-sheet/action-sheet.html' },
                { id: 'action-sheet', name: 'Action Sheet', path: 'components/feedback/action-sheet/action-sheet.html' },
                { id: 'bottom-sheet', name: 'Bottom Sheet', path: 'components/feedback/bottom-sheet/bottom-sheet.html' },
                { id: 'notifications', name: 'Notification Center', path: 'components/feedback/notifications/notifications.html' }
            ],
            'Data Display': [
                { id: 'cards', name: 'Cards', path: 'components/data-display/cards/cards.html' },
                { id: 'avatars', name: 'Avatars', path: 'components/data-display/avatars/avatars.html' },
                { id: 'lists', name: 'Lists', path: 'components/data-display/lists/lists.html' },
                { id: 'tables', name: 'Tables', path: 'components/data-display/tables/tables.html' },
                { id: 'accordions', name: 'Accordions', path: 'components/data-display/accordions/accordions.html' },
                { id: 'timeline', name: 'Timeline', path: 'components/data-display/timeline/timeline.html' },
                { id: 'tree-view', name: 'Tree View', path: 'components/data-display/tree-view/tree-view.html' },
                { id: 'kanban', name: 'Kanban Board', path: 'components/data-display/kanban/kanban.html' },
                { id: 'calendar', name: 'Calendar View', path: 'components/data-display/calendar/calendar.html' },
                { id: 'pagination', name: 'Pagination', path: 'components/data-display/pagination/pagination.html' },
                { id: 'pricing', name: 'Pricing Cards', path: 'components/data-display/pricing/pricing.html' },
                { id: 'weather', name: 'Weather Card', path: 'components/data-display/weather/weather.html' },
                { id: 'countdown', name: 'Countdown Timer', path: 'components/data-display/countdown/countdown.html' }
            ],
            'Advanced Forms': [
                { id: 'dropdowns', name: 'Dropdowns', path: 'components/forms-advanced/dropdowns/dropdowns.html' },
                { id: 'file-upload', name: 'File Upload', path: 'components/forms-advanced/file-upload/file-upload.html' },
                { id: 'otp', name: 'OTP Input', path: 'components/forms-advanced/otp/otp.html' },
                { id: 'date-picker', name: 'Date Picker', path: 'components/forms-advanced/date-picker/date-picker.html' },
                { id: 'rich-text', name: 'Rich Text Editor', path: 'components/forms-advanced/rich-text/rich-text.html' },
                { id: 'signature', name: 'Signature Pad', path: 'components/forms-advanced/signature/signature.html' },
                { id: 'autocomplete', name: 'Autocomplete', path: 'components/forms-advanced/autocomplete/autocomplete.html' }
            ],
            'Media': [
                { id: 'carousel', name: 'Carousel', path: 'components/media/carousel/carousel.html' },
                { id: 'video-player', name: 'Video Player', path: 'components/media/video-player/video-player.html' },
                { id: 'audio-player', name: 'Audio Player', path: 'components/media/audio-player/audio-player.html' },
                { id: 'lightbox', name: 'Lightbox', path: 'components/media/lightbox/lightbox.html' },
                { id: 'gallery', name: 'Gallery Grid', path: 'components/media/gallery/gallery.html' }
            ],
            'Chat': [
                { id: 'chat', name: 'Chat Interface', path: 'components/chat/chat.html' }
            ],
            'Ecommerce': [
                { id: 'product-card', name: 'Product Cards', path: 'components/ecommerce/product-card/product-card.html' },
                { id: 'cart', name: 'Shopping Cart', path: 'components/ecommerce/cart/cart.html' }
            ],
            'Dashboard': [
                { id: 'stats', name: 'Stats & Charts', path: 'components/dashboard/stats/stats.html' }
            ],
            'Extra Forms': [
                { id: 'forms-extra', name: 'Time, Rating & Color', path: 'components/forms-extra/forms-extra.html' }
            ],
            'Screens': [
                { id: 'login', name: 'Login / Signup', path: 'components/screens/login/login.html' },
                { id: 'profile', name: 'User Profile', path: 'components/screens/profile/profile.html' },
                { id: 'settings', name: 'Settings', path: 'components/screens/settings/settings.html' },
                { id: 'splash', name: 'Splash Screen', path: 'components/screens/splash/splash.html' },
                { id: 'onboarding', name: 'Onboarding', path: 'components/screens/onboarding/onboarding.html' },
                { id: 'empty-state', name: 'Empty State', path: 'components/screens/empty-state/empty-state.html' },
                { id: 'error', name: 'Error Screens', path: 'components/screens/error/error.html' }
            ],
            'Advanced': [
                { id: 'drag-drop', name: 'Drag & Drop', path: 'components/advanced/drag-drop/drag-drop.html' }
            ],
            'Animations': [
                { id: 'animation-library', name: 'Animation Library', path: 'components/animations/library/index.html' },
                { id: 'animations-showcase', name: 'Showcase', path: 'components/animations/animations.html' }
            ],
            'Liquid Glass': [
                { id: 'liquid-button', name: 'Liquid Button', path: 'Glass-liquid-components/LiquidButton/index.html' },
                { id: 'liquid-card', name: 'Liquid Card', path: 'Glass-liquid-components/LiquidCard/index.html' },
                { id: 'liquid-dock', name: 'Liquid Dock', path: 'Glass-liquid-components/LiquidDock/index.html' },
                { id: 'liquid-switcher', name: 'Liquid Switcher', path: 'Glass-liquid-components/LiquidSwitcher/index.html' }
            ],
            'App UI Mockups': [
                { id: 'ecommerce-mockup', name: 'Ecommerce', path: 'application-ui mockups/Commerce_Transaction_Apps/Ecommerce/index.html' }
            ]
        };

        this.init();
    }

    init() {
        this.renderSidebar();
        this.handleNavigation();
        this.handleMobileMenu();

        // Load initial component
        this.loadComponent('components/core/buttons/buttons.html');
    }

    renderSidebar() {
        let html = '';
        for (const [group, items] of Object.entries(this.components)) {
            html += `
                <div class="nav-group">
                    <div class="nav-group-title">${group}</div>
                    ${items.map(item => `
                        <a class="nav-link" data-id="${item.id}" data-path="${item.path}">
                            ${item.name}
                        </a>
                    `).join('')}
                </div>
            `;
        }
        this.nav.innerHTML = html;
    }

    handleNavigation() {
        this.nav.addEventListener('click', async (e) => {
            const link = e.target.closest('.nav-link');
            if (!link) return;

            // Active state
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Load component
            const path = link.dataset.path;
            const name = link.textContent.trim();

            this.title.textContent = name;
            await this.loadComponent(path);
        });
    }

    handleMobileMenu() {
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.getElementById('sidebar-overlay');

        function toggleSidebar() {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        }

        function closeSidebar() {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        }

        if (mobileBtn) mobileBtn.addEventListener('click', toggleSidebar);
        if (overlay) overlay.addEventListener('click', closeSidebar);

        // Close sidebar on navigation (mobile)
        if (this.sidebarNav) {
            this.sidebarNav.addEventListener('click', (e) => {
                if (e.target.classList.contains('nav-link') && window.innerWidth <= 768) {
                    closeSidebar();
                }
            });
        }
    }

    async loadComponent(path) {
        try {
            this.stage.innerHTML = '<div class="p-md text-center">Loading...</div>';

            // Check if it's a full page mockup or liquid component
            if (path.includes('application-ui mockups') || path.includes('Glass liquid components')) {
                this.stage.innerHTML = `<iframe src="${path}" class="mockup-frame"></iframe>`;
                return;
            }

            const response = await fetch(path);
            if (!response.ok) throw new Error('Failed to load');
            const html = await response.text();

            // Render
            this.stage.innerHTML = html;

            // Execute scripts if any
            const scripts = this.stage.querySelectorAll('script');
            scripts.forEach(oldScript => {
                const newScript = document.createElement('script');
                Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
                newScript.appendChild(document.createTextNode(oldScript.innerHTML));
                oldScript.parentNode.replaceChild(newScript, oldScript);
            });

        } catch (error) {
            console.error(error);
            this.stage.innerHTML = `
                <div class="p-md text-center text-caption">
                    <p>Component source not found or cannot be loaded directly.</p>
                    <p>Path: ${path}</p>
                    <small>If using file:// protocol, browsers block imports. Use a local server.</small>
                </div>
            `;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});
