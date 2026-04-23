import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#f5f1ed] to-[#e8ddf7] border-t border-[#d4ccc2]">
      <div className="container py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="footer-content">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#4a6fa5] flex items-center justify-center font-bold text-white">
                T
              </div>
              <span className="text-lg font-bold">
                <span style={{ color: "#3a3a3a" }}>TFL</span>
                <span style={{ color: "#8b6f47" }}>CLUB</span>
              </span>
            </div>
            <p className="text-sm mb-6" style={{ color: "#3a3a3a" }}>
              Build discipline, scale profits, and join a community of 300+
              successful traders. 10 seasons completed across India and
              Southeast Asia.
            </p>
            <p className="text-xs" style={{ color: "#5a5a5a" }}>
              © {currentYear} TFLCLUB. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-content">
            <h4 className="font-bold mb-6" style={{ color: "#3a3a3a" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Events", "Mentors", "Apply", "Contact"].map(
                (link, i) => (
                  <li key={i}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="transition-colors text-sm"
                      style={{ color: "#3a3a3a" }}
                      onMouseEnter={(e) => (e.target.style.color = "#8b6f47")}
                      onMouseLeave={(e) => (e.target.style.color = "#3a3a3a")}
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-content">
            <h4 className="font-bold text-[#3a3a3a] mb-6">Resources</h4>
            <ul className="space-y-3">
              {[
                "Blog",
                "Webinars",
                "Trading Tips",
                "Community",
                "Funding Guide",
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-[#3a3a3a] hover:text-[#8b6f47] transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-content">
            <h4 className="font-bold mb-6" style={{ color: "#3a3a3a" }}>
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs mb-1" style={{ color: "#5a5a5a" }}>
                  Email
                </p>
                <a
                  href="mailto:support@tflclub.com"
                  className="font-medium text-sm transition-colors"
                  style={{ color: "#8b6f47" }}
                  onMouseEnter={(e) => (e.target.style.color = "#d4af37")}
                  onMouseLeave={(e) => (e.target.style.color = "#8b6f47")}
                >
                  support@tflclub.com
                </a>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: "#5a5a5a" }}>
                  Phone
                </p>
                <a
                  href="tel:+919876543210"
                  className="font-medium text-sm transition-colors"
                  style={{ color: "#8b6f47" }}
                  onMouseEnter={(e) => (e.target.style.color = "#d4af37")}
                  onMouseLeave={(e) => (e.target.style.color = "#8b6f47")}
                >
                  +91 9876-543-210
                </a>
              </div>
              <div>
                <p className="text-[#5a5a5a] text-xs mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {["instagram", "twitter", "discord", "telegram"].map(
                    (social, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-10 h-10 rounded-lg bg-[#8b6f47]/10 border border-[#d4ccc2] hover:border-[#8b6f47] hover:bg-[#8b6f47]/20 flex items-center justify-center transition-all text-[#8b6f47] hover:text-[#d4af37]"
                      >
                        {social === "instagram" && "I"}
                        {social === "twitter" && "X"}
                        {social === "discord" && "D"}
                        {social === "telegram" && "T"}
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#d4ccc2] to-transparent mb-8"></div>

        {/* Bottom Footer */}
        <div className="footer-content flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#3a3a3a] text-sm">
            Made with passion for traders, by traders
          </p>

          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-[#3a3a3a] hover:text-[#8b6f47] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[#3a3a3a] hover:text-[#8b6f47] transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="text-[#3a3a3a] hover:text-[#8b6f47] transition-colors"
            >
              Disclaimer
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-lg bg-[#8b6f47]/30 border border-[#8b6f47] hover:bg-[#8b6f47]/50 flex items-center justify-center text-[#8b6f47] transition-all hover:scale-110"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
