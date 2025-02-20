import React, { useState, useEffect, memo } from 'react'
import Image from 'next/image'
import styles from '../styles/carrusel.module.css'

const Banner = ({ interval = 7000 }) => {
  const images = [
    '/img/banner3.svg',
    '/img/Gratuito.svg',
    '/img/Servicio.svg',
    '/img/Certificado.svg',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(slideInterval)
  }, [images.length, interval])

  return (
    <div className={`animate-fade animate-once animate-duration-[1300ms] animate-delay-300 grid justify-items-center ${styles.carouselBanner}`}>
      <div
        className={styles.carouselInnerBanner}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.carouselItemBanner}>
            <Image
              src={image}
              alt={`Slide ${index}`}
              width={900}
              height={400}
              className={styles.imageBanner}
              loading="lazy" // Carga diferida de imágenes
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(Banner)