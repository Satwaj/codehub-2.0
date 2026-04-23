import React from "react";

const UpcomingEvents = () => {
  const upcomingEvents = [
    {
      location: "Manali",
      dates: "May 15-19, 2024",
      price: "₹45,000",
      seatsLeft: 8,
      status: "Early Bird 🔥",
    },
    {
      location: "Kasol",
      dates: "June 10-14, 2024",
      price: "₹50,000",
      seatsLeft: 5,
      status: "Limited Slots ⚡",
    },
    {
      location: "Bir Billing",
      dates: "July 1-5, 2024",
      price: "₹50,000",
      seatsLeft: 12,
      status: "Available ✓",
    },
  ];

  return (
    <section
      id="upcoming"
      className="upcoming-section relative py-20 bg-gradient-to-b from-[#e8ddf7]/50 to-[#ddd1c7]"
    >
      <div className="container">
        <h2 className="upcoming-title text-center text-5xl font-bold mb-4 text-[#2a2a2a]">
          Upcoming <span className="text-[#8b6f47]">TFLCLUB</span> Events
        </h2>
        <p className="text-center text-[#3a3a3a] text-lg mb-16 max-w-2xl mx-auto">
          Join the next batch of elite traders
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {upcomingEvents.map((event, i) => (
            <div key={i} className="event-card-upcoming group">
              <div className="h-full p-6 md:p-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl hover:border-yellow-400/50 transition-all hover:shadow-lg hover:shadow-yellow-400/20">
                {/* Header */}
                <div className="mb-6">
                  <div className="inline-block px-3 py-1 bg-yellow-400/20 border border-yellow-400/30 rounded-full mb-3">
                    <span className="text-yellow-400 text-xs font-bold uppercase">
                      {event.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {event.location}
                  </h3>
                  <p className="text-sm text-gray-400">{event.dates}</p>
                </div>

                {/* Details */}
                <div className="space-y-4 mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">📍</span>
                    <span className="text-gray-400">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">📅</span>
                    <span className="text-gray-400">{event.dates}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Seats Left</span>
                    <span className="text-yellow-400 font-bold">
                      {event.seatsLeft} / 30
                    </span>
                  </div>
                </div>

                {/* Price and Button */}
                <div className="mb-6">
                  <div className="text-3xl font-bold text-yellow-400 mb-4">
                    {event.price}
                  </div>
                  <button className="w-full btn btn-primary">Apply Now</button>
                </div>

                {/* Progress Bar */}
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-yellow-400 to-blue-500 transition-all"
                    style={{ width: `${((30 - event.seatsLeft) / 30) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
