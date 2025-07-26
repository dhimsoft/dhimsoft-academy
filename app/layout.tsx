import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "P.S. 111 | Adolph S. Ochs",
  description:
    "Official website for P.S. 111 - Nurturing young minds in the heart of Manhattan.",
  keywords: [
    "P.S. 111",
    "Adolph S. Ochs",
    "Elementary School",
    "Manhattan School",
    "NYC Education",
  ],
  openGraph: {
    title: "P.S. 111 | Adolph S. Ochs",
    description:
      "Nurturing young minds in the heart of Manhattan. Explore academics, events, and contact information.",
    url: "https://ps111-website.vercel.app",
    siteName: "P.S. 111",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "P.S. 111 School",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
