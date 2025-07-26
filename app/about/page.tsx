import Image from "next/image";

export default function About() {
  return (
    <main className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">About P.S. 111</h1>
      <p className="text-lg text-gray-600 mb-8">
        P.S. 111 Adolph S. Ochs is committed to excellence in education and nurturing young minds in the heart of Manhattan.
      </p>
      <div className="rounded-lg overflow-hidden shadow-lg mb-8">
        <Image
          src="/images/classroom.jpg"
          alt="Students in classroom"
          width={1200}
          height={600}
          className="object-cover"
        />
      </div>
      <p className="text-gray-700">
        Named after the distinguished publisher of The New York Times, our school continues his legacy of excellence, integrity, and commitment to learning.
      </p>
    </main>
  );
}
