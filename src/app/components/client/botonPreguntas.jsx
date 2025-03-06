import React, { memo } from 'react'
import { bebas } from "../../ui/fonts.js"
import Link from 'next/link'
import styles from '../styles/animations.module.css'
import { FaQuestionCircle } from "react-icons/fa"

const BotonPreguntas = () => {
  return (
    <div className="max-w-4xl mx-auto rounded-lg md:rounded-xl overflow-hidden shadow-md">
      <div className={`${bebas.className} bg-gradient-to-r from-[#143899] to-[#2694e7] p-3 md:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4`}>
        <div className="flex items-center gap-2 text-white">
          <FaQuestionCircle className="text-xl md:text-2xl" />
          <span className='text-2xl md:text-3xl lg:text-4xl'>¿TIENES DUDAS?</span> 
        </div>
        <Link href="/faq" passHref className="w-full sm:w-auto">
          <button
            className={`${bebas.className} ${styles.zoomImage} w-full sm:w-auto bg-white text-[#143899] hover:bg-[#e9f5ff] shadow-md border-2 border-white py-2 px-4 md:px-6 rounded-full text-base md:text-lg transition-all duration-300`}
          >
            PREGUNTAS FRECUENTES
          </button>
        </Link>
      </div>
    </div>
  )
}

export default memo(BotonPreguntas)