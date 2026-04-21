/* ═══════════════════════════════════════════
   SECTION 3: Marquee — Minimal Outline
   ═══════════════════════════════════════════ */
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MARQUEE_TEXT } from '../utils/constants';

const Marquee = () => {
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);

  useEffect(() => {
    const setupMarquee = (el, direction = 1) => {
      if (!el) return;
      const width = el.scrollWidth / 2;
      gsap.to(el, {
        x: direction > 0 ? -width : width,
        duration: width / 60,
        ease: 'none',
        repeat: -1,
      });
    };
    setupMarquee(track1Ref.current, 1);
    setupMarquee(track2Ref.current, -1);
  }, []);

  return (
    <div className="py-12 bg-bg-dark overflow-hidden border-y border-white/10 relative z-20">
      <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-transparent to-bg-dark z-10 pointer-events-none" />
      
      {/* Track 1 — left scroll (Filled) */}
      <div className="mb-6">
        <div ref={track1Ref} className="marquee-track">
          <span className="text-4xl md:text-6xl font-bold text-white uppercase whitespace-nowrap tracking-widest px-4 opacity-90 font-serif">
            {MARQUEE_TEXT}{MARQUEE_TEXT}
          </span>
        </div>
      </div>

      {/* Track 2 — right scroll (Outline text) */}
      <div>
        <div ref={track2Ref} className="marquee-track" style={{ transform: 'translateX(-50%)' }}>
          <span className="text-outline-gold text-4xl md:text-6xl font-bold uppercase whitespace-nowrap tracking-widest px-4 font-serif">
            {MARQUEE_TEXT}{MARQUEE_TEXT}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
