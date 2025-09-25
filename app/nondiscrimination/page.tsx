"use client";

import { Shield } from "lucide-react";

export default function NonDiscriminationPage() {
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
          className="bg-gradient-to-br from-yellow-500/20 via-red-900/50 to-black/70
                     backdrop-blur-xl shadow-2xl rounded-2xl p-8 md:p-12 max-w-4xl w-full
                     text-white border border-white/20 space-y-6"
        >
          {/* Title */}
          <div className="flex items-center gap-3 mb-6">
            <Shield className="text-yellow-300 w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Non-Discrimination & Title IX Notice
            </h1>
          </div>

          {/* Body */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Dhimsoft Academy is committed to maintaining a safe, inclusive, and supportive
            environment for all students, families, and staff.
          </p>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            We do not discriminate on the basis of{" "}
            <span className="font-semibold text-yellow-300">
              race, color, national origin, sex, disability, or age
            </span>{" "}
            in any of our programs or activities.
          </p>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            Inquiries regarding{" "}
            <span className="font-semibold text-yellow-300">Title IX</span> may be directed to
            our compliance coordinator at{" "}
            <a
              href="mailto:compliance@dhimsoftacademy.com"
              className="underline hover:text-yellow-400"
            >
              compliance@dhimsoftacademy.com
            </a>
            .
          </p>

          {/* Divider */}
          <div className="mt-8 h-1 w-32 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
