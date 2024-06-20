"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import HomeLogoLarge from "../public/home_logo_large.svg";
import HomeLogoSmall from "../public/home_logo_small.svg";
import MenuIcon from "../public/menu-icon.svg";
import { useEffect, useState } from "react";
import Button from "./Button";

function useResponsiveImage(largeSrc: any, smallSrc: any, breakpoint = 768) {
  const [src, setSrc] = useState(largeSrc);

  useEffect(() => {
    const updateSrc = () => {
      setSrc(window.innerWidth <= breakpoint ? smallSrc : largeSrc);
    };
    updateSrc();
    window.addEventListener("resize", updateSrc);

    return () => window.removeEventListener("resize", updateSrc);
  }, [largeSrc, smallSrc, breakpoint]);

  return src;
}

function Navbar() {
  const logoSrc = useResponsiveImage(HomeLogoLarge, HomeLogoSmall);

  return (
    <div className="absolute z-10 w-full px-8 py-14">
      <nav className="flex justify-between items-center w-full m-auto">
        {/* Logo */}
        <Link href="/" className="md:w-[334px] md:h-[58px]">
          <Image
            src={logoSrc}
            alt="logo"
            className="w-full h-full object-contain"
          />
        </Link>

        <div className="flex-1 flex-grow flex justify-end lg:justify-between items-center">
          {/* Menu Items */}
          <ul className="lg:flex hidden flex-1 align-middle justify-between max-w-[34rem] ml-16 mr-8 2xl:m-0 2xl:max-w-[unset] 2xl:gap-12 2xl:justify-center">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className=""
              >
                {link.label}
              </Link>
            ))}
          </ul>

          {/* Let's talk Button */}
          <div className="sm:block">
            <Button
              type={"submit"}
              title={"Let's Talk"}
              variant={""} />
          </div>
        </div>
        <button className="lg:hidden p-2 ml-4">
          <Image
            src={MenuIcon}
            alt="MenuIcon"
            width={32}
            height={32}
          />
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
