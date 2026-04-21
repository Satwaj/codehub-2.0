/* ═══════════════════════════════════════════
   TFLCLUB — Count Up Animation Hook
   ═══════════════════════════════════════════ */
import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for animating a number from 0 to target value.
 * Used for stat counters, price displays, etc.
 * 
 * @param {number} target - Target number to count to
 * @param {number} duration - Animation duration in ms
 * @param {boolean} start - Whether to start the animation
 * @returns {number} - Current animated value
 */
export const useCountUp = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    startTimeRef.current = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [target, duration, start]);

  return count;
};

export default useCountUp;
