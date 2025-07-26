
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  { src: "/images/event.jpg", text: "Spring Reading Challenge" },
  { src: "/images/playground.jpg", text: "New Playground Opening" },
  { src: "/images/classroom.jpg", text: "STEM Workshop" },
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-xl shadow-lg">
      <Image
        src={slides[index].src}
        alt={slides[index].text}
        fill
        className="object-cover transition duration-700"
      />
      <div className="absolute bottom-0 w-full bg-black/50 text-white p-4 text-lg font-semibold">
        {slides[index].text}
      </div>
    </div>
  );
}