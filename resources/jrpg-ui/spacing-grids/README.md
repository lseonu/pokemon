# Spacing & Grid Systems

Pixel-perfect spacing aligned to authentic 16-bit JRPG layout constraints.

---

## The 8px Base Grid

SNES hardware used **8x8 pixel tiles** as the fundamental building block. All spacing should respect this grid.

**Core principle:** Every measurement is a multiple of 4px, ideally 8px.

```css
--spacing-unit: 8px;
```

---

## Spacing Scale

### Base Scale (4px increments)

```css
--space-0: 0;
--space-1: 4px;      /* 0.5 units - Tight spacing */
--space-2: 8px;      /* 1 unit - Base grid */
--space-3: 12px;     /* 1.5 units - Compact */
--space-4: 16px;     /* 2 units - Standard */
--space-5: 20px;     /* 2.5 units - Comfortable */
--space-6: 24px;     /* 3 units - Relaxed */
--space-8: 32px;     /* 4 units - Loose */
--space-10: 40px;    /* 5 units - Spacious */
--space-12: 48px;    /* 6 units - Section breaks */
--space-16: 64px;    /* 8 units - Major sections */
--space-20: 80px;    /* 10 units - Page sections */
--space-24: 96px;    /* 12 units - Hero sections */
```

**Usage mapping:**
- `space-1` (4px): Icon-to-text gap, tight borders
- `space-2` (8px): Button padding, list item gaps
- `space-3` (12px): Menu item padding
- `space-4` (16px): Panel padding, card padding
- `space-6` (24px): Section gaps
- `space-8` (32px): Screen margins
- `space-12+`: Major layout breaks

---

## Component Spacing

### Button Padding

```css
/* Small button */
.button-sm {
  padding: 4px 8px;  /* space-1 space-2 */
}

/* Default button */
.button {
  padding: 8px 16px;  /* space-2 space-4 */
}

/* Large button */
.button-lg {
  padding: 12px 24px;  /* space-3 space-6 */
}
```

**Rule:** Vertical padding should be at least half the horizontal padding.

---

### Panel/Card Padding

```css
/* Compact panel (status bars, small info cards) */
.panel-compact {
  padding: 8px;  /* space-2 */
}

/* Standard panel (dialog boxes, menus) */
.panel {
  padding: 16px;  /* space-4 */
}

/* Spacious panel (inventory, character sheets) */
.panel-spacious {
  padding: 24px;  /* space-6 */
}
```

---

### List Item Spacing

```css
/* Tight list (inventory items, compact menus) */
.list-tight > * + * {
  margin-top: 4px;  /* space-1 */
}

/* Standard list (main menus, options) */
.list-standard > * + * {
  margin-top: 8px;  /* space-2 */
}

/* Relaxed list (character selection, equipment) */
.list-relaxed > * + * {
  margin-top: 16px;  /* space-4 */
}
```

---

### Section Spacing

```css
/* Between related sections */
.section-gap-sm {
  margin-bottom: 24px;  /* space-6 */
}

/* Between major sections */
.section-gap {
  margin-bottom: 32px;  /* space-8 */
}

/* Between page sections */
.section-gap-lg {
  margin-bottom: 48px;  /* space-12 */
}
```

---

## Grid Layout Systems

### Tile Grid (8px base)

The fundamental SNES layout grid:

```css
.tile-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8px, 1fr));
  gap: 8px;
}
```

**Use cases:**
- Sprite placement
- Pixel-perfect icon grids
- Battle field layouts

---

### Inventory Grid

Classic JRPG item grid:

```css
.inventory-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  padding: 16px;
}

.inventory-item {
  aspect-ratio: 1;
  width: 100%;
  min-width: 48px;
  max-width: 64px;
}
```

**Standard sizes:**
- **5 columns** - Most common (FF6, Chrono Trigger)
- **4 columns** - Wider items (Secret of Mana)
- **6 columns** - Dense inventories (Breath of Fire)

---

### Menu Grid (2-column layout)

Classic split-screen menu:

```css
.menu-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 16px;
  height: 100vh;
  padding: 16px;
}

.menu-sidebar {
  /* Character list, command menu */
}

.menu-content {
  /* Details, stats, descriptions */
}
```

**Ratio variations:**
- `1fr 2fr` - Standard (FF6 menu)
- `1fr 1fr` - Equal split (item vs equipment)
- `2fr 3fr` - Asymmetric (Chrono Trigger)

---

### Dialog Box Layout

```css
.dialog-box {
  position: relative;
  padding: 16px;
  max-width: calc(100vw - 64px);  /* 32px margin each side */
  min-height: 96px;  /* 12 units */
  
  /* Position at bottom of screen */
  position: fixed;
  bottom: 32px;
  left: 32px;
  right: 32px;
}

.dialog-box__text {
  padding: 8px;
  line-height: 1.6;
}
```

---

## Border & Frame Widths

### Border Thickness

```css
--border-thin: 2px;      /* Subtle borders */
--border-standard: 3px;  /* Default borders */
--border-thick: 4px;     /* Emphasized borders */
--border-chunky: 6px;    /* Panel frames */
```

**Rule:** Border width should be even numbers (2, 4, 6) for pixel-perfect rendering.

---

### Panel Frames

Classic JRPG panel with corner decorations:

```css
.panel-frame {
  border: 4px solid #606080;
  padding: 16px;
  position: relative;
}

/* Corner decorations (8x8 sprites) */
.panel-frame::before,
.panel-frame::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: #90A8FF;
}

.panel-frame::before {
  top: -4px;
  left: -4px;
}

.panel-frame::after {
  top: -4px;
  right: -4px;
}
```

---

## Responsive Grid Breakpoints

Maintain pixel perfection at different screen sizes:

```css
/* Mobile portrait (320px+) */
@media (min-width: 320px) {
  :root {
    --grid-columns: 4;
    --screen-padding: 16px;
  }
}

/* Mobile landscape / Small tablet (640px+) */
@media (min-width: 640px) {
  :root {
    --grid-columns: 8;
    --screen-padding: 24px;
  }
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  :root {
    --grid-columns: 12;
    --screen-padding: 32px;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  :root {
    --grid-columns: 16;
    --screen-padding: 48px;
  }
}

/* Large desktop (1920px+) */
@media (min-width: 1920px) {
  :root {
    --grid-columns: 20;
    --screen-padding: 64px;
  }
}
```

**Key principle:** Always maintain 8px grid alignment, even when scaling.

---

## Icon & Sprite Sizes

Standard pixel-art sprite dimensions:

```css
--icon-xs: 16px;    /* Small icons (status effects) */
--icon-sm: 24px;    /* Standard icons (items) */
--icon-md: 32px;    /* Large icons (equipment) */
--icon-lg: 48px;    /* Character portraits */
--icon-xl: 64px;    /* Large portraits */
```

**Sprite sizing rules:**
1. Always powers of 2 or multiples of 8
2. Common sizes: 16px, 24px, 32px, 48px, 64px
3. Avoid odd-numbered sizes (causes blurring)

---

## Layout Patterns

### Full-Screen Menu

```css
.menu-fullscreen {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  padding: 32px;
  gap: 16px;
}

.menu-header {
  /* Title, gold count */
}

.menu-content {
  /* Main content area */
  overflow-y: auto;
}

.menu-footer {
  /* Controls help text */
}
```

---

### Side-by-Side Comparison

Used for equipment comparison, character stats:

```css
.comparison-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.comparison-item {
  padding: 16px;
  border: 3px solid #606080;
}
```

---

### Overlay Dialog

Centered dialog over game content:

```css
.overlay-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  min-width: 320px;
  max-width: 480px;
  padding: 24px;
  
  border: 4px solid #606080;
  background: #101828;
}
```

---

## Alignment Rules

### Text Alignment

```css
/* Left-align (default for dialog, descriptions) */
.text-left {
  text-align: left;
}

/* Center-align (titles, important messages) */
.text-center {
  text-align: center;
}

/* Right-align (numbers, stats, currency) */
.text-right {
  text-align: right;
}
```

**Rule:** Numbers always right-align. Text always left-align. Titles center-align.

---

### Vertical Rhythm

Maintain consistent vertical spacing:

```css
.vertical-rhythm > * + * {
  margin-top: 16px;  /* Base rhythm */
}

.vertical-rhythm > h1,
.vertical-rhythm > h2,
.vertical-rhythm > h3 {
  margin-top: 32px;  /* Extra space before headers */
}
```

---

## Do's and Don'ts

### Do's ✓

- **Use 8px base grid** - Align all layouts to 8px
- **Use even border widths** - 2px, 4px, 6px
- **Respect tile boundaries** - Sprites on 8px grid
- **Maintain vertical rhythm** - Consistent spacing
- **Use CSS Grid for layouts** - Natural for tile-based design

### Don'ts ✗

- **No odd-numbered spacing** - Breaks pixel alignment
- **No percentage-based spacing** - Use fixed px or rem
- **No floating-point values** - Always whole pixels
- **No arbitrary values** - Use design tokens
- **No sub-pixel positioning** - Causes blur

---

## Spacing Checklist

Before shipping:

- [ ] All spacing values are multiples of 4px
- [ ] Layout aligns to 8px base grid
- [ ] Border widths are even numbers
- [ ] Icons sizes are powers of 2 or multiples of 8
- [ ] Vertical rhythm is consistent
- [ ] No sub-pixel rendering
- [ ] Text aligns properly (left/center/right)
- [ ] Responsive breakpoints maintain grid alignment

---

## Implementation

See actual code:
- [/codebases/jrpg-ui-kit/styles/spacing.css](../../../codebases/jrpg-ui-kit/styles/spacing.css)
- [/codebases/jrpg-ui-kit/design-tokens/tokens.css](../../../codebases/jrpg-ui-kit/design-tokens/tokens.css)

Utility classes:
```html
<div class="p-4 m-2 gap-3">
  <!-- padding: 16px, margin: 8px, gap: 12px -->
</div>
```

---

## Inspiration

**Study these games:**
- **Chrono Trigger** - Perfect 8px grid alignment
- **Final Fantasy VI** - Elegant menu spacing
- **Secret of Mana** - Ring menu radial spacing
- **EarthBound** - Quirky but consistent spacing
- **Breath of Fire II** - Dense but readable inventory grids
