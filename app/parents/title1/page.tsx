"use client";

import { Award, Users, BookOpen, FileText } from "lucide-react";

export default function Title1Page() {
  return (
    <main className="relative flex flex-col min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/bg-main.jpg"
          alt="Title I background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Wrapper */}
      <div className="flex-grow flex items-start justify-center pt-24 px-6">
        <div
          className="bg-gradient-to-br from-yellow-400/20 via-amber-900/50 to-black/70 
                     backdrop-blur-xl shadow-2xl rounded-2xl p-10 md:p-12 max-w-4xl w-full 
                     text-white border border-white/20 space-y-10"
        >
          {/* Title */}
          <div className="flex items-center gap-3">
            <Award className="text-yellow-300 w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-extrabold">Title I Program</h1>
          </div>

          {/* Intro */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Title I provides federal funding to support student achievement, ensuring
            that all children meet challenging academic standards through enriched
            programs, targeted resources, and family engagement opportunities.
          </p>

          {/* Sections */}
          <div className="space-y-8">
            <section>
              <h2 className="flex items-center gap-2 text-2xl font-bold mb-3">
                <BookOpen className="w-7 h-7 text-yellow-300" /> Student Support
              </h2>
              <p className="text-gray-300 text-base md:text-lg">
                Title I resources fund reading and math intervention, tutoring, and
                additional instructional materials designed to meet individual student needs.
              </p>
            </section>

            <section>
              <h2 className="flex items-center gap-2 text-2xl font-bold mb-3">
                <Users className="w-7 h-7 text-yellow-300" /> Parent Engagement
              </h2>
              <p className="text-gray-300 text-base md:text-lg">
                Families are essential partners in student success. Dhimsoft Academy hosts
                workshops, family nights, and parent meetings to strengthen home–school connections.
              </p>
            </section>

            <section>
              <h2 className="flex items-center gap-2 text-2xl font-bold mb-3">
                <FileText className="w-7 h-7 text-yellow-300" /> Policies & Resources
              </h2>
              <p className="text-gray-300 text-base md:text-lg">
                View our{" "}
                <a
                  href="/docs/parent-compact.pdf"
                  className="underline hover:text-yellow-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  School–Parent Compact
                </a>{" "}
                and{" "}
                <a
                  href="/docs/engagement-plan.pdf"
                  className="underline hover:text-yellow-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Parent & Family Engagement Plan
                </a>{" "}
                to learn more about our Title I commitments.
              </p>
            </section>
          </div>

          {/* Divider */}
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
