/* ═══════════════════════════════════════════
   SECTION 14: Trader Journeys — Ultra Premium
   ═══════════════════════════════════════════ */
import { motion } from "framer-motion";
import { MdFormatQuote } from "react-icons/md";
import { useIntersection } from "../hooks/useIntersection";
import { TRADER_JOURNEYS } from "../utils/constants";
import SectionWrapper from "./SectionWrapper";

const TraderJourneys = () => {
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.1 });

  return (
    <SectionWrapper className="section-dark-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.15]" />
      <div className="glow-blob top-[20%] right-[-10%]" />

      <div ref={sectionRef} className="section-inner z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="glass-pill mb-6 text-primary border-primary/30">
            SUCCESS STORIES
          </span>
          <h2 className="heading-display text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] mt-6">
            The <span className="heading-gradient-gold italic">Journeys</span>
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mt-6">
            Real traders. Unprecedented payouts. This is what happens when
            discipline meets opportunity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRADER_JOURNEYS.map((trader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="glass-card flex flex-col justify-between group"
            >
              <div>
                <MdFormatQuote
                  className="text-primary/40 mb-6 group-hover:text-primary transition-colors"
                  size={32}
                />
                <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-200 mb-8 font-serif italic">
                  "{trader.quote}"
                </p>
              </div>
              <div className="flex items-center gap-5 pt-8 border-t border-white/5">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10">
                  <img
                    src={trader.img}
                    alt={trader.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{trader.name}</h4>
                  <p className="text-primary font-bold tracking-widest text-sm uppercase mt-1">
                    ${trader.payout.toLocaleString()} Payout
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TraderJourneys;
