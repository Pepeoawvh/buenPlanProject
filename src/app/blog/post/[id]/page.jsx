"use client";

import React, { useState, useEffect } from 'react';
import { firestoreDB } from '@/app/firebase/config';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import BlogTemplate1 from '@/app/blog/components/BlogTemplate1';
import BlogTemplate2 from '@/app/blog/components/BlogTemplate2';
import BlogTemplate3 from '@/app/blog/components/BlogTemplate3';
import BlogTemplate4 from '@/app/blog/components/BlogTemplate4';

export default function BlogPostPage() {
  const params = useParams();
  const id = params.id;
  
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) {
        setError('No se encontró el ID del artículo en la URL');
        setLoading(false);
        return;
      }
      
      try {
        const docRef = await firestoreDB.collection('blogbuenplan').doc(id).get();
        
        if (!docRef.exists) {
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
        
        // Procesar objetos complejos
        const fieldsToProcess = ['relatedResources', 'keyPoints', 'relatedTopics', 'sections'];
        
        fieldsToProcess.forEach(field => {
          if (postData[field]) {
            try {
              if (typeof postData[field] === 'string' && 
                  (postData[field].startsWith('[') || postData[field].startsWith('{'))) {
                postData[field] = JSON.parse(postData[field]);
              }
              
              if (field === 'relatedTopics' && typeof postData[field] === 'string') {
                postData[field] = postData[field]
                  .split(',')
                  .map(topic => topic.trim())
                  .filter(topic => topic.length > 0);
              }
              
              if (!Array.isArray(postData[field])) {
                postData[field] = [postData[field]];
              }
            } catch (err) {
              postData[field] = Array.isArray(postData[field]) ? postData[field] : [];
            }
          }
        });
        
        setPost(postData);
      } catch (err) {
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
    const templateIdNum = parseInt(post.templateId, 10) || 1;
    
    switch (templateIdNum) {
      case 1: return <BlogTemplate1 post={post} />;
      case 2: return <BlogTemplate2 post={post} />;
      case 3: return <BlogTemplate3 post={post} />;
      case 4: return <BlogTemplate4 post={post} />;
      default: return <BlogTemplate1 post={post} />;
    }
  };

  return (
    <div className="bg-white h-full">
      <div className="md:mx-52 py-6 h-full">
        <header className="">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-[#2694e7] hover:underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al Blog
          </Link>
        </header>
        
        {/* Solo renderizamos la plantilla */}
        {renderTemplate()}
      </div>
    </div>
  );
}