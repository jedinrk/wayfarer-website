import Image from 'next/image';
import Logo from '../public/home_logo_large.svg'
import Facebook from '../public/facebook.svg'
import Instagram from '../public/instagram.svg'
import X from '../public/x.svg'
import Linkedin from '../public/linkedIn.svg'
import Youtube from '../public/youtube.svg'

function Footer() {
  return (
    <footer className="w-full bg-white flex flex-col items-center py-8">
      <div className="w-full h-px bg-stone-200" />

      <div className="w-full flex justify-between items-center px-8 my-6">
        {/* Logo Section */}
        <div className="flex flex-col gap-6">
          <div className="relative w-[292px] h-[51px]">
            <Image
              src={Logo} 
              alt="Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-12">
          <a
            href="#mission"
            className="text-gray-800 text-sm font-bold uppercase tracking-tight"
          >
            Mission
          </a>
          <a
            href="#services"
            className="text-gray-800 text-sm font-bold uppercase tracking-tight"
          >
            Services
          </a>
          <a
            href="#about-us"
            className="text-gray-800 text-sm font-bold uppercase tracking-tight"
          >
            About Us
          </a>
          <a
            href="#contact-us"
            className="text-gray-800 text-sm font-bold uppercase tracking-tight"
          >
            Contact Us
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex gap-3">
          <a href="https://facebook.com" className="w-6 h-6 relative">
            <Image
              src={Facebook}
              alt="Facebook"
              layout="fill"
              objectFit="contain"
            />
          </a>
          <a href="https://twitter.com" className="w-6 h-6 relative">
            <Image
              src={X}
              alt="X"
              layout="fill"
              objectFit="contain"
            />
          </a>
          <a href="https://instagram.com" className="w-6 h-6 relative">
            <Image
              src={Instagram}
              alt="Instagram"
              layout="fill"
              objectFit="contain"
            />
          </a>
          <a href="https://linkedin.com" className="w-6 h-6 relative">
            <Image
              src={Linkedin}
              alt="LinkedIn"
              layout="fill"
              objectFit="contain"
            />
          </a>
          <a href="https://youtube.com" className="w-6 h-6 relative">
            <Image
              src={Youtube}
              alt="YouTube"
              layout="fill"
              objectFit="contain"
            />
          </a>
        </div>
      </div>

      <div className="w-full h-px bg-stone-200" />

      <div className="w-full flex items-center py-4">
        <div className="text-slate-500 text-sm font-normal">
          2024 Wayfarer. All rights reserved.
        </div>
        <div className="flex gap-3 mt-2">
          <a
            href="/privacy-policy"
            className="text-slate-500 text-sm underline"
          >
            Privacy Policy
          </a>
          <span className="text-slate-500 text-2xl">•</span>
          <a
            href="/terms-of-service"
            className="text-slate-500 text-sm underline"
          >
            Terms of Service
          </a>
          <span className="text-slate-500 text-2xl">•</span>
          <a
            href="/cookies-settings"
            className="text-slate-500 text-sm underline"
          >
            Cookies Settings
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
