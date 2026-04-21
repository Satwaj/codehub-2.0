/* ═══════════════════════════════════════════
   SECTION 15: CTA
   ═══════════════════════════════════════════ */
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowRight, Trophy, Flame, Banknote, LineChart, Target, Zap, Gem } from 'lucide-react';
import { useIntersection } from '../hooks/useIntersection';
import SectionWrapper from './SectionWrapper';

const icons = [Trophy, Flame, Banknote, LineChart, Target, Zap, Gem, Trophy];

const CTA = () => {
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.1 });
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return;
    const ctx = gsap.context(() => {
      gsap.to('.cta-icon', {
        y: 'random(-40, 40)',
        x: 'random(-40, 40)',
        rotation: 'random(-15, 15)',
        duration: 'random(3, 6)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, containerRef);
    return () => ctx.revert();
  }, [isVisible]);

  return (
    <SectionWrapper id="cta" className="section-dark-2 relative overflow-hidden py-32 md:py-48" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="absolute inset-0 bg-grid opacity-[0.05]" />
      <div className="glow-blob top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60" />

      <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        {icons.map((Icon, i) => (
          <div key={i} className="cta-icon absolute opacity-10"
            style={{ left: `${10 + (i % 4) * 25}%`, top: `${20 + Math.floor(i / 4) * 50}%` }}
          >
            <Icon size={40} className="text-primary" strokeWidth={1} />
          </div>
        ))}
      </div>

      <div ref={sectionRef} className="section-inner relative z-10 text-center max-w-[900px] mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: 'easeOut' }}>
          <h2 className="text-6xl md:text-8xl font-serif font-light leading-[1.1] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Your Trading Masterpiece <br />
            <span className="italic heading-gradient-gold">Awaits.</span>
          </h2>
          
          <p className="text-text-secondary text-xl md:text-2xl font-light leading-relaxed mb-14 max-w-[600px] mx-auto">
            Take the leap. Connect with verified traders, reconstruct your discipline, and compete for pure capital.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="https://tflclub.com/apply" className="btn-gold group relative overflow-hidden px-10 py-4 w-full sm:w-auto">
              <span className="relative z-10 flex items-center justify-center gap-2 w-full">SUBMIT APPLICATION <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
            </a>
            <span className="text-text-secondary text-sm italic font-light">or</span>
            <a href="mailto:contact@tflclub.com" className="text-white hover:text-primary transition-colors border-b border-white/20 hover:border-primary pb-1 flex items-center gap-2">
              Speak to Admissions
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default CTA;
