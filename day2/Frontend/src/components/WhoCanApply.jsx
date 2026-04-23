import React, { useState } from "react";
import { Rocket, TrendingUp, Crown, Check } from "lucide-react";

const WhoCanApply = () => {
  const [activeTab, setActiveTab] = useState(0);

  const personas = [
    {
      title: "Aspiring Traders",
      subtitle: "Beginners",
      icon: Rocket,
      color: "from-blue-500 to-cyan-500",
      benefits: [
        "Learn from real traders",
        "Avoid beginner mistakes",
        "Get a personalized roadmap",
        "Trade on a $100K tournament account",
        "Track your progress daily",
        "Get a trading behavior report",
        "Top 3 traders win funding (100K / 50K / 25K)",
      ],
    },
    {
      title: "Breakeven Traders",
      subtitle: "Looking to Scale",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
      benefits: [
        "You're already doing well — you didn't quit",
        "Trading is a game of risk, probability, and consistency",
        "The problem may not be your strategy",
        "It could be your environment and routine",
        "Follow a structured routine",
        "Reduce overtrading",
        "Improve discipline & execution",
      ],
    },
    {
      title: "Profitable Traders",
      subtitle: "Masters",
      icon: Crown,
      color: "from-yellow-400 to-orange-500",
      benefits: [
        "You deserve a break",
        "Detox from trading",
        "Connect with serious traders",
        "Share your experience & impact others",
        "Trade in a peaceful, focused environment",
        "Mentor upcoming traders",
        "Exclusive profit-sharing opportunities",
      ],
    },
  ];

  return (
    <section
      id="apply"
      className="apply-section relative py-20 bg-gradient-to-b from-[#e8ddf7]/50 to-[#ddd1c7]"
    >
      <div className="container">
        <h2 className="apply-title text-center text-5xl font-bold mb-4 text-[#2a2a2a]">
          Who Can <span className="text-[#8b6f47]">Apply?</span>
        </h2>
        <p className="text-center text-[#3a3a3a] text-lg mb-16 max-w-2xl mx-auto">
          TFLCLUB welcomes traders at every level. Find your fit.
        </p>

        {/* Persona Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {personas.map((persona, i) => (
            <div
              key={i}
              onClick={() => setActiveTab(i)}
              className={`persona-card cursor-pointer transition-all ${activeTab === i ? "ring-2 ring-yellow-400" : ""}`}
            >
              <div
                className={`h-full p-8 rounded-2xl bg-gradient-to-br ${persona.color}/20 border-2 ${activeTab === i ? "border-yellow-400" : "border-" + persona.color.split("-")[1] + "-500/30"} hover:border-yellow-400/50 transition-all hover:shadow-lg hover:shadow-yellow-400/20 group`}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  <persona.icon size={48} className="text-gray-700" />
                </div>
                <h3 className="text-2xl font-bold text-black-300 mb-1">
                  {persona.title}
                </h3>
                <p className="text-sm text-gray-700 mb-6">{persona.subtitle}</p>

                <div className="space-y-3">
                  {persona.benefits.slice(0, 3).map((benefit, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <Check
                        size={16}
                        className="text-yellow-400 mt-1 flex-shrink-0"
                      />
                      <p className="text-sm text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>

                {activeTab === i && (
                  <div className="mt-6 pt-6 border-t border-white/10">
                    {persona.benefits.slice(3).map((benefit, j) => (
                      <div key={j} className="flex items-start gap-2 mb-3">
                        <span className="text-light-cyan-blue-400 mt-1">✓</span>
                        <p className="text-sm text-gray-700">{benefit}</p>
                      </div>
                    ))}
                    <button className="w-full btn btn-primary mt-6">
                      Apply as {persona.title}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Expanded View */}
        {activeTab !== null && (
          <div className="md:hidden mt-8 p-6 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl">
            <h3 className="text-xl font-bold text-black-300 mb-4">
              {personas[activeTab].title}
            </h3>
            <div className="space-y-3 mb-6">
              {personas[activeTab].benefits.map((benefit, j) => (
                <div key={j} className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <p className="text-sm text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
            <button className="w-full btn btn-primary">Apply Now</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhoCanApply;
