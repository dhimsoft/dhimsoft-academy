"use client";

import { Users } from "lucide-react";

export default function PtaPage() {
  return (
    <main className="relative flex flex-col min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/bg-main.jpg"
          alt="PTA background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-grow flex items-start justify-center pt-24 px-6">
        <div
          className="bg-gradient-to-br from-pink-400/20 via-purple-900/50 to-black/70 
                     backdrop-blur-xl shadow-2xl rounded-2xl p-10 md:p-12 max-w-4xl w-full 
                     text-white border border-white/20 space-y-6"
        >
          {/* Title */}
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-pink-300 w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Parent Teacher Association
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            The Parent Teacher Association (PTA) fosters collaboration between 
            families, teachers, and staff. Together, we support programs, events, 
            and initiatives that enhance student learning and school spirit.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            The PTA is open to all parents and guardians, and your participation 
            helps build a stronger, more connected school community.
          </p>

          {/* How to Get Involved */}
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 space-y-3 text-gray-200">
            <h2 className="text-2xl font-semibold mb-2">Get Involved:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 text-lg">
              <li>Attend monthly PTA meetings</li>
              <li>Volunteer at school events</li>
              <li>Join a PTA committee</li>
              <li>Support fundraising activities</li>
            </ul>
          </div>

          {/* Divider */}
          <div className="mt-8 h-1 w-32 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
