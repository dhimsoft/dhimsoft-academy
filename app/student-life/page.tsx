"use client";

import { Users, Music, Dumbbell, Star, Sparkles } from "lucide-react";

export default function StudentLifePage() {
  const highlights = [
    {
      title: "Arts & Creativity",
      desc: "Music, drama, and visual arts inspire students to express themselves and showcase their talents.",
      icon: <Music className="w-8 h-8 text-pink-400" />,
      gradient: "from-pink-400/20 via-purple-900/50 to-black/70",
    },
    {
      title: "Athletics",
      desc: "Teamwork and discipline thrive in our athletic programs, offering sports for all skill levels.",
      icon: <Dumbbell className="w-8 h-8 text-green-400" />,
      gradient: "from-green-400/20 via-emerald-900/50 to-black/70",
    },
    {
      title: "Clubs & Activities",
      desc: "From robotics to debate, students explore passions, build friendships, and grow as leaders.",
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      gradient: "from-yellow-400/20 via-orange-900/50 to-black/70",
    },
    {
      title: "Leadership",
      desc: "Student council, mentorship, and service projects empower students to shape their community.",
      icon: <Sparkles className="w-8 h-8 text-cyan-400" />,
      gradient: "from-cyan-400/20 via-blue-900/50 to-black/70",
    },
  ];

  return (
    <main className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/bg-main.jpg"
          alt="School background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Section */}
      <section className="flex items-start justify-center pt-28 px-6">
        <div
          className="bg-gradient-to-r from-gray-900/80 to-gray-800/70 
                     backdrop-blur-lg shadow-2xl rounded-2xl p-10 max-w-2xl w-full
                     text-white border border-white/10"
        >
          <div className="flex items-center gap-3 mb-4">
            <Users className="text-doe-yellow w-8 h-8" />
            <h1 className="text-3xl md:text-4xl font-extrabold">Student Life</h1>
          </div>
          <p className="text-gray-200 leading-relaxed text-lg">
            Discover the vibrant life at Dhimsoft Academy — where students grow 
            beyond the classroom with arts, athletics, clubs, and leadership 
            opportunities that build community and character.
          </p>
          <div className="mt-5 h-1 w-24 bg-gradient-to-r from-doe-yellow to-pink-500 rounded-full"></div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {highlights.map((item, i) => (
          <div
            key={i}
            className={`p-8 rounded-2xl border border-white/20 backdrop-blur-lg shadow-lg 
                        bg-gradient-to-br ${item.gradient} transition-transform hover:scale-[1.03]`}
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
