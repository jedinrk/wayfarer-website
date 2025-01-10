import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import AboutUsW from "../public/W-full.png";
import AboutUsWTrans from "../public/W-transparent.png";
import Members from "./Members";
import NextBtn from "../public/btn-next.svg";
import PreviousBtn from "../public/btn-previous.svg";

import FaisaalAvatar from "../public/faisaal.png";
import FarshadAvatar from "../public/farshad.jpg";
import PlaeholderAvatar from "../public/user.png";

type Member = {
  profileUrl: string;
  name: string;
  role: string;
  linkedin: string;
};
const members: Member[] = [
  {
    profileUrl: FaisaalAvatar.src,
    name: "Faisaal Muhammad",
    role: "Director",
    linkedin: "https://www.linkedin.com/in/naveenkravindran/",
  },
  {
    profileUrl: FarshadAvatar.src,
    name: "Farshad",
    role: "Director",
    linkedin: "https://www.linkedin.com/in/john-doe",
  },
  {
    profileUrl: PlaeholderAvatar.src,
    name: "Prashanth",
    role: "Director",
    linkedin: "https://www.linkedin.com/in/jane-doe",
  },
  {
    profileUrl: PlaeholderAvatar.src,
    name: "Rizwan",
    role: "Director",
    linkedin: "https://www.linkedin.com/in/michael-smith",
  },
];

function AboutUs() {
  return (
    <section id="about-us" className="w-full bg-theme-800">
      <div className="w-full max-w-320 m-auto px-4 md:px-5 py-14 md:py-20 xl:py-28 relative z-10">
        <div className="lg:flex relative mb-8">
          <div className="max-lg:relative lg:flex-1">
            <h2 className="uppercase mb-[.5em] h6">About Us</h2>
            <h3 className="h2 mb-6">
              Wayfarer is leading the Charge Towards <br />
              <span className="text-theme-text-700">Sustainable Logistics</span>
            </h3>
            <p className="font-sans text-lg mb-[1.333em]">
              Greening India&apos;s Future with Wayfarer Logistics World trade
              propels global prosperity, yet it&apos;s time we reshape how
              it&apos;s done — trading on nature&apos;s terms. As one of the
              world&apos;s foremost transport and logistics companies, we bear a
              profound responsibility for India&apos;s green transition.
            </p>
            <p className="font-sans text-lg">
              At Wayfarer Logistics, we&apos;re already reducing CO2 emissions
              with our core services: consolidation, mode shift, and load
              optimisation. However, safeguarding our climate demands more.
              Enter Green Logistics—an array of solutions from CO2 reporting to
              supply chain optimisation, sustainable warehousing, eco-friendly
              fuels, and carbon offsetting. Each solution meticulously crafted
              to shrink your supply chain&apos;s carbon footprint.Join forces
              with our team of experts to collaboratively design, implement, and
              personalise sustainable solutions tailored for your business and
              the environment. Let&apos;s pave the way for a greener, more
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
        <div>
          <h3 className="mb-[.8em]">Introducing our team</h3>
          <div className="flex gap-x-8 overflow-hidden">
            <Swiper
              spaceBetween={24}
              slidesPerView={2}
              loop={true}
              pagination={{ clickable: true }}
              modules={[Navigation]}
              navigation={{
                nextEl: ".next-btn",
                prevEl: ".prev-btn",
              }}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 24,
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
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex justify-between mt-12">
            <div></div>
            <div className="flex gap-[15px]">
              <Image
                className="prev-btn"
                src={PreviousBtn}
                alt={"Prev Button"}
              />
              <Image className="next-btn" src={NextBtn} alt={"Next Button"} />
            </div>
          </div>
        </div>
      </div>
      {/* <Image src={MapBg} alt={""} className="absolute bottom-0 w-full z-0" /> */}
    </section>
  );
}

export default AboutUs;
