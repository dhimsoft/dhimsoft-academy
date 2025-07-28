"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event: any) {
    event.preventDefault();
    const data = new FormData(event.target);
    const response = await fetch("https://formspree.io/f/yourFormID", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (response.ok) setStatus("Thanks for your message!");
    else setStatus("Something went wrong, please try again.");
  }

  return (
    <div className="py-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6">Address: 440 W 53rd St, New York, NY 10019<br />Phone: (212) 582-7420</p>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input name="name" placeholder="Your Name" required className="border p-2 rounded" />
        <input type="email" name="email" placeholder="Your Email" required className="border p-2 rounded" />
        <textarea name="message" placeholder="Your Message" required className="border p-2 rounded" rows={5}></textarea>
        <button className="bg-blue-900 text-white py-2 rounded hover:bg-blue-700 transition">Send</button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}
