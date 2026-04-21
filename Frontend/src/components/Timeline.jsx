/* ═══════════════════════════════════════════
   SECTION 8: Timeline — CENTERED
   ═══════════════════════════════════════════ */
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useIntersection } from '../hooks/useIntersection';
import { PAST_EVENTS } from '../utils/constants';
import SectionWrapper from './SectionWrapper';

const dotColors = ['bg-primary', 'bg-accent-yellow', 'bg-accent-blue', 'bg-accent-green', 'bg-accent-purple', 'bg-accent-orange', 'bg-primary', 'bg-accent-pink', 'bg-accent-blue', 'bg-accent-yellow'];
const cardBgs = ['bg-bg-red', 'bg-bg-yellow', 'bg-bg-blue', 'bg-bg-pink', 'bg-white', 'bg-bg-cream', 'bg-bg-red', 'bg-bg-yellow', 'bg-bg-blue', 'bg-bg-pink'];

const Timeline = () => {
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.05 });
  const lineRef = useRef(null);

  useEffect(() => {
    if (!isVisible || !lineRef.current) return;
    gsap.fromTo(lineRef.current, { scaleY: 0, transformOrigin: 'top center' }, { scaleY: 1, duration: 2.5, ease: 'power2.inOut' });
  }, [isVisible]);

  return (
    <SectionWrapper className="section-cream relative overflow-hidden">
      <div ref={sectionRef} className="section-inner">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} className="text-center mb-20">
          <span className="tape-label-blue tape-label mb-8 inline-block">OUR JOURNEY</span>
          <h2 className="heading-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-8">
            10 Seasons of <span className="italic text-primary">Excellence</span>
          </h2>
          <p className="font-handwritten text-4xl text-accent-blue mt-6">from mussoorie to bali</p>
        </motion.div>

        <div className="relative pl-16 md:pl-24 max-w-[1000px] mx-auto">
          <div ref={lineRef} className="absolute left-7 md:left-11 top-0 bottom-0 w-[3px] rounded-full" style={{ background: 'linear-gradient(to bottom, #E11D48, #3B82F6, #FACC15, #22C55E, #8B5CF6)', scaleY: 0 }} />

          {PAST_EVENTS.map((event, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }} className="relative mb-8 last:mb-0">
              <div className={`absolute -left-9 md:-left-13 top-7 w-6 h-6 rounded-full ${dotColors[i]} border-[3px] border-white z-10`} />
              <div className={`${cardBgs[i]} rounded-2xl border-2 border-gray-900 p-8 md:p-10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default group`}>
                <div className="flex flex-wrap items-center justify-between gap-5">
                  <div className="flex items-center gap-5">
                    <span className="text-sm font-black uppercase tracking-wider bg-black text-white px-4 py-2 rounded-full">S{event.season}</span>
                    <h3 className="font-[var(--font-heading)] font-bold text-2xl md:text-3xl group-hover:text-primary transition-colors">{event.location}</h3>
                  </div>
                  <div className="flex items-center gap-5">
                    <span className="font-[var(--font-heading)] font-bold text-2xl text-primary">{event.price}</span>
                    {event.highlight && <span className="pill pill-yellow text-sm">{event.highlight}</span>}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ delay: 1.5 }} className="mt-20 text-center">
          <p className="font-handwritten text-4xl text-gray-500">...and many more to come!</p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Timeline;
