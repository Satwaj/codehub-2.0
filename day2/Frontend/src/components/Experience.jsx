import React from "react";
import {
  Dumbbell,
  BarChart3,
  TrendingUp,
  Lightbulb,
  FileText,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  containerVariants,
  bounceInVariants,
  hoverScale,
} from "../utils/animations";

const Experience = () => {
  const experiences = [
    { icon: Dumbbell, title: "Morning Fitness", desc: "Breathwork / Ice Bath" },
    {
      icon: BarChart3,
      title: "Market Analysis",
      desc: "Sessions with mentors",
    },
    {
      icon: TrendingUp,
      title: "Live Trading",
      desc: "Trade with experienced traders",
    },
    {
      icon: Lightbulb,
      title: "Strategy Discussions",
      desc: "Deep dive sessions",
    },
    {
      icon: FileText,
      title: "Journaling & Review",
      desc: "Document your trades",
    },
    {
      icon: Sparkles,
      title: "Night Networking",
      desc: "Connect & celebrate wins",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="experience"
      className="experience-section relative py-20 bg-gradient-to-b from-[#e8ddf7]/50 to-[#ddd1c7]"
    >
      <div className="container">
        <motion.h2
          className="exp-title text-center text-5xl font-bold mb-4 text-[#2a2a2a]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          TFLCLUB <span className="text-[#8b6f47]">Experience</span>
        </motion.h2>
        <motion.p
          className="text-center text-[#3a3a3a] text-lg mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          A structured routine designed for peak performance and personal growth
        </motion.p>

        {/* Timeline Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="exp-card p-6 md:p-8 rounded-2xl bg-white/50 border border-[#d4ccc2] hover:border-[#8b6f47]/50 hover:shadow-lg hover:shadow-[#8b6f47]/20 transition-all group cursor-pointer"
              variants={cardVariants}
              custom={i}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="text-5xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <exp.icon size={40} style={{ color: "#8b6f47" }} />
              </motion.div>
              <h3 className="text-xl font-bold mb-2 text-[#2a2a2a]">
                {exp.title}
              </h3>
              <p className="text-[#3a3a3a]">{exp.desc}</p>
              <motion.div
                className="mt-4 h-1 bg-gradient-to-r from-[#8b6f47] to-[#4a6fa5]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          className="mt-16 text-center p-8 bg-gradient-to-r from-[#8b6f47]/20 to-[#4a6fa5]/20 border border-[#8b6f47]/30 rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-[#3a3a3a] text-lg italic">
            "Every day is structured to maximize learning, connections, and
            consistent progress"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
