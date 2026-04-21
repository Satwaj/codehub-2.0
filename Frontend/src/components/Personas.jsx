/* ═══════════════════════════════════════════
   SECTION 8: Personas (Who Can Apply) 
   ═══════════════════════════════════════════ */
import { motion } from 'framer-motion';
import { useIntersection } from '../hooks/useIntersection';
import { PERSONAS } from '../utils/constants';
import SectionWrapper from './SectionWrapper';
import { CheckCircle2 } from 'lucide-react';

const Personas = () => {
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.1 });

  return (
    <SectionWrapper className="section-dark-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.05]" />

      <div ref={sectionRef} className="section-inner z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} className="text-center mb-24">
          <span className="glass-pill mb-6 text-accent-blue border-accent-blue/30">WHO CAN APPLY?</span>
          <h2 className="heading-display text-5xl md:text-6xl lg:text-7xl mt-4">
            Curated for <span className="italic font-serif text-white/60">Every Stage.</span>
          </h2>
          <p className="text-text-secondary text-lg mt-6 font-light italic">
            "You are best suited if you are one of these..."
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {PERSONAS.map((persona, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card relative overflow-hidden group"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${persona.color} opacity-40 group-hover:opacity-100 transition-opacity`} />
              <div className="mb-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${persona.color} p-[1px] mb-8`}>
                  <div className="w-full h-full bg-bg-dark rounded-[15px] flex items-center justify-center">
                    <persona.icon size={28} className="text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="font-serif text-3xl mb-2">{persona.title}</h3>
                <span className="text-xs font-bold uppercase tracking-widest text-[#A1A1AA]">{persona.subtitle}</span>
              </div>
              <ul className="space-y-4">
                {persona.points.map((pt, j) => (
                  <li key={j} className="flex gap-4 items-start text-[#D4D4D8] text-sm leading-relaxed font-light">
                    <CheckCircle2 size={18} className="text-[#3B82F6] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Personas;
