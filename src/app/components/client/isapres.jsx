import React from 'react'
import Image from 'next/image'
import {bebas} from "../../ui/fonts.js"


const Isapres = () => {
  return (
    <div className='grid w-full p-10 text-[#642073] '>
    <div className='grid grid-cols-[auto,auto]'>
      <Image
        src="/img/tabla.svg"
        alt=""
        width={120}
        height={120}
        className="col-span-1 justify-self-center animate-wiggle animate-infinite animate-duration-[1500ms]"
      /><div className={`${bebas.className} col-span-1  self-center justify-self-start text-center text-2xl`}> Cotizamos en todas las Isapres </div>
    </div>
    <Image
        src="/img/isapres.svg"
        alt=""
        width={800}
        height={800}
        className=""
    /></div>

  )
}

export default Isapres