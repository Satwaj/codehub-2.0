/* ═══════════════════════════════════════════
   SECTION 5: Experience (Our Purpose)
   ═══════════════════════════════════════════ */
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Workflow } from 'lucide-react';
import { useIntersection } from '../hooks/useIntersection';
import { DAILY_SCHEDULE } from '../utils/constants';
import SectionWrapper from './SectionWrapper';

const Experience = () => {
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.1 });
  const [purposeRef, purposeVisible] = useIntersection({ threshold: 0.2 });

  return (
    <SectionWrapper id="experience" className="section-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />
      <div className="glow-blob-blue top-[10%] right-[-10%] opacity-40" />

      <div className="section-inner z-10">
        {/* OUR PURPOSE STATEMENT */}
        <div ref={purposeRef} className="text-center max-w-[900px] mx-auto mb-32 relative">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={purposeVisible ? { opacity: 1, y: 0 } : {}} className="mb-10 inline-flex items-center gap-2">
            <Lightbulb className="text-primary" size={20} />
            <span className="glass-pill text-white/60 border-white/10 uppercase tracking-widest text-xs">OUR PHILOSOPHY</span>
          </motion.div>

          <motion.h3 
            initial={{ opacity: 0, y: 30 }} 
            animate={purposeVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-3xl md:text-5xl font-serif font-light leading-[1.3] text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 italic"
          >
            "We cannot force profitability onto you. But we can architect the exact environment, resources, and psychological pressure required to bring you closer to it."
          </motion.h3>

          <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={purposeVisible ? { opacity: 1, scaleX: 1 } : {}} transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-12" />
        </div>

        {/* DAILY SCHEDULE */}
        <div ref={sectionRef}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} className="text-center mb-20 flex flex-col items-center">
            <Workflow className="text-white/20 mb-6" size={40} strokeWidth={1} />
            <h2 className="heading-display text-4xl md:text-6xl text-white">
              The <span className="italic font-serif text-primary">Game Plan</span>
            </h2>
            <p className="text-white/50 text-lg mt-4 font-light">Structure outlasts motivation. This is your 5-day cycle.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DAILY_SCHEDULE.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card p-10 hover:bg-white/5 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700" />
                
                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/70 group-hover:text-primary transition-colors bg-bg-dark">
                    {(() => {
                      const Icon = item.icon;
                      return <Icon size={20} strokeWidth={1.5} />;
                    })()}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 group-hover:text-primary/50 transition-colors">
                    Phase 0{i + 1}
                  </span>
                </div>
                <h3 className="font-serif text-2xl mb-3 text-white/90 relative z-10">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed font-light relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
