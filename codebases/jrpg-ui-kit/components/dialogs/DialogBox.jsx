import React, { useState, useEffect, useRef } from 'react';
import './DialogBox.css';

/**
 * JRPG-style Dialog Box Component
 *
 * Classic JRPG text box with typewriter effect
 *
 * @example
 * <DialogBox speaker="Hero">
 *   The legendary sword lies beyond the mountains...
 * </DialogBox>
 *
 * <DialogBox onComplete={() => console.log('Text shown')}>
 *   Press ENTER to continue.
 * </DialogBox>
 */

const DialogBox = ({
  children,
  speaker = null,
  typewriterSpeed = 50,
  autoPlay = true,
  onComplete = () => {},
  showContinueIndicator = true,
  position = 'bottom', // 'bottom', 'center', 'top'
  className = '',
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(!autoPlay);
  const [showIndicator, setShowIndicator] = useState(false);
  const textRef = useRef('');
  const indexRef = useRef(0);
  const intervalRef = useRef(null);

  const text = typeof children === 'string' ? children : '';

  useEffect(() => {
    if (!autoPlay || !text) {
      setDisplayedText(text);
      setIsComplete(true);
      return;
    }

    textRef.current = text;
    indexRef.current = 0;
    setDisplayedText('');
    setIsComplete(false);
    setShowIndicator(false);

    intervalRef.current = setInterval(() => {
      if (indexRef.current < textRef.current.length) {
        setDisplayedText(textRef.current.substring(0, indexRef.current + 1));
        indexRef.current++;
      } else {
        clearInterval(intervalRef.current);
        setIsComplete(true);
        setShowIndicator(true);
        onComplete();
      }
    }, typewriterSpeed);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [text, typewriterSpeed, autoPlay, onComplete]);

  const handleClick = () => {
    if (!isComplete) {
      // Skip to end
      clearInterval(intervalRef.current);
      setDisplayedText(text);
      setIsComplete(true);
      setShowIndicator(true);
      onComplete();
    }
  };

  const classNames = [
    'jrpg-dialog-box',
    `jrpg-dialog-box--${position}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames} onClick={handleClick}>
      {speaker && (
        <div className="jrpg-dialog-box__speaker">
          {speaker}
        </div>
      )}
      <div className="jrpg-dialog-box__content">
        <p className="jrpg-dialog-box__text">
          {displayedText}
        </p>
        {showContinueIndicator && isComplete && showIndicator && (
          <span className="jrpg-dialog-box__indicator">▼</span>
        )}
      </div>
    </div>
  );
};

export default DialogBox;
