import React from "react";
import { Users, BookOpen, Check, DollarSign } from "lucide-react";

const WhatIsTFLCLUB = () => {
  const benefits = [
    {
      icon: Users,
      title: "Trade Live",
      desc: "Trade live with profitable traders",
    },
    {
      icon: BookOpen,
      title: "Learn Strategies",
      desc: "Learn strategies, psychology & risk management",
    },
    {
      icon: Check,
      title: "Share Journey",
      desc: "Share your journey and learn from real experiences",
    },
    {
      icon: DollarSign,
      title: "Get Funding",
      desc: "Get opportunities for funding & monthly scholarships",
    },
  ];

  return (
    <section
      id="about"
      className="what-is-section relative py-20 bg-gradient-to-b from-[#f5f1ed] to-[#e8ddf7]"
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <div>
            <div className="what-is-title">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#3a3a3a]">
                What is <span className="text-[#8b6f47]">TFLCLUB?</span>
              </h2>
              <p className="text-[#3a3a3a] text-lg leading-relaxed mb-8">
                TFLCLUB is a 5-day offline traders bootcamp designed to help you
                become more disciplined, productive, and consistent.
              </p>

              {/* Benefits List */}
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <benefit.icon
                      size={24}
                      style={{ color: "#8b6f47" }}
                      className="mt-1 flex-shrink-0"
                    />
                    <div>
                      <p className="font-semibold text-[#3a3a3a] mb-1">
                        {benefit.title}
                      </p>
                      <p className="text-sm text-[#3a3a3a]">{benefit.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "30", label: "Traders" },
              { number: "5", label: "Days" },
              { number: "3+", label: "Profitable Mentors" },
              { number: "1", label: "Unforgettable Villa" },
            ].map((stat, i) => (
              <div
                key={i}
                className="stat-card p-6 md:p-8 bg-gradient-to-br from-[#8b6f47]/20 to-[#4a6fa5]/20 border border-[#8b6f47]/40 rounded-2xl hover:border-[#8b6f47]/60 transition-all hover:shadow-lg hover:shadow-[#8b6f47]/20"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#8b6f47] mb-2">
                  {stat.number}
                </div>
                <p className="text-[#3a3a3a] text-sm font-mono uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsTFLCLUB;
