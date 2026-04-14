# UI Patterns

Common interface patterns from classic 16-bit JRPGs with modern adaptations.

---

## Table of Contents

1. [Dialog Boxes](#dialog-boxes)
2. [Menu Systems](#menu-systems)
3. [Status Bars & HUD](#status-bars--hud)
4. [Battle UI](#battle-ui)
5. [Inventory Grids](#inventory-grids)
6. [Character Stats](#character-stats)
7. [Modal Windows](#modal-windows)
8. [Navigation Patterns](#navigation-patterns)

---

## Dialog Boxes

### Classic Bottom-Aligned Dialog

**Inspiration:** Chrono Trigger, Final Fantasy VI

**Pattern:**
- Fixed to bottom of screen
- ~25-30% of screen height
- Speaker name in top-left or dedicated area
- Text animates with typewriter effect
- "▼" indicator when text complete

```
┌─────────────────────────────┐
│ MARLE                       │
│                             │
│ We need to find the        │
│ legendary sword before      │
│ nightfall!                ▼ │
└─────────────────────────────┘
```

**Key features:**
- 16-24px padding
- 4-6px border
- Corner decorations (optional)
- Semi-transparent dark background
- 2-3 lines of text maximum
- Press A/Enter to advance

**CSS Structure:**
```css
.dialog-box {
  position: fixed;
  bottom: 32px;
  left: 32px;
  right: 32px;
  padding: 16px;
  border: 4px solid #606080;
  background: rgba(16, 24, 40, 0.95);
}
```

---

### Center-Screen Dialog (Important)

**Inspiration:** Boss messages, story revelations

**Pattern:**
- Center of screen
- Larger text
- Often with character portrait
- Dramatic pause before continuing

```
    ┌───────────────────┐
    │                   │
    │  The seal has     │
    │  been broken...   │
    │                   │
    └───────────────────┘
```

---

### Choice Dialog

**Inspiration:** Yes/No prompts, binary decisions

**Pattern:**
- Small, centered box
- 2-4 options maximum
- Cursor indicates selection
- Default option highlighted

```
┌─────────────────┐
│ Save your game? │
│                 │
│  ► Yes          │
│    No           │
└─────────────────┘
```

**Interaction:**
- Up/Down arrows to select
- A/Enter to confirm
- B/Escape to cancel (defaults to "No")

---

### Speaker Portrait Dialog

**Inspiration:** Modern JRPG standard

**Pattern:**
- Character portrait on left or right
- Name above or below portrait
- Larger dialog area
- Portrait can animate (idle, talking)

```
┌──┐  ┌─────────────────────┐
│🧙│  │ GANDOR              │
│  │  │                     │
│  │  │ The path ahead is   │
│  │  │ treacherous...      │
└──┘  └─────────────────────┘
```

---

## Menu Systems

### Full-Screen Command Menu

**Inspiration:** Final Fantasy VI, Chrono Trigger main menu

**Pattern:**
- Grid of command options
- 2-4 columns
- Current selection highlighted
- Submenus slide in from right

```
┌─────────────────────────────┐
│ PARTY         TIME: 14:23   │
│ GOLD: 9,999                 │
├─────────────────────────────┤
│  ► ITEMS      MAGIC         │
│    EQUIP      STATUS        │
│    SAVE       CONFIG        │
│                             │
├─────────────────────────────┤
│ Lv 24  HP: 450/450         │
│        MP: 120/150          │
└─────────────────────────────┘
```

**Layout:**
- Header: Party info, time, gold
- Main: Command grid (2x3 or 3x2)
- Footer: Current character stats

---

### Side Menu (Inventory/Equipment)

**Inspiration:** Classic RPG inventory screen

**Pattern:**
- Left sidebar: Category list
- Right panel: Items in selected category
- Bottom panel: Item description

```
┌───────┬─────────────────────┐
│ ITEMS │ ◆ Potion      x12   │
│ EQUIP │   Hi-Potion   x5    │
│ MAGIC │   Ether       x3    │
│ KEY   │   Phoenix Down x2   │
│       │                     │
├───────┴─────────────────────┤
│ Restores 50 HP to one ally  │
└─────────────────────────────┘
```

**Interaction:**
- Left/Right to switch panels
- Up/Down to navigate
- A/Enter to use/equip
- B/Escape to cancel

---

### Ring Menu

**Inspiration:** Secret of Mana

**Pattern:**
- Circular arrangement of options
- Rotates around center
- Selected item scales up
- Pauses game action

**Use cases:**
- Quick item access
- Weapon switching
- Magic selection
- Radial crafting menus

**Note:** More complex to implement, but very elegant for controller input.

---

### Nested Menu Navigation

**Pattern:**
- Breadcrumb trail shows hierarchy
- Smooth transitions between levels
- Can backtrack with cancel button

```
MENU > ITEMS > CONSUMABLES
┌─────────────────────────────┐
│ ◄ Back to Items             │
├─────────────────────────────┤
│   Potion            x12     │
│ ► Hi-Potion         x5      │
│   Mega Potion       x1      │
│   Elixir            x2      │
└─────────────────────────────┘
```

---

## Status Bars & HUD

### HP/MP Bars

**Classic horizontal bar:**

```
HP: ████████░░  450/500
MP: ██████████  150/150
```

**CSS Implementation:**
```css
.stat-bar {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stat-bar__label {
  width: 32px;
  font-size: 12px;
}

.stat-bar__fill {
  flex: 1;
  height: 8px;
  background: #282840;
  border: 2px solid #606080;
  position: relative;
}

.stat-bar__progress {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(90deg, #40C048 0%, #28A030 100%);
  transition: width 0.3s ease-out;
}
```

**Color coding:**
- HP: Green → Yellow → Red (based on percentage)
- MP: Blue → Purple (based on percentage)
- XP: Yellow/Gold

---

### In-Battle HUD

**Pattern:**
- Bottom of screen
- Shows party status at a glance
- Character portrait + HP/MP bars
- Status effects icons
- ATB gauge (if applicable)

```
┌──────────┬──────────┬──────────┐
│ CLOUD    │ TIFA     │ AERITH   │
│ Lv 15    │ Lv 14    │ Lv 16    │
│ HP: ████ │ HP: ████ │ HP: ███░ │
│ MP: ███░ │ MP: ███  │ MP: ████ │
│ ATB:███░ │ ATB:████ │ ATB:██░░ │
└──────────┴──────────┴──────────┘
```

---

### Mini-Map HUD

**Pattern:**
- Top-right or bottom-right corner
- Small, semi-transparent
- Shows player position
- Key landmarks/objectives marked

```
    ┌───────┐
    │ ·   · │
    │   ▲   │
    │ ·   🏰│
    └───────┘
```

---

## Battle UI

### Turn-Based Battle Menu

**Inspiration:** Final Fantasy, Dragon Quest

**Pattern:**
- Bottom-aligned command menu
- Attack / Magic / Item / Defend / Run
- Submenus for target selection
- Enemy cursor for targeting

```
Enemy: GOBLIN    HP: ████░░
       SLIME     HP: ███░░░

        ┌─────────────┐
        │ ► ATTACK    │
        │   MAGIC     │
        │   ITEM      │
        │   DEFEND    │
        └─────────────┘
```

**Interaction flow:**
1. Select command (Attack/Magic/Item)
2. Select target (if applicable)
3. Confirm selection
4. Animation plays
5. Return to command menu

---

### Active Time Battle (ATB)

**Inspiration:** Final Fantasy series

**Pattern:**
- ATB gauge fills over time
- When full, character can act
- Gauge position indicates turn order
- Real-time with strategic pausing

```
┌─────────────────────────────┐
│ TURN ORDER:                 │
│ [████████░░] CLOUD    READY!│
│ [██████░░░░] TIFA           │
│ [███░░░░░░░] GOBLIN         │
│ [██░░░░░░░░] SLIME          │
└─────────────────────────────┘
```

---

### Damage Numbers

**Pattern:**
- Pop up at point of impact
- Float upward and fade
- Color-coded by damage type
- Critical hits larger/different color

**Types:**
- Physical damage: White/Gray
- Magic damage: Elemental color
- Healing: Green
- Critical: Yellow/Gold
- Miss: "MISS" in gray

```css
@keyframes damage-pop {
  0% {
    transform: translateY(0) scale(0.8);
    opacity: 1;
  }
  50% {
    transform: translateY(-20px) scale(1.2);
  }
  100% {
    transform: translateY(-40px) scale(1);
    opacity: 0;
  }
}
```

---

## Inventory Grids

### Standard Item Grid

**Pattern:**
- 4-6 columns
- Icon + item name
- Quantity in corner
- Hover shows description

```
┌────┬────┬────┬────┬────┐
│🧪12│⚔️ │🛡️ │💎3 │📜5 │
│Pot │Swd│Shl│Gem│Scr│
├────┼────┼────┼────┼────┤
│🍖8 │🔑 │⭐2 │📖 │✨  │
│Fod│Key│Ore│Bk │Mag│
└────┴────┴────┴────┴────┘
```

**Features:**
- Sort by: Type, Name, Rarity, Quantity
- Filter by: Usable, Equipment, Key Items
- Quick-use on double-click
- Drag-and-drop to equip (optional)

---

### Equipment Grid

**Pattern:**
- Item slots for each equipment type
- Currently equipped shown in slots
- Stats comparison on hover
- Drag to equip/unequip

```
┌─────────────────────────────┐
│ CHARACTER: CLOUD            │
├─────────────────────────────┤
│  WEAPON:  [Buster Sword  ]  │
│  ARMOR:   [Bronze Armor  ]  │
│  ACCESSORY: [Power Ring  ]  │
│  ACCESSORY: [Empty      ]   │
├─────────────────────────────┤
│ ATK: 45 (+12)  DEF: 30 (+8) │
└─────────────────────────────┘
```

---

### Crafting Grid

**Pattern:**
- Recipe slots (ingredients)
- Output preview
- Craft button (enabled when valid)
- Quantity selector

```
┌─────────────────────────────┐
│ RECIPE: Hi-Potion           │
├─────────────────────────────┤
│ [Herb x2] + [Crystal x1]    │
│           ↓                 │
│       [Hi-Potion]           │
├─────────────────────────────┤
│ Quantity: [- 5 +]  [CRAFT] │
└─────────────────────────────┘
```

---

## Character Stats

### Stats Panel

**Pattern:**
- Character portrait
- Level and class
- Primary stats (HP, MP, ATK, DEF, etc.)
- Experience progress bar
- Status effects

```
┌─────────────────────────────┐
│  [PORTRAIT]   CLOUD         │
│               Lv 24  Knight │
│                             │
│  HP:  450 / 500             │
│  MP:  120 / 150             │
│                             │
│  ATK:  85    DEF:  62       │
│  MAG:  45    RES:  38       │
│  SPD:  72    LCK:  50       │
│                             │
│  XP: ██████░░░░ 1,245/2,000 │
│                             │
│  Status: 🛡️ Defense Up      │
└─────────────────────────────┘
```

---

### Equipment Stats Comparison

**Pattern:**
- Current equipment on left
- New equipment on right
- Stats diff shown in green/red
- Clear visual indication of upgrade

```
┌──────────────┬──────────────┐
│ BRONZE SWORD │ IRON SWORD   │
│ ATK: 45      │ ATK: 62 (+17)│
│ MAG: 10      │ MAG: 15 (+5) │
│              │              │
│ [EQUIPPED]   │ [EQUIP?]     │
└──────────────┴──────────────┘
```

---

## Modal Windows

### Confirmation Dialog

**Pattern:**
- Small, centered
- Clear question
- Yes/No buttons
- Default to safe option (No)

```
    ┌─────────────────┐
    │                 │
    │ Discard item?   │
    │                 │
    │  [Yes]  [No]   │
    │          ^^^    │
    └─────────────────┘
```

---

### Information Panel

**Pattern:**
- Medium size, centered
- Title at top
- Content area with scroll
- Single "OK" button

```
┌─────────────────────────────┐
│ QUEST COMPLETE!             │
├─────────────────────────────┤
│                             │
│ You obtained:               │
│  • Gold Sword               │
│  • 500 Gold                 │
│  • 1,000 XP                 │
│                             │
├─────────────────────────────┤
│           [OK]              │
└─────────────────────────────┘
```

---

### Loading Screen

**Pattern:**
- Full screen overlay
- Semi-transparent background
- Spinning icon or animation
- Loading text with ellipsis

```
┌─────────────────────────────┐
│                             │
│                             │
│          ⟳                  │
│      Loading...             │
│                             │
│                             │
└─────────────────────────────┘
```

---

## Navigation Patterns

### Breadcrumb Navigation

```
[MENU] > [ITEMS] > [CONSUMABLES] > [POTION]
```

**Interaction:**
- Click any segment to jump there
- Backspace/B button goes up one level

---

### Tab Navigation

```
┌────┬────┬────┬────┐
│ITEM│EQUP│MAGC│STAT│
└────┴────┴────┴────┘
  ▼
  Currently viewing: ITEMS
```

**Interaction:**
- L/R shoulder buttons to switch tabs
- Tab indicators show which is active

---

### Keyboard/Controller Shortcuts

**Standard bindings:**
- **A / Enter** - Confirm / Select
- **B / Escape** - Cancel / Back
- **X / Space** - Alternative action (e.g., "Use")
- **Y / Shift** - Quick menu / Secondary action
- **L/R** - Tab switching / Page up/down
- **Start** - Pause / Menu
- **Select** - Map / Objectives

---

## Responsive Patterns

### Mobile Adaptations

**Challenges:**
- No physical buttons
- Smaller screen
- Touch input instead of cursor

**Solutions:**
- Larger touch targets (minimum 44x44px)
- Bottom-sheet menus for better reachability
- Swipe gestures for navigation
- Tap-and-hold for context menus
- Virtual D-pad for movement

---

### Desktop Adaptations

**Enhancements:**
- Mouse hover states
- Keyboard shortcuts visible
- Larger viewport = more info density
- Multi-column layouts
- Tooltips on hover

---

## Animation Patterns

### Menu Transitions

```css
.menu-enter {
  transform: translateX(100%);
  opacity: 0;
}

.menu-enter-active {
  transform: translateX(0);
  opacity: 1;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.menu-exit {
  transform: translateX(0);
  opacity: 1;
}

.menu-exit-active {
  transform: translateX(-100%);
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

---

### Selection Cursor

**Classic bouncing cursor:**

```css
@keyframes cursor-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

.menu-cursor {
  animation: cursor-bounce 0.6s ease-in-out infinite;
}
```

---

## Best Practices

### Do's ✓

- **Consistent navigation** - Same buttons do same things
- **Visual feedback** - Always show current selection
- **Undo/cancel** - Easy to back out of actions
- **Contextual help** - Show button prompts
- **Save confirmation** - Confirm destructive actions

### Don'ts ✗

- **No hidden navigation** - All options visible
- **No ambiguous icons** - Pair with text labels
- **No nested menus > 3 levels** - Keep hierarchies shallow
- **No inconsistent button mappings** - Stick to conventions
- **No missing cancel options** - Always provide escape route

---

## Implementation

See actual code:
- [/codebases/jrpg-ui-kit/components/dialogs/](../../../codebases/jrpg-ui-kit/components/dialogs/)
- [/codebases/jrpg-ui-kit/components/menus/](../../../codebases/jrpg-ui-kit/components/menus/)
- [/codebases/jrpg-ui-kit/components/status-bars/](../../../codebases/jrpg-ui-kit/components/status-bars/)

---

## Inspiration

**Study these games:**
- **Chrono Trigger** - Perfect menu flow, beautiful dialogs
- **Final Fantasy VI** - Comprehensive menu system
- **Secret of Mana** - Ring menu innovation
- **EarthBound** - Quirky but intuitive
- **Breath of Fire II** - Clean stat displays
