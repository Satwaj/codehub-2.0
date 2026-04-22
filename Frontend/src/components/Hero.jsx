/* ═══════════════════════════════════════════
   SECTION 2: Hero — Cinematic Trading Hero
   ═══════════════════════════════════════════ */
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { MdArrowForward } from "react-icons/md";
import { STATS_BAR } from "../utils/constants";

const Hero = () => {
  const heroRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    // Animate floating chart lines
    if (chartRef.current) {
      gsap.to(chartRef.current, {
        y: -15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden section-dark noise-overlay"
    >
      {/* Background elements */}
      <div className="bg-grid" />
      <div className="candlestick-bg" />
      <div className="glow-blob top-[5%] left-[-15%]" />
      <div className="glow-blob-green bottom-[-10%] right-[-15%]" />

      {/* Animated chart SVG in background */}
      <div ref={chartRef} className="absolute inset-0 flex items-end justify-center opacity-[0.04] pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1200 300" className="w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22C55E" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,250 Q100,230 200,200 T400,160 T600,180 T800,100 T1000,120 T1200,40" stroke="#22C55E" fill="none" strokeWidth="2" />
          <path d="M0,250 Q100,230 200,200 T400,160 T600,180 T800,100 T1000,120 T1200,40 L1200,300 L0,300 Z" fill="url(#chartGrad)" />
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center px-6 pt-28">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary/90">
            INVITE ONLY · 30 SPOTS PER SEASON
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="heading-massive text-[3.2rem] sm:text-6xl md:text-7xl lg:text-[6.5rem] mb-8 text-trading-glow"
        >
          India's Most Exclusive
          <br />
          <span className="heading-gradient-gold italic font-serif mt-3 block">
            Traders Bootcamp
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto mb-14 leading-relaxed font-light"
        >
          5 days. Live trading. Profitable mentors. Real funding opportunities.
          Network, trade, and completely rebuild your discipline.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a href="#cta" className="btn-gold group relative overflow-hidden text-base px-10 py-4">
            <span className="relative z-10 flex items-center gap-2">
              🔥 Apply for Next Season
              <MdArrowForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a href="#about" className="btn-outline group">
            <span className="flex items-center gap-2">
              ▶ Watch Documentary
            </span>
          </a>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-4xl mx-auto mt-24 px-6"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS_BAR.map((stat, i) => (
            <div key={i} className="text-center py-5 px-4 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-black text-white mb-1 tracking-tight">
                {stat.number}
              </div>
              <div className="text-[10px] uppercase tracking-[0.15em] text-white/30 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
};

export default Hero;
