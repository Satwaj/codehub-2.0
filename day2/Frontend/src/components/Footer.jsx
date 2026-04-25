import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "../utils/animations";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const columnVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
      },
    }),
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#f5f1ed] to-[#e8ddf7] border-t-4 border-[#d4af37] mt-24">
      {/* Golden Top Line Animation */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      ></motion.div>

      <div className="container py-20 px-6">
        {/* Main Footer Content */}
        <motion.div
          className="grid md:grid-cols-4 gap-16 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand */}
          <motion.div
            className="footer-content"
            variants={columnVariants}
            custom={0}
          >
            <motion.div
              className="flex items-center gap-2 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#4a6fa5] flex items-center justify-center font-bold text-white"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                T
              </motion.div>
              <span className="text-lg font-bold">
                <span style={{ color: "#3a3a3a" }}>TFL</span>
                <span style={{ color: "#8b6f47" }}>CLUB</span>
              </span>
            </motion.div>
            <p className="text-sm mb-6" style={{ color: "#3a3a3a" }}>
              Build discipline, scale profits, and join a community of 300+
              successful traders. 10 seasons completed across India and
              Southeast Asia.
            </p>
            <p className="text-xs" style={{ color: "#5a5a5a" }}>
              © {currentYear} TFLCLUB. All rights reserved.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="footer-content"
            variants={columnVariants}
            custom={1}
          >
            <h4 className="font-bold mb-8" style={{ color: "#3a3a3a" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Events", "Mentors", "Apply", "Contact"].map(
                (link, i) => (
                  <motion.li
                    key={i}
                    variants={linkVariants}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={`#${link.toLowerCase()}`}
                      className="transition-colors text-sm"
                      style={{ color: "#3a3a3a" }}
                      whileHover={{
                        color: "#8b6f47",
                        x: 5,
                      }}
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            className="footer-content"
            variants={columnVariants}
            custom={2}
          >
            <h4 className="font-bold text-[#3a3a3a] mb-8">Resources</h4>
            <ul className="space-y-3">
              {[
                "Blog",
                "Webinars",
                "Trading Tips",
                "Community",
                "Funding Guide",
              ].map((link, i) => (
                <motion.li
                  key={i}
                  variants={linkVariants}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.a
                    href="#"
                    className="text-[#3a3a3a] transition-colors text-sm"
                    whileHover={{
                      color: "#8b6f47",
                      x: 5,
                    }}
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="footer-content"
            variants={columnVariants}
            custom={3}
          >
            <h4 className="font-bold mb-8" style={{ color: "#3a3a3a" }}>
              Get In Touch
            </h4>
            <div className="space-y-4">
              <motion.div whileHover={{ x: 5 }}>
                <p className="text-xs mb-1" style={{ color: "#5a5a5a" }}>
                  Email
                </p>
                <a
                  href="mailto:support@tflclub.com"
                  className="font-medium text-sm transition-colors"
                  style={{ color: "#8b6f47" }}
                  onMouseEnter={(e) => (e.target.style.color = "#d4af37")}
                  onMouseLeave={(e) => (e.target.style.color = "#8b6f47")}
                >
                  support@tflclub.com
                </a>
              </motion.div>
              <motion.div whileHover={{ x: 5 }}>
                <p className="text-xs mb-1" style={{ color: "#5a5a5a" }}>
                  Phone
                </p>
                <a
                  href="tel:+919876543210"
                  className="font-medium text-sm transition-colors"
                  style={{ color: "#8b6f47" }}
                  onMouseEnter={(e) => (e.target.style.color = "#d4af37")}
                  onMouseLeave={(e) => (e.target.style.color = "#8b6f47")}
                >
                  +91 9876-543-210
                </a>
              </motion.div>
              <div>
                <p className="text-[#5a5a5a] text-xs mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {["instagram", "twitter", "discord", "telegram"].map(
                    (social, i) => (
                      <motion.a
                        key={i}
                        href="#"
                        className="w-10 h-10 rounded-lg bg-[#8b6f47]/10 border border-[#d4ccc2] hover:border-[#8b6f47] hover:bg-[#8b6f47]/20 flex items-center justify-center transition-all text-[#8b6f47] hover:text-[#d4af37]"
                        whileHover={{ scale: 1.1, y: -3 }}
                      >
                        {social === "instagram" && "I"}
                        {social === "twitter" && "X"}
                        {social === "discord" && "D"}
                        {social === "telegram" && "T"}
                      </motion.a>
                    ),
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider with Animation */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-12"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        ></motion.div>

        {/* Bottom Footer */}
        <motion.div
          className="footer-content flex flex-col md:flex-row justify-between items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-[#3a3a3a] text-sm">
            Made with passion for traders, by traders
          </p>

          <div className="flex gap-6 text-sm">
            {["Privacy Policy", "Terms & Conditions", "Disclaimer"].map(
              (policy, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="text-[#3a3a3a] transition-colors"
                  whileHover={{
                    color: "#8b6f47",
                    scale: 1.05,
                  }}
                >
                  {policy}
                </motion.a>
              ),
            )}
          </div>

          {/* Scroll to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-lg bg-[#8b6f47]/30 border border-[#8b6f47] hover:bg-[#8b6f47]/50 flex items-center justify-center text-[#8b6f47] transition-all"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            ↑
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
