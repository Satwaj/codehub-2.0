import React from "react";
import { Users, BookOpen, Check, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import {
  containerVariants,
  slideInFromLeftVariants,
  slideInFromRightVariants,
  bounceInVariants,
} from "../utils/animations";

const WhatIsTFLCLUB = () => {
  const benefits = [
    {
      icon: Users,
      title: "Trade Live",
      desc: "Trade live with profitable traders",
    },
    {
      icon: BookOpen,
      title: "Learn Strategies",
      desc: "Learn strategies, psychology & risk management",
    },
    {
      icon: Check,
      title: "Share Journey",
      desc: "Share your journey and learn from real experiences",
    },
    {
      icon: DollarSign,
      title: "Get Funding",
      desc: "Get opportunities for funding & monthly scholarships",
    },
  ];

  const benefitVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <section
      id="about"
      className="what-is-section relative py-20 bg-gradient-to-b from-[#f5f1ed] to-[#e8ddf7]"
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="what-is-title">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 text-[#3a3a3a]"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                What is <span className="text-[#8b6f47]">TFLCLUB?</span>
              </motion.h2>
              <motion.p
                className="text-[#3a3a3a] text-lg leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                TFLCLUB is a 5-day offline traders bootcamp designed to help you
                become more disciplined, productive, and consistent.
              </motion.p>

              {/* Benefits List */}
              <motion.ul
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {benefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-4"
                    variants={benefitVariants}
                    custom={i}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div whileHover={{ rotate: 20, scale: 1.1 }}>
                      <benefit.icon
                        size={24}
                        style={{ color: "#8b6f47" }}
                        className="mt-1 flex-shrink-0"
                      />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-[#3a3a3a] mb-1">
                        {benefit.title}
                      </p>
                      <p className="text-sm text-[#3a3a3a]">{benefit.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { number: "30", label: "Traders" },
              { number: "5", label: "Days" },
              { number: "3+", label: "Profitable Mentors" },
              { number: "1", label: "Unforgettable Villa" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="stat-card p-6 md:p-8 bg-gradient-to-br from-[#8b6f47]/20 to-[#4a6fa5]/20 border border-[#8b6f47]/40 rounded-2xl hover:border-[#8b6f47]/60 transition-all hover:shadow-lg hover:shadow-[#8b6f47]/20"
                variants={statVariants}
                custom={i}
                whileHover={{ y: -5, borderColor: "#8b6f47" }}
              >
                <div className="text-3xl md:text-4xl font-bold text-[#8b6f47] mb-2">
                  {stat.number}
                </div>
                <p className="text-[#3a3a3a] text-sm font-mono uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsTFLCLUB;
