"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RenderHTML from './RenderHTML';

/**
 * Plantilla de blog compacta informativa
 * Características:
 * - Diseño enfocado en la legibilidad
 * - Puntos clave destacados
 * - Estructura minimalista para información directa
 */
export default function BlogTemplate4({ post }) {
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
    
  // Función para manejar los puntos clave de forma segura
  const renderKeyPoints = () => {
    // Si no hay keyPoints, salir
    if (!post.keyPoints || post.keyPoints.length === 0) {
      return null;
    }

    return (
      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Puntos clave</h2>
        <ul className="space-y-3">
          {post.keyPoints.map((point, index) => (
            <li key={index} className="flex">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2694e7] text-white flex items-center justify-center mr-3">
                {index + 1}
              </div>
              <div>
                {typeof point === 'string' ? (
                  <p className="font-medium text-gray-900">{point}</p>
                ) : (
                  <>
                    <p className="font-medium text-gray-900">{point.title || ''}</p>
                    {point.description && (
                      <p className="text-gray-600 text-sm mt-1">{point.description}</p>
                    )}
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 bg-white">
      {/* Cabecera compacta */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{post.title}</h1>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 mb-6">
          <p className="text-xl mb-2 sm:mb-0">{post.subtitle}</p>
          <time className="text-sm">{formattedDate}</time>
        </div>
        {post.imageUrl && (
          <div className="relative w-full h-[300px] rounded-md overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="rounded-md"
            />
          </div>
        )}
        {post.imageCaption && (
          <p className="text-sm text-gray-500 mt-2 italic">
            {post.imageCaption}
          </p>
        )}
      </header>

      {/* Puntos clave - renderizados de forma segura */}
      {renderKeyPoints()}

      {/* Contenido principal */}
      <div className="prose max-w-none">
        <RenderHTML content={post.content} />
      </div>

      {/* Pie de artículo */}
      <footer className="mt-12 pt-6 border-t border-gray-200">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">¿Necesitas asesoría personalizada?</h3>
          <p className="text-gray-600 mb-4">
            Nuestros expertos certificados por la Superintendencia de Salud te ayudarán a encontrar 
            el plan que mejor se adapte a tus necesidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/blog"
              className="border border-[#2694e7] text-[#2694e7] px-6 py-2 rounded-full hover:bg-blue-50 transition-colors text-center"
            >
              Ver más artículos
            </Link>
            <Link 
              href="/#contact" 
              className="bg-[#2694e7] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors text-center"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </footer>
    </article>
  );
}