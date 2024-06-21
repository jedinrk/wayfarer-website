"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import HomeLogoLarge from "../public/home_logo_large.svg";
import HomeLogoSmall from "../public/home_logo_small.svg";
import MenuIcon from "../public/menu-icon.svg";
import CloseIcon from "../public/ic_close.svg";
import { useEffect, useState } from "react";
import Button from "./Button";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function handleMenuClick(event: any): void {
    setMenuOpen(true);
  }

  function handleMenuClose(event: any): void {
    setMenuOpen(false);
  }

  return (
    <div className="absolute z-30 w-full px-12 py-8">
      <nav className="flex justify-between items-center w-full m-auto">
        {/* Logo */}
        <Link href="/" className="hidden md:block md:w-[334px] md:h-[58px]">
          <Image
            src={HomeLogoLarge}
            alt="logo"
            className="w-full h-full object-contain"
          />
        </Link>
        <Link href="/" className="md:hidden">
          <Image
            src={HomeLogoSmall}
            alt="logo"
            className="w-full h-full object-contain"
          />
        </Link>

        <div className="flex-1 flex-grow flex justify-end lg:justify-between items-center">
          {/* Menu Items */}
          <ul className="lg:flex hidden flex-1 align-middle justify-between max-w-[34rem] ml-16 mr-8 2xl:m-0 2xl:max-w-[unset] 2xl:gap-12 2xl:justify-center">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key}>
                {link.label}
              </Link>
            ))}
          </ul>

          {/* Let's talk Button */}
          <div className="hidden lg:block cursor-pointer">
            <Link href={"#contact-us"}>
              <Button title={"Let's Talk"} variant={""} />
            </Link>
          </div>
        </div>
        <button className="lg:hidden" onClick={handleMenuClick}>
          <Image src={MenuIcon} alt="MenuIcon" width={32} height={32} />
        </button>
        <div
          className={
            isMenuOpen
              ? "fixed right-0 top-0 w-[65%] sm:hidden h-screen p-10 ease-in duration-300 bg-lime-700/90"
              : "fixed -right-full h-screen sm:hidden top-0 p-10 ease-in duration-500"
          }
        >
          <div className="w-full flex justify-end">
            <button onClick={handleMenuClose}>
              <Image src={CloseIcon} alt={""} width={32} height={32} />
            </button>
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col py-10 gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="text-white/80 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
