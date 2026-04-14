# Design Decisions

**Key decisions made during the creation of this JRPG UI design system**

---

## Why 16-bit SNES Aesthetic?

**Decision:** Focus exclusively on SNES-era (1991-1997) aesthetics, not NES or modern pixel art

**Rationale:**
- SNES represents peak of 2D JRPG UI design (Chrono Trigger, FF6)
- More color depth than NES (32,768 vs. 54 colors)
- Still constrained enough to feel authentic
- Nostalgic for target demographic (millennials, Gen X gamers)

**Alternatives considered:**
- NES aesthetic: Too limited (3-4 colors per sprite)
- GBA aesthetic: Too modern, loses CRT charm
- Generic pixel art: No coherent design language

---

## Why 8px Base Grid?

**Decision:** Use 8px as fundamental spacing unit

**Rationale:**
- SNES used 8x8 pixel tiles as hardware primitive
- Natural fit for pixel art (icons are 16x16, 24x24, 32x32)
- Large enough to prevent visual clutter
- Compatible with 4px sub-grid for flexibility

**Alternatives considered:**
- 4px grid: Too granular, harder to maintain consistency
- 16px grid: Too coarse, limits design options
- No grid: Chaos, impossible to maintain pixel perfection

---

## Why Increase Line Height from Original Games?

**Decision:** Use 1.5-1.6 line height instead of original 1.0-1.2

**Rationale:**
- Original games were played on CRTs with ~240p resolution
- Modern displays are 1080p+, making tight line height strain eyes
- Long play sessions require better readability
- WCAG accessibility guidelines recommend 1.5 minimum

**Tradeoff:** Less authentic, but significantly more usable

**Alternatives considered:**
- Keep 1.2 line height: Failed user testing, too cramped
- Use 1.8+ line height: Feels too modern, breaks immersion

---

## Why No Anti-Aliasing?

**Decision:** Disable all font smoothing and image anti-aliasing

**Rationale:**
- Core to pixel art aesthetic
- Anti-aliasing creates muddy, blurry edges
- SNES had no anti-aliasing
- Modern "retro" games that use AA feel inauthentic

**Implementation:**
```css
-webkit-font-smoothing: none;
image-rendering: pixelated;
```

**Alternatives considered:**
- Allow AA for body text: Tested, felt inconsistent
- Let browser decide: Results vary wildly by browser/OS

---

## Why Press Start 2P Font?

**Decision:** Use Press Start 2P as primary font

**Rationale:**
- Free (Google Fonts), commercially licensed
- Excellent web rendering
- Widely recognized as "pixel game font"
- Good character coverage
- Readable at small sizes

**Alternatives considered:**
- **Silkscreen:** Great but less distinctive
- **VT323:** Too monospace, less versatile
- **Pixel Millennium:** Best authenticity but requires paid license
- **Custom font:** Too much effort, reinventing wheel

---

## Why Design Tokens in CSS Variables?

**Decision:** Use CSS custom properties instead of Sass/Less variables

**Rationale:**
- Native browser support (all modern browsers)
- Runtime changeable (theme switching, dark mode)
- No build step required for prototyping
- Easier to debug in DevTools
- Framework-agnostic

**Alternatives considered:**
- Sass variables: Requires build step, not runtime-changeable
- JS constants: Not accessible in CSS
- Tailwind config: Tailwind-specific, less portable

---

## Why 4px Minimum Spacing?

**Decision:** All spacing must be multiples of 4px

**Rationale:**
- Half of base 8px grid for flexibility
- Even numbers prevent sub-pixel rendering
- Small enough for tight layouts (icon gaps, borders)
- Large enough to be intentional (prevents 1-2px arbitrary values)

**Alternatives considered:**
- 1px increments: Too granular, hard to maintain consistency
- 8px minimum: Too coarse, limits design flexibility

---

## Why Separate Resources and Codebases?

**Decision:** Split reference materials (resources/) from code (codebases/)

**Rationale:**
- Designers need visual reference, not code
- Developers need working code, not theory
- Clear separation of concerns
- Follows project structure conventions (AGENTS.md)

**Structure:**
- `/resources/jrpg-ui/` - Design documentation, inspiration
- `/codebases/jrpg-ui-kit/` - Implementation code, components
- `/notes/design-system/` - Quick reference, decisions
- `/history/` - Timeline of changes

---

## Why React as Primary Component Library?

**Decision:** Build React components first, then vanilla HTML/CSS

**Rationale:**
- React dominates web game UI market
- Component model fits JRPG UI patterns (reusable menus, dialogs)
- Hooks perfect for typewriter effects, animations
- Large talent pool understands React

**Also provided:** Vanilla HTML/CSS for framework-agnostic use

**Alternatives considered:**
- Vue: Growing but smaller ecosystem
- Svelte: Excellent but less enterprise adoption
- Web Components: Too bleeding-edge, poor IE support
- Vanilla only: Too much boilerplate for complex UIs

---

## Why No Smooth Gradients?

**Decision:** Only stepped gradients (2-4 color stops maximum)

**Rationale:**
- SNES could only do dithered gradients or hard steps
- Smooth gradients betray the pixel aesthetic
- Forces intentional color choices
- Maintains visual consistency

**Example:**
```css
/* Good - stepped */
background: linear-gradient(90deg, #40C048 0%, #28A030 100%);

/* Bad - smooth */
background: linear-gradient(
  90deg,
  #40C048 0%,
  #38B840 25%,
  #30A838 50%,
  #28A030 100%
);
```

---

## Why Border Widths of 2px, 4px, 6px?

**Decision:** Only even-numbered border widths

**Rationale:**
- Prevents sub-pixel rendering issues
- Easier to center visually (even numbers on both sides)
- 4px is sweet spot: visible but not chunky
- Matches tile-based aesthetic (multiples of 2)

**Alternatives considered:**
- 3px borders: Tested, felt "off", hard to pixel-align
- 1px borders: Too thin, disappears on low-DPI displays

---

## Why No Pure Black or White?

**Decision:** Use #000810 instead of #000000, #F8F8F0 instead of #FFFFFF

**Rationale:**
- SNES CRTs couldn't display pure black (had slight glow)
- Pure white too harsh on eyes
- Slight color tint adds warmth
- More authentic to actual game appearance

**Colors:**
- Black: `#000810` (very dark blue)
- White: `#F8F8F0` (warm off-white)

---

## Why Provide Both JSON and CSS Tokens?

**Decision:** Maintain parallel JSON and CSS token files

**Rationale:**
- CSS for direct use in stylesheets
- JSON for build tools, documentation generators
- JSON easier to parse programmatically
- CSS native to browsers

**Tradeoff:** Must keep both in sync (document in README)

---

## Why Focus on Accessibility Despite Retro Aesthetic?

**Decision:** Meet WCAG AA standards even if it compromises authenticity

**Rationale:**
- Legal requirements (ADA, EU regulations)
- Ethical responsibility
- Broader audience reach (low vision, color blindness)
- Retro aesthetic doesn't excuse poor UX

**Adjustments made:**
- Increased contrast ratios (minimum 4.5:1)
- Larger minimum font sizes (12px vs. 8px)
- Better line height (1.6 vs. 1.0)
- Color + icons for status (not color alone)

**Line we won't cross:** Anti-aliasing (breaks aesthetic entirely)

---

## Why Include Typewriter Effect?

**Decision:** Build typewriter text animation into DialogBox component

**Rationale:**
- Quintessential JRPG experience
- Creates pacing, builds tension
- Nostalgic trigger for players
- Easy to implement (50ms interval default)

**UX considerations:**
- Allow skip-to-end (click/enter)
- Disable in accessibility mode
- Configurable speed
- Auto-complete after timeout

---

## Why Support Mobile Despite Controller Heritage?

**Decision:** Make all UI touch-friendly despite JRPG = console heritage

**Rationale:**
- Modern JRPGs release on mobile (Stardew Valley, Undertale)
- Web games are increasingly mobile-first
- Touch gestures can map to controller inputs
- Doesn't compromise desktop experience

**Mobile adaptations:**
- Minimum 44x44px touch targets
- Virtual D-pad for navigation
- Swipe gestures for menus
- Bottom-sheet dialogs (easier to reach)

---

## Unresolved Decisions

### Should We Support IE11?

**Status:** No

**Rationale:** IE11 lacks CSS Grid, CSS Variables, and `image-rendering: pixelated`. Polyfills would compromise aesthetic.

### Should We Build Vue Components?

**Status:** Planned, not yet implemented

**Rationale:** Demand exists, but React takes priority. Community contributions welcome.

### Should We Include Sound Design?

**Status:** Out of scope

**Rationale:** This is a visual design system. Sound effects would require audio assets, licensing complexity. Consider as future expansion.

---

## Revision History

- **2026-04-14:** Initial design system creation
- **Future:** Track changes here as system evolves
