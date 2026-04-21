/* ═══════════════════════════════════════════
   TFLCLUB — GSAP Animation Helpers
   ═══════════════════════════════════════════ */
import gsap from 'gsap';

/**
 * Fade in and slide up an element
 */
export const fadeInUp = (element, delay = 0, duration = 0.8) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration, delay, ease: 'power3.out' }
  );
};

/**
 * Scale in an element from center
 */
export const scaleIn = (element, delay = 0, duration = 0.6) => {
  return gsap.fromTo(
    element,
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration, delay, ease: 'back.out(1.7)' }
  );
};

/**
 * Slide in from left
 */
export const slideInLeft = (element, delay = 0, duration = 0.8) => {
  return gsap.fromTo(
    element,
    { opacity: 0, x: -60 },
    { opacity: 1, x: 0, duration, delay, ease: 'power3.out' }
  );
};

/**
 * Slide in from right
 */
export const slideInRight = (element, delay = 0, duration = 0.8) => {
  return gsap.fromTo(
    element,
    { opacity: 0, x: 60 },
    { opacity: 1, x: 0, duration, delay, ease: 'power3.out' }
  );
};

/**
 * Stagger children elements with fade in up
 */
export const staggerFadeInUp = (elements, stagger = 0.1, delay = 0) => {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.6, stagger, delay, ease: 'power3.out' }
  );
};

/**
 * Animate number counter
 */
export const animateNumber = (element, target, duration = 2, prefix = '', suffix = '') => {
  const obj = { value: 0 };
  return gsap.to(obj, {
    value: target,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      if (element) {
        element.textContent = `${prefix}${Math.round(obj.value).toLocaleString()}${suffix}`;
      }
    },
  });
};

/**
 * Create infinite horizontal marquee
 */
export const createMarquee = (element, speed = 50) => {
  const width = element.scrollWidth / 2;
  return gsap.to(element, {
    x: -width,
    duration: speed,
    ease: 'none',
    repeat: -1,
  });
};

/**
 * Glow pulse effect
 */
export const glowPulse = (element, color = 'rgba(0, 102, 255, 0.4)') => {
  return gsap.to(element, {
    boxShadow: `0 0 30px ${color}, 0 0 60px ${color}`,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
};

/**
 * Typewriter effect
 */
export const typeWriter = (element, text, speed = 0.03) => {
  const tl = gsap.timeline();
  element.textContent = '';
  
  for (let i = 0; i <= text.length; i++) {
    tl.to(element, {
      duration: speed,
      onComplete: () => {
        element.textContent = text.substring(0, i);
      },
    });
  }
  
  return tl;
};

/**
 * Draw line animation (for timeline)
 */
export const drawLine = (element, duration = 2) => {
  return gsap.fromTo(
    element,
    { scaleY: 0, transformOrigin: 'top center' },
    { scaleY: 1, duration, ease: 'power2.inOut' }
  );
};
