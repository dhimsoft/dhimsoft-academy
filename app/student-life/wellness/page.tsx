"use client";

import { Heart } from "lucide-react";

export default function WellnessPage() {
  return (
    <main className="relative flex flex-col min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/bg-main.jpg"
          alt="Wellness center"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Glass Card */}
      <div className="flex-grow flex items-start justify-center pt-24 px-6">
        <div
          className="bg-gradient-to-br from-teal-400/20 via-cyan-900/50 to-black/70
                     backdrop-blur-xl shadow-2xl rounded-2xl p-8 max-w-3xl w-full
                     text-white border border-white/20 transition-all duration-500"
        >
          {/* Title */}
          <div className="flex items-center gap-3 mb-6">
            <Heart className="text-teal-300 w-8 h-8" />
            <h1 className="text-3xl font-bold">Wellness</h1>
          </div>

          {/* Description */}
          <p className="text-gray-200 leading-relaxed mb-4">
            Wellness is central to student success. Our programs promote mental 
            health, physical well-being, and emotional resilience through 
            counseling, fitness, and mindfulness initiatives.
          </p>

          <p className="text-gray-300 leading-relaxed">
            At <span className="font-semibold text-teal-300">Dhimsoft Academy</span>, 
            we believe a balanced lifestyle is the foundation for growth. 
            Students have access to supportive spaces, wellness coaches, and 
            activities that encourage lifelong healthy habits.
          </p>

          {/* Divider */}
          <div className="mt-6 h-1 w-28 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
