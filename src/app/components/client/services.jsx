import React from 'react'
import {bebas} from "../../ui/fonts.js"
import styles from '../styles/animations.module.css';

const Services = () => {
    return (
        <section className='grid justify-items-center text-slate-900 py-4 px-2'>
         <h2 className={`${bebas.className} text-orange-500 text-3xl py-4`}>Planes de Salud</h2>
          <div className='grid text-left justify-items-center w-full p-2'>
           
            <ul className='grid text-[#b54ec5] grid-cols-3 justify-items-center gap-4 text-center items-center '>
              <li className={`${styles.zoomImage} border rounded-xl px-4 bg-[#fcd8ca] shadow-md`}>Tarjeta plan</li>
              <li className={`${styles.zoomImage} border rounded-xl px-4 bg-[#fcd8ca] shadow-md`}>Plan Intermedio</li>        
              <li className={`${styles.zoomImage} border rounded-xl px-4 bg-[#fcd8ca] shadow-md`}>Plan Premium</li>
              <li className={`${styles.zoomImage} border rounded-xl px-4 bg-[#fcd8ca] shadow-md`}>Plan Intermedio</li>
              <li className={`${styles.zoomImage} border rounded-xl px-4 bg-[#fcd8ca] shadow-md`}>Plan Intermedio</li>
              <li className={`${styles.zoomImage} border rounded-xl px-4 bg-[#fcd8ca] shadow-md`}>Plan Intermedio</li>
            </ul>
          </div>
        </section>
      );
}

export default Services