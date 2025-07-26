"use client";

import Image from "next/image";
import Slider from "@/components/Slider";
import { motion } from "framer-motion";
import { MapPin, School, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center text-center w-full">
          <Image
            src="/images/hero.jpg"
            alt="School Hero"
            fill
            sizes="100vw"
            priority
            className="object-cover"
            aria-label="School Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-700/70 to-yellow-500/40" aria-hidden="true" />
          <div className="relative z-10 max-w-3xl text-white px-4">
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold mb-6">
              Welcome to P.S. 111
            </motion.h1>
            <p className="text-xl mb-8">Nurturing young minds in the heart of Manhattan.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/about" className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full shadow hover:scale-105 transition">
                Learn More
              </a>
              <a href="/contact" className="bg-blue-700 text-white px-8 py-3 rounded-full shadow hover:scale-105 transition">
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Quick Info Section */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="py-16 bg-gray-50 text-gray-800 w-full">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:scale-105 transition">
              <MapPin className="mx-auto text-blue-700 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2 text-blue-700">Location</h3>
              <p>440 West 53rd Street, Manhattan, NY</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:scale-105 transition">
              <School className="mx-auto text-blue-700 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2 text-blue-700">Grades</h3>
              <p>Pre-K through 5th Grade</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:scale-105 transition">
              <Clock className="mx-auto text-blue-700 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2 text-blue-700">School Hours</h3>
              <p>8:00 AM – 3:00 PM</p>
            </div>
          </div>
        </motion.section>

        {/* News Slider */}
        <section className="py-16 max-w-6xl mx-auto px-4 w-full">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Latest News & Events</h2>
          <Slider />
        </section>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer">
          <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
          Learn
        </a>
        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://vercel.com/templates?framework=next.js" target="_blank" rel="noopener noreferrer">
          <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
          Examples
        </a>
        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
