import { newsData } from "../../data/newsData";

export default function NewsPage() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-4">News & Events</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {newsData.map((news) => (
          <div key={news.id} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{news.title}</h3>
            <p className="text-gray-500 text-sm">{news.date}</p>
            <p>{news.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
