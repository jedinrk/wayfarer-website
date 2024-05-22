import Button from "@/components/Button";
import React from "react";


function Banner() {
  return (
    <div className="w-full h-[676px] pl-[125px] pt-[175px] bg-transparent">
      <h6 className="w-[579px] text-gray-800 text-base font-semibold font-['Montserrat'] tracking-wide">
        TRANSPORTATION SOLUTIONS
      </h6>
      <div className="w-[579px]">
        <h1 className="text-gray-800 text-[76px] font-semibold font-['Figtree'] leading-[80px]">
          Sustainable logistics for a{" "}
        </h1>
        <h2 className="text-lime-700 text-[76px] font-semibold font-['Figtree'] leading-[80px]">
          greener future
        </h2>
        <div className="mt-[32px]">
          <Button
            type={"submit"}
            title={"Let's Talk"}
            variant={"bg-lime-700 text-white"}
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
