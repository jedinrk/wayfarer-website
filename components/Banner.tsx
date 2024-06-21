import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import BannerImage from "../public/banner-image.png";
import BannerRightBg from "../public/banner-right-bg.png";
import Link from "next/link";

function Banner() {
  return (
    <section className="w-full md:h-[50vw] lg:h-[49vw] xl:h-[49vw] xl:max-h-[55rem] pt-[90px] pb-[74.66vw] lg:pt-[122px] md:pb-0 bg-gradient-to-r from-theme-200 to-theme-1100 relative">
      <div className="relative z-10 w-full max-w-320 md:h-full pt-5 pb-8 px-4 md:px-5 md:pt-0 md:pb-8 m-auto flex banner-inner">
        <div className="flex flex-col justify-center">
          <span className="block">TRANSPORTATION SOLUTIONS</span>
          <h1 className="mb-[.44em] w-[33rem]">
            Sustainable
            <br />
            logistics for a
            <span className="block text-theme-text-700">greener future</span>
          </h1>
          <Button title="Let's Talk" icon />
        </div>
      </div>
      <Image
        src={BannerImage}
        alt=""
        className="absolute bottom-0 object-contain md:right-0 md:h-full md:w-[69vw] lg:w-[66vw] xl:w-[69vw] xl:max-h-[55rem]"
      />
    </section>
  );
}

export default Banner;
