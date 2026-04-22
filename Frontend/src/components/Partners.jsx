/* ═══════════════════════════════════════════
   SECTION 12: Partners — Dark Glassmorphic
   ═══════════════════════════════════════════ */
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useIntersection } from '../hooks/useIntersection';
import { PARTNER_BRANDS } from '../utils/constants';
import SectionWrapper from './SectionWrapper';

const Partners = () => {
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.1 });
  const marqueeRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    if (!isVisible || !marqueeRef.current) return;
    const el = marqueeRef.current;
    const width = el.scrollWidth / 2;
    animRef.current = gsap.to(el, { x: -width, duration: 20, ease: 'none', repeat: -1 });
    return () => animRef.current?.kill();
  }, [isVisible]);

  return (
    <SectionWrapper className="section-dark-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <div ref={sectionRef} className="section-inner z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} className="text-center mb-20">
          <span className="glass-pill mb-6 text-primary border-primary/30">TRUSTED BY</span>
          <h2 className="heading-display text-5xl md:text-6xl lg:text-7xl mt-4">
            Brands you'll <span className="italic font-serif text-white/50">work with</span>
          </h2>
        </motion.div>

        <div
          className="overflow-hidden py-4 relative"
          onMouseEnter={() => animRef.current?.pause()}
          onMouseLeave={() => animRef.current?.resume()}
        >
          <div ref={marqueeRef} className="flex items-center gap-6 whitespace-nowrap">
            {[...PARTNER_BRANDS, ...PARTNER_BRANDS].map((brand, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-8 py-5 rounded-2xl border border-white/10 bg-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group cursor-pointer backdrop-blur-md"
              >
                <span className="text-lg font-bold text-white/50 group-hover:text-white transition-colors tracking-widest uppercase">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Partners;
