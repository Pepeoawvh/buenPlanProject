"use client"
import React, { memo, lazy, Suspense } from 'react'
import { bebas } from "../../ui/fonts.js"
import styles from '../styles/animations.module.css';
import Link from 'next/link';

const Image = lazy(() => import("next/image"));

const Hero = () => {
  return (
    <section id='hero' className='select-none animate-fade animate-once animate-duration-1200 animate-delay-200 relative w-full min-h-[50vh] overflow-hidden bg-gradient-to-b from-[#e2f2ff] via-[#ffffff] to-[#e2f2ff]'>
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#2694e7]/10 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#143899]/10 blur-3xl"></div>
      
      <div className='container mx-auto grid md:grid-cols-2 gap-8 items-center py-8 md:py-8 px-4 md:px-8 relative z-10'>
        {/* Contenido principal */}
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col space-y-4'>
            <h1 className={`${bebas.className} text-[#143899] text-4xl md:text-5xl text-center lg:text-6xl leading-tight`}>
              ASESORÍA PROFESIONAL EN<br/>
              <span className="text-[#2694e7]">PLANES DE SALUD</span>
            </h1>
            <div className="flex h-1 w-24 bg-[#2694e7] justify-center self-center"></div>
          </div>
          
          <div className='flex flex-col text-center md:text-left text-sm justify-items-center'>
            <p className='text-[#004aad] text-xl font-medium'>Te ayudamos a encontrar un buen plan</p>
            <p className='text-[#004aad]/80 text-base max-w-lg pt-4'>Conoce todas tus opciones y elige la mejor para ti y tu familia con nuestro servicio 100% gratuito certificado por la Superintendencia de Salud</p>
          </div>
          
          <div className='flex flex-col items-center sm:flex-row gap-4 mt-4'>
            <Link href="#contact" passHref className="w-full sm:w-auto">
              <button
                className={`${bebas.className} ${styles.zoomImage} w-full sm:w-auto bg-gradient-to-r from-[#2694e7] to-[#143899] shadow-lg justify-self-center border-2 border-white py-1 px-8 rounded-full md:text-2xl text-white hover:from-[#143899] hover:to-[#2694e7] transition-all duration-300`}
              >
                OBTENER ASESORÍA GRATUITA
              </button>
            </Link>
            
            <Link href="#about" passHref className="w-full sm:w-auto">
              <button
                className={`${bebas.className} bg-white w-full text-[#143899] border-2 border-[#143899] py-1 hover:bg-[#e9f5ff] shadow-md  px-8 rounded-full sm:text-md md:text-2xl transition-all duration-300`}
              >
                CONOCER MÁS
              </button>
            </Link>
          </div>
          
          <div className="flex items-center gap-2 mt-2">
            <div className="flex sm:items-center -space-x-4">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</div>
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">✓</div>
              <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs">✓</div>
            </div>
            <span className="text-sm text-center text-[#004aad]">+100 clientes satisfechos</span>
          </div>
        </div>
        
        {/* Imagen o ilustración */}
        <div className='hidden md:flex justify-center'>
          <Suspense fallback={<div className="w-full h-96 bg-gray-100 animate-pulse rounded-lg"></div>}>
            <Image
              src="/img/advisorHero.svg" 
              alt="Asesoría en planes de salud"
              width={600}
              height={500}
              className="object-contain"
              priority
            />
          </Suspense>
        </div>
      </div>
      

    </section>
  );
};

export default memo(Hero);