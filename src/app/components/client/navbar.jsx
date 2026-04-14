"use client";
import { useEffect, useRef, useState, Suspense, lazy } from "react";
import { questrial } from "../../ui/fonts.js";
import "../styles/NavBar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Image = lazy(() => import("next/image"));

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  // Si estamos en la home, usamos ancla directa; si no, redirigimos a home+ancla
  const anchorHref = (anchor) => pathname === "/" ? anchor : `/${anchor}`;

  return (
    <>
      <div className={`blur-background select-none ${isOpen && "open"}`} />
      <nav
        ref={navRef}
        className="flex h-auto px-4 md:px-10 justify-between items-center py-3 bg-white shadow-md border-b border-gray-100"
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Suspense fallback={<div className="w-28 h-10" />}>
            <Image
              width={1000}
              height={700}
              alt="Buen Plan Salud"
              src="/img/BPlogo1.svg"
              className="w-28 md:w-40 select-none"
            />
          </Suspense>
        </Link>

        {/* Links escritorio */}
        <div className="hidden md:flex items-center gap-1">
          <Link href="/blog" className="navButton" onClick={handleLinkClick}>
            Blog
          </Link>
          <Link href={anchorHref("#about")} className="navButton" onClick={handleLinkClick}>
            ¿Quiénes somos?
          </Link>
          <Link href={anchorHref("#contact")} className="navButton" onClick={handleLinkClick}>
            Contáctanos
          </Link>
          <Link href="/faq" className="navButton" onClick={handleLinkClick}>
            Preguntas frecuentes
          </Link>
        </div>

        {/* Botón hamburguesa */}
        <div
          className={`navToggle ${isOpen && "open"} md:hidden`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menú móvil */}
        <ul
          className={`${questrial.className} navItem ${isOpen && "open"} bg-white pt-12 pb-6 px-6`}
        >
          <div className="flex justify-center mb-6">
            <Suspense fallback={<div className="w-28 h-10" />}>
              <Image
                width={200}
                height={140}
                alt="Buen Plan Salud"
                src="/img/BPlogo1.svg"
                className="w-32 select-none"
              />
            </Suspense>
          </div>
          {[
            { label: "Inicio", href: "/" },
            { label: "¿Quiénes somos?", href: anchorHref("#about") },
            { label: "Contáctanos", href: anchorHref("#contact") },
            { label: "Preguntas frecuentes", href: "/faq" },
            { label: "Blog", href: "/blog" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={handleLinkClick}
              className="flex items-center w-full px-4 py-3 text-[#004aad] font-semibold text-lg border-b border-gray-100 hover:bg-[#e9f5ff] hover:text-[#004aad] transition-colors duration-200 rounded-md"
            >
              {label}
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;