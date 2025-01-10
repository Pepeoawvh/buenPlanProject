import React, { memo } from 'react'
import { bebas } from "../../ui/fonts.js"
import Link from 'next/link'
import styles from '../styles/animations.module.css'

const BotonPreguntas = () => {
  return (
    <div className={`${bebas.className} grid grid-cols-3 w-full items-center justify-items-center h-auto text-4xl bg-gradient-to-r from-[#2694e7] to-[#96c0e1] p-4 shadow-md mx-4`}>
      <span className='col-span-2 h-fit items-center justify-items-center text-center'>¿Tienes dudas?</span> 
      <Link href="/faq" passHref>
        <div className='col-span-1 mr-6 animation-jump'>
          <button
            className={`${styles.zoomImage} bg-[#2694e7] shadow-md justify-self-center border-4 border-white py-2 px-3 rounded-full text-xl pt-3 text-white`}
          >
            Preguntas Frecuentes
          </button>
        </div>
      </Link>
    </div>
  )
}

export default memo(BotonPreguntas)