"use client";

import { Folder, FileText, BookOpen, Info } from "lucide-react";

export default function ResourcesPage() {
const resources = [
    {
      title: "School Policies",
      desc: "Handbooks and important policies for parents and students.",
      icon: <BookOpen className="w-7 h-7 text-teal-300" />,
      link: "/parents/resources/policies",   // ✅ fixed
    },
    {
      title: "Forms & Documents",
      desc: "Download commonly used forms such as permission slips and applications.",
      icon: <FileText className="w-7 h-7 text-teal-300" />,
      link: "/parents/resources/forms",      // ✅ fixed
    },
    {
      title: "Guides & Support",
      desc: "Parent guides, tech support, and learning resources.",
      icon: <Info className="w-7 h-7 text-teal-300" />,
      link: "/parents/resources/guides",     // ✅ fixed
    },
  ];


  return (
    <main className="relative flex flex-col min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/bg-main.jpg"
          alt="Resources background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-grow flex items-start justify-center pt-24 px-6">
        <div
          className="bg-gradient-to-br from-teal-400/20 via-cyan-900/50 to-black/70 
                     backdrop-blur-xl shadow-2xl rounded-2xl p-10 md:p-12 max-w-4xl w-full 
                     text-white border border-white/20 space-y-10"
        >
          {/* Title */}
          <div className="flex items-center gap-3">
            <Folder className="text-teal-300 w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-extrabold">Parent Resources</h1>
          </div>

          {/* Intro */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Access helpful guides, forms, and tools to stay informed and engaged 
            with your child’s education and our school community.
          </p>

          {/* Resource Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {resources.map((res, i) => (
              <a
                key={i}
                href={res.link}
                className="bg-white/10 hover:bg-white/20 p-6 rounded-xl border border-white/20 
                           transition transform hover:scale-[1.03] shadow-lg flex flex-col gap-2"
              >
                <div className="flex items-center gap-3">
                  {res.icon}
                  <h2 className="text-lg font-semibold">{res.title}</h2>
                </div>
                <p className="text-sm text-gray-300">{res.desc}</p>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
