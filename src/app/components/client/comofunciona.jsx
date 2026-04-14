import React, { memo, Suspense, lazy } from "react";
import { FaWhatsapp, FaCheck } from "react-icons/fa";
import styles from "../styles/animations.module.css";
import { bebas } from "../../ui/fonts.js";

const Image = lazy(() => import("next/image"));
const BotonPreguntas = lazy(() => import("./botonPreguntas"));

const Comofunciona = () => {
  return (
    <div className="select-none py-8 md:py-16 relative overflow-hidden">
      {/* Fondo decorativo - ajustado para no interferir en móviles */}
      <div className="select-none absolute top-40 right-0 w-32 md:w-64 h-32 md:h-64  bg-[#2694e7]/10 blur-3xl -z-10"></div>
      <div className="select-none flex absolute bottom-20 left-0 w-32 md:w-80 h-32 md:h-80  bg-[#143899]/10 blur-3xl -z-10"></div>
      
      <div className="container-small mx-4 px-1 md:px-4">
        <div className="max-w-4xl rounded-xl mx-auto bg-white shadow-md md:shadow-lg overflow-hidden">
          {/* Cabecera - logo a la izquierda, título centrado */}
          <div className="flex items-center rounded-t-xl bg-gradient-to-r from-[#2694e7] to-[#143899] px-5 py-4 md:px-8 md:py-6 text-white gap-4">
            {/* Logo con fondo blanco circular */}
            <div className="flex-shrink-0 bg-white rounded-full p-1.5 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-md">
              <Suspense fallback={<div className="h-10 w-10 bg-gray-200 animate-pulse rounded-full"></div>}>
                <Image
                  width={200}
                  height={80}
                  alt="Logo Buen Plan Salud"
                  src="/img/BPlogo1.svg"
                  className="h-10 md:h-11 w-auto object-contain"
                />
              </Suspense>
            </div>
            {/* Título centrado */}
            <div className="flex-grow text-center">
              <h1 className={`${bebas.className} text-2xl md:text-3xl lg:text-4xl tracking-widest`}>¿CÓMO FUNCIONA?</h1>
              <div className="h-0.5 w-16 md:w-20 bg-white/60 mx-auto mt-1"></div>
            </div>
            {/* Espaciador para centrar visualmente el título */}
            <div className="flex-shrink-0 w-14 md:w-16" />
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
          <div className="bg-gradient-to-r rounded-b-xl from-[#143899] to-[#2694e7] p-4 md:p-6 text-white text-center">
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