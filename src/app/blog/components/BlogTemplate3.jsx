"use client";

import React from 'react';
import Link from 'next/link';
import RenderHTML from './RenderHTML';

export default function BlogTemplate3({ post }) {
  if (!post || !post.title) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-gray-500">El artículo no está disponible.</p>
      </div>
    );
  }

  const formattedDate = post.createdAt
    ? (post.createdAt instanceof Date 
      ? post.createdAt.toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })
      : new Date(post.createdAt).toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' }))
    : 'Fecha no disponible';

  const sections = Array.isArray(post.sections) ? post.sections : [];

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
  const authorName = post.author ? post.author.split('@')[0] : '';

  return (
    <div className="w-full bg-white">
    {post.imageUrl && (
            <div className="flex justify-center w-full mt-4 px-2">
              <div className="w-full max-w-full md:max-w-md">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                  loading="eager"
                />
                {post.imageCaption && (
                  <p className="text-sm text-gray-500 text-center italic mt-2 px-2">
                    {post.imageCaption}
                  </p>
                )}
              </div>
            </div>
          )}
      <article className="flex flex-col gap-8 px-4 md:px-0">
        {/* Cabecera */}
        <header className="flex flex-col gap-4">
          <h1 className="text-2xl md:text-4xl font-bold leading-tight text-blue-900 break-words px-2">
            {post.title}
          </h1>
          
          {/* {post.subtitle && (
            <p className="text-lg md:text-2xl text-gray-700 font-light px-2">
              {post.subtitle}
            </p>
          )} */}

          <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-gray-500 text-sm px-2">
            <time dateTime={post.createdAt instanceof Date ? post.createdAt.toISOString() : ''}>
              {formattedDate}
            </time>
            {authorName && <span className="sm:text-right">Por {authorName}</span>}
          </div>

          
        </header>

        {/* Introducción */}
        {post.content && (
          <div className="mt-12 w-full px-2">
            <div className="prose prose-sm md:prose-lg max-w-none text-blue-900">
              <RenderHTML content={post.content} />
            </div>
          </div>
        )}

        {/* Secciones */}
        {sections.length > 0 && (
          <div className="flex flex-col gap-8 md:gap-16">
            {sections.map((section, index) => (
              <section key={index} className="flex flex-col gap-6 border-b border-gray-200 pb-8 md:pb-12 last:border-0">
                {/* {section.title && (
                  <h2 className="text-xl md:text-3xl font-semibold text-[#2694e7] break-words px-2">
                    {section.title}
                  </h2>
                )} */}
                
                {/* Versión móvil */}
                <div className="flex flex-col gap-4 md:hidden">
                  <div className="w-full px-2">
                    <div className="prose prose-sm md:prose-lg max-w-none text-blue-900">
                      <RenderHTML content={section.content || ''} />
                    </div>
                  </div>
                  
                  {section.imageUrl && (
                    <div className="w-full flex justify-center px-2">
                      <div className="w-full max-w-full">
                        <img 
                          src={section.imageUrl}
                          alt={section.title || `Sección ${index + 1}`}
                          className="rounded-lg shadow-md w-full h-auto object-cover"
                          loading="lazy"
                        />
                        {section.imageCaption && (
                          <p className="text-sm text-gray-500 text-center italic mt-2 px-2">
                            {section.imageCaption}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Versión desktop */}
                <div className="hidden md:grid md:grid-cols-5 md:gap-8">
                  <div className={section.imageUrl ? "md:col-span-3" : "md:col-span-5"}>
                    <div className="prose md:prose-lg max-w-none text-blue-900 px-2">
                      <RenderHTML content={section.content || ''} />
                    </div>
                  </div>
                  
                  {section.imageUrl && (
                    <div className="md:col-span-2 flex justify-center">
                      <div className="w-full max-w-xs">
                        <img 
                          src={section.imageUrl}
                          alt={section.title || `Sección ${index + 1}`}
                          className="rounded-lg shadow-md w-full h-auto object-cover"
                          loading="lazy"
                        />
                        {section.imageCaption && (
                          <p className="text-sm text-gray-500 text-center italic mt-2 px-2">
                            {section.imageCaption}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* Conclusión */}
        {post.conclusion && (
          <div className="bg-blue-50 p-4 md:p-8 rounded-lg border-l-4 border-[#2694e7] mx-2 md:mx-0">
            <h2 className="text-xl md:text-3xl font-semibold mb-4 text-[#2694e7]">Conclusión</h2>
            <div className="prose prose-sm md:prose-lg max-w-none text-blue-900">
              <RenderHTML content={post.conclusion} />
            </div>
          </div>
        )}

        {/* Temas relacionados */}
        {relatedTopics.length > 0 && (
          <div className="pt-6 border-t border-gray-200 mx-2 md:mx-0">
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-blue-900">Temas relacionados</h3>
            <div className="flex flex-wrap gap-2">
              {relatedTopics.map((topic, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Pie de artículo */}
        <footer className="pt-8 border-t border-gray-200 mx-2 md:mx-0">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 md:p-8 rounded-lg shadow-sm">
            <h3 className="text-lg md:text-2xl font-semibold mb-3 text-[#2694e7]">¿Te interesa saber más sobre este tema?</h3>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Si necesitas información personalizada sobre planes de salud, nuestros asesores expertos 
              pueden ayudarte a encontrar la mejor opción para ti.
            </p>
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
              <Link
                href="/blog"
                className="border-2 border-[#2694e7] text-[#2694e7] px-4 py-2 md:px-6 md:py-3 rounded-full text-center font-medium text-sm md:text-base"
              >
                Ver más artículos
              </Link>
              <Link 
                href="/#contact" 
                className="bg-[#2694e7] text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-center font-medium text-sm md:text-base"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}