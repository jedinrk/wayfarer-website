import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import BgPattern from "../public/Layer_1.png";
import { motion, useInView } from "motion/react";

function Mission() {
  const [expanded, setExpanded] = useState(false);
  const headerRef = useRef(null);
  const paragraphRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const paragraphInView = useInView(paragraphRef, { once: true });

  return (
    <section
      id="mission"
      className="w-full bg-theme-900 relative overflow-hidden"
    >
      <div className="w-full max-w-320 m-auto relative z-10">
        <div className="flex flex-col gap-3 md:flex-row md:gap-8 lg:gap-40 px-4 md:px-5 py-14 md:py-20 xl:py-28 max-w-320">
          <motion.h2
            ref={headerRef}
            initial={{ opacity: 0, y: -20 }}
            animate={
              headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
            }
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="opacity-70 text-white uppercase whitespace-nowrap h6 md:pt-[.6em]"
          >
            Our Mission
          </motion.h2>
          <motion.p
            ref={paragraphRef}
            initial={{ opacity: 0, y: 20 }}
            animate={
              paragraphInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-white text-[1.25rem] md:text-2xl font-normal leading-[1.66]"
          >
            We&apos;re on a mission to revolutionise container logistics through
            sustainable practices that prioritise green energy, power
            efficiency, and minimal environmental impact.&nbsp;
            {!expanded ? (
              <button
                className="text-[18px] text-lime-300 font-semibold leading-loose"
                onClick={() => setExpanded(true)}
              >
                Know More...
              </button>
            ) : (
              <span
                className={`text-white text-[1.25rem] md:text-2xl font-normal leading-[1.66] ${
                  expanded
                    ? "max-h-full transition duration-500 ease-in-out"
                    : "max-h-0 transition duration-300 ease-in-out overflow-hidden"
                }`}
              >
                By integrating renewable energy sources and cutting-edge
                technology into our operations, we are reducing our carbon
                footprint and promoting a cleaner, healthier planet. Our
                commitment to power efficiency means that we continuously seek
                out and implement innovative solutions that conserve energy and
                resources, ensuring that our logistics processes are as
                eco-friendly as possible. Through these efforts, we aim to set
                new industry standards for environmental responsibility,
                demonstrating that it is possible to achieve both operational
                excellence and sustainability. Join us in our journey towards a
                greener future, where efficient logistics and environmental
                stewardship go hand in hand.
              </span>
            )}
          </motion.p>
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
          objectFit: "cover",
          top: "30%",
          mixBlendMode: "plus-lighter",
        }}
      />
    </section>
  );
}

export default Mission;
