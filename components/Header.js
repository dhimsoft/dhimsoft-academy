"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-700">
          P.S. 111
        </Link>

        {/* Menu */}
        <nav className="space-x-8">
          <Link href="/" className="hover:text-blue-500 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-500 transition">About</Link>
          <Link href="/academics" className="hover:text-blue-500 transition">Academics</Link>
          <Link href="/contact" className="hover:text-blue-500 transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
