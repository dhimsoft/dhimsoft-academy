import "./globals.css";
import { Nunito } from "next/font/google";

export const metadata = {
  title: "PS 111 Adolph S. Ochs",
  description: "Committed to Academic Excellence and Community Engagement",
};

// Load Google Font (Nunito)
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${nunito.className} bg-gray-50 text-gray-900`}>
        {/* Header */}
        <header className="bg-doe-blue text-white shadow-md sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
            <h1 className="text-2xl font-bold hover:text-doe-yellow transition-colors">
              PS 111
            </h1>
            <ul className="flex gap-6 font-medium [&_a]:hover:text-doe-yellow [&_a]:transition-colors">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/academics">Academics</a>
              </li>
              <li>
                <a href="/news">News</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-doe-blue text-white mt-16">
          <div className="max-w-7xl mx-auto p-6 text-center text-sm">
            © 2025 PS 111 Adolph S. Ochs. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
