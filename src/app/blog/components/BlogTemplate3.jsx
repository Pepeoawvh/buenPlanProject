"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RenderHTML from './RenderHTML';

/**
 * Plantilla visual para blog con secciones
 * Características:
 * - Diseño con secciones definidas
 * - Optimizado para contenido con múltiples apartados
 * - Soporte para imágenes en cada sección
 * - Ideal para artículos largos y tutoriales
 */
export default function BlogTemplate3({ post }) {
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

  // Asegurar que las secciones son un array
  const sections = Array.isArray(post.sections) ? post.sections : [];

  // Temas relacionados como array
  const getRelatedTopics = () => {
    if (!post.relatedTopics) return [];
    
    if (Array.isArray(post.relatedTopics)) {
      return post.relatedTopics.map(topic => typeof topic === 'string' ? topic : topic.title || '');
    }
    
    if (typeof post.relatedTopics === 'string') {
      return post.relatedTopics.split(',').map(topic => topic.trim()).filter(Boolean);
    }
    
    return [];
  };

  const relatedTopics = getRelatedTopics();

  return (
    <article className="px-4 py-8 bg-white text-blue-900">
      {/* Cabecera */}
      <header className="grid mb-10">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        
        {post.subtitle && (
          <p className="text-xl text-gray-700 mb-4">{post.subtitle}</p>
        )}
        
        <div className="flex items-center text-gray-500 mb-6">
          <time dateTime={post.createdAt instanceof Date ? post.createdAt.toISOString() : ''}>
            {formattedDate}
          </time>
        </div>
        
        {post.imageUrl && (
          <div className="relative justify-self-center center w-3/4 h-[670px] rounded-lg overflow-hidden mb-4">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={1000}
              height={800}
              style={{ objectFit: 'cover' }}
              priority
              className="rounded-lg"
            />
          </div>
        )}
        
        {post.imageCaption && (
          <p className="text-sm text-gray-500 text-center italic mb-6">
            {post.imageCaption}
          </p>
        )}
      </header>

      {/* Introducción */}
      {post.content && (
        <div className="prose max-w-none mb-8">
          <RenderHTML content={post.content} />
        </div>
      )}

      {/* Secciones */}
      {sections.length > 0 && (
        <div className="space-y-10">
          {sections.map((section, index) => (
            <section key={index} className="border-b border-gray-200 pb-8 mb-8 last:border-0">
              {section.title && (
                <h2 className="text-3xl font-semibold mb-4">{section.title}</h2>
              )}
              
              <div className="flex flex-col lg:flex-row gap-6 items-start">
                <div className={`prose max-w-none ${section.imageUrl ? 'lg:w-3/5' : 'w-full'}`}>
                  <RenderHTML content={section.content || ''} />
                </div>
                
                {section.imageUrl && (
                  <div className="lg:w-2/5 w-full">
                    <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                      <Image 
                        src={section.imageUrl}
                        alt={section.title || `Sección ${index + 1}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg"
                      />
                    </div>
                    {section.imageCaption && (
                      <p className="text-sm text-gray-500 text-center mt-2 italic">
                        {section.imageCaption}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      )}

      {/* Conclusión */}
      {post.conclusion && (
        <div className="mt-8 mb-8">
          <h2 className="text-3xl font-semibold mb-4">Conclusión</h2>
          <div className="prose max-w-none">
            <RenderHTML content={post.conclusion} />
          </div>
        </div>
      )}

      {/* Temas relacionados */}
      {relatedTopics.length > 0 && (
        <div className="mt-10 pt-6 border-t border-gray-200">
          <h3 className="text-2xl font-semibold mb-3">Temas relacionados</h3>
          <div className="flex flex-wrap gap-2">
            {relatedTopics.map((topic, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Pie de artículo */}
      <footer className="mt-12 pt-6 border-t border-gray-200">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-2">¿Te interesa saber más sobre este tema?</h3>
          <p className="text-gray-700 mb-4">
            Si necesitas información personalizada sobre planes de salud, nuestros asesores expertos 
            pueden ayudarte a encontrar la mejor opción para ti.
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