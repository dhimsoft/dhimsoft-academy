"use client";

import { GraduationCap, Book, Pencil, Sun } from "lucide-react";

export default function AcademicsPage() {
  const academics = [
    {
      title: "Elementary School",
      link: "/programs/elementaryschool",
      icon: <Pencil className="w-8 h-8 text-pink-400" />,
      desc: "A strong foundation in reading, writing, math, and science with creativity and curiosity.",
      gradient: "from-pink-400/30 via-purple-900/60 to-black/70",
    },
    {
      title: "Middle School",
      link: "/programs/middleschool",
      icon: <Book className="w-8 h-8 text-orange-400" />,
      desc: "Challenging academics and leadership opportunities to prepare for high school success.",
      gradient: "from-orange-400/30 via-red-900/60 to-black/70",
    },
    {
      title: "High School",
      link: "/programs/highschool",
      icon: <GraduationCap className="w-8 h-8 text-blue-400" />,
      desc: "Rigorous courses, extracurriculars, and mentorship to prepare for college and careers.",
      gradient: "from-blue-400/30 via-indigo-900/60 to-black/70",
    },
    {
      title: "Summer School",
      link: "/programs/summerschool",
      icon: <Sun className="w-8 h-8 text-yellow-400" />,
      desc: "Enrichment programs and academic support to keep students engaged and prepared.",
      gradient: "from-yellow-400/30 via-orange-900/60 to-black/70",
    },
  ];

  return (
    <main className="relative flex flex-col min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/bg-main.jpg"
          alt="Academics background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title Section */}
      <div className="text-center text-white py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
          Academics
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
          Dhimsoft Academy provides rigorous and innovative academic programs 
          that empower students at every stage of learning — from elementary to high school.
        </p>
      </div>

      {/* Academics Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-8 pb-20">
        {academics.map((item, i) => (
          <a
            key={i}
            href={item.link}
            className={`relative bg-gradient-to-br ${item.gradient} 
                        backdrop-blur-xl shadow-xl rounded-2xl p-8 
                        text-white border border-white/20 transition 
                        transform hover:scale-[1.03] hover:shadow-2xl`}
          >
            <div className="flex items-center gap-4 mb-4">
              {item.icon}
              <h2 className="text-2xl font-bold">{item.title}</h2>
            </div>
            <p className="text-base md:text-lg text-gray-200">{item.desc}</p>
            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-white/50 via-gray-200 to-transparent rounded-full"></div>
          </a>
        ))}
      </div>
    </main>
  );
}
