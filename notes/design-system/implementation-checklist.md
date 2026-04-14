# Implementation Checklist

**Before launching your JRPG UI, verify these items**

---

## Setup Phase

### Design Tokens

- [ ] Design tokens CSS file imported (`@import 'tokens.css'`)
- [ ] Tokens load before other stylesheets
- [ ] No hardcoded colors/sizes (use CSS variables)
- [ ] Tokens tested in all target browsers

### Fonts

- [ ] Pixel fonts loaded (Press Start 2P, Silkscreen, VT323)
- [ ] Fonts preloaded for performance (`<link rel="preload">`)
- [ ] Font smoothing disabled (`-webkit-font-smoothing: none`)
- [ ] Fallback fonts defined (`monospace` as backup)
- [ ] Fonts work offline (self-hosted or cached)

### Base Styles

- [ ] Pixel rendering enabled (`image-rendering: pixelated`)
- [ ] Box-sizing set to border-box globally
- [ ] CSS reset/normalize applied
- [ ] Base font size and line height set
- [ ] Default text shadow applied

---

## Visual Foundations

### Colors

- [ ] Using exact hex values from tokens
- [ ] No pure black (#000) or pure white (#FFF)
- [ ] Limited to 8-12 colors per screen
- [ ] Contrast ratios meet WCAG AA (4.5:1 for text)
- [ ] Tested with color blindness simulators

### Typography

- [ ] All font sizes are multiples of 4px
- [ ] Line height ≥ 1.5 for body text
- [ ] Text shadows applied for depth
- [ ] No font sizes below 12px (accessibility)
- [ ] Text readable at 150% browser zoom

### Spacing

- [ ] All margins/padding use spacing tokens
- [ ] All spacing multiples of 4px (ideally 8px)
- [ ] Layouts align to 8px base grid
- [ ] Consistent vertical rhythm
- [ ] No arbitrary spacing values

### Icons

- [ ] Icon sizes are 16px, 24px, 32px, 48px, or 64px
- [ ] Icons have 1-2px outlines for readability
- [ ] Icons render pixel-perfect (no blur)
- [ ] Alt text provided for all icons
- [ ] Icons scale correctly at 2x, 3x

---

## Components

### Buttons

- [ ] All buttons keyboard accessible (Tab + Enter)
- [ ] Focus indicators visible
- [ ] Hover states work on mouse
- [ ] Active/pressed states provide feedback
- [ ] Disabled state clearly different
- [ ] Touch targets ≥ 44x44px (mobile)
- [ ] Border widths are even numbers

### Dialog Boxes

- [ ] Text readable with shadows
- [ ] Typewriter effect skippable (click/Enter)
- [ ] Speaker names clearly visible
- [ ] Continue indicator (▼) appears when done
- [ ] Semi-transparent background
- [ ] Screen reader accessible

### Menus

- [ ] Arrow key navigation works
- [ ] Current selection clearly indicated
- [ ] Cursor icon animates
- [ ] Disabled items visually muted
- [ ] Scrollable if content overflows
- [ ] Touch-friendly on mobile (no hover-only states)

### Status Bars

- [ ] HP bar color changes at thresholds (green → yellow → red)
- [ ] Numeric values visible alongside bars
- [ ] Smooth transitions (but not too slow)
- [ ] Color + text (not color alone)
- [ ] Monospace font for aligned numbers

---

## Layout & Responsive

### Pixel Perfection

- [ ] No sub-pixel positioning
- [ ] All borders align to pixel grid
- [ ] Images render sharp (no blur)
- [ ] Layouts don't break at 1x, 2x, 3x scale
- [ ] Text doesn't wrap mid-word

### Responsive Breakpoints

- [ ] Mobile (320px+): Stack vertically, touch-friendly
- [ ] Tablet (768px+): 2-column layouts
- [ ] Desktop (1024px+): Multi-column, hover states
- [ ] Large desktop (1920px+): Scale up (2x or 3x)

### Mobile Specific

- [ ] Touch targets ≥ 44x44px
- [ ] No hover-only interactions
- [ ] Virtual D-pad or swipe gestures
- [ ] Bottom-sheet dialogs (easier to reach)
- [ ] Text size ≥ 12px (no smaller)

---

## Accessibility

### Keyboard Navigation

- [ ] All interactive elements tabbable
- [ ] Tab order logical (top to bottom, left to right)
- [ ] Enter/Space activates buttons
- [ ] Escape closes dialogs
- [ ] Arrow keys navigate menus
- [ ] Focus indicators always visible

### Screen Readers

- [ ] Semantic HTML used (`<button>`, `<nav>`, etc.)
- [ ] ARIA labels on icon-only buttons
- [ ] ARIA live regions for dynamic content
- [ ] Alt text on images (empty `alt=""` if decorative)
- [ ] Headings structured logically (h1 → h2 → h3)

### Contrast & Readability

- [ ] Text contrast ≥ 4.5:1 (WCAG AA)
- [ ] Large text ≥ 3:1
- [ ] UI components ≥ 3:1
- [ ] Tested with Lighthouse (90+ accessibility score)
- [ ] Tested with axe DevTools (0 violations)

### Motion & Animation

- [ ] `prefers-reduced-motion` respected
- [ ] Animations skippable or instant in reduced motion
- [ ] Typewriter effect disableable
- [ ] No flashing content (seizure risk)
- [ ] Cursor animations subtle

### Color Blindness

- [ ] Never use color alone to convey info
- [ ] HP bar has numeric value + color
- [ ] Status effects have icons + color
- [ ] Tested with Deuteranopia simulator
- [ ] Tested with Protanopia simulator

---

## Performance

### Loading

- [ ] Critical CSS inlined or loaded first
- [ ] Fonts preloaded
- [ ] Images optimized (PNG-8 for sprites)
- [ ] First Contentful Paint < 1.0s
- [ ] Time to Interactive < 2.5s

### Runtime

- [ ] Animations at 60fps
- [ ] No jank when scrolling
- [ ] Debounced event handlers (resize, scroll)
- [ ] Sprite sheets used for icons (reduce HTTP requests)
- [ ] CSS containment for long lists

### Bundle Size

- [ ] Total CSS < 50KB (minified + gzipped)
- [ ] Total JS < 100KB (minified + gzipped)
- [ ] Tree-shake unused code
- [ ] Code-split large components

---

## Browser Compatibility

### Tested On

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Required Features

- [ ] CSS Custom Properties (all modern browsers)
- [ ] CSS Grid (IE11 not supported)
- [ ] `image-rendering: pixelated` (fallback for Edge)
- [ ] Flexbox (all modern browsers)

### Graceful Degradation

- [ ] Fallback for unsupported `image-rendering`
- [ ] Fallback fonts if pixel fonts fail to load
- [ ] JavaScript-free base UI (progressive enhancement)

---

## Content

### Text

- [ ] No lorem ipsum (use real or realistic content)
- [ ] Dialog text proofread (typos break immersion)
- [ ] Button labels action-oriented ("Start", not "Click Here")
- [ ] Error messages helpful ("Invalid name" not "Error 400")

### Copy Tone

- [ ] Matches JRPG genre (fantastical, adventurous)
- [ ] Consistent voice (formal vs. casual)
- [ ] No modern slang (breaks immersion)
- [ ] Quest text concise (2-3 sentences max per dialog)

---

## Testing

### Manual Testing

- [ ] Clicked every button
- [ ] Opened every menu
- [ ] Tested all dialogs
- [ ] Navigated with keyboard only
- [ ] Zoomed to 200%
- [ ] Tried on mobile device
- [ ] Tested in dark room (contrast check)

### Automated Testing

- [ ] Lighthouse audit (Performance, Accessibility, Best Practices)
- [ ] axe DevTools (accessibility violations)
- [ ] WAVE browser extension
- [ ] Contrast checker (all text)

### Cross-Browser

- [ ] Chrome DevTools (device emulation)
- [ ] Firefox Developer Tools
- [ ] Safari Web Inspector
- [ ] Real device testing (iOS, Android)

### Accessibility Testing

- [ ] Screen reader (NVDA, JAWS, VoiceOver)
- [ ] Keyboard only (unplug mouse)
- [ ] Color blindness simulator
- [ ] High contrast mode

---

## Polish

### Animations

- [ ] Button press animation (transform + shadow)
- [ ] Menu slide transitions
- [ ] Typewriter text reveal
- [ ] HP bar smooth fill
- [ ] Cursor bouncing

### Sounds (Optional)

- [ ] Menu blip (button press)
- [ ] Dialog advance (text complete)
- [ ] Error buzz (invalid action)
- [ ] Success chime (quest complete)

### Details

- [ ] Corner decorations on panels
- [ ] Shadow depth consistent
- [ ] Text shadows on all text
- [ ] Border thickness consistent
- [ ] Icon alignment perfect

---

## Launch

### Pre-Launch

- [ ] All checklist items complete
- [ ] Tested by 3+ people
- [ ] Documented known issues
- [ ] Created user guide (if needed)
- [ ] Set up error tracking

### Launch Day

- [ ] Monitor performance metrics
- [ ] Watch for console errors
- [ ] Gather user feedback
- [ ] Prepare hotfix process

### Post-Launch

- [ ] Address critical bugs within 24h
- [ ] Track accessibility issues
- [ ] Collect feature requests
- [ ] Plan iteration roadmap

---

## Maintenance

### Regular Checks

- [ ] Monthly: Update dependencies
- [ ] Monthly: Re-run accessibility audits
- [ ] Quarterly: Review analytics (where users struggle)
- [ ] Quarterly: Update for new browser versions

### Documentation

- [ ] Keep CHANGELOG.md updated
- [ ] Document new components added
- [ ] Update design tokens when colors change
- [ ] Maintain this checklist

---

## Quick Sanity Check

**5-Minute Smoke Test:**

1. Load the page → No console errors?
2. Click primary button → Works?
3. Open a dialog → Text readable?
4. Navigate menu with arrow keys → Works?
5. Zoom to 200% → Still usable?

**If all ✅, you're probably good to go!**

---

## Resources

- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/extension/)
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Color Blindness Simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/)
