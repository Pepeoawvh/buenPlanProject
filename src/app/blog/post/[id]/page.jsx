"use client";

import React, { useState, useEffect } from 'react';
import { firestoreDB } from '@/app/firebase/config';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { formatDistance } from 'date-fns';
import { es } from 'date-fns/locale';


// Importar plantillas
import BlogTemplate1 from '@/app/blog/components/BlogTemplate1';
import BlogTemplate2 from '@/app/blog/components/BlogTemplate2';
import BlogTemplate3 from '@/app/blog/components/BlogTemplate3';
import BlogTemplate4 from '@/app/blog/components/BlogTemplate4';

export default function BlogPostPage() {
  const params = useParams();
  console.log('Params object:', params); // Ver la estructura completa de params
  
  // Obtener el ID del post directamente según la estructura de carpetas [id]
  const id = params.id;
  console.log('ID param:', id); // Verificar que el ID se extrae correctamente
  
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) {
        console.error('No ID provided in URL');
        setError('No se encontró el ID del artículo en la URL');
        setLoading(false);
        return;
      }
      
      try {
        console.log(`Fetching post with ID: ${id}`);
        const docRef = await firestoreDB.collection('blogbuenplan').doc(id).get();
        
        if (!docRef.exists) {
          console.error(`Post with ID ${id} not found`);
          setError('El artículo no existe o ha sido eliminado.');
          setLoading(false);
          return;
        }
        
        // Obtén los datos base del documento
        const rawData = docRef.data();
        
        // Procesa la fecha de creación
        let createdAt;
        if (rawData.createdAt) {
          if (typeof rawData.createdAt.toDate === 'function') {
            createdAt = rawData.createdAt.toDate();
          } else {
            createdAt = new Date(rawData.createdAt);
          }
        } else {
          createdAt = new Date();
        }
        
        // Crea el objeto base del post
        const postData = {
          id: docRef.id,
          ...rawData,
          createdAt
        };
        
        // Procesa relatedResources si existe
        if (postData.relatedResources) {
          try {
            // Si es un string que parece JSON, intenta parsearlo
            if (typeof postData.relatedResources === 'string' && 
                (postData.relatedResources.startsWith('[') || 
                 postData.relatedResources.startsWith('{'))) {
              postData.relatedResources = JSON.parse(postData.relatedResources);
            }
            
            // Asegúrate que sea un array para consistencia
            if (!Array.isArray(postData.relatedResources)) {
              postData.relatedResources = [postData.relatedResources];
            }
          } catch (err) {
            console.warn("Error al procesar relatedResources:", err);
            // Si hay error, asegúrate de que al menos sea un array vacío
            postData.relatedResources = [];
          }
        }
        
        // Procesa keyPoints si existe
        if (postData.keyPoints) {
          try {
            // Si es un string que parece JSON, intenta parsearlo
            if (typeof postData.keyPoints === 'string' && 
                (postData.keyPoints.startsWith('[') || 
                 postData.keyPoints.startsWith('{'))) {
              postData.keyPoints = JSON.parse(postData.keyPoints);
            }
            
            // Asegúrate que sea un array para consistencia
            if (!Array.isArray(postData.keyPoints)) {
              postData.keyPoints = [postData.keyPoints];
            }
          } catch (err) {
            console.warn("Error al procesar keyPoints:", err);
            postData.keyPoints = [];
          }
        }
        
        // Procesa relatedTopics si existe
        if (postData.relatedTopics) {
          try {
            // Si es un string que parece JSON, intenta parsearlo
            if (typeof postData.relatedTopics === 'string' && 
                (postData.relatedTopics.startsWith('[') || 
                 postData.relatedTopics.startsWith('{'))) {
              postData.relatedTopics = JSON.parse(postData.relatedTopics);
            }
            
            // Si sigue siendo un string, divídelo por comas
            if (typeof postData.relatedTopics === 'string') {
              postData.relatedTopics = postData.relatedTopics
                .split(',')
                .map(topic => topic.trim())
                .filter(topic => topic.length > 0);
            }
            
            // Asegúrate que sea un array para consistencia
            if (!Array.isArray(postData.relatedTopics)) {
              postData.relatedTopics = [postData.relatedTopics];
            }
          } catch (err) {
            console.warn("Error al procesar relatedTopics:", err);
            postData.relatedTopics = [];
          }
        }
        
        // Procesa sections si existe (para Template3)
        if (postData.sections) {
          try {
            // Si es un string que parece JSON, intenta parsearlo
            if (typeof postData.sections === 'string' && 
                (postData.sections.startsWith('[') || 
                 postData.sections.startsWith('{'))) {
              postData.sections = JSON.parse(postData.sections);
            }
            
            // Asegúrate que sea un array para consistencia
            if (!Array.isArray(postData.sections)) {
              postData.sections = [postData.sections];
            }
          } catch (err) {
            console.warn("Error al procesar sections:", err);
            postData.sections = [];
          }
        }
        
        console.log('Post data processed successfully:', postData);
        setPost(postData);
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Error al cargar el artículo. Por favor, intenta nuevamente más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2694e7]"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {error || 'Artículo no encontrado'}
          </h1>
          <p className="text-gray-600 mb-8">
            Lo sentimos, el artículo que buscas no está disponible en este momento.
          </p>
          <Link 
            href="/blog" 
            className="bg-[#2694e7] text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Volver al Blog
          </Link>
        </div>
      </div>
    );
  }

  // Renderizar según la plantilla
  const renderTemplate = () => {
    // Convertir templateId a número si viene como string
    const templateIdNum = parseInt(post.templateId, 10) || 1;
    
    switch (templateIdNum) {
      case 1:
        return <BlogTemplate1 post={post} />;
      case 2:
        return <BlogTemplate2 post={post} />;
      case 3:
        return <BlogTemplate3 post={post} />;
      case 4:
        return <BlogTemplate4 post={post} />;
      default:
        return <BlogTemplate1 post={post} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <header className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-[#2694e7] hover:underline mb-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al Blog
          </Link>
        </header>
        
        {renderTemplate()}
        
        <footer className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-600">
          <div className="flex justify-between items-center">
            <div>
              Publicado {formatDistance(
                post.createdAt instanceof Date ? post.createdAt : new Date(post.createdAt),
                new Date(),
                { addSuffix: true, locale: es }
              )}
            </div>
            
            <div>
              {post.author && (
                <span>Por {post.author.split('@')[0]}</span>
              )}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}