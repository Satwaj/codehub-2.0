/* ═══════════════════════════════════════════
   SECTION 6: Rewards — Glass & Gold
   ═══════════════════════════════════════════ */
import { motion } from "framer-motion";
import { MdAutoAwesome } from "react-icons/md";
import { FaGift } from "react-icons/fa";
import { useIntersection } from "../hooks/useIntersection";
import { useCountUp } from "../hooks/useCountUp";
import { TOP_REWARDS, EXTRA_REWARDS } from "../utils/constants";
import SectionWrapper from "./SectionWrapper";

const RewardCard = ({ reward, index, isVisible }) => {
  const numericValue = parseInt(reward.prize.replace(/[^0-9]/g, ""));
  const count = useCountUp(numericValue, 1800, isVisible);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
      className={`relative p-[1px] rounded-[32px] overflow-hidden ${reward.color}`}
    >
      <div className="bg-bg-dark rounded-[31px] p-12 md:p-14 text-center h-full relative overflow-hidden backdrop-blur-xl flex flex-col justify-between">
        <div
          className={`absolute top-0 left-0 w-full h-full opacity-10 blur-3xl ${reward.color}`}
        />
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex justify-center mb-8">
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center bg-bg-dark border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]`}
            >
              {(() => {
                const RankIcon = reward.rankIcon;
                return (
                  <RankIcon
                    size={36}
                    className="text-white opacity-90"
                    strokeWidth={1}
                  />
                );
              })()}
            </div>
          </div>

          <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-6">
            {reward.title}
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="text-6xl md:text-8xl font-serif font-light mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
              ${count}K
            </div>
            <div className="text-lg font-light text-white/70 mb-8">
              {reward.subtitle}
            </div>
          </div>

          <div className="mt-auto">
            <div className="inline-block px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/90 backdrop-blur-md">
              {reward.value}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Rewards = () => {
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.1 });

  return (
    <SectionWrapper
      id="rewards"
      className="section-dark-2 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" />

      <div ref={sectionRef} className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-24"
        >
          <span className="glass-pill mb-6 text-primary border-primary/30">
            PRIZES & FUNDING
          </span>
          <h2 className="heading-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-4">
            Tournament{" "}
            <span className="italic font-serif text-white/60">Rewards</span>
          </h2>
          <p className="text-text-secondary mt-6 max-w-2xl mx-auto text-xl font-light">
            Top performers receive immense capital to scale their verified
            edges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {TOP_REWARDS.map((reward, i) => (
            <RewardCard
              key={i}
              reward={reward}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-[1px] w-12 bg-white/10" />
            <span className="text-center text-xs font-bold uppercase tracking-[0.2em] text-white/40 flex items-center gap-2">
              <FaGift size={14} /> Extra Perks
            </span>
            <div className="h-[1px] w-12 bg-white/10" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1000px] mx-auto">
            {EXTRA_REWARDS.map((reward, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="glass-card p-8 text-center hover:bg-white/5 cursor-default group"
              >
                <div className="text-2xl md:text-3xl font-serif font-light text-white group-hover:text-primary transition-colors">
                  {reward.amount}
                </div>
                <div className="text-xs text-white/50 uppercase tracking-widest mt-3">
                  {reward.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Rewards;
