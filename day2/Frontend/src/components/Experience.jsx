import React from "react";
import {
  Dumbbell,
  BarChart3,
  TrendingUp,
  Lightbulb,
  FileText,
  Sparkles,
} from "lucide-react";

const Experience = () => {
  const experiences = [
    { icon: Dumbbell, title: "Morning Fitness", desc: "Breathwork / Ice Bath" },
    {
      icon: BarChart3,
      title: "Market Analysis",
      desc: "Sessions with mentors",
    },
    {
      icon: TrendingUp,
      title: "Live Trading",
      desc: "Trade with experienced traders",
    },
    {
      icon: Lightbulb,
      title: "Strategy Discussions",
      desc: "Deep dive sessions",
    },
    {
      icon: FileText,
      title: "Journaling & Review",
      desc: "Document your trades",
    },
    {
      icon: Sparkles,
      title: "Night Networking",
      desc: "Connect & celebrate wins",
    },
  ];

  return (
    <section
      id="experience"
      className="experience-section relative py-20 bg-gradient-to-b from-[#e8ddf7]/50 to-[#ddd1c7]"
    >
      <div className="container">
        <h2 className="exp-title text-center text-5xl font-bold mb-4 text-[#2a2a2a]">
          TFLCLUB <span className="text-[#8b6f47]">Experience</span>
        </h2>
        <p className="text-center text-[#3a3a3a] text-lg mb-16 max-w-2xl mx-auto">
          A structured routine designed for peak performance and personal growth
        </p>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="exp-card p-6 md:p-8 rounded-2xl bg-white/50 border border-[#d4ccc2] hover:border-[#8b6f47]/50 hover:shadow-lg hover:shadow-[#8b6f47]/20 transition-all group cursor-pointer"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                <exp.icon size={40} style={{ color: "#8b6f47" }} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#2a2a2a]">
                {exp.title}
              </h3>
              <p className="text-[#3a3a3a]">{exp.desc}</p>
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-[#8b6f47] to-[#4a6fa5] group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-[#8b6f47]/20 to-[#4a6fa5]/20 border border-[#8b6f47]/30 rounded-2xl">
          <p className="text-[#3a3a3a] text-lg italic">
            "Every day is structured to maximize learning, connections, and
            consistent progress"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
