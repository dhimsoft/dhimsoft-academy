"use client";

import { GraduationCap, BookOpen, Users, Award } from "lucide-react";

export default function HighSchoolPage() {
  const highlights = [
    {
      icon: <BookOpen className="w-6 h-6 text-blue-300" />,
      title: "Advanced Courses",
      desc: "Rigorous curriculum including honors, AP, and STEM-focused classes.",
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-300" />,
      title: "Leadership & Activities",
      desc: "Clubs, sports, and student leadership opportunities that build character and teamwork.",
    },
    {
      icon: <Award className="w-6 h-6 text-purple-300" />,
      title: "College & Career Prep",
      desc: "Guidance counseling, mentorship, and career readiness programs to prepare for the future.",
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
        <div className="bg-gradient-to-br from-blue-500/20 via-indigo-900/50 to-black/70
                        backdrop-blur-xl shadow-2xl rounded-2xl p-10 md:p-12 max-w-4xl w-full
                        text-white border border-white/20 transition-all duration-500">

          {/* Title */}
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-blue-300 w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-extrabold">High School</h1>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-200 leading-relaxed mb-10">
            Our High School program prepares students for college, careers, and lifelong learning. 
            We combine academic rigor with opportunities for creativity, leadership, and innovation.
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
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
            >
              Explore Admissions
            </a>
          </div>

          {/* Divider */}
          <div className="mt-12 h-1 w-32 mx-auto bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
