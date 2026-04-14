import React, { useState, useEffect, memo } from 'react';
import Image from 'next/image';
import styles from '../styles/carrusel.module.css';

const Isapres = ({ interval = 4000 }) => {
  const images = [
    '/img/isap1.svg',
    '/img/isap2.svg',
    '/img/isap3.svg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  return (
    <div className={`aspect-auto select-none ${styles.carousel}`}>
      <div
        className={styles.carouselInner}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.carouselItem}>
            <Image
              src={image}
              alt={`Logo de Isapre de Chile ${index + 1}`}
              fill
              className={styles.image}
              loading="lazy" // Carga diferida de imágenes
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Isapres);