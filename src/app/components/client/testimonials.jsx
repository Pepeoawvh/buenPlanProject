import React from "react";
import { bebas } from "../../ui/fonts.js";

const Testimonials = () => {
  return (
    <section id="testimonios" className="text-[#0c369c] text-xl mt-8">
      <h2
        className={`border-b-4 ${bebas.className} border-b-[#2694e7] text-center pb-2 text-3xl `}
      >
        Testimonios de nuestros clientes
      </h2>

      <div className="grid my-8 mx-3 gap-5 auto-rows-min text-primary-900 text-base justify-items-center  leading-relaxed  md:text-center md:mx-40">
        <div className="grid border w-[90%] p-6 text-center rounded-xl shadow-md bg-[#e9f5ff] ">
          <p>
            &quot;La asesoría de Buen Plan fue muy rápida y clara. En
            pocos minutos me explicaron las opciones que mejor se adaptaban a mis
            necesidades. Quedé satisfecha y se lo recomendé a varios amigos.&quot;
          </p>
          <p className="text-sm justify-self-end mt-2">
            - Laura, Nutricionista, Las condes.
          </p>
        </div>
        <div className="grid border w-[90%] p-6 text-center rounded-xl shadow-md bg-[#e9f5ff]">
          <p>
            &quot;Como mamá, siempre busco lo mejor para mi familia,
            especialmente cuando se trata de salud. Me ayudaron a encontrar
            opciones de cobertura según mis necesidades. El proceso fue rápido y personalizado.
            Ahora tengo un plan que conozco bien y en el que puedo confiar. Incluso se lo
            recomendé a otras amigas que son mamás.&quot;
          </p>
          <p className="text-sm justify-self-end mt-2">
            - Isabel, Mamá de dos niños pequeños, Providencia.
          </p>
        </div>
        <div className="grid border w-[90%] p-6 text-center rounded-xl shadow-md bg-[#e9f5ff]">
          <p>
            &quot;Vivo en zona rural y siempre pensé que encontrar un buen
            plan de salud para mi familia sería complicado. La información que me dieron fue clara, y aunque
            estamos lejos de la capital, recibí atención rápida y personalizada. Ahora conozco muy bien mi plan y me siento seguro. ¡Se los recomendé a amigos de la
            región y también quedaron muy contentos!&quot;
          </p>
          <p className="text-sm justify-self-end mt-2">
            - Roberto, Cliente de Región del Libertador Bernardo O&apos;Higgins.
          </p>
        </div>
        <div className="grid border w-[90%] p-6 text-center rounded-xl shadow-md bg-[#e9f5ff]">
          <p>
            &quot;La asesoría fue rápida y clara. Me ayudaron a encontrar el plan
            perfecto para mi familia en minutos. Muy satisfecho con el
            servicio.&quot;
          </p>
          <p className="text-sm justify-self-end mt-2">
            - Felipe, Médico General, Las Condes.
          </p>
        </div>
        <div className="grid border w-[90%] p-6 text-center rounded-xl shadow-md bg-[#e9f5ff]">
          <p>
            &quot;Muy contenta con la rapidez y claridad de la asesoría. Todo el
            proceso fue muy eficiente y sin complicaciones.&quot;
          </p>
          <p className="text-sm justify-self-end mt-2">
            - Marta, Psicóloga, Santiago
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;