import Button from "@/components/Button";
import React from "react";


function Banner() {
  return (
    <section className="w-full h-[676px] pl-[125px] pt-[175px] bg-lime-200">
      <h1 className="w-[579px] text-gray-800 text-base font-semibold font-['Montserrat'] tracking-wide">
        TRANSPORTATION SOLUTIONS
      </h1>
      <div className="w-[579px]">
        <h2 className="text-gray-800 text-[76px] font-semibold font-['Figtree'] leading-[80px]">
          Sustainable logistics for a{" "}
        </h2>
        <h3 className="text-lime-700 text-[76px] font-semibold font-['Figtree'] leading-[80px]">
          greener future
        </h3>
        <div className="mt-[32px]">
          <Button
            type={"submit"}
            title={"Let's Talk"}
            variant={"bg-lime-700 text-white"}
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
