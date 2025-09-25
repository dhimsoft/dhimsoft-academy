// components/AccessibleLogo.tsx
"use client";

export default function AccessibleLogo() {
  return (
    <a
      href="/accessibility"
      aria-label="Accessibility Statement"
      title="Accessibility Statement"
      className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform"
    >
      {/* Circle with accessibility symbol */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 24 24"
        className="rounded-full shadow-lg"
      >
        <circle cx="12" cy="12" r="12" fill="url(#grad)" />
        <path
          fill="#fff"
          d="M12 4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-1 5h2v3h3a1 1 0 1 1 0 2h-3v6h-2v-6H8a1 1 0 1 1 0-2h3V9z"
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Label */}
      <p className="text-sm text-white/80 text-center max-w-xs">
        Accessibility accommodations <br /> available upon request.
      </p>
    </a>
  );
}
