import React from "react";
import Rating from "./Rating";
import Image from "next/image";

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

const Testimonial: React.FC<{ testimony: Testimony }> = ({ testimony }) => {
  // Destructure props for easier access
  const { name, description, profilePic, company, logo, content, rating } =
    testimony;

  return (
    <div className="testimonial" id={`${testimony.id} testimony`}>
      <Rating rating={rating} />
      <p className="text-gray-800 text-xl py-[32px] font-serif italic">
        &quot;{content}&quot;
      </p>
      <div className="flex items-center">
        <div className="flex border-r pr-20 gap-5">
          {profilePic && (
            <Image
              src={profilePic}
              alt={`${name}'s profile picture`}
              width={56}
              height={56}
            />
          )}
          <div className="flex flex-col">
            <h5>{name}</h5>
            <h6>{description}</h6>
          </div>
        </div>
        <div className="px-[20px]">
          {logo && (
            <Image src={logo} alt={`${company} logo`} width={152} height={36} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
