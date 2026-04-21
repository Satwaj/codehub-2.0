/* ═══════════════════════════════════════════
   Footer — Ultra Minimalist Dark
   ═══════════════════════════════════════════ */
import { motion } from 'framer-motion';
import { Instagram, Twitter, MessageCircle, Send, Youtube, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS, NAV_LINKS } from '../utils/constants';
import { useIntersection } from '../hooks/useIntersection';

const socialIcons = [
  { Icon: Instagram, link: SOCIAL_LINKS.instagram },
  { Icon: Twitter, link: SOCIAL_LINKS.twitter },
  { Icon: MessageCircle, link: SOCIAL_LINKS.discord },
  { Icon: Send, link: SOCIAL_LINKS.telegram },
  { Icon: Youtube, link: SOCIAL_LINKS.youtube },
];

const Footer = () => {
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  return (
    <footer className="bg-[#020202] text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="glow-blob top-[-30%] left-[-20%] opacity-30" />
      
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-serif mb-6 font-light tracking-wide">
              TFL<span className="text-primary italic">CLUB</span>
            </h2>
            <p className="text-[#A1A1AA] text-lg max-w-sm leading-relaxed font-light mb-8">
              The premier invite-only residency for serious traders aiming for total market dominance and discipline.
            </p>
            <a href="mailto:support@tflclub.com" className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors border-b border-white/20 hover:border-primary pb-1">
              support@tflclub.com <ArrowUpRight size={16} />
            </a>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#52525B] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[#D4D4D8] hover:text-primary transition-colors hover:pl-2 duration-300 inline-block font-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#52525B] mb-8">Connect</h4>
            <div className="flex flex-wrap gap-4">
              {socialIcons.map(({ Icon, link }, i) => (
                <a key={i} href={link} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all group">
                  <Icon size={20} className="text-[#A1A1AA] group-hover:text-white transition-colors" strokeWidth={1.5} />
                </a>
              ))}
            </div>
            <div className="mt-12 text-[#52525B] text-sm">
              <p>📍 Operating from India.</p>
              <p className="mt-2 text-xs">Risk Warning: Trading involves significant risk.</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ delay: 0.4 }} className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#71717A] font-light">
          <p>&copy; {new Date().getFullYear()} TFLCLUB. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
