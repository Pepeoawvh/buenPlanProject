'use client'

import React, { useState, useRef } from 'react';
import { firestoreDB } from '../../firebase/config.js';
import { bebas } from '../../ui/fonts.js';
import styles from '../styles/animations.module.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        rut: '',
        email: '',
        edad: '',
        telefono: '',
        institucion: '',
        clinica: '',
        fechaEnvio: ''
    });

    const [error, setError] = useState('');
    const form = useRef();

    const validarRUT = (rut) => {
        rut = rut.replace(/[.-]/g, "");
        const cuerpo = rut.slice(0, -1);
        let dv = rut.slice(-1).toUpperCase();
        if (cuerpo.length < 7) {
            return false;
        }
        let suma = 0;
        let multiplo = 2;
        for (let i = cuerpo.length - 1; i >= 0; i--) {
            suma += parseInt(cuerpo[i]) * multiplo;
            multiplo = multiplo < 7 ? multiplo + 1 : 2;
        }
        const resto = suma % 11;
        const dvEsperado = 11 - resto;
        let dvCalculado = dvEsperado === 11 ? "0" : dvEsperado === 10 ? "K" : dvEsperado.toString();
        return dvCalculado === dv;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validarRUT(formData.rut)) {
            setError('Formato de RUT debe ser xxxxxxxx-x sin puntos');
            return;
        } else {
            setError('');
            try {
                await firestoreDB.collection('formubuenplan').add(formData);
                console.log('Formulario enviado');
                emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
                    .then((result) => {
                        console.log(result.text);
                    }, (error) => {
                        console.log(error.text);
                    });
            } catch (error) {
                console.error('Error al enviar el formulario:', error);
            }
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id='contact' className='grid justify-items-center text-center text-slate-600'>
            <h2 className='mb-4'>¡Contáctanos!</h2>
            <form ref={form} className='grid justify-items-center p-4 w-80 border-2 border-[#114ca9] rounded-md shadow-md gap-2' onSubmit={handleSubmit}>
                <label className='w-10/12' htmlFor="nombre">Nombre</label>
                <input className='w-10/12 p-2 rounded-md border border-[#114ca9]' type="text" id="nombre" name="nombre" placeholder="Nombre" required autoComplete="name" value={formData.nombre} onChange={handleChange}/>

                <label className='w-10/12' htmlFor="rut">Rut</label>
                <input className='w-10/12 p-2 rounded-md border border-[#114ca9]' type="text" id="rut" name="rut" placeholder="Rut" required pattern="^[0-9]+[-][0-9kK]{1}$" autoComplete="off" value={formData.rut} onChange={handleChange}/>
                {error && <p className='text-red-500'>{error}</p>}

                <label className='w-10/12' htmlFor="email">Email</label>
                <input className='w-10/12 p-2 rounded-md border border-[#114ca9]' type="email" id="email" name="email" placeholder="Email" required autoComplete="email" value={formData.email} onChange={handleChange}/>

                <label className='w-10/12' htmlFor="edad">Edad</label>
                <input className='w-10/12 p-2 rounded-md border border-[#114ca9]' type="number" id="edad" name="edad" placeholder="Edad" required min="0" max="120" autoComplete="off" value={formData.edad} onChange={handleChange}/>

                <label className='w-10/12' htmlFor="telefono">Teléfono</label>
                <input className='w-10/12 p-2 rounded-md border border-[#114ca9]' type="tel" id="telefono" name="telefono" placeholder="Teléfono" required autoComplete="tel" value={formData.telefono} onChange={handleChange}/>

                <label className='w-10/12' htmlFor="institucion">Institución Actual</label>
                <input className='w-10/12 p-2 rounded-md border border-[#114ca9]' type="text" id="institucion" name="institucion" placeholder="Institución Actual" required autoComplete="organization" value={formData.institucion} onChange={handleChange}/>

                <label className='w-10/12' htmlFor="clinica">Clínica de Preferencia</label>
                <input className='w-10/12 p-2 rounded-md border border-[#114ca9]' type="text" id="clinica" name="clinica" placeholder="Clínica de Preferencia" required autoComplete="off" value={formData.clinica} onChange={handleChange}/>

                <button className={`${bebas.className} ${styles.zoomImage}  bg-[#2694e7] shadow-md justify-self-center border-4  border-white py-2 px-3 rounded-full text-xl w-3/4 pt-3 text-white`}>
                    Contactar
                </button>
            </form>
        </section>
    );
}

export default Contact;