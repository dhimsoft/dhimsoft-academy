import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "P.S. 111 Manhattan",
  description: "Official school website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="pt-20">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
