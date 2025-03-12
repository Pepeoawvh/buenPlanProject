"use client";

import React from 'react';

/**
 * Componente para renderizar HTML de forma segura
 * Acepta tanto la prop 'content' como 'htmlContent' para mantener compatibilidad
 */
const RenderHTML = ({ content, htmlContent }) => {
  // Acepta tanto 'content' como 'htmlContent' para mantener compatibilidad
  const htmlToRender = content || htmlContent || '';
  
  if (!htmlToRender || htmlToRender === '<p></p>') {
    return null;
  }
  
  return (
    <div 
      className="blog-content"
      dangerouslySetInnerHTML={{ __html: htmlToRender }}
    />
  );
};

export default RenderHTML;