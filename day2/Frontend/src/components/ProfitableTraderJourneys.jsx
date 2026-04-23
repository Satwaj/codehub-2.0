import React from "react";
import { Check } from "lucide-react";

const ProfitableTraderJourneys = () => {
  const traders = [
    { name: "Mukul", payout: 6000, badge: true },
    { name: "Sachin", payout: 4000, badge: false },
    { name: "Vansh", payout: 7000, badge: true },
    { name: "Faizan", payout: 10000, badge: true },
    { name: "Faraz", payout: 10000, badge: true },
    { name: "Tukaram", payout: 20000, badge: true },
    { name: "Sharuk", payout: 2000, badge: false },
  ];

  const maxPayout = Math.max(...traders.map((t) => t.payout));

  return (
    <section
      id="journeys"
      className="journeys-section relative py-20 bg-gradient-to-b from-[#e8ddf7]/50 to-[#ddd1c7]"
    >
      <div className="container">
        <h2 className="journeys-title text-center text-5xl font-bold mb-4 text-[#2a2a2a]">
          Profitable Trader <span className="text-[#8b6f47]">Journeys</span>
        </h2>
        <p className="text-center text-[#3a3a3a] text-lg mb-16 max-w-2xl mx-auto">
          Real payouts from our community members
        </p>

        <div className="space-y-6">
          {traders.map((trader, i) => (
            <div key={i} className="group">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-lg text-[#2a2a2a]">
                    {trader.name}
                  </h3>
                  {trader.badge && (
                    <span className="px-2 py-1 bg-yellow-400/20 border border-yellow-400/50 rounded-full text-xs text-yellow-400 font-bold flex items-center gap-1">
                      <Check size={14} />
                      Verified
                    </span>
                  )}
                </div>
                <span className="text-xl font-bold text-yellow-400">
                  ${trader.payout.toLocaleString()}+
                </span>
              </div>

              <div className="h-12 bg-gradient-to-r from-white/10 to-white/5 border border-white/10 rounded-lg overflow-hidden group-hover:border-yellow-400/30 transition-all">
                <div
                  data-amount={trader.payout}
                  className="h-full bg-gradient-to-r from-yellow-400 to-blue-500 flex items-center justify-end pr-4 group-hover:pr-6 transition-all"
                  style={{ width: `${(trader.payout / maxPayout) * 100}%` }}
                >
                  <span className="text-sm font-bold text-black group-hover:text-lg transition-all">
                    ${trader.payout.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              label: "Total Payouts",
              value: `$${traders.reduce((a, b) => a + b.payout, 0).toLocaleString()}+`,
            },
            { label: "Traders", value: traders.length },
            {
              label: "Avg Payout",
              value: `$${Math.round(traders.reduce((a, b) => a + b.payout, 0) / traders.length).toLocaleString()}`,
            },
            { label: "Highest", value: `$${maxPayout.toLocaleString()}+` },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-4 bg-white/5 border border-white/10 rounded-lg text-center hover:border-yellow-400/30 transition-all"
            >
              <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-yellow-400">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Want to be on this list?</p>
          <button className="btn btn-primary">Apply & Earn</button>
        </div>
      </div>
    </section>
  );
};

export default ProfitableTraderJourneys;
