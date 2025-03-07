import React from "react";
import Head from 'next/head';
import { bebas } from "../ui/fonts.js";
// import WspButton from '../components/client/WspButton.jsx';
import Contact from '../components/client/contact.jsx';
import About from '../components/client/about.jsx';
import { FaQuestionCircle, FaComments } from "react-icons/fa";

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
      
      {/* Wrapper con fondo personalizado */}
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
        <section className="grid justify-items-center relative overflow-hidden py-8 md:py-12">
          {/* Fondo decorativo */}
          <div className="absolute top-20 right-0 w-32 md:w-64 h-32 md:h-64 bg-[#2694e7]/10 blur-3xl -z-10"></div>
          <div className="absolute bottom-10 left-0 w-32 md:w-80 h-32 md:h-80 bg-[#143899]/10 blur-3xl -z-10"></div>
          
          <div className="mx-4 md:mx-auto md:max-w-5xl lg:max-w-6xl">
            {/* Encabezado */}
            <div className="bg-gradient-to-r from-[#2694e7] to-[#143899] p-4 md:p-6 text-white text-center mb-8 shadow-md">
              <h1 className={`${bebas.className} text-3xl md:text-4xl lg:text-5xl animate-fade-down animate-once animate-duration-[1000ms]`}>
                PREGUNTAS FRECUENTES
              </h1>
              <div className="h-1 w-24 md:w-32 bg-white mx-auto mt-2"></div>
              <p className="mt-2 text-sm md:text-base animate-fade-down animate-once animate-duration-[1500ms]">
                Resolvemos tus dudas sobre nuestros servicios
              </p>
            </div>
            
            {/* Contenido de preguntas frecuentes */}
            <div className="bg-white p-4 md:p-6 shadow-md mb-8 rounded-sm">
              <div className="space-y-6">
                {/* Pregunta 1 */}
                <div className="px-4 md:px-8 pt-2 pb-4 animate-fade-down animate-once animate-duration-[1000ms] animate-delay-300">
                  <div className="flex items-start md:items-center gap-3 mb-2">
                    <FaQuestionCircle className="text-[#2694e7] text-xl md:text-2xl flex-shrink-0 mt-1 md:mt-0" />
                    <h2 className={`${bebas.className} text-xl md:text-2xl text-[#143899]`}>
                      ¿QUÉ ES BUEN PLAN?
                    </h2>
                  </div>
                  <p className="text-base md:text-lg text-[#004aad] ml-9">
                    Buen Plan es una plataforma gratuita que te permite comparar,
                    cotizar y elegir el mejor plan de salud de todas las Isapres de
                    Chile.
                  </p>
                </div>
                
                {/* Pregunta 2 */}
                <div className="bg-[#e9f5ff] px-4 md:px-8 pt-2 pb-4 animate-fade-down animate-once animate-duration-[1000ms] animate-delay-500">
                  <div className="flex items-start md:items-center gap-3 mb-2">
                    <FaQuestionCircle className="text-[#2694e7] text-xl md:text-2xl flex-shrink-0 mt-1 md:mt-0" />
                    <h2 className={`${bebas.className} text-xl md:text-2xl text-[#143899]`}>
                      ¿CÓMO PUEDO UTILIZAR LOS SERVICIOS?
                    </h2>
                  </div>
                  <p className="text-base md:text-lg text-[#004aad] ml-9">
                    Solo necesitas completar el formulario con tu información, y uno de
                    nuestros ejecutivos se pondrá en contacto contigo para brindarte la
                    asesoría personalizada.
                  </p>
                </div>
                
                {/* Pregunta 3 */}
                <div className="px-4 md:px-8 pt-2 pb-4 animate-fade-down animate-once animate-duration-[1000ms] animate-delay-700">
                  <div className="flex items-start md:items-center gap-3 mb-2">
                    <FaQuestionCircle className="text-[#2694e7] text-xl md:text-2xl flex-shrink-0 mt-1 md:mt-0" />
                    <h2 className={`${bebas.className} text-xl md:text-2xl text-[#143899]`}>
                      ¿ES NECESARIO PAGAR PARA USAR LA PLATAFORMA?
                    </h2>
                  </div>
                  <p className="text-base md:text-lg text-[#004aad] ml-9">
                    No, el uso de la plataforma es completamente gratuito. No tienes que
                    pagar nada por cotizar o recibir asesoría.
                  </p>
                </div>
                
                {/* Pregunta 4 - Corregido el delay */}
                <div className="bg-[#e9f5ff] px-4 md:px-8 pt-2 pb-4 animate-fade-down animate-once animate-duration-[1000ms] animate-delay-[900ms]">
                  <div className="flex items-start md:items-center gap-3 mb-2">
                    <FaQuestionCircle className="text-[#2694e7] text-xl md:text-2xl flex-shrink-0 mt-1 md:mt-0" />
                    <h2 className={`${bebas.className} text-xl md:text-2xl text-[#143899]`}>
                      ¿RECIBIRÉ ASESORÍA PERSONALIZADA?
                    </h2>
                  </div>
                  <p className="text-base md:text-lg text-[#004aad] ml-9">
                    Sí, nuestros ejecutivos capacitados te ofrecerán asesoría
                    personalizada para ayudarte a elegir el plan más adecuado para ti y
                    tu familia.
                  </p>
                </div>
                
                {/* Pregunta 5 - Corregido el delay */}
                <div className="px-4 md:px-8 pt-2 pb-4 animate-fade-down animate-once animate-duration-[1000ms] animate-delay-[1100ms]">
                  <div className="flex items-start md:items-center gap-3 mb-2">
                    <FaQuestionCircle className="text-[#2694e7] text-xl md:text-2xl flex-shrink-0 mt-1 md:mt-0" />
                    <h2 className={`${bebas.className} text-xl md:text-2xl text-[#143899]`}>
                      ¿PUEDO CAMBIAR DE PLAN SI YA CUENTO CON UNO?
                    </h2>
                  </div>
                  <p className="text-base md:text-lg text-[#004aad] ml-9">
                    Si ya tienes un plan de salud, puedes comparar otras opciones para
                    ver si existe uno que se ajuste mejor a tus necesidades y
                    presupuesto.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-up animate-once animate-duration-[1500ms] animate-delay-[1200ms]">
            <Contact />
          </div>
          
          <div className="bg-white py-8">
            <About />
          </div>
          
          <div className="bg-gradient-to-r from-[#2694e7] to-[#143899] p-6 shadow-md">
            <div className="mx-4 md:mx-auto max-w-4xl text-center text-white">
              <div className="flex flex-col items-center mb-4">
                <FaComments className="text-3xl md:text-4xl mb-3" />
                <h2 className={`${bebas.className} text-2xl md:text-3xl lg:text-4xl mb-2`}>
                  ¿AÚN TIENES DUDAS?
                </h2>
              </div>
              <p className="text-base md:text-lg">
                ¡Contáctanos con el botón de WhatsApp en la esquina inferior derecha!
              </p>
            </div>
          </div>
        </section>
      </div>
      
      {/* <WspButton /> */}
    </>
  );
};

export default PreguntasFrecuentes;