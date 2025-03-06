"use client";
import React, { useState, useRef, memo } from "react";
import { firestoreDB } from "../../firebase/config.js";
import { bebas } from "../../ui/fonts.js";
import styles from "../styles/animations.module.css";
import emailjs from "emailjs-com";
import { serverTimestamp } from "firebase/firestore";
import { FaUser, FaIdCard, FaEnvelope, FaCalendarAlt, FaPhoneAlt, FaHospital, FaClinicMedical } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    rut: "",
    email: "",
    edad: "",
    telefono: "",
    institucion: "",
    clinica: "",
    estado: "No contactado", // Estado por defecto
  });

  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef();

  // Función validarRUT sin cambios
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
    let dvCalculado =
      dvEsperado === 11 ? "0" : dvEsperado === 10 ? "K" : dvEsperado.toString();
    return dvCalculado === dv;
  };

  // Función handleSubmit sin cambios
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validarRUT(formData.rut)) {
      setError("Formato de RUT debe ser xxxxxxxx-x sin puntos");
      return;
    } else {
      setError("");
      try {
        const docRef = await firestoreDB.collection("formubuenplan").add({
          ...formData,
          createdAt: serverTimestamp(),
        });
        console.log("Formulario enviado", docRef.id);
        emailjs
          .sendForm(
            "service_d4dgdka",
            "template_40p4jtg",
            form.current,
            "An7izEtXbf95R0oIn"
          )
          .then(
            (result) => {
              console.log("Email enviado:", result.text);
              alert("¡Formulario enviado exitosamente!");
              setIsSubmitted(true);
            },
            (error) => {
              console.log("Error al enviar el email:", error.text);
              alert("Error al enviar el formulario. Por favor, inténtalo de nuevo.");
            }
          );
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
        alert("Error al enviar el formulario. Por favor, inténtalo de nuevo.");
      }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-8 md:py-16 relative overflow-hidden text-[#143899]"
    >
      {/* Fondo decorativo */}
      <div className="absolute top-20 right-0 w-32 md:w-64 h-32 md:h-64 bg-[#2694e7]/10 blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-0 w-32 md:w-80 h-32 md:h-80 bg-[#143899]/10 blur-3xl -z-10"></div>
      
      <div className=" mx-auto md:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Encabezado del formulario */}
          <div className="bg-gradient-to-r from-[#2694e7] to-[#143899] p-4 md:p-6 text-white text-center">
            <h2 className={`${bebas.className} text-3xl md:text-4xl`}>
              ASESORÍA 100% GRATUITA
            </h2>
            <div className="h-1 w-24 md:w-32 bg-white mx-auto mt-2"></div>
            <p className="mt-2 text-sm md:text-base">
              Completa el formulario y te contactaremos a la brevedad
            </p>
          </div>

          {!isSubmitted ? (
            <div className="bg-white shadow-md">
              <form
                ref={form}
                className="p-4 md:p-8 space-y-5"
                onSubmit={handleSubmit}
              >
                {/* Campo Nombre */}
                <div className="space-y-1">
                  <div className="flex items-center border border-[#2694e7]/30 focus-within:border-[#2694e7] focus-within:ring-2 focus-within:ring-[#2694e7]/20">
                    <span className="px-3 text-[#143899]">
                      <FaUser />
                    </span>
                    <input
                      className="w-full p-2.5 md:p-3 border-0 focus:ring-0 focus:outline-none"
                      type="text"
                      id="nombre"
                      name="nombre"
                      placeholder="Ingresa tu nombre completo"
                      required
                      autoComplete="name"
                      value={formData.nombre}
                      onChange={handleChange}
                      aria-label="Nombre"
                    />
                  </div>
                </div>

                {/* Campo RUT */}
                <div className="space-y-1">
                  <div className="flex items-center border border-[#2694e7]/30 focus-within:border-[#2694e7] focus-within:ring-2 focus-within:ring-[#2694e7]/20">
                    <span className="px-3 text-[#143899]">
                      <FaIdCard />
                    </span>
                    <input
                      className="w-full p-2.5 md:p-3 border-0 focus:ring-0 focus:outline-none"
                      type="text"
                      id="rut"
                      name="rut"
                      placeholder="Rut: ej: 12345678-9"
                      required
                      pattern="^[0-9]+[-][0-9kK]{1}$"
                      autoComplete="off"
                      value={formData.rut}
                      onChange={handleChange}
                      aria-label="RUT"
                    />
                  </div>
                  {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                </div>

                {/* Campo Email */}
                <div className="space-y-1">
                  <div className="flex items-center border border-[#2694e7]/30 focus-within:border-[#2694e7] focus-within:ring-2 focus-within:ring-[#2694e7]/20">
                    <span className="px-3 text-[#143899]">
                      <FaEnvelope />
                    </span>
                    <input
                      className="w-full p-2.5 md:p-3 border-0 focus:ring-0 focus:outline-none"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="tu@email.com"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      aria-label="Email"
                    />
                  </div>
                </div>

                {/* Campo Edad */}
                <div className="space-y-1">
                  <div className="flex items-center border border-[#2694e7]/30 focus-within:border-[#2694e7] focus-within:ring-2 focus-within:ring-[#2694e7]/20">
                    <span className="px-3 text-[#143899]">
                      <FaCalendarAlt />
                    </span>
                    <input
                      className="w-full p-2.5 md:p-3 border-0 focus:ring-0 focus:outline-none"
                      type="number"
                      id="edad"
                      name="edad"
                      placeholder="Ingresa tu edad"
                      required
                      min="18"
                      max="90"
                      autoComplete="off"
                      value={formData.edad}
                      onChange={handleChange}
                      aria-label="Edad"
                    />
                  </div>
                </div>

                {/* Campo Teléfono */}
                <div className="space-y-1">
                  <div className="flex items-center border border-[#2694e7]/30 focus-within:border-[#2694e7] focus-within:ring-2 focus-within:ring-[#2694e7]/20">
                    <span className="px-3 text-[#143899]">
                      <FaPhoneAlt />
                    </span>
                    <input
                      className="w-full p-2.5 md:p-3 border-0 focus:ring-0 focus:outline-none"
                      type="tel"
                      id="telefono"
                      name="telefono"
                      placeholder="Ej: +56 9 1234 5678"
                      required
                      autoComplete="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                      aria-label="Teléfono"
                    />
                  </div>
                </div>

                {/* Campo Institución */}
                <div className="space-y-1">
                  <div className="flex items-center border border-[#2694e7]/30 focus-within:border-[#2694e7] focus-within:ring-2 focus-within:ring-[#2694e7]/20">
                    <span className="px-3 text-[#143899]">
                      <FaHospital />
                    </span>
                    <select
                      className={`w-full p-2.5 md:p-3 border-0 focus:ring-0 focus:outline-none ${formData.institucion === '' ? 'text-gray-400' : 'text-gray-800'}`}
                      id="institucion"
                      name="institucion"
                      value={formData.institucion}
                      onChange={handleChange}
                      required
                      aria-label="Institución"
                    >
                      <option value="" disabled>
                        Selecciona tu institución actual
                      </option>
                      <option value="Fonasa">Fonasa</option>
                      <option value="Banmédica">Banmédica</option>
                      <option value="Colmena">Colmena</option>
                      <option value="Consalud">Consalud</option>
                      <option value="Cruz Blanca">Cruz Blanca</option>
                      <option value="Nueva MasVida">Nueva MasVida</option>
                      <option value="Vida Tres">Vida Tres</option>
                      <option value="Esencial">Esencial</option>
                    </select>
                  </div>
                </div>

                {/* Campo Clínica */}
                <div className="space-y-1">
                  <div className="flex items-center border border-[#2694e7]/30 focus-within:border-[#2694e7] focus-within:ring-2 focus-within:ring-[#2694e7]/20">
                    <span className="px-3 text-[#143899]">
                      <FaClinicMedical />
                    </span>
                    <input
                      className="w-full p-2.5 md:p-3 border-0 focus:ring-0 focus:outline-none"
                      type="text"
                      id="clinica"
                      name="clinica"
                      placeholder="Indica tu clínica preferida"
                      required
                      autoComplete="off"
                      value={formData.clinica}
                      onChange={handleChange}
                      aria-label="Clínica de Preferencia"
                    />
                  </div>
                </div>

                {/* Botón de envío */}
                <div className="pt-4">
                  <button
                    className={`${bebas.className} ${styles.zoomImage} w-full bg-gradient-to-r from-[#2694e7] to-[#143899] shadow-md py-3 px-6 text-xl text-white hover:from-[#143899] hover:to-[#2694e7] transition-all duration-300`}
                    type="submit"
                  >
                    SOLICITAR ASESORÍA
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-white p-6 shadow-md">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className={`${bebas.className} text-2xl text-[#143899] mb-2`}>¡GRACIAS!</h3>
                <p className="text-center text-gray-600">
                  Hemos recibido tu solicitud de asesoría.<br/>
                  Te contactaremos a la brevedad.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);