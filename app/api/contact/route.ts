import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Debug log once API is loaded
console.log("✅ Contact API route initialized");

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // 🔍 Debug environment variables (don’t log password)
    console.log("🌍 ENV loaded:", {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS ? "✅ Exists" : "❌ Missing",
        });

        console.log("DEBUG ENV:", {
      EMAIL_HOST: process.env.EMAIL_HOST,
      EMAIL_PORT: process.env.EMAIL_PORT,
      EMAIL_USER: process.env.EMAIL_USER,
      EMAIL_PASS: process.env.EMAIL_PASS ? "✅ Loaded" : "❌ Missing",
    });

    // ✅ Transporter for custom domain SMTP
  const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: false, // TLS upgrade later
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false, // allow self-signed
  },
});


    // Verify connection
    await transporter.verify();
    console.log("🚀 SMTP Server ready to take messages");

    // Send email
    await transporter.sendMail({
      from: `"Dhimsoft Academy Contact" <${process.env.EMAIL_USER}>`,
      to: "dhimyjean@dhimsoft.com",
      subject: `📩 New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: "✅ Message sent successfully!" });
  } catch (err: any) {
    console.error("❌ Email error:", err.message || err);
    return NextResponse.json(
      { error: "Failed to send message", details: err.message || err },
      { status: 500 }
    );
  }
}
