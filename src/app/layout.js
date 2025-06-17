import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Menrva Healthcare - Door-to-Door Blood Testing Services in Mumbai",
  description: "Professional blood testing services at your doorstep in Mumbai. Convenient, affordable, and reliable diagnostic solutions with trusted lab partnerships.",
  keywords: "blood test, Mumbai, home collection, healthcare, diagnostic, lab test, door-to-door",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
