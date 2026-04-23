import React, { useState } from "react";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "events", label: "Events", href: "#events" },
    { id: "mentors", label: "Mentors", href: "#mentors" },
    { id: "apply", label: "Apply Now", href: "#apply", special: true },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-b from-[#f5f1ed] to-[#e8ddf7]/70 backdrop-blur-lg border-b border-[#d4ccc2] shadow-lg">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#4a6fa5] flex items-center justify-center font-bold text-white text-lg group-hover:scale-110 transition-transform">
            T
          </div>
          <span className="text-xl font-bold font-mono hidden sm:block">
            <span className="text-[#3a3a3a]">TFL</span>
            <span className="text-[#8b6f47]">CLUB</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setActiveLink(link.id)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                activeLink === link.id
                  ? "text-black bg-[#8b6f47]"
                  : "text-[#2a2a2a] hover:text-[#8b6f47]"
              } ${link.special ? "bg-gradient-to-r from-[#8b6f47] to-[#d4af37] text-white font-bold ml-4" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* User Profile & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* User Profile (Desktop) */}
          <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-[#8b6f47]/20 border border-[#8b6f47] text-[#8b6f47] hover:bg-[#8b6f47] hover:text-white transition-all">
            <span className="text-lg font-bold">U</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div
              className={`w-6 h-5 flex flex-col justify-between cursor-pointer`}
            >
              <span
                className={`h-0.5 w-6 bg-[#2a2a2a] rounded-full transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`h-0.5 w-6 bg-[#2a2a2a] rounded-full transition-all ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-6 bg-[#8b6f47] rounded-full transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#e8ddf7]/95 backdrop-blur-lg border-t border-[#d4ccc2]">
          <div className="container py-4 space-y-2">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.id);
                  setMenuOpen(false);
                }}
                className={`block px-4 py-2 rounded-lg transition-all ${
                  activeLink === link.id
                    ? "bg-[#8b6f47]/20 text-[#8b6f47]"
                    : "text-[#3a3a3a] hover:text-[#8b6f47]"
                } ${link.special ? "bg-gradient-to-r from-[#8b6f47] to-[#d4af37] text-white font-bold" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
