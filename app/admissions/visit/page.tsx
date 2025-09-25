"use client";

import { MapPin } from "lucide-react";

export default function VisitPage() {
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
          className="bg-gradient-to-br from-green-400/20 via-emerald-900/50 to-black/70
                     backdrop-blur-xl shadow-2xl rounded-2xl p-8 md:p-12 max-w-3xl w-full
                     text-white border border-white/20"
        >
          {/* Title */}
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="text-green-300 w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-extrabold">Visit Us</h1>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
            Come experience our vibrant learning community firsthand. Schedule a{" "}
            <span className="font-semibold text-green-300">campus visit</span> or 
            join an <span className="font-semibold text-emerald-300">open house</span> 
            event to meet teachers, tour facilities, and see{" "}
            <span className="font-semibold text-green-200">Dhimsoft Academy</span> in action.
          </p>

          {/* Midtown Manhattan Map */}
          <div className="w-full h-[350px] rounded-xl overflow-hidden shadow-lg border border-white/10 mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.462478453204!2d-73.99108408459399!3d40.75493217932702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18f96e0d%3A0x16c2e2b91e8e5b2!2sMidtown%20Manhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1695651123456"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Button */}
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-green-400 text-black font-semibold rounded-lg hover:bg-green-300 transition"
          >
            Schedule a Visit
          </a>
        </div>
      </div>
    </main>
  );
}
