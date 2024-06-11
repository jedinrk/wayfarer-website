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
    <nav className="absolute flex justify-start items-center py-[32px] px-[48px] z-10">
      {/* Logo */}
      <Link href="/" className="w-[334px] h-[58px]">
        <Image
          src={logoSrc}
          alt="logo"
          className="w-full h-full object-contain"
        />
      </Link>

      <div className="flex-1 flex justify-between items-center]">
        {/* Menu Items */}
        <ul className="lg:flex hidden">
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

      <Image
        src={MenuIcon}
        alt="MenuIcon"
        width={32}
        height={32}
        className="lg:hidden"
      />
    </nav>
  );
}

export default Navbar;
