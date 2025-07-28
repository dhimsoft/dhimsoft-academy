"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-doe-blue hover:text-doe-yellow transition-colors">
          PS 111
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 [&_a]:text-doe-blue [&_a:hover]:text-doe-yellow [&_a]:font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/academics">Academics</Link>
          <Link href="/news">News</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-doe-blue hover:text-doe-yellow focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-white px-4 py-4 md:hidden space-y-3 [&_a]:text-doe-blue [&_a:hover]:text-doe-yellow [&_a]:font-medium"
        >
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/academics">Academics</Link>
          <Link href="/news">News</Link>
          <Link href="/contact">Contact</Link>
        </motion.div>
      )}
    </header>
  );
}
