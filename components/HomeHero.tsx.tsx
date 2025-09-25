import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image
          src="/images/bg-main.jpg"
          alt="" // decorative
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Welcome to <span className="text-doe-yellow">Dhimsoft Academy</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed drop-shadow">
          Empowering students with technology, creativity, and academic excellence.
        </p>
        <a
          href="/about"
          className="inline-block bg-doe-yellow text-doe-blue px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-yellow-400 transition transform hover:scale-105"
        >
          Learn More
        </a>

        {/* Neon accent underline */}
        <div className="mt-6 h-1 w-32 mx-auto bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500 rounded-full animate-pulse" />
      </div>
    </section>
  );
}
