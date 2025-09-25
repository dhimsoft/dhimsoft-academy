"use client";

import { Palette, Music, Theater, Image as ImageIcon } from "lucide-react";

export default function ArtsPage() {
  const highlights = [
    {
      title: "Music",
      desc: "Choir, band, and instrumental programs nurture talent while teaching teamwork and discipline.",
      icon: <Music className="w-8 h-8 text-yellow-300" />,
      gradient: "from-yellow-400/20 via-orange-900/50 to-black/70",
    },
    {
      title: "Theater",
      desc: "Drama productions and stagecraft help students develop creativity, confidence, and communication skills.",
      icon: <Theater className="w-8 h-8 text-red-300" />,
      gradient: "from-red-400/20 via-pink-900/50 to-black/70",
    },
    {
      title: "Visual Arts",
      desc: "Painting, drawing, and digital arts encourage self-expression and innovation in every student.",
      icon: <ImageIcon className="w-8 h-8 text-green-300" />,
      gradient: "from-green-400/20 via-emerald-900/50 to-black/70",
    },
  ];

  return (
    <main className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/bg-main.jpg"
          alt="School arts"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Section */}
      <section className="flex items-start justify-center pt-24 px-6">
        <div className="bg-gradient-to-br from-pink-400/20 via-purple-900/50 to-black/70
                        backdrop-blur-xl shadow-2xl rounded-2xl p-8 max-w-3xl w-full
                        text-white border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <Palette className="text-pink-300 w-8 h-8" />
            <h1 className="text-3xl font-bold">Arts</h1>
          </div>
          <p className="text-gray-200 leading-relaxed">
            At Dhimsoft Academy, the arts inspire creativity, expression, and collaboration. 
            Students explore music, theater, and visual arts, developing confidence and imagination.
          </p>
          <div className="mt-6 h-1 w-28 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-full"></div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {highlights.map((item, i) => (
          <div
            key={i}
            className={`p-8 rounded-2xl border border-white/20 backdrop-blur-lg shadow-lg 
                        bg-gradient-to-br ${item.gradient} transition hover:scale-[1.02]`}
          >
            <div className="flex items-center gap-3 mb-3">
              {item.icon}
              <h2 className="text-2xl font-bold">{item.title}</h2>
            </div>
            <p className="text-gray-200">{item.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
