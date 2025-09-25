"use client";

import { Briefcase } from "lucide-react";

export default function CareersPage() {
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
          className="bg-gradient-to-br from-blue-400/20 via-sky-900/50 to-black/70
                     backdrop-blur-xl shadow-2xl rounded-2xl p-8 md:p-12 max-w-5xl w-full
                     text-white border border-white/20 transition-all duration-500"
        >
          {/* Title */}
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-blue-300 w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-extrabold">Careers</h1>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
            At <span className="font-semibold text-blue-300">Dhimsoft Academy</span>, 
            we believe in attracting and nurturing talented educators, staff, 
            and professionals who share our mission of empowering students 
            through innovation and excellence.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Join a dynamic team dedicated to shaping the future of education. 
            Explore opportunities to grow your career while making a meaningful 
            impact in the lives of our students and community.
          </p>

          {/* Gradient Divider */}
          <div className="mt-10 h-1 w-40 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
