import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { containerVariants, buttonHover } from "../utils/animations";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can I get a refund?",
      answer:
        "Full refund if informed early. No refund within 10 days of the event.",
    },
    {
      question: "Will I become profitable after TFLCLUB?",
      answer:
        "No — but we provide resources and opportunities to increase your chances. Success depends on your dedication and consistency.",
    },
    {
      question: "Can I learn strategies in 5 days?",
      answer:
        "Yes — by observing and interacting with mentors. You will learn trading psychology, risk management, and real execution patterns.",
    },
    {
      question: "What exactly am I paying for?",
      answer:
        "Stay, food, experience, resources, trading environment, mentorship, and access to the exclusive community for life.",
    },
    {
      question: "Do I need prior trading experience?",
      answer:
        "No. TFLCLUB welcomes beginners. We have separate tracks for different experience levels.",
    },
    {
      question: "Is there a guarantee I'll win the tournament?",
      answer:
        "No. The tournament is competitive based on your trading performance. However, everyone wins the experience and community access.",
    },
    {
      question: "What happens after the bootcamp?",
      answer:
        "You get lifetime community access, priority support, exclusive discounts on funded accounts, and early access to future opportunities.",
    },
    {
      question: "Can I bring a trading partner?",
      answer:
        "Yes! Group discounts available. Contact us for bulk registrations.",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
      },
    }),
  };

  return (
    <section
      id="faq"
      className="faq-section relative py-20 bg-gradient-to-b from-[#e8ddf7]/50 to-[#ddd1c7]"
    >
      <div className="container max-w-3xl">
        <motion.h2
          className="faq-title text-center text-5xl font-bold mb-4 text-[#2a2a2a]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Frequently Asked <span className="text-[#8b6f47]">Questions</span>
        </motion.h2>
        <motion.p
          className="text-center text-[#3a3a3a] text-lg mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Get answers to common questions
        </motion.p>

        {/* FAQ Items */}
        <motion.div
          className="space-y-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="faq-item"
              variants={itemVariants}
              custom={i}
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 rounded-lg bg-white/5 border border-white/10 hover:border-yellow-400/30 transition-all text-left group"
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-[#2a2a2a] group-hover:text-[#8b6f47] transition-colors">
                    {faq.question}
                  </h3>
                  <motion.div
                    className="w-6 h-6 flex items-center justify-center text-[#8b6f47]"
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    +
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      className="mt-4 pt-4 border-t border-white/10"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-[#3a3a3a] leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 p-8 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#2a2a2a] mb-3">
            Didn't find your answer?
          </h3>
          <p className="text-[#3a3a3a] mb-6">
            Reach out to our team for personalized guidance
          </p>
          <motion.button className="btn btn-primary" {...buttonHover}>
            Book a Call
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
