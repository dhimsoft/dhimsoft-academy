"use client";

import { Lock } from "lucide-react";

export default function PrivacyPolicyPage() {
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
          className="bg-gradient-to-br from-purple-500/20 via-indigo-900/50 to-black/70
                     backdrop-blur-xl shadow-2xl rounded-2xl p-10 md:p-12 max-w-4xl w-full
                     text-white border border-white/20 space-y-6"
        >
          {/* Title */}
          <div className="flex items-center gap-3 mb-4">
            <Lock className="text-purple-300 w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-extrabold">Privacy Policy</h1>
          </div>

          {/* Policy Content */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            At <span className="font-semibold text-purple-300">Dhimsoft Academy</span>,  
            we respect your privacy and are committed to safeguarding your personal information.
          </p>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            We never sell or share your data. Information is collected and used exclusively 
            to support educational services, enhance learning experiences, and maintain 
            effective communication with families.
          </p>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            If you have questions or concerns regarding your privacy, please contact us at{" "}
            <span className="font-semibold">info@dhimsoftacademy.com</span>.
          </p>

          {/* Divider */}
          <div className="mt-8 h-1 w-32 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
