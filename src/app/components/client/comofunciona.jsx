import React from 'react'
import Image from 'next/image'
import BotonPreguntas from './botonPreguntas'

const Comofunciona = () => {
  return (
    <div className='grid w-screen justify-items-center '>
      <div className='grid bg-[#e9faff] shadow-md justify-items-center h-fit md:w-3/4  '>
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