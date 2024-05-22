import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Figtree } from "next/font/google";
import BannerImage from "../public/banner_image.svg";
import BannerBg from "../public/banner_bg.svg";
import Image from "next/image";

const figTree = Figtree({
  subsets: ["latin"],
});

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
      <body className={`${figTree.className} relative bg-lime-200`}>
      <Image
          src={BannerBg}
          alt="BannerBg"
          className="absolute top-0 right-0 object-cover -z-20"
        />
        <Image
          src={BannerImage}
          alt="BannerImage"
          className="absolute top-0 right-0 object-cover -z-10"
        />

        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
