import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "P.S. 111 - Adolph S. Ochs",
  description: "Nurturing young minds in the heart of Manhattan since 1925.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta
          name="description"
          content="P.S. 111 Adolph S. Ochs Elementary School"
        />
      </head>
      <body className="antialiased bg-gray-50">{children}</body>
    </html>
  );
}
