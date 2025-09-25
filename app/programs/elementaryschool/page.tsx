"use client";

import { Pencil, BookOpen, Users, Sparkles } from "lucide-react";

export default function ElementarySchoolPage() {
  const highlights = [
    {
      icon: <BookOpen className="w-6 h-6 text-pink-300" />,
      title: "Core Curriculum",
      desc: "Strong foundations in reading, writing, math, science, and social studies.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-300" />,
      title: "Creativity & Enrichment",
      desc: "Art, music, and technology projects that spark curiosity and imagination.",
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-300" />,
      title: "Community & Growth",
      desc: "A nurturing environment that builds confidence, friendships, and teamwork.",
    },
  ];

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
      <div className="flex-grow flex items-start justify-center pt-24 px-6 pb-16">
        <div className="bg-gradient-to-br from-pink-400/20 via-purple-900/50 to-black/70
                        backdrop-blur-xl shadow-2xl rounded-2xl p-10 md:p-12 max-w-4xl w-full
                        text-white border border-white/20 transition-all duration-500">

          {/* Title */}
          <div className="flex items-center gap-3 mb-8">
            <Pencil className="text-pink-300 w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-extrabold">Elementary School</h1>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-200 leading-relaxed mb-10">
            Our Elementary School provides a strong foundation in academics while
            nurturing creativity, curiosity, and collaboration. Students are
            inspired by caring teachers and a supportive community to develop a
            lifelong love of learning.
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="bg-white/10 p-6 rounded-xl border border-white/10 hover:bg-white/20 transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  {item.icon}
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                </div>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <a
              href="/admissions"
              className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
            >
              Apply Now
            </a>
          </div>

          {/* Divider */}
          <div className="mt-12 h-1 w-32 mx-auto bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
