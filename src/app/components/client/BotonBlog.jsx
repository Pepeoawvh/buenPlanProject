import React, { memo } from 'react';
import { bebas } from "../../ui/fonts.js";
import Link from 'next/link';
import styles from '../styles/animations.module.css';
import { FaNewspaper } from "react-icons/fa";

const BotonBlog = () => {
  return (
    <div className="select-none w-5/6 mt-12 mx-auto rounded-lg md:rounded-xl overflow-hidden shadow-md bg-white">
      <div className={`${bebas.className} justify-evenly p-3 md:p-4 flex flex-col sm:flex-row items-center w-full gap-3 md:gap-4`}>
        <div className="flex flex-col md:flex-row items-center gap-2 text-primary">
          <FaNewspaper className="text-xl md:text-2xl" />
          <span className='text-2xl md:text-3xl text-center tracking-wide lg:text-4xl'>¡TENEMOS INFORMACIÓN RELEVANTE PARA TI!</span> 
        </div>
        <Link href="/blog" passHref className="w-full sm:w-auto">
          <button
            className={`${bebas.className} ${styles.zoomImage} w-full bg-gradient-to-r from-accent-green to-link text-white font-bold shadow-md border-2 border-white py-2 px-4 md:px-6 rounded-full md:text-3xl hover:from-link hover:to-accent-green transition-all duration-300`}
          >
            VISITA NUESTRO BLOG
          </button>
        </Link>
      </div>
    </div>
  );
}

export default memo(BotonBlog);