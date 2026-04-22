/* ═══════════════════════════════════════════════════════
   TFLCLUB — Invite Only Traders Bootcamp
   ═══════════════════════════════════════════════════════
   
   Tech Stack:
   - React 19 + Vite
   - Tailwind CSS v4
   - Framer Motion (React animations)
   - GSAP (complex, performant animations)
   - React Icons
   
   Setup:
   npm install
   npm install framer-motion gsap react-icons
   npm run dev
   
   ═══════════════════════════════════════════════════════ */

import { useState, useCallback, lazy, Suspense, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

// Critical path components (loaded immediately)
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';

// Lazy-loaded components for performance
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Rewards = lazy(() => import('./components/Rewards'));
const Events = lazy(() => import('./components/Events'));
const Timeline = lazy(() => import('./components/Timeline'));
const Personas = lazy(() => import('./components/Personas'));
const TraderJourneys = lazy(() => import('./components/TraderJourneys'));
const Mentors = lazy(() => import('./components/Mentors'));
const Partners = lazy(() => import('./components/Partners'));
const WhyTFLCLUB = lazy(() => import('./components/WhyTFLCLUB'));
const IncludedSection = lazy(() => import('./components/IncludedSection'));
const FAQ = lazy(() => import('./components/FAQ'));
const CTA = lazy(() => import('./components/CTA'));
const Footer = lazy(() => import('./components/Footer'));
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));

// Minimal fallback for lazy-loaded sections
const SectionFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    return () => lenis.destroy();
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && <Loading onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {/* Main Site */}
      {!isLoading && (
        <div className="relative">
          {/* Navigation */}
          <Navbar />

          {/* Main Content */}
          <main>
            {/* Section 2: Hero */}
            <Hero />

            {/* Section 3: Marquee Ticker */}
            <Marquee />

            {/* Lazy-loaded sections */}
            <Suspense fallback={<SectionFallback />}>
              {/* Section 4: What is TFLCLUB? */}
              <About />

              {/* Section 5: Purpose & Daily Experience */}
              <Experience />

              {/* Section 6: Scholarship & Funding */}
              <Rewards />

              {/* Section 7: Upcoming Events */}
              <Events />

              {/* Section 8: Past Seasons Timeline */}
              <Timeline />

              {/* Section 9: Who Can Apply? */}
              <Personas />

              {/* Section 10: Profitable Trader Journeys */}
              <TraderJourneys />

              {/* Section 11: Mentors */}
              <Mentors />

              {/* Section 12: Partner Brands */}
              <Partners />

              {/* Section 13: Why TFLCLUB? */}
              <WhyTFLCLUB />

              {/* Section 14: What's Included vs Not */}
              <IncludedSection />

              {/* Section 15: FAQ */}
              <FAQ />

              {/* Section 16: Final CTA */}
              <CTA />
            </Suspense>
          </main>

          {/* Section 17: Footer */}
          <Suspense fallback={null}>
            <Footer />
          </Suspense>

          {/* Scroll to Top Button */}
          <Suspense fallback={null}>
            <ScrollToTop />
          </Suspense>
        </div>
      )}
    </>
  );
}

export default App;