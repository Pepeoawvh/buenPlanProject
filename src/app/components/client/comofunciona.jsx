import React from 'react'
import Image from 'next/image'

const Comofunciona = () => {
  return (
    <div className='grid w-screen justify-items-center'>
      <div className='grid bg-[#3795e3] shadow-md justify-items-center h-fit md:w-3/4 '>
      <Image
          src="/img/comofunciona.png"
          alt=""
          width={600}
          height={600}
          className=""
      /></div>
    </div>
  )
}

export default Comofunciona