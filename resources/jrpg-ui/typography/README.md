# Typography

Pixel-perfect typography for authentic 16-bit JRPG aesthetics with modern readability.

---

## Understanding Pixel Fonts

16-bit era games used **bitmap fonts** - fonts drawn pixel-by-pixel, not vectors. This creates:

- **Sharp edges** - No anti-aliasing or smoothing
- **Fixed sizes** - Designed for specific pixel dimensions
- **Grid alignment** - Every character on pixel boundaries
- **Limited kerning** - Fixed or no spacing adjustments

**Modern challenge:** Web fonts are vector-based. We must force pixel rendering.

---

## Recommended Pixel Fonts

### 1. Press Start 2P (Primary Choice)

**Best for:** Menus, buttons, labels, headers

```css
font-family: 'Press Start 2P', monospace;
```

**Characteristics:**
- Clean, highly readable
- Based on classic NES/SNES game fonts
- Free and widely available (Google Fonts)
- Excellent web rendering

**Sizes:**
- `8px` - Smallest readable (item counts, corner labels)
- `12px` - Standard body text
- `16px` - Headers, button text
- `24px` - Large headers, titles
- `32px` - Hero text, game titles

**Line height:** Always `1.5` or `1.6` for readability

**Installation:**
```html
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
```

**License:** Open Font License (OFL) - Free for commercial use

---

### 2. Silkscreen (Alternative)

**Best for:** Dialog text, long-form content

```css
font-family: 'Silkscreen', monospace;
```

**Characteristics:**
- Slightly more condensed than Press Start 2P
- Better for longer text blocks
- Free (Google Fonts)
- Two weights: Regular (400) and Bold (700)

**Sizes:**
- `10px` - Small labels
- `14px` - Body text (better readability than Press Start at smaller sizes)
- `18px` - Headers
- `24px` - Large headers

**Installation:**
```html
<link href="https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap" rel="stylesheet">
```

**License:** Open Font License (OFL) - Free for commercial use

---

### 3. VT323 (Monospace Alternative)

**Best for:** Technical UI, stats, numbers

```css
font-family: 'VT323', monospace;
```

**Characteristics:**
- True monospace (all characters same width)
- Excellent for tables and aligned numbers
- Slightly taller aspect ratio
- Free (Google Fonts)

**Sizes:**
- `16px` - Small text
- `20px` - Body text
- `28px` - Headers
- `36px` - Large headers

**Use cases:** HP/MP numbers, damage counters, timers, coordinates

**Installation:**
```html
<link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
```

**License:** Open Font License (OFL) - Free for commercial use

---

### 4. Pixel Millennium (Premium Choice)

**Best for:** High-fidelity recreations

**Characteristics:**
- Most authentic to SNES era
- Multiple weights and styles
- Commercial license required
- Excellent character coverage

**Where to get:** [Style-7 Fonts](https://www.style7.com/)

**License:** Commercial (starts at $19)

---

### 5. Pixelify Sans (Modern Alternative)

**Best for:** Projects needing extensive character sets

```css
font-family: 'Pixelify Sans', sans-serif;
```

**Characteristics:**
- Variable font with multiple weights
- Extensive language support
- Slightly more modern feel
- Free (Google Fonts)

**Installation:**
```html
<link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap" rel="stylesheet">
```

**License:** Open Font License (OFL)

---

## Typography Scale

### Modular Scale (Base 12px)

```css
/* Using Press Start 2P as reference */

--font-size-xs: 8px;      /* 0.67rem - Micro labels, badges */
--font-size-sm: 12px;     /* 1rem - Body text, dialog */
--font-size-base: 16px;   /* 1.33rem - Default, buttons */
--font-size-lg: 20px;     /* 1.67rem - Subheadings */
--font-size-xl: 24px;     /* 2rem - Section headers */
--font-size-2xl: 32px;    /* 2.67rem - Page titles */
--font-size-3xl: 40px;    /* 3.33rem - Hero text */
```

**Rule:** Only use multiples of 4px for clean pixel alignment.

---

## Line Height Rules

```css
/* Tight (for headers, single-line elements) */
--line-height-tight: 1.2;

/* Normal (for UI labels, button text) */
--line-height-normal: 1.5;

/* Relaxed (for body text, dialog) */
--line-height-relaxed: 1.6;

/* Loose (for improved readability in dense text) */
--line-height-loose: 1.8;
```

**SNES caveat:** Original games often used 1.0-1.2 line height. We increase to 1.5-1.6 for modern readability.

---

## Letter Spacing

```css
/* Pixel fonts generally don't need letter-spacing adjustments */

/* Default - no adjustment */
--letter-spacing-normal: 0;

/* Tight - for headers that feel too spaced */
--letter-spacing-tight: -0.05em;

/* Wide - for better readability at small sizes */
--letter-spacing-wide: 0.05em;

/* Expanded - for emphasis or stylistic effect */
--letter-spacing-expanded: 0.1em;
```

**Rule:** Avoid letter-spacing adjustments unless absolutely necessary. Pixel fonts are designed with intentional spacing.

---

## Text Colors & Shadows

### Primary Text Styling

```css
.text-primary {
  color: #F8F8F0;
  text-shadow: 2px 2px 0 #484840;
}

.text-secondary {
  color: #B0B0C8;
  text-shadow: 2px 2px 0 #383848;
}

.text-muted {
  color: #808098;
  text-shadow: 1px 1px 0 #282838;
}
```

**Shadow rules:**
- **2px 2px** for primary text (strong depth)
- **1px 1px** for small text (subtle depth)
- **No blur** - Always hard shadows
- **Offset only** - No spread values

---

### Outlined Text (High Contrast)

For text over complex backgrounds:

```css
.text-outlined {
  color: #FFFFFF;
  text-shadow: 
    -1px -1px 0 #000,
     1px -1px 0 #000,
    -1px  1px 0 #000,
     1px  1px 0 #000;
}
```

**Use sparingly** - Computationally expensive, reserve for important text.

---

### Gradient Text (Special Emphasis)

SNES games occasionally used vertical color shifts:

```css
.text-gradient-gold {
  background: linear-gradient(
    180deg,
    #FFF8B0 0%,
    #F0C030 50%,
    #906010 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: none; /* Shadows don't work with gradient text */
}
```

**Use cases:** Legendary items, game titles, special abilities

---

## Font Rendering Settings

**Critical CSS for pixel-perfect rendering:**

```css
body {
  /* Force pixel rendering */
  -webkit-font-smoothing: none;
  -moz-osx-font-smoothing: grayscale;
  font-smooth: never;
  
  /* Prevent sub-pixel rendering */
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  
  /* Pixel-perfect font rendering */
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
}

.pixel-text {
  font-family: 'Press Start 2P', monospace;
  font-size: 16px;
  line-height: 1.5;
  
  /* Prevent font from blurring when scaled */
  image-rendering: pixelated;
  
  /* Snap to pixel grid */
  transform: translateX(0) translateY(0);
}
```

---

## Typography Patterns

### 1. Dialog Box Text

Classic JRPG dialog with typewriter effect:

```css
.dialog-text {
  font-family: 'Press Start 2P', monospace;
  font-size: 12px;
  line-height: 1.6;
  color: #F8F8F0;
  text-shadow: 2px 2px 0 #484840;
  letter-spacing: 0.02em;
  
  /* Prevent text selection during animation */
  user-select: none;
}
```

**Implementation:** See [/codebases/jrpg-ui-kit/utils/typewriter.js](../../../codebases/jrpg-ui-kit/utils/typewriter.js)

---

### 2. Menu Text

Aligned, scannable menu options:

```css
.menu-item {
  font-family: 'Press Start 2P', monospace;
  font-size: 16px;
  line-height: 1.5;
  color: #F0F0F8;
  text-shadow: 2px 2px 0 #484840;
  
  /* Ensure pixel alignment */
  padding: 8px 16px;
  
  /* No text wrapping in menus */
  white-space: nowrap;
}

.menu-item--selected {
  color: #FFF070;
  text-shadow: 2px 2px 0 #806020;
}

.menu-item--disabled {
  color: #606070;
  text-shadow: 1px 1px 0 #282838;
}
```

---

### 3. Stats & Numbers

Monospace for alignment:

```css
.stat-number {
  font-family: 'VT323', monospace;
  font-size: 20px;
  line-height: 1.2;
  color: #F8F8F0;
  text-shadow: 2px 2px 0 #484840;
  
  /* Right-align for tables */
  text-align: right;
  
  /* Fixed width for consistent alignment */
  min-width: 4ch; /* 4 characters wide */
}
```

**Example:**
```
HP: 9999
MP:  150
ATK: 255
DEF:  80
```

---

### 4. Damage Numbers (Floating Text)

Animated, high-contrast:

```css
.damage-number {
  font-family: 'Press Start 2P', monospace;
  font-size: 24px;
  font-weight: bold;
  color: #FFFFFF;
  text-shadow: 
    -2px -2px 0 #000,
     2px -2px 0 #000,
    -2px  2px 0 #000,
     2px  2px 0 #000;
  
  /* Animation ready */
  position: absolute;
  pointer-events: none;
  animation: float-up 1s ease-out forwards;
}

@keyframes float-up {
  0% { 
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  100% { 
    transform: translateY(-40px) scale(1.2);
    opacity: 0;
  }
}
```

---

### 5. Headers & Titles

Hierarchical structure:

```css
.header-primary {
  font-family: 'Press Start 2P', monospace;
  font-size: 32px;
  line-height: 1.2;
  color: #FFF070;
  text-shadow: 3px 3px 0 #806020;
  text-align: center;
  margin-bottom: 24px;
}

.header-secondary {
  font-family: 'Press Start 2P', monospace;
  font-size: 24px;
  line-height: 1.3;
  color: #90A8FF;
  text-shadow: 2px 2px 0 #404870;
  margin-bottom: 16px;
}

.header-tertiary {
  font-family: 'Press Start 2P', monospace;
  font-size: 16px;
  line-height: 1.5;
  color: #B0B0C8;
  text-shadow: 2px 2px 0 #383848;
  margin-bottom: 12px;
  text-transform: uppercase;
}
```

---

## Readability Tradeoffs

### Original SNES Constraints

**What original games did:**
- 8x8 or 8x16 pixel character cells
- Tight line spacing (1.0-1.2)
- Limited character sets
- High contrast only

**Why we adjust:**
- Modern displays are higher resolution
- Players read more text than 1990s games
- Accessibility standards matter
- Longer play sessions

### Our Compromises

| Aspect | SNES Original | Our Adjustment | Reason |
|--------|---------------|----------------|--------|
| Line height | 1.0-1.2 | 1.5-1.6 | Reduce eye strain |
| Letter spacing | 0 | 0-0.05em | Readability at small sizes |
| Text shadow | Rare | Common | Depth on variable backgrounds |
| Font size | 8-12px typical | 12-16px typical | Modern screen viewing distances |
| Contrast | Variable | WCAG AA minimum | Accessibility |

---

## Accessibility Guidelines

### Minimum Requirements

1. **Body text:** 12px minimum (14px preferred)
2. **Line height:** 1.5 minimum for paragraphs
3. **Contrast:** 4.5:1 for normal text, 3:1 for large text
4. **Max line length:** 70 characters (~35em)

### Enhanced Accessibility

Provide a "High Readability Mode":

```css
.high-readability .dialog-text {
  font-size: 14px;
  line-height: 1.8;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  text-shadow: 2px 2px 0 #000000;
}
```

---

## Implementation

**See actual code:**
- [/codebases/jrpg-ui-kit/styles/typography.css](../../../codebases/jrpg-ui-kit/styles/typography.css)
- [/codebases/jrpg-ui-kit/design-tokens/tokens.css](../../../codebases/jrpg-ui-kit/design-tokens/tokens.css)

**Utility classes:**
```html
<p class="text-dialog">The legendary sword awaits...</p>
<span class="text-damage">9999</span>
<h1 class="text-title">Chapter 3</h1>
```

---

## Testing

Test typography on:
1. **Various backgrounds** - Light, dark, colored
2. **Different screen densities** - 1x, 2x, 3x, 4x
3. **Multiple browsers** - Chrome, Firefox, Safari, Edge
4. **Zoomed states** - 100%, 150%, 200%
5. **Accessibility tools** - Screen readers, contrast checkers

---

## Resources

### Free Fonts
- [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) - Google Fonts
- [Silkscreen](https://fonts.google.com/specimen/Silkscreen) - Google Fonts
- [VT323](https://fonts.google.com/specimen/VT323) - Google Fonts
- [Pixelify Sans](https://fonts.google.com/specimen/Pixelify+Sans) - Google Fonts

### Premium Fonts
- [Style-7 Fonts](https://www.style7.com/) - Authentic retro gaming fonts
- [Pixel Saga](http://www.pixelsagas.com/) - Massive pixel font collection

### Testing Tools
- [WhatFont](https://chrome.google.com/webstore/detail/whatfont) - Chrome extension
- [Type Scale](https://typescale.com/) - Visual type scale calculator
- [Contrast Checker](https://webaim.org/resources/contrastchecker/) - WCAG contrast verification

---

## Inspiration

**Study these games:**
- **Chrono Trigger** - Clean, highly readable dialog font
- **Final Fantasy VI** - Excellent menu text hierarchy
- **EarthBound** - Quirky but legible, great personality
- **Secret of Mana** - Ring menu text, status indicators
- **Breath of Fire II** - Well-proportioned stat displays
