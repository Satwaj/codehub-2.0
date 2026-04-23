import React from "react";
import { Flame } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-gradient-to-br from-[#f5f1ed] via-[#e8ddf7] to-[#ddd1c7]"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20 hero-bg-gradient">
        <div className="hero-float absolute top-20 right-10 w-96 h-96 bg-[#8b6f47] rounded-full blur-3xl opacity-15 animate-pulse"></div>
        <div
          className="hero-float absolute bottom-20 left-10 w-96 h-96 bg-[#4a6fa5] rounded-full blur-3xl opacity-15 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center">
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 mb-6">
          <span className="w-2 h-2 bg-[#8b6f47] rounded-full animate-pulse"></span>
          <span className="text-[#8b6f47] font-semibold text-sm">
            Limited Seats Available • Season 11 Opening Soon
          </span>
        </div>

        {/* Title */}
        <h1
          className="hero-title text-5xl md:text-7xl font-bold mb-6 leading-tight"
          style={{ color: "#2a2a2a" }}
        >
          <span>Master Trading</span>
          <br />
          <span style={{ color: "#8b6f47" }}>
            Build Discipline, Scale Profits
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="hero-subtitle text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-light"
          style={{ color: "#3a3a3a" }}
        >
          Join an exclusive 5-day immersive bootcamp with 30 serious traders,
          profitable mentors, and real trading education. Network, compete, and
          level up your trading game in stunning locations.
        </p>

        {/* Early Bird Badge */}
        <div className="inline-block mb-10 px-6 py-3 bg-[#8b6f47]/10 border border-[#8b6f47]/30 rounded-lg">
          <p className="text-[#8b6f47] font-bold text-lg flex items-center gap-2 justify-center">
            <Flame size={20} /> Early Bird Special: ₹5,000 OFF • First 10
            Traders Only
          </p>
        </div>

        {/* Buttons */}
        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="btn btn-primary px-8 py-4 text-lg font-bold hover:scale-105 active:scale-95">
            Apply Now
          </button>
          <button className="btn btn-secondary px-8 py-4 text-lg font-bold hover:scale-105 active:scale-95">
            Book a Call
          </button>
        </div>

        {/* Stats */}
        <div className="hero-stats grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
          {[
            { number: "30", label: "Traders" },
            { number: "5", label: "Days" },
            { number: "3+", label: "Mentors" },
            { number: "1", label: "Villa" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-4 bg-white/60 border border-[#d4ccc2] rounded-lg backdrop-blur-lg hover:border-[#8b6f47]/50 transition-all hover:bg-white/80"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#8b6f47] mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-[#3a3a3a] uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-[#5a5a5a] text-sm mb-2">Scroll to explore</div>
        <svg
          className="w-6 h-6 mx-auto text-[#8b6f47]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
