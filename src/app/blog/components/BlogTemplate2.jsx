"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RenderHTML from './RenderHTML';

/**
 * Plantilla moderna para el blog
 * Características:
 * - Diseño moderno con imagen destacada
 * - Texto destacado
 * - Recursos relacionados
 */
export default function BlogTemplate2({ post }) {
  // Verificar si el post existe y tiene título
  if (!post || !post.title) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-gray-500">El artículo no está disponible.</p>
      </div>
    );
  }

  // Formatear la fecha
  const formattedDate = post.createdAt
    ? (post.createdAt instanceof Date 
      ? post.createdAt.toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })
      : new Date(post.createdAt).toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' }))
    : 'Fecha no disponible';

  // Renderizar recursos relacionados de forma segura
  const renderRelatedResources = () => {
    if (!post.relatedResources || post.relatedResources.length === 0) {
      return null;
    }
    
    return (
      <div className="mt-8 bg-slate-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Recursos relacionados</h3>
        <ul className="space-y-3">
          {post.relatedResources.map((resource, index) => (
            <li key={index} className="flex items-center">
              <div className="w-2 h-2 bg-[#2694e7] rounded-full mr-3"></div>
              {typeof resource === 'string' ? (
                <span>{resource}</span>
              ) : (
                <a 
                  href={resource.url || '#'} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#2694e7] hover:underline"
                >
                  {resource.title || "Recurso relacionado"}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Cabecera moderna con imagen lateral */}
      <header className="mb-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{post.title}</h1>
            
            {post.subtitle && (
              <p className="text-xl text-gray-700 mb-4">{post.subtitle}</p>
            )}
            
            <div className="flex items-center text-gray-500 mb-6">
              <time dateTime={post.createdAt instanceof Date ? post.createdAt.toISOString() : ''}>
                {formattedDate}
              </time>
            </div>
          </div>
          
          {post.imageUrl && (
            <div className="lg:flex-1 relative h-64 lg:h-80 rounded-lg overflow-hidden">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
                priority
                className="rounded-lg"
              />
            </div>
          )}
        </div>
        
        {post.imageCaption && (
          <p className="text-sm text-gray-500 mt-2 italic lg:text-right">
            {post.imageCaption}
          </p>
        )}
      </header>

      {/* Texto destacado si existe */}
      {post.highlightedText && (
        <div className="mb-8 p-6 bg-blue-50 border-l-4 border-[#2694e7] rounded-r-lg">
          <p className="text-lg italic text-gray-800">{post.highlightedText}</p>
        </div>
      )}

      {/* Contenido principal */}
      <div className="prose max-w-none">
        <RenderHTML content={post.content} />
      </div>

      {/* Mostrar recursos relacionados */}
      {renderRelatedResources()}

      {/* Pie de artículo con llamada a la acción */}
      <footer className="mt-12 pt-6 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">¿Te ha resultado útil este artículo?</h3>
            <p className="text-gray-600">Compártelo con quien pueda interesarle</p>
          </div>
          <div>
            <Link
              href="/blog"
              className="inline-block bg-[#2694e7] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Ver más artículos
            </Link>
          </div>
        </div>
      </footer>
    </article>
  );
}