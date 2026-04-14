# JRPG UI Design System - Quick Overview

**Last Updated:** 2026-04-14

## What Is This?

A complete, production-ready design system for building 16-bit SNES-style JRPG user interfaces in modern web applications.

---

## Quick Links

- **Design Research:** [/resources/jrpg-ui/](../../resources/jrpg-ui/)
- **Implementation Code:** [/codebases/jrpg-ui-kit/](../../codebases/jrpg-ui-kit/)
- **Change History:** [/history/](../../history/)

---

## For Different Roles

### Designers
1. Study [color palettes](../../resources/jrpg-ui/color-palettes/)
2. Review [typography guidelines](../../resources/jrpg-ui/typography/)
3. Browse [UI patterns](../../resources/jrpg-ui/ui-patterns/)
4. Reference [spacing system](../../resources/jrpg-ui/spacing-grids/)

### Developers
1. Import [design tokens](../../codebases/jrpg-ui-kit/design-tokens/tokens.css)
2. Use [components](../../codebases/jrpg-ui-kit/components/)
3. Check [examples](../../codebases/jrpg-ui-kit/examples/)
4. Read [implementation guides](quick-reference-devs.md)

### Project Managers
- **Philosophy:** Authentic SNES aesthetics with modern usability
- **Target:** Retro game fans who expect polish
- **Tradeoffs:** Pixel aesthetics may sacrifice some modern UX conventions
- **Timeline:** Fully documented, ready for implementation

---

## Core Principles

### 1. Pixel-Perfect
- All measurements multiples of 4px (ideally 8px)
- No anti-aliasing, no sub-pixel rendering
- Borders always even numbers (2px, 4px, 6px)

### 2. Limited Palette
- SNES could show 256 colors on-screen max
- Each sprite/element uses 4-16 colors
- High saturation, high contrast

### 3. Authentic Constraints
- Respect tile-based layouts (8x8 grid)
- Use stepped gradients, not smooth
- Hard shadows, no blur

### 4. Modern Usability
- Increase readability vs. original games
- Support keyboard, mouse, touch, controller
- Meet WCAG AA accessibility standards

---

## Key Statistics

- **Color Palettes:** 7 themed palettes + 18 element colors
- **Design Tokens:** 150+ variables (colors, spacing, typography)
- **Components:** Buttons, dialogs, menus, status bars, cards
- **Documentation Pages:** 15+ comprehensive guides
- **Code Examples:** React, vanilla HTML/CSS, utilities

---

## Design Decisions

See [design-decisions.md](./design-decisions.md) for rationale behind key choices.

---

## Getting Started

### 1-Minute Start (Designers)
```
Open: /resources/jrpg-ui/color-palettes/README.md
Action: Pick a color scheme
Reference: /resources/jrpg-ui/ui-patterns/README.md
```

### 1-Minute Start (Developers)
```bash
# Copy tokens to your project
cp codebases/jrpg-ui-kit/design-tokens/tokens.css src/styles/

# Import in your CSS
@import './tokens.css';

# Use components
import { Button, DialogBox } from './components';
```

---

## Common Questions

**Q: Can I use smooth gradients?**
A: No. Use stepped gradients (2-4 color stops max).

**Q: What font sizes are allowed?**
A: Only multiples of 4px: 8px, 12px, 16px, 20px, 24px, 32px, 40px.

**Q: Can I use custom colors?**
A: Use design tokens first. New colors must fit SNES aesthetic.

**Q: How do I handle responsive design?**
A: Scale everything by 2x, 3x, 4x. Never scale by odd multipliers.

**Q: Is this accessible?**
A: Yes. We've adjusted line height, contrast, and text size from original games to meet WCAG AA.

---

## Next Steps

- [ ] Review [quick reference for developers](./quick-reference-devs.md)
- [ ] Read [accessibility notes](./accessibility-notes.md)
- [ ] Check [implementation checklist](./implementation-checklist.md)
- [ ] Browse [responsive strategy](./responsive-strategy.md)

---

## Support

- **Issues:** File in project issue tracker
- **Questions:** Check [design-decisions.md](./design-decisions.md) first
- **Contributions:** Follow conventions in [AGENTS.md](../../AGENTS.md)
