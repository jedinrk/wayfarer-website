import React from "react";
import Rating from "./Rating";
import Image from "next/image";
import { Mate } from "next/font/google";

export type Testimony = {
  id: number;
  name: string;
  description: string;
  profilePic: string;
  company: string;
  logo: string;
  content: string;
  rating: number;
};
export const mate = Mate({
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
});
const Testimonial: React.FC<{ testimony: Testimony }> = ({ testimony }) => {
  // Destructure props for easier access
  const { name, description, profilePic, company, logo, content, rating } =
    testimony;

  return (
    <div className="testimonial" id={`${testimony.id} testimony`}>
      <Rating rating={rating} />
      <p
        className={`text-gray-800 text-[1.125rem] lg:text-xl py-[1.5em] ${mate.className} italic`}
      >
        &quot;{content}&quot;
      </p>
      <div className="flex items-center">
        <div className="flex items-center border-r border-gray-900 pr-3 md:pr-5 gap-3 md:gap-5">
          {profilePic && (
            <Image
              src={profilePic}
              alt={`${name}'s profile picture`}
              width={56}
              height={56}
              className="h-14 hover:border-4 border-theme-400 rounded-full duration-300"
            />
          )}
          <div>
            <h5 className="text-lg font-bold leading-[1.3]">{name}</h5>
            <h6 className={`${mate.className}`}>{description}</h6>
          </div>
        </div>
        <div className="pl-5">
          {logo && (
            <Image src={logo} alt={`${company} logo`} width={152} height={36} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
