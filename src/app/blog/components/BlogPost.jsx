"use client";

import React from 'react';

// Componente para renderizar HTML de forma segura
export const RenderHTML = ({ htmlContent }) => {
  if (!htmlContent) {
    return null;
  }
  
  return <div className="blog-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

// Este componente ya no se usa directamente, pero se mantiene por compatibilidad
export default function BlogPost({ post }) {
  if (!post) return null;
  
  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      {post.subtitle && <h2>{post.subtitle}</h2>}
      {post.imageUrl && (
        <div className="featured-image">
          <img src={post.imageUrl} alt={post.title} />
        </div>
      )}
      <RenderHTML htmlContent={post.content} />
    </div>
  );
}