import React from 'react';
import { bebas } from "../../ui/fonts.js";
import styles from '../styles/animations.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='w-full bg-[#2694e7] text-slate-900 py-8 px-4'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        
        <div className='text-center md:text-left'>
          <ul className='grid text-[#8d4244] gap-4'>
            <li className={`${styles.zoomImage} text-white`}><Link href="/"  >Inicio</Link></li>
            <li className={`${styles.zoomImage} text-white`}><Link href="#about" >Quiénes Somos</Link></li>
            <li className={`${styles.zoomImage} text-white`}><Link href="/faq" >Preguntas Frecuentes</Link></li>
          </ul>
        </div>
        <div className='text-center md:text-left'>
          <h2 className={`${bebas.className} text-white text-xl border-b-2 mb-4`}></h2>
          <ul className='grid text-[#8d4244] gap-4'>
            <li className={`${styles.zoomImage} text-white`}>Email: asesorias@buenplansalud.cl</li>
            <li className={`${styles.zoomImage} text-white`}>Santiago, Chile</li>
          </ul>
        </div>
<div className='grid text-white self-end justify-items-center'>  
<span>Certificados por</span>
<Image
  src="/img/superint.svg"
  alt=""
  width={200}
  height={200}
  className="justify-self-center"
/>     </div>
      </div>
      <div className='text-center text-sm text-white mt-8'>
        <p>&copy; {new Date().getFullYear()} BuenPlanSalud Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;