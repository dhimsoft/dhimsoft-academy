import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background image applied to all pages */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg-main.jpg"
          alt="School background"
          fill
          className="object-cover"
          priority
        />

        {/* Gradient overlay (subtle, keeps top readable, bottom visible) */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-blue-900/20 to-transparent" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <Header />

      {/* Page content */}
      <main className="flex-1 px-6 py-12">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
