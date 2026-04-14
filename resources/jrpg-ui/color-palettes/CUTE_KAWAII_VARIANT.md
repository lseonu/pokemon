# Cute Kawaii Color Palette Variant

**Created:** 2026-04-14  
**Based on:** EarthBound warm aesthetic + kawaii/pastel sensibility  
**Use case:** Friendlier, softer JRPG UIs with a cute aesthetic

---

## Overview

This is a softer, more pastel variant of the JRPG design system. Instead of the darker Chrono Trigger blue and Final Fantasy slate, this palette uses warm pinks, lavenders, and pastels for a "kawaii" aesthetic while maintaining pixel-perfect rendering.

Perfect for projects that want the retro JRPG feel but with a cuter, more approachable vibe.

---

## Color Swatches

### Primary: Kawaii Pink
Replaces Chrono Trigger Blue with soft magenta/pink tones

```css
--kawaii-pink-900: #1A0A14;  /* Deep plum */
--kawaii-pink-800: #3D1A36;  /* Dark magenta */
--kawaii-pink-700: #7A3A6F;  /* Muted pink */
--kawaii-pink-600: #C670B4;  /* Primary pink */
--kawaii-pink-500: #E88FD8;  /* Bright pink */
--kawaii-pink-400: #F5AEEC;  /* Light pink */
--kawaii-pink-300: #FFC8F5;  /* Pastel pink */
--kawaii-pink-200: #FFE0FA;  /* Very pale pink */
```

**Usage:** Buttons, links, active states, highlights

---

### Neutral: Soft Lavender
Replaces Final Fantasy Slate with warm purple-gray tones

```css
--soft-lavender-900: #1A1420;  /* Deep purple-black */
--soft-lavender-800: #2D2438;  /* Dark lavender */
--soft-lavender-700: #443A58;  /* Muted purple */
--soft-lavender-600: #6B5A7E;  /* Medium lavender */
--soft-lavender-500: #9482A8;  /* Soft purple */
--soft-lavender-400: #B5A8C8;  /* Light lavender */
--soft-lavender-300: #D4CAE0;  /* Pale lavender */
--soft-lavender-200: #E8E0F0;  /* Very pale */
--soft-lavender-100: #F5F0FA;  /* Almost white */
```

**Usage:** Backgrounds, panels, borders, neutral UI elements

---

### Success: Mint Green
Softer, pastel green (still readable)

```css
--mint-green-900: #0A1A14;
--mint-green-800: #143028;
--mint-green-700: #2A5A48;
--mint-green-600: #4A9A7A;
--mint-green-500: #6AC8A0;  /* Primary mint */
--mint-green-400: #8FE5BC;
--mint-green-300: #B4F5D8;
--mint-green-200: #D4FFEC;
```

**Usage:** Success messages, HP bars, positive indicators

---

### Danger: Coral Pink
Softer red/pink for errors (less aggressive than Phoenix Red)

```css
--coral-pink-900: #1A0A0E;
--coral-pink-800: #381420;
--coral-pink-700: #6A2840;
--coral-pink-600: #B84C70;  /* Primary coral */
--coral-pink-500: #F0709A;
--coral-pink-400: #FF95B8;
--coral-pink-300: #FFB4D0;
--coral-pink-200: #FFD8E8;
```

**Usage:** Error messages, destructive actions, critical HP

---

### Warning: Butter Yellow
Warm, friendly yellow (less harsh than Thunder Yellow)

```css
--butter-yellow-900: #1A1608;
--butter-yellow-800: #382C10;
--butter-yellow-700: #6A5420;
--butter-yellow-600: #B89040;
--butter-yellow-500: #F5C860;  /* Primary butter */
--butter-yellow-400: #FFE085;
--butter-yellow-300: #FFF0AA;
--butter-yellow-200: #FFF8D0;
```

**Usage:** Warnings, accents, XP bars, active menu cursor

---

### Magic: Lavender Purple
Softer purple (less intense than Ether Purple)

```css
--lavender-purple-900: #140A1A;
--lavender-purple-800: #2A1438;
--lavender-purple-700: #542868;
--lavender-purple-600: #8A4CB0;
--lavender-purple-500: #B878D8;  /* Primary lavender */
--lavender-purple-400: #D4A0F0;
--lavender-purple-300: #E8C0FF;
--lavender-purple-200: #F5DEFF;
```

**Usage:** MP bars, magic effects, special abilities

---

### Warm Neutral: Peachy Tan
Soft peachy brown (warmer than Earthbound Brown)

```css
--peachy-tan-900: #1A120A;
--peachy-tan-800: #382814;
--peachy-tan-700: #6A5028;
--peachy-tan-600: #B88850;
--peachy-tan-500: #E5B478;  /* Primary peach */
--peachy-tan-400: #F5D09A;
--peachy-tan-300: #FFE5BC;
--peachy-tan-200: #FFF0D8;
```

**Usage:** Alternate backgrounds, warm accents, wood/earth elements

---

## Text Colors

```css
/* Primary Text - Very pale pink-white */
--text-primary: #FFF5FA;
--text-primary-shadow: #6B4A60;

/* Secondary Text - Light lavender */
--text-secondary: #E0C8E8;
--text-secondary-shadow: #4A3850;

/* Muted Text - Medium lavender */
--text-muted: #B5A0C8;
--text-muted-shadow: #382A40;

/* Accent Text - Butter yellow */
--text-accent: #FFE085;
--text-accent-shadow: #8A6A30;

/* Inverse Text - Deep purple */
--text-inverse: #2D1A38;
--text-inverse-shadow: #F5E0FF;
```

---

## Background Layers

```css
--bg-layer-0: #1A0F20;  /* Deep purple-black base */
--bg-layer-1: #2D2438;  /* Dark lavender */
--bg-layer-2: #443A58;  /* Medium lavender */
--bg-layer-3: #5A4868;  /* Lighter purple */
--bg-overlay: rgba(26, 15, 32, 0.85);
```

---

## Design Principles

### 1. **Warmth over Coolness**
- Backgrounds lean purple/pink instead of blue/slate
- Warmer tints throughout the palette
- Creates a friendlier, more approachable feel

### 2. **Pastel but Readable**
- Colors are softer but still meet WCAG AA contrast requirements
- Text shadows remain for pixel-perfect readability
- Borders are still 3-4px thick for clarity

### 3. **Kawaii Sensibility**
- Pink as the primary brand color (instead of blue)
- Mint green, coral pink, butter yellow for warmth
- Lavender/purple neutrals instead of cold grays

### 4. **Same Structure, Different Feel**
- All original design patterns work the same way
- Drop-in replacement for standard JRPG tokens
- Maintains pixel-perfect rendering and hard shadows

---

## When to Use This Palette

✅ **Good for:**
- Games/apps targeting a younger audience
- Projects with a "cozy" or "wholesome" aesthetic
- Visual novels or story-driven RPGs
- Community/social features
- Anything that benefits from feeling approachable

❌ **Not ideal for:**
- Dark, serious, or horror-themed games
- Professional/enterprise applications
- Projects requiring a "masculine" aesthetic
- High-tension action games

---

## Comparison to Standard Palette

| Aspect | Standard JRPG | Cute Kawaii Variant |
|--------|---------------|---------------------|
| Primary Color | Blue (#2040D0) | Pink (#C670B4) |
| Neutrals | Cool slate | Warm lavender |
| Background | Near-black | Deep purple |
| Text Accent | Thunder yellow | Butter yellow |
| Overall Feel | Cool, serious | Warm, friendly |
| Reference Game | Chrono Trigger, FF6 | EarthBound, Kirby |

---

## Implementation Example

### Replace in tokens.css

```css
/* Standard JRPG */
--primary: var(--ct-blue-600);

/* Cute Kawaii Variant */
--primary: var(--kawaii-pink-600);
```

### Full Token Replacement

Replace all instances:
- `--ct-blue-*` → `--kawaii-pink-*`
- `--ff-slate-*` → `--soft-lavender-*`
- `--mana-green-*` → `--mint-green-*`
- `--phoenix-red-*` → `--coral-pink-*`
- `--thunder-yellow-*` → `--butter-yellow-*`
- `--ether-purple-*` → `--lavender-purple-*`
- `--earth-brown-*` → `--peachy-tan-*`

---

## Accessibility Notes

- All text/background combinations tested for WCAG AA compliance
- Minimum contrast ratio: 4.5:1 for normal text
- Focus indicators use butter yellow (#FFE085) with high contrast
- Color is never the only indicator (shapes, icons, text also used)

---

## Preview

When applied, you'll see:
- **Pink borders** instead of blue
- **Lavender panels** instead of slate gray
- **Warm purple backgrounds** instead of near-black
- **Pastel accents** throughout
- **Softer shadows** (still hard-edged, but warmer colors)

The overall effect is a "cozy retro" aesthetic that feels like EarthBound meets Kirby.

---

## Credits

**Inspired by:**
- EarthBound's warm, quirky color palette
- Kirby's pastel pink aesthetic
- Mother 3's psychedelic warmth
- Modern "kawaii" game design (Animal Crossing, Stardew Valley)

---

**Version:** 1.0  
**Status:** ✅ Production Ready  
**Last Updated:** 2026-04-14
