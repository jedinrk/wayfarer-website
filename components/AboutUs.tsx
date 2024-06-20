import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AboutUsW from "../public/W-full.png";
import AboutUsWTrans from "../public/W-transparent.png";
import MapBg from "../public/map-bg.png";
import Members from "./Members";
import NextBtn from "../public/btn-next.svg";
import PreviousBtn from "../public/btn-previous.svg";

type Member = {
  profileUrl: string;
  name: string;
  role: string;
  linkedin: string;
  twitter: string;
  dribble: string;
};
const members: Member[] = [
  {
    profileUrl: "https://avatar.iran.liara.run/public/46",
    name: "Arlene McCoy",
    role: "Chief Executive Officer",
    linkedin: "https://www.linkedin.com/in/naveenkravindran/",
    twitter: "https://x.com/aqtis_io",
    dribble: "https://dribbble.com/creativemints",
  },
  {
    profileUrl: "https://avatar.iran.liara.run/public/46", // Replace with actual profile URL
    name: "John Doe",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/john-doe",
    twitter: "https://twitter.com/john_doe",
    dribble: "https://dribbble.com/john_doe",
  },
  {
    profileUrl: "https://avatar.iran.liara.run/public/46", // Replace with actual profile URL
    name: "Jane Doe",
    role: "Designer",
    linkedin: "https://www.linkedin.com/in/jane-doe",
    twitter: "", // Optional social media link can be empty
    dribble: "", // Optional social media link can be empty
  },
  // Add more objects following the same structure (replace placeholders with actual data)
  {
    profileUrl: "https://avatar.iran.liara.run/public/46", // Replace with actual profile URL
    name: "Michael Smith",
    role: "Marketing Manager",
    linkedin: "https://www.linkedin.com/in/michael-smith",
    twitter: "https://twitter.com/michael_mkt",
    dribble: "", // Optional social media link can be empty
  },
  {
    profileUrl: "https://avatar.iran.liara.run/public/46", // Replace with actual profile URL
    name: "Emily Jones",
    role: "Content Writer",
    linkedin: "https://www.linkedin.com/in/emily-jones",
    twitter: "", // Optional social media link can be empty
    dribble: "", // Optional social media link can be empty
  },
  {
    profileUrl: "https://avatar.iran.liara.run/public/46", // Replace with actual profile URL
    name: "David Lee",
    role: "Sales Representative",
    linkedin: "https://www.linkedin.com/in/david-lee-sales",
    twitter: "https://twitter.com/david_lee_sales",
    dribble: "", // Optional social media link can be empty
  },
  {
    profileUrl: "https://avatar.iran.liara.run/public/46", // Replace with actual profile URL
    name: "Sarah Johnson",
    role: "Human Resources",
    linkedin: "https://www.linkedin.com/in/sarah-johnson-hr",
    twitter: "", // Optional social media link can be empty
    dribble: "", // Optional social media link can be empty
  },
  {
    profileUrl: "https://avatar.iran.liara.run/public/46", // Replace with actual profile URL
    name: "William Brown",
    role: "Product Manager",
    linkedin: "https://www.linkedin.com/in/william-brown-product",
    twitter: "https://twitter.com/william_pm",
    dribble: "", // Optional social media link can be empty
  },
];

function AboutUs() {
  return (
    <section className="w-full bg-theme-800">
      <div className="w-full max-w-320 m-auto px-4 md:px-5 py-14 md:py-20 xl:py-28 relative z-10">
        <div className="lg:flex relative mb-8">
          <div className="max-lg:relative lg:flex-1">
            <h2 className="uppercase mb-[.5em] h6">About Us</h2>
            <h3 className="h2 mb-6">
              Wayfarer is leading the Charge Towards <br />
              <span className="text-theme-text-700">Sustainable Logistics</span>
            </h3>
            <p className="font-sans text-lg mb-[1.333em]">
              Greening India's Future with Wayfarer Logistics World trade
              propels global prosperity, yet it's time we reshape how it's done
              — trading on nature's terms. As one of the world's foremost
              transport and logistics companies, we bear a profound
              responsibility for India's green transition.
            </p>
            <p className="font-sans text-lg">
              At Wayfarer Logistics, we're already reducing CO2 emissions with
              our core services: consolidation, mode shift, and load
              optimisation. However, safeguarding our climate demands more.
              Enter Green Logistics—an array of solutions from CO2 reporting to
              supply chain optimisation, sustainable warehousing, eco-friendly
              fuels, and carbon offsetting. Each solution meticulously crafted
              to shrink your supply chain's carbon footprint.Join forces with
              our team of experts to collaboratively design, implement, and
              personalise sustainable solutions tailored for your business and
              the environment. Let's pave the way for a greener, more
              sustainable India together.
            </p>
            <div className="lg:hidden absolute right-0 top-0 h-full">
              <Image
                src={AboutUsWTrans}
                alt={""}
                className="w-[100%] mix-blend-multiply"
              />
            </div>
          </div>
          <div className="lg:flex-1"></div>
          <div className="hidden lg:block h-full absolute right-[-12px] top-[-2rem] md:top-[-3.5rem] xl:top-[-5.5rem] w-[62%]">
            <Image
              src={AboutUsWTrans}
              alt={""}
              className="absolute right-0 w-[100%] mix-blend-multiply"
            />
            <Image
              src={AboutUsW}
              alt={""}
              className="absolute right-[10%] bottom-0 w-[72%]"
            />
          </div>
        </div>
        <div className="">
          <h3 className="mb-[.8em]">Introducing our team</h3>
          <div className="flex gap-x-8 overflow-hidden">
            <Swiper
              spaceBetween={24}
              slidesPerView={window.innerWidth / 336}
              breakpoints={{
                1233: {
                  slidesPerView: 4,
                  spaceBetween: 32,
                },
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {members.map((member) => (
                <SwiperSlide key={member.name}>
                  <Members
                    profileUrl={member.profileUrl}
                    name={member.name}
                    role={member.role}
                    linkedin={member.linkedin}
                    twitter={member.twitter}
                    dribble={member.dribble}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex justify-between">
            <div></div>
            <div className="flex gap-[15px]">
              <Image src={PreviousBtn} alt={"Prev Button"} />
              <Image src={NextBtn} alt={"Next Button"} />
            </div>
          </div>
        </div>
      </div>
      <Image src={MapBg} alt={""} className="absolute bottom-0 w-full" />
    </section>
  );
}

export default AboutUs;
