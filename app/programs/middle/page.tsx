"use client";

import { Book, Lightbulb, Users, Trophy } from "lucide-react";

export default function MiddleSchoolPage() {
  const highlights = [
    {
      icon: <Lightbulb className="w-6 h-6 text-orange-300" />,
      title: "Academic Challenge",
      desc: "Rigorous instruction across math, science, language arts, and social studies builds critical thinking skills.",
    },
    {
      icon: <Users className="w-6 h-6 text-red-300" />,
      title: "Exploration & Growth",
      desc: "Students explore electives, arts, and technology to discover passions and talents.",
    },
    {
      icon: <Trophy className="w-6 h-6 text-pink-300" />,
      title: "Leadership & Responsibility",
      desc: "Opportunities in clubs, student government, and service projects foster independence and leadership.",
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
        <div className="bg-gradient-to-br from-orange-400/20 via-red-900/50 to-black/70
                        backdrop-blur-xl shadow-2xl rounded-2xl p-10 md:p-12 max-w-4xl w-full
                        text-white border border-white/20 transition-all duration-500">

          {/* Title */}
          <div className="flex items-center gap-3 mb-8">
            <Book className="text-orange-300 w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-extrabold">Middle School</h1>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-200 leading-relaxed mb-10">
            Our Middle School program challenges students to think critically, explore
            new subjects, and develop independence as learners. With a balance of
            academics, arts, athletics, and leadership, students gain the skills they
            need to thrive in high school and beyond.
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
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
            >
              Explore Admissions
            </a>
          </div>

          {/* Divider */}
          <div className="mt-12 h-1 w-32 mx-auto bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
