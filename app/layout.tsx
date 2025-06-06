import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Figtree } from 'next/font/google'
 
const figtree = Figtree({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Wayfarer Logistics",
  description: "Sustainable Logistics for a Greener Future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth focus:scroll-auto ${figtree.className}`}>
      <body className="relative">
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
