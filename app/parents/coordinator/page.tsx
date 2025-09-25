"use client";

import { UserCircle, Mail, Phone } from "lucide-react";

export default function CoordinatorPage() {
  return (
    <main className="relative flex flex-col min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/bg-main.jpg"
          alt="Coordinator background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-grow flex items-start justify-center pt-24 px-6">
        <div
          className="bg-gradient-to-br from-green-400/20 via-emerald-900/50 to-black/70 
                     backdrop-blur-xl shadow-2xl rounded-2xl p-10 md:p-12 max-w-4xl w-full 
                     text-white border border-white/20 space-y-6"
        >
          {/* Title */}
          <div className="flex items-center gap-3 mb-6">
            <UserCircle className="text-green-300 w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-extrabold">Parent Coordinator</h1>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            The Parent Coordinator serves as a vital bridge between families and 
            <span className="font-semibold text-green-300"> Dhimsoft Academy</span>.  
            They support parents by answering questions, organizing events, sharing 
            resources, and ensuring smooth communication between home and school.
          </p>

          {/* Contact Info */}
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 space-y-3 text-gray-200">
            <p className="flex items-center gap-3">
              <Mail className="text-green-300 w-6 h-6" />
              <a
                href="mailto:coordinator@dhimsoftacademy.com"
                className="hover:underline"
              >
                coordinator@dhimsoftacademy.com
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="text-green-300 w-6 h-6" />
              (929) 555-1234
            </p>
          </div>

          {/* Divider */}
          <div className="mt-8 h-1 w-32 bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
