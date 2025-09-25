"use client";

import { Dumbbell, Trophy, Circle, Activity } from "lucide-react";

export default function AthleticsPage() {
  const sports = [
    {
      title: "Basketball",
      desc: "Building teamwork, discipline, and competitive spirit through local and regional tournaments.",
      icon: <Trophy className="w-8 h-8 text-yellow-300" />,
      gradient: "from-yellow-400/20 via-orange-900/50 to-black/70",
    },
    {
      title: "Soccer",
      desc: "Encouraging endurance, strategy, and collaboration while fostering global sportsmanship.",
      icon: <Circle className="w-8 h-8 text-green-300" />, // placeholder ball
      gradient: "from-green-400/20 via-emerald-900/50 to-black/70",
    },
    {
      title: "Track & Field",
      desc: "Promoting fitness, resilience, and excellence through running, jumping, and strength events.",
      icon: <Activity className="w-8 h-8 text-red-300" />,
      gradient: "from-red-400/20 via-pink-900/50 to-black/70",
    },
  ];

  return (
    <main className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/bg-main.jpg"
          alt="School athletics"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Section */}
      <section className="flex items-start justify-center pt-24 px-6">
        <div className="bg-gradient-to-br from-red-400/20 via-orange-900/50 to-black/70
                        backdrop-blur-xl shadow-2xl rounded-2xl p-8 max-w-3xl w-full
                        text-white border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <Dumbbell className="text-red-300 w-8 h-8" />
            <h1 className="text-3xl font-bold">Athletics</h1>
          </div>

          <p className="text-gray-200 leading-relaxed">
            Athletics build teamwork, resilience, and school spirit. From 
            competitive sports to fitness programs, our students embrace 
            healthy lifestyles and leadership through athletics.
          </p>

          <div className="mt-6 h-1 w-28 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 rounded-full"></div>
        </div>
      </section>

      {/* Sports Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {sports.map((item, i) => (
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

