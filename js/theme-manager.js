class ThemeManager {
    constructor() {
        this.themeSelect = document.getElementById('theme-select');
        this.toggleBtn = document.getElementById('toggle-mode');
        this.customizeBtn = document.getElementById('customize-btn');
        this.customizerPanel = document.getElementById('customizer-panel');
        this.closeCustomizerBtn = document.getElementById('close-customizer');
        this.body = document.body;

        // Customizer Inputs
        this.inputs = {
            primary: document.getElementById('custom-primary'),
            secondary: document.getElementById('custom-secondary'),
            bg: document.getElementById('custom-bg'),
            text: document.getElementById('custom-text'),
            primaryText: document.getElementById('custom-primary-text'),
            secondaryText: document.getElementById('custom-secondary-text'),
            bgText: document.getElementById('custom-bg-text'),
            textText: document.getElementById('custom-text-text')
        };

        // Actions
        this.applyBtn = document.getElementById('apply-theme');
        this.saveBtn = document.getElementById('save-theme');
        this.exportBtn = document.getElementById('export-theme');
        this.resetBtn = document.getElementById('reset-theme');

        this.currentTheme = localStorage.getItem('ui-kit-theme') || 'default';
        this.customThemes = JSON.parse(localStorage.getItem('ui-kit-custom-themes') || '{}');

        this.init();
    }

    init() {
        // Set initial theme
        this.setTheme(this.currentTheme);
        this.themeSelect.value = this.currentTheme;
        this.loadCustomThemesIntoSelect();

        // Event Listeners
        this.themeSelect.addEventListener('change', (e) => {
            this.setTheme(e.target.value);
        });

        this.toggleBtn.addEventListener('click', () => {
            if (this.currentTheme === 'dark') {
                this.setTheme('default');
                this.themeSelect.value = 'default';
            } else {
                this.setTheme('dark');
                this.themeSelect.value = 'dark';
            }
        });

        // Customizer Toggle
        if (this.customizeBtn) {
            this.customizeBtn.addEventListener('click', () => this.toggleCustomizer(true));
        }
        if (this.closeCustomizerBtn) {
            this.closeCustomizerBtn.addEventListener('click', () => this.toggleCustomizer(false));
        }

        // Input Sync
        this.setupInputSync('primary', 'primaryText');
        this.setupInputSync('secondary', 'secondaryText');
        this.setupInputSync('bg', 'bgText');
        this.setupInputSync('text', 'textText');

        // Actions
        if (this.applyBtn) this.applyBtn.addEventListener('click', () => this.applyCustomTheme());
        if (this.saveBtn) this.saveBtn.addEventListener('click', () => this.saveCustomTheme());
        if (this.exportBtn) this.exportBtn.addEventListener('click', () => this.exportCustomTheme());
        if (this.resetBtn) this.resetBtn.addEventListener('click', () => this.resetTheme());
    }

    toggleCustomizer(show) {
        if (show) {
            this.customizerPanel.classList.add('active');
        } else {
            this.customizerPanel.classList.remove('active');
        }
    }

    setupInputSync(colorId, textId) {
        const colorInput = this.inputs[colorId];
        const textInput = this.inputs[textId];

        if (!colorInput || !textInput) return;

        colorInput.addEventListener('input', (e) => {
            textInput.value = e.target.value;
            this.previewColor(colorId, e.target.value);
        });

        textInput.addEventListener('change', (e) => {
            colorInput.value = e.target.value;
            this.previewColor(colorId, e.target.value);
        });
    }

    previewColor(type, value) {
        const root = document.documentElement;
        switch (type) {
            case 'primary':
                root.style.setProperty('--primary-pastel', value);
                break;
            case 'secondary':
                root.style.setProperty('--secondary-pastel', value);
                break;
            case 'bg':
                root.style.setProperty('--bg-color', value);
                break;
            case 'text':
                root.style.setProperty('--text-color', value);
                break;
        }
    }

    applyCustomTheme() {
        // Already applied via preview, but we can persist this state if needed
        this.body.setAttribute('data-theme', 'custom');
    }

    saveCustomTheme() {
        const name = prompt('Enter a name for your theme:');
        if (!name) return;

        const themeData = {
            '--primary-pastel': this.inputs.primary.value,
            '--secondary-pastel': this.inputs.secondary.value,
            '--bg-color': this.inputs.bg.value,
            '--text-color': this.inputs.text.value
        };

        this.customThemes[name] = themeData;
        localStorage.setItem('ui-kit-custom-themes', JSON.stringify(this.customThemes));

        this.loadCustomThemesIntoSelect();
        this.setTheme(name);
        this.themeSelect.value = name;
        alert('Theme saved!');
    }

    loadCustomThemesIntoSelect() {
        // Clear existing custom options
        Array.from(this.themeSelect.options).forEach(opt => {
            if (opt.dataset.custom) opt.remove();
        });

        // Add custom themes
        for (const [name, data] of Object.entries(this.customThemes)) {
            const option = document.createElement('option');
            option.value = name;
            option.textContent = name;
            option.dataset.custom = "true";
            this.themeSelect.appendChild(option);
        }
    }

    setTheme(theme) {
        this.currentTheme = theme;
        localStorage.setItem('ui-kit-theme', theme);

        // Check if it's a custom theme
        if (this.customThemes[theme]) {
            this.body.setAttribute('data-theme', 'custom');
            const data = this.customThemes[theme];
            const root = document.documentElement;
            for (const [key, value] of Object.entries(data)) {
                root.style.setProperty(key, value);
            }
        } else {
            // Predefined theme
            this.body.setAttribute('data-theme', theme);
            // Reset inline styles
            document.documentElement.style = '';
        }

        // Update toggle icon
        const icon = this.toggleBtn.querySelector('.material-icons-round');
        if (theme === 'dark') {
            icon.textContent = 'light_mode';
            this.toggleBtn.title = "Switch to Light Mode";
        } else {
            icon.textContent = 'dark_mode';
            this.toggleBtn.title = "Switch to Dark Mode";
        }
    }

    exportTheme() {
        const themeData = {
            '--primary-pastel': this.inputs.primary.value,
            '--secondary-pastel': this.inputs.secondary.value,
            '--bg-color': this.inputs.bg.value,
            '--text-color': this.inputs.text.value
        };

        let cssContent = `:root {\n`;
        for (const [key, value] of Object.entries(themeData)) {
            cssContent += `    ${key}: ${value};\n`;
        }
        cssContent += `}`;

        const blob = new Blob([cssContent], { type: 'text/css' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'custom-theme.css';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    resetTheme() {
        this.setTheme('default');
        this.themeSelect.value = 'default';
        document.documentElement.style = '';

        // Reset inputs
        this.inputs.primary.value = '#d3e3fd';
        this.inputs.primaryText.value = '#d3e3fd';
        // ... reset others if needed
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new ThemeManager();
});
