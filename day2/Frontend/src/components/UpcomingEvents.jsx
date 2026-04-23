import React from "react";
import { motion } from "framer-motion";
import {
  containerVariants,
  slideInFromBottomVariants,
  buttonHover,
} from "../utils/animations";

const UpcomingEvents = () => {
  const upcomingEvents = [
    {
      location: "Manali",
      dates: "May 15-19, 2024",
      price: "₹45,000",
      seatsLeft: 8,
      status: "Early Bird 🔥",
    },
    {
      location: "Kasol",
      dates: "June 10-14, 2024",
      price: "₹50,000",
      seatsLeft: 5,
      status: "Limited Slots ⚡",
    },
    {
      location: "Bir Billing",
      dates: "July 1-5, 2024",
      price: "₹50,000",
      seatsLeft: 12,
      status: "Available ✓",
    },
  ];

  const eventVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="upcoming"
      className="upcoming-section relative py-20 bg-gradient-to-b from-[#e8ddf7]/50 to-[#ddd1c7]"
    >
      <div className="container">
        <motion.h2
          className="upcoming-title text-center text-5xl font-bold mb-4 text-[#2a2a2a]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Upcoming <span className="text-[#8b6f47]">TFLCLUB</span> Events
        </motion.h2>
        <motion.p
          className="text-center text-[#3a3a3a] text-lg mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join the next batch of elite traders
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {upcomingEvents.map((event, i) => (
            <motion.div
              key={i}
              className="event-card-upcoming group"
              variants={eventVariants}
              custom={i}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="h-full p-6 md:p-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl hover:border-yellow-400/50 transition-all hover:shadow-lg hover:shadow-yellow-400/20"
                whileHover={{
                  boxShadow: "0 20px 40px rgba(212, 175, 55, 0.2)",
                }}
              >
                {/* Header */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="inline-block px-3 py-1 bg-yellow-400/20 border border-yellow-400/30 rounded-full mb-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-[#2a2a2a] text-xs font-bold uppercase">
                      {event.status}
                    </span>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#2a2a2a] mb-2">
                    {event.location}
                  </h3>
                  <p className="text-sm text-[#3a3a3a]">{event.dates}</p>
                </motion.div>

                {/* Details */}
                <div className="space-y-4 mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">📍</span>
                    <span className="text-[#3a3a3a]">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">📅</span>
                    <span className="text-[#3a3a3a]">{event.dates}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#3a3a3a]">Seats Left</span>
                    <span className="text-yellow-400 font-bold">
                      {event.seatsLeft} / 30
                    </span>
                  </div>
                </div>

                {/* Price and Button */}
                <div className="mb-6">
                  <div className="text-3xl font-bold text-yellow-400 mb-4">
                    {event.price}
                  </div>
                  <motion.button
                    className="w-full btn btn-primary"
                    {...buttonHover}
                  >
                    Apply Now
                  </motion.button>
                </div>

                {/* Progress Bar */}
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-yellow-400 to-blue-500"
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${((30 - event.seatsLeft) / 30) * 100}%`,
                    }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
