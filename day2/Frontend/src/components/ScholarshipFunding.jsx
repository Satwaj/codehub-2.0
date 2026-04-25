import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "../utils/animations";

const ScholarshipFunding = () => {
  const rewardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  const extraRewardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
      },
    }),
  };

  return (
    <section
      id="rewards"
      className="scholarship-section relative py-20 bg-gradient-to-b from-[#e8ddf7]/50 to-[#ddd1c7]"
    >
      <div className="container">
        <motion.h2
          className="scholarship-title text-center text-5xl font-bold mb-4 text-[#2a2a2a]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-[#8b6f47]">Scholarship & Funding</span> Program
        </motion.h2>
        <motion.p
          className="text-center text-[#3a3a3a] text-lg mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Every trader participates in a closed trading tournament. Top 3
          winners get exclusive accounts and funding opportunities.
        </motion.p>

        {/* Top 3 Rewards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            {
              medal: "🥇",
              title: "$100K 1-Step Evaluation Account",
              value: "$400 value",
              color: "from-yellow-200 to-yellow-100",
              delay: 0,
            },
            {
              medal: "🥈",
              title: "$50K Account",
              value: "$200 value",
              color: "from-gray-200 to-gray-100",
              delay: 0.15,
            },
            {
              medal: "🥉",
              title: "$25K Account",
              value: "$125 value",
              color: "from-orange-200 to-orange-100",
              delay: 0.3,
            },
          ].map((reward, i) => (
            <motion.div
              key={i}
              className="reward-card"
              variants={rewardVariants}
              custom={i}
            >
              <motion.div
                className={`p-8 rounded-2xl bg-gradient-to-br ${reward.color} border-2 border-[#d4ccc2] hover:border-[#8b6f47]/50 transition-all hover:shadow-lg hover:shadow-[#8b6f47]/10 group cursor-pointer`}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <motion.div
                  className="text-6xl mb-4"
                  whileHover={{ scale: 1.3, rotate: 20 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {reward.medal}
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-[#2a2a2a]">
                  {reward.title}
                </h3>
                <p className="text-[#3a3a3a] font-semibold text-lg">
                  {reward.value}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="my-12 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        ></motion.div>

        {/* Extra Rewards */}
        <div className="text-center mb-12">
          <motion.h3
            className="text-2xl font-bold mb-8 text-[#2a2a2a]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Extra Rewards
          </motion.h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              "$500 Scholarship",
              "$300 Scholarship",
              "$150 Scholarship",
              "₹5000 Instant Discount",
              "Exclusive Opportunities",
              "Priority Funding",
            ].map((reward, i) => (
              <motion.div
                key={i}
                className="reward-card p-4 bg-white/5 border border-white/10 rounded-lg hover:border-yellow-400/30 hover:bg-white/10 transition-all"
                variants={extraRewardVariants}
                custom={i}
                whileHover={{ y: -3, scale: 1.05 }}
              >
                <p className="font-semibold text-[#2a2a2a]">{reward}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Rules */}
        <motion.div
          className="p-8 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-bold mb-6 text-[#8b6f47]">
            Tournament Rules
          </h4>
          <motion.div
            className="space-y-3 text-[#3a3a3a]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "10% Maximum Drawdown allowed",
              "Trade on $100K Account",
              "Track performance daily",
              "Top 3 traders earn rewards",
            ].map((rule, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                ✓ {rule}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScholarshipFunding;
