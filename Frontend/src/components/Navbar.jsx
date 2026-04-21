/* ═══════════════════════════════════════════
   Navbar — Forge-inspired clean nav
   ═══════════════════════════════════════════ */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { NAV_LINKS } from '../utils/constants';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <a href="#" className="flex items-center gap-1 group">
              <span className="text-xl md:text-2xl font-[var(--font-heading)] font-black tracking-tight">
                <span className={scrolled ? 'text-gray-900' : 'text-gray-900'}>the</span>
                <span className="text-primary ml-1">TFL</span>
                <span className="text-accent-yellow">CLUB</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-[15px] font-bold text-gray-600 hover:text-gray-900 transition-colors relative group uppercase tracking-widest"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-[2.5px] bg-primary group-hover:w-full transition-all duration-300 rounded-full" />
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#cta')}
                className="btn-primary text-sm px-6 py-3 border-[2.5px]"
              >
                REQUEST AN INVITE
              </button>
            </div>

            {/* Mobile toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-gray-900">
              {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] bg-white md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-2xl font-[var(--font-heading)] font-bold text-gray-900 hover:text-primary transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.08 }}
                onClick={() => handleNavClick('#cta')}
                className="btn-primary mt-4"
              >
                REQUEST AN INVITE
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
