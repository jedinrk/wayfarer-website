import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Figtree, Mate } from "next/font/google";
import BannerImage from "../public/banner_image.svg";
import BannerBg from "../public/banner_bg.svg";
import Image from "next/image";

export const sansSerif = Figtree({
  subsets: ['latin'],
  display: 'swap',
})

export const serif = Mate({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap'
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
    <html lang="en">
      <body className="relative">
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
