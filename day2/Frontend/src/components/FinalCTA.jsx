import React from "react";
import { Flame, Zap } from "lucide-react";

const FinalCTA = () => {
  return (
    <section
      id="final-cta"
      className="final-cta-section relative py-32 bg-gradient-to-b from-[#e8ddf7]/50 to-[#ddd1c7]"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-20 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container text-center">
        <h2 className="final-title text-5xl md:text-6xl font-bold mb-6">
          Ready to Level Up
          <br />
          <span className="gradient-text">Your Trading?</span>
        </h2>

        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto font-light">
          Only serious traders allowed. Limited spots available for the next
          batch.
        </p>

        {/* Badges */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 flex-wrap">
          <div className="final-badges px-6 py-3 bg-yellow-400/20 border border-yellow-400/50 rounded-lg flex items-center gap-2">
            <Flame size={20} style={{ color: "#ca8a04" }} />
            <p className="text-[#8b6f47] font-bold">30 Slots Only</p>
          </div>
          <div className="final-badges px-6 py-3 bg-blue-400/20 border border-blue-400/50 rounded-lg flex items-center gap-2">
            <Zap size={20} style={{ color: "#0ea5e9" }} />
            <p className="text-blue-400 font-bold">₹5000 OFF for First 10</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="final-buttons flex flex-col sm:flex-row gap-6 justify-center">
          <button className="btn btn-primary px-12 py-4 text-lg font-bold hover:scale-105 active:scale-95">
            🚀 Apply Now
          </button>
          <button className="btn btn-secondary px-12 py-4 text-lg font-bold hover:scale-105 active:scale-95">
            📞 Book a Call
          </button>
        </div>

        {/* Counter */}
        <div className="mt-12 inline-block p-6 bg-white/10 border border-white/20 rounded-xl">
          <p className="text-gray-400 text-sm mb-2">Next Batch Starts In:</p>
          <div className="flex gap-4 items-center justify-center">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#8b6f47]">45</p>
              <p className="text-xs text-gray-500">Days</p>
            </div>
            <span className="text-2xl text-gray-500">:</span>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#8b6f47]">12</p>
              <p className="text-xs text-gray-500">Hours</p>
            </div>
            <span className="text-2xl text-gray-500">:</span>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#8b6f47]">24</p>
              <p className="text-xs text-gray-500">Minutes</p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap gap-4 justify-center text-sm text-gray-400">
          <span>✅ Regulated Platforms</span>
          <span>•</span>
          <span>✅ Verified Traders</span>
          <span>•</span>
          <span>✅ Real Opportunities</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
