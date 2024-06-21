import Image from "next/image";
import React from "react";
import ArrowRight from "../public/arrow-right.svg";

type ButtonProps = {
  title: string;
  icon?: string;
  variant: string;
};

const Button = ({ title, icon, variant }: ButtonProps) => {
  return (
    <div
      className={`w-fit	h-12 px-8 py-2 rounded-[44px] border border-lime-700 justify-center items-center gap-2 inline-flex ${variant}`}
    >
      {icon && <Image src={icon} alt={title} />}
      <label
        className={`${
          variant ? "text-white" : "text-lime-700"
        } text-lg font-semibold  leading-loose tracking-wide`}
      >
        {title}
      </label>

      <Image
        src={ArrowRight}
        alt="ArrowRight"
        width={32}
        height={32}
        className={`${variant ? "visible" : "hidden"}`}
      />
    </div>
  );
};

export default Button;
