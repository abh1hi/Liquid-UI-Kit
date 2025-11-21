# Liquid Glass UI - CSS Variables Reference

This document provides a detailed reference for all CSS variables (custom properties) used in the Liquid Glass UI library. These variables are defined in the `:root` scope and can be overridden to customize the theme.

## 🎨 Global Theme Colors
These variables control the base appearance of the application.

| Variable | Default (Light) | Default (Dark) | Description |
| :--- | :--- | :--- | :--- |
| `--bg-color` | `#f8fdff` | `#0a0a0a` | Main page background color. |
| `--text-color` | `#1c1b1f` | `#e5e5e5` | Primary text color for headings and body. |
| `--text-secondary` | `#49454f` | `#a0a0a0` | Secondary text color for descriptions and subtitles. |

## 🍭 Pastel Palette
The core identity of the "Liquid Glass" look. These soft colors are used for buttons, highlights, and accents.

| Variable | Default (Light) | Default (Dark) | Usage |
| :--- | :--- | :--- | :--- |
| `--primary-pastel` | `#d3e3fd` | `#4a7fff` | Primary actions, active states. |
| `--secondary-pastel` | `#c4eed0` | `#3dd68c` | Success states, secondary accents. |
| `--tertiary-pastel` | `#f8d7da` | `#ff6b9d` | Floating Action Buttons (FAB), highlights. |
| `--accent-pastel` | `#e8def8` | `#b794f6` | Avatars, special badges. |

### Text Colors for Pastels
Each pastel color has a corresponding text color to ensure readability.

| Variable | Value | Description |
| :--- | :--- | :--- |
| `--primary-text` | `#001d35` | Text on primary pastel backgrounds. |
| `--secondary-text` | `#0f5223` | Text on secondary pastel backgrounds. |
| `--tertiary-text` | `#410e0b` | Text on tertiary pastel backgrounds. |
| `--accent-text` | `#1d192b` | Text on accent pastel backgrounds. |

## 🧊 Glass Effect System
These variables control the "frosted glass" look of panels and overlays.

| Variable | Default (Light) | Default (Dark) | Description |
| :--- | :--- | :--- | :--- |
| `--glass-bg` | `rgba(255, 255, 255, 0.3)` | `rgba(255, 255, 255, 0.05)` | The semi-transparent background of glass elements. |
| `--glass-border` | `rgba(255, 255, 255, 0.5)` | `rgba(255, 255, 255, 0.1)` | The subtle border defining the edges. |
| `--glass-blur` | `20px` | `24px` | The intensity of the background blur (`backdrop-filter`). |
| `--glass-saturate` | `180%` | `200%` | Color saturation boost for background elements. |
| `--glass-shadow` | `0 8px 32px rgba(0,0,0,0.08)` | `... rgba(0,0,0,0.4)` | The soft drop shadow creating depth. |

## 🚦 Status Colors
Standard semantic colors for feedback.

| Variable | Value | Usage |
| :--- | :--- | :--- |
| `--danger-color` | `#b3261e` | Errors, destructive actions. |
| `--success-color` | `#146c2e` | Success messages, completed states. |
| `--warning-color` | `#f9ab00` | Warnings, pending states. |

## 📐 Layout & Spacing
Consistent spacing units to maintain visual rhythm.

| Variable | Value | Pixels |
| :--- | :--- | :--- |
| `--spacing-xs` | `4px` | Extra small spacing. |
| `--spacing-sm` | `8px` | Small spacing (gaps). |
| `--spacing-md` | `16px` | Standard padding/margin. |
| `--spacing-lg` | `24px` | Large sections. |
| `--spacing-xl` | `32px` | Extra large spacing. |

## ⭕ Border Radius
Variables for rounding corners.

| Variable | Value | Usage |
| :--- | :--- | :--- |
| `--radius-sm` | `12px` | Inputs, small cards. |
| `--radius-md` | `16px` | Standard cards. |
| `--radius-lg` | `24px` | Large panels, modals. |
| `--radius-xl` | `32px` | Extra large containers. |
| `--radius-full` | `9999px` | Pills, circular buttons. |

## 🌈 Gradients
| Variable | Description |
| :--- | :--- |
| `--gradient-mesh` | A complex radial gradient used on the `body` background to create the moving color blobs behind the glass. |
| `--glass-highlight` | A linear gradient used in `::before` pseudo-elements to create the "shine" reflection on glass panels. |
