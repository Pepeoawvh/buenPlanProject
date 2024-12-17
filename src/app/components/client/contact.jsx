"use client";
import React, { useState, useRef } from "react";
import { firestoreDB } from "../../firebase/config.js";
import { bebas } from "../../ui/fonts.js";
import styles from "../styles/animations.module.css";
import emailjs from "emailjs-com";
import { serverTimestamp } from "firebase/firestore";
import { questrial } from "../../ui/fonts.js";

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
          createdAt: serverTimestamp(), // Agrega la fecha de creación
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
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        alert("¡Formulario enviado exitosamente!");
        setIsSubmitted(true);
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
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
      className="grid justify-items-center text-center bg-[#e9f5ff] text-[#0c369c]"
    >
      <h2 className={`${bebas.className} text-3xl my-4`}>
        {" "}
        Asesoría 100% Gratuita
      </h2>
      {!isSubmitted ? (
        <form
          ref={form}
          className={`${bebas.className} grid justify-items-center p-4 w-80 border-2 border-[#114ca9] rounded-md mb-4 shadow-md gap-2`}
          onSubmit={handleSubmit}
        >
          <input
            className="w-10/12 p-2 rounded-md border border-[#114ca9]"
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Nombre"
            required
            autoComplete="name"
            value={formData.nombre}
            onChange={handleChange}
          />

          <input
            className="w-10/12 p-2 rounded-md border border-[#114ca9]"
            type="text"
            id="rut"
            name="rut"
            placeholder="Rut ej: 12345678-9"
            required
            pattern="^[0-9]+[-][0-9kK]{1}$"
            autoComplete="off"
            value={formData.rut}
            onChange={handleChange}
          />
          {error && <p className="text-red-500">{error}</p>}

          <input
            className="w-10/12 p-2 rounded-md border border-[#114ca9]"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            className="w-10/12 p-2 rounded-md border border-[#114ca9]"
            type="number"
            id="edad"
            name="edad"
            placeholder="Edad"
            required
            min="18"
            max="90"
            autoComplete="off"
            value={formData.edad}
            onChange={handleChange}
          />

          <input
            className="w-10/12 p-2 rounded-md border border-[#114ca9]"
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="Teléfono"
            required
            autoComplete="tel"
            value={formData.telefono}
            onChange={handleChange}
          />

          <select
            className={`w-10/12 p-2 rounded-md border border-[#114ca9] ${formData.institucion === '' ? 'text-gray-400' : 'text-blue-800'}`}
            id="institucion"
            name="institucion"
            value={formData.institucion}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Selecciona tu institución actual
            </option>
            <option value="Fonasa" className="text-blue-800">Fonasa</option>
            <option value="Banmédica" className="text-blue-800">Banmédica</option>
            <option value="Colmena" className="text-blue-800">Colmena</option>
            <option value="Consalud" className="text-blue-800">Consalud</option>
            <option value="Cruz Blanca" className="text-blue-800">Cruz Blanca</option>
            <option value="Nueva MasVida" className="text-blue-800">Nueva MasVida</option>
            <option value="Vida Tres" className="text-blue-800">Vida Tres</option>
            <option value="Esencial" className="text-blue-800">Esencial</option>
          </select>

          <input
            className="w-10/12 p-2 rounded-md border border-[#114ca9]"
            type="text"
            id="clinica"
            name="clinica"
            placeholder="Clínica de Preferencia"
            required
            autoComplete="off"
            value={formData.clinica}
            onChange={handleChange}
          />

          <button
            className={`${bebas.className} ${styles.zoomImage}  bg-[#2694e7] shadow-md justify-self-center border-4  border-white py-2 px-3 rounded-full text-xl w-3/4 pt-3 text-white`}
          >
            Contactar
          </button>
        </form>
      ) : (
        <div className="p-4 w-80 border-2 border-[#114ca9] rounded-md mb-4 shadow-md bg-[#d1e7dd] text-[#0f5132]">
          <h3 className="text-xl font-bold">¡Gracias!</h3>
          <p>Te contactaremos a la brevedad.</p>
        </div>
      )}
    </section>
  );
};

export default Contact;