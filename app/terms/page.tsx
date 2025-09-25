"use client";

import { FileText } from "lucide-react";

export default function TermsPage() {
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
          className="bg-gradient-to-br from-blue-500/20 via-slate-900/50 to-black/70
                     backdrop-blur-xl shadow-2xl rounded-2xl p-8 max-w-3xl w-full
                     text-white border border-white/20 transition-all duration-500"
        >
          {/* Title */}
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-blue-300 w-8 h-8" />
            <h1 className="text-3xl font-bold">Terms of Use</h1>
          </div>

          {/* Sections */}
          <section className="space-y-4 text-gray-200 leading-relaxed">
            <p>
              By accessing and using the{" "}
              <span className="font-semibold text-blue-300">Dhimsoft Academy</span> 
              website, you agree to the following terms and conditions.
            </p>

            <h2 className="text-xl font-semibold text-blue-200 mt-4">1. Acceptance of Terms</h2>
            <p>
              Use of this website constitutes your acceptance of these Terms of Use. 
              If you do not agree, please discontinue use immediately.
            </p>

            <h2 className="text-xl font-semibold text-blue-200 mt-4">2. User Responsibilities</h2>
            <p>
              Users must not misuse the website, attempt unauthorized access, or 
              engage in activities that disrupt services or compromise security.
            </p>

            <h2 className="text-xl font-semibold text-blue-200 mt-4">3. Modifications</h2>
            <p>
              Dhimsoft Academy reserves the right to update these terms at any time. 
              Continued use indicates acceptance of the revised terms.
            </p>

            <h2 className="text-xl font-semibold text-blue-200 mt-4">4. Contact</h2>
            <p>
              For questions regarding these terms, please email us at{" "}
              <span className="font-semibold">info@dhimsoftacademy.com</span>.
            </p>
          </section>

          {/* Divider */}
          <div className="mt-8 h-1 w-28 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
