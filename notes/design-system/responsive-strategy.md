# Responsive Strategy

**How to adapt pixel-perfect JRPG UI across screen sizes**

---

## The Challenge

JRPG UIs were designed for TVs at fixed resolutions (240p, 480i). Modern web spans:
- Phones (320px wide)
- Tablets (768px wide)
- Laptops (1280px wide)
- 4K displays (3840px wide)

**Goal:** Maintain pixel perfection while being usable at all sizes.

---

## Core Strategy: Integer Scaling

**Rule:** Only scale by whole number multiples (1x, 2x, 3x, 4x). Never 1.5x or 2.7x.

### Why Integer Scaling?

```
Original: 16x16 icon

1x scale: 16x16 ✅ Pixel-perfect
2x scale: 32x32 ✅ Pixel-perfect
3x scale: 48x48 ✅ Pixel-perfect

1.5x scale: 24x24 ❌ Blurry (pixels don't align)
2.7x scale: 43.2x43.2 ❌ Sub-pixels (disaster)
```

**Implementation:**
```css
@media (min-width: 1920px) {
  :root {
    --scale: 2; /* 2x on large displays */
  }

  .pixel-element {
    transform: scale(var(--scale));
    transform-origin: top left;
  }
}
```

---

## Breakpoint Strategy

### Mobile First (Default: 1x scale)

**Target:** 320px - 767px

```css
:root {
  --scale: 1;
  --grid-columns: 4;
  --screen-padding: 16px;
  --font-scale: 1;
}

.container {
  padding: var(--screen-padding);
}

.menu {
  /* Stack vertically */
  display: flex;
  flex-direction: column;
}
```

**Adaptations:**
- Single column layouts
- Full-width panels
- Bottom-aligned dialogs
- Touch targets ≥ 44x44px
- Slightly larger font (14px vs. 12px)

---

### Tablet (768px+)

**Target:** 768px - 1023px

```css
@media (min-width: 768px) {
  :root {
    --scale: 1;
    --grid-columns: 8;
    --screen-padding: 24px;
  }

  .menu {
    /* 2-column layout */
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 16px;
  }
}
```

**Adaptations:**
- 2-column layouts (sidebar + content)
- Dialogs can be centered
- More screen real estate for menus
- Mouse hover states enabled

---

### Desktop (1024px+)

**Target:** 1024px - 1919px

```css
@media (min-width: 1024px) {
  :root {
    --scale: 1;
    --grid-columns: 12;
    --screen-padding: 32px;
  }

  .menu {
    /* 3-column layout */
    grid-template-columns: 1fr 2fr 1fr;
  }
}
```

**Adaptations:**
- Multi-column layouts
- Side-by-side comparisons
- Keyboard shortcuts enabled
- Hover tooltips

---

### Large Desktop (1920px+)

**Target:** 1920px - 3839px

```css
@media (min-width: 1920px) {
  :root {
    --scale: 2; /* 2x everything */
    --grid-columns: 16;
    --screen-padding: 64px;
  }

  .pixel-element {
    transform: scale(2);
    transform-origin: top left;
  }
}
```

**Adaptations:**
- Scale entire UI 2x
- More breathing room
- Larger font sizes

---

### 4K (3840px+)

**Target:** 3840px+

```css
@media (min-width: 3840px) {
  :root {
    --scale: 3; /* 3x everything */
  }

  .pixel-element {
    transform: scale(3);
    transform-origin: top left;
  }
}
```

**Adaptations:**
- Scale entire UI 3x
- Maintain readability at distance
- Still pixel-perfect

---

## Layout Patterns

### 1. Stacking (Mobile)

```
┌─────────────────┐
│ Header          │
├─────────────────┤
│ Menu Item 1     │
│ Menu Item 2     │
│ Menu Item 3     │
├─────────────────┤
│ Details Panel   │
│                 │
│                 │
├─────────────────┤
│ Footer          │
└─────────────────┘
```

**CSS:**
```css
.layout-mobile {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
```

---

### 2. Sidebar (Tablet)

```
┌──────┬────────────────┐
│      │ Header         │
│ Menu ├────────────────┤
│ Item │ Content        │
│ 1    │                │
│ Item │                │
│ 2    │                │
│      │                │
└──────┴────────────────┘
```

**CSS:**
```css
@media (min-width: 768px) {
  .layout-tablet {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 16px;
  }
}
```

---

### 3. Multi-Column (Desktop)

```
┌─────┬──────────┬─────┐
│Menu │ Content  │Stats│
│ A   │          │ HP  │
│ B   │          │ MP  │
│ C   │          │ XP  │
│     │          │     │
└─────┴──────────┴─────┘
```

**CSS:**
```css
@media (min-width: 1024px) {
  .layout-desktop {
    display: grid;
    grid-template-columns: 200px 1fr 250px;
    gap: 24px;
  }
}
```

---

## Component Adaptations

### Dialog Boxes

**Mobile:**
```css
.dialog-box {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  /* Full width, bottom-aligned */
}
```

**Desktop:**
```css
@media (min-width: 1024px) {
  .dialog-box {
    position: fixed;
    bottom: 32px;
    left: 32px;
    right: 32px;
    max-width: 800px;
    margin: 0 auto;
    /* Centered with margins */
  }
}
```

---

### Buttons

**Mobile:**
```css
.button-mobile {
  width: 100%;
  padding: 12px 16px;
  font-size: 14px;
  /* Full width, larger touch target */
}
```

**Desktop:**
```css
@media (min-width: 1024px) {
  .button-desktop {
    width: auto;
    padding: 8px 16px;
    font-size: 12px;
    /* Inline, compact */
  }
}
```

---

### Menus

**Mobile:**
```css
.menu-mobile {
  display: flex;
  flex-direction: column;
  gap: 4px;
  /* Vertical stack, tight spacing */
}

.menu-item {
  padding: 12px 16px;
  font-size: 14px;
  /* Larger touch targets */
}
```

**Desktop:**
```css
@media (min-width: 1024px) {
  .menu-desktop {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    /* 2-column grid */
  }

  .menu-item {
    padding: 8px 12px;
    font-size: 12px;
    /* Compact */
  }
}
```

---

## Touch vs. Mouse

### Touch-Only (Mobile)

```css
/* No hover states */
.button {
  background: var(--ct-blue-600);
}

.button:active {
  background: var(--ct-blue-700);
  transform: scale(0.98);
}
```

### Mouse Support (Desktop)

```css
@media (hover: hover) and (pointer: fine) {
  .button:hover {
    background: var(--ct-blue-500);
    transform: translateY(-2px);
    box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.5);
  }

  .button:active {
    background: var(--ct-blue-700);
    transform: translateY(0);
    box-shadow: none;
  }
}
```

**Why `(hover: hover)`?** Prevents "sticky hover" on touch devices.

---

## Font Scaling

### Approach 1: Fixed Sizes with Breakpoints

```css
.text {
  font-size: 12px;
}

@media (min-width: 768px) {
  .text {
    font-size: 14px;
  }
}

@media (min-width: 1920px) {
  .text {
    font-size: 16px;
  }
}
```

**Pro:** Precise control

**Con:** Many breakpoints needed

---

### Approach 2: Scale Variable

```css
:root {
  --font-scale: 1;
}

@media (min-width: 1920px) {
  :root {
    --font-scale: 1.5;
  }
}

.text {
  font-size: calc(12px * var(--font-scale));
}
```

**Pro:** Single source of truth

**Con:** All fonts scale together

---

### Approach 3: Clamp (Modern)

```css
.text {
  font-size: clamp(12px, 2vw, 18px);
}
```

**Pro:** Fluid scaling

**Con:** Can break pixel perfection (non-integer sizes)

**Recommendation:** Use Approach 2 with integer scale values only.

---

## Testing Responsive Design

### Desktop Browser

1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test all breakpoints:
   - 320px (iPhone SE)
   - 375px (iPhone 12)
   - 768px (iPad)
   - 1024px (iPad Pro)
   - 1280px (Laptop)
   - 1920px (Desktop)
   - 3840px (4K)

### Real Devices

Minimum test matrix:
- [ ] iPhone (iOS Safari)
- [ ] Android phone (Chrome)
- [ ] iPad (Safari)
- [ ] Desktop (Chrome, Firefox, Safari)

---

## Common Pitfalls

### ❌ Don't: Percentage-Based Scaling

```css
/* Bad - leads to non-integer sizes */
.icon {
  width: 5vw; /* Could be 23.7px */
}
```

### ✅ Do: Fixed Sizes with Breakpoints

```css
/* Good - always integers */
.icon {
  width: 24px;
}

@media (min-width: 1920px) {
  .icon {
    width: 48px; /* 2x scale */
  }
}
```

---

### ❌ Don't: Smooth Transitions Between Scales

```css
/* Bad - creates blur during transition */
.element {
  transition: transform 0.3s;
}
```

### ✅ Do: Instant Scaling at Breakpoints

```css
/* Good - no transition on scale change */
@media (min-width: 1920px) {
  .element {
    transform: scale(2);
    transition: none; /* Disable for scale */
  }
}
```

---

### ❌ Don't: Ignore Touch Target Sizes

```css
/* Bad - too small for touch */
.button-mobile {
  padding: 4px 8px; /* Only 20px tall */
}
```

### ✅ Do: Minimum 44x44px on Touch

```css
/* Good - comfortable touch target */
.button-mobile {
  min-width: 44px;
  min-height: 44px;
  padding: 12px 16px;
}
```

---

## Responsive Checklist

- [ ] Integer scaling only (1x, 2x, 3x)
- [ ] Breakpoints defined for mobile, tablet, desktop, 4K
- [ ] Touch targets ≥ 44x44px on mobile
- [ ] Hover states only on devices that support hover
- [ ] Font sizes remain multiples of 4px at all breakpoints
- [ ] Layouts don't break at any screen width
- [ ] No horizontal scrolling on mobile
- [ ] Pixel perfection maintained at all scales
- [ ] Tested on real devices, not just emulators

---

## Resources

- [Responsive Design Checker](https://responsivedesignchecker.com/)
- [BrowserStack](https://www.browserstack.com/) - Real device testing
- [Chrome DevTools Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)
- [Firefox Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/)

---

## Example: Complete Responsive Component

```css
/* Base (mobile-first) */
.panel {
  padding: 16px;
  margin: 8px;
  border: 3px solid var(--ff-slate-500);
  background: var(--bg-layer-1);
}

/* Tablet */
@media (min-width: 768px) {
  .panel {
    padding: 24px;
    margin: 16px;
    border-width: 4px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .panel {
    padding: 32px;
    margin: 24px;
  }
}

/* Large desktop (2x scale) */
@media (min-width: 1920px) {
  .panel {
    transform: scale(2);
    transform-origin: top left;
  }
}
```

**Result:** Usable at 320px, beautiful at 3840px, pixel-perfect everywhere.
