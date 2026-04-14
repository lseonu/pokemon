# Iconography & Sprites

Pixel-perfect icon design principles and sprite usage patterns for authentic 16-bit aesthetics.

---

## Icon Philosophy

SNES-era icons were **functional first, decorative second**. Limited by:
- Strict size constraints (8x8, 16x16, 24x24)
- Limited color palettes (typically 4-16 colors per sprite)
- No anti-aliasing
- Tile-based organization

**Modern approach:** Respect these constraints while ensuring clarity on high-DPI displays.

---

## Standard Icon Sizes

```css
--icon-size-xs: 16px;   /* Status effects, tiny indicators */
--icon-size-sm: 24px;   /* Items, abilities */
--icon-size-md: 32px;   /* Equipment, magic spells */
--icon-size-lg: 48px;   /* Character faces, large items */
--icon-size-xl: 64px;   /* Detailed portraits, bosses */
```

**Rule:** Only use sizes that are multiples of 8px for clean pixel scaling.

---

## Icon Design Principles

### 1. High Contrast

SNES games were played on CRT TVs with poor contrast. Icons needed bold outlines.

```css
.icon {
  /* Dark outline for readability */
  filter: drop-shadow(1px 1px 0 #000);
}
```

**Design rule:** 1-2px black outline around all icons.

---

### 2. Limited Color Palette

Authentic SNES sprites used 4-16 colors per sprite maximum.

**Recommended palette per icon:**
- 1 base color
- 2-3 shades (darker variants)
- 1-2 highlights (lighter variants)
- 1 outline color (usually black or dark blue)

**Example - Health Potion:**
- `#D02030` - Red base
- `#901820` - Dark red shadow
- `#F03848` - Bright red highlight
- `#000810` - Black outline

---

### 3. Clear Silhouette

Icons must be recognizable at a glance, even at 16x16px.

**Test:** Render icon in solid black. Still recognizable? Good silhouette.

---

### 4. Consistent Style

All icons should feel cohesive:
- Same outline thickness (1-2px)
- Similar color saturation
- Consistent level of detail
- Shared design language (all rounded OR all angular)

---

## Icon Categories

### Status Effect Icons (16x16)

**Purpose:** Quick visual indicator for buffs/debuffs

**Design approach:**
- Simple, iconic symbols
- Strong color coding
- Minimal detail

**Examples:**
- 🛡️ Defense Up: Blue shield
- ⚡ Speed Up: Yellow lightning bolt
- 💀 Poison: Purple skull
- 🔥 Burn: Orange flame
- ❄️ Frozen: Cyan snowflake

```css
.status-icon {
  width: 16px;
  height: 16px;
  image-rendering: pixelated;
}
```

---

### Item Icons (24x24)

**Purpose:** Inventory items, consumables, key items

**Design approach:**
- More detail than status icons
- Recognizable item type
- Color indicates rarity/type

**Categories:**
- **Consumables:** Potions, food, scrolls
- **Equipment:** Swords, armor, accessories
- **Key Items:** Keys, quest items, story items
- **Materials:** Ore, plants, monster drops

```css
.item-icon {
  width: 24px;
  height: 24px;
  image-rendering: pixelated;
}
```

---

### Ability/Magic Icons (32x32)

**Purpose:** Skills, magic spells, techniques

**Design approach:**
- Stylized effect representation
- Element color coding
- Dynamic composition (energy, motion)

**Element mapping:**
- **Fire:** Red/orange, flame shapes
- **Ice:** Cyan/white, crystalline
- **Lightning:** Yellow, jagged bolts
- **Earth:** Brown, rocky
- **Wind:** Green, swirls
- **Water:** Blue, waves
- **Holy:** Gold/white, radiance
- **Dark:** Purple/black, shadows

```css
.ability-icon {
  width: 32px;
  height: 32px;
  image-rendering: pixelated;
}
```

---

### Character Portraits (48x48 or 64x64)

**Purpose:** Character selection, party menu, dialog

**Design approach:**
- Distinctive facial features
- Personality expression
- Consistent character colors

**Variations needed per character:**
- Neutral expression
- Happy/excited
- Sad/worried
- Angry/determined
- Surprised/shocked
- Defeated/unconscious

```css
.character-portrait {
  width: 48px;
  height: 48px;
  image-rendering: pixelated;
  border: 2px solid #606080;
}

.character-portrait-large {
  width: 64px;
  height: 64px;
}
```

---

## UI Element Icons

### Navigation Icons (16x16 or 24x24)

**Common UI icons:**
- ▲ Arrow up
- ▼ Arrow down
- ◄ Arrow left
- ► Arrow right
- ✓ Checkmark
- ✕ Close/cancel
- ⚙ Settings/options
- 🏠 Home/town
- 💰 Shop/gold
- 📊 Stats
- 🎒 Inventory
- ⚔️ Equipment
- 🔮 Magic
- 📖 Journal/quest log

---

### Cursor/Selector Icons

Classic JRPG pointing hand or arrow:

```css
.menu-cursor {
  width: 16px;
  height: 16px;
  animation: cursor-blink 0.8s steps(2) infinite;
}

@keyframes cursor-blink {
  50% { opacity: 0.5; }
}
```

**Design variations:**
- **Pointing hand** (FF6, Chrono Trigger)
- **Arrow** (simpler, works at smaller sizes)
- **Star/sparkle** (for special selections)

---

### Currency Icons

**Gold coin** (16x16 or 24x24):
- Yellow/gold color
- Circular shape
- Shine/highlight on top
- Used inline with numbers

```html
<span class="currency">
  <img src="gold-icon.png" alt="" class="currency-icon">
  <span class="currency-amount">9999</span>
</span>
```

---

## Sprite Sheets

Organize icons efficiently:

### Sprite Sheet Structure

```
icons-16.png (256x256)
├─ Row 1: Status effects (16 icons)
├─ Row 2: UI elements (16 icons)
├─ Row 3: Currency & misc (16 icons)
└─ ... (up to 256 icons)

icons-24.png (384x384)
├─ Items (256 icons in 16x16 grid)

icons-32.png (512x512)
├─ Abilities & magic (256 icons in 16x16 grid)
```

### CSS Sprite Implementation

```css
.icon {
  display: inline-block;
  background-image: url('/sprites/icons-24.png');
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  image-rendering: pixelated;
}

.icon-potion-health {
  background-position: 0 0;
}

.icon-potion-mana {
  background-position: -24px 0;
}

.icon-potion-ether {
  background-position: -48px 0;
}
```

---

## Animated Icons

### Sparkle Effect

For legendary/rare items:

```css
@keyframes sparkle {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

.icon-legendary {
  animation: sparkle 1.5s ease-in-out infinite;
  filter: drop-shadow(0 0 4px #F0C030);
}
```

### Pulse Effect

For active/equipped items:

```css
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.icon-equipped {
  animation: pulse 2s ease-in-out infinite;
}
```

### Shake Effect

For critical/danger states:

```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
}

.icon-critical {
  animation: shake 0.4s ease-in-out infinite;
}
```

---

## Icon States

### Default State

```css
.icon {
  opacity: 1;
  filter: drop-shadow(1px 1px 0 #000);
}
```

### Disabled State

```css
.icon-disabled {
  opacity: 0.4;
  filter: grayscale(100%) drop-shadow(1px 1px 0 #000);
}
```

### Selected/Active State

```css
.icon-selected {
  filter: drop-shadow(0 0 4px #FFF070) drop-shadow(1px 1px 0 #000);
}
```

### Locked/Unavailable State

```css
.icon-locked {
  opacity: 0.3;
  filter: grayscale(100%) drop-shadow(1px 1px 0 #000);
  position: relative;
}

.icon-locked::after {
  content: '🔒';
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 12px;
}
```

---

## Rarity Indicators

Visual coding for item rarity:

### Border Colors

```css
.icon-common {
  border: 2px solid #B0B0C8;  /* Gray */
}

.icon-uncommon {
  border: 2px solid #40C048;  /* Green */
}

.icon-rare {
  border: 2px solid #4060F0;  /* Blue */
}

.icon-epic {
  border: 2px solid #9848D0;  /* Purple */
}

.icon-legendary {
  border: 2px solid #F08030;  /* Orange */
  box-shadow: 0 0 8px #F08030;
}

.icon-mythic {
  border: 2px solid #F0C030;  /* Gold */
  box-shadow: 0 0 12px #F0C030;
  animation: sparkle 1.5s ease-in-out infinite;
}
```

### Corner Stars

Add stars to indicate quality level:

```css
.icon-stars {
  position: relative;
}

.icon-stars::after {
  content: '★★★';
  position: absolute;
  bottom: -2px;
  right: -2px;
  font-size: 8px;
  color: #FFF070;
  text-shadow: 1px 1px 0 #000;
}
```

---

## Accessibility

### Alt Text

Always provide meaningful alt text:

```html
<img src="potion.png" 
     alt="Health Potion" 
     class="icon-item">
```

### ARIA Labels

For decorative icons:

```html
<span class="icon icon-health" 
      role="img" 
      aria-label="Health"></span>
```

For interactive icons:

```html
<button class="icon-button" 
        aria-label="Open inventory">
  <span class="icon icon-inventory"></span>
</button>
```

---

## Icon Creation Guidelines

### Design Process

1. **Sketch at target size** - Design at 16px, 24px, or 32px
2. **Use pixel grid** - Every pixel counts
3. **Test at 1x scale** - Must be clear without zoom
4. **Add contrast** - Strong outlines, high contrast colors
5. **Test in context** - View against various backgrounds
6. **Create variations** - Disabled, selected, hover states

### Tools

**Recommended:**
- **Aseprite** - Industry standard for pixel art
- **Piskel** - Free web-based alternative
- **GraphicsGale** - Free Windows tool
- **Photoshop** - With "Nearest Neighbor" scaling

**Settings:**
- Disable anti-aliasing
- Use indexed color mode
- Export as PNG-8 (for sprites) or SVG (with pixel-perfect settings)

---

## Export Settings

### PNG Export

```
Format: PNG-8
Color Mode: Indexed Color
Transparency: Yes
Interlaced: No
Resize: Nearest Neighbor (never bilinear/bicubic)
```

### SVG Export (for flexibility)

Use `shape-rendering: crispEdges` for pixel-perfect SVG:

```html
<svg width="24" height="24" 
     style="shape-rendering: crispEdges">
  <!-- icon paths -->
</svg>
```

---

## Do's and Don'ts

### Do's ✓

- **Use consistent icon sizes** - Multiples of 8px
- **Maintain strong outlines** - 1-2px black borders
- **Limit color palette** - 4-16 colors per icon
- **Test at actual size** - Design at target resolution
- **Use sprite sheets** - Reduce HTTP requests
- **Provide alt text** - Accessibility is critical

### Don'ts ✗

- **No anti-aliasing** - Breaks pixel aesthetic
- **No gradients** - Use stepped color transitions
- **No overly complex details** - Keep it simple
- **No inconsistent styles** - Maintain visual coherence
- **No scaling odd multipliers** - Only 1x, 2x, 3x, 4x
- **No blurry exports** - Use "Nearest Neighbor"

---

## Icon Library Structure

```
/assets/icons/
├─ 16x16/
│  ├─ status-effects/
│  ├─ ui-elements/
│  └─ misc/
├─ 24x24/
│  ├─ items/
│  ├─ consumables/
│  └─ materials/
├─ 32x32/
│  ├─ abilities/
│  ├─ magic/
│  └─ equipment/
├─ 48x48/
│  └─ portraits/
└─ sprites/
   ├─ icons-16.png
   ├─ icons-24.png
   └─ icons-32.png
```

---

## Implementation

See actual code:
- [/codebases/jrpg-ui-kit/components/Icon.jsx](../../../codebases/jrpg-ui-kit/components/)
- [/codebases/jrpg-ui-kit/utils/sprite-loader.js](../../../codebases/jrpg-ui-kit/utils/)

Usage:
```jsx
<Icon name="potion-health" size={24} />
<Icon name="status-poison" size={16} variant="animated" />
<Icon name="magic-fire" size={32} rarity="legendary" />
```

---

## Resources

### Design Tools
- [Aseprite](https://www.aseprite.org/) - $19.99, best pixel art tool
- [Piskel](https://www.piskelapp.com/) - Free, web-based
- [Lospec](https://lospec.com/palette-list) - Color palette library

### Icon References
- [The Spriters Resource](https://www.spriters-resource.com/) - Game sprite database
- [itch.io Pixel Art](https://itch.io/game-assets/tag-pixel-art) - Free/paid assets
- [OpenGameArt](https://opengameart.org/) - CC-licensed game art

---

## Inspiration

**Study these games:**
- **Chrono Trigger** - Clean, iconic item/magic icons
- **Final Fantasy VI** - Expressive character portraits
- **Secret of Mana** - Beautiful ring menu icons
- **EarthBound** - Quirky, personality-filled icons
- **Pokémon Gen 2/3** - Excellent type icons and sprites
