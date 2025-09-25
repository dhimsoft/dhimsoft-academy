// components/Footer.tsx
import AccessibleLogo from "@/components/AccessibleLogo";

export default function Footer() {
  return (
    <footer className="bg-doe-blue text-white mt-16">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Column 1: Branding */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide">Dhimsoft Academy</h2>
          <p className="mt-3 text-sm text-white/80 leading-relaxed">
            Empowering students with technology, creativity, and academic excellence.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-4 tracking-wider text-doe-yellow">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-doe-yellow transition-colors">About Us</a></li>
            <li><a href="/programs" className="hover:text-doe-yellow transition-colors">Programs</a></li>
            <li><a href="/admissions" className="hover:text-doe-yellow transition-colors">Admissions</a></li>
            <li><a href="/contact" className="hover:text-doe-yellow transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-4 tracking-wider text-doe-yellow">
            Resources
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/accessibility" className="hover:text-doe-yellow transition-colors">Accessibility Statement</a></li>
            <li><a href="/privacy" className="hover:text-doe-yellow transition-colors">Privacy Policy</a></li>
            <li><a href="/nondiscrimination" className="hover:text-doe-yellow transition-colors">Non-Discrimination & Title IX</a></li>
            <li><a href="/terms" className="hover:text-doe-yellow transition-colors">Terms of Use</a></li>
          </ul>
        </div>

        {/* Column 4: Contact + Map */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-4 tracking-wider text-doe-yellow">
            Contact
          </h3>
          <address className="not-italic text-sm leading-relaxed text-white/80">
            <p>123 Central Park West</p>
            <p>New York, NY</p>
            <p>Email: <a href="mailto:dhimyjean@dhimsoft.com" className="hover:text-doe-yellow">dhimyjean@dhimsoft.com</a></p>
        
          </address>

          {/* Google Map Embed */}
          <div className="mt-4">
            <iframe
              title="Map of Dhimsoft Academy location in Central Park West, New York"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.285027398574!2d-73.9819!3d40.7754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588fdb7e4f27%3A0x8e7a6f84c7a9a84b!2sCentral%20Park%20West%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1694282440000!5m2!1sen!2sus"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg border border-white/10"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10 py-8 px-6 text-center space-y-6">
        {/* Copyright */}
        <p className="text-xs text-white/70">
          © {new Date().getFullYear()} Dhimsoft Academy. All rights reserved.
        </p>

        {/* PDF Suite CTA */}
        <a
          href="/pdf-tools"
          className="inline-block bg-doe-yellow text-doe-blue px-5 py-2 rounded-md font-semibold text-sm shadow hover:bg-yellow-400 transition"
        >
          Access Dhimsoft PDF Suite
        </a>

        {/* Compliance Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="/accessibility" className="hover:text-doe-yellow transition-colors">Accessibility</a>
          <a href="/privacy" className="hover:text-doe-yellow transition-colors">Privacy Policy</a>
          <a href="/nondiscrimination" className="hover:text-doe-yellow transition-colors">Non-Discrimination & Title IX</a>
          <a href="/terms" className="hover:text-doe-yellow transition-colors">Terms of Use</a>
        </div>

        {/* Designer Credit */}
        <p className="text-sm text-white/70">
          Designed & Developed by{" "}
          <span className="font-semibold text-doe-yellow">Dhimy Jean</span>
        </p>

        {/* Accessibility */}
        <div className="flex flex-col items-center mt-4">
          <AccessibleLogo />
          <p className="text-xs text-white/70 mt-2">
            Accessibility accommodations available upon request. <br />
            Contact{" "}
            <a href="mailto:info@dhimsoftacademy.com" className="text-doe-yellow hover:underline">
              info@dhimsoftacademy.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
