/* ═══════════════════════════════════════════
   SECTION 15: FAQ
   ═══════════════════════════════════════════ */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdExpandMore, MdMailOutline } from "react-icons/md";
import { useIntersection } from "../hooks/useIntersection";
import { FAQ_DATA } from "../utils/constants";
import SectionWrapper from "./SectionWrapper";

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden mb-4 transition-colors hover:border-white/20">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="text-lg md:text-xl font-medium text-white/90 pr-8">
          {faq.q}
        </span>
        <div
          className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-white/10" : ""}`}
        >
          <MdExpandMore
            size={18}
            className={isOpen ? "text-primary" : "text-white/50"}
          />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-text-secondary leading-relaxed font-light text-base md:text-lg">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <SectionWrapper id="faq" className="section-dark-2 relative">
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <div ref={sectionRef} className="section-inner z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="glass-pill mb-6 text-primary border-primary/30">
            FAQ
          </span>
          <h2 className="heading-display text-5xl md:text-6xl text-white mt-4">
            Commonly Asked{" "}
            <span className="italic font-serif text-white/50">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {FAQ_DATA.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(i === openIndex ? -1 : i)}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-text-secondary text-sm md:text-base font-light italic inline-flex items-center gap-3">
            <MdMailOutline size={18} className="text-primary" /> Still have
            questions? Hit us up in the admissions discord.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default FAQ;
