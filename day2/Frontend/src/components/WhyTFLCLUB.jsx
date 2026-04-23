import React from "react";

const WhyTFLCLUB = () => {
  const investments = [
    {
      icon: "🏠",
      label: "Stay",
      percentage: 25,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🍽️",
      label: "Food",
      percentage: 20,
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: "📚",
      label: "Resources",
      percentage: 25,
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "🎯",
      label: "Opportunities",
      percentage: 30,
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="why"
      className="why-section relative py-20 bg-gradient-to-b from-[#e8ddf7]/50 to-[#ddd1c7]"
    >
      <div className="container">
        <h2 className="why-title text-center text-5xl font-bold mb-4 text-[#2a2a2a]">
          Why <span className="text-[#8b6f47]">TFLCLUB?</span>
        </h2>
        <p className="text-center text-[#3a3a3a] text-lg mb-16 max-w-2xl mx-auto">
          An emerging trader can be anyone willing to become one.
        </p>

        {/* Investment Breakdown */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Description */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-[#2a2a2a]">
              70–80% of your fee is invested in:
            </h3>
            <div className="space-y-4">
              {investments.map((item, i) => (
                <div key={i} className="investment-item">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-white/50 border border-[#d4ccc2] hover:border-[#8b6f47]/50 transition-all">
                    <span className="text-4xl">{item.icon}</span>
                    <div className="flex-1">
                      <p className="font-bold text-[#2a2a2a]">{item.label}</p>
                      <p className="text-sm text-[#3a3a3a]">
                        {item.percentage}% of total
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64">
              {investments.map((item, i) => (
                <div
                  key={i}
                  className="investment-item absolute"
                  style={{
                    top: `${50 + 35 * Math.cos((i / investments.length) * Math.PI * 2)}%`,
                    left: `${50 + 35 * Math.sin((i / investments.length) * Math.PI * 2)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-lg shadow-yellow-400/20 hover:scale-110 transition-transform`}
                    >
                      {item.icon}
                    </div>
                    <p className="text-xs font-bold mt-2 text-white">
                      {item.percentage}%
                    </p>
                  </div>
                </div>
              ))}

              {/* Center Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-blue-500 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-black">100%</p>
                    <p className="text-xs text-black">Invested</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="p-8 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl text-center">
          <p className="text-lg text-gray-300 italic">
            "Not just a bootcamp, but a complete investment in your trading
            future"
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyTFLCLUB;
