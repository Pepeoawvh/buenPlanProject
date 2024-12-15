import React from 'react'
import Image from 'next/image'
import BotonPreguntas from './botonPreguntas'

const Comofunciona = () => {
  return (
    <div className='grid w-screen justify-items-center aspect-auto animate-fade animate-once animate-duration-[1400ms] animate-delay-400   '>
      <div className='grid bg-[#e9f5ff] shadow-md justify-items-center h-fit md:w-3/4 animate-fade animate-once animate-duration-[1400ms] animate-delay-400  '>
      <Image
          src="/img/comofunciona.svg"
          alt=""
          width={600}
          height={600}  
          className=""
      />
        
      </div>
      <BotonPreguntas/>
    </div>
  )
}

export default Comofunciona