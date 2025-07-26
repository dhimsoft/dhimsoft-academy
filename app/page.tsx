"use client";

import Image from "next/image";
import Slider from "@/components/Slider";
import { MapPin, School, Clock } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center w-full">
        <Image
          src="/images/hero.jpg"
          alt="School Hero"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/50" />
        <div className="relative z-10 text-white px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to P.S. 111</h1>
          <p className="text-lg">Nurturing young minds in the heart of Manhattan.</p>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 text-center">
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <MapPin className="mx-auto text-blue-700 mb-4" size={40} />
          <h3 className="text-xl font-bold">Location</h3>
          <p>440 West 53rd Street, Manhattan, NY</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <School className="mx-auto text-blue-700 mb-4" size={40} />
          <h3 className="text-xl font-bold">Grades</h3>
          <p>Pre-K through 5th Grade</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <Clock className="mx-auto text-blue-700 mb-4" size={40} />
          <h3 className="text-xl font-bold">School Hours</h3>
          <p>8:00 AM – 3:00 PM</p>
        </div>
      </section>

      {/* News Slider */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">Latest News & Events</h2>
        <Slider />
      </section>
    </div>
  );
}
