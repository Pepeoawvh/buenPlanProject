"use client"
import React from 'react'
import { bebas } from "../../ui/fonts.js"
import styles from '../styles/animations.module.css';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id='hero' className='animate-fade animate-once animate-duration-1200 animate-delay-200 grid w-full justify-items-center bg-gradient-to-b from-[#e2f2ff] via-[#ffffff] to-[#e2f2ff]'>
      <div className='grid auto-rows-min gap-4 items-center justify-items-center p-2 py-6 md:py-0 md:mt-3 rounded-lg'>
        <h1 className={`${bebas.className} px-8 text-[#642073] text-center text-4xl py-2`}>Asesoría Profesional en Planes de Salud</h1>
        <p className='text-center text-[#004aad] text-2xl px-4'>Te ayudamos a encontrar un buen plan</p>
        <p className='text-center text-[#004aad] text-base px-6'>Conoce todas tus opciones y elige la mejor para ti y tu familia</p>
        <Link href="#contact" passHref>
          <button
            className={`${bebas.className} ${styles.zoomImage} my-2 bg-[#2694e7] shadow-md justify-self-center border-4 border-white py-2 px-3 rounded-full text-2xl pt-3 text-white`}
          >
            Solicitar Asesoría
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
