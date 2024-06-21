import Image from "next/image";
import React from "react";
import ArrowRight from "../public/arrow-right.svg";
import GreenArrowRight from "../public/gg_arrow-right.svg";

type ButtonProps = {
  title: string;
  icon?: boolean;
  variant?: string;
};

const Button = ({ title, icon, variant }: ButtonProps) => {
  return (
    <a href="#contact-us"
      className={`button ${variant && variant}
        ${icon ? "py-[.5em]" : "py-[.375em]"}`}
    >
      {title}
      {icon && <Image
        className="default-icon"
        src={ArrowRight}
        alt="ArrowRight"
        width="28"
        height="28"
      />}
      {/* {icon && <Image
        className="hover-icon"
        src={GreenArrowRight}
        alt="ArrowRight"
        width="28"
        height="28"
      />} */}
    </a>
  );
};

export default Button;
