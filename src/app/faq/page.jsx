import React from "react";
import { bebas } from "../ui/fonts.js";
import WspButton from '../components/client/WspButton.jsx';
import Contact from '../components/client/contact.jsx';

const PreguntasFrecuentes = () => {

  

  return (
    <div>
      <div
        className={`${bebas.className} w-full bg-white text-[#0c369c] shadow-md py-8 `}
      >
        <h1 className="text-4xl font-bold text-center mb-8 animate-fade-down animate-once animate-duration-[3000ms] animate-delay-200">
          Preguntas Frecuentes{" "}
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
          <div className="bg-[#e9faff] px-8 py-2 animate-fade-down animate-once animate-duration-[3000ms] animate-delay-[1200ms]">
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
          <div className="bg-[#e9faff] px-8 py-2 animate-fade-down animate-once animate-duration-[3000ms] animate-delay-[2200ms]">
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


      <div className={`${bebas.className} grid w-full items-center justify-items-center h-auto text-4xl bg-gradient-to-r from-[#2694e7] to-[#96c0e1] p-4 shadow-md `}>
        <span className='  h-fit items-center justify-items-center text-center'>¿Aun Tienes dudas?</span>
        <span className='  h-fit items-center justify-items-center text-center text-xl'>¡Contactanos con el boton de whatsapp en la esquina inferior izquierda!</span>
        
      </div>
      <WspButton/>
    </div>
  );
};

export default PreguntasFrecuentes;