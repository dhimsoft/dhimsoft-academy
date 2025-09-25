"use client";

import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FaqsPage() {
  const faqs = [
    {
      q: "How do I apply for admission?",
      a: "You can start the application process online through our Admissions page. Our team will guide you step-by-step.",
    },
    {
      q: "Does Dhimsoft Academy offer scholarships?",
      a: "Yes, we provide merit-based and need-based scholarships. Check the Financial Aid section under Admissions for details.",
    },
    {
      q: "What extracurricular activities are available?",
      a: "We offer a variety of clubs, athletics, arts, and leadership opportunities to help students grow beyond academics.",
    },
    {
      q: "Is technology integrated into the curriculum?",
      a: "Absolutely! Students have access to coding, robotics, AI, and cloud computing programs starting from middle school.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="relative flex flex-col min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/bg-main.jpg"
          alt="School background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Glass Card */}
      <div className="flex-grow flex items-start justify-center pt-24 px-6">
        <div
          className="bg-gradient-to-br from-purple-400/20 via-indigo-900/50 to-black/70
                     backdrop-blur-xl shadow-2xl rounded-2xl p-8 md:p-12 max-w-4xl w-full
                     text-white border border-white/20"
        >
          {/* Title */}
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="text-purple-300 w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-extrabold">FAQs</h1>
          </div>

          {/* Intro */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10">
            Have questions about{" "}
            <span className="font-semibold text-purple-300">Dhimsoft Academy</span>?  
            Explore our Frequently Asked Questions to learn more about admissions, 
            academics, student life, and more.
          </p>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-white/20 rounded-lg overflow-hidden bg-white/10 hover:bg-white/15 transition"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center text-left px-6 py-4 font-semibold text-lg"
                >
                  {faq.q}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openIndex === i ? "rotate-180 text-purple-300" : ""
                    }`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-4 text-gray-200">{faq.a}</div>
                )}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-10 h-1 w-32 mx-auto bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
