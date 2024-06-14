import Image from 'next/image'
import BgPattern from '../public/Layer_1.png';

function Mission() {
  return (
    <section className="w-full bg-theme-900 relative overflow-hidden">
      <div className="w-full max-w-320 m-auto relative z-10">
        <div className="flex flex-col gap-3 md:flex-row md:gap-8 lg:gap-40 px-4 md:px-5 py-14 md:py-20 xl:py-28 max-w-300">
          <h2 className="opacity-70 text-white uppercase whitespace-nowrap h6 md:pt-[.6em]">
            Our Mission
          </h2>
          <p className="text-white text-[1.25rem] md:text-2xl leading-[1.66]">
            We&apos;re on a mission to revolutionise container logistics through
            sustainable practices that prioritise green energy, power
            efficiency, and minimal environmental impact.
            <span className="text-xl text-[#ADD356]"> Know More...</span>
          </p>
        </div>
      </div>
      <Image
        alt=""
        src={BgPattern}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
          top: '30%'
        }}
      />
    </section>
  );
}

export default Mission;
