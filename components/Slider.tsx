"use client";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "https://placehold.co/1200x400?text=Welcome+to+PS+111",
    caption: "Welcome to PS 111 Adolph S. Ochs"
  },
  {
    id: 2,
    image: "https://placehold.co/1200x400?text=Academic+Excellence",
    caption: "Committed to Academic Excellence"
  },
  {
    id: 3,
    image: "https://placehold.co/1200x400?text=Community+Engagement",
    caption: "Strong Community Engagement"
  }
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.caption}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">{slide.caption}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
