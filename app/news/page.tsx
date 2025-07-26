import Image from "next/image";

export default function News() {
  return (
    <main className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">News & Events</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Spring Carnival */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <Image src="/images/event.jpg" alt="Spring Carnival" width={400} height={250} className="object-cover w-full" />
          <div className="p-4">
            <h2 className="font-bold text-xl">Spring Carnival</h2>
            <p className="text-gray-600">A day of fun and games celebrating our students and families!</p>
          </div>
        </div>

        {/* Classroom Curriculum */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <Image src="/images/classroom.jpg" alt="Curriculum" width={400} height={250} className="object-cover w-full" />
          <div className="p-4">
            <h2 className="font-bold text-xl">Curriculum Showcase</h2>
            <p className="text-gray-600">Exploring innovative teaching methods and interactive classrooms.</p>
          </div>
        </div>

        {/* Chess Tournament */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <Image src="/images/tournament.jpg" alt="Chess Tournament" width={400} height={250} className="object-cover w-full" />
          <div className="p-4">
            <h2 className="font-bold text-xl">Chess Tournament Highlights</h2>
            <p className="text-gray-600">Students showcase their strategic skills at our annual chess tournament!</p>
          </div>
        </div>
      </div>
    </main>
  );
}
