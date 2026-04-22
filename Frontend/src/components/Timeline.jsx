/* ═══════════════════════════════════════════
   SECTION 8: Timeline — Past Seasons
   ═══════════════════════════════════════════ */
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useIntersection } from '../hooks/useIntersection';
import { PAST_EVENTS } from '../utils/constants';
import SectionWrapper from './SectionWrapper';

const dotColorStyle = [
  '#EAB308', '#3B82F6', '#22C55E', '#F97316',
  '#8B5CF6', '#EF4444', '#EAB308', '#EC4899',
  '#3B82F6', '#FACC15',
];

const Timeline = () => {
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.05 });
  const lineRef = useRef(null);

  useEffect(() => {
    if (!isVisible || !lineRef.current) return;
    gsap.fromTo(lineRef.current,
      { scaleY: 0, transformOrigin: 'top center' },
      { scaleY: 1, duration: 2.5, ease: 'power2.inOut' }
    );
  }, [isVisible]);

  return (
    <SectionWrapper className="section-dark-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.05]" />

      <div ref={sectionRef} className="section-inner z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} className="text-center mb-20">
          <span className="glass-pill mb-6 text-primary border-primary/30">OUR JOURNEY</span>
          <h2 className="heading-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-4">
            10 Seasons of <span className="italic font-serif" style={{ color: '#EAB308' }}>Excellence</span>
          </h2>
          <p className="text-white/40 font-serif italic text-2xl mt-6">from mussoorie to bali</p>
        </motion.div>

        <div className="relative pl-16 md:pl-24 max-w-[1000px] mx-auto">
          <div
            ref={lineRef}
            className="absolute left-7 md:left-11 top-0 bottom-0 w-[3px] rounded-full"
            style={{ background: 'linear-gradient(to bottom, #E11D48, #3B82F6, #FACC15, #22C55E, #8B5CF6)', scaleY: 0 }}
          />

          {PAST_EVENTS.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="relative mb-6 last:mb-0"
            >
              <div
                className="absolute -left-9 md:-left-13 top-6 w-5 h-5 rounded-full border-2 border-white/20 z-10"
                style={{ backgroundColor: dotColorStyle[i] }}
              />
              <div className="glass-card p-6 md:p-8 hover:-translate-y-1 transition-all duration-300 cursor-default group">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-black uppercase tracking-wider bg-white/10 text-white px-3 py-1.5 rounded-full border border-white/10">
                      S{event.season}
                    </span>
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-white group-hover:text-primary transition-colors">
                      {event.location}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-xl text-primary">{event.price}</span>
                    {event.highlight && (
                      <span className="text-xs font-bold uppercase tracking-widest text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-full">
                        {event.highlight}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ delay: 1.5 }} className="mt-20 text-center">
          <p className="font-serif italic text-2xl text-white/30">...and many more to come!</p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Timeline;
