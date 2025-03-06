import React, { memo, Suspense, lazy } from "react";
import { FaWhatsapp, FaCheck } from "react-icons/fa";
import styles from "../styles/animations.module.css";
import { bebas } from "../../ui/fonts.js";

const Image = lazy(() => import("next/image"));
const BotonPreguntas = lazy(() => import("./botonPreguntas"));

const Comofunciona = () => {
  return (
    <div className="py-8 md:py-16 relative overflow-hidden">
      {/* Fondo decorativo - ajustado para no interferir en móviles */}
      <div className="absolute top-40 right-0 w-32 md:w-64 h-32 md:h-64  bg-[#2694e7]/10 blur-3xl -z-10"></div>
      <div className="flex absolute bottom-20 left-0 w-32 md:w-80 h-32 md:h-80  bg-[#143899]/10 blur-3xl -z-10"></div>
      
      <div className="container-small mx-4 px-1 md:px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-md md:shadow-lg overflow-hidden">
          {/* Cabecera - con fondo ajustado y logo con fondo blanco */}
          <div className="flex md:flex-col bg-gradient-to-r from-[#2694e7] to-[#143899] p-4 md:p-8 text-white text-center">
            {/* Logo con fondo blanco circular para mejor contraste */}
            <div className="bg-white rounded-full p-2 w-20 h-20 md:w-24 md:h-24 mx-auto mb-2 md:mb-4 flex items-center justify-center">
              <Suspense fallback={<div className="h-10 w-24 bg-gray-200 animate-pulse rounded-full"></div>}>
                <Image
                  width={200}
                  height={80}
                  alt="Logo"
                  src="/img/BPlogo1.svg"
                  className="h-14 md:h-16 w-auto object-contain"
                />
              </Suspense>
            </div>
            <div className="mr-4 md:mr-0">
              <h1 className={`${bebas.className} text-3xl md:text-4xl lg:text-5xl mb-1 md:mb-2`}>¿CÓMO FUNCIONA?</h1>
              <div className="h-1 w-16 md:w-24 bg-white mx-auto mb-2 md:mb-4"></div>
              <h2 className={`${bebas.className} text-xl md:text-2xl lg:text-3xl`}>¡MUY FÁCIL!</h2>
            </div>
          </div>
          
          {/* Contenido - Pasos - ajustados para móvil */}
          <div className="p-4 md:p-6 lg:p-10 space-y-3 md:space-y-6">
            {/* Paso 1 */}
            <div className="bg-[#e9f5ff] rounded-lg md:rounded-xl p-3 md:p-4 lg:p-6 flex items-center gap-2 md:gap-4 transform transition-all hover:scale-[1.01] hover:shadow-md">
              <div className="flex-shrink-0 bg-[#143899] text-white rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center text-base md:text-xl font-bold">
                1
              </div>
              <div className="flex-grow">
                <div className="flex flex-col gap-1 md:gap-4">
                  <span className={`${bebas.className} text-base md:text-xl lg:text-2xl text-[#143899]`}>
                    COMPLETA EL FORMULARIO
                  </span>
                  {/* La opción de contacto por WhatsApp se podría activar aquí */}
                </div>
              </div>
            </div>
            
            {/* Paso 2 */}
            <div className="bg-[#e9f5ff] rounded-lg md:rounded-xl p-3 md:p-4 lg:p-6 flex items-center gap-2 md:gap-4 transform transition-all hover:scale-[1.01] hover:shadow-md">
              <div className="flex-shrink-0 bg-[#2694e7] text-white rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center text-base md:text-xl font-bold">
                2
              </div>
              <span className={`${bebas.className} text-base md:text-xl lg:text-2xl text-[#143899]`}>
                NOS INFORMAS TUS NECESIDADES
              </span>
            </div>
            
            {/* Paso 3 */}
            <div className="bg-[#e9f5ff] rounded-lg md:rounded-xl p-3 md:p-4 lg:p-6 flex items-center gap-2 md:gap-4 transform transition-all hover:scale-[1.01] hover:shadow-md">
              <div className="flex-shrink-0 bg-[#2694e7] text-white rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center text-base md:text-xl font-bold">
                3
              </div>
              <span className={`${bebas.className} text-base md:text-xl lg:text-2xl text-[#143899]`}>
                COTIZAMOS EN TODAS LAS OPCIONES
              </span>
            </div>
            
            {/* Paso 4 */}
            <div className="bg-[#e9f5ff] rounded-lg md:rounded-xl p-3 md:p-4 lg:p-6 flex items-center gap-2 md:gap-4 transform transition-all hover:scale-[1.01] hover:shadow-md">
              <div className="flex-shrink-0 bg-[#2694e7] text-white rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center text-base md:text-xl font-bold">
                4
              </div>
              <span className={`${bebas.className} text-base md:text-xl lg:text-2xl text-[#143899] leading-tight`}>
                TE MOSTRAMOS TODAS LAS ALTERNATIVAS
              </span>
            </div>
            
            {/* Paso 5 */}
            <div className="bg-[#e9f5ff] rounded-lg md:rounded-xl p-3 md:p-4 lg:p-6 flex items-center gap-2 md:gap-4 transform transition-all hover:scale-[1.01] hover:shadow-md">
              <div className="flex-shrink-0 bg-[#2694e7] text-white rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center text-base md:text-xl font-bold">
                5
              </div>
              <span className={`${bebas.className} text-base md:text-xl lg:text-2xl text-[#143899]`}>
                ¡TÚ DECIDES!
              </span>
            </div>
          </div>
          
          {/* Pie del componente - ajustado para móvil */}
          <div className="bg-gradient-to-r from-[#143899] to-[#2694e7] p-4 md:p-6 text-white text-center">
            <div className="flex items-center justify-center gap-1 md:gap-2 mb-1 md:mb-2">
              <FaCheck className="text-white" />
              <h3 className={`${bebas.className} text-lg md:text-xl lg:text-2xl`}>
                TE ACOMPAÑAMOS DURANTE TODO EL PROCESO
              </h3>
              <FaCheck className="text-white" />
            </div>
            <p className="text-xs md:text-sm lg:text-base max-w-2xl mx-auto">
              Nuestros asesores certificados te guiarán paso a paso para encontrar el mejor plan de salud
            </p>
          </div>
        </div>
        
        {/* Botón de preguntas */}
        <div className="mt-6 md:mt-8 text-center">
          <Suspense fallback={<div className="h-8 md:h-10 w-32 md:w-40 bg-gray-200 animate-pulse rounded-full mx-auto"></div>}>
            <BotonPreguntas />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default memo(Comofunciona);