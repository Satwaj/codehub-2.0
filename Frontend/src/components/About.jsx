/* ═══════════════════════════════════════════
   SECTION 4: About — What is TFLCLUB
   Forge-style "Not a course. An experience."
   ═══════════════════════════════════════════ */
import { motion } from "framer-motion";
import { MdArrowForward } from "react-icons/md";
import { useIntersection } from "../hooks/useIntersection";
import { useCountUp } from "../hooks/useCountUp";
import { WHAT_IS_FEATURES, MARKET_STATS } from "../utils/constants";
import SectionWrapper from "./SectionWrapper";

const StatCard = ({ stat, index, isVisible }) => {
  const numericVal = parseInt(stat.number.replace(/[^0-9]/g, ''));
  const count = useCountUp(numericVal, 2000, isVisible);
  const suffix = stat.number.replace(/[0-9]/g, '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
      className="text-center p-8 md:p-10 rounded-3xl border border-white/5 bg-white/[0.02] relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-transparent group-hover:to-white/[0.02] transition-all duration-700" />
      <div className="relative z-10">
        <div className="text-5xl md:text-6xl lg:text-7xl font-black mb-3" style={{ color: stat.color }}>
          {count}{suffix}
        </div>
        <p className="text-white/40 text-sm font-light leading-relaxed">{stat.description}</p>
      </div>
    </motion.div>
  );
};

const About = () => {
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.08 });

  return (
    <SectionWrapper id="about" className="section-dark-2 noise-overlay">
      <div className="bg-dots" />

      <div ref={sectionRef} className="section-inner">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="section-label">WHAT IS TFLCLUB</span>
          <h2 className="heading-display text-4xl md:text-6xl lg:text-7xl mt-6">
            Not a course.{" "}
            <span className="italic font-serif heading-gradient-gold">An experience.</span>
          </h2>
          <p className="text-white/35 text-lg md:text-xl max-w-3xl mx-auto mt-8 leading-relaxed font-light">
            A{" "}
            <span className="font-semibold text-white/70">5-day offline bootcamp</span>{" "}
            where handpicked traders live, trade, and learn alongside India's most profitable mentors
            in ultra-luxury locations.
          </p>
        </motion.div>

        {/* Feature Cards — Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {WHAT_IS_FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="bento-card group cursor-default"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/[0.03] rounded-bl-full translate-x-1/3 -translate-y-1/3 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center mb-5 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-500">
                    <Icon size={22} className="text-white/50 group-hover:text-primary transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white/90">{feature.title}</h3>
                  <p className="text-white/35 text-sm font-light leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mb-24"
        >
          <a href="#cta" className="btn-primary group">
            REQUEST AN INVITE <MdArrowForward className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Market Stats */}
        <div className="grid md:grid-cols-3 gap-5">
          {MARKET_STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
