# Getting Started with JRPG UI Kit

Quick start guide to using the JRPG UI design system in your project.

---

## Installation

### Option 1: Copy Files (Simplest)

```bash
# Copy design tokens
cp design-tokens/tokens.css your-project/src/styles/

# Copy utilities
cp styles/utilities.css your-project/src/styles/

# Copy components you need
cp -r components/buttons your-project/src/components/
```

### Option 2: npm Package (Future)

```bash
npm install @pokemon/jrpg-ui-kit
```

---

## Basic Setup

### 1. Import Design Tokens

In your main CSS file:

```css
/* Import tokens first */
@import './styles/tokens.css';

/* Then utilities */
@import './styles/utilities.css';

/* Your custom styles */
```

### 2. Import Fonts

In your HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap" rel="stylesheet">
```

Or using `@import` in CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');
```

### 3. Set Up Base Styles

```css
body {
  font-family: var(--font-primary);
  background: var(--bg-layer-0);
  color: var(--text-primary);
  margin: 0;
  padding: 0;

  /* Pixel-perfect rendering */
  -webkit-font-smoothing: none;
  -moz-osx-font-smoothing: grayscale;
}

img, canvas, video {
  image-rendering: pixelated;
}
```

---

## Usage Examples

### HTML/CSS Only

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My JRPG Game</title>
  <link rel="stylesheet" href="tokens.css">
  <link rel="stylesheet" href="utilities.css">
</head>
<body>
  <!-- Button -->
  <button class="jrpg-button jrpg-button--primary jrpg-button--lg">
    <span class="jrpg-button__text">Start Game</span>
  </button>

  <!-- Dialog Box -->
  <div class="jrpg-dialog-box jrpg-dialog-box--bottom">
    <div class="jrpg-dialog-box__speaker">HERO</div>
    <div class="jrpg-dialog-box__content">
      <p class="jrpg-dialog-box__text">Welcome to the adventure!</p>
    </div>
  </div>
</body>
</html>
```

### React

```jsx
import React from 'react';
import Button from './components/buttons/Button';
import DialogBox from './components/dialogs/DialogBox';
import StatusBar from './components/status-bars/StatusBar';
import './styles/tokens.css';
import './styles/utilities.css';

function App() {
  return (
    <div className="container p-8">
      <h1 className="text-3xl text-accent text-center mb-6">
        My JRPG Game
      </h1>

      {/* Character Stats */}
      <div className="panel p-6 mb-4">
        <StatusBar
          label="HP"
          current={450}
          max={500}
          type="hp"
        />
        <StatusBar
          label="MP"
          current={90}
          max={150}
          type="mp"
        />
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <Button variant="primary" size="lg">
          Attack
        </Button>
        <Button variant="success">
          Magic
        </Button>
        <Button variant="ghost">
          Item
        </Button>
      </div>

      {/* Dialog */}
      <DialogBox speaker="HERO" typewriterSpeed={50}>
        The adventure begins...
      </DialogBox>
    </div>
  );
}

export default App;
```

### Svelte

```svelte
<script>
  import Button from './components/buttons/Button.svelte';
  import DialogBox from './components/dialogs/DialogBox.svelte';
</script>

<main class="container p-8">
  <h1 class="text-3xl text-accent text-center">My JRPG Game</h1>

  <Button variant="primary" size="lg">
    Start Game
  </Button>

  <DialogBox speaker="HERO">
    Welcome to the adventure!
  </DialogBox>
</main>

<style>
  @import './tokens.css';
  @import './utilities.css';
</style>
```

---

## Common Patterns

### Dialog with Typewriter Effect

```javascript
import { typewriter } from './utils/typewriter';

const dialogElement = document.querySelector('.dialog-text');
const text = 'The legendary sword awaits...';

const controller = typewriter(dialogElement, text, {
  speed: 50,
  onComplete: () => {
    console.log('Text complete!');
    showContinueIndicator();
  }
});

// Skip to end on click
dialogElement.addEventListener('click', () => {
  controller.stop();
});
```

### Animated HP Bar

```javascript
function animateHPBar(element, newValue, maxValue) {
  const percentage = (newValue / maxValue) * 100;
  element.style.width = `${percentage}%`;

  // Change color based on percentage
  if (percentage >= 75) {
    element.style.background = 'var(--hp-full)';
  } else if (percentage >= 50) {
    element.style.background = 'var(--hp-good)';
  } else if (percentage >= 25) {
    element.style.background = 'var(--hp-warning)';
  } else {
    element.style.background = 'var(--hp-critical)';
  }
}
```

### Menu with Keyboard Navigation

```javascript
const menuItems = document.querySelectorAll('.menu-item');
let selectedIndex = 0;

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
    selectedIndex = Math.max(0, selectedIndex - 1);
    updateSelection();
  } else if (e.key === 'ArrowDown') {
    selectedIndex = Math.min(menuItems.length - 1, selectedIndex + 1);
    updateSelection();
  } else if (e.key === 'Enter') {
    activateMenuItem(selectedIndex);
  }
});

function updateSelection() {
  menuItems.forEach((item, index) => {
    item.classList.toggle('menu-item--selected', index === selectedIndex);
  });
}
```

---

## Customization

### Override Colors

```css
:root {
  /* Override primary color */
  --ct-blue-600: #FF4500; /* Now it's red! */

  /* Add custom color */
  --my-custom-color: #8A2BE2;
}

.my-button {
  background: var(--my-custom-color);
}
```

### Create Custom Components

```css
.my-card {
  /* Use design tokens */
  background: var(--bg-layer-1);
  border: var(--border-thick) solid var(--ff-slate-500);
  padding: var(--space-6);
  box-shadow: var(--shadow-box);

  /* Pixel-perfect */
  image-rendering: pixelated;
}

.my-card__title {
  font-family: var(--font-primary);
  font-size: var(--font-size-xl);
  color: var(--text-accent);
  text-shadow: var(--shadow-text);
}
```

---

## Development Workflow

### 1. Start with Tokens

Always use design tokens instead of hardcoded values:

```css
/* Bad */
.element {
  color: #F8F8F0;
  padding: 16px;
  font-size: 12px;
}

/* Good */
.element {
  color: var(--text-primary);
  padding: var(--space-4);
  font-size: var(--font-size-sm);
}
```

### 2. Use Utility Classes

Combine utility classes for rapid prototyping:

```html
<div class="panel p-6 flex flex-col gap-4">
  <h2 class="text-xl text-accent text-shadow">Title</h2>
  <p class="text-primary">Content here...</p>
</div>
```

### 3. Component Structure

Follow the pattern:

```
component/
├── Component.jsx (or .svelte, .vue)
├── Component.css
└── README.md (optional docs)
```

---

## Troubleshooting

### Text Looks Blurry

**Problem:** Font smoothing is enabled

**Solution:**
```css
body {
  -webkit-font-smoothing: none;
  -moz-osx-font-smoothing: grayscale;
  font-smooth: never;
}
```

### Images Look Blurry

**Problem:** Browser is anti-aliasing

**Solution:**
```css
img, canvas, video {
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
}
```

### Spacing Looks Off

**Problem:** Not using 8px grid

**Solution:** Use spacing tokens (multiples of 4px):
```css
/* Use this */
padding: var(--space-4); /* 16px */

/* Not this */
padding: 15px;
```

### Colors Don't Match

**Problem:** Using wrong hex values

**Solution:** Always reference design tokens:
```css
/* Use this */
color: var(--text-primary);

/* Not this */
color: #FFFFFF;
```

---

## Next Steps

1. ✅ Set up tokens and fonts
2. ✅ Import utilities
3. ✅ Build your first component
4. 📖 Read [Quick Reference for Devs](../../notes/design-system/quick-reference-devs.md)
5. 📖 Check [Implementation Checklist](../../notes/design-system/implementation-checklist.md)
6. 🎨 Explore [UI Patterns](../../resources/jrpg-ui/ui-patterns/README.md)

---

## Support

- **Documentation:** [/notes/design-system/](../../notes/design-system/)
- **Examples:** [/codebases/jrpg-ui-kit/examples/](./examples/)
- **Issues:** File in project tracker

---

Happy building! 🎮
