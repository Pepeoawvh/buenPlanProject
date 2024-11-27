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
        className="grid h-auto grid-cols-3 grid-rows-1 md:grid-cols-2 items-center py-2 justify-items-center shadow-md"
      >
        <Link href="/" className="w-fit col-span-1 md:col-span-1 md md:justify-self-start md:ml-24">
          <div className="select-none pl-5 ">
            <Image
              width={700}
              height={700}
              alt="Logo"
              src="/img/BPlogo1.svg"
              className="md:w-auto md:h-24 "
            />
          </div>
        </Link>
        <div className="grid grid-cols-3">
          <Link href="#about" className="navButton hidden md:block md:col-span-1" onClick={handleLinkClick}>
            Quienes somos
          </Link>
          <Link href="#contact" className="navButton hidden md:block md:col-span-1" onClick={handleLinkClick}>
            Contáctanos
          </Link>
          <Link href="#faq" className="navButton hidden md:block md:col-span-1" onClick={handleLinkClick}>
            Preguntas frecuentes
          </Link>
        </div>
        <ul
          className={`grid ${questrial.className} pr-6 sm:h-full bg-[#e9faff] text-xl sm:grid-cols-3 sm:pr-8 navItem ${isOpen && "open"} sm:mt-0 pt-12`}
        >
          <div className="grid grid-cols-1 justify-items-center items-center">
            <div className="select-none pl-5">
              <Image
                width={200}
                height={200}
                alt="Logo"
                src="/img/BPlogo1.svg"
                className=" hover:animate"
              />
            </div>
          </div>
          <Link
            className="grid hover:bg-[#004aad] hover:text-white bg-white md:bg-slate-50 md:hover:bg-[#fff7f4] sm:border-x-0 items-center justify-items-center sm:w-full sm:h-full h-fit px-4 rounded-3xl duration-300 sm:rounded-none w-full select-none"
            href="/"
            onClick={handleLinkClick}
          >
            <li className="">Inicio</li>
          </Link>
          <Link
            className="grid w-full hover:bg-[#004aad] hover:text-white bg-white md:bg-slate-50 md:hover:bg-[#fff7f4] sm:border-x items-center justify-items-center sm:w-full sm:h-full h-fit px-8 rounded-3xl duration-300 sm:rounded-none select-none"
            href="#about"
            onClick={handleLinkClick}
          >
            <li className="">Quienes somos</li>
          </Link>
          <Link
            className="grid hover:bg-[#004aad] hover:text-white bg-white md:bg-slate-50 md:hover:bg-[#fff7f4] sm:border-x-0 items-center justify-items-center sm:w-full sm:h-full h-fit px-8 rounded-3xl duration-300 sm:rounded-none w-full select-none"
            href="#contact"
            onClick={handleLinkClick}
          >
            <li className="">Contáctanos</li>
          </Link>
          <Link
            className="grid hover:bg-[#004aad] hover:text-white bg-white md:bg-slate-50 md:hover:bg-[#fff7f4] sm:border-x-0 items-center justify-items-center sm:w-full sm:h-full h-fit px-8 rounded-3xl duration-300 sm:rounded-none w-full select-none"
            href="#faq"
            onClick={handleLinkClick}
          >
            <li className="">Preguntas frecuentes</li>
          </Link>
        </ul>
        <div
          className={`navToggle ${isOpen && "open"} md:hidden`}
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