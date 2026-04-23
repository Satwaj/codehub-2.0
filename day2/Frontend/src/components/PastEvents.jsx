import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Handshake,
  BookOpen,
  Sparkles,
  Lightbulb,
  Check,
} from "lucide-react";
import { containerVariants } from "../utils/animations";

const PastEvents = () => {
  const seasons = [
    { season: "1", location: "Mussoorie", price: "₹22,500", highlight: false },
    { season: "2", location: "Shimla", price: "₹35,000", highlight: false },
    { season: "3", location: "Goa", price: "₹45,000", highlight: false },
    {
      season: "4",
      location: "Mussoorie",
      price: "₹45,000 + $100K",
      highlight: true,
    },
    {
      season: "5",
      location: "Manali",
      price: "₹45,000 + $50K",
      highlight: true,
    },
    { season: "6", location: "Kasol", price: "₹50,000", highlight: false },
    {
      season: "7",
      location: "Bir Billing",
      price: "₹50,000",
      highlight: false,
    },
    {
      season: "8",
      location: "Thailand",
      price: "₹1.5L (6 Days)",
      highlight: false,
    },
    {
      season: "9",
      location: "Thailand",
      price: "₹1.5L (6 Days)",
      highlight: true,
    },
    { season: "10", location: "Bali", price: "₹2L (7 Days)", highlight: true },
  ];

  return (
    <section
      id="past"
      className="past-section relative py-20 bg-gradient-to-b from-[#e8ddf7]/50 to-[#ddd1c7]"
    >
      <div className="container">
        <h2 className="past-title text-center text-5xl font-bold mb-4 text-[#2a2a2a]">
          Past <span className="text-[#8b6f47]">TFLCLUB</span> Seasons
        </h2>
        <p className="text-center text-[#3a3a3a] text-lg mb-16 max-w-2xl mx-auto">
          Journey through our growing community across stunning locations
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            className="timeline-line absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#d4af37] via-[#8b6f47] to-[#4a6fa5] transform md:-translate-x-1/2 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true, margin: "-100px" }}
          ></motion.div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {seasons.map((season, i) => (
              <motion.div
                key={i}
                className="timeline-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div
                  className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Content */}
                  <motion.div
                    className="flex-1 md:text-right"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className={`p-6 rounded-2xl border transition-all ${
                        season.highlight
                          ? "bg-[#d4af37]/20 border-[#8b6f47]/60 hover:shadow-lg hover:shadow-[#8b6f47]/20"
                          : "bg-white/40 border-[#d4ccc2] hover:border-[#8b6f47]/50 hover:bg-white/60"
                      }`}
                      whileHover={{
                        y: -5,
                        boxShadow: season.highlight
                          ? "0 20px 25px rgba(139, 111, 71, 0.15)"
                          : "0 10px 20px rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      <div className="flex flex-col gap-2">
                        <span
                          className="font-bold text-sm uppercase"
                          style={{ color: "#8b6f47" }}
                        >
                          Season {season.season}
                        </span>
                        <h3
                          className="text-2xl font-bold"
                          style={{ color: "#3a3a3a" }}
                        >
                          {season.location}
                        </h3>
                        <p className="text-lg" style={{ color: "#3a3a3a" }}>
                          {season.price}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Timeline Dot */}
                  <motion.div
                    className="hidden md:flex justify-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.05 + 0.2, duration: 0.4 }}
                    viewport={{ once: true, margin: "-100px" }}
                    whileHover={{ scale: 1.3 }}
                  >
                    <motion.div
                      className={`w-4 h-4 rounded-full border-4 border-[#ddd1c7] transform scale-100 ${
                        season.highlight
                          ? "bg-[#8b6f47] ring-4 ring-[#8b6f47]/30"
                          : "bg-[#d4af37]"
                      }`}
                      whileHover={{
                        boxShadow: "0 0 15px rgba(212, 175, 55, 0.6)",
                      }}
                    ></motion.div>
                  </motion.div>

                  {/* Empty Space */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Plans */}
        <motion.div
          className="mt-16 p-8 bg-gradient-to-r from-[#8b6f47]/15 to-[#4a6fa5]/15 border border-[#8b6f47]/30 rounded-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 10px 30px rgba(139, 111, 71, 0.1)",
          }}
        >
          <h3 className="text-2xl font-bold mb-3" style={{ color: "#3a3a3a" }}>
            More Locations Coming Soon
          </h3>
          <p style={{ color: "#3a3a3a" }}>
            International expansion in progress. Stay tuned!
          </p>
        </motion.div>

        {/* What Happened In Past Sessions */}
        <div className="mt-20">
          <motion.h3
            className="text-4xl font-bold text-center mb-16"
            style={{ color: "#3a3a3a" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            What Happened In{" "}
            <span style={{ color: "#8b6f47" }}>Past Sessions</span>
          </motion.h3>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Trading Sessions */}
            <motion.div
              className="p-8 bg-white/50 border border-[#d4ccc2] rounded-2xl hover:shadow-lg transition-all"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              }}
            >
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }}>
                <BarChart3
                  size={40}
                  style={{ color: "#8b6f47" }}
                  className="mb-4"
                />
              </motion.div>
              <h4
                className="text-2xl font-bold mb-4"
                style={{ color: "#3a3a3a" }}
              >
                Trading Sessions
              </h4>
              <p className="leading-relaxed" style={{ color: "#3a3a3a" }}>
                Live market analysis, real-time trading demonstrations, and
                strategy discussions with profitable traders in action.
              </p>
            </motion.div>

            {/* Networking Events */}
            <motion.div
              className="p-8 bg-white/50 border border-[#d4ccc2] rounded-2xl hover:shadow-lg transition-all"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1, duration: 0.6 },
                },
              }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              }}
            >
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }}>
                <Handshake
                  size={40}
                  style={{ color: "#8b6f47" }}
                  className="mb-4"
                />
              </motion.div>
              <h4
                className="text-2xl font-bold mb-4"
                style={{ color: "#3a3a3a" }}
              >
                Networking Events
              </h4>
              <p className="leading-relaxed" style={{ color: "#3a3a3a" }}>
                Connect with 30 like-minded traders, mentors, and content
                creators in an exclusive, intimate setting.
              </p>
            </motion.div>

            {/* Workshops */}
            <motion.div
              className="p-8 bg-white/50 border border-[#d4ccc2] rounded-2xl hover:shadow-lg transition-all"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.6 },
                },
              }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              }}
            >
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }}>
                <BookOpen
                  size={40}
                  style={{ color: "#8b6f47" }}
                  className="mb-4"
                />
              </motion.div>
              <h4
                className="text-2xl font-bold mb-4"
                style={{ color: "#3a3a3a" }}
              >
                Workshops & Seminars
              </h4>
              <p className="leading-relaxed" style={{ color: "#3a3a3a" }}>
                In-depth sessions on risk management, psychology, journaling,
                and market fundamentals from experts.
              </p>
            </motion.div>

            {/* Social Activities */}
            <motion.div
              className="p-8 bg-white/50 border border-[#d4ccc2] rounded-2xl hover:shadow-lg transition-all"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.3, duration: 0.6 },
                },
              }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              }}
            >
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }}>
                <Sparkles
                  size={40}
                  style={{ color: "#8b6f47" }}
                  className="mb-4"
                />
              </motion.div>
              <h4
                className="text-2xl font-bold mb-4"
                style={{ color: "#3a3a3a" }}
              >
                Social Activities
              </h4>
              <p className="leading-relaxed" style={{ color: "#3a3a3a" }}>
                Adventure sports, group dinners, night markets, and
                unforgettable memories in stunning locations.
              </p>
            </motion.div>

            {/* Mentorship */}
            <motion.div
              className="p-8 bg-white/50 border border-[#d4ccc2] rounded-2xl hover:shadow-lg transition-all"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.6 },
                },
              }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              }}
            >
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }}>
                <Lightbulb
                  size={40}
                  style={{ color: "#8b6f47" }}
                  className="mb-4"
                />
              </motion.div>
              <h4
                className="text-2xl font-bold mb-4"
                style={{ color: "#3a3a3a" }}
              >
                One-on-One Mentorship
              </h4>
              <p className="leading-relaxed" style={{ color: "#3a3a3a" }}>
                Personal guidance from successful traders who have built
                profitable track records and substantial returns.
              </p>
            </motion.div>

            {/* Accountability */}
            <motion.div
              className="p-8 bg-white/50 border border-[#d4ccc2] rounded-2xl hover:shadow-lg transition-all"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.5, duration: 0.6 },
                },
              }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              }}
            >
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }}>
                <Check
                  size={40}
                  style={{ color: "#8b6f47" }}
                  className="mb-4"
                />
              </motion.div>
              <h4
                className="text-2xl font-bold mb-4"
                style={{ color: "#3a3a3a" }}
              >
                Accountability Partners
              </h4>
              <p className="leading-relaxed" style={{ color: "#3a3a3a" }}>
                Form lasting connections with accountability partners to
                maintain discipline and track progress together.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Key Statistics */}
        <motion.div
          className="mt-20 grid md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { number: "10", label: "Seasons Completed" },
            { number: "300+", label: "Traders Trained" },
            { number: "5 Days", label: "Intensive Program" },
            { number: "$1M+", label: "In Payouts" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="p-8 bg-gradient-to-br from-[#8b6f47]/20 to-[#4a6fa5]/20 border border-[#8b6f47]/40 rounded-xl text-center hover:border-[#8b6f47]/60 transition-all"
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { delay: i * 0.1, duration: 0.6 },
                },
              }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 20px 40px rgba(139, 111, 71, 0.15)",
                borderColor: "rgba(212, 175, 55, 0.6)",
              }}
            >
              <motion.div
                className="text-4xl font-bold mb-2"
                style={{ color: "#8b6f47" }}
                whileHover={{ scale: 1.2 }}
              >
                {stat.number}
              </motion.div>
              <p className="font-semibold" style={{ color: "#3a3a3a" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PastEvents;
