/* ═══════════════════════════════════════════
   SECTION 7: Events — Ultra Clean Glass Ticket
   ═══════════════════════════════════════════ */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight, Flame } from 'lucide-react';
import { useIntersection } from '../hooks/useIntersection';
import { UPCOMING_EVENTS } from '../utils/constants';
import SectionWrapper from './SectionWrapper';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  useEffect(() => {
    const target = new Date('2026-06-15').getTime();
    const interval = setInterval(() => {
      const diff = Math.max(0, target - Date.now());
      setTimeLeft({ days: Math.floor(diff / 86400000), hours: Math.floor((diff / 3600000) % 24), mins: Math.floor((diff / 60000) % 60), secs: Math.floor((diff / 1000) % 60) });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex gap-4">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="text-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-bg-dark text-white flex items-center justify-center text-3xl font-serif font-light border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.03)] backdrop-blur-md">
            {String(value).padStart(2, '0')}
          </div>
          <span className="text-[10px] text-text-secondary uppercase tracking-[0.2em] mt-3 block font-bold">{label}</span>
        </div>
      ))}
    </div>
  );
};

const Events = () => {
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.1 });

  return (
    <SectionWrapper id="events" className="section-dark relative">
      <div className="absolute inset-0 bg-grid opacity-[0.05]" />
      <div className="glow-blob top-[20%] left-[20%]" />

      <div ref={sectionRef} className="section-inner z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} className="text-center mb-24">
          <span className="glass-pill mb-6 text-primary border-primary/30">YOUR PLAYGROUND</span>
          <h2 className="heading-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-4">
            Upcoming <span className="italic font-serif text-white/60">Residencies</span>
          </h2>
        </motion.div>

        {UPCOMING_EVENTS.map((event, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="glass-card relative overflow-hidden p-0 mb-10 max-w-[1000px] mx-auto">
            <div className="h-1 bg-gradient-to-r from-bg-dark via-primary to-bg-dark opacity-80" />
            
            <div className="p-10 md:p-16 relative">
              <div className="absolute top-1/2 left-0 w-[1px] h-3/4 -translate-y-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              <div className="absolute top-1/2 right-0 w-[1px] h-3/4 -translate-y-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

              <div className="flex flex-col items-center justify-between gap-12 text-center relative z-10">
                <div className="flex-1 w-full">
                  <div className="mb-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/10 text-red-400">
                    <Flame size={16} /> <span className="text-xs uppercase tracking-widest font-bold">{event.status}</span>
                  </div>
                  
                  <h3 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">{event.season}</h3>
                  
                  <div className="flex flex-wrap justify-center gap-8 mb-10">
                    <span className="flex items-center gap-3 text-white/70 font-light text-lg">
                      <MapPin className="text-primary text-xl" strokeWidth={1.5} /> {event.location}
                    </span>
                    <span className="flex items-center gap-3 text-white/70 font-light text-lg">
                      <Calendar className="text-primary text-xl" strokeWidth={1.5} /> {event.dates}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {event.features.map((f, j) => (
                      <span key={j} className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm font-light backdrop-blur-sm">{f}</span>
                    ))}
                  </div>

                  <div className="flex flex-col items-center gap-6 mt-12 bg-bg-dark/50 py-8 rounded-3xl border border-white/5 backdrop-blur-md">
                    <span className="text-xs text-text-secondary uppercase font-bold tracking-[0.2em]">Program Fee</span>
                    <div className="text-5xl md:text-6xl font-serif font-light text-white">{event.price}</div>
                    
                    <div className="flex flex-col items-center gap-2 mt-4 w-full px-8">
                      <div className="flex justify-between w-full max-w-sm text-sm font-medium">
                        <span className="text-white/60">Seats Remaining</span>
                        <span className="text-primary font-bold">{event.seatsLeft} / {event.totalSeats}</span>
                      </div>
                      <div className="w-full max-w-sm h-1.5 bg-white/10 rounded-full overflow-hidden mt-1">
                        <div className="h-full bg-gradient-to-r from-red-500 to-primary rounded-full transition-all duration-1000" style={{ width: `${(event.seatsLeft / event.totalSeats) * 100}%` }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-12 mt-4 pt-12 w-full max-w-sm relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <CountdownTimer />
                  <a href="#cta" className="btn-gold group relative overflow-hidden w-full justify-center">
                    <span className="relative z-10 flex items-center justify-center gap-2">RESERVE A SEAT <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Events;
