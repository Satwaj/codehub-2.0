import React, { useState, useEffect } from "react";
import { BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInVariants, pulseVariants } from "../utils/animations";

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 90) return prev + Math.random() * 30;
        return prev;
      });
    }, 300);

    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  return isLoading ? (
    <div className="fixed inset-0 bg-gradient-to-br from-[#f5f1ed] via-[#e8ddf7] to-[#ddd1c7] flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 opacity-15">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#8b6f47] rounded-full mix-blend-multiply filter blur-3xl"
          animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-[#4a6fa5] rounded-full mix-blend-multiply filter blur-3xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        ></motion.div>
      </div>

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo with Pulse Animation */}
        <motion.div
          className="loader-logo mb-8 inline-block"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#4a6fa5] flex items-center justify-center"
            animate={pulseVariants.animate}
          >
            <span className="text-5xl font-bold text-white">T</span>
          </motion.div>
        </motion.div>

        {/* Text with Staggered Fade-in */}
        <motion.div
          className="loader-text mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            <motion.span
              className="text-[#3a3a3a]"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              TFL
            </motion.span>
            <motion.span
              className="text-[#8b6f47]"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              CLUB
            </motion.span>
          </h1>
          <motion.p
            className="text-[#3a3a3a] text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Trading Excellence Awaits
          </motion.p>
        </motion.div>

        {/* Progress Bar Animation */}
        <motion.div
          className="w-64 h-1 bg-[#d4ccc2] rounded-full overflow-hidden mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#8b6f47] to-[#d4af37] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </motion.div>

        {/* Icon with Scale Animation */}
        <motion.div
          className="loader-icon"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6, type: "spring" }}
        >
          <BarChart3 size={60} style={{ color: "#8b6f47" }} />
        </motion.div>

        {/* Loading Text */}
        <motion.p
          className="text-[#5a5a5a] text-sm mt-8 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Loading your trading journey...
        </motion.p>
      </motion.div>
    </div>
  ) : null;
};

export default LoadingPage;
