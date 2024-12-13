import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/carrusel.module.css';

const Carrusel = ({ interval = 5000 }) => {
  const images = [
    '/img/gal1.svg',
    '/img/gal2.svg',
    '/img/gal3.svg',
    '/img/gal4.svg',
    '/img/gal5.svg',
    '/img/gal6.svg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  return (
    <div className={`aspect-auto ${styles.carousel}`}>
      <div
        className={styles.carouselInner}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.carouselItem}>
            <Image src={image} alt={`Slide ${index}`} fill className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;