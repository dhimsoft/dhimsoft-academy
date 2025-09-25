import Image from "next/image";

function Hero() {
  return (
    <section className="relative h-[75vh] flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg-main.jpg"
          alt="School background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-md leading-tight">
        <span className="text-white">Welcome to </span>
        <span className="text-doe-yellow">Dhimsoft </span>
        <span className="text-white">Academy</span>
      </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90 leading-relaxed">
          Empowering students with technology, creativity, and academic excellence.
        </p>
        <a
          href="/about"
          className="bg-doe-yellow text-doe-blue px-8 py-3 rounded-lg text-lg font-semibold shadow hover:bg-yellow-400 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Quick Links Section */}
      <section className="bg-[#002b55] py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "About Us", link: "/about" },
            { title: "Academics", link: "/academics" },
            { title: "Contact", link: "/contact" },
            { title: "News & Events", link: "/news" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="bg-white/10 hover:bg-white/20 p-6 rounded-xl border border-white/20 
                         shadow-lg transition transform hover:scale-[1.03] text-center backdrop-blur-md"
            >
              <h3 className="text-xl font-semibold text-doe-yellow mb-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-white/80">
                Learn more about {item.title.toLowerCase()}.
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* News Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-doe-hero-blue mb-12">
            Latest News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "New Innovation Lab Opening",
                date: "2025-08-15",
                text: "We are launching a cutting-edge innovation lab for students to explore coding, robotics, and AI projects.",
              },
              {
                title: "Family Tech Night",
                date: "2025-07-10",
                text: "Join us for a night of family fun and learning with interactive tech showcases and student projects.",
              },
              {
                title: "STEM Program Expansion",
                date: "2025-06-15",
                text: "Our STEM curriculum is expanding to include new AI and cloud computing tracks.",
              },
            ].map((news, i) => (
              <article
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-[1.02] border border-gray-200"
              >
                <h3 className="text-xl font-bold text-doe-hero-blue mb-2">
                  {news.title}
                </h3>
                <time
                  className="text-gray-500 text-sm mb-3 block"
                  dateTime={news.date}
                >
                  {new Date(news.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <p className="text-gray-700">{news.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
