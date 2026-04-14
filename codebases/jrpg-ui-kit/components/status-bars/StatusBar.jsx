import React from 'react';
import './StatusBar.css';

/**
 * JRPG-style Status Bar Component
 *
 * Classic HP/MP/XP bars with color-coded fills
 *
 * @example
 * <StatusBar
 *   label="HP"
 *   current={450}
 *   max={500}
 *   type="hp"
 * />
 */

const StatusBar = ({
  label = 'HP',
  current = 0,
  max = 100,
  type = 'hp', // 'hp', 'mp', 'xp', 'stamina'
  showNumbers = true,
  animated = true,
  size = 'md', // 'sm', 'md', 'lg'
  className = '',
}) => {
  const percentage = Math.min(Math.max((current / max) * 100, 0), 100);

  // Determine color based on type and percentage
  const getBarColor = () => {
    if (type === 'hp') {
      if (percentage >= 75) return 'var(--hp-full)';
      if (percentage >= 50) return 'var(--hp-good)';
      if (percentage >= 25) return 'var(--hp-warning)';
      return 'var(--hp-critical)';
    }
    if (type === 'mp') {
      return percentage >= 50 ? 'var(--mp-full)' : 'var(--mp-low)';
    }
    if (type === 'xp') {
      return 'var(--xp-bar)';
    }
    if (type === 'stamina') {
      return percentage >= 50 ? 'var(--stamina-full)' : 'var(--stamina-depleted)';
    }
    return 'var(--hp-full)';
  };

  const classNames = [
    'jrpg-status-bar',
    `jrpg-status-bar--${size}`,
    `jrpg-status-bar--${type}`,
    animated && 'jrpg-status-bar--animated',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      <span className="jrpg-status-bar__label">{label}</span>

      <div className="jrpg-status-bar__container">
        <div
          className="jrpg-status-bar__fill"
          style={{
            width: `${percentage}%`,
            background: getBarColor()
          }}
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={`${label}: ${current} out of ${max}`}
        />
      </div>

      {showNumbers && (
        <span className="jrpg-status-bar__value">
          {current}/{max}
        </span>
      )}
    </div>
  );
};

export default StatusBar;
