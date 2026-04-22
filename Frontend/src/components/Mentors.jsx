/* ═══════════════════════════════════════════
   SECTION 10: Mentors 
   ═══════════════════════════════════════════ */
import { motion } from "framer-motion";
import { useIntersection } from "../hooks/useIntersection";
import SectionWrapper from "./SectionWrapper";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdSchool, MdStar } from "react-icons/md";

const MENTORS = [
  {
    name: "Alex 'Alpha' Trade",
    role: "Head Technical Analyst",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",
    stats: "7 Yrs Exp. | $4M+ Funded",
    desc: "Specializes in pure price action and heavy psychological frameworks to keep you strictly disciplined.",
    social: { ig: "#", tw: "#", yt: "#" },
  },
  {
    name: "Dr. Elena Volts",
    role: "Risk Management Lead",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
    stats: "PhD Finance | Math Edge",
    desc: "Breaks down your risk of ruin and optimizes your position sizing for literal zero-emotion trading.",
    social: { ig: "#", tw: "#" },
  },
];

const Mentors = () => {
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.1 });

  return (
    <SectionWrapper id="mentors" className="section-dark relative text-center">
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <div
        ref={sectionRef}
        className="section-inner z-10 max-w-[1000px] mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="mb-24"
        >
          <span className="glass-pill mb-6 text-primary border-primary/30">
            YOUR MENTORS
          </span>
          <h2 className="heading-display text-5xl md:text-6xl text-white mt-4">
            Learn from the{" "}
            <span className="italic font-serif text-white/50">
              Absolute Best.
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {MENTORS.map((mentor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="glass-card flex flex-col group overflow-hidden"
            >
              <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden mb-8">
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent z-10 opacity-60" />
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 z-20 text-left">
                  <h3 className="text-3xl font-serif text-white mb-2">
                    {mentor.name}
                  </h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 backdrop-blur-md rounded-full border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest">
                    <MdSchool size={14} /> {mentor.role}
                  </div>
                </div>
              </div>

              <div className="text-left px-4">
                <div className="flex items-center gap-2 text-text-secondary text-sm font-semibold tracking-wider uppercase mb-4">
                  <MdStar size={16} className="text-primary text-opacity-80" />{" "}
                  {mentor.stats}
                </div>
                <p className="text-white/70 font-light leading-relaxed mb-8">
                  {mentor.desc}
                </p>

                <div className="flex gap-4">
                  {mentor.social.ig && (
                    <a
                      href={mentor.social.ig}
                      className="text-white/40 hover:text-white transition-colors"
                    >
                      <FaInstagram size={20} />
                    </a>
                  )}
                  {mentor.social.tw && (
                    <a
                      href={mentor.social.tw}
                      className="text-white/40 hover:text-white transition-colors"
                    >
                      <FaTwitter size={20} />
                    </a>
                  )}
                  {mentor.social.yt && (
                    <a
                      href={mentor.social.yt}
                      className="text-white/40 hover:text-white transition-colors"
                    >
                      <FaYoutube size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Mentors;
