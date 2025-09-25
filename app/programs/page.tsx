import Image from "next/image";
import { BookOpen, Pencil, Book, GraduationCap, Sun } from "lucide-react";

export default function ProgramsPage() {
  const programs = [
    {
      title: "Elementary School",
      desc: "Strong foundation in reading, writing, math, and science.",
      icon: <Pencil className="w-8 h-8 text-pink-400" />,
      link: "/programs/elementaryschool",
      gradient: "from-pink-400/20 via-purple-900/40 to-black/70",
    },
    {
      title: "Middle School",
      desc: "Critical thinking, independence, and leadership opportunities.",
      icon: <Book className="w-8 h-8 text-orange-400" />,
      link: "/programs/middleschool",
      gradient: "from-orange-400/20 via-red-900/40 to-black/70",
    },
    {
      title: "High School",
      desc: "College and career readiness through rigorous academics.",
      icon: <GraduationCap className="w-8 h-8 text-blue-400" />,
      link: "/programs/highschool",
      gradient: "from-blue-400/20 via-indigo-900/40 to-black/70",
    },
    {
      title: "Summer School",
      desc: "Reinforce skills, explore enrichment, and stay engaged.",
      icon: <Sun className="w-8 h-8 text-yellow-400" />,
      link: "/programs/summerschool",
      gradient: "from-yellow-400/20 via-orange-900/40 to-black/70",
    },
  ];

  return (
    <main className="relative min-h-screen flex flex-col pt-32 pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg-main.jpg"
          alt="School background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Header Card */}
      <div className="relative z-10 max-w-2xl mx-auto p-8 mb-12 rounded-2xl
                      bg-black/60 backdrop-blur-xl border border-cyan-400/30 
                      shadow-[0_0_25px_rgba(0,255,255,0.3)] 
                      hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] 
                      transition-all duration-500 ease-in-out group">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-8 h-8 text-cyan-400 group-hover:text-yellow-400 transition-colors" />
          <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
            Programs
          </h1>
        </div>
        <p className="text-base md:text-lg text-gray-200 leading-relaxed drop-shadow-md">
          Explore our wide range of academic programs. Each pathway is designed
          to challenge students, foster creativity, and prepare them for future success.
        </p>
        <div className="mt-5 h-[3px] w-24 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full animate-pulse" />
      </div>

      {/* Program Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {programs.map((p, i) => (
          <a
            key={i}
            href={p.link}
            className={`p-8 rounded-2xl border border-white/20 backdrop-blur-lg shadow-lg 
                        bg-gradient-to-br ${p.gradient} hover:scale-[1.02] 
                        transition-transform duration-300`}
          >
            <div className="flex items-center gap-3 mb-4">
              {p.icon}
              <h2 className="text-2xl font-bold">{p.title}</h2>
            </div>
            <p className="text-gray-200">{p.desc}</p>
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="relative z-10 mt-12 text-center">
        <a
          href="/admissions"
          className="inline-block bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition"
        >
          Explore Admissions
        </a>
      </div>
    </main>
  );
}
