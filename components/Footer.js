export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-2">P.S. 111</h3>
          <p className="text-sm">
            Nurturing young minds in the heart of Manhattan since 1925.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/academics">Academics</a></li>
            <li><a href="/news">News</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#">Parent Portal</a></li>
            <li><a href="#">School Calendar</a></li>
            <li><a href="#">Lunch Menu</a></li>
            <li><a href="#">Transportation</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact Info</h4>
          <p className="text-sm">440 West 53rd Street</p>
          <p className="text-sm">Manhattan, NY 10019</p>
          <p className="text-sm">(212) 555-0111</p>
          <p className="text-sm">info@ps111.nyc.gov</p>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-300">
        © 2024 P.S. 111 Adolph S. Ochs. All rights reserved.
      </div>
    </footer>
  );
}
