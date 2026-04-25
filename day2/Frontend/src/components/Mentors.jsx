import React, { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Video, Award, Users } from "lucide-react";
import { containerVariants } from "../utils/animations";

const Mentors = () => {
  const [activeTab, setActiveTab] = useState(0);
const seasons = [
  {
    season: "Season 1",
    title: "Consistency & Payouts",
    mentors: [
      {
        name: "Night Trader Rakesh",
        specialty: "Night Trading",
        color: "from-rose-50 to-orange-50",
      },
      {
        name: "Sneha",
        specialty: "Risk Management",
        color: "from-pink-50 to-amber-50",
      },
    ],
  },
  {
    season: "Season 2",
    title: "Risk & Psychology",
    mentors: [
      {
        name: "Parida",
        specialty: "Psychology",
        color: "from-amber-50 to-yellow-50",
      },
      {
        name: "Prince",
        specialty: "Risk Analysis",
        color: "from-orange-50 to-amber-100",
      },
      {
        name: "Sowmya",
        specialty: "Trading Systems",
        color: "from-rose-50 to-pink-100",
      },
    ],
  },
  {
    season: "Season 3",
    title: "Scaling & Funding",
    mentors: [
      {
        name: "Rohit Morning Star",
        specialty: "Morning Sessions",
        color: "from-yellow-50 to-amber-100",
      },
      {
        name: "Anand Rajan",
        specialty: "Scaling Strategies",
        color: "from-pink-50 to-rose-100",
      },
    ],
  },
  {
    season: "Season 4",
    title: "Discipline & Journaling",
    mentors: [
      {
        name: "Himanshu",
        specialty: "Discipline",
        color: "from-rose-50 to-orange-100",
      },
      {
        name: "Rishav",
        specialty: "Journaling",
        color: "from-amber-50 to-stone-100",
      },
      {
        name: "Viraj",
        specialty: "Execution",
        color: "from-pink-50 to-rose-50",
      },
    ],
  },
];
  const currentSeason = seasons[activeTab];

  return (
    <section
      id="mentors"
      className="mentors-section relative py-20 bg-gradient-to-b from-[#e8ddf7]/50 to-[#ddd1c7]"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="mentors-title text-center text-5xl font-bold mb-4 text-[#2a2a2a]">
            Meet Your <span className="text-[#8b6f47]">Mentors</span>
          </h2>
          <p className="text-center text-[#3a3a3a] text-lg mb-16 max-w-2xl mx-auto">
            Get guided by profitable traders from every season
          </p>
        </motion.div>

        {/* Season Tabs */}
        <motion.div
          className="flex gap-3 mb-12 overflow-x-auto pb-4"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {seasons.map((season, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-3 rounded-lg font-bold whitespace-nowrap transition-all ${
                activeTab === i
                  ? "bg-gradient-to-r from-[#d4af37] to-[#4a6fa5] text-[#2a2a2a]"
                  : "bg-white/10 text-[#3a3a3a] hover:bg-white/20 border border-[#d4ccc2]"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              layout
            >
              {season.season}
            </motion.button>
          ))}
        </motion.div>

        {/* Season Content */}
        <motion.div
          className="mb-12"
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-[#3a3a3a]">
            {currentSeason.title}
          </h3>

          <motion.div
            className={`grid gap-6 ${currentSeason.mentors.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {currentSeason.mentors.map((mentor, i) => (
              <motion.div
                key={i}
                className="mentor-card group"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.1, duration: 0.6 },
                  },
                }}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className={`h-full p-8 rounded-2xl bg-gradient-to-br ${mentor.color} bg-opacity-10 border border-[#8b6f47]/30 hover:border-[#d4af37]/50 transition-all`}
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(212, 175, 55, 0.15)",
                    borderColor: "rgba(212, 175, 55, 0.5)",
                  }}
                >
                  {/* Avatar */}
                  <motion.div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${mentor.color} flex items-center justify-center text-white text-3xl font-bold mb-4`}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    {mentor.name.charAt(0)}
                  </motion.div>

                  {/* Info */}
                  <h4 className="text-xl font-bold text-[#3a3a3a] mb-2">
                    {mentor.name}
                  </h4>
                  <p className="text-sm text-[#5a5a5a] mb-6">
                    {mentor.specialty}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-2 pt-4 border-t border-[#d4ccc2]">
                    <motion.button
                      className="flex-1 px-3 py-2 bg-[#8b6f47]/10 hover:bg-[#8b6f47]/20 rounded border border-[#d4ccc2] hover:border-[#8b6f47]/50 transition-all text-xs font-bold text-[#8b6f47] flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Camera size={16} />
                      Profile
                    </motion.button>
                    <motion.button
                      className="flex-1 px-3 py-2 bg-[#d4af37]/10 hover:bg-[#d4af37]/20 rounded border border-[#d4af37]/30 hover:border-[#d4af37]/50 transition-all text-xs font-bold text-[#d4af37] flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Video size={16} />
                      Videos
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { number: "4", label: "Seasons", icon: Award },
            { number: "12+", label: "Mentors", icon: Users },
            { number: "100%", label: "Profitable", icon: Award },
            { number: "50K+", label: "Combined Payouts", icon: Award },
          ].map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={i}
                className="p-6 bg-white/5 border border-[#d4ccc2] rounded-lg text-center hover:border-[#d4af37]/50 transition-all"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { delay: i * 0.1, duration: 0.6 },
                  },
                }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 10px 30px rgba(212, 175, 55, 0.1)",
                  borderColor: "rgba(212, 175, 55, 0.5)",
                }}
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.2 }}
                  className="mb-2"
                >
                  <IconComponent
                    size={32}
                    style={{ color: "#8b6f47", margin: "0 auto" }}
                  />
                </motion.div>
                <p className="text-3xl font-bold text-[#8b6f47] mb-1">
                  {stat.number}
                </p>
                <p className="text-sm text-[#5a5a5a]">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Mentors;
