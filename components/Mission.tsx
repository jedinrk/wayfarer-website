import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";

function Mission() {
  const headerRef = useRef(null);
  const paragraphRef = useRef(null);
  
  const headerInView = useInView(headerRef, {
    once: true,
    margin: "-200px 0px",
  });
  
  const paragraphInView = useInView(paragraphRef, {
    once: true,
    margin: "-200px 0px",
  });

  return (
    <section
      id="mission"
      className="w-full bg-theme-900/30 relative overflow-hidden min-h-[80vh]"
    >
      {/* Two-panel layout */}
      <div className="w-full max-w-320 m-auto relative z-10 flex flex-col md:flex-row min-h-[80vh]">
        {/* Left Panel (60%) - Image with tagline overlay */}
        <div className="w-full md:w-[60%] relative min-h-[50vh] md:min-h-[80vh] flex items-center">
          <div className="absolute inset-0 z-10"></div>
          
          {/* Tagline */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-20 px-6 flex flex-col"
          >
            <h1 className="mb-[.44em]">
              <span className="block text-green-500">
                Delivering Dreams,
              </span>
              <span className="block text-white">
                Beyond Destinations!
              </span>
            </h1>
          </motion.div>
        </div>
        
        {/* Right Panel (40%) - Mission text in scrollable card */}
        <div className="w-full md:w-[40%] p-6 md:p-0 flex items-center">
          <div className=" rounded-lg p-8 md:p-12 max-h-[70vh] overflow-y-auto">
            <motion.h2
              ref={headerRef}
              initial={{ opacity: 0, y: -20 }}
              animate={
                headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
              }
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="uppercase mb-[.5em] text-theme-400 h6"
            >
              Our Mission
            </motion.h2>
            
            <motion.div
              ref={paragraphRef}
              initial={{ opacity: 0, y: 20 }}
              animate={
                paragraphInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="max-w-[565px]"
            >
              <p className="text-white">
                We&apos;re on a mission to <strong>revolutionise container logistics</strong> through
                <strong> sustainable practices</strong> that prioritise <strong>green energy</strong>, <strong>power
                efficiency</strong>, and <strong>minimal environmental impact</strong>.
              </p>
              <p className="text-white mt-4">
                By integrating <strong>renewable energy sources</strong> and <strong>cutting-edge
                technology</strong> into our operations, we are reducing our carbon
                footprint and promoting a cleaner, healthier planet. Our
                commitment to power efficiency means that we continuously seek
                out and implement <strong>innovative solutions</strong> that conserve energy and
                resources, ensuring that our logistics processes are as
                eco-friendly as possible.
              </p>
              <p className="text-white mt-4">
                Through these efforts, we aim to set
                new industry standards for <strong>environmental responsibility</strong>,
                demonstrating that it is possible to achieve both <strong>operational
                excellence</strong> and <strong>sustainability</strong>. Join us in our journey towards a
                greener future, where efficient logistics and environmental
                stewardship go hand in hand.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Background Image - keeping the current image as specified */}
      <Image
        alt=""
        src="/map-global-bg.png"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          top: "0",
          mixBlendMode: "plus-lighter",
          filter: "hue-rotate(60deg)", // Adding green tint as specified
        }}
      />
    </section>
  );
}

export default Mission;
