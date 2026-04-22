/* ═══════════════════════════════════════════
   SECTION 14: Included Items
   ═══════════════════════════════════════════ */
import { motion } from "framer-motion";
import { useIntersection } from "../hooks/useIntersection";
import { INCLUDED, NOT_INCLUDED } from "../utils/constants";
import SectionWrapper from "./SectionWrapper";
import { MdCheckCircle, MdCancel } from "react-icons/md";

const IncludedSection = () => {
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.1 });

  return (
    <SectionWrapper className="section-dark relative">
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <div ref={sectionRef} className="section-inner z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-24"
        >
          <span className="glass-pill mb-6 text-primary border-primary/30">
            LOGISTICS
          </span>
          <h2 className="heading-display text-5xl md:text-6xl lg:text-7xl mt-4 text-white">
            What's{" "}
            <span className="italic font-serif text-white/50">Included?</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center gap-10 max-w-4xl mx-auto">
          {/* Included */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 glass-card border-green-500/20 bg-green-500/5 p-10 md:p-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-bl-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700" />
            <div className="flex items-center gap-4 mb-10 relative z-10">
              <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
                <MdCheckCircle size={24} />
              </div>
              <h3 className="text-3xl font-serif text-white">Included</h3>
            </div>
            <ul className="space-y-6 relative z-10">
              {INCLUDED.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 items-center text-white/80 font-light text-lg"
                >
                  <MdCheckCircle
                    size={18}
                    className="text-green-500 flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not Included */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 glass-card border-red-500/10 bg-red-500/5 p-10 md:p-12"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                <MdCancel size={24} />
              </div>
              <h3 className="text-3xl font-serif text-white/60">
                Not Included
              </h3>
            </div>
            <ul className="space-y-6">
              {NOT_INCLUDED.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 items-center text-white/50 font-light text-lg"
                >
                  <MdCancel
                    size={18}
                    className="text-red-500/50 flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default IncludedSection;
