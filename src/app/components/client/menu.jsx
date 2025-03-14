import React from 'react';

const Menu = () => {
  return (
    <div className=' select-none absolute top-16 left-0 w-full bg-white shadow-md'>
      <ul className='flex flex-col items-center'>
        <li className='p-2'><a href='#inicio'>Inicio</a></li>
        <li className='p-2'><a href='#cotizar-isapre'>Cotizar Plan Ideal</a></li>
        <li className='p-2'><a href='#asesoria-legal'>Asesoría Personalizada</a></li>
        <li className='p-2'><a href='#sobre-mi'>Sobre Nosotros</a></li>
      </ul>
    </div>
  );
};

export default Menu;