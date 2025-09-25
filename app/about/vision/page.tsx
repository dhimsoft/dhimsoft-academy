"use client";

import { Eye } from "lucide-react";

export default function VisionPage() {
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
          className="bg-gradient-to-br from-purple-500/20 via-pink-900/50 to-black/70
                     backdrop-blur-xl shadow-2xl rounded-2xl p-10 md:p-14 max-w-5xl w-full
                     text-white border border-white/20 transition-all duration-500 space-y-8"
        >
          {/* Title */}
          <div className="flex items-center gap-3 mb-6">
            <Eye className="text-purple-300 w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-extrabold">Our Vision</h1>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Our vision is to inspire a generation of students who are innovative, 
            compassionate, and globally minded. We aim to foster creativity and 
            leadership through cutting-edge education that connects knowledge 
            with real-world impact.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            By empowering students with critical thinking, collaboration, and 
            lifelong learning skills, we envision a future where every graduate 
            becomes a leader and positive force in society.
          </p>

          {/* Gradient Divider */}
          <div className="mt-8 h-1 w-32 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
