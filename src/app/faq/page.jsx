import React from "react";
import { bebas } from "../ui/fonts.js";
import Contact from '../components/client/contact.jsx';
import About from '../components/client/about.jsx';
import { FaQuestionCircle, FaComments } from "react-icons/fa";

export const metadata = {
  title: 'Preguntas Frecuentes sobre Isapres y Asesoría en Salud',
  description: 'Resuelve todas tus dudas sobre Isapres, planes de salud, asesoría gratuita y cómo funciona Buen Plan. Respondemos las preguntas más frecuentes.',
  alternates: {
    canonical: 'https://www.buenplansalud.cl/faq',
  },
  openGraph: {
    url: 'https://www.buenplansalud.cl/faq',
    title: 'Preguntas Frecuentes sobre Isapres | Buen Plan',
    description: 'Resuelve todas tus dudas sobre Isapres, planes de salud y asesoría gratuita.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es Buen Plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Buen Plan es una plataforma gratuita que te permite comparar, cotizar y elegir el mejor plan de salud de todas las Isapres de Chile.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo puedo utilizar los servicios?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Solo necesitas completar el formulario con tu información, y uno de nuestros ejecutivos se pondrá en contacto contigo para brindarte la asesoría personalizada.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Es necesario pagar para usar la plataforma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, el uso de la plataforma es completamente gratuito. No tienes que pagar nada por cotizar o recibir asesoría.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Recibiré asesoría personalizada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, nuestros ejecutivos capacitados te ofrecerán asesoría personalizada para ayudarte a elegir el plan más adecuado para ti y tu familia.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo cambiar de plan si ya cuento con uno?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Si ya tienes un plan de salud, puedes comparar otras opciones para ver si existe uno que se ajuste mejor a tus necesidades y presupuesto.',
      },
    },
  ],
}

const PreguntasFrecuentes = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-white">
        <section className="grid justify-items-center relative overflow-hidden py-8 md:py-12">
          {/* Fondo decorativo removido para fondo blanco limpio */}
          
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
            
            {/* Grid: preguntas 2/3 + formulario 1/3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

              {/* Preguntas frecuentes: 2/3 */}
              <div className="md:col-span-2 bg-white shadow-md rounded-sm p-4 md:p-6 mb-8">
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
                  {/* Pregunta 4 */}
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
                  {/* Pregunta 5 */}
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

              {/* Formulario de contacto: 1/3 */}
              <div className="sticky top-24 mb-8 overflow-hidden rounded-sm shadow-md">
                <Contact compact />
              </div>

            </div>
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