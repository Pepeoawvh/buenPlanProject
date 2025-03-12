import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

/**
 * Componente Banner - Un carrusel simple y funcional con transiciones muy suaves
 * @param {Object} props - Propiedades del componente
 * @param {string[]} props.images - Array de URLs de imágenes
 * @param {number} props.interval - Intervalo en ms para el cambio de imagen
 */
const Banner = ({
  images = [
    '/img/banner3.svg',
    '/img/Gratuito.svg',
    '/img/Servicio.svg',
    '/img/Certificado.svg',
  ],
  interval = 8000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  // Función para avanzar a la siguiente imagen
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Efecto para manejar el temporizador automático
  useEffect(() => {
    timerRef.current = setTimeout(nextSlide, interval);
    
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [currentIndex, interval, images.length]);

  return (
    // Usamos la clase de altura responsiva definida en globals.css
    <div className="relative w-full carousel-height overflow-hidden">
      {/* Contenedor principal con la transición ultra lenta de globals.css */}
      <div 
        className="flex w-full h-full carousel-transition-extra-slow"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className="min-w-full flex-shrink-0 flex justify-center items-center"
          >
            {/* Aumentamos el tamaño del contenedor de la imagen */}
            <div className="w-full h-full flex justify-center items-center">
              <div className="relative w-full h-full max-w-5xl flex justify-center items-center">
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  width={1200}  // Mantenemos dimensiones grandes
                  height={800}
                  className="h-auto w-auto max-h-full max-w-full object-contain"
                  priority={index === currentIndex}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Indicadores de posición */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              clearTimeout(timerRef.current);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-blue-600 w-5' 
                : 'bg-gray-400 hover:bg-gray-600'
            }`}
            aria-label={`Ir a diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;