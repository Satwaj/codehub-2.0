import React from "react";
import {
  Zap,
  BarChart3,
  Send,
  Gem,
  Link2,
  Lock,
  TrendingUp,
  Award,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants } from "../utils/animations";

const Partnerships = () => {
  const partners = [
    { name: "Blueberry", icon: Gem },
    { name: "FundingPips", icon: BarChart3 },
    { name: "The5ers", icon: Award },
    { name: "FundedHive", icon: Zap },
    { name: "FundedNext", icon: Send },
    { name: "FundingRock", icon: Lock },
    { name: "CapitalChain", icon: Link2 },
    { name: "AMarkets", icon: TrendingUp },
  ];

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <section
      id="partners"
      className="partnerships-section relative py-20 bg-gradient-to-b from-[#e8ddf7]/50 to-[#ddd1c7]"
    >
      <div className="container">
        <motion.h2
          className="partnerships-title text-center text-5xl font-bold mb-4 text-[#2a2a2a]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Trusted by <span className="text-[#8b6f47]">Industry Partners</span>
        </motion.h2>
        <motion.p
          className="text-center text-[#3a3a3a] text-lg mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We partner with the best trading platforms and funding companies
        </motion.p>

        {/* Partners Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              className="partner-logo group"
              variants={logoVariants}
              custom={i}
            >
              <motion.div
                className="h-full p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-yellow-400/50 transition-all hover:shadow-lg hover:shadow-yellow-400/20 flex flex-col items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <partner.icon
                    size={40}
                    style={{ color: "#8b6f47" }}
                    className="mb-4"
                  />
                </motion.div>
                <p className="text-center font-bold text-[#2a2a2a] text-sm">
                  {partner.name}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee Text */}
        <motion.div
          className="mt-16 overflow-hidden bg-gradient-to-r from-yellow-400 to-blue-500 py-4 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center gap-4 flex-wrap"
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="flex items-center gap-2">
              <Check size={24} className="text-black" />
              <p className="text-black font-bold text-lg">
                Regulated Platforms
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check size={24} className="text-black" />
              <p className="text-black font-bold text-lg">Transparent Terms</p>
            </div>
            <div className="flex items-center gap-2">
              <Check size={24} className="text-black" />
              <p className="text-black font-bold text-lg">Real Opportunities</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          className="mt-12 p-8 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-[#3a3a3a] mb-4">
            Want to become a partner sponsor?
          </p>
          <motion.a
            href="#contact"
            className="text-[#8b6f47] font-bold hover:text-[#4a6fa5] transition-colors inline-block"
            whileHover={{ scale: 1.05 }}
          >
            Contact Us →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnerships;
