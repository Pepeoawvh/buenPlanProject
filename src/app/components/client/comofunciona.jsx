import React, { memo, Suspense, lazy } from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "../styles/animations.module.css";
import { bebas } from "../../ui/fonts.js";

const Image = lazy(() => import("next/image"));
const BotonPreguntas = lazy(() => import("./botonPreguntas"));

const Comofunciona = () => {
  return (
    <div className="grid w-screen text-center text-xl justify-items-center aspect-auto animate-fade animate-once animate-duration-[1400ms] animate-delay-400">
      <div className="grid bg-[#e9f5ff] shadow-md justify-items-center h-fit md:w-3/4 animate-fade animate-once animate-duration-[1400ms] animate-delay-400">
        <div className={`grid ${bebas.className} auto-rows-min text-[18px] md:text-2xl justify-items-center gap-6 pb-12 md:w-full px-12 md:px-64 py-12`}>
          <Suspense fallback={<div>Buen Plan</div>}>
            <Image
              width={700}
              height={700}
              alt="Logo"
              src="/img/BPlogo1.svg"
              className="md:w-auto h-20"
            />
          </Suspense>
          <h1 className="text-[#143899] text-4xl">¿Cómo funciona?</h1>
          <h2 className="text-[#143899]">¡Muy Fácil!</h2>
          <div className="grid gap-1 grid-cols-7 items-center w-full h-fit rounded-xl p-2 bg-[#2694e7]">
            <div className="grid col-start-1 col-span-1 items-center bg-white h-full rounded-[4px] text-[#143899]">
              <span className="">1</span>
            </div>
            <span className="grid hover:bg-white hover:text-[#143899] rounded-[4px] col-start-2 col-span-2">
              Completa el formulario
            </span>
            <span className="grid col-start-4 col-span-1 md:text-xl"> o </span>
            <span className="grid text-right justify-items-center col-start-5 col-span-2">
              Contáctanos por:
            </span>
            <div className={`grid col-start-7 ${styles.zoomImage} col-span-1`}>
              <FaWhatsapp className="bg-green-500 text-white w-7 h-7 rounded-full" />
            </div>
          </div>
          <div className="grid gap-1 grid-cols-7 items-center w-full h-fit rounded-xl p-2 bg-[#2694e7]">
            <div className="grid col-start-1 col-span-1 items-center bg-white h-full rounded-[4px] text-[#143899]">
              <span className="">2</span>
            </div>
            <span className="grid rounded-md md:text-2xl col-start-2 col-span-6">
              Nos informas tus necesidades
            </span>
          </div>
          <div className="grid gap-1 grid-cols-7 items-center w-full h-fit rounded-xl p-2 bg-[#2694e7]">
            <div className="grid col-start-1 col-span-1 items-center bg-white h-full rounded-[4px] text-[#143899]">
              <span className="">3</span>
            </div>
            <span className="grid rounded-md md:text-2xl col-start-2 col-span-6">
              Cotizamos en todas las opciones
            </span>
          </div>
          <div className="grid gap-1 grid-cols-7 items-center w-full h-fit rounded-xl p-2 bg-[#2694e7]">
            <div className="grid col-start-1 col-span-1 items-center bg-white h-full rounded-[4px] text-[#143899]">
              <span className="">4</span>
            </div>
            <span className="grid rounded-md md:text-2xl col-start-2 col-span-6 text-center self-center">
              Te mostramos todas las alternativas
            </span>
          </div>
          <div className="grid gap-1 grid-cols-7 items-center w-full h-fit rounded-xl p-2 bg-[#2694e7]">
            <div className="grid col-start-1 col-span-1 items-center bg-white h-full rounded-[4px] text-[#143899]">
              <span className="">5</span>
            </div>
            <span className="grid rounded-md md:text-2xl col-start-2 col-span-6">
              ¡Tu decides!
            </span>
          </div>
          <h2 className="text-[#143899] text-xl">¡Te acompañamos durante todo el proceso!</h2>
        </div>
      </div>
      <Suspense fallback={<div>Preguntas</div>}>
        <BotonPreguntas />
      </Suspense>
    </div>
  );
};

export default memo(Comofunciona);