/* ═══════════════════════════════════════════
   TFLCLUB — Intersection Observer Hook
   ═══════════════════════════════════════════ */
import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for detecting when an element enters the viewport.
 * Used for scroll-triggered animations.
 * 
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Root margin
 * @param {boolean} options.triggerOnce - Only trigger once
 * @returns {[React.RefObject, boolean]} - Ref and isVisible state
 */
export const useIntersection = ({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true,
} = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
};

export default useIntersection;
