import React, { useState } from "react";

const Mentors = () => {
  const [activeTab, setActiveTab] = useState(0);

  const seasons = [
    {
      season: "Season 1",
      title: "Consistency & Payouts",
      mentors: [
        {
          name: "Night Trader Rakesh",
          specialty: "Night Trading",
          color: "from-blue-500 to-cyan-500",
        },
        {
          name: "Sneha",
          specialty: "Risk Management",
          color: "from-purple-500 to-pink-500",
        },
      ],
    },
    {
      season: "Season 2",
      title: "Risk & Psychology",
      mentors: [
        {
          name: "Parida",
          specialty: "Psychology",
          color: "from-orange-500 to-yellow-500",
        },
        {
          name: "Prince",
          specialty: "Risk Analysis",
          color: "from-green-500 to-emerald-500",
        },
        {
          name: "Sowmya",
          specialty: "Trading Systems",
          color: "from-red-500 to-pink-500",
        },
      ],
    },
    {
      season: "Season 3",
      title: "Scaling & Funding",
      mentors: [
        {
          name: "Rohit Morning Star",
          specialty: "Morning Sessions",
          color: "from-yellow-400 to-orange-500",
        },
        {
          name: "Anand Rajan",
          specialty: "Scaling Strategies",
          color: "from-blue-500 to-purple-500",
        },
      ],
    },
    {
      season: "Season 4",
      title: "Discipline & Journaling",
      mentors: [
        {
          name: "Himanshu",
          specialty: "Discipline",
          color: "from-purple-500 to-blue-500",
        },
        {
          name: "Rishav",
          specialty: "Journaling",
          color: "from-cyan-500 to-blue-500",
        },
        {
          name: "Viraj",
          specialty: "Execution",
          color: "from-yellow-400 to-orange-500",
        },
      ],
    },
  ];

  const currentSeason = seasons[activeTab];

  return (
    <section
      id="mentors"
      className="mentors-section relative py-20 bg-gradient-to-b from-[#e8ddf7]/50 to-[#ddd1c7]"
    >
      <div className="container">
        <h2 className="mentors-title text-center text-5xl font-bold mb-4 text-[#2a2a2a]">
          Meet Your <span className="text-[#8b6f47]">Mentors</span>
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          Get guided by profitable traders from every season
        </p>

        {/* Season Tabs */}
        <div className="flex gap-3 mb-12 overflow-x-auto pb-4">
          {seasons.map((season, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-3 rounded-lg font-bold whitespace-nowrap transition-all ${
                activeTab === i
                  ? "bg-gradient-to-r from-yellow-400 to-blue-500 text-black"
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
              }`}
            >
              {season.season}
            </button>
          ))}
        </div>

        {/* Season Content */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-8 text-center">
            {currentSeason.title}
          </h3>

          <div
            className={`grid gap-6 ${currentSeason.mentors.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}
          >
            {currentSeason.mentors.map((mentor, i) => (
              <div key={i} className="mentor-card group">
                <div
                  className={`h-full p-8 rounded-2xl bg-gradient-to-br ${mentor.color}/20 border border-${mentor.color.split("-")[1]}-500/30 hover:border-yellow-400/50 transition-all hover:shadow-lg hover:shadow-yellow-400/20`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${mentor.color} flex items-center justify-center text-white text-3xl font-bold mb-4 group-hover:scale-110 transition-transform group-hover:shadow-lg group-hover:shadow-yellow-400/30`}
                  >
                    {mentor.name.charAt(0)}
                  </div>

                  {/* Info */}
                  <h4 className="text-xl font-bold text-white mb-2">
                    {mentor.name}
                  </h4>
                  <p className="text-sm text-gray-400 mb-6">
                    {mentor.specialty}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-2 pt-4 border-t border-white/10">
                    <button className="flex-1 px-3 py-2 bg-white/10 hover:bg-white/20 rounded border border-white/20 hover:border-yellow-400/50 transition-all text-xs font-bold text-white">
                      📸 Profile
                    </button>
                    <button className="flex-1 px-3 py-2 bg-red-500/10 hover:bg-red-500/20 rounded border border-red-500/20 hover:border-red-500/50 transition-all text-xs font-bold text-red-400">
                      🎥 Videos
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "4", label: "Seasons" },
            { number: "12+", label: "Mentors" },
            { number: "100%", label: "Profitable" },
            { number: "50K+", label: "Combined Payouts" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 bg-white/5 border border-white/10 rounded-lg text-center hover:border-yellow-400/30 transition-all"
            >
              <p className="text-3xl font-bold text-yellow-400 mb-1">
                {stat.number}
              </p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
