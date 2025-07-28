"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
        <h2 className="text-2xl font-bold mb-4">Oops! Something went wrong.</h2>
        <p className="mb-6">{error.message}</p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
