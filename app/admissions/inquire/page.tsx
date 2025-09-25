"use client";

import { Mail } from "lucide-react";
import { useState } from "react";

export default function InquiryPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("⏳ Sending...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string, // use message instead of question
    };

    try {
      const res = await fetch("/api/contact", {   // 👈 same endpoint
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("✅ Inquiry sent! We'll be in touch soon.");
        form.reset();
      } else {
        const { error } = await res.json();
        setStatus(`❌ Failed: ${error}`);
      }
    } catch {
      setStatus("❌ Network error. Please retry.");
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

      {/* Glass Card */}
      <div className="flex-grow flex items-start justify-center pt-24 px-6">
        <div
          className="bg-gradient-to-br from-sky-400/20 via-blue-900/50 to-black/70
                     backdrop-blur-xl shadow-2xl rounded-2xl p-8 md:p-12 max-w-3xl w-full
                     text-white border border-white/20"
        >
          {/* Title */}
          <div className="flex items-center gap-3 mb-8">
            <Mail className="text-sky-300 w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-extrabold">Inquiry</h1>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
            Interested in learning more about{" "}
            <span className="font-semibold text-sky-300">Dhimsoft Academy</span>?  
            Submit an inquiry below and our admissions team will provide 
            personalized guidance and answer your questions.
          </p>

          {/* Inquiry Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Your Question or Inquiry"
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-sky-400 text-black font-semibold rounded-lg hover:bg-sky-300 transition"
            >
              Submit Inquiry
            </button>
          </form>

          {/* Status */}
          {status && <p className="mt-4 text-base">{status}</p>}

          {/* Divider */}
          <div className="mt-10 h-1 w-32 bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
