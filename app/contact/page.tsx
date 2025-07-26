"use client";

import { Mail, User, Pencil } from "lucide-react";

export default function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // You can add form logic here
  }

  return (
    <main className="relative h-screen w-full font-sans overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/contact.jpg"
          alt="P.S. 111 Campus"
          aria-label="P.S. 111 Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/50 backdrop-blur-sm"></div>
      </div>

      {/* Centered Container */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <div className="bg-gradient-to-r from-blue-700 to-yellow-400 rounded-2xl shadow-xl p-8 space-y-6 text-white">
            <h2 className="text-2xl font-bold mb-4 drop-shadow-lg">
              School Contact Details
            </h2>
            <p className="flex items-center space-x-3">
              <span className="p-2 bg-white/20 rounded-full">
                <Mail className="text-white" size={22} />
              </span>
              <span className="font-medium">contact@ps111nyc.edu</span>
            </p>
            <p className="flex items-center space-x-3">
              <span className="p-2 bg-white/20 rounded-full">
                <User className="text-white" size={22} />
              </span>
              <span className="font-medium">(212) 555-0111</span>
            </p>
            <p className="flex items-start space-x-3">
              <span className="p-2 bg-white/20 rounded-full">
                <Pencil className="text-white" size={22} />
              </span>
              <span className="font-medium leading-relaxed">
                440 West 53rd Street <br /> Manhattan, NY 10019
              </span>
            </p>
            <p className="text-sm mt-4 opacity-90">
              Office Hours: Monday – Friday, 8:00 AM – 4:00 PM
            </p>
          </div>

          {/* Contact Form */}
          <form
            className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-8 space-y-5 border border-gray-200"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Send Us a Note ✏️
            </h2>

            {/* Name Field */}
            <div className="relative group">
              <User className="absolute left-3 top-3 text-blue-700" size={20} />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full pl-10 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-gray-900"
                autoComplete="off"
              />
            </div>

            {/* Email Field */}
            <div className="relative group">
              <Mail className="absolute left-3 top-3 text-blue-700" size={20} />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full pl-10 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-gray-900"
                autoComplete="off"
              />
            </div>

            {/* Message Field */}
            <div className="relative group">
              <Pencil className="absolute left-3 top-3 text-blue-700" size={20} />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full pl-10 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-gray-900"
                autoComplete="off"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-700 to-yellow-400 text-white font-semibold py-3 rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}