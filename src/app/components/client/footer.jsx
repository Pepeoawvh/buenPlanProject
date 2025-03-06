import React, { memo } from "react";
import { bebas } from "../../ui/fonts.js";
import styles from "../styles/animations.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaMapMarkerAlt, FaHome, FaUsers, FaQuestionCircle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#2694e7] text-white py-8 px-4">
      <div className="mx-4 md:mx-auto md:max-w-5xl lg:max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Navegación */}
          <div className="text-center md:text-left">
            <h3 className={`${bebas.className} text-xl md:text-2xl mb-3 md:mb-4 text-white border-b border-white/30 pb-2`}>
              NAVEGACIÓN
            </h3>
            <ul className="space-y-3">
              <li className={`${styles.zoomImage} flex justify-center md:justify-start items-center gap-2`}>
                <FaHome className="text-white/70" />
                <Link href="/" className="text-white hover:text-white/80 transition-colors">
                  Inicio
                </Link>
              </li>
              <li className={`${styles.zoomImage} flex justify-center md:justify-start items-center gap-2`}>
                <FaUsers className="text-white/70" />
                <Link href="#about" className="text-white hover:text-white/80 transition-colors">
                  Quiénes Somos
                </Link>
              </li>
              <li className={`${styles.zoomImage} flex justify-center md:justify-start items-center gap-2`}>
                <FaQuestionCircle className="text-white/70" />
                <Link href="/faq" className="text-white hover:text-white/80 transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contacto */}
          <div className="text-center md:text-left">
            <h3 className={`${bebas.className} text-xl md:text-2xl mb-3 md:mb-4 text-white border-b border-white/30 pb-2`}>
              CONTACTO
            </h3>
            <ul className="space-y-3">
              <li className={`${styles.zoomImage} flex justify-center md:justify-start items-center gap-2`}>
                <FaEnvelope className="text-white/70" />
                <a href="mailto:asesorias@buenplansalud.cl" className="text-white hover:text-white/80 transition-colors">
                  asesorias@buenplansalud.cl
                </a>
              </li>
              <li className={`${styles.zoomImage} flex justify-center md:justify-start items-center gap-2`}>
                <FaMapMarkerAlt className="text-white/70" />
                <span className="text-white">Santiago, Chile</span>
              </li>
            </ul>
          </div>
          
          {/* Certificación */}
          <div className="flex flex-col items-center md:items-end justify-center">
            <div className="grid text-white justify-items-center">
          <span>Certificados por</span>
          <Image
            src="/img/superint.svg"
            alt=""
            width={200}
            height={200}
            className="justify-self-center"
            loading="lazy" // Carga diferida de imágenes
          />
        </div>
          </div>
        </div>
        
        <div className="text-center text-sm text-white/90 mt-8 pt-4 border-t border-white/20">
          <p>
            &copy; {new Date().getFullYear()} BuenPlanSalud - Todos los derechos
            reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);  