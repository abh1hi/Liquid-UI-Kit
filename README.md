# Liquid UI Kit

A modern, customizable UI component library featuring the **Liquid Glass** aesthetic with smooth animations, dynamic themes, and a comprehensive component playground.

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## ✨ Features

- 🎨 **Liquid Glass Design System** - Beautiful glassmorphism effects with fluid animations
- 🌈 **Dynamic Theming** - Multiple built-in themes with real-time customization
- 🌓 **Dark Mode Support** - Seamless light/dark mode switching
- 📱 **Responsive Design** - Mobile-first approach with desktop optimization
- 🧩 **Modular Components** - Reusable, standalone UI components
- 🎭 **Rich Animation Library** - 100+ iOS-inspired animations
- 🛍️ **E-commerce UI Mockups** - Production-ready application templates
- 🎮 **Interactive Playground** - Live component preview and testing

## 🚀 Quick Start

### Installation

1. Clone the repository:
```bash
git clone https://github.com/abh1hi/Liquid-UI-Kit.git
cd Liquid-UI-Kit
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

3. Navigate to `http://localhost:8000` to view the playground.

### Basic Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="liquid_glass_themes.css">
</head>
<body>
    <!-- Your Liquid UI components here -->
</body>
</html>
```

## 📂 Project Structure

```
Liquid-UI-Kit/
├── Glass-liquid-components/     # Core liquid glass components
│   ├── LiquidButton/           # Animated button component
│   ├── LiquidCard/             # Glass card component
│   ├── LiquidDock/             # macOS-style dock
│   └── LiquidSwitcher/         # Animated toggle switch
├── components/                  
│   └── animations/             # Animation library (100+ animations)
│       └── library/            # Individual animation demos
├── application-ui mockups/      # Full application UI templates
│   └── commerce-transaction-apps/
│       └── ecommerce/          # E-commerce UI mockup
├── css/                        # Core stylesheets
│   ├── main.css               # Main stylesheet
│   └── variables.css          # CSS custom properties
├── js/                         # JavaScript modules
│   ├── app.js                 # Main application logic
│   └── theme-manager.js       # Theme switching system
├── index.html                  # Component playground
├── cart.html                   # Shopping cart page
├── checkout.html               # Checkout page
├── favourites.html             # Favorites page
├── ui_components.json          # Component catalog
├── ui_animations.json          # Animation catalog
└── ui_mockup.json             # UI mockup definitions
```

## 🎨 Components

### Liquid Glass Components

#### LiquidButton
Animated button with liquid glass morphing effects.

```html
<link rel="stylesheet" href="Glass-liquid-components/LiquidButton/LiquidButton.css">
<script src="Glass-liquid-components/LiquidButton/LiquidButton.js"></script>

<button class="liquid-button">Click Me</button>
```

#### LiquidCard
Glass-effect card with depth and blur.

```html
<link rel="stylesheet" href="Glass-liquid-components/LiquidCard/LiquidCard.css">

<div class="liquid-card">
    <h3>Card Title</h3>
    <p>Card content goes here</p>
</div>
```

#### LiquidDock
macOS-style application dock with hover animations.

```html
<link rel="stylesheet" href="Glass-liquid-components/LiquidDock/LiquidDock.css">
<script src="Glass-liquid-components/LiquidDock/LiquidDock.js"></script>

<!-- See Glass-liquid-components/LiquidDock/index.html for usage -->
```

#### LiquidSwitcher
Smooth toggle switch with liquid animations.

```html
<link rel="stylesheet" href="Glass-liquid-components/LiquidSwitcher/LiquidSwitcher.css">
<script src="Glass-liquid-components/LiquidSwitcher/LiquidSwitcher.js"></script>

<label class="liquid-switcher">
    <input type="checkbox">
    <span class="slider"></span>
</label>
```

### Component Categories

The library includes 300+ components across various categories:

- **Core UI Elements** - Buttons, toggles, sliders, badges, tooltips
- **Form Inputs** - Text fields, date pickers, dropdowns, file uploads
- **Navigation** - App bars, bottom navigation, tabs, drawers
- **Cards & Display** - Product cards, profile cards, pricing cards
- **Media Components** - Image viewers, video players, galleries
- **Dialogs & Modals** - Alerts, action sheets, bottom sheets
- **E-commerce UI** - Product grids, cart, checkout, order tracking
- **Dashboard** - Analytics widgets, KPI cards, charts

See [`ui_components.json`](ui_components.json) for the complete list.

## 🎭 Animations

The library includes **100+ iOS-inspired animations**:

- Spring physics animations
- Gesture-based interactions
- Page transitions
- Morphing effects
- Material Design animations
- Symbol effects

Browse the animation library in `components/animations/library/` or check [`ui_animations.json`](ui_animations.json).

### Example Animations

- **Action Sheet Slide Up** - Bottom sheet reveal animation
- **Alert Pop In** - Spring-based modal popup
- **Pull to Refresh** - Elastic scroll animation
- **Swipe to Delete** - Interactive list item removal
- **Button Spring Release** - Tactile button feedback

## 🌈 Themes

### Built-in Themes

- **Pastel (Default)** - Soft, calming colors
- **Oceanic** - Cool blue tones
- **Sunset** - Warm orange and pink gradients
- **Forest** - Natural green palette
- **Dark Mode** - High-contrast dark theme

### Custom Theme Creation

1. Open the playground (`index.html`)
2. Click the palette icon in the top bar
3. Adjust colors in the Theme Customizer
4. Click "Export CSS" to save your custom theme

### Programmatic Theme Switching

```javascript
// Change theme
document.documentElement.setAttribute('data-theme', 'oceanic');

// Toggle dark mode
document.documentElement.setAttribute('data-mode', 'dark');
```

## 📱 UI Mockups

Production-ready application UIs are available in `application-ui mockups/`:

### E-commerce Application
- **Desktop & Mobile Responsive**
- Product browsing with filters
- Shopping cart management
- Checkout flow
- Favorites/wishlist

Files:
- `cart.html` - Shopping cart page
- `checkout.html` - Checkout page
- `favourites.html` - Wishlist page
- `application-ui mockups/commerce-transaction-apps/ecommerce/` - Main e-commerce UI

## 📖 Documentation

Comprehensive guides are available:

- [`LIQUID_COMPONENTS_GUIDE.md`](LIQUID_COMPONENTS_GUIDE.md) - Component usage and patterns
- [`LIQUID_GLASS_DEEP_DIVE.md`](LIQUID_GLASS_DEEP_DIVE.md) - Understanding the Liquid Glass design system
- [`LIQUID_QUICK_REF.md`](LIQUID_QUICK_REF.md) - Quick reference guide
- [`CSS_VARIABLES.md`](CSS_VARIABLES.md) - CSS custom properties reference
- [`DEVELOPER_GUIDE.md`](DEVELOPER_GUIDE.md) - Development guidelines
- [`LIQUID_MIGRATION.md`](LIQUID_MIGRATION.md) - Migration guide for existing projects

## 🛠️ Development

### CSS Variables

The design system uses CSS custom properties for easy customization:

```css
:root {
    --primary-color: #d3e3fd;
    --secondary-color: #c4eed0;
    --background-color: #f8fdff;
    --text-color: #1c1b1f;
    --glass-opacity: 0.7;
    --glass-blur: 10px;
    /* ... more variables */
}
```

See [`CSS_VARIABLES.md`](CSS_VARIABLES.md) for the complete list.

### Adding New Components

1. Create component files in `components/` or `Glass-liquid-components/`
2. Follow the liquid glass design patterns
3. Use theme variables from `css/variables.css`
4. Add entry to `ui_components.json`
5. Test in the playground

### Animation Development

1. Create animation in `components/animations/library/[animation-name]/`
2. Include `index.html` and `styles.css`
3. Add metadata to `ui_animations.json`
4. Use spring physics for natural motion

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-component`)
3. Follow the existing code style and design patterns
4. Use semantic commit messages
5. Test your changes in the playground
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from iOS, Material Design, and Fluent Design
- Animation patterns inspired by Apple's Human Interface Guidelines
- Community contributions and feedback

## 🔗 Links

- **Repository**: [https://github.com/abh1hi/Liquid-UI-Kit](https://github.com/abh1hi/Liquid-UI-Kit)
- **Issues**: [https://github.com/abh1hi/Liquid-UI-Kit/issues](https://github.com/abh1hi/Liquid-UI-Kit/issues)

## 📬 Contact

For questions, suggestions, or feedback, please open an issue on GitHub.

---

Made with ❤️ by [abh1hi](https://github.com/abh1hi)
