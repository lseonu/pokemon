# JRPG UI Kit - Implementation Code

Production-ready components, design tokens, and utilities for building 16-bit SNES-style interfaces.

## Contents

### Core System
- **[design-tokens/](./design-tokens/)** - CSS variables, JSON tokens, and Sass variables
- **[styles/](./styles/)** - Base styles, CSS utilities, and theme system
- **[utils/](./utils/)** - JavaScript utilities and helper functions

### Components
- **[components/buttons/](./components/buttons/)** - Pixel-perfect button components
- **[components/dialogs/](./components/dialogs/)** - Dialog boxes and text windows
- **[components/menus/](./components/menus/)** - Navigation menus and command lists
- **[components/cards/](./components/cards/)** - Item cards, character cards, info panels
- **[components/status-bars/](./components/status-bars/)** - HP/MP bars and progress indicators

### Examples & Demos
- **[examples/](./examples/)** - Complete working examples and demo pages

## Quick Start

### 1. Install Design Tokens

```bash
# Copy tokens to your project
cp design-tokens/tokens.css src/styles/
```

### 2. Import Base Styles

```css
@import './tokens.css';
@import './base.css';
```

### 3. Use Components

```jsx
import { Button } from './components/buttons/Button';
import { DialogBox } from './components/dialogs/DialogBox';

<DialogBox>
  <p>The legendary sword awaits...</p>
  <Button variant="primary">Accept</Button>
</DialogBox>
```

## Framework Support

This UI kit provides implementations for:
- ✅ **React** - Primary focus (hooks, TypeScript)
- ✅ **Svelte** - Full parity with React
- ✅ **Vanilla HTML/CSS** - No framework required
- 🚧 **Vue** - Planned

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

**Required features:**
- CSS Custom Properties
- CSS Grid
- `image-rendering: pixelated`

## Performance

- 🎯 **Bundle size:** < 20KB (minified + gzipped)
- ⚡ **First Paint:** < 500ms
- 📦 **Tree-shakeable:** Import only what you need

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## Related Documentation

- **Design Research:** [/resources/jrpg-ui/](../../resources/jrpg-ui/)
- **Quick Reference:** [/notes/design-system/](../../notes/design-system/)
- **Change History:** [/history/](../../history/)
