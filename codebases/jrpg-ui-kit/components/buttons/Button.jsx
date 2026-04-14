import React from 'react';
import './Button.css';

/**
 * JRPG-style Button Component
 *
 * A pixel-perfect button with authentic 16-bit SNES aesthetics
 *
 * @example
 * <Button>Start Game</Button>
 * <Button variant="primary" size="lg">Continue</Button>
 * <Button variant="danger" disabled>Delete Save</Button>
 */

const Button = ({
  children,
  variant = 'default',
  size = 'md',
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
  const classNames = [
    'jrpg-button',
    `jrpg-button--${variant}`,
    `jrpg-button--${size}`,
    disabled && 'jrpg-button--disabled',
    fullWidth && 'jrpg-button--full-width',
    className
  ].filter(Boolean).join(' ');

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      <span className="jrpg-button__text">{children}</span>
    </button>
  );
};

export default Button;
