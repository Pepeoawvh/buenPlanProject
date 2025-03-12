import React from "react";
import { bebas } from "../../ui/fonts.js";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section id="testimonios" className="grid justify-items-center py-8 md:py-16 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute top-20 right-0 w-32 md:w-64 h-32 md:h-64 bg-[#2694e7]/10 blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-0 w-32 md:w-80 h-32 md:h-80 bg-[#143899]/10 blur-3xl -z-10"></div>
      
      <div className="mx-4 md:mx-auto md:max-w-5xl lg:max-w-6xl">
        {/* Encabezado */}
        <div className="bg-gradient-to-r rounded-t-xl from-[#2694e7] to-[#143899] p-4 md:p-6 text-white text-center mb-6 md:mb-10 max-w-4xl mx-auto">
          <h2 className={`${bebas.className} text-3xl md:text-4xl lg:text-5xl`}>
            TESTIMONIOS DE CLIENTES
          </h2>
          <div className="h-1 w-24 md:w-32 bg-white mx-auto mt-2"></div>
          <p className="mt-2 text-sm md:text-base">
            Experiencias reales de personas que confiaron en nosotros
          </p>
        </div>
        
        {/* Contenedor de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {/* Testimonio 1 */}
          <div className="bg-[#e9f5ff] p-4 md:p-6 rounded-lg shadow-md border-l-4 border-[#2694e7] relative">
            <FaQuoteLeft className="absolute top-3 left-3 text-[#2694e7]/20 text-xl md:text-2xl" />
            <div className="pl-5 pr-3">
              <p className="text-[#004aad] text-sm md:text-base mb-4">
                &ldquo;La asesoría de Buen Plan fue muy rápida y clara. En
                pocos minutos me explicaron las opciones que mejor se adaptaban a mis
                necesidades. Quedé satisfecha y se lo recomendé a varios amigos.&rdquo;
              </p>
              <p className="text-right text-sm font-medium text-[#143899]">
                — Laura, Nutricionista, Las Condes
              </p>
            </div>
            <FaQuoteRight className="absolute bottom-3 right-3 text-[#2694e7]/20 text-xl md:text-2xl" />
          </div>
          
          {/* Testimonio 2 */}
          <div className="bg-[#e9f5ff] p-4 md:p-6 rounded-lg shadow-md border-l-4 border-[#2694e7] relative">
            <FaQuoteLeft className="absolute top-3 left-3 text-[#2694e7]/20 text-xl md:text-2xl" />
            <div className="pl-5 pr-3">
              <p className="text-[#004aad] text-sm md:text-base mb-4">
                &ldquo;Como mamá, siempre busco lo mejor para mi familia,
                especialmente cuando se trata de salud. Me ayudaron a encontrar
                opciones de cobertura según mis necesidades. El proceso fue rápido y personalizado.&rdquo;
              </p>
              <p className="text-right text-sm font-medium text-[#143899]">
                — Isabel, Mamá de dos niños pequeños, Providencia
              </p>
            </div>
            <FaQuoteRight className="absolute bottom-3 right-3 text-[#2694e7]/20 text-xl md:text-2xl" />
          </div>
          
          {/* Testimonio 3 */}
          <div className="bg-[#e9f5ff] p-4 md:p-6 rounded-lg shadow-md border-l-4 border-[#2694e7] relative">
            <FaQuoteLeft className="absolute top-3 left-3 text-[#2694e7]/20 text-xl md:text-2xl" />
            <div className="pl-5 pr-3">
              <p className="text-[#004aad] text-sm md:text-base mb-4">
                &ldquo;Vivo en zona rural y siempre pensé que encontrar un buen
                plan de salud para mi familia sería complicado. La información que me dieron fue clara, y aunque
                estamos lejos de la capital, recibí atención rápida y personalizada.&rdquo;
              </p>
              <p className="text-right text-sm font-medium text-[#143899]">
                — Roberto, Cliente de Región del Libertador B. O&apos;Higgins
              </p>
            </div>
            <FaQuoteRight className="absolute bottom-3 right-3 text-[#2694e7]/20 text-xl md:text-2xl" />
          </div>
          
          {/* Testimonio 4 */}
          <div className="bg-[#e9f5ff] p-4 md:p-6 rounded-lg shadow-md border-l-4 border-[#2694e7] relative">
            <FaQuoteLeft className="absolute top-3 left-3 text-[#2694e7]/20 text-xl md:text-2xl" />
            <div className="pl-5 pr-3">
              <p className="text-[#004aad] text-sm md:text-base mb-4">
                &ldquo;La asesoría fue rápida y clara. Me ayudaron a encontrar el plan
                perfecto para mi familia en minutos. Muy satisfecho con el
                servicio.&rdquo;
              </p>
              <p className="text-right text-sm font-medium text-[#143899]">
                — Felipe, Médico General, Las Condes
              </p>
            </div>
            <FaQuoteRight className="absolute bottom-3 right-3 text-[#2694e7]/20 text-xl md:text-2xl" />
          </div>
          
          {/* Testimonio 5 */}
          <div className="md:col-span-2 bg-[#e9f5ff] p-4 md:p-6 rounded-lg shadow-md border-l-4 border-[#2694e7] relative mx-auto max-w-lg">
            <FaQuoteLeft className="absolute top-3 left-3 text-[#2694e7]/20 text-xl md:text-2xl" />
            <div className="pl-5 pr-3">
              <p className="text-[#004aad] text-sm md:text-base mb-4 text-center">
                &ldquo;Muy contenta con la rapidez y claridad de la asesoría. Todo el
                proceso fue muy eficiente y sin complicaciones.&rdquo;
              </p>
              <p className="text-center text-sm font-medium text-[#143899]">
                — Marta, Psicóloga, Santiago
              </p>
            </div>
            <FaQuoteRight className="absolute bottom-3 right-3 text-[#2694e7]/20 text-xl md:text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;