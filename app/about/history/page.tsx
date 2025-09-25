"use client";

import { BookOpen } from "lucide-react";

export default function HistoryPage() {
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
          className="bg-gradient-to-br from-emerald-400/20 via-green-900/50 to-black/70
                     backdrop-blur-xl shadow-2xl rounded-2xl p-10 md:p-14 max-w-5xl w-full
                     text-white border border-white/20 transition-all duration-500"
        >
          {/* Title */}
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-emerald-300 w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-extrabold">Our History</h1>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
            Since its founding, <span className="font-semibold text-emerald-300">Dhimsoft Academy</span> 
            has been committed to academic excellence, innovation, and community values. 
            Our journey began with a vision to prepare students for a rapidly changing world.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Over the years, we have expanded our programs, built lasting partnerships, 
            and embraced new technologies to ensure our students receive the best education 
            possible while honoring the traditions that shaped us.
          </p>

          {/* Gradient Divider */}
          <div className="mt-10 h-1 w-40 bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
