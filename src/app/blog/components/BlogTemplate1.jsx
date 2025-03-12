"use client";

import React from 'react';
import Image from 'next/image';
import RenderHTML from './RenderHTML';

/**
 * Plantilla estándar de blog
 * Características:
 * - Diseño clásico y limpio para artículos de texto
 * - Imagen destacada grande al comienzo
 * - Estilo enfocado en legibilidad
 */
export default function BlogTemplate1({ post }) {
  // Verificar si el post existe y tiene todos los datos necesarios
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

  return (
    <article className="max-w-3xl mx-auto">
    {post.imageUrl && (
          <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-6">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              style={{ objectFit: 'contain' }}
              priority
              className="rounded-lg"
            />
          </div>
        )}
        
      {/* Cabecera del artículo */}
      <header className="">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        
        {post.subtitle && (
          <p className="text-xl text-gray-700 mb-4">{post.subtitle}</p>
        )}
        
        <div className="flex items-center text-gray-500 mb-6">
          <time dateTime={post.createdAt instanceof Date ? post.createdAt.toISOString() : ''}>
            {formattedDate}
          </time>
        </div>
        
        
        {post.imageCaption && (
          <p className="text-sm text-gray-500 text-center italic mb-6">
            {post.imageCaption}
          </p>
        )}
      </header>

      {/* Contenido principal */}
      <div className="prose max-w-none mt-24">
        <RenderHTML content={post.content} />
      </div>

      {/* Temas relacionados si existen */}
      {post.relatedTopics && post.relatedTopics.length > 0 && (
        <div className="mt-10 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Temas relacionados</h3>
          <div className="flex flex-wrap gap-2">
            {Array.isArray(post.relatedTopics) ? (
              post.relatedTopics.map((topic, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {typeof topic === 'string' ? topic : topic.title || 'Tema'}
                </span>
              ))
            ) : (
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                {String(post.relatedTopics)}
              </span>
            )}
          </div>
        </div>
      )}
    </article>
  );
}