import React from 'react'
import Image from 'next/image'
import {bebas} from "../../ui/fonts.js"

const BotonPreguntas = () => {
  return (
    <div className={`${bebas.className} grid grid-cols-3 w-full items-center justify-items-center h-auto text-4xl bg-gradient-to-r from-[#2694e7] to-[#96c0e1] p-4 shadow-md mx-4`}>
      <span className=' col-span-2 h-fit items-center justify-items-center text-center'>¿Tienes dudas?</span> 
      <div className='grid justify-items-center'>
          <Image
            src="/img/TapFAQ.svg"
            alt=""
            width={60}
            height={60}
            className="grid animate-jump animate-infinite animate-duration-[4000ms] animate-delay-[3000ms]"
          />
      </div>
    </div>
  )
}

export default BotonPreguntas