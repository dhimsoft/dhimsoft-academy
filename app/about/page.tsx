"use client";

export default function AboutPage() {
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

      {/* Glass Card Wrapper */}
      <div className="flex-grow flex items-start justify-center px-6 pt-20">
        <div className="bg-gradient-to-br from-white/10 via-gray-900/40 to-black/60
                        backdrop-blur-xl shadow-2xl rounded-2xl p-10 max-w-3xl w-full
                        text-white border border-white/20 space-y-16">
          
          {/* About Section */}
          <section className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">About Us</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Dhimsoft Academy is committed to empowering students with knowledge, 
              creativity, and strong values. We provide an inclusive and nurturing 
              environment where students excel academically, grow personally, and 
              prepare for lifelong success.
            </p>
          </section>

          {/* Mission & Vision */}
          <section className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/15 backdrop-blur-md p-6 rounded-xl shadow-lg hover:bg-white/20 transition">
              <h2 className="text-2xl font-bold mb-3">🌟 Mission</h2>
              <p className="text-gray-100 text-base md:text-lg">
                To inspire curiosity, critical thinking, and a love of learning 
                while preparing students to thrive in a rapidly changing world.
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-md p-6 rounded-xl shadow-lg hover:bg-white/20 transition">
              <h2 className="text-2xl font-bold mb-3">🔮 Vision</h2>
              <p className="text-gray-100 text-base md:text-lg">
                To be a leader in innovative education, where every student is 
                empowered to reach their full potential and contribute positively 
                to society.
              </p>
            </div>
          </section>

          {/* Focus Areas */}
          <section>
            <h2 className="text-3xl font-semibold mb-8 text-center">Our Focus</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: "📚", title: "Academics", desc: "Rigorous curriculum fostering excellence in all core subjects." },
                { icon: "🤝", title: "Community", desc: "Partnerships with families to support student success." },
                { icon: "🎨", title: "Creativity", desc: "Arts, music, and enrichment opportunities for every learner." },
                { icon: "⚽", title: "Athletics", desc: "Programs promoting teamwork, leadership, and healthy lifestyles." },
                { icon: "💻", title: "Technology", desc: "Modern tools to prepare students for the digital world." },
                { icon: "🌎", title: "Diversity", desc: "Inclusive environment that values respect and cultural awareness." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white/15 hover:bg-white/25 backdrop-blur-md p-6 rounded-xl shadow-lg text-center transition transform hover:scale-105"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="text-base text-gray-100">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6">Discover More</h2>
            <a
              href="/admissions"
              className="inline-block bg-doe-yellow text-doe-blue px-8 py-3 rounded-lg font-semibold shadow hover:bg-yellow-400 transition"
            >
              Explore Admissions
            </a>
          </section>

          {/* Compliance Note */}
          <section className="text-center text-sm text-gray-300 space-y-2">
            <p>⚖️ Dhimsoft Academy does not discriminate on the basis of race, color, national origin, sex, disability, or age in its programs and activities.</p>
            <p>📜 For questions about accessibility or Title IX compliance, please contact our main office.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
