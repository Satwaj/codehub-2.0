/* ═══════════════════════════════════════════
   SECTION 4: About — Real Icons
   ═══════════════════════════════════════════ */
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { LineChart, Brain, Pencil, Coins, Users, Calendar, UserTie, Home } from 'lucide-react';
import { useIntersection } from '../hooks/useIntersection';
import { useCountUp } from '../hooks/useCountUp';
import SectionWrapper from './SectionWrapper';

const stats = [
  { value: 30, label: 'Traders', suffix: '', bg: 'bg-primary text-white', rotate: '-rotate-2', Icon: Users },
  { value: 5, label: 'Days', suffix: '', bg: 'bg-accent-yellow text-gray-100', rotate: 'rotate-1', Icon: Calendar },
  { value: 3, label: 'Mentors', suffix: '+', bg: 'bg-accent-blue text-white', rotate: '-rotate-1', Icon: UserTie },
  { value: 1, label: 'Villa', suffix: '', bg: 'bg-accent-green text-white', rotate: 'rotate-2', Icon: Home },
];

const features = [
  { Icon: LineChart, color: '#3B82F6', text: 'Trade live with profitable traders' },
  { Icon: Brain, color: '#8B5CF6', text: 'Learn strategies, psychology & risk management' },
  { Icon: Pencil, color: '#F97316', text: 'Document your journey with real experiences' },
  { Icon: Coins, color: '#22C55E', text: 'Win funding & monthly scholarships' },
];

const StatCard = ({ value, label, suffix, bg, rotate, Icon, index, isVisible }) => {
  const count = useCountUp(value, 1200, isVisible);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, type: 'spring', stiffness: 200 }}
      className={`stat-box ${bg} ${rotate}`}
    >
      <span className="text-5xl md:text-6xl lg:text-7xl">{count}{suffix}</span>
      <span className="text-xs uppercase tracking-wider mt-2 opacity-80 font-semibold flex items-center gap-2">
        <Icon size={14} /> {label}
      </span>
    </motion.div>
  );
};

const About = () => {
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.12 });

  return (
    <SectionWrapper id="about" className="section-dark-2">
      <div ref={sectionRef} className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="glass-pill mb-8 inline-flex items-center gap-2 text-primary border-primary/30 uppercase tracking-widest text-xs font-bold px-4 py-1.5 rounded-full">
            ABOUT US
          </span>
          <h2 className="heading-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-8">
            What is the{' '}
            <span className="italic text-primary">TFL</span>
            <span className="text-accent-yellow">CLUB</span>?
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl max-w-[900px] mx-auto mt-8 leading-relaxed">
            A <span className="font-bold text-gray-100">5-day offline traders bootcamp</span> designed
            to make you disciplined, productive, and consistent.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 max-w-[800px] mx-auto mb-16">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-5 py-5 px-6 rounded-2xl bg-bg-dark-2/5 border border-white/5 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 group cursor-default"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.Icon size={24} color={feature.color} />
              </div>
              <span className="text-gray-700 text-lg font-medium group-hover:text-gray-100 transition-colors leading-relaxed">
                {feature.text}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mb-20"
        >
          <a href="#cta" className="btn-primary text-lg">
            REQUEST AN INVITE <HiArrowRight />
          </a>
        </motion.div>

        <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
          {stats.map((stat, i) => (
            <StatCard key={i} index={i} isVisible={isVisible} {...stat} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
