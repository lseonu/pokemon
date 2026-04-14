/**
 * JRPG UI Kit - Main Entry Point
 *
 * Import everything from here:
 * import { Button, DialogBox, StatusBar } from '@pokemon/jrpg-ui-kit';
 */

// Components
export { default as Button } from './components/buttons/Button.jsx';
export { default as DialogBox } from './components/dialogs/DialogBox.jsx';
export { default as StatusBar } from './components/status-bars/StatusBar.jsx';

// Design tokens (for programmatic access)
import tokens from './design-tokens/tokens.json' assert { type: 'json' };
export { tokens };

// Version
export const VERSION = '1.0.0';
