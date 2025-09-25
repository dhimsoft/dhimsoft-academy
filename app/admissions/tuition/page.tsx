"use client";

import { DollarSign } from "lucide-react";

export default function TuitionPage() {
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
      <div className="flex-grow flex items-start justify-center pt-24 px-6">
        <div
          className="bg-gradient-to-br from-yellow-400/20 via-amber-900/50 to-black/70
                     backdrop-blur-xl shadow-2xl rounded-2xl p-8 md:p-12 max-w-4xl w-full
                     text-white border border-white/20 space-y-8"
        >
          {/* Title */}
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="text-yellow-300 w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-extrabold">Tuition & Fees</h1>
          </div>

          {/* Intro */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            We are committed to making quality education accessible. Explore tuition, 
            fees, and financial aid options designed to support your family’s 
            educational journey at{" "}
            <span className="font-semibold text-yellow-300">Dhimsoft Academy</span>.
          </p>

          {/* Tuition Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white/10 backdrop-blur-md rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-white/20 text-yellow-300">
                  <th className="px-6 py-3">Program</th>
                  <th className="px-6 py-3">Tuition</th>
                  <th className="px-6 py-3">Fees</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/20 text-gray-100">
                <tr>
                  <td className="px-6 py-4">Elementary School</td>
                  <td className="px-6 py-4">$8,000 / year</td>
                  <td className="px-6 py-4">$500</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Middle School</td>
                  <td className="px-6 py-4">$10,000 / year</td>
                  <td className="px-6 py-4">$600</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">High School</td>
                  <td className="px-6 py-4">$12,000 / year</td>
                  <td className="px-6 py-4">$750</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Summer Programs</td>
                  <td className="px-6 py-4">$1,200 / session</td>
                  <td className="px-6 py-4">$100</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Financial Aid */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-yellow-300 mb-3">💡 Financial Aid</h2>
            <p className="text-gray-200">
              Dhimsoft Academy offers scholarships, need-based assistance, and 
              flexible payment plans to ensure every student has access to our programs.
              Families are encouraged to contact the admissions office for more details.
            </p>
          </div>

          {/* Divider */}
          <div className="mt-10 h-1 w-32 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
