"use client";

import { Home } from "lucide-react";

export default function DormPage() {
  return (
    <main className="relative flex flex-col min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/bg-main.jpg"
          alt="Student dorms"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Glass Card */}
      <div className="flex-grow flex items-start justify-center pt-24 px-6">
        <div
          className="bg-gradient-to-br from-emerald-400/20 via-green-900/50 to-black/70
                     backdrop-blur-xl shadow-2xl rounded-2xl p-8 max-w-3xl w-full
                     text-white border border-white/20 transition-all duration-500"
        >
          {/* Title */}
          <div className="flex items-center gap-3 mb-6">
            <Home className="text-emerald-300 w-8 h-8" />
            <h1 className="text-3xl font-bold">Dorm Life</h1>
          </div>

          {/* Description */}
          <p className="text-gray-200 leading-relaxed mb-4">
            Our dorms create a supportive <span className="font-semibold text-emerald-300">home away from home</span>. 
            With modern facilities, caring staff, and a focus on community, 
            students build lasting friendships and independence. 
          </p>

          <p className="text-gray-300 leading-relaxed">
            Dorm life at <span className="font-semibold text-emerald-300">Dhimsoft Academy</span> encourages collaboration, 
            responsibility, and growth beyond the classroom. Students enjoy 
            safe, inclusive, and vibrant spaces that promote both rest and recreation.
          </p>

          {/* Divider */}
          <div className="mt-6 h-1 w-28 bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
