import React, { memo } from 'react'
import { bebas } from "../../ui/fonts.js"
import Link from 'next/link'
import styles from '../styles/animations.module.css'

const BotonPreguntas = () => {
  return (
    <div className={`${bebas.className} grid grid-cols-3 w-full items-center justify-items-center h-auto text-4xl bg-gradient-to-r from-[#2694e7] to-[#96c0e1] p-4 shadow-md mx-4`}>
      <span className='col-span-2 h-fit items-center justify-items-center text-center'>¿Tienes dudas?</span> 
      <Link href="/faq" passHref>
        <div className='mr-6'>
          <button
            className={`${styles.zoomImage} bg-[#2694e7] shadow-md justify-self-center border-2 border-white py-2 px-2 rounded-full text-base text-white`}
          >
            Preguntas Frecuentes
          </button>
        </div>
      </Link>
    </div>
  )
}

export default memo(BotonPreguntas)