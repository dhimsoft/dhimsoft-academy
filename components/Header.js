"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-blue-700 text-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white text-blue-700 flex items-center justify-center rounded-full font-bold text-lg">
            111
          </div>
          <span className="font-bold text-xl">
            P.S. 111 Adolph S. Ochs
          </span>
        </Link>
        <nav className="hidden md:flex gap-6 font-medium">
          <Link href="/" className="hover:text-yellow-300">Home</Link>
          <Link href="/about" className="hover:text-yellow-300">About</Link>
          <Link href="/academics" className="hover:text-yellow-300">Academics</Link>
          <Link href="/news" className="hover:text-yellow-300">News</Link>
          <Link href="/contact" className="hover:text-yellow-300">Contact</Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu size={28} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-blue-700 text-white px-4 py-4 space-y-3">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/academics" onClick={() => setOpen(false)}>Academics</Link>
          <Link href="/news" onClick={() => setOpen(false)}>News</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}