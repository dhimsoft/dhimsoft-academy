"use client";

import { Calendar as CalendarIcon } from "lucide-react";

export default function CalendarPage() {
  return (
    <main className="relative flex flex-col min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/bg-main.jpg"
          alt="School background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Glass Card (same size as Contact) */}
      <div className="flex-grow flex items-start justify-center px-6 pt-20">
        <div className="bg-gradient-to-br from-white/10 via-gray-900/40 to-black/60
                        backdrop-blur-xl shadow-2xl rounded-2xl p-10 max-w-3xl w-full
                        text-white border border-white/20">
          {/* Title */}
          <div className="flex items-center gap-3 mb-4">
            <CalendarIcon className="text-doe-yellow w-8 h-8" />
            <h1 className="text-4xl md:text-5xl font-extrabold">School Calendar</h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
            Stay up-to-date with Dhimsoft Academy events, holidays, and important dates. 
            Our interactive Google Calendar makes it easy to track everything in one place.
          </p>

          {/* Google Calendar Embed */}
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg border border-white/10">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=America%2FNew_York"
              style={{ border: 0 }}
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
