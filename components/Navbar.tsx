"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const navItems = [
    { href: "/programs", label: "Programs" },
    { href: "/admissions", label: "Admissions" },
    { href: "/student-life", label: "Student Life" },
    { href: "/parents", label: "Parents" },
    { href: "/news", label: "News & Events" }, // ✅ added
    { href: "/calendar", label: "Calendar" },  // ✅ added
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="font-bold text-xl flex items-center gap-2">
          🎓 <span>Dhimsoft Academy</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {/* About Us Dropdown */}
          <div className="relative">
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className={`flex items-center gap-1 px-2 py-1 transition ${
                pathname.startsWith("/about") ? "text-yellow-300" : "hover:text-yellow-300"
              }`}
            >
              About Us <ChevronDown size={16} />
            </button>
            {aboutOpen && (
              <div className="absolute mt-2 bg-white text-gray-900 shadow-lg rounded-lg w-48 overflow-hidden animate-fade-in">
                <Link href="/about/mission" className="block px-4 py-2 hover:bg-gray-100">Mission</Link>
                <Link href="/about/vision" className="block px-4 py-2 hover:bg-gray-100">Vision</Link>
                <Link href="/about/history" className="block px-4 py-2 hover:bg-gray-100">History</Link>
                <Link href="/about/leadership" className="block px-4 py-2 hover:bg-gray-100">Leadership</Link>
                <Link href="/about/careers" className="block px-4 py-2 hover:bg-gray-100">Careers</Link>
              </div>
            )}
          </div>

          {/* Other Links */}
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition ${
                pathname === item.href
                  ? "text-yellow-300 border-b-2 border-yellow-300"
                  : "hover:text-yellow-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 hover:text-yellow-300"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20 px-6 py-4 space-y-4 animate-slide-down">
          <div>
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex items-center justify-between w-full px-2 py-2 hover:text-yellow-300"
            >
              About Us <ChevronDown size={16} />
            </button>
            {aboutOpen && (
              <div className="mt-2 bg-white text-gray-900 shadow-lg rounded-lg w-full overflow-hidden">
                <Link href="/about/mission" className="block px-4 py-2 hover:bg-gray-100">Mission</Link>
                <Link href="/about/vision" className="block px-4 py-2 hover:bg-gray-100">Vision</Link>
                <Link href="/about/history" className="block px-4 py-2 hover:bg-gray-100">History</Link>
                <Link href="/about/leadership" className="block px-4 py-2 hover:bg-gray-100">Leadership</Link>
                <Link href="/about/careers" className="block px-4 py-2 hover:bg-gray-100">Careers</Link>
              </div>
            )}
          </div>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block transition ${
                pathname === item.href ? "text-yellow-300" : "hover:text-yellow-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
