// app/pdf-tools/page.tsx
"use client";

import { FileText } from "lucide-react";

export default function PdfToolsPage() {
  return (
    <main className="relative flex flex-col min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#000428] via-[#004e92] to-[#000428] text-white">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-3xl animate-pulse top-20 left-20"></div>
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-3xl animate-pulse bottom-20 right-20"></div>
      </div>

      {/* Main Glass Card */}
      <div
        className="relative bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl 
                   p-10 md:p-16 max-w-3xl w-full text-center border border-white/20 
                   animate-fadeIn"
      >
        {/* Icon with Glow */}
        <div className="flex justify-center mb-6">
          <div className="p-6 rounded-full bg-gradient-to-br from-doe-yellow to-pink-500 shadow-lg shadow-pink-500/30 animate-bounce">
            <FileText className="w-14 h-14 text-white" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
          Dhimsoft PDF Suite
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-8">
          The future of PDF tools is almost here. <br />
          Merge, convert, protect, and manage PDFs with next-gen technology.
        </p>

        {/* Futuristic Badge */}
        <div className="inline-block bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 px-8 py-3 rounded-full text-base font-semibold shadow-lg animate-pulse">
          🚀 Coming Soon
        </div>
      </div>
    </main>
  );
}
