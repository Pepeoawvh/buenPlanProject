"use client";

import React from 'react';
import Image from 'next/image';

const GoogleDriveImage = ({ src, alt, fill = false, className = "", ...props }) => {
  // Verificar si es una URL de Google Drive
  const isGoogleDriveUrl = typeof src === 'string' && 
    (src.includes('drive.google.com') || src.includes('googleusercontent.com'));
  
  // Obtener ID de archivo para Google Drive
  const getGoogleDriveDirectUrl = (url) => {
    try {
      // Para links de visualización directa
      if (url.includes('drive.google.com/file/d/')) {
        const fileId = url.match(/\/d\/([^/]+)/)?.[1];
        if (fileId) {
          return `https://drive.google.com/uc?export=view&id=${fileId}`;
        }
      }
      
      // Para links de visualización compartidos
      if (url.includes('drive.google.com/open?id=')) {
        const fileId = new URL(url).searchParams.get('id');
        if (fileId) {
          return `https://drive.google.com/uc?export=view&id=${fileId}`;
        }
      }

      // Si ya es una URL directa, devolverla tal cual
      return url;
    } catch (e) {
      console.error("Error al procesar URL de Google Drive:", e);
      return url;
    }
  };

  // Procesar URL si es necesario
  const imageUrl = isGoogleDriveUrl ? getGoogleDriveDirectUrl(src) : src;

  if (fill) {
    return (
      <div className={`relative ${className}`} style={{ width: '100%', height: props.height || '300px' }}>
        <Image
          src={imageUrl}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          {...props}
        />
      </div>
    );
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={props.width || 800}
      height={props.height || 600}
      className={className}
      {...props}
    />
  );
};

export default GoogleDriveImage;