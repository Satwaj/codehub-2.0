import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Components
import Navigation from "./components/Navigation";
import LoadingPage from "./components/LoadingPage";
import HeroSection from "./components/HeroSection";
import WhatIsTFLCLUB from "./components/WhatIsTFLCLUB";
import Purpose from "./components/Purpose";
import Experience from "./components/Experience";
import ScholarshipFunding from "./components/ScholarshipFunding";
import UpcomingEvents from "./components/UpcomingEvents";
import PastEvents from "./components/PastEvents";
import WhoCanApply from "./components/WhoCanApply";
import WhyTFLCLUB from "./components/WhyTFLCLUB";
import IncludedNotIncluded from "./components/IncludedNotIncluded";
import ProfitableTraderJourneys from "./components/ProfitableTraderJourneys";
import Mentors from "./components/Mentors";
import Partnerships from "./components/Partnerships";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

// Styles
import "./styles/globals.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [showLoading, setShowLoading] = React.useState(true);

  useEffect(() => {
    // Show loading for 3 seconds
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (showLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="app">
      <Navigation />
      <HeroSection />
      <WhatIsTFLCLUB />
      <Purpose />
      <Experience />
      <ScholarshipFunding />
      <UpcomingEvents />
      <PastEvents />
      <WhoCanApply />
      <WhyTFLCLUB />
      <IncludedNotIncluded />
      <ProfitableTraderJourneys />
      <Mentors />
      <Partnerships />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
