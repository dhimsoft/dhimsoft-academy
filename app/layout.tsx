import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "P.S. 111 Adolph S. Ochs",
  description: "Official website of P.S. 111 Elementary School, NYC.",
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
      </head>
      <body>{children}</body>
    </html>
  );
}
