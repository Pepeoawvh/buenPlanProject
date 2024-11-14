"use client";
import { useEffect, useRef, useState } from "react";
import { questrial } from "../../ui/fonts.js";
import "../styles/NavBar.css";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={`blur-background ${isOpen && "open"}`} />
      <nav
        ref={navRef}
        className="grid h-auto grid-cols-3 items-center py-2 justify-items-center shadow-md"
      >
        <Link href="/">
          <div className="select-none w-full h-full pl-5">
            <Image width={500} height={500} alt="Logo" src="/img/buenplan3.svg" className="w-auto h-auto" />
          </div>
        </Link>
        <div>
          <h1 className={`${questrial.className} text-[#2694e7] text-xl`}></h1>
        </div>
        <ul
          className={`grid ${
            questrial.className
          } pr-6 sm:h-full bg-[#e9faff] text-xl sm:grid-cols-3 sm:pr-8 navItem ${
            isOpen && "open"
          } sm:mt-0 pt-12`}
        >
          <div className="grid grid-cols-1 justify-items-center items-center">
            <div className="select-none pl-5">
              <Image width={150} height={150} alt="Logo" src="/img/buenplan3.svg" className="w-auto h-auto" />
            </div>
          </div>
          <Link
            className="grid hover:bg-[#ffeae1] bg-white md:bg-slate-50 md:hover:bg-[#fff7f4] sm:border-x-0 items-center justify-items-center sm:w-full sm:h-full h-fit px-4 rounded-3xl duration-300 sm:rounded-none w-full select-none"
            href="/"
            onClick={handleLinkClick}
          >
            <li className="">Inicio</li>
          </Link>
          <Link
            className="grid w-full hover:bg-[#ffeae1] bg-white md:bg-slate-50 md:hover:bg-[#fff7f4] sm:border-x items-center justify-items-center sm:w-full sm:h-full h-fit px-8 rounded-3xl duration-300 sm:rounded-none select-none"
            href="#about"
            onClick={handleLinkClick}
          >
            <li className="">Quienes somos</li>
          </Link>
          <Link
            className="grid hover:bg-[#ffeae1] bg-white md:bg-slate-50 md:hover:bg-[#fff7f4] sm:border-x-0 items-center justify-items-center sm:w-full sm:h-full h-fit px-8 rounded-3xl duration-300 sm:rounded-none w-full select-none"
            href="#contact"
            onClick={handleLinkClick}
          >
            <li className="">Solicitar Informacion</li>
          </Link>
        </ul>
        <div
          className={`navToggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
};

export default NavBar;