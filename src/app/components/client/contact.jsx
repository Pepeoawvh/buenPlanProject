import React from 'react'

const Contact = () => {
    return (
        <section className='grid justify-items-center text-center text-slate-600'>
        <h2 className='mb-4'>Contactanos!</h2>
          <form className='grid  justify-items-center p-4 w-80 border-2 border-[#114ca9] rounded-md shadow-md gap-2'>
            <input className='w-10/12 p-2 rounded-md border border-[#114ca9]' type="text" placeholder="Nombre"/>
            <input className='w-10/12 p-2 rounded-md border border-[#114ca9]' type="number" placeholder="Rut" />
            <input className='w-10/12 p-2 rounded-md border border-[#114ca9]' type="email" placeholder="Email" />
            <input className='w-10/12 p-2 rounded-md border border-[#114ca9]' type="email" placeholder="Email" />
            <input className='w-10/12 p-2 rounded-md border border-[#114ca9]' type="email" placeholder="Email" />
            <button className='p-2 bg-[#3795e3] w-2/4 text-white rounded-sm' type="submit">
              Contactar
            </button>
          </form>
        </section>
      );
}

export default Contact