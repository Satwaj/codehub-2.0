/* ═══════════════════════════════════════════
   SECTION 1: Premium Loading Screen
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
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete: () => onComplete?.(),
        });
      },
    });

    // Logo entrance
    tl.fromTo(logoRef.current,
      { opacity: 0, y: 10, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.5, ease: 'power3.out' }
    );

    // Progress bar
    tl.to(progressBarRef.current, {
      width: '100%',
      duration: 1.5,
      ease: 'power2.inOut',
      onUpdate: function() {
        setProgress(Math.round(this.progress() * 100));
      },
    }, '-=1');

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="loading-screen fixed inset-0 z-[9999] bg-bg-dark flex flex-col items-center justify-center">
      {/* Logo */}
      <div ref={logoRef} className="mb-12 opacity-0 text-center">
        <div className="text-4xl md:text-5xl font-serif text-white tracking-[0.2em] uppercase font-light">
          TFLCLUB
        </div>
        <div className="text-xs tracking-[0.4em] uppercase text-text-secondary mt-4">
          Invitational
        </div>
      </div>

      {/* Progress */}
      <div className="w-64 max-w-[80vw]">
        <div className="flex justify-between mb-3 text-[10px] uppercase tracking-widest text-text-secondary font-medium">
          <span>Loading Experience</span>
          <span className="text-white">{progress}%</span>
        </div>
        <div className="h-[1px] bg-white/10 overflow-hidden">
          <div ref={progressBarRef} className="h-full w-0 bg-primary shadow-[0_0_10px_#EAB308]" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
