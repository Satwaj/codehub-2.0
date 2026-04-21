/* ═══════════════════════════════════════════
   SECTION 2: Hero
   ═══════════════════════════════════════════ */
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[105vh] flex flex-col items-center justify-center overflow-hidden section-dark"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.1]" />
      <div className="glow-blob top-[10%] left-[-10%]" />
      <div className="glow-blob-blue bottom-[-10%] right-[-10%]" />

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <Sparkles className="text-primary w-4 h-4" />
          <span className="text-sm font-semibold tracking-widest uppercase text-white/80">TFLCLUB INVITATIONAL</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="heading-display text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] mb-8"
        >
          Trade, Learn & <br/>
          <span className="heading-gradient-gold mt-2 block italic font-serif">Dominate.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-lg md:text-2xl text-text-secondary max-w-3xl mx-auto mb-16 leading-relaxed font-light"
        >
          Network, live trade, completely rebuild your discipline, and document your pure trading edge alongside top-tier mentors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#cta" className="btn-gold group relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">REQUEST AN INVITE <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
