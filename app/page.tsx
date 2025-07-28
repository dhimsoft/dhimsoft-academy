export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-blue-700 text-white text-center py-32">
        <h1 className="text-5xl font-bold mb-4">Welcome to PS 111 Adolph S. Ochs</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Committed to Academic Excellence and Community Engagement
        </p>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: "About Us", link: "/about" },
          { title: "Academics", link: "/academics" },
          { title: "Contact", link: "/contact" },
          { title: "News & Events", link: "/news" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold text-blue-700 mb-2">{item.title}</h3>
            <p className="text-gray-600">Learn more about {item.title.toLowerCase()}.</p>
          </a>
        ))}
      </section>

      {/* News Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Latest News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Library Renovation Complete",
                date: "2025-07-20",
                text: "Our library now features modern learning zones and digital resources.",
              },
              {
                title: "Family Movie Night",
                date: "2025-07-10",
                text: "Join us for our annual family movie night under the stars!",
              },
              {
                title: "New Gifted & Talented Program Launch",
                date: "2025-06-15",
                text: "Expanded G&T classes for grades 2-5 begin this fall.",
              },
            ].map((news, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-blue-700">{news.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{news.date}</p>
                <p className="text-gray-700">{news.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
