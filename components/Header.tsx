"use client";

import Link from "next/link";
import { useState } from "react";
import { GraduationCap } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    {
      label: "About Us",
      link: "/about",
      dropdown: [
        { label: "Mission", link: "/about/mission" },
        { label: "Vision", link: "/about/vision" },
        { label: "History", link: "/about/history" },
        { label: "Leadership", link: "/about/leadership" },
        { label: "Careers", link: "/about/careers" },
      ],
    },
    {
      label: "Programs",
      link: "/programs",
      dropdown: [
        { label: "Middle School", link: "/programs/middle" },
        { label: "High School", link: "/programs/high" },
        { label: "Summer", link: "/programs/summer" },
      ],
    },
    {
      label: "Admissions",
      link: "/admissions",
      dropdown: [
        { label: "Inquire", link: "/admissions/inquire" },
        { label: "Visit", link: "/admissions/visit" },
        { label: "Tuition", link: "/admissions/tuition" },
        { label: "FAQs", link: "/admissions/faqs" },
      ],
    },
    {
      label: "Student Life",
      link: "/student-life",
      dropdown: [
        { label: "Dorm Life", link: "/student-life/dorm" },
        { label: "Arts", link: "/student-life/arts" },
        { label: "Athletics", link: "/student-life/athletics" },
        { label: "Wellness", link: "/student-life/wellness" },
      ],
    },
    {
      label: "Parents",
      link: "/parents",
      dropdown: [
        { label: "PTA", link: "/parents/pta" },
        { label: "Parent Coordinator", link: "/parents/coordinator" },
        { label: "Resources", link: "/parents/resources" },
        { label: "Title 1 PAC", link: "/parents/title1" },
        { label: "Attendance", link: "/parents/attendance" },
      ],
    },
    { label: "Calendar", link: "/calendar" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 relative">
      {/* Navbar background */}
      <div className="bg-gradient-to-r from-[#001F3F] via-[#002b55] to-[#001F3F] text-white shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-3xl md:text-4xl font-extrabold tracking-wide hover:text-doe-yellow transition-colors"
          >
            <GraduationCap className="w-8 h-8 text-doe-yellow" />
            Dhimsoft Academy
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10 text-lg font-semibold">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
              >
                <Link
                  href={item.link}
                  aria-haspopup={!!item.dropdown}
                  className="hover:text-doe-yellow transition-colors relative after:absolute after:w-0 after:h-[2px] after:bg-doe-yellow after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
                >
                  {item.label}
                </Link>

                {/* Dropdown */}
                {item.dropdown && (
                  <div className="absolute left-0 mt-3 w-52 bg-white/95 text-doe-blue shadow-xl rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300 backdrop-blur-md border border-blue-200">
                    {item.dropdown.map((drop) => (
                      <Link
                        key={drop.label}
                        href={drop.link}
                        className="block px-4 py-2 hover:bg-doe-blue hover:text-white transition-colors rounded"
                      >
                        {drop.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden text-3xl hover:text-doe-yellow transition-colors"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Futuristic glowing border */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="h-[2px] bg-gradient-to-r from-cyan-400 via-doe-yellow to-blue-500" />
        <div className="h-[4px] bg-gradient-to-r from-cyan-400/40 via-doe-yellow/30 to-blue-500/40 blur-md" />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#001F3F] to-[#003366] px-6 py-4 space-y-3">
          {menuItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.link}
                className="block text-white hover:text-doe-yellow transition-colors"
              >
                {item.label}
              </Link>
              {item.dropdown && (
                <div className="ml-4 space-y-2 mt-2">
                  {item.dropdown.map((drop) => (
                    <Link
                      key={drop.label}
                      href={drop.link}
                      className="block text-sm text-white hover:text-doe-yellow transition-colors"
                    >
                      {drop.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

