# Quick Reference for Developers

**Cheat sheet for implementing JRPG pixel UI**

---

## Setup

### 1. Import Design Tokens

```css
@import '/codebases/jrpg-ui-kit/design-tokens/tokens.css';
```

### 2. Import Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
```

### 3. Base HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="tokens.css">
  <title>JRPG UI</title>
</head>
<body>
  <!-- Your app -->
</body>
</html>
```

---

## CSS Essentials

### Pixel-Perfect Rendering

```css
/* Apply to all images and pixel elements */
.pixel {
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
}

/* Disable font smoothing */
body {
  -webkit-font-smoothing: none;
  -moz-osx-font-smoothing: grayscale;
  font-smooth: never;
}
```

### Text with Shadow

```css
.text {
  color: var(--text-primary);
  text-shadow: 2px 2px 0 var(--text-primary-shadow);
}
```

### Panel/Card

```css
.panel {
  background: var(--bg-layer-1);
  border: 4px solid var(--ff-slate-500);
  padding: var(--space-4);
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.5);
}
```

### Button

```css
.button {
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  padding: var(--space-2) var(--space-4);
  background: var(--ct-blue-600);
  color: white;
  border: 3px solid var(--ct-blue-700);
  text-shadow: 2px 2px 0 #000;
  cursor: pointer;
  transition: all 0.15s;
}

.button:hover {
  background: var(--ct-blue-500);
  transform: translateY(-2px);
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.5);
}

.button:active {
  transform: translateY(0);
  box-shadow: none;
}
```

---

## Common Patterns

### HP Bar

```html
<div class="stat-bar">
  <span class="stat-bar__label">HP</span>
  <div class="stat-bar__container">
    <div class="stat-bar__fill" style="width: 75%;"></div>
  </div>
  <span class="stat-bar__value">450/500</span>
</div>
```

```css
.stat-bar {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stat-bar__label {
  font-family: var(--font-primary);
  font-size: 12px;
  color: var(--text-primary);
  text-shadow: 1px 1px 0 #000;
  width: 32px;
}

.stat-bar__container {
  flex: 1;
  height: 8px;
  background: var(--bg-layer-2);
  border: 2px solid var(--ff-slate-500);
  position: relative;
}

.stat-bar__fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(90deg, #40C048 0%, #28A030 100%);
  transition: width 0.3s ease-out;
}

.stat-bar__value {
  font-family: var(--font-mono);
  font-size: 16px;
  color: var(--text-primary);
  text-shadow: 1px 1px 0 #000;
  min-width: 80px;
  text-align: right;
}
```

### Dialog Box

```html
<div class="dialog-box">
  <div class="dialog-box__speaker">HERO</div>
  <p class="dialog-box__text">The legendary sword awaits...</p>
  <span class="dialog-box__indicator">▼</span>
</div>
```

```css
.dialog-box {
  position: fixed;
  bottom: 32px;
  left: 32px;
  right: 32px;
  background: rgba(24, 24, 40, 0.95);
  border: 4px solid var(--ff-slate-500);
  padding: 16px;
  min-height: 96px;
}

.dialog-box__speaker {
  font-family: var(--font-primary);
  font-size: 12px;
  color: var(--text-accent);
  text-shadow: 1px 1px 0 #000;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.dialog-box__text {
  font-family: var(--font-primary);
  font-size: 12px;
  line-height: 1.6;
  color: var(--text-primary);
  text-shadow: 2px 2px 0 #000;
  margin: 0;
}

.dialog-box__indicator {
  position: absolute;
  bottom: 8px;
  right: 8px;
  font-size: 12px;
  color: var(--text-accent);
  animation: blink 0.8s steps(2) infinite;
}

@keyframes blink {
  50% { opacity: 0.3; }
}
```

### Menu Item

```html
<div class="menu-item menu-item--selected">
  <span class="menu-cursor">►</span>
  <span class="menu-label">Items</span>
</div>
```

```css
.menu-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-family: var(--font-primary);
  font-size: 16px;
  color: var(--text-primary);
  text-shadow: 2px 2px 0 #000;
  cursor: pointer;
}

.menu-item:hover {
  background: rgba(64, 96, 240, 0.2);
}

.menu-item--selected {
  color: var(--text-accent);
}

.menu-cursor {
  font-size: 12px;
  animation: cursor-bounce 0.6s ease-in-out infinite;
}

@keyframes cursor-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

.menu-label {
  white-space: nowrap;
}
```

---

## React Components

### Button

```jsx
import { Button } from '/codebases/jrpg-ui-kit/components/buttons/Button';

<Button variant="primary" size="lg" onClick={handleClick}>
  Start Game
</Button>
```

### Dialog Box

```jsx
import { DialogBox } from '/codebases/jrpg-ui-kit/components/dialogs/DialogBox';

<DialogBox 
  speaker="HERO" 
  typewriterSpeed={50}
  onComplete={() => console.log('Done')}
>
  The legendary sword lies beyond the mountains...
</DialogBox>
```

---

## Dos and Don'ts

### ✓ Do

```css
/* Good - multiples of 4px */
padding: 8px 16px;
font-size: 12px;
border: 4px solid;

/* Good - pixel-perfect rendering */
image-rendering: pixelated;

/* Good - hard shadows */
text-shadow: 2px 2px 0 #000;
box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.5);

/* Good - stepped gradient */
background: linear-gradient(90deg, #40C048 0%, #28A030 100%);
```

### ✗ Don't

```css
/* Bad - odd numbers */
padding: 7px 15px;
font-size: 13px;

/* Bad - smooth rendering */
image-rendering: auto;
-webkit-font-smoothing: antialiased;

/* Bad - blur shadows */
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

/* Bad - smooth gradient */
background: linear-gradient(
  90deg,
  #40C048 0%,
  #38B840 25%,
  #30A838 50%,
  #28A030 100%
);
```

---

## Spacing Reference

| Token | Value | Use |
|-------|-------|-----|
| `--space-1` | 4px | Tight gaps, icon spacing |
| `--space-2` | 8px | Standard gap, button padding |
| `--space-3` | 12px | Menu item padding |
| `--space-4` | 16px | Panel padding |
| `--space-6` | 24px | Section spacing |
| `--space-8` | 32px | Screen margins |
| `--space-12` | 48px | Major sections |

---

## Color Reference

| Token | Hex | Use |
|-------|-----|-----|
| `--ct-blue-600` | #2040D0 | Primary actions |
| `--mana-green-600` | #28A030 | Success, HP |
| `--phoenix-red-600` | #D02030 | Danger, errors |
| `--thunder-yellow-500` | #F0C030 | Warnings, accents |
| `--text-primary` | #F8F8F0 | Body text |
| `--bg-layer-1` | #181828 | Panel backgrounds |

---

## Debugging

### Pixel Bleeding

```css
/* Fix blurry pixels */
* {
  transform: translateZ(0);
  image-rendering: pixelated;
}
```

### Font Not Loading

```javascript
// Wait for fonts before rendering
document.fonts.ready.then(() => {
  console.log('Fonts loaded');
  // Render your UI
});
```

### Border Not Pixel-Perfect

```css
/* Ensure box-sizing is correct */
* {
  box-sizing: border-box;
}

/* Use only even border widths */
border: 4px solid; /* Good */
border: 3px solid; /* OK but test carefully */
border: 5px solid; /* Avoid */
```

---

## Performance Tips

1. **Use sprite sheets** for icons
2. **Preload fonts** with `<link rel="preload">`
3. **Use CSS containment** for large lists
4. **Debounce animations** at 60fps max

---

## Testing Checklist

- [ ] Pixel-perfect at 1x, 2x, 3x scale
- [ ] No blurry text or images
- [ ] Colors match design tokens
- [ ] Spacing aligns to 8px grid
- [ ] Works on Chrome, Firefox, Safari
- [ ] Accessible (WCAG AA contrast)
- [ ] Keyboard navigable
- [ ] Touch-friendly on mobile

---

## Further Reading

- [Full implementation guide](../../codebases/jrpg-ui-kit/README.md)
- [Design tokens reference](../../codebases/jrpg-ui-kit/design-tokens/tokens.css)
- [Component documentation](../../codebases/jrpg-ui-kit/components/)
