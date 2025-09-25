"use client";

import { BookOpen } from "lucide-react";

export default function AdmissionsPage() {
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
          className="bg-gradient-to-br from-yellow-400/20 via-amber-900/50 to-black/70
                     backdrop-blur-xl shadow-2xl rounded-2xl p-8 md:p-12 max-w-4xl w-full
                     text-white border border-white/20 space-y-8"
        >
          {/* Title */}
          <div className="flex items-center gap-3">
            <BookOpen className="text-doe-yellow w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-extrabold">Admissions</h1>
          </div>

          {/* Intro */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Learn about our admissions process and how to apply to{" "}
            <span className="font-semibold text-doe-yellow">Dhimsoft Academy</span>. 
            We guide families every step of the way to ensure success.
          </p>

          {/* Steps Section */}
          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            <div className="bg-white/10 p-6 rounded-xl shadow hover:bg-white/15 transition">
              <h2 className="text-xl font-semibold mb-2 text-doe-yellow">1. Inquiry</h2>
              <p className="text-gray-200">
                Submit an inquiry to connect with our admissions team and receive more information.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl shadow hover:bg-white/15 transition">
              <h2 className="text-xl font-semibold mb-2 text-doe-yellow">2. Application</h2>
              <p className="text-gray-200">
                Complete the online application form and provide required documentation.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl shadow hover:bg-white/15 transition">
              <h2 className="text-xl font-semibold mb-2 text-doe-yellow">3. Assessment</h2>
              <p className="text-gray-200">
                Students may be invited for an interview, assessment, or placement exam.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl shadow hover:bg-white/15 transition">
              <h2 className="text-xl font-semibold mb-2 text-doe-yellow">4. Enrollment</h2>
              <p className="text-gray-200">
                Upon acceptance, families complete enrollment by submitting forms and fees.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <a
              href="/inquiry"
              className="inline-block bg-doe-yellow text-doe-blue px-8 py-3 rounded-lg font-semibold shadow hover:bg-yellow-400 transition"
            >
              Start Your Inquiry
            </a>
          </div>

          {/* Divider */}
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-doe-yellow via-orange-400 to-pink-500 rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
