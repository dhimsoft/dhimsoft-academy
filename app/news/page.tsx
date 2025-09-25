"use client";

import { CalendarDays, Users, Mic, Star } from "lucide-react";

export default function NewsEventsPage() {
  const news = [
    {
      title: "New Innovation Lab Opening",
      date: "Feb 20, 2025",
      text: "We are excited to launch a state-of-the-art innovation lab for coding, robotics, and AI projects.",
    },
    {
      title: "STEM Program Expansion",
      date: "Jan 30, 2025",
      text: "Our STEM curriculum now includes AI and Cloud Computing tracks, preparing students for the future.",
    },
    {
      title: "Family Tech Night Recap",
      date: "Dec 15, 2024",
      text: "Families enjoyed a fun-filled evening exploring student-led tech projects and interactive showcases.",
    },
  ];

  const events = [
    {
      title: "Family Tech Night",
      date: "March 15, 2025",
      desc: "An evening where families explore coding, robotics, and student innovation projects.",
      icon: <Users className="w-8 h-8 text-blue-300" />,
      gradient: "from-blue-400/20 via-indigo-900/50 to-black/70",
    },
    {
      title: "STEM Fair",
      date: "April 22, 2025",
      desc: "Students showcase their STEM projects and participate in exciting innovation challenges.",
      icon: <Star className="w-8 h-8 text-yellow-300" />,
      gradient: "from-yellow-400/20 via-amber-900/50 to-black/70",
    },
    {
      title: "Guest Speaker Series",
      date: "May 10, 2025",
      desc: "Industry leaders share insights about technology, creativity, and leadership.",
      icon: <Mic className="w-8 h-8 text-pink-300" />,
      gradient: "from-pink-400/20 via-purple-900/50 to-black/70",
    },
  ];

  return (
    <main className="relative flex flex-col min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/bg-main.jpg"
          alt="News & Events background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <div className="text-center text-white py-20 px-6">
        <CalendarDays className="w-12 h-12 mx-auto mb-4 text-doe-yellow" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          News & Events
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200 leading-relaxed">
          Stay up to date with the latest news and upcoming events at Dhimsoft Academy.
        </p>
      </div>

      {/* News Section */}
      <section className="bg-white/10 backdrop-blur-sm py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-10">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, i) => (
              <article
                key={i}
                className="bg-white/90 p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
              >
                <h3 className="text-xl font-bold text-doe-hero-blue mb-2">{item.title}</h3>
                <time className="text-gray-500 text-sm block mb-2">{item.date}</time>
                <p className="text-gray-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-10">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <div
                key={i}
                className={`relative bg-gradient-to-br ${event.gradient} 
                            backdrop-blur-xl shadow-xl rounded-2xl p-8 
                            text-white border border-white/20 transition transform hover:scale-[1.02]`}
              >
                <div className="flex items-center gap-4 mb-4">
                  {event.icon}
                  <h3 className="text-2xl font-bold">{event.title}</h3>
                </div>
                <p className="text-sm text-gray-300 mb-2">{event.date}</p>
                <p className="text-gray-200">{event.desc}</p>
                <div className="mt-6 h-1 w-24 bg-gradient-to-r from-white/50 via-gray-200 to-transparent rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
