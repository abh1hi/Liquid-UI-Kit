# 🎨 Liquid Glass Quick Reference

## File Structure

```
ui-kiy/
├── css/
│   └── variables.css          # Main theme variables
├── liquid_variables.css        # Liquid glass variables ⭐ NEW
├── liquid_playground.html      # Full component showcase ⭐ NEW
├── Glass-liquid-components/
│   ├── LiquidButton/
│   │   ├── index.html         # ⭐ UPDATED
│   │   ├── style.css          # ⭐ UPDATED
│   │   └── script.js          # ⭐ UPDATED
│   ├── LiquidCard/
│   ├── LiquidDock/
│   └── LiquidSwitcher/
├── LIQUID_COMPONENTS_GUIDE.md  # Full documentation ⭐ NEW
└── LIQUID_QUICK_REF.md         # This file ⭐ NEW
```

## 🚀 Quick Start (3 Steps)

### 1. Include CSS Files

```html
<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="liquid_variables.css">
```

### 2. Add SVG Filters

```html
<svg class="filters" style="position: absolute; width: 0; height: 0; pointer-events: none;" aria-hidden="true">
    <defs>
        <filter id="glass-distortion">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
        </filter>
    </defs>
</svg>
```

### 3. Use Components

```html
<button class="liquid-button">
    <div class="liquid-layers">
        <div class="liquid-effect"></div>
        <div class="liquid-tint"></div>
        <div class="liquid-shine"></div>
    </div>
    <span class="liquid-text">Click Me</span>
</button>
```

## 📦 Component Snippets

### Liquid Button

```html
<!-- Basic -->
<button class="liquid-button">
    <div class="liquid-layers">
        <div class="liquid-effect"></div>
        <div class="liquid-tint"></div>
        <div class="liquid-shine"></div>
    </div>
    <span class="liquid-text">Click Me</span>
</button>

<!-- Variants: Add these classes -->
primary | secondary | accent        (colors)
small | large                        (sizes)
square | rounded                     (shapes)
loading                              (states)
```

### Liquid Card

```html
<div class="liquidGlass-wrapper liquid-card">
    <div class="liquidGlass-effect"></div>
    <div class="liquidGlass-tint"></div>
    <div class="liquidGlass-shine"></div>
    <div class="liquidGlass-content">
        <!-- Your content here -->
    </div>
</div>
```

### Liquid Dock

```html
<div class="liquidGlass-wrapper liquid-dock">
    <div class="liquidGlass-effect"></div>
    <div class="liquidGlass-tint"></div>
    <div class="liquidGlass-shine"></div>
    <div class="liquidGlass-content" style="display: flex; gap: var(--spacing-sm);">
        <div class="liquid-dock-item">🏠</div>
        <div class="liquid-dock-item">🔍</div>
    </div>
</div>
```

### Liquid Switcher

```html
<div class="liquid-switcher">
    <button class="liquid-switcher-option active">Option 1</button>
    <button class="liquid-switcher-option">Option 2</button>
    <button class="liquid-switcher-option">Option 3</button>
</div>
```

## 🎨 Theme Switching

```javascript
// Light (default)
document.documentElement.removeAttribute('data-theme');

// Dark
document.documentElement.setAttribute('data-theme', 'dark');

// Oceanic / Sunset / Forest
document.documentElement.setAttribute('data-theme', 'oceanic');
```

## 🎯 Most Used Variables

### Colors
```css
var(--liquid-action)           /* Theme accent color */
var(--text-color)              /* Main text */
var(--bg-color)                /* Background */
var(--primary-pastel)          /* Primary theme color */
```

### Glass
```css
var(--liquid-glass-base)       /* Base glass background */
var(--liquid-glass-tint)       /* Tint overlay */
var(--liquid-blur)             /* Blur amount */
```

### Spacing
```css
var(--spacing-xs)   /* 4px */
var(--spacing-sm)   /* 8px */
var(--spacing-md)   /* 16px */
var(--spacing-lg)   /* 24px */
var(--spacing-xl)   /* 32px */
```

### Border Radius
```css
var(--radius-sm)    /* 8px */
var(--radius-md)    /* 16px */
var(--radius-lg)    /* 24px */
var(--radius-full)  /* 9999px (pill) */
```

### Transitions
```css
var(--liquid-transition)        /* Standard: 0.4s elastic */
var(--liquid-transition-fast)   /* Fast: 0.3s elastic */
```

## 🛠️ Common Customizations

### Custom Button Color

```css
.liquid-button.my-color {
    box-shadow: var(--liquid-card-shadow), 0 0 0 2px #yourcolor;
}

.liquid-button.my-color .liquid-tint {
    background: color-mix(in srgb, #yourcolor 20%, var(--liquid-glass-tint));
}
```

### Adjust Blur Globally

```css
:root {
    --liquid-blur: 12px;  /* Default: 8px */
}
```

### Slower Animations

```css
.liquid-button {
    transition-duration: 0.6s;  /* Default: 0.4s */
}
```

## 🔍 Debugging

### Components not showing?
1. ✅ Check SVG filters are in the page
2. ✅ Verify CSS files are loaded
3. ✅ Check browser supports backdrop-filter

### Theme not switching?
1. ✅ data-theme on `<html>` element
2. ✅ variables.css loaded first
3. ✅ No CSS conflicts

### Performance slow?
1. ✅ Reduce number of components
2. ✅ Simplify layers (remove effect layer)
3. ✅ Disable animations on mobile

## 📱 Resources

| Resource | Path |
|----------|------|
| **Full Guide** | `LIQUID_COMPONENTS_GUIDE.md` |
| **Playground** | `liquid_playground.html` |
| **Variables** | `liquid_variables.css` |
| **Theme Vars** | `css/variables.css` |

## 💡 Tips

- **Start Simple**: Use `liquid-button` first, then add variants
- **Consistency**: Use 1-2 variants per page max
- **Performance**: Limit to key interactive elements
- **Accessibility**: Always include focus states
- **Mobile**: Test on actual devices for performance

## 🎓 Learn More

1. Open `liquid_playground.html` - Interactive demos
2. Read `LIQUID_COMPONENTS_GUIDE.md` - Full documentation
3. Inspect components in DevTools - See how it works
4. Check `Glass-liquid-components/*/` - Individual demos

---

**Need Help?** Check the full guide: `LIQUID_COMPONENTS_GUIDE.md`

**Version:** 2.0 | **Updated:** 2025-11-21
