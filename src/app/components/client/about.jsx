 import React from "react";
import { bebas } from "../../ui/fonts.js";
import Link from "next/link";
import styles from '../styles/animations.module.css';

const About = () => {
  return (
    <section id="about" className="text-[#0c369c] ">
      <h2
        className={`border-t-4 ${bebas.className}  mt-4 pt-3 border-[#2694e7] text-center pb-2 text-3xl`}
      >
        Acerca de Buen Plan
      </h2>
      <div className="text-base p-8 text-left bg-[#e9f5ff] leading-relaxed ">
        <p className="text-center  md:text-center md:mx-40">
          <strong>En Buen Plan brindamos un servicio <br/> 100% Gratuito.</strong>
        </p>
        <p className="mt-3  md:text-justify md:mx-40 ">
          Somos un grupo de profesionales <strong>certificados por la Superintendencia de Salud</strong> altamente capacitados, especializados
          en asesorías, comparación y evaluación de Planes de Salud en todas las
          Isapres de Chile.
        </p>
        <br/>
        <p className=" md:text-justify md:mx-40">
          Concentramos toda la información relevante de los planes de salud en
          un solo lugar, brindándote una herramienta fácil e intuitiva para que
          puedas comparar y seleccionar el plan que mejor se adapte a tus
          necesidades de cobertura y bienestar.
        </p>
      </div>
      {/* parrafo con link al formulario */}
      <div className="text-center text-[#0c369c] mt-4 p-8 shadow-lg leading-7 ">
        <p>
          <strong>Para usar nuestro servicio solo debes </strong>
        </p>
        <Link href="#contact">
          <button className={`${bebas.className} ${styles.zoomImage}  bg-[#2694e7] shadow-md justify-self-center border-4  border-white py-2 px-3 my-2 rounded-full text-xl w-3/4 pt-3 text-white`}>
            Completar el formulario
          </button>
        </Link>
        <p>
          
            Uno de nuestros <strong> ejecutivos certificados </strong> se
            pondrá en contacto contigo a la brevedad para ofrecerte una asesoría
            personalizada y cercana.
          
        </p>
      </div>
    </section>
  );
};

export default About;
