"use client"
import React from 'react'
import {bebas} from "../../ui/fonts.js"

const Hero = () => {
  return (
    <section className='grid w-full justify-items-center'>
      <div className='grid auto-rows-min gap-4 items-center justify-items-center ] p-2 py-6 bg-[#f8e4dd92]'>
        <h1 className={`${bebas.className} px-8 text-[#8d4244] text-center text-6xl`}>Asesoría Profesional en Planes de Salud</h1>
        <p className='text-center text-[#762c82] text-3xl px-4'>¡Te ayudamos a conseguir un buen plan!</p>
        <button className={`${bebas.className} bg-pink-300 shadow-md justify-self-center border-2  border-white py-2 px-3 rounded-full text-2xl text-white`}>
          Solicitar Asesoría
        </button>
      </div>
    </section>
  );
};

export default Hero;
