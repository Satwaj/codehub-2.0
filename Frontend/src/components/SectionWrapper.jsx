/* ═══════════════════════════════════════════
   SectionWrapper — Full-width, centered reveal
   ═══════════════════════════════════════════ */
import { useEffect, useRef } from 'react';

const SectionWrapper = ({ children, className = '', id = '' }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`section-reveal ${className}`}
      style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
