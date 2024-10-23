import React from 'react';

const Testimonials = () => {
  return (
    <section className='grid py-6 gap-5 auto-rows-min w-full text-gray-700 text-xl justify-items-center'>
      <h2>Testimonios de Clientes</h2>
      <div className='border w-[80%] p-6 text-center rounded-xl shadow-md bg-[#fcfbf2b8]'>
        &quot;La mejor asesoría que he recibido en temas de salud.<br/> 
        <span className='text-sm'>- Julia J. Carrasco Ingeniera Civil Industrial</span>&quot;
      </div>
      <div className='border w-[80%] p-6 text-center rounded-xl shadow-md bg-[#fcfbf2b8]'>
        &quot;Me ayudaron a encontrar el plan perfecto para mi familia.<br/> 
        <span className='text-sm'>- Julia J. Carrasco Ingeniera Civil Industrial</span>&quot;
      </div>
    </section>
  );
}

export default Testimonials;