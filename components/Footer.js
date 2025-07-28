export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold text-lg">PS 111 Adolph S. Ochs</h3>
          <p>440 W 53rd St, New York, NY 10019</p>
          <p>Phone: (212) 582-7420</p>
        </div>
        <div className="text-sm md:text-right">
          <p>© {new Date().getFullYear()} PS 111. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
