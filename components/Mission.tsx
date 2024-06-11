import React from "react";

function Mission() {
  return (
    <section className="w-full bg-gradient-to-b from-lime-900 to-lime-900 flex items-center">
      <div className="flex">
        <h1 className="opacity-70 text-white text-base font-semibold uppercase leading-normal tracking-[2.56px]">
          Our Mission
        </h1>
        <p className="text-white text-2xl font-normal leading-10">
          We're on a mission to revolutionise container logistics through
          sustainable practices that prioritise green energy, power efficiency,
          and minimal environmental impact.
          <span className="ml-4 text-lime-300 text-lg font-semibold leading-loose">Know More...</span>

        </p>
      </div>
    </section>
  );
}

export default Mission;
