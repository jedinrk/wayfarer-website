import React from "react";
import Image from "next/image";
import ContainerTransport from "../public/container-transport.jpg";
import RefrigatedContainer from "../public/refrigated-container-transport.jpg";
import HeavyMachinery from "../public/heavy-machinery.jpg";
import ContainerSale from "../public/container-sale.jpg";
import BulkCargo from "../public/bulk-cargo.jpg";
import ProjectCargo from "../public/project-cargo.jpg";
import GreenArrowRight from "../public/gg_arrow-right.svg"

function Services() {
  return (
    <section className="bg-theme-1000">
      <div className="w-full max-w-320 m-auto px-4 md:px-5 py-12 md:py-20 xl:py-28 flex flex-col">
        <div>
          <h2 className="uppercase mb-[1em] text-theme-text-700 h6">services</h2>
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <h3 className="h2 mb-3 lg:mb-0">
              Green, efficient &<br /> reliable logistics
            </h3>
            <p className="max-w-[477px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Suspendisse ornare, eros dolor interdum nulla.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full py-[56px] gap-y-8">
          <div id="rowOne" className="flex gap-x-8">
            <div className="relative w-[478px] h-[261px] bg-cover bg-no-repeat bg-center rounded-3xl shadow-md overflow-hidden hover:shadow-stone-600">
              <Image
                src={ContainerTransport}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-auto bottom-0 ml-6 mb-6 px-4 py-3 rounded-2xl bg-zinc-950 bg-opacity-70 text-white text-1xl font-semibold">
                Container Transporting
              </div>
            </div>
            <div className="relative w-[682px] h-[261px] bg-cover bg-no-repeat bg-center rounded-3xl shadow-md overflow-hidden hover:shadow-stone-600">
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
          <div id="rowTwo" className="flex gap-x-8">
            <div className="relative w-[762px] h-[261px] bg-cover bg-no-repeat bg-center rounded-3xl shadow-md overflow-hidden hover:shadow-stone-600">
              <Image
                src={HeavyMachinery}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-auto bottom-0 ml-6 mb-6 px-4 py-3 rounded-2xl bg-zinc-950 bg-opacity-70 text-white text-1xl font-semibold">
                Heavy Machinery & Equipment Transportation
              </div>
            </div>
            <div className="relative w-[398px] h-[261px] bg-cover bg-no-repeat bg-center rounded-3xl shadow-md overflow-hidden hover:shadow-stone-600">
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
          <div id="rowThree" className="flex gap-x-8">
            <div className="relative w-[580px] h-[261px] bg-cover bg-no-repeat bg-center rounded-3xl shadow-md overflow-hidden hover:shadow-stone-600">
              <Image
                src={BulkCargo}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-auto bottom-0 ml-6 mb-6 px-4 py-3 rounded-2xl bg-zinc-950 bg-opacity-70 text-white text-1xl font-semibold">
                Bulk cargo movement
              </div>
            </div>
            <div className="relative w-[580px] h-[261px] bg-cover bg-no-repeat bg-center rounded-3xl shadow-md overflow-hidden hover:shadow-stone-600">
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
        <button className="text-lime-700 font-semibold self-center w-fit px-8 py-2 rounded-[44px] border border-lime-700 flex justify-center items-center gap-2">
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
