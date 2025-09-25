"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("⏳ Sending...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        form.reset();
      } else {
        const { error } = await res.json();
        setStatus(`❌ Failed: ${error}`);
      }
    } catch {
      setStatus("❌ Network error. Try again.");
    }
  };

  return (
    <main className="relative flex flex-col min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/bg-main.jpg"
          alt="School background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contact Section */}
      <div className="flex-grow flex flex-col items-center justify-start px-6 pt-20 space-y-10">
        <div className="bg-gradient-to-br from-white/10 via-gray-900/40 to-black/60
                        backdrop-blur-xl shadow-2xl rounded-2xl p-10 max-w-3xl w-full text-white">
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 flex items-center gap-3">
            <Mail className="text-doe-yellow w-8 h-8" />
            Contact Us
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
            Get in touch with Dhimsoft Academy. Whether you have questions about
            admissions, programs, or school life, we’re here to help!
          </p>

          {/* Contact Info */}
          <div className="space-y-4 mb-8 text-lg md:text-xl">
            <p className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-doe-yellow" />
              <span>123 Main Street, New York, NY</span>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-doe-yellow" />
              <a href="mailto:dhimyjean@dhimsoft.com" className="hover:underline">
                dhimyjean@dhimsoft.com
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-doe-yellow" />
              <a href="tel:9298000822" className="hover:underline">
                (929) 800-0822
              </a>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 
                         text-white placeholder-gray-300 text-lg md:text-xl"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 
                         text-white placeholder-gray-300 text-lg md:text-xl"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 
                         text-white placeholder-gray-300 text-lg md:text-xl"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-doe-yellow text-black font-semibold 
                         rounded-lg hover:bg-yellow-400 transition text-lg md:text-xl"
            >
              Send Message
            </button>

            {/* Fallback direct email */}
            <a
              href="mailto:dhimyjean@dhimsoft.com"
              className="block text-center mt-2 text-base text-doe-yellow hover:underline"
            >
              Or email us directly
            </a>
          </form>

          {status && <p className="mt-4 text-base">{status}</p>}

          {/* Footer Links */}
          <div className="flex justify-center gap-8 mt-8 text-gray-300">
            <a
              href="https://dhimsoft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-doe-yellow"
            >
              <Globe className="w-5 h-5" /> Services
            </a>
            <a
              href="https://linkedin.com/in/dhimy-jean"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-doe-yellow"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a
              href="https://github.com/dhimsoft"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-doe-yellow"
            >
              <Github className="w-5 h-5" /> GitHub
            </a>
          </div>
        </div>

        {/* Google Map (ONLY ONE) */}
        <div className="w-full max-w-3xl h-[350px] rounded-xl overflow-hidden shadow-lg border border-white/10 mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.90840354441!2d-73.98513008459437!3d40.75889617932673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855d7e3f7b3%3A0xaaa5e95db9e3a!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1638235623456"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
