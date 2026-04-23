import React, { useState } from "react";
import { Rocket, TrendingUp, Crown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  containerVariants,
  bounceInVariants,
  buttonHover,
} from "../utils/animations";

const WhoCanApply = () => {
  const [activeTab, setActiveTab] = useState(0);

  const personas = [
    {
      title: "Aspiring Traders",
      subtitle: "Beginners",
      icon: Rocket,
      color: "from-teal-200 to-cyan-100",
      benefits: [
        "Learn from real traders",
        "Avoid beginner mistakes",
        "Get a personalized roadmap",
        "Trade on a $100K tournament account",
        "Track your progress daily",
        "Get a trading behavior report",
        "Top 3 traders win funding (100K / 50K / 25K)",
      ],
    },
    {
      title: "Breakeven Traders",
      subtitle: "Looking to Scale",
      icon: TrendingUp,
      color: "from-purple-200 to-pink-100",
      benefits: [
        "You're already doing well — you didn't quit",
        "Trading is a game of risk, probability, and consistency",
        "The problem may not be your strategy",
        "It could be your environment and routine",
        "Follow a structured routine",
        "Reduce overtrading",
        "Improve discipline & execution",
      ],
    },
    {
      title: "Profitable Traders",
      subtitle: "Masters",
      icon: Crown,
      color: "from-yellow-200 to-orange-100",
      benefits: [
        "You deserve a break",
        "Detox from trading",
        "Connect with serious traders",
        "Share your experience & impact others",
        "Trade in a peaceful, focused environment",
        "Mentor upcoming traders",
        "Exclusive profit-sharing opportunities",
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotate: -5 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <section
      id="apply"
      className="apply-section relative py-20 bg-gradient-to-b from-[#e8ddf7]/50 to-[#ddd1c7]"
    >
      <div className="container">
        <motion.h2
          className="apply-title text-center text-5xl font-bold mb-4 text-[#2a2a2a]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Who Can <span className="text-[#8b6f47]">Apply?</span>
        </motion.h2>
        <motion.p
          className="text-center text-[#3a3a3a] text-lg mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          TFLCLUB welcomes traders at every level. Find your fit.
        </motion.p>

        {/* Persona Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {personas.map((persona, i) => (
            <motion.div
              key={i}
              onClick={() => setActiveTab(i)}
              className={`persona-card cursor-pointer transition-all ${
                activeTab === i ? "ring-2 ring-[#8b6f47]" : ""
              }`}
              variants={cardVariants}
              custom={i}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className={`h-full p-8 rounded-2xl bg-gradient-to-br ${persona.color} border-2 ${
                  activeTab === i ? "border-[#8b6f47]" : "border-[#d4ccc2]"
                } hover:border-[#8b6f47]/50 transition-all hover:shadow-lg hover:shadow-[#8b6f47]/10 group`}
                whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <motion.div
                  className="mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <persona.icon size={48} className="text-gray-700" />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#2a2a2a] mb-1">
                  {persona.title}
                </h3>
                <p className="text-sm text-gray-700 mb-6">{persona.subtitle}</p>

                <div className="space-y-3">
                  {persona.benefits.slice(0, 3).map((benefit, j) => (
                    <motion.div
                      key={j}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + j * 0.05 }}
                    >
                      <Check
                        size={16}
                        className="text-[#8b6f47] mt-1 flex-shrink-0"
                      />
                      <p className="text-sm text-gray-700">{benefit}</p>
                    </motion.div>
                  ))}
                </div>

                <AnimatePresence>
                  {activeTab === i && (
                    <motion.div
                      className="mt-6 pt-6 border-t border-white/10"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {persona.benefits.slice(3).map((benefit, j) => (
                        <motion.div
                          key={j}
                          className="flex items-start gap-2 mb-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: j * 0.05 }}
                        >
                          <span className="text-yellow-400 mt-1">✓</span>
                          <p className="text-sm text-gray-700">{benefit}</p>
                        </motion.div>
                      ))}
                      <motion.button
                        className="w-full btn btn-primary mt-6"
                        {...buttonHover}
                      >
                        Apply as {persona.title}
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Expanded View */}
        <AnimatePresence>
          {activeTab !== null && (
            <motion.div
              className="md:hidden mt-8 p-6 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h3 className="text-xl font-bold text-[#2a2a2a] mb-4">
                {personas[activeTab].title}
              </h3>
              <div className="space-y-3 mb-6">
                {personas[activeTab].benefits.map((benefit, j) => (
                  <motion.div
                    key={j}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: j * 0.05 }}
                  >
                    <span className="text-yellow-400">✓</span>
                    <p className="text-sm text-gray-700">{benefit}</p>
                  </motion.div>
                ))}
              </div>
              <motion.button
                className="w-full btn btn-primary"
                {...buttonHover}
              >
                Apply Now
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WhoCanApply;
