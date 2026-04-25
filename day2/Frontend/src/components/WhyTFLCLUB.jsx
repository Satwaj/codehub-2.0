import React from "react";
import { motion } from "framer-motion";
import { Home, UtensilsCrossed, BookOpen, Target } from "lucide-react";
import { containerVariants } from "../utils/animations";

const WhyTFLCLUB = () => {
  const investments = [
    {
      icon: Home,
      label: "Stay",
      percentage: 25,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: UtensilsCrossed,
      label: "Food",
      percentage: 20,
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: BookOpen,
      label: "Resources",
      percentage: 25,
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      label: "Opportunities",
      percentage: 30,
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="why"
      className="why-section relative py-20 bg-gradient-to-b from-[#e8ddf7]/50 to-[#ddd1c7]"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="why-title text-center text-5xl font-bold mb-4 text-[#2a2a2a]">
            Why <span className="text-[#8b6f47]">TFLCLUB?</span>
          </h2>
          <p className="text-center text-[#3a3a3a] text-lg mb-16 max-w-2xl mx-auto">
            An emerging trader can be anyone willing to become one.
          </p>
        </motion.div>

        {/* Investment Breakdown */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-3xl font-bold mb-6 text-[#2a2a2a]">
              70–80% of your fee is invested in:
            </h3>
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {investments.map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={i}
                    className="investment-item"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { delay: i * 0.1, duration: 0.5 },
                      },
                    }}
                  >
                    <motion.div
                      className="flex items-center gap-4 p-4 rounded-lg bg-white/50 border border-[#d4ccc2] hover:border-[#8b6f47]/50 transition-all"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px rgba(139, 111, 71, 0.1)",
                        borderColor: "rgba(212, 175, 55, 0.5)",
                      }}
                    >
                      <motion.div whileHover={{ rotate: 10, scale: 1.2 }}>
                        <IconComponent size={32} style={{ color: "#8b6f47" }} />
                      </motion.div>
                      <div className="flex-1">
                        <p className="font-bold text-[#2a2a2a]">{item.label}</p>
                        <p className="text-sm text-[#3a3a3a]">
                          {item.percentage}% of total
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative w-64 h-64">
              {investments.map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={i}
                    className="investment-item absolute"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    style={{
                      top: `${50 + 35 * Math.cos((i / investments.length) * Math.PI * 2)}%`,
                      left: `${50 + 35 * Math.sin((i / investments.length) * Math.PI * 2)}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <motion.div
                      className="flex flex-col items-center"
                      whileHover={{ scale: 1.15 }}
                    >
                      <motion.div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg shadow-[#d4af37]/20`}
                        whileHover={{
                          scale: 1.2,
                          boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)",
                        }}
                      >
                        <IconComponent size={28} className="text-white" />
                      </motion.div>
                      <p className="text-xs font-bold mt-2 text-[#8b6f47]">
                        {item.percentage}%
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Center Circle */}
              {/* <motion.div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/3 -translate-y-1/3 w-10 h-10 rounded-full bg-gradient-to-br from-[#8b6f47] to-[#4a6fa5] flex items-center justify-center shadow-xl shadow-[#8b6f47]/30  "
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-[#d4af37] to-[#4a6fa5] flex items-center justify-center shadow-xl shadow-[#d4af37]/40"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-center">
                    <p className="text-xs font-bold text-white">100%</p>
                    <p className="text-xs text-white">Invested</p>
                  </div>
                </motion.div>
              </motion.div> */}
            </div>
          </motion.div>
        </div>

        {/* Bottom Message */}
        <motion.div
          className="p-8 bg-gradient-to-r from-[#8b6f47]/20 to-[#4a6fa5]/20 border border-[#8b6f47]/30 rounded-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{
            boxShadow: "0 10px 30px rgba(212, 175, 55, 0.1)",
            borderColor: "rgba(212, 175, 55, 0.4)",
          }}
        >
          <p className="text-lg text-[#3a3a3a] italic">
            &ldquo;Not just a bootcamp, but a complete investment in your
            trading future&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyTFLCLUB;
