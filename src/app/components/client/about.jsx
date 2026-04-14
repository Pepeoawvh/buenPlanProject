import React from "react";
import { bebas } from "../../ui/fonts.js";
import Link from "next/link";
import styles from '../styles/animations.module.css';
import { FaCheckCircle, FaHandsHelping } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className=" select-none grid justify-items-center py-8 md:py-16 relative overflow-hidden">
      {/* Fondo decorativo */}
      
      <div className="select-none mx-4">
        <div className="max-w-4xl flex-col items-center mx-auto">
          {/* Encabezado */}
          <div className="bg-gradient-to-r rounded-t-xl from-link to-primary p-4 md:p-6 text-white text-center mb-0 shadow-md">
            <h2 className={`${bebas.className} text-3xl md:text-4xl lg:text-5xl`}>
              ACERCA DE BUEN PLAN
            </h2>
            <div className="h-1 w-24 md:w-32 bg-white mx-auto mt-2"></div>
          </div>
          
          {/* Contenido principal */}
          <div className=" bg-white rounded-b-xl shadow-md p-5 md:p-8">
            {/* Servicio gratuito destacado */}
            <div className="flex items-center justify-center bg-primary-light p-3 md:p-4 mb-5 md:mb-6 border-l-4 border-accent-green">
              <FaCheckCircle className="text-accent-green text-xl md:text-2xl mr-2 md:mr-3" />
              <p className=" text-center text-base md:text-lg font-medium text-white">
                En Buen Plan brindamos un servicio 100% Gratuito
              </p>
            </div>
            
            {/* Párrafos de información */}
            <div className="space-y-4 text-secondary text-sm md:text-base lg:text-lg">
              <p className="md:text-justify">
                Somos un grupo de profesionales <strong>certificados por la Superintendencia de Salud</strong> altamente capacitados, especializados
                en asesorías, comparación y evaluación de Planes de Salud en todas las
                Isapres de Chile.
              </p>
              
              <p className="md:text-justify">
                Concentramos toda la información relevante de los planes de salud en
                un solo lugar, brindándote una herramienta fácil e intuitiva para que
                puedas comparar y seleccionar el plan que mejor se adapte a tus
                necesidades de cobertura y bienestar.
              </p>
            </div>
            
            {/* Recuadro de llamada a la acción */}
            <div className="mt-6 md:mt-8 bg-white p-4 md:p-6  rounded-xl">
              <div className="flex flex-col items-center space-y-3 md:space-y-4">
                <FaHandsHelping className="text-accent-green text-3xl md:text-4xl" />
                <p className="text-center text-secondary text-base md:text-lg font-medium">
                  Para usar nuestro servicio solo debes
                </p>
                <Link href="#contact" className="w-full sm:w-auto">
                  <button className={`${bebas.className} ${styles.zoomImage} tracking-widest w-full sm:w-auto bg-gradient-to-r from-accent-green to-link shadow-md border-2 border-white py-2 px-6 md:px-8 rounded-full text-lg md:text-xl text-white font-bold hover:from-link hover:to-accent-green transition-all duration-300`}>
                    COMPLETAR EL FORMULARIO
                  </button>
                </Link>
                <p className="text-center text-secondary text-sm md:text-base mt-1 md:mt-2">
                  Uno de nuestros <strong>ejecutivos certificados</strong> se pondrá en contacto contigo a la brevedad para ofrecerte una asesoría personalizada y cercana.
                </p>
              </div>
            </div>
            
            {/* Características destacadas */}
            <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              <div className="bg-[#e9f5ff] p-3 md:p-4 text-center">
                <div className="h-2 bg-[#2694e7] w-1/2 mx-auto mb-2 md:mb-3"></div>
                <h3 className={`${bebas.className} text-lg md:text-xl text-[#143899]`}>EXPERTOS CERTIFICADOS</h3>
                <p className="text-xs md:text-sm mt-1 md:mt-2 text-[#004aad]">Asesoría por profesionales acreditados</p>
              </div>
              
              <div className="bg-[#e9f5ff] p-3 md:p-4 text-center">
                <div className="h-2 bg-[#2694e7] w-1/2 mx-auto mb-2 md:mb-3"></div>
                <h3 className={`${bebas.className} text-lg md:text-xl text-[#143899]`}>COMPARATIVA COMPLETA</h3>
                <p className="text-xs md:text-sm mt-1 md:mt-2 text-[#004aad]">Análisis de todos los planes disponibles</p>
              </div>
              
              <div className="bg-[#e9f5ff] p-3 md:p-4 text-center">
                <div className="h-2 bg-[#2694e7] w-1/2 mx-auto mb-2 md:mb-3"></div>
                <h3 className={`${bebas.className} text-lg md:text-xl text-[#143899]`}>SERVICIO GRATUITO</h3>
                <p className="text-xs md:text-sm mt-1 md:mt-2 text-[#004aad]">Sin costos ni compromisos para ti</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;