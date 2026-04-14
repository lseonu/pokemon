/**
 * Typewriter Effect Utility
 *
 * Classic JRPG text reveal animation
 *
 * @example
 * import { typewriter } from './utils/typewriter';
 *
 * typewriter(element, 'Hello world!', {
 *   speed: 50,
 *   onComplete: () => console.log('Done!')
 * });
 */

/**
 * Typewriter effect for text reveal
 *
 * @param {HTMLElement} element - Target element
 * @param {string} text - Text to reveal
 * @param {Object} options - Configuration
 * @param {number} options.speed - Milliseconds per character (default: 50)
 * @param {Function} options.onComplete - Callback when complete
 * @param {Function} options.onCharacter - Callback per character
 * @returns {Object} - Control object with stop() method
 */
export function typewriter(element, text, options = {}) {
  const {
    speed = 50,
    onComplete = () => {},
    onCharacter = () => {},
  } = options;

  let index = 0;
  let intervalId = null;

  element.textContent = '';

  intervalId = setInterval(() => {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      onCharacter(text.charAt(index), index);
      index++;
    } else {
      clearInterval(intervalId);
      onComplete();
    }
  }, speed);

  // Return control object
  return {
    stop: () => {
      clearInterval(intervalId);
      element.textContent = text;
      onComplete();
    },
    pause: () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    },
    resume: () => {
      if (!intervalId && index < text.length) {
        intervalId = setInterval(() => {
          if (index < text.length) {
            element.textContent += text.charAt(index);
            onCharacter(text.charAt(index), index);
            index++;
          } else {
            clearInterval(intervalId);
            onComplete();
          }
        }, speed);
      }
    }
  };
}

/**
 * Batch typewriter for multiple elements
 *
 * @example
 * typewriterBatch([
 *   { element: el1, text: 'First line', speed: 30 },
 *   { element: el2, text: 'Second line', speed: 50 }
 * ]);
 */
export function typewriterBatch(configs, onAllComplete = () => {}) {
  let completed = 0;
  const controllers = [];

  configs.forEach((config) => {
    const controller = typewriter(config.element, config.text, {
      ...config,
      onComplete: () => {
        completed++;
        if (config.onComplete) config.onComplete();
        if (completed === configs.length) {
          onAllComplete();
        }
      }
    });
    controllers.push(controller);
  });

  return {
    stopAll: () => controllers.forEach(c => c.stop()),
    pauseAll: () => controllers.forEach(c => c.pause()),
    resumeAll: () => controllers.forEach(c => c.resume()),
  };
}

/**
 * Sequential typewriter (one after another)
 *
 * @example
 * typewriterSequential([
 *   { element: el1, text: 'First...' },
 *   { element: el2, text: 'Then this...' }
 * ]);
 */
export function typewriterSequential(configs, onAllComplete = () => {}) {
  let currentIndex = 0;
  let currentController = null;

  function startNext() {
    if (currentIndex >= configs.length) {
      onAllComplete();
      return;
    }

    const config = configs[currentIndex];
    currentController = typewriter(config.element, config.text, {
      ...config,
      onComplete: () => {
        if (config.onComplete) config.onComplete();
        currentIndex++;
        startNext();
      }
    });
  }

  startNext();

  return {
    stop: () => {
      if (currentController) currentController.stop();
    },
    skip: () => {
      // Skip to end of sequence
      configs.forEach((config, index) => {
        config.element.textContent = config.text;
      });
      onAllComplete();
    }
  };
}

export default {
  typewriter,
  typewriterBatch,
  typewriterSequential
};
