"use client"
import Banner from "../components/Banner";
import Mission from "../components/Mission";
import Services from "@/components/Services";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import AboutUs from "@/components/AboutUs";
import { Testimony } from "@/components/Testimonial";

const testimonies: Testimony[] = [
  {
    id: 1,
    name: "John Doe",
    description: "Product Head",
    profilePic: "https://avatar.iran.liara.run/public/46",
    company: "Acme Inc.",
    logo: "https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/66404ae9e06b23b2ce0beea8_Biosynthesis.svg",
    content:
      "I've been using this product for a while now and I'm very impressed with its features and ease of use. It has definitely helped me improve my workflow.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    description: "CEO & Founder",
    profilePic: "https://avatar.iran.liara.run/public/30",
    company: "BigCorp",
    logo: "https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/66404ae94fe39eba6eb74858_AlphaWave.svg",
    content: "This product is a lifesaver! It has made my work so much easier and more efficient. I highly recommend it to anyone looking for a similar solution.",
    rating: 4,
  },
];

export default function Home() {
  return (
    <>
      <Banner />
      <Mission />
      <Services />
      <CustomerTestimonials testimonies={testimonies} />
      <AboutUs />
    </>
  );
}
