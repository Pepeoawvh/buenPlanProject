import React from 'react'
import {bebas} from "../../ui/fonts.js"

const About = () => {
    return (
        <section id="about" className='text-slate-800 m-8'>
          <h2 className={`border-b-4 ${bebas.className} border-b-[#2694e7] text-center pb-2 text-3xl`}>Acerca de Buen Plan</h2>
          <p className='text-xl text-center mt-4'>Somos un grupo de profesionales especializados en cotizar y comparar planes en todas las isapres de Chile.</p>
        </section>
      );
}

export default About