"use client"
import React from 'react'
import {bebas} from "../../ui/fonts.js"
import styles from '../styles/animations.module.css';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id='hero' className='grid w-full justify-items-center'>
      <div className='grid auto-rows-min gap-4 items-center justify-items-center ] p-2 py-6 bg-white'>
        <h1 className={`${bebas.className} px-8 text-[#8d4244] text-center text-5xl py-3`}>Asesoría Profesional en Planes de Salud</h1>
        <p className='text-center text-[#004aad]  text-2xl px-4 py-2'>Te ayudamos a conseguir un buen plan</p>
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
