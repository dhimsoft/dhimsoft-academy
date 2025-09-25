"use client";

import { CalendarCheck } from "lucide-react";

export default function AttendancePage() {
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

      {/* Content Card */}
      <div className="flex-grow flex items-start justify-center pt-24 px-6">
        <div
          className="bg-gradient-to-br from-blue-400/20 via-indigo-900/50 to-black/70 
                     backdrop-blur-xl shadow-2xl rounded-2xl p-10 md:p-12 max-w-4xl w-full 
                     text-white border border-white/20 space-y-6"
        >
          {/* Title */}
          <div className="flex items-center gap-3 mb-6">
            <CalendarCheck className="text-blue-300 w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-extrabold">Attendance</h1>
          </div>

          {/* Body */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Regular and punctual attendance is essential for student achievement. 
            At <span className="font-semibold text-blue-300">Dhimsoft Academy</span>, 
            we believe every school day counts and contributes to long-term success. 
          </p>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            Parents and guardians are strongly encouraged to support consistent attendance, 
            communicate absences promptly, and help foster strong habits of responsibility. 
            Together, we ensure students stay engaged, prepared, and thriving.
          </p>

          {/* Divider */}
          <div className="mt-8 h-1 w-32 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
