import React from "react";
import {
  Zap,
  BarChart3,
  Send,
  Gem,
  Link2,
  Lock,
  TrendingUp,
  Award,
  Check,
} from "lucide-react";

const Partnerships = () => {
  const partners = [
    { name: "Blueberry", icon: Gem },
    { name: "FundingPips", icon: BarChart3 },
    { name: "The5ers", icon: Award },
    { name: "FundedHive", icon: Zap },
    { name: "FundedNext", icon: Send },
    { name: "FundingRock", icon: Lock },
    { name: "CapitalChain", icon: Link2 },
    { name: "AMarkets", icon: TrendingUp },
  ];

  return (
    <section
      id="partners"
      className="partnerships-section relative py-20 bg-gradient-to-b from-[#e8ddf7]/50 to-[#ddd1c7]"
    >
      <div className="container">
        <h2 className="partnerships-title text-center text-5xl font-bold mb-4 text-[#2a2a2a]">
          Trusted by <span className="gradient-text">Industry Partners</span>
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          We partner with the best trading platforms and funding companies
        </p>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {partners.map((partner, i) => (
            <div key={i} className="partner-logo group">
              <div className="h-full p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-yellow-400/50 transition-all hover:shadow-lg hover:shadow-yellow-400/20 hover:scale-110 flex flex-col items-center justify-center cursor-pointer">
                <partner.icon
                  size={40}
                  style={{ color: "#8b6f47" }}
                  className="mb-4"
                />
                <p className="text-center font-bold text-[#2a2a2a] text-sm">
                  {partner.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee Text */}
        <div className="mt-16 overflow-hidden bg-gradient-to-r from-yellow-400 to-blue-500 py-4 rounded-2xl">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Check size={24} className="text-black" />
              <p className="text-black font-bold text-lg">
                Regulated Platforms
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check size={24} className="text-black" />
              <p className="text-black font-bold text-lg">Transparent Terms</p>
            </div>
            <div className="flex items-center gap-2">
              <Check size={24} className="text-black" />
              <p className="text-black font-bold text-lg">Real Opportunities</p>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-12 p-8 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl text-center">
          <p className="text-gray-300 mb-4">
            Want to become a partner sponsor?
          </p>
          <a
            href="#contact"
            className="text-yellow-400 font-bold hover:text-blue-400 transition-colors"
          >
            Contact Us →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
