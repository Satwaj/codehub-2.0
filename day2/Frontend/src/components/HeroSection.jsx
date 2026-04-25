import React from "react";
import { Flame } from "lucide-react";
import { motion } from "framer-motion";
import {
  slideInFromTopVariants,
  bounceInVariants,
  buttonHover,
  containerVariants,
} from "../utils/animations";

const HeroSection = () => {
  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6 + i * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-gradient-to-br from-[#f5f1ed] via-[#e8ddf7] to-[#ddd1c7]"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20 hero-bg-gradient">
        <motion.div
          className="hero-float absolute top-20 right-10 w-96 h-96 bg-[#8b6f47] rounded-full blur-3xl opacity-15"
          animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="hero-float absolute bottom-20 left-10 w-96 h-96 bg-[#4a6fa5] rounded-full blur-3xl opacity-15"
          animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        ></motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center">
        {/* Badge */}
        <motion.div
          className="hero-badge inline-flex items-center gap-2 mb-6"
          variants={slideInFromTopVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="w-2 h-2 bg-[#8b6f47] rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.span>
          <span className="text-[#8b6f47] font-semibold text-sm">
            Limited Seats Available • Season 11 Opening Soon
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="hero-title text-5xl md:text-7xl font-bold mb-6 leading-tight"
          style={{ color: "#2a2a2a" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span>Master Trading</span>
          </motion.div>
          <br />
          <motion.span
            style={{ color: "#8b6f47" }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Build Discipline, Scale Profits
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="hero-subtitle text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-light"
          style={{ color: "#3a3a3a" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Join an exclusive 5-day immersive bootcamp with 30 serious traders,
          profitable mentors, and real trading education. Network, compete, and
          level up your trading game in stunning locations.
        </motion.p>

        {/* Early Bird Badge */}
        <motion.div
          className="inline-block mb-10 px-6 py-3 bg-[#8b6f47]/10 border border-[#8b6f47]/30 rounded-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          whileHover={{
            borderColor: "#8b6f47",
            boxShadow: "0 0 20px rgba(139, 111, 71, 0.2)",
          }}
        >
          <p className="text-[#8b6f47] font-bold text-lg flex items-center gap-2 justify-center">
            <Flame size={20} /> Early Bird Special: ₹5,000 OFF • First 10
            Traders Only
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            className="btn btn-primary px-8 py-4 text-lg font-bold"
            variants={bounceInVariants}
            custom={0}
            {...buttonHover}
          >
            Apply Now
          </motion.button>
          <motion.button
            className="btn btn-secondary px-8 py-4 text-lg font-bold"
            variants={bounceInVariants}
            custom={1}
            {...buttonHover}
          >
            Book a Call
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="hero-stats grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { number: "30", label: "Traders" },
            { number: "5", label: "Days" },
            { number: "3+", label: "Mentors" },
            { number: "1", label: "Villa" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="p-4 bg-white/60 border border-[#d4ccc2] rounded-lg backdrop-blur-lg hover:border-[#8b6f47]/50 transition-all hover:bg-white/80"
              variants={statsVariants}
              custom={i}
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="text-3xl md:text-4xl font-bold text-[#8b6f47] mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-[#3a3a3a] uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-[#5a5a5a] text-sm mb-2">Scroll to explore</div>
        <svg
          className="w-6 h-6 mx-auto text-[#8b6f47]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
