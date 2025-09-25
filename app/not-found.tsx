export default function NotFound() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-[70vh] text-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Large 404 */}
      <h1 className="text-7xl font-extrabold text-doe-yellow drop-shadow-md">404</h1>

      {/* Message */}
      <p className="mt-4 text-lg text-gray-300">
        Oops! The page you are looking for does not exist.
      </p>

      {/* CTA */}
      <a
        href="/"
        className="mt-6 bg-doe-yellow text-doe-blue px-6 py-3 rounded-md font-semibold shadow hover:bg-yellow-400 transition"
      >
        Back to Home
      </a>
    </main>
  );
}
