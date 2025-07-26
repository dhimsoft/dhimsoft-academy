import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "P.S. 111 Adolph S. Ochs",
  description: "Nurturing young minds in the heart of Manhattan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
