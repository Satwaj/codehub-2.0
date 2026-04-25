import React from "react";
import { Check, X, Lightbulb } from "lucide-react";

const IncludedNotIncluded = () => {
  const included = [
    { icon: Check, item: "Stay (Shared Villa)" },
    { icon: Check, item: "3 Meals Daily" },
    { icon: Check, item: "Snacks" },
    { icon: Check, item: "Local Transport" },
  ];

  const excluded = [
    { icon: X, item: "Flights / Train Travel" },
    { icon: X, item: "Personal Expenses" },
    { icon: X, item: "Extra Food / Cabs" },
    { icon: X, item: "Personal Add-ons" },
  ];

  return (
    <section
      id="included"
      className="included-section relative py-20 bg-gradient-to-b from-[#e8ddf7]/50 to-[#ddd1c7]"
    >
      <div className="container">
        <h2 className="included-title text-center text-5xl font-bold mb-4 text-[#2a2a2a]">
          What&apos;s <span className="text-[#8b6f47]">Included?</span>
        </h2>
        <p className="text-center text-[#3a3a3a] text-lg mb-16 max-w-2xl mx-auto">
          Know exactly what you&apos;re getting
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Included */}
          <div className="included-card">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#2a2a2a] mb-6 flex items-center gap-2">
                <Check size={28} style={{ color: "#16a34a" }} /> INCLUDED
              </h3>
              {included.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-lg bg-green-100/50 border border-green-400/40 hover:border-green-400/70 transition-all"
                >
                  <item.icon size={24} style={{ color: "#16a34a" }} />
                  <p className="text-[#2a2a2a] font-medium">{item.item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Not Included */}
          <div className="excluded-card">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-red-500 mb-6 flex items-center gap-2">
                <X size={28} style={{ color: "#dc2626" }} /> NOT INCLUDED
              </h3>
              {excluded.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-lg bg-red-100/50 border border-red-400/40 hover:border-red-400/70 transition-all"
                >
                  <item.icon size={24} style={{ color: "#dc2626" }} />
                  <p className="text-[#2a2a2a] font-medium">{item.item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-12 p-6 bg-gradient-to-r from-[#8b6f47]/20 to-[#4a6fa5]/20 border border-[#8b6f47]/30 rounded-2xl flex items-center gap-3">
          <Lightbulb
            size={24}
            style={{ color: "#8b6f47" }}
            className="flex-shrink-0"
          />
          <p className="text-center text-[#3a3a3a]">
            Pro Tip: Budget an extra ₹5,000-₹10,000 for personal expenses and
            local activities
          </p>
        </div>
      </div>
    </section>
  );
};

export default IncludedNotIncluded;
