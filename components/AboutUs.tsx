import React from "react";
import Image from "next/image";
import AboutUsBg from "../public/about-us-bg.png"

function AboutUs() {
  return (
    <section className="w-full bg-theme-800">
      <div className="w-full max-w-320 m-auto py-[120px]">
        <div className="flex flex-col">
          <div className="flex gap-x-10">
            <div className="flex flex-col max-w-[539px]">
              <h1 className="uppercase">About Us</h1>
              <h6 className="mt-4 text-gray-800 text-5xl font-medium leading-[64px]">
                Wayfarer is leading the Charge Towards <br />
                <span className="text-[#4B8200]">Sustainable Logistics</span>
              </h6>
              <p className="font-sans text-[18px] mt-6">
                Greening India's Future with Wayfarer LogisticsWorld trade
                propels global prosperity, yet it's time we reshape how it's
                done — trading on nature's terms. As one of the world's foremost
                transport and logistics companies, we bear a profound
                responsibility for India's green transition. At Wayfarer
                Logistics, we're already reducing CO2 emissions with our core
                services: consolidation, mode shift, and load optimisation.
                However, safeguarding our climate demands more. Enter Green
                Logistics—an array of solutions from CO2 reporting to supply
                chain optimisation, sustainable warehousing, eco-friendly fuels,
                and carbon offsetting. Each solution meticulously crafted to
                shrink your supply chain's carbon footprint.Join forces with our
                team of experts to collaboratively design, implement, and
                personalise sustainable solutions tailored for your business and
                the environment. Let's pave the way for a greener, more
                sustainable India together.
              </p>
            </div>
            <Image src={AboutUsBg} alt={""} width={613} height={573.965}/>
          </div>
          <div className="mt-2">
            <h2 className="font-sans text-4xl text-gray-800 leading-[44px]">Introducing our team</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
