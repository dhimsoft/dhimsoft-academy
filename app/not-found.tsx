export default function NotFound() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-gray-600 mb-6">This page could not be found.</p>
      <a href="/" className="text-blue-600 hover:underline">Go Home</a>
    </div>
  );
}
