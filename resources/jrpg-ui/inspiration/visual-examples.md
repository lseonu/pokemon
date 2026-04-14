# Visual Inspiration & Examples

Reference screenshots and analysis from classic SNES JRPGs.

---

## Chrono Trigger (1995)

### UI Characteristics

**Color Scheme:**
- Primary: Deep blue (#2040D0)
- Secondary: Gray-blue slate
- Accents: Bright cyan highlights
- Backgrounds: Near-black with blue tint

**Typography:**
- Clean, highly legible pixel font
- Consistent 8x8 character cells
- Generous letter spacing
- White text with dark shadow

**Layout Patterns:**
- Bottom-aligned dialog boxes
- Full-screen menus with character portraits
- ATB gauge prominently displayed
- Time display in corner

**Notable Features:**
- Dual/triple tech menu system
- Character portraits in battle
- Ring menu for items
- Elegant window borders with corners

**What to Copy:**
- Clean, high-contrast text
- Blue color scheme (trustworthy, heroic)
- Simple, elegant borders
- Bottom dialog positioning

**What to Avoid:**
- Don't replicate exact menu structure (copyrighted)
- ATB system is patented (use alternatives)

---

## Final Fantasy VI (1994)

### UI Characteristics

**Color Scheme:**
- Primary: Gray-blue slate
- Secondary: Gold/yellow accents
- HP: Green, MP: Yellow-white
- Neutral, sophisticated palette

**Typography:**
- Slightly condensed pixel font
- Smaller than Chrono Trigger
- Good use of ALL CAPS for names
- Numeric stats in larger font

**Layout Patterns:**
- Split-screen menus (left sidebar + right content)
- Grid-based equipment layout
- Status screen with character portrait top-left
- Battle menu bottom-center

**Notable Features:**
- Esper/Magic menu with descriptions
- Equipment comparison (left vs right)
- Relic system (2 slots)
- Formation editor

**What to Copy:**
- Slate gray color scheme (elegant, timeless)
- Split-screen menu layout
- Equipment comparison pattern
- Stat display format (ATK: 255)

**What to Avoid:**
- Overly small fonts (FF6 pushes readability limits)
- Don't copy exact stat names (IP = MP in modern games)

---

## Secret of Mana (1993)

### UI Characteristics

**Color Scheme:**
- Primary: Vibrant, saturated colors
- Forest greens, bright blues, warm reds
- More colorful than FF6/Chrono Trigger
- Fantasy/nature aesthetic

**Typography:**
- Slightly larger, rounder pixel font
- Very readable
- Playful personality

**Layout Patterns:**
- **Ring menu** (iconic, radial selection)
- Character portraits in corners during gameplay
- Real-time action bars
- Minimal battle UI (HP only)

**Notable Features:**
- Ring menu innovation
- Co-op multiplayer UI
- Weapon/magic level-up system
- Minimal HUD (unobtrusive)

**What to Copy:**
- Ring menu concept (excellent for controller)
- Vibrant, fantasy colors
- Minimal HUD approach
- Character portrait corners

**What to Avoid:**
- Ring menu hard to implement well (stick to linear menus initially)
- Don't use *too much* color (can feel busy)

---

## EarthBound (1994)

### UI Characteristics

**Color Scheme:**
- Warm earth tones (browns, tans)
- Quirky pastels
- Less "epic" than other JRPGs
- Friendly, approachable

**Typography:**
- Clean, readable pixel font
- Good contrast
- Playful without being childish

**Layout Patterns:**
- Simple, no-frills menus
- HP displayed as rolling counter
- Quirky status ailments (Mushroomized!)
- Minimal decorative elements

**Notable Features:**
- Rolling HP counter (suspenseful!)
- Psychedelic battle backgrounds
- Modern setting (not fantasy)
- Humor in UI text

**What to Copy:**
- Warm color palette (less intimidating)
- Rolling counter concept (creates tension)
- Clean, simple approach
- Personality in text

**What to Avoid:**
- Overly quirky (may not fit all projects)
- Psychedelic effects can be seizure risk

---

## Breath of Fire II (1994)

### UI Characteristics

**Color Scheme:**
- Earth tones with blue accents
- Parchment-like backgrounds
- Medieval fantasy aesthetic

**Typography:**
- Clear, readable font
- Good size hierarchy
- Excellent numeric displays

**Layout Patterns:**
- Traditional JRPG menu structure
- Clear stat tables
- Equipment with AP (ability points)
- Dragon transformation UI

**Notable Features:**
- Fishing minigame UI
- Township system UI
- Shaman fusion UI
- AP-based abilities

**What to Copy:**
- Clear stat tables (easy to scan)
- Parchment aesthetic (warm, inviting)
- Simple, functional design

**What to Avoid:**
- Some menus feel cramped (give breathing room)

---

## Common Patterns Across All Games

### Dialog Boxes

**Standard format:**
```
┌─────────────────────────────┐
│ Speaker Name (if shown)     │
│                             │
│ Dialog text goes here in    │
│ 2-3 lines maximum. Press    │
│ A to continue.            ▼ │
└─────────────────────────────┘
```

**Features:**
- 16-24px padding
- 3-4px borders
- Corner decorations (optional)
- Continue indicator (▼, ►, blinking cursor)
- Semi-transparent background (if over gameplay)

### Status Bars

**HP Bar evolution:**
- Early: Simple colored rectangle
- Mid: Gradient fill (2-3 colors)
- Advanced: Smooth gradient + border + numbers

**Standard format:**
```
HP: ████████░░  450/500
    [Green bar] [White text with shadow]
```

**Color coding:**
- Green: 100-75% (safe)
- Yellow: 75-50% (caution)
- Orange/Red: 50-0% (danger)

### Menu Navigation

**Standard controls:**
- D-pad: Navigate
- A: Confirm/Select
- B: Cancel/Back
- L/R: Switch pages/tabs
- Start: Pause/Menu

**Visual feedback:**
- Cursor (►, hand icon, highlight)
- Sound effects (not visual but important)
- Selected item highlighted or colored differently
- Disabled items grayed out

---

## Design Lessons

### What Made These UIs Great

1. **High Contrast** - Text always readable against backgrounds
2. **Consistent Language** - Same icons/colors mean same things
3. **Clear Hierarchy** - Important info (HP) larger/brighter
4. **Efficient Layout** - No wasted space, everything purposeful
5. **Pixel-Perfect** - Every element aligned to grid

### Common Mistakes in Modern "Retro" UIs

1. **Too polished** - Smooth gradients break illusion
2. **Wrong fonts** - Using modern fonts with pixel art
3. **Anti-aliasing** - Blur ruins pixel perfection
4. **Wrong colors** - Pure white/black, oversaturated colors
5. **Overdesign** - Too many decorative elements
6. **Ignoring constraints** - Not respecting 8x8 tile grid

### How to Research More

**Resources:**
- [The Spriters Resource](https://www.spriters-resource.com/) - Game UI sprites
- [VGMuseum](http://www.vgmuseum.com/) - Screenshot archives
- YouTube longplays - Watch full games
- [MobyGames](https://www.mobygames.com/) - Screenshots database

**Study Method:**
1. Take screenshots of UI elements
2. Count pixels (measure borders, padding, fonts)
3. Extract color palettes (use eyedropper tool)
4. Sketch layouts on graph paper
5. Note interaction patterns

---

## Reference Measurements

### Chrono Trigger Menu

- Dialog box: ~600px wide, ~120px tall
- Border: 4px
- Padding: 16px
- Font: ~12px (8x8 cells)
- Line height: 1.2-1.5

### Final Fantasy VI Menu

- Screen: 256x224 (SNES resolution)
- Menu panels: 4px borders
- Character portrait: 48x48
- Icon size: 16x16
- Stat numbers: 16px monospace

### Common Sizes

- **Item icon:** 16x16 or 24x24
- **Character portrait:** 48x48 or 64x64
- **Border thickness:** 2-4px
- **Button padding:** 8px vertical, 16px horizontal
- **Menu item height:** 32-40px (touch: 44px minimum)

---

## Color Palette Extraction

### Chrono Trigger Blue UI

```
#000818 - Deep background
#101840 - Panel background
#2040D0 - Primary blue
#4060F0 - Bright blue
#90A8FF - Highlight
#F8F8F0 - Text white
#484840 - Text shadow
```

### Final Fantasy VI Slate

```
#181828 - Background
#404060 - Panel
#606080 - Border
#B0B0C8 - Secondary text
#F0F0F8 - Primary text
#F0C030 - Gold accent
```

### Secret of Mana Green

```
#104010 - Dark green
#28A030 - Primary green
#40C048 - Bright green
#90F098 - Highlight
```

---

## Screenshot Analysis Checklist

When analyzing a JRPG UI screenshot:

- [ ] Identify color palette (5-10 main colors)
- [ ] Measure border thickness
- [ ] Count padding/margins
- [ ] Note font size and style
- [ ] Check grid alignment (8px?)
- [ ] List component hierarchy
- [ ] Note interaction states (hover, selected)
- [ ] Identify shadows and depth cues
- [ ] Check text shadow technique
- [ ] Analyze spacing rhythm

---

## Where to Find More Examples

### Legal Sources

- **YouTube Longplays** - Watch full games, pause to study
- **Twitch Streams** - Current games with retro UI
- **Developer Portfolios** - UI artists show their work
- **Game Museums** - Archive.org has playable classics
- **Sprite Databases** - Extracted game assets

### Important Note

**Don't directly copy:** Study principles, not pixel-by-pixel recreation. Original UIs are copyrighted. Use as inspiration, not template.

---

## Next Steps

1. Choose 1-2 games to deeply study
2. Extract color palettes
3. Measure common elements
4. Sketch your own variations
5. Build and iterate

**Remember:** The best retro UIs honor the past while serving modern users.
