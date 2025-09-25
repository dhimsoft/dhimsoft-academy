"use client";

import { Target } from "lucide-react";

export default function MissionPage() {
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
          className="bg-gradient-to-br from-teal-500/20 via-indigo-900/50 to-black/70
                     backdrop-blur-xl shadow-2xl rounded-2xl p-10 md:p-14 max-w-5xl w-full
                     text-white border border-white/20 transition-all duration-500 space-y-8"
        >
          {/* Title */}
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-teal-300 w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-extrabold">Our Mission</h1>
          </div>

          {/* School + Tech Combined Message */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            At <span className="font-semibold text-teal-300">Dhimsoft Academy</span>, 
            our mission blends <span className="text-blue-300">education and technology</span> 
            to empower the next generation of innovators. We believe students thrive best 
            when guided by curiosity, creativity, and hands-on experience.
          </p>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            As a <span className="font-semibold">tech company</span>, 
            we build solutions that make life simpler, more productive, and more impactful. 
            Every project and every program reflects our commitment to 
            <span className="text-purple-300"> excellence, innovation, and long-term success</span>.
          </p>

          {/* Highlighted Quote */}
          <blockquote className="mt-6 border-l-4 border-teal-400 pl-4 italic text-gray-100 text-xl md:text-2xl">
            “We transform complexity into clarity by building technology and learning experiences 
            that empower people, organizations, and communities.”
          </blockquote>

          {/* Gradient Divider */}
          <div className="mt-8 h-1 w-32 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
