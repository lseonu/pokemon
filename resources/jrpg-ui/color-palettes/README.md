# Color Palettes

Authentic 16-bit color palettes inspired by SNES hardware limitations and classic JRPG aesthetics.

**🌸 NEW:** Looking for a softer, cuter aesthetic? Check out the [**Cute Kawaii Variant**](./CUTE_KAWAII_VARIANT.md) - same pixel-perfect design with pastel pinks, lavenders, and mint greens!

---

## Understanding SNES Color

The SNES could display **32,768 colors** (15-bit color depth), but only **256 colors on-screen simultaneously**. This forced deliberate, cohesive palette choices.

**Key characteristics:**
- Rich, saturated colors with slight darkness
- Limited gradients (3-4 steps typical)
- High contrast for readability on CRT displays
- Warm bias in neutral tones

---

## Core System Palettes

### 1. Chrono Trigger Blue (Primary)

The iconic blue used in Chrono Trigger's UI. Trustworthy, calm, hero-aligned.

```css
--ct-blue-900: #000818  /* Deep shadow */
--ct-blue-800: #101840  /* Dark border */
--ct-blue-700: #1830A0  /* Primary dark */
--ct-blue-600: #2040D0  /* Primary */
--ct-blue-500: #4060F0  /* Primary light */
--ct-blue-400: #6080F8  /* Highlight */
--ct-blue-300: #90A8FF  /* Bright accent */
--ct-blue-200: #C0D0FF  /* Subtle tint */
```

**Usage:** Primary buttons, window frames, selection indicators, menu headers

**Inspiration:** Chrono Trigger menu system, time gauge UI

---

### 2. Final Fantasy Slate (Neutral)

FF6's sophisticated gray-blue slate. Professional, balanced, elegant.

```css
--ff-slate-900: #0C0C18  /* Pure black substitute */
--ff-slate-800: #181828  /* Deep background */
--ff-slate-700: #282840  /* Secondary background */
--ff-slate-600: #404060  /* Border dark */
--ff-slate-500: #606080  /* Border */
--ff-slate-400: #8888A8  /* Text muted */
--ff-slate-300: #B0B0C8  /* Text secondary */
--ff-slate-200: #D8D8E8  /* Text primary */
--ff-slate-100: #F0F0F8  /* Text bright */
```

**Usage:** Dialog boxes, background panels, body text, neutral UI elements

**Inspiration:** Final Fantasy VI battle menu, esper selection screen

---

### 3. Mana Green (Success)

Secret of Mana's vibrant forest green. Natural, positive, healing.

```css
--mana-green-900: #082008  /* Deep shadow */
--mana-green-800: #104010  /* Dark */
--mana-green-700: #1C6020  /* Primary dark */
--mana-green-600: #28A030  /* Primary */
--mana-green-500: #40C048  /* Primary light */
--mana-green-400: #60D868  /* Highlight */
--mana-green-300: #90F098  /* Bright */
--mana-green-200: #C0F8C8  /* Tint */
```

**Usage:** Health bars, success states, confirm buttons, healing items, nature elements

**Inspiration:** Secret of Mana ring menu, Sprite character UI

---

### 4. Phoenix Red (Danger)

Fire spell and danger indicator red. Urgent, aggressive, warning.

```css
--phoenix-red-900: #200808  /* Deep shadow */
--phoenix-red-800: #401010  /* Dark */
--phoenix-red-700: #901820  /* Primary dark */
--phoenix-red-600: #D02030  /* Primary */
--phoenix-red-500: #F03848  /* Primary light */
--phoenix-red-400: #F86068  /* Highlight */
--phoenix-red-300: #FF9098  /* Bright */
--phoenix-red-200: #FFC0C8  /* Tint */
```

**Usage:** HP critical, error states, cancel buttons, fire elements, enemy indicators

**Inspiration:** Final Fantasy summon effects, Chrono Trigger fire magic

---

### 5. Thunder Yellow (Warning)

Bolt spell yellow. Energetic, attention-grabbing, caution.

```css
--thunder-yellow-900: #201808  /* Deep shadow */
--thunder-yellow-800: #403008  /* Dark */
--thunder-yellow-700: #906010  /* Primary dark */
--thunder-yellow-600: #D09020  /* Primary */
--thunder-yellow-500: #F0C030  /* Primary */
--thunder-yellow-400: #F8D850  /* Highlight */
--thunder-yellow-300: #FFF070  /* Bright */
--thunder-yellow-200: #FFF8B0  /* Tint */
```

**Usage:** Warning states, MP bars, lightning elements, equipment stars, quest markers

**Inspiration:** Thunder magic VFX, Chrono Trigger tech menu highlights

---

### 6. Ether Purple (Magic)

Mysterious magic and special ability purple.

```css
--ether-purple-900: #180820  /* Deep shadow */
--ether-purple-800: #281040  /* Dark */
--ether-purple-700: #502080  /* Primary dark */
--ether-purple-600: #7830B0  /* Primary */
--ether-purple-500: #9848D0  /* Primary light */
--ether-purple-400: #B868F0  /* Highlight */
--ether-purple-300: #D090FF  /* Bright */
--ether-purple-200: #E8C0FF  /* Tint */
```

**Usage:** Magic/MP indicators, special abilities, rare items, status effects

**Inspiration:** Final Fantasy Esper menu, magic spell casting effects

---

### 7. Earthbound Brown (Warm Neutral)

EarthBound's quirky, warm earth tones. Friendly, grounded, approachable.

```css
--earth-brown-900: #181008  /* Deep shadow */
--earth-brown-800: #302010  /* Dark */
--earth-brown-700: #604020  /* Primary dark */
--earth-brown-600: #906030  /* Primary */
--earth-brown-500: #C08848  /* Primary light */
--earth-brown-400: #D0A860  /* Highlight */
--earth-brown-300: #E8C880  /* Bright */
--earth-brown-200: #F8E8B0  /* Tint */
```

**Usage:** Inventory backgrounds, wood textures, parchment, earth elements

**Inspiration:** EarthBound menu backgrounds, item screen

---

## Functional Palettes

### Text Hierarchy

```css
/* Primary text (white with warmth) */
--text-primary: #F8F8F0
--text-primary-shadow: #484840

/* Secondary text (reduced contrast) */
--text-secondary: #B0B0C8
--text-secondary-shadow: #383848

/* Muted text (disabled, placeholder) */
--text-muted: #808098
--text-muted-shadow: #282838

/* Accent text (highlighted, links) */
--text-accent: #FFF070
--text-accent-shadow: #806020

/* Inverse text (on dark backgrounds) */
--text-inverse: #181820
--text-inverse-shadow: #E8E8E0
```

**Shadow rule:** Always pair text with shadow for CRT-style depth and readability against variable backgrounds.

---

### UI State Colors

```css
/* Default state */
--state-default-bg: #404060
--state-default-border: #606080
--state-default-text: #F0F0F8

/* Hover state */
--state-hover-bg: #5060A0
--state-hover-border: #7080C0
--state-hover-text: #FFFFFF

/* Active/Selected state */
--state-active-bg: #2040D0
--state-active-border: #4060F0
--state-active-text: #FFFFFF

/* Disabled state */
--state-disabled-bg: #282840
--state-disabled-border: #404050
--state-disabled-text: #606070

/* Focus state */
--state-focus-border: #FFF070
--state-focus-glow: #F0C030
```

---

### Background Layers

```css
/* Layer 0: Deepest background */
--bg-layer-0: #000810

/* Layer 1: Primary panel background */
--bg-layer-1: #101828

/* Layer 2: Elevated panels */
--bg-layer-2: #202840

/* Layer 3: Highest elevation */
--bg-layer-3: #303850

/* Overlay: Semi-transparent darkening */
--bg-overlay: rgba(0, 8, 16, 0.85)
```

**Hierarchy rule:** Each layer should be visually distinct but harmonious. 16px difference in RGB channels minimum.

---

### Status Indicators

```css
/* HP (Health Points) - Green to Red gradient */
--hp-full: #40C048      /* 100-75% */
--hp-good: #A0D050      /* 75-50% */
--hp-warning: #F0C030   /* 50-25% */
--hp-critical: #F03848  /* 25-0% */

/* MP (Magic Points) - Blue to Purple gradient */
--mp-full: #4060F0      /* 100-50% */
--mp-low: #7830B0       /* 50-0% */

/* XP (Experience) - Yellow gradient */
--xp-bar: #F0C030
--xp-bar-bg: #403008

/* Stamina - Orange gradient */
--stamina-full: #F08030
--stamina-depleted: #905020
```

---

## Combat & Element Colors

### Element Colors (Pokémon-style)

```css
--element-fire: #F03848
--element-water: #4080F0
--element-grass: #40C048
--element-electric: #F0C030
--element-ice: #90D8F8
--element-fighting: #D04020
--element-poison: #9848D0
--element-ground: #C08848
--element-flying: #90A8FF
--element-psychic: #F068D8
--element-bug: #A0B820
--element-rock: #B8A060
--element-ghost: #7060B0
--element-dragon: #7038F0
--element-dark: #483830
--element-steel: #B0B0C8
--element-fairy: #F0A0D8
--element-normal: #B0B0A0
```

---

## Rarity Tiers

For item quality, loot drops, equipment grades:

```css
--rarity-common: #B0B0C8    /* Gray */
--rarity-uncommon: #40C048   /* Green */
--rarity-rare: #4060F0       /* Blue */
--rarity-epic: #9848D0       /* Purple */
--rarity-legendary: #F08030  /* Orange */
--rarity-mythic: #F0C030     /* Gold */
```

---

## Usage Guidelines

### Do's ✓

- **Use exact hex values** - No approximations or "close enough"
- **Limit simultaneous colors** - 8-12 colors per screen maximum
- **Test on dark backgrounds** - Most JRPG UIs use dark bases
- **Use gradients sparingly** - 2-3 step gradients only
- **Pair colors intentionally** - High contrast for important info

### Don'ts ✗

- **No pure white (#FFFFFF)** - Use #F8F8F0 for warmth
- **No pure black (#000000)** - Use #000810 for depth
- **No smooth gradients** - Stepped gradients only
- **No pastel colors** - Maintain saturation
- **No color alone for info** - Always pair with text/icons

---

## Accessibility Considerations

While authentic to 16-bit aesthetics, ensure:

1. **Contrast ratios:**
   - Body text: minimum 4.5:1
   - Large text: minimum 3:1
   - Interactive elements: minimum 3:1

2. **Color blindness:**
   - Never use color alone to convey meaning
   - Use patterns, text, or icons alongside color
   - Test with simulators (Deuteranopia, Protanopia, Tritanopia)

3. **SNES-accurate but readable:**
   - Original games had poor readability on modern displays
   - Adjust contrast slightly if needed for accessibility
   - Document deviations from source material

---

## Implementation

See [/codebases/jrpg-ui-kit/design-tokens/](../../../codebases/jrpg-ui-kit/design-tokens/) for:
- CSS custom properties (tokens.css)
- JSON token format (tokens.json)
- Sass variables (tokens.scss)
- JavaScript constants (tokens.js)

---

## Visual Examples

See [inspiration/color-examples.md](../inspiration/color-examples.md) for screenshots and color analysis from:
- Chrono Trigger
- Final Fantasy VI
- Secret of Mana
- EarthBound
- Breath of Fire II
