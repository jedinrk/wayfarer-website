import React from "react";
import Image from "next/image";
import AboutUsBg from "../public/about-us-bg.png";
import Members from "./Members";

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
      <div className="w-full max-w-320 m-auto py-[120px]">
        <div className="flex flex-col">
          <div className="flex gap-x-10">
            <div className="flex flex-col max-w-[539px]">
              <h1 className="uppercase h6">About Us</h1>
              <h6 className="mt-4 text-gray-800 text-5xl font-medium leading-[64px]">
                Wayfarer is leading the Charge Towards <br />
                <span className="text-[#4B8200]">Sustainable Logistics</span>
              </h6>
              <p className="font-sans text-[18px] mt-6">
                Greening India's Future with Wayfarer LogisticsWorld trade
                propels global prosperity, yet it's time we reshape how it's
                done — trading on nature's terms. As one of the world's foremost
                transport and logistics companies, we bear a profound
                responsibility for India's green transition. At Wayfarer
                Logistics, we're already reducing CO2 emissions with our core
                services: consolidation, mode shift, and load optimisation.
                However, safeguarding our climate demands more. Enter Green
                Logistics—an array of solutions from CO2 reporting to supply
                chain optimisation, sustainable warehousing, eco-friendly fuels,
                and carbon offsetting. Each solution meticulously crafted to
                shrink your supply chain's carbon footprint.Join forces with our
                team of experts to collaboratively design, implement, and
                personalise sustainable solutions tailored for your business and
                the environment. Let's pave the way for a greener, more
                sustainable India together.
              </p>
            </div>
            <Image src={AboutUsBg} alt={""} width={613} height={573.965} />
          </div>
          <div className="mt-2">
            <h2 className="font-sans text-4xl text-gray-800 leading-[44px]">
              Introducing our team
            </h2>
            <div className="flex mt-14 gap-x-8 overflow-hidden">
              {members.map((member, index) => (
                <Members
                  key={index}
                  profileUrl={member.profileUrl}
                  name={member.name}
                  role={member.role}
                  linkedin={member.linkedin}
                  twitter={member.twitter}
                  dribble={member.dribble}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
