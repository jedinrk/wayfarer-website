"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
  return (
    <div className="flex flex-col min-w-72">
      <Image src={profileUrl} alt={""} width={120} height={120} className="mb-6" />
      <div className="text-xl font-semibold">{name}</div>
      <p className="font-serif text-lg mb-6">{role}</p>
      <div className="flex gap-3">
        {linkedin && (
          <Link href={linkedin} title="Click to view LinkedIn profile">
            <Image
              src={LinkedinIcon}
              alt=""
            />
          </Link>
        )}
        {twitter && (
          <Link href={twitter} title="Click to view Twitter profile">
            <Image
              src={XIcon}
              alt=""
            />
          </Link>
        )}
        {dribble && (
          <Link href={dribble} title="Click to view DribbleIcon profile">
            <Image
              src={DribbleIcon}
              alt=""
            />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Members;
