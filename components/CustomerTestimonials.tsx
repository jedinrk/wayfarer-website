import React from "react";
import Testimonial, { Testimony } from "./Testimonial";

const CustomerTestimonials: React.FC<{
  testimonies: Testimony[];
}> = ({ testimonies }) => {
  return (
    <section className="px-[124px] py-[120px]">
      <div className="w-full max-w-320 m-auto">
        <h1 className="uppercase text-theme-text-700 h6">Customer testimonials</h1>
        <h2 className="text-5xl w-1/2 mt-[24px]">
          Client Stories: <br /> Our Impact in Action
        </h2>
        <div className="mt-[80px] flex justify-between gap-[64px]">
          {testimonies.map((testimony, index) => (
            <Testimonial key={index} testimony={testimony} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
