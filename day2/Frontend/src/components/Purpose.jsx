import React from "react";
import { Handshake, TrendingUp, Brain, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";
import {
  containerVariants,
  slideInFromLeftVariants,
  slideInFromRightVariants,
} from "../utils/animations";

const Purpose = () => {
  const benefitVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  };

  return (
    <section
      id="purpose"
      className="purpose-section relative py-20 bg-gradient-to-br from-[#e8ddf7]/50 to-[#ddd1c7]"
    >
      <div className="container">
        <motion.h2
          className="purpose-title text-center text-5xl font-bold mb-16 text-[#2a2a2a]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          The <span className="text-[#8b6f47]">Purpose</span> of TFLCLUB
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Main Message */}
          <motion.div
            className="purpose-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInFromLeftVariants}
          >
            <motion.h3
              className="text-3xl font-bold mb-6 text-[#8b6f47]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              We can't make you profitable.
            </motion.h3>
            <motion.p
              className="text-[#3a3a3a] text-lg leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              But we can provide the right environment, resources, and
              opportunities that bring you closer to your goals.
            </motion.p>
            <motion.p
              className="text-[#3a3a3a] text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Every month, we host a 5-day immersive bootcamp where traders:
            </motion.p>
          </motion.div>

          {/* Benefits Cards */}
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                icon: Handshake,
                title: "Build Strong Connections",
                desc: "Network with serious traders",
              },
              {
                icon: TrendingUp,
                title: "Trade Live",
                desc: "Trade with experienced traders",
              },
              {
                icon: Brain,
                title: "Improve Psychology",
                desc: "Master risk management",
              },
              {
                icon: Zap,
                title: "Reduce Overtrading",
                desc: "Build discipline through structure",
              },
              {
                icon: Users,
                title: "Learn Directly",
                desc: "From profitable traders",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="purpose-content p-4 bg-white/50 border border-[#d4ccc2] rounded-lg hover:border-[#8b6f47]/50 hover:bg-white/70 transition-all"
                variants={benefitVariants}
                custom={i}
                whileHover={{ x: 5, y: -3 }}
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon
                      size={24}
                      style={{ color: "#8b6f47" }}
                      className="flex-shrink-0"
                    />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-[#2a2a2a]">{item.title}</h4>
                    <p className="text-sm text-[#3a3a3a]">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Purpose;
