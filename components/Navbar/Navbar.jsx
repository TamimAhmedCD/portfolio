"use client";
import { BackgroundBeams } from "../ui/background-beams";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/MoodToggle/MoodToggle";
import { GoDownload } from "react-icons/go";
import { CgMenuRightAlt } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { useRef } from "react";
import { ShinyButton } from "../magicui/shiny-button";

const Navbar = () => {
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  return (
    <>
      <div>
        <BackgroundBeams className="-z-50"></BackgroundBeams>
      </div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        {/* Logo */}
        <div>
          <a href="#home" className="text-2xl font-medium">
            Tamim
          </a>
        </div>
        {/* Nav list */}
        <ul className="hidden lg:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm  bg-opacity-50 dark:bg-opacity-[1.5%] backdrop-blur-xl">
          <li>
            <a
              href="#home"
              className="font-Ovo dark:text-neutral-300 font-normal"
            >
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo dark:text-neutral-300">
              About me
            </a>
          </li>
          <li>
            <a href="#services" className="font-Ovo dark:text-neutral-300">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-Ovo dark:text-neutral-300">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo dark:text-neutral-300 ">
              Contact me
            </a>
          </li>
        </ul>
        <div className="flex gap-3 items-center">
          <ModeToggle></ModeToggle>
          <a href="#contact" className="font-Ovo hidden md:block">
            <ShinyButton>
              <span className="flex items-center gap-2">My Resume <GoDownload /></span>
            </ShinyButton>
          </a>

          <button className="block lg:hidden" onClick={openMenu}>
            <CgMenuRightAlt className="text-3xl" />
          </button>
        </div>
        {/* mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex lg:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-100 dark:bg-neutral-950 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <CgClose className="text-3xl" />
          </div>
          <li>
            <a onClick={closeMenu} href="#home" className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#about" className="font-Ovo">
              About me
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#services" className="font-Ovo">
              Services
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#work" className="font-Ovo">
              My Work
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#contact" className="font-Ovo">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
