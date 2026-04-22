/* ═══════════════════════════════════════════
   SECTION 3: Marquee — Trading Ticker
   Premium infinite scroll with larger text
   ═══════════════════════════════════════════ */
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MARQUEE_TEXT, PARTNER_BRANDS } from '../utils/constants';

const Marquee = () => {
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);
  const brandsRef = useRef(null);

  useEffect(() => {
    const setupMarquee = (el, speed = 80, direction = 1) => {
      if (!el) return;
      const width = el.scrollWidth / 2;
      gsap.set(el, { x: direction > 0 ? 0 : -width });
      return gsap.to(el, {
        x: direction > 0 ? -width : 0,
        duration: width / speed,
        ease: 'none',
        repeat: -1,
      });
    };

    const a1 = setupMarquee(track1Ref.current, 60, 1);
    const a2 = setupMarquee(track2Ref.current, 50, -1);
    const a3 = setupMarquee(brandsRef.current, 40, 1);

    return () => {
      a1?.kill();
      a2?.kill();
      a3?.kill();
    };
  }, []);

  return (
    <div className="relative z-20 overflow-hidden bg-black border-y border-white/5">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Track 1 — Main text ticker */}
      <div className="py-8 border-b border-white/5">
        <div ref={track1Ref} className="marquee-track">
          <span className="text-5xl md:text-7xl lg:text-8xl font-black text-white/[0.06] uppercase whitespace-nowrap tracking-wider">
            {MARQUEE_TEXT}{MARQUEE_TEXT}
          </span>
        </div>
      </div>

      {/* Track 2 — Gold outline text */}
      <div className="py-6 border-b border-white/5">
        <div ref={track2Ref} className="marquee-track" style={{ transform: 'translateX(-50%)' }}>
          <span className="text-outline-gold text-4xl md:text-6xl lg:text-7xl font-black uppercase whitespace-nowrap tracking-wider">
            {MARQUEE_TEXT}{MARQUEE_TEXT}
          </span>
        </div>
      </div>

      {/* Track 3 — Partner brands logos */}
      <div className="py-6">
        <div className="text-center mb-4">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/20 font-bold">Officially Powered By</span>
        </div>
        <div ref={brandsRef} className="marquee-track">
          {[...PARTNER_BRANDS, ...PARTNER_BRANDS, ...PARTNER_BRANDS, ...PARTNER_BRANDS].map((brand, i) => (
            <span key={i} className="text-xl md:text-2xl lg:text-3xl font-black text-white/10 hover:text-white/30 transition-colors uppercase whitespace-nowrap tracking-widest mx-8 md:mx-12">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
