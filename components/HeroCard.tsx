"use client";

import { ReactNode } from "react";
import Image from "next/image";

type HeroCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function HeroCard({ icon, title, description }: HeroCardProps) {
  return (
    <header className="relative h-[60vh] flex items-center justify-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image
          src="/images/bg-main.jpg"
          alt="" // empty alt since decorative
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Glass Card */}
      <div
        className="relative z-10 max-w-xl mx-auto p-6 md:p-10 rounded-2xl shadow-2xl
                   backdrop-blur-lg bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80
                   border border-white/20 transition-transform duration-500 hover:scale-[1.02]"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="text-cyan-400 text-3xl">{icon}</span>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">{title}</h1>
        </div>
        <p className="text-gray-200 text-sm md:text-base leading-relaxed">{description}</p>

        {/* Neon Accent Line */}
        <div className="mt-4 h-1 w-24 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500 rounded-full animate-pulse" />
      </div>
    </header>
  );
}

