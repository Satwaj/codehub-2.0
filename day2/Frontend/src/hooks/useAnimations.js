import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for fade-in animations on scroll
 * @param {number} delay - Delay before animation starts
 * @param {number} duration - Animation duration
 */
export const useFadeInOnScroll = (delay = 0, duration = 0.8) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.from(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      duration,
      delay,
      opacity: 0,
      y: 40,
      ease: 'power2.out'
    });
  }, [delay, duration]);

  return ref;
};

/**
 * Custom hook for number counter animations
 * @param {number} target - Target number to count to
 * @param {number} duration - Animation duration
 */
export const useCountUp = (target, duration = 2) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const counter = { value: 0 };
    gsap.to(counter, {
      value: target,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        if (ref.current) {
          ref.current.innerText = Math.round(counter.value).toLocaleString();
        }
      }
    });
  }, [target, duration]);

  return ref;
};

/**
 * Custom hook for parallax scroll effect
 * @param {number} speed - Parallax speed multiplier
 */
export const useParallax = (speed = 0.5) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      y: (i, target) => {
        return gsap.getProperty(target, 'offsetHeight') * speed;
      },
      scrollTrigger: {
        trigger: ref.current,
        scrub: true,
        markers: false
      }
    });
  }, [speed]);

  return ref;
};

/**
 * Custom hook for hover animations
 * @param {object} animationProps - GSAP animation properties
 */
export const useHoverAnimation = (animationProps = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const defaultProps = {
      duration: 0.3,
      ease: 'power2.out',
      ...animationProps
    };

    element.addEventListener('mouseenter', () => {
      gsap.to(element, defaultProps);
    });

    element.addEventListener('mouseleave', () => {
      gsap.to(element, {
        duration: 0.3,
        ease: 'power2.out',
        ...Object.keys(defaultProps).reduce((acc, key) => {
          if (!['duration', 'ease'].includes(key)) {
            acc[key] = 0;
          }
          return acc;
        }, {})
      });
    });

    return () => {
      element.removeEventListener('mouseenter', () => {});
      element.removeEventListener('mouseleave', () => {});
    };
  }, [animationProps]);

  return ref;
};

export default {
  useFadeInOnScroll,
  useCountUp,
  useParallax,
  useHoverAnimation
};
