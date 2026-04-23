import React, { useEffect } from "react";
import { BarChart3 } from "lucide-react";

const LoadingPage = () => {
  useEffect(() => {
    // Simple timer - page loads for 2 seconds
    setTimeout(() => {
      // Animation complete
    }, 2000);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#f5f1ed] via-[#e8ddf7] to-[#ddd1c7] flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#8b6f47] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#4a6fa5] rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="loader-logo mb-8 inline-block">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#4a6fa5] flex items-center justify-center">
            <span className="text-5xl font-bold text-white">T</span>
          </div>
        </div>

        {/* Text */}
        <div className="loader-text mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-[#3a3a3a]">TFL</span>
            <span className="text-[#8b6f47]">CLUB</span>
          </h1>
          <p className="text-[#3a3a3a] text-lg">Trading Excellence Awaits</p>
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-1 bg-[#d4ccc2] rounded-full overflow-hidden mb-8">
          <div className="loader-bar h-full bg-gradient-to-r from-[#8b6f47] to-[#d4af37] rounded-full"></div>
        </div>

        {/* Icon */}
        <div className="loader-icon">
          <BarChart3 size={60} style={{ color: "#8b6f47" }} />
        </div>

        {/* Loading Text */}
        <p className="text-[#5a5a5a] text-sm mt-8 font-mono">
          Loading your trading journey...
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
