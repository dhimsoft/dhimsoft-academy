import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "P.S. 111 Adolph S. Ochs",
  description: "Official website for P.S. 111 Elementary School in Manhattan.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Official website for P.S. 111 Elementary School in Manhattan."
        />
        <meta property="og:title" content="P.S. 111 Adolph S. Ochs" />
        <meta
          property="og:description"
          content="Explore academics, events, and updates from P.S. 111 in Manhattan."
        />
        <meta property="og:image" content="/images/hero.jpg" />
      </head>
      <body className="antialiased bg-gray-50">{children}</body>
    </html>
  );
}
