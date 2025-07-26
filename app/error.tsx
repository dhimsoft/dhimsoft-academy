'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="p-10 text-center">
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <p className="mt-4">{error.message}</p>
      <button
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
