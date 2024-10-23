"use client";
import { useEffect, useRef, useState } from "react";
import "../styles/NavBar.css";
import { questrial } from "../../ui/fonts.js";
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
        className="grid h-auto grid-cols-3 items-center py-2 justify-items-center"
      >
        <Link href="/">
          <div className="select-none pl-5">
            <Image width={95} height={80} alt="Logo" src="img/Logo.svg" />
          </div>
        </Link>
        <div>
          <h1 className={`${questrial.className} text-3xl`}>Buen Plan</h1>
        </div>
        <ul
          className={`grid ${
            questrial.className
          } pr-6 sm:h-full bg-[#fff7f4] text-xl sm:grid-cols-3 sm:pr-8 navItem ${
            isOpen && "open"
          } sm:mt-0 pt-12`}
        >
          <div className="grid grid-cols-2 justify-items-center items-center">
            <div className="select-none pl-5">
              <Image width={95} height={80} alt="Logo" src="img/Logo.svg" />
            </div>
            <div className="p-4 text-4xl">Buen Plan</div>
          </div>
          <Link
            className="grid hover:bg-white bg-[#fac7b3] md:bg-slate-50 md:hover:bg-[#fff7f4] sm:border-x-0 items-center justify-items-center sm:w-full sm:h-full h-fit px-4 rounded-3xl duration-300 sm:rounded-none w-full select-none"
            href="/"
            onClick={handleLinkClick}
          >
            <li className="">Inicio</li>
          </Link>
          <Link
            className="grid w-full hover:bg-white bg-[#fac7b3] md:bg-slate-50 md:hover:bg-[#fff7f4] sm:border-x items-center justify-items-center sm:w-full sm:h-full h-fit px-8 rounded-3xl duration-300 sm:rounded-none select-none"
            href="/galeria"
            onClick={handleLinkClick}
          >
            <li className="">Galeria</li>
          </Link>
          <Link
            className="grid hover:bg-white bg-[#fac7b3] md:bg-slate-50 md:hover:bg-[#fff7f4] sm:border-x-0 items-center justify-items-center sm:w-full sm:h-full h-fit px-8 rounded-3xl duration-300 sm:rounded-none w-full select-none"
            href="/quienesomos"
            onClick={handleLinkClick}
          >
            <li className="">Quienes Somos</li>
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
