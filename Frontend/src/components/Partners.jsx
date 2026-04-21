/* ═══════════════════════════════════════════
   SECTION 12: Partners — CENTERED
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
    <SectionWrapper className="section-light relative">
      <div ref={sectionRef} className="section-inner">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <span className="tape-label-blue tape-label mb-8 inline-block">TRUSTED BY</span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl mt-8">
            Brands you'll <span className="italic text-accent-blue">work with</span>
          </h2>
        </motion.div>

        <div className="overflow-hidden py-8 relative" onMouseEnter={() => animRef.current?.pause()} onMouseLeave={() => animRef.current?.resume()}>
          <div ref={marqueeRef} className="flex items-center gap-8 whitespace-nowrap">
            {[...PARTNER_BRANDS, ...PARTNER_BRANDS].map((brand, i) => (
              <div key={i} className="flex-shrink-0 px-12 py-7 rounded-2xl border-2 border-gray-200 bg-white hover:border-gray-900 hover:shadow-[3px_3px_0px_rgba(0,0,0,0.1)] transition-all duration-300 group cursor-pointer">
                <span className="text-xl font-[var(--font-heading)] font-bold text-gray-400 group-hover:text-gray-900 transition-colors">{brand}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {PARTNER_BRANDS.map((brand, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={isVisible ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.4, delay: 0.5 + i * 0.06 }}
              className="flex items-center justify-center py-6 px-5 rounded-2xl border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-all duration-300 group cursor-pointer"
            >
              <span className="text-lg font-bold text-gray-400 group-hover:text-primary transition-colors">{brand}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Partners;
