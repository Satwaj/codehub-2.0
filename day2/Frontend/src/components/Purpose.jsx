import React from "react";
import { Handshake, TrendingUp, Brain, Zap, Users } from "lucide-react";

const Purpose = () => {
  return (
    <section
      id="purpose"
      className="purpose-section relative py-20 bg-gradient-to-br from-[#e8ddf7]/50 to-[#ddd1c7]"
    >
      <div className="container">
        <h2 className="purpose-title text-center text-5xl font-bold mb-16 text-[#2a2a2a]">
          The <span className="text-[#8b6f47]">Purpose</span> of TFLCLUB
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Main Message */}
          <div className="purpose-content">
            <h3 className="text-3xl font-bold mb-6 text-[#8b6f47]">
              We can't make you profitable.
            </h3>
            <p className="text-[#3a3a3a] text-lg leading-relaxed mb-8">
              But we can provide the right environment, resources, and
              opportunities that bring you closer to your goals.
            </p>
            <p className="text-[#3a3a3a] text-lg leading-relaxed">
              Every month, we host a 5-day immersive bootcamp where traders:
            </p>
          </div>

          {/* Benefits Cards */}
          <div className="space-y-4">
            {[
              {
                icon: Handshake,
                title: "Build Strong Connections",
                desc: "Network with serious traders",
              },
              {
                icon: TrendingUp,
                title: "Trade Live",
                desc: "Trade with experienced traders",
              },
              {
                icon: Brain,
                title: "Improve Psychology",
                desc: "Master risk management",
              },
              {
                icon: Zap,
                title: "Reduce Overtrading",
                desc: "Build discipline through structure",
              },
              {
                icon: Users,
                title: "Learn Directly",
                desc: "From profitable traders",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="purpose-content p-4 bg-white/50 border border-[#d4ccc2] rounded-lg hover:border-[#8b6f47]/50 hover:bg-white/70 transition-all"
              >
                <div className="flex items-start gap-3">
                  <item.icon
                    size={24}
                    style={{ color: "#8b6f47" }}
                    className="flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-bold text-[#2a2a2a]">{item.title}</h4>
                    <p className="text-sm text-[#3a3a3a]">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purpose;
