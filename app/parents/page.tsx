"use client";

import { Users, Mail, Phone, Calendar } from "lucide-react";

export default function ParentsPage() {
  return (
    <main className="relative flex flex-col min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/bg-main.jpg"
          alt="School background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Glass Card */}
      <div className="flex-grow flex items-start justify-center px-6 pt-24">
        <div
          className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-black/70
                     backdrop-blur-xl shadow-2xl rounded-2xl p-10 md:p-12 max-w-4xl w-full
                     text-white border border-white/20 space-y-8"
        >
          {/* Title */}
          <div className="flex items-center gap-3 mb-4">
            <Users className="text-doe-yellow w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-extrabold">Parents</h1>
          </div>

          {/* Intro */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            We value strong parent partnerships at{" "}
            <span className="font-semibold text-doe-yellow">Dhimsoft Academy</span>.  
            Here you’ll find resources, communication tools, and opportunities to connect 
            with our school community and support student success.
          </p>

          {/* Quick Access Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a
              href="/calendar"
              className="p-6 rounded-xl bg-white/10 hover:bg-white/20 transition border border-white/10 shadow-lg flex flex-col items-center text-center"
            >
              <Calendar className="w-8 h-8 text-pink-400 mb-2" />
              <h3 className="font-semibold text-lg">School Calendar</h3>
              <p className="text-sm text-gray-300">Stay updated on events & schedules</p>
            </a>

            <a
              href="/contact"
              className="p-6 rounded-xl bg-white/10 hover:bg-white/20 transition border border-white/10 shadow-lg flex flex-col items-center text-center"
            >
              <Mail className="w-8 h-8 text-cyan-400 mb-2" />
              <h3 className="font-semibold text-lg">Contact Us</h3>
              <p className="text-sm text-gray-300">Reach staff & administrators</p>
            </a>

            <a
              href="tel:9298000822"
              className="p-6 rounded-xl bg-white/10 hover:bg-white/20 transition border border-white/10 shadow-lg flex flex-col items-center text-center"
            >
              <Phone className="w-8 h-8 text-green-400 mb-2" />
              <h3 className="font-semibold text-lg">Call Office</h3>
              <p className="text-sm text-gray-300">(929) 800-0822</p>
            </a>

            <a
              href="/admissions"
              className="p-6 rounded-xl bg-white/10 hover:bg-white/20 transition border border-white/10 shadow-lg flex flex-col items-center text-center"
            >
              <Users className="w-8 h-8 text-yellow-400 mb-2" />
              <h3 className="font-semibold text-lg">Admissions</h3>
              <p className="text-sm text-gray-300">Learn how to apply</p>
            </a>
          </div>

          {/* Divider */}
          <div className="mt-10 h-1 w-32 bg-gradient-to-r from-doe-yellow to-pink-500 rounded-full mx-auto"></div>
        </div>
      </div>
    </main>
  );
}
