"use client";

import { Crown } from "lucide-react";

export default function LeadershipPage() {
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

      {/* Futuristic Glass Card */}
      <div className="flex-grow flex items-start justify-center pt-24 px-6">
        <div
          className="bg-gradient-to-br from-yellow-400/20 via-amber-900/50 to-black/70
                     backdrop-blur-xl shadow-2xl rounded-2xl p-10 md:p-14 max-w-5xl w-full
                     text-white border border-white/20 transition-all duration-500 space-y-8"
        >
          {/* Title */}
          <div className="flex items-center gap-3 mb-6">
            <Crown className="text-yellow-300 w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-extrabold">Our Leadership</h1>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Leadership at <span className="font-semibold text-yellow-300">Dhimsoft Academy</span> 
            is built on vision, integrity, and dedication. Our leaders are committed 
            to fostering a culture of collaboration, inclusivity, and innovation.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            With the guidance of our experienced faculty, administrators, and 
            community partners, we empower students and staff to achieve their 
            highest potential.
          </p>

          {/* Gradient Divider */}
          <div className="mt-8 h-1 w-32 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
