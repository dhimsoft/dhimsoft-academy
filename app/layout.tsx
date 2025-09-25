import "./globals.css";
import { Nunito } from "next/font/google";
import Layout from "@/components/Layout";

// SEO metadata
export const metadata = {
  title: "Dhimsoft Academy - Empowering Future Innovators",
  description:
    "Empowering students with technology, creativity, and academic excellence",
};

// Google Font
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${nunito.className} bg-gray-50 text-gray-900`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
