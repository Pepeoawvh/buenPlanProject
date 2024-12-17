import React from "react";
import Head from 'next/head';
import { bebas } from "../ui/fonts.js";
import WspButton from '../components/client/WspButton.jsx';
import Contact from '../components/client/contact.jsx';
import About from '../components/client/about.jsx';

const PreguntasFrecuentes = () => {
  return (
    <>
      <Head>
        <title>Preguntas Frecuentes - Buen Plan</title>
        <meta name="description" content="Encuentra respuestas a las preguntas más frecuentes sobre nuestros servicios de asesoría en Isapres." />
        <meta name="keywords" content="Isapres, asesoría, preguntas frecuentes, salud, planes de salud" />
        <meta name="author" content="Buen Plan" />
        <meta property="og:title" content="Preguntas Frecuentes - Buen Plan" />
        <meta property="og:description" content="Encuentra respuestas a las preguntas más frecuentes sobre nuestros servicios de asesoría en Isapres." />
        <meta property="og:image" content="/img/BPlogo1.svg" />
        <meta property="og:url" content="https://www.buenplansalud.cl/faq" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/img/BPlogo1.svg" />
      </Head>
      <div className={`${bebas.className} bg-white w-full text-[#0c369c] shadow-md`}>
        <h1 className="bg-gradient-to-b from-[#d8ecff] via-white to-[#d8ecff] text-4xl font-bold text-center mb-8 py-5 animate-fade-down animate-once animate-duration-[3000ms] animate-delay-200">
          Preguntas Frecuentes
        </h1>
        <div className="space-y-6">
          <div className="px-8 animate-fade-down animate-once animate-duration-[3000ms] animate-delay-700">
            <h2 className="text-2xl font-semibold">1. ¿Qué es Buen Plan?</h2>
            <p className="text-lg">
              Buen Plan es una plataforma gratuita que te permite comparar,
              cotizar y elegir el mejor plan de salud de todas las Isapres de
              Chile.
            </p>
          </div>
          <div className="bg-[#e6f3fe] px-8 py-2 animate-fade-down animate-once animate-duration-[3000ms] animate-delay-[1200ms]">
            <h2 className="text-2xl font-semibold">
              2. ¿Cómo puedo utilizar los servicios?
            </h2>
            <p className="text-lg">
              Solo necesitas completar el formulario con tu información, y uno de
              nuestros ejecutivos se pondrá en contacto contigo para brindarte la
              asesoría personalizada.
            </p>
          </div>
          <div className="px-8 animate-fade-down animate-once animate-duration-[3000ms] animate-delay-[1700ms]">
            <h2 className="text-2xl font-semibold">
              3. ¿Es necesario pagar para usar la plataforma?
            </h2>
            <p className="text-lg">
              No, el uso de la plataforma es completamente gratuito. No tienes que
              pagar nada por cotizar o recibir asesoría.
            </p>
          </div>
          <div className="bg-[#e6f3fe] px-8 py-2 animate-fade-down animate-once animate-duration-[3000ms] animate-delay-[2200ms]">
            <h2 className="text-2xl font-semibold">
              4. ¿Recibiré asesoría personalizada?
            </h2>
            <p className="text-lg">
              Sí, nuestros ejecutivos capacitados te ofrecerán asesoría
              personalizada para ayudarte a elegir el plan más adecuado para ti y
              tu familia.
            </p>
          </div>
          <div className="px-8 animate-fade-down animate-once animate-duration-[3000ms] animate-delay-[2700ms]">
            <h2 className="text-2xl font-semibold">
              5. ¿Puedo cambiar de plan si ya cuento con uno?
            </h2>
            <p className="text-lg">
              Si ya tienes un plan de salud, puedes comparar otras opciones para
              ver si existe uno que se ajuste mejor a tus necesidades y
              presupuesto.
            </p>
          </div>
        </div>
        <div className="animate-fade-down animate-once animate-duration-[3000ms] animate-delay-[2700ms]"><Contact/></div>
      </div>
      <div className="bg-white pt-8"><About/></div>
      <div className={`${bebas.className} grid w-full items-center justify-items-center h-auto text-4xl bg-gradient-to-b to-[#2694e7] from-[#96c0e1] p-4 shadow-md`}>
        <p className='h-fit items-center justify-items-center text-center'>¿Aun Tienes dudas?</p>
        <p className='h-fit items-center justify-items-center text-center text-xl'>¡Contactanos con el boton de whatsapp en la esquina inferior derecha!</p>
      </div>
      <WspButton/>
    </>
  );
};

export default PreguntasFrecuentes;