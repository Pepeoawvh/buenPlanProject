import React from 'react'
import {bebas} from "../../ui/fonts.js"
import styles from '../styles/animations.module.css';

const Services = () => {
    return (
        <section id='servicios' className='bg-[#2694e7] grid justify-items-center text-slate-900 py-4 px-2'>
         <h2 className={`${bebas.className} text-white  text-3xl py-4`}>Planes de Salud</h2>
          <div className='grid text-left justify-items-center w-full p-2'>
           
            <ul className='grid text-[#8d4244] grid-cols-3 justify-items-center gap-4 text-center items-center '>
              <li className={`${styles.zoomImage} border rounded-xl px-4 bg-white shadow-md h-full w-full`}>Tarjeta plan</li>
              <li className={`${styles.zoomImage} border rounded-xl px-4 bg-white shadow-md h-full w-full`}>Plan Intermedio</li>        
              <li className={`${styles.zoomImage} border rounded-xl px-4 bg-white shadow-md h-full w-full`}>Plan Premium</li>
              <li className={`${styles.zoomImage} border rounded-xl px-4 bg-white shadow-md h-full w-full`}>Plan Intermedio</li>
              <li className={`${styles.zoomImage} border rounded-xl px-4 bg-white shadow-md h-full w-full`}>Plan Intermedio</li>
              <li className={`${styles.zoomImage} border rounded-xl px-4 bg-white shadow-md h-full w-full`}>Plan Intermedio</li>
            </ul>
          </div>
        </section>
      );
}

export default Services