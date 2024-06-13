import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import BannerImage from '../public/banner-image.png'

function Banner() {
  return (
    <section className="w-full lg:h-[79.5svh] md:max-h-[50rem] pt-[90px] pb-[74.66vw] md:pb-0 bg-theme-200 relative">
      <div className="w-full max-w-320 md:h-full p-4 md:p-5 md:pb-8 m-auto flex banner-inner">
        <div className="flex flex-col justify-center">
          <span className="block">TRANSPORTATION SOLUTIONS</span>
          <h1 className="mb-[.44em] w-[33rem]">
            Sustainable<br />logistics for a
            <span className="block text-theme-text-700">greener future</span>
          </h1>
          <Button
            type={"submit"}
            title={"Let's Talk"}
            variant={"bg-lime-700 text-white"}
          />
        </div>
      </div>
      <Image src={BannerImage} alt="" className="absolute bottom-0 object-contain md:right-0 md:h-full md:w-[69%]" />
    </section>
  );
}

export default Banner;
