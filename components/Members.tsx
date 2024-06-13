"use client";

import React from "react";
import Image from "next/image";
import LinkedinIcon from "../public/linkedin-member.svg";
import XIcon from "../public/x-member.svg";
import DribbleIcon from "../public/Dribble.svg";

interface MemberProps {
  profileUrl: string;
  name: string;
  role: string;
  linkedin?: string; // Optional property
  twitter?: string; // Optional property
  dribble?: string; // Optional property
}

function Members({
  profileUrl,
  name,
  role,
  linkedin,
  twitter,
  dribble,
}: MemberProps) {
  const handleClick = (socialMedia: string) => {
    switch (socialMedia) {
      case "linkedin":
        window.location.href = linkedin ? linkedin : "";
        break;
      case "twitter":
        window.location.href = twitter ? twitter : "";
        break;
      case "dribble":
        window.location.href = dribble ? dribble : "";
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col min-w-[320px] min-h-[249px]">
      <Image src={profileUrl} alt={""} width={120} height={120} />
      <div className="mt-6 text-gray-800 text-xl font-semibold">{name}</div>
      <div className="mb-6 text-gray-800 text-lg font-normal">{role}</div>
      <div className="flex">
        {linkedin && (
          <Image
            src={LinkedinIcon}
            alt={"LinkedinIcon"}
            onClick={() => handleClick("linkedin")}
          />
        )}
        {twitter && (
          <Image
            src={XIcon}
            alt={"XIcon"}
            onClick={() => handleClick("twitter")}
          />
        )}
        {dribble && (
          <Image
            src={DribbleIcon}
            alt={"DribbleIcon"}
            onClick={() => handleClick("dribble")}
          />
        )}
      </div>
    </div>
  );
}

export default Members;
