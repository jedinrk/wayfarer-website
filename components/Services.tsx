import React from "react";
import Image, { StaticImageData } from "next/image";
import ContainerTransport from "../public/container-transport.jpg";
import RefrigatedContainer from "../public/refrigated-container-transport.jpg";
import HeavyMachinery from "../public/heavy-machinery.jpg";
import ContainerSale from "../public/container-sale.jpg";
import BulkCargo from "../public/bulk-cargo.jpg";
import ProjectCargo from "../public/project-cargo.jpg";
import GreenArrowRight from "../public/gg_arrow-right.svg";

function renderRow() {}

function Services() {
  return (
    <section id="services" className="bg-theme-1000">
      <div className="w-full max-w-320 m-auto px-4 md:px-5 py-14 md:py-20 xl:py-28 flex flex-col">
        <div>
          <h2 className="uppercase mb-[.5em] text-theme-text-700 h6">
            services
          </h2>
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <h3 className="h2 mb-3 lg:mb-0">
              Green, efficient &<br /> reliable logistics
            </h3>
            <p className="max-w-[565px]">
              At Wayfarer Logistics, our unwavering commitment to sustainability
              and operational excellence sets us apart in the logistics
              industry. We prioritize eco-friendly practices, utilizing advanced
              technology to minimize our environmental impact while maximizing
              efficiency. Our team of experts ensures that every aspect of our
              service is executed with precision and care, guaranteeing that
              your cargo arrives safely and on time. Whether you&apos;re moving
              temperature-sensitive goods or heavy machinery, our innovative
              approach and dedication to reliability make us the preferred
              choice for businesses seeking top-tier logistics solutions. Trust
              Wayfarer Logistics to deliver not just your cargo, but also peace
              of mind.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full py-[56px] gap-y-8">
          <div
            id="rowOne"
            className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 md:gap-x-8"
          >
            <div className="relative w-full md:w-[478px] h-[261px] bg-cover bg-no-repeat bg-center rounded-3xl hover:shadow-3xl overflow-hidden hover:shadow-theme-1200">
              <Image
                src={ContainerTransport}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-auto bottom-0 ml-6 mb-6 px-4 py-3 rounded-2xl bg-zinc-950 bg-opacity-70 text-white text-1xl font-semibold">
                Container Transporting
              </div>
            </div>
            <div className="relative w-full md:w-[682px] h-[261px] bg-cover bg-no-repeat bg-center rounded-3xl hover:shadow-3xl overflow-hidden hover:shadow-theme-1200">
              <Image
                src={RefrigatedContainer}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-auto bottom-0 ml-6 mb-6 px-4 py-3 rounded-2xl bg-zinc-950 bg-opacity-70 text-white text-1xl font-semibold">
                Refrigerated container Transportation
              </div>
            </div>
          </div>
          <div
            id="rowTwo"
            className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 md:gap-x-8"
          >
            <div className="relative w-full md:w-[762px] h-[261px] bg-cover bg-no-repeat bg-center rounded-3xl hover:shadow-3xl overflow-hidden hover:shadow-theme-1200">
              <Image
                src={HeavyMachinery}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-auto bottom-0 ml-6 mb-6 px-4 py-3 rounded-2xl bg-zinc-950 bg-opacity-70 text-white text-1xl font-semibold">
                Heavy Machinery & Equipment Transportation
              </div>
            </div>
            <div className="relative w-full md:w-[398px] h-[261px] bg-cover bg-no-repeat bg-center rounded-3xl hover:shadow-3xl overflow-hidden hover:shadow-theme-1200">
              <Image
                src={ContainerSale}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-auto bottom-0 ml-6 mb-6 px-4 py-3 rounded-2xl bg-zinc-950 bg-opacity-70 text-white text-1xl font-semibold">
                Container Sale
              </div>
            </div>
          </div>
          <div
            id="rowThree"
            className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 md:gap-x-8"
          >
            <div className="relative w-full md:w-[580px] h-[261px] bg-cover bg-no-repeat bg-center rounded-3xl hover:shadow-3xl overflow-hidden hover:shadow-theme-1200">
              <Image
                src={BulkCargo}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-auto bottom-0 ml-6 mb-6 px-4 py-3 rounded-2xl bg-zinc-950 bg-opacity-70 text-white text-1xl font-semibold">
                Bulk cargo movement
              </div>
            </div>
            <div className="relative w-full md:w-[580px] h-[261px] bg-cover bg-no-repeat bg-center rounded-3xl hover:shadow-3xl overflow-hidden hover:shadow-theme-1200">
              <Image
                src={ProjectCargo}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-auto bottom-0 ml-6 mb-6 px-4 py-3 rounded-2xl bg-zinc-950 bg-opacity-70 text-white text-1xl font-semibold">
                Project cargo Transportation
              </div>
            </div>
          </div>
        </div>

        <button className="text-lime-700 bg-white font-semibold self-center w-fit px-8 py-2 rounded-[44px] border border-lime-700 flex justify-center items-center gap-2">
          Let’s Talk
          <div className="w-8 h-8 relative">
            <Image src={GreenArrowRight} alt={"Green Arrow Right"} />
          </div>
        </button>
      </div>
    </section>
  );
}

export default Services;
