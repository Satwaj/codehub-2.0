import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can I get a refund?",
      answer:
        "Full refund if informed early. No refund within 10 days of the event.",
    },
    {
      question: "Will I become profitable after TFLCLUB?",
      answer:
        "No — but we provide resources and opportunities to increase your chances. Success depends on your dedication and consistency.",
    },
    {
      question: "Can I learn strategies in 5 days?",
      answer:
        "Yes — by observing and interacting with mentors. You will learn trading psychology, risk management, and real execution patterns.",
    },
    {
      question: "What exactly am I paying for?",
      answer:
        "Stay, food, experience, resources, trading environment, mentorship, and access to the exclusive community for life.",
    },
    {
      question: "Do I need prior trading experience?",
      answer:
        "No. TFLCLUB welcomes beginners. We have separate tracks for different experience levels.",
    },
    {
      question: "Is there a guarantee I'll win the tournament?",
      answer:
        "No. The tournament is competitive based on your trading performance. However, everyone wins the experience and community access.",
    },
    {
      question: "What happens after the bootcamp?",
      answer:
        "You get lifetime community access, priority support, exclusive discounts on funded accounts, and early access to future opportunities.",
    },
    {
      question: "Can I bring a trading partner?",
      answer:
        "Yes! Group discounts available. Contact us for bulk registrations.",
    },
  ];

  return (
    <section
      id="faq"
      className="faq-section relative py-20 bg-gradient-to-b from-[#e8ddf7]/50 to-[#ddd1c7]"
    >
      <div className="container max-w-3xl">
        <h2 className="faq-title text-center text-5xl font-bold mb-4 text-[#2a2a2a]">
          Frequently Asked <span className="text-[#8b6f47]">Questions</span>
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16">
          Get answers to common questions
        </p>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 rounded-lg bg-white/5 border border-white/10 hover:border-yellow-400/30 transition-all text-left group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-white group-hover:text-yellow-400 transition-colors">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-6 h-6 flex items-center justify-center text-yellow-400 transition-transform ${openIndex === i ? "rotate-45" : ""}`}
                  >
                    +
                  </div>
                </div>

                {openIndex === i && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Didn't find your answer?
          </h3>
          <p className="text-gray-300 mb-6">
            Reach out to our team for personalized guidance
          </p>
          <button className="btn btn-primary">Book a Call</button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
