import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import BannerImage from "../public/banner-image.webp";
import BannerRightBg from "../public/banner-right-bg.png";
import Link from "next/link";
import { motion } from "motion/react";
import { delay } from "motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.3,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
function Banner() {
  return (
    <section className="w-full md:h-[50vw] lg:h-[49vw] xl:h-[49vw] xl:max-h-[55rem] pt-[90px] pb-[74.66vw] lg:pt-[122px] md:pb-0 bg-gradient-to-r from-theme-200 to-theme-1100 relative">
      <div className="relative z-10 w-full max-w-320 md:h-full pt-5 pb-8 px-4 md:px-5 md:pt-0 md:pb-8 m-auto flex banner-inner">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ delay: 0.5 }}
          className="flex flex-col justify-center"
        >
          <motion.span variants={itemVariants} className="block">
            TRANSPORTATION SOLUTIONS
          </motion.span>
          <motion.h1 className="mb-[.44em] w-[33rem]">
            <motion.span variants={itemVariants} className="block">
              Sustainable
            </motion.span>
            <motion.span variants={itemVariants} className="block">
              logistics for a
            </motion.span>
            <motion.span
              variants={itemVariants}
              className="block text-theme-text-700"
            >
              greener future
            </motion.span>
          </motion.h1>
          <motion.div variants={itemVariants}>
            <Button title="Let's Talk" icon />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={BannerImage}
          alt=""
          className="absolute bottom-0 object-contain md:right-0 md:h-full md:w-[69vw] lg:w-[66vw] xl:w-[69vw] xl:max-h-[55rem]"
        />
      </motion.div>
    </section>
  );
}

export default Banner;
