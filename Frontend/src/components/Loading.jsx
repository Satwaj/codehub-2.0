/* ═══════════════════════════════════════════
   SECTION 1: Premium Loading Screen
   Cinematic trading-themed loader
   ═══════════════════════════════════════════ */
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Loading = ({ onComplete }) => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const progressBarRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          scale: 1.05,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete: () => onComplete?.(),
        });
      },
    });

    // Logo entrance with blur
    tl.fromTo(logoRef.current,
      { opacity: 0, y: 15, filter: 'blur(15px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.5, ease: 'power3.out' }
    );

    // Progress bar animation
    tl.to(progressBarRef.current, {
      width: '100%',
      duration: 1.5,
      ease: 'power2.inOut',
      onUpdate: function () {
        setProgress(Math.round(this.progress() * 100));
      },
    }, '-=0.8');

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center noise-overlay">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />

      {/* Logo */}
      <div ref={logoRef} className="mb-16 opacity-0 text-center relative z-10">
        <div className="text-5xl md:text-6xl font-serif text-white tracking-[0.25em] uppercase font-light">
          TFL<span className="text-primary">CLUB</span>
        </div>
        <div className="text-[10px] tracking-[0.5em] uppercase text-white/30 mt-5 font-medium">
          Invite-Only Traders Bootcamp
        </div>
      </div>

      {/* Progress */}
      <div className="w-48 max-w-[70vw] relative z-10">
        <div className="flex justify-between mb-3 text-[9px] uppercase tracking-[0.3em] text-white/30 font-semibold">
          <span>Loading</span>
          <span className="text-primary">{progress}%</span>
        </div>
        <div className="h-[2px] bg-white/5 overflow-hidden rounded-full">
          <div ref={progressBarRef} className="h-full w-0 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full" style={{ boxShadow: '0 0 15px rgba(234, 179, 8, 0.5)' }} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
