import Image from "next/image";
import Banner from "../components/Banner";
import Mission from "../components/Mission";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <>
      <Banner />
      <Mission/>
      <Services/>
      <Testimonial/>
      <AboutUs/>
      <Services/>
    </>
  );
}
