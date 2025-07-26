import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "P.S. 111 | Adolph S. Ochs",
  description: "Official website for P.S. 111 - Nurturing young minds in the heart of Manhattan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
