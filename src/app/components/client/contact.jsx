import React from 'react'

const Contact = () => {
    return (
        <section className='text-center text-slate-600'>
          <h2>Contacto</h2>
          <form>
            <input type="text" placeholder="Nombre" style={{ padding: '10px', marginRight: '10px' }} />
            <input type="email" placeholder="Email" style={{ padding: '10px' }} />
            <button type="submit" style={{ padding: '10px 20px', marginLeft: '10px', backgroundColor: '#0070f3', color: '#fff' }}>
              Enviar
            </button>
          </form>
        </section>
      );
}

export default Contact