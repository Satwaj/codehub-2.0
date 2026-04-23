import React from "react";

const ScholarshipFunding = () => {
  return (
    <section
      id="rewards"
      className="scholarship-section relative py-20 bg-gradient-to-b from-[#e8ddf7]/50 to-[#ddd1c7]"
    >
      <div className="container">
        <h2 className="scholarship-title text-center text-5xl font-bold mb-4 text-[#2a2a2a]">
          <span className="text-[#8b6f47]">Scholarship & Funding</span> Program
        </h2>
        <p className="text-center text-[#3a3a3a] text-lg mb-16 max-w-2xl mx-auto">
          Every trader participates in a closed trading tournament. Top 3
          winners get exclusive accounts and funding opportunities.
        </p>

        {/* Top 3 Rewards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              medal: "🥇",
              title: "$100K 1-Step Evaluation Account",
              value: "$400 value",
              color: "from-yellow-500 to-yellow-400",
              delay: 0,
            },
            {
              medal: "🥈",
              title: "$50K Account",
              value: "$200 value",
              color: "from-gray-400 to-gray-300",
              delay: 0.15,
            },
            {
              medal: "🥉",
              title: "$25K Account",
              value: "$125 value",
              color: "from-orange-500 to-orange-400",
              delay: 0.3,
            },
          ].map((reward, i) => (
            <div key={i} className="reward-card">
              <div
                className={`p-8 rounded-2xl bg-gradient-to-br ${reward.color}/20 border-2 border-${reward.color.split("-")[1]}-500/30 hover:border-${reward.color.split("-")[1]}-500/60 transition-all hover:shadow-lg hover:shadow-${reward.color.split("-")[1]}-500/20 group cursor-pointer`}
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {reward.medal}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {reward.title}
                </h3>
                <p className="text-gray-400 font-semibold text-lg">
                  {reward.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-12 h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>

        {/* Extra Rewards */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-8 text-white">Extra Rewards</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "$500 Scholarship",
              "$300 Scholarship",
              "$150 Scholarship",
              "₹5000 Instant Discount",
              "Exclusive Opportunities",
              "Priority Funding",
            ].map((reward, i) => (
              <div
                key={i}
                className="reward-card p-4 bg-white/5 border border-white/10 rounded-lg hover:border-yellow-400/30 hover:bg-white/10 transition-all"
              >
                <p className="font-semibold text-white">{reward}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rules */}
        <div className="p-8 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-2xl">
          <h4 className="text-xl font-bold mb-6 text-yellow-400">
            Tournament Rules
          </h4>
          <div className="space-y-3 text-gray-400">
            <p>✓ 10% Maximum Drawdown allowed</p>
            <p>✓ Trade on $100K Account</p>
            <p>✓ Track performance daily</p>
            <p>✓ Top 3 traders earn rewards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipFunding;
