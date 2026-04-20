# Contributing to Pokemon JRPG UI Design System

Thank you for your interest in contributing to the Pokemon JRPG UI Design System! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Types of Contributions](#types-of-contributions)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Coding Standards](#coding-standards)
- [Documentation Standards](#documentation-standards)
- [Submitting Changes](#submitting-changes)
- [Pull Request Process](#pull-request-process)
- [Reporting Issues](#reporting-issues)
- [Project Structure](#project-structure)
- [Questions or Need Help?](#questions-or-need-help)

## Code of Conduct

We are committed to providing a welcoming and inclusive environment for all contributors. Please be respectful, constructive, and professional in all interactions. Harassment, discrimination, and unethical behavior will not be tolerated.

## Getting Started

### Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript
- Familiarity with React (for component contributions)
- Git and GitHub account
- Node.js (for running examples and tools)

### Setup Your Development Environment

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/pokemon.git
   cd pokemon
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/lsunny03/pokemon.git
   ```

4. **Create a working branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Types of Contributions

### We Welcome

✅ **Bug Fixes**
- Issues with existing components or utilities
- Documentation errors or typos
- Accessibility bugs
- Performance improvements

✅ **New Features**
- New components (Button, Dialog, StatusBar variants)
- Additional design tokens
- New utility classes
- JavaScript utilities
- Examples and demos

✅ **Documentation**
- Clarifications and improvements
- New guides and tutorials
- Better code examples
- Visual diagrams
- Accessibility notes
- Design decision explanations

✅ **Design Resources**
- New color palettes
- Typography variations
- Icon sets
- UI pattern analysis
- Game inspiration references

✅ **Tests & Quality**
- Unit tests
- Integration tests
- Accessibility testing
- Cross-browser testing reports
- Performance optimization

✅ **Examples & Demos**
- Working code examples
- Integration guides
- Tutorial projects
- Use case demonstrations

### Guidelines for What We Accept

- Contributions should align with the retro JRPG aesthetic
- Changes must maintain backward compatibility when possible
- Code must be accessible (WCAG AA minimum)
- All contributions need appropriate documentation
- Follow the existing code style and conventions

## Development Setup

### Project Structure


### Installing Dependencies

```bash
cd codebases/jrpg-ui-kit
npm install
# Open the complete example in your browser
open codebases/jrpg-ui-kit/examples/complete-example.html

# Or use a local server
cd codebases/jrpg-ui-kit/examples
python3 -m http.server 8000
# Visit http://localhost:8000/complete-example.html
# Update main branch
git fetch upstream
git checkout main
git merge upstream/main

# Create feature branch with descriptive name
git checkout -b feature/add-menu-component
git checkout -b fix/dialog-typewriter-bug
git checkout -b docs/expand-color-guide
/* 1. CSS Custom Properties */
:root {
  --new-token: value;
}

/* 2. Base Styles */
.component {
  property: var(--token);
}

/* 3. Modifiers */
.component--modifier {
  property: value;
}

/* 4. States */
.component:hover {
  property: value;
}

/* 5. Media Queries */
@media (max-width: 768px) {
  .component {
    property: value;
  }
}
// 1. Imports
import React, { useState } from 'react';
import './Button.css';

// 2. Component definition
export default function Button({
  variant = 'default',
  size = 'md',
  disabled = false,
  children,
  ...props
}) {
  // 3. Logic
  const className = `jrpg-button jrpg-button--${variant} jrpg-button--${size}`;
  
  // 4. Return
  return (
    <button
      className={className}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
// ✅ DO: Clear, documented code
/**
 * Creates a typewriter effect for text elements
 * @param {HTMLElement} element - Target element
 * @param {string} text - Text to display
 * @param {Object} options - Configuration
 * @param {number} options.speed - Milliseconds per character (default: 50)
 * @returns {Object} Controller with play/pause/stop methods
 */
function typewriter(element, text, options = {}) {
  const { speed = 50 } = options;
  // Implementation...
}

// ❌ DON'T: Unclear or undocumented code
function tw(el, txt, s) {
  // Implementation...
}
# Component/Feature Name

Brief description.

## Overview

Detailed explanation.

## Features

- Feature 1
- Feature 2

## Usage

### HTML
\`\`\`html
<button class="jrpg-button">Click me</button>
\`\`\`

### React
\`\`\`jsx
<Button>Click me</Button>
\`\`\`

## Variants

### Primary
[Description and code]

## Accessibility

WCAG AA compliance notes.

## Browser Support

Tested on: Chrome, Firefox, Safari, Edge

## Related

Links to related docs.
// ✅ DO: Explain WHY, not WHAT
// Use letter-spacing to match SNES game style
text-shadow: 2px 2px 0 #000;

// ❌ DON'T: State the obvious
// Set text shadow
text-shadow: 2px 2px 0 #000;
feat: add menu component with keyboard navigation
fix: correct typewriter speed calculation
docs: expand color palette guide
refactor: simplify status bar component
test: add accessibility tests for button
chore: update dependencies
# Stage changes
git add .

# Create descriptive commit
git commit -m "feat: add typewriter pause/resume functionality"

# Keep commits logical and focused
# One commit per feature/fix when possible
# Push to your fork
git push origin feature/your-feature-name

# Force push only if you know what you're doing
git push origin feature/your-feature-name --force
## Description
Brief description of changes.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Design resource
- [ ] Code refactor

## Related Issues
Fixes #[issue number]

## Changes Made
- Change 1
- Change 2
- Change 3

## Testing
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested on mobile
- [ ] Accessibility verified
- [ ] Documentation reviewed

## Checklist
- [ ] Code follows style guidelines
- [ ] Documentation is updated
- [ ] No breaking changes
- [ ] Comments added for complex logic
- [ ] All tests passing

## Screenshots (if applicable)
[Add screenshots for UI changes]

## Additional Notes
Any additional context for reviewers.
## Description
Clear description of the issue.

## Steps to Reproduce
1. Step 1
2. Step 2
3. Step 3

## Expected Behavior
What should happen.

## Actual Behavior
What actually happens.

## Screenshots
[If applicable]

## Environment
- Browser: Chrome 120
- OS: macOS 14.2
- Device: Desktop / Mobile

## Additional Context
Any other relevant information.
components/
└── my-component/
    ├── MyComponent.jsx         # React component
    ├── MyComponent.css         # Styles
    ├── README.md              # Documentation
    ├── examples.html          # HTML example
    └── usage.md               # Usage guide