/* ═══════════════════════════════════════════
   SECTION 13: Why TFLCLUB — Premium Glass UI
   ═══════════════════════════════════════════ */
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  MdHome,
  MdRestaurant,
  MdBuild,
  MdTrackChanges,
  MdAutoAwesome,
} from "react-icons/md";
import gsap from "gsap";
import { useIntersection } from "../hooks/useIntersection";
import SectionWrapper from "./SectionWrapper";

const valueItems = [
  {
    icon: MdHome,
    label: "Stay & Accommodation",
    percentage: 25,
    color: "#EAB308",
    bg: "bg-yellow-900/10",
  },
  {
    icon: MdRestaurant,
    label: "Food & Nutrition",
    percentage: 20,
    color: "#3B82F6",
    bg: "bg-blue-900/10",
  },
  {
    icon: MdBuild,
    label: "Resources & Tools",
    percentage: 15,
    color: "#22C55E",
    bg: "bg-green-900/10",
  },
  {
    icon: MdTrackChanges,
    label: "Opportunities",
    percentage: 15,
    color: "#A855F7",
    bg: "bg-purple-900/10",
  },
];

const WhyTFLCLUB = () => {
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.15 });
  const barsRef = useRef([]);

  useEffect(() => {
    if (!isVisible) return;
    barsRef.current.forEach((bar, i) => {
      if (!bar) return;
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: `${valueItems[i].percentage * 4}%`,
          duration: 1.5,
          delay: 0.3 + i * 0.15,
          ease: "power3.out",
        },
      );
    });
  }, [isVisible]);

  return (
    <SectionWrapper className="section-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.08]" />
      <div className="glow-blob top-[20%] left-[10%]" />

      <div ref={sectionRef} className="section-inner z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-24"
        >
          <span className="glass-pill mb-6 text-primary border-primary/30">
            TRANSPARENCY
          </span>
          <h2 className="heading-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-4">
            Where your{" "}
            <span className="italic text-primary heading-gradient-gold">
              Money
            </span>{" "}
            goes
          </h2>
          <p className="text-text-secondary text-xl md:text-2xl max-w-[800px] mx-auto mt-8 font-light">
            We operate on raw transparency.{" "}
            <span className="text-white font-semibold">70–80% of your fee</span>{" "}
            is directly invested back into your luxury experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Progress bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-card p-10 space-y-8">
              {valueItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center gap-6 mb-4">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      <item.icon size={28} strokeWidth={1.5} />
                    </div>
                    <span className="text-white text-lg font-medium">
                      {item.label}
                    </span>
                    <span className="text-text-secondary text-lg ml-auto font-medium">
                      ~{item.percentage}%
                    </span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
                    <div
                      ref={(el) => (barsRef.current[i] = el)}
                      className="h-full rounded-full relative"
                      style={{ background: item.color, width: "0%" }}
                    >
                      <div className="absolute inset-0 bg-white/30 truncate" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Big card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative p-[1px] rounded-[32px] overflow-hidden bg-gradient-to-b from-primary/50 to-primary/5">
              <div className="bg-bg-dark rounded-[31px] p-14 md:p-16 text-center h-full relative overflow-hidden backdrop-blur-xl">
                <div className="absolute top-0 left-0 w-full h-full bg-primary/5 blur-2xl" />
                <div className="relative z-10">
                  <div className="text-[7rem] md:text-[9rem] font-serif font-light leading-none mb-4 text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/30">
                    75%
                  </div>
                  <p className="text-lg font-medium text-white/80 max-w-xs mx-auto mb-10 leading-relaxed">
                    Directly into your stay, premium food, luxury setup &
                    trading opportunities
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {valueItems.map((item, i) => (
                      <div
                        key={i}
                        className={`${item.bg} rounded-2xl p-6 border border-white/5 flex flex-col items-center backdrop-blur-md`}
                      >
                        <item.icon
                          size={32}
                          className="mb-4 text-white/80"
                          strokeWidth={1.5}
                        />
                        <p className="text-sm font-medium text-white/90">
                          {item.label.split(" ")[0]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyTFLCLUB;
