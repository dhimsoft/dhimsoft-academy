"use client";
import { motion } from "framer-motion";
import { Palette, Laptop, Dumbbell, Languages } from "lucide-react";

const programs = [
  { icon: <Laptop className="text-blue-700" size={40} aria-label="STEM & Technology" />, title: "STEM & Technology", desc: "Advanced programs in science and digital literacy." },
  { icon: <Palette className="text-pink-500" size={40} aria-label="Arts & Music" />, title: "Arts & Music", desc: "Creative expression through visual arts and music." },
  { icon: <Dumbbell className="text-green-500" size={40} aria-label="Physical Education" />, title: "Physical Education", desc: "Healthy lifestyles through sports and fitness." },
  { icon: <Languages className="text-yellow-500" size={40} aria-label="ESL Support" />, title: "ESL Support", desc: "English as a Second Language programs for multilingual learners." }
];

export default function Academics() {
  return (
    <main className="bg-gray-50">
      <section className="text-center bg-blue-700 text-white py-16">
        <h1 className="text-4xl font-bold mb-4">Academics</h1>
        <p className="text-lg max-w-2xl mx-auto">We inspire creativity and critical thinking for lifelong learning.</p>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {programs.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center">
            <div className="flex justify-center mb-4">{p.icon}</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{p.title}</h3>
            <p className="text-gray-600">{p.desc}</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}