"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import LinkedinIcon from "../public/linkedin-member.svg";

interface MemberProps {
  profileUrl: string;
  name: string;
  role: string;
  linkedin?: string;
}

function Members({ profileUrl, name, role, linkedin }: MemberProps) {
  return (
    <div className="flex flex-col min-w-72">
      <Image
        src={profileUrl}
        alt={""}
        width={120}
        height={120}
        className="mb-6 rounded-full"
      />
      <div className="text-xl font-semibold">{name}</div>
      <p className="font-serif text-lg mb-6">{role}</p>
      {linkedin && (
        <Link href={linkedin} title="Click to view LinkedIn profile">
          <Image src={LinkedinIcon} alt="" />
        </Link>
      )}
    </div>
  );
}

export default Members;
