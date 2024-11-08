import React from 'react';

const Testimonials = () => {
  return (
    <section id='testimonios' className='grid py-6 gap-5 auto-rows-min w-full text-gray-700 text-xl justify-items-center'>
      <h2>TESTIMONIOS DE CLIENTES</h2>
      <div className='border w-[80%] p-6 text-center rounded-xl shadow-md bg-[#e9faff]'>
        &quot;La mejor asesoría que he recibido en temas de salud.<br/> 
        <span className='text-sm'>- Julia J. Carrasco Ingeniera Civil Industrial</span>&quot;
      </div>
      <div className='border w-[80%] p-6 text-center rounded-xl shadow-md bg-[#e9faff]'>
        &quot;Me ayudaron a encontrar el plan perfecto para mi familia.<br/> 
        <span className='text-sm'>- Julia J. Carrasco Ingeniera Civil Industrial</span>&quot;
      </div>
    </section>
  );
}

export default Testimonials;