import React from 'react';
import { bebas } from "../../ui/fonts.js";
import styles from '../styles/animations.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-[#2694e7] text-slate-900 py-8 px-4'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        
        <div className='text-center md:text-left'>
          <h2 className={`${bebas.className} text-white text-2xl py-4`}>Enlaces Rápidos</h2>
          <ul className='grid text-[#8d4244] gap-4'>
            <li className={`${styles.zoomImage} text-white`}><Link href="/"  >Inicio</Link></li>
            <li className={`${styles.zoomImage} text-white`}><Link href="#about" >Quienes Somos</Link></li>
            <li className={`${styles.zoomImage} text-white`}><Link href="#contact" >Solicitar Información</Link></li>
          </ul>
        </div>
        <div className='text-center md:text-left'>
          <h2 className={`${bebas.className} text-white text-2xl py-4`}>Contacto</h2>
          <ul className='grid text-[#8d4244] gap-4'>
            <li className={`${styles.zoomImage} text-white`}>Email: contacto@buenplancl.com</li>
            <li className={`${styles.zoomImage} text-white`}>Teléfono: +56 9 1234 5678</li>
            <li className={`${styles.zoomImage} text-white`}>Dirección: Calle Falsa 123, Santiago, Chile</li>
          </ul>
        </div>
      </div>
      <div className='text-center text-white mt-8'>
        <p>&copy; {new Date().getFullYear()} BuenPlanCL. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;