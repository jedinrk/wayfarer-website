import Button from "@/components/Button";
import React from "react";


function Banner() {
  return (
    <section className="w-full h-svh bg-theme-200">
      <div className="w-full max-w-320 h-full p-4 md:p-5 m-auto flex">
        <div className="flex flex-col justify-center">
          <span className="block">TRANSPORTATION SOLUTIONS</span>
          <h1 className="text-6xl">
            Sustainable logistics for a
            <span className="block text-theme-text-700">greener future</span>
          </h1>
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
