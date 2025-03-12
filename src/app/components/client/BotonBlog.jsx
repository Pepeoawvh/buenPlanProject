import React, { memo } from 'react';
import { bebas } from "../../ui/fonts.js";
import Link from 'next/link';
import styles from '../styles/animations.module.css';
import { FaNewspaper } from "react-icons/fa";

const BotonBlog = () => {
  return (
    <div className="w-5/6 mt-12 mx-auto rounded-lg md:rounded-xl overflow-hidden shadow-md">
      <div className={`${bebas.className} bg-gradient-to-r from-[#143899] to-[#2694e7] p-3 md:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4`}>
        <div className="flex items-center gap-2 text-white">
          <FaNewspaper className="text-xl md:text-2xl" />
          <span className='text-2xl md:text-3xl tracking-wide lg:text-4xl'>¡TENEMOS INFORMACION RELEVANTE PARA TI!</span> 
        </div>
        <Link href="/blog" passHref className="w-full sm:w-auto">
          <button
            className={`${bebas.className} ${styles.zoomImage} w-full  bg-white text-[#143899] hover:bg-[#e9f5ff] shadow-md border-2 border-white py-2 px-4 md:px-6 rounded-full text-base md:text-lg transition-all duration-300`}
          >
            VISITA NUESTRO BLOG
          </button>
        </Link>
      </div>
    </div>
  );
}

export default memo(BotonBlog);