"use client";
import Image from "next/image";
import Logo from "../public/home_logo_large.svg";
import Facebook from "../public/facebook.svg";
import Instagram from "../public/instagram.svg";
import X from "../public/x.svg";
import Linkedin from "../public/linkedIn.svg";
import Youtube from "../public/youtube.svg";
import SmallTruck from "../public/small-truck.png";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

function Footer() {
  const ref = useRef(null);
  const creditRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-200px 0px" });
  const creditInView = useInView(creditRef, { once: true });
  const footerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={footerContainerVariants}
        transition={{ delay: 0.5 }}
        className="w-full max-w-320 m-auto px-4 md:px-5 py-14 flex flex-wrap flex-col border-t border-b border-stone-200 md:flex-row md:items-center md:justify-between relative"
      >
        {/* Logo */}
        <motion.div variants={footerVariants}>
          <Image src={Logo} alt="Logo" className="w-[292px]" />
        </motion.div>
        {/* <Image
          className="absolute top-1/2 left-1/2 transform -translate-y-1/2 md:hidden"
          src={SmallTruck}
          alt=""
          width={150}
          height={150}
        /> */}
        <div className="flex flex-col md:flex-row gap-4 mt-9 lg:mt-0 lg:flex-row md:justify-between md:gap-12 md:max-lg:w-full md:items-center">
          <nav className="flex flex-wrap gap-y-2 md:flex-row md:gap-12 flex-1">
            <motion.a
              variants={footerVariants}
              href="#mission"
              className="text-gray-800 text-sm font-bold uppercase tracking-tight flex-1 max-md:basis-[50%] whitespace-nowrap"
            >
              Mission
            </motion.a>
            <motion.a
              variants={footerVariants}
              href="#services"
              className="text-gray-800 text-sm font-bold uppercase tracking-tight flex-1 max-md:basis-[50%] whitespace-nowrap"
            >
              Services
            </motion.a>
            <motion.a
              variants={footerVariants}
              href="#about-us"
              className="text-gray-800 text-sm font-bold uppercase tracking-tight flex-1 max-md:basis-[50%] whitespace-nowrap"
            >
              About Us
            </motion.a>
            <motion.a
              variants={footerVariants}
              href="#contact-us"
              className="text-gray-800 text-sm font-bold uppercase tracking-tight flex-1 max-md:basis-[50%] whitespace-nowrap"
            >
              Contact Us
            </motion.a>
          </nav>

          {/* Social Media Icons */}
          <div className="flex gap-3">
            <motion.a
              variants={footerVariants}
              href="https://facebook.com"
              className="w-6 h-6 relative"
            >
              <Image
                src={Facebook}
                alt="Facebook"
                layout="fill"
                objectFit="contain"
              />
            </motion.a>
            <motion.a
              variants={footerVariants}
              href="https://twitter.com"
              className="w-6 h-6 relative"
            >
              <Image src={X} alt="X" layout="fill" objectFit="contain" />
            </motion.a>
            <motion.a
              variants={footerVariants}
              href="https://instagram.com"
              className="w-6 h-6 relative"
            >
              <Image
                src={Instagram}
                alt="Instagram"
                layout="fill"
                objectFit="contain"
              />
            </motion.a>
            <motion.a
              variants={footerVariants}
              href="https://linkedin.com"
              className="w-6 h-6 relative"
            >
              <Image
                src={Linkedin}
                alt="LinkedIn"
                layout="fill"
                objectFit="contain"
              />
            </motion.a>
            <motion.a
              variants={footerVariants}
              href="https://youtube.com"
              className="w-6 h-6 relative"
            >
              <Image
                src={Youtube}
                alt="YouTube"
                layout="fill"
                objectFit="contain"
              />
            </motion.a>
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={creditRef}
        initial="hidden"
        animate={creditInView ? "visible" : "hidden"}
        variants={footerVariants}
        transition={{ delay: 0.5 }}
        className="w-full max-w-320 m-auto pt-8 pb-24 flex flex-col justify-start gap-2
        md:flex-row md:items-center md:justify-center md:gap-6"
      >
        <div className="text-slate-500 text-sm font-normal leading-normal opacity-45 mx-4 md:mx-0">
          2024 Wayfarer. All rights reserved.
        </div>
        <div className="flex flex-col gap-2 mx-4 md:mx-0 md:flex-row md:gap-3 md:items-center">
          <a
            href="/privacy-policy"
            className="text-slate-500 text-sm font-normal underline leading-normal opacity-45"
          >
            Privacy Policy
          </a>
          <span className="text-slate-500 text-2xl font-normal leading-normal opacity-45 hidden md:block">
            •
          </span>
          <a
            href="/terms-of-service"
            className="text-slate-500 text-sm font-normal underline leading-normal opacity-45"
          >
            Terms of Service
          </a>
          <span className="text-slate-500 text-2xl font-normal leading-normal opacity-45 hidden md:block">
            •
          </span>
          <a
            href="/cookies-settings"
            className="text-slate-500 text-sm font-normal underline leading-normal opacity-45"
          >
            Cookies Settings
          </a>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
