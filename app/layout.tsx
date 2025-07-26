import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "P.S. 111 Adolph S. Ochs",
  description: "Nurturing young minds in the heart of Manhattan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
