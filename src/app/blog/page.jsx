"use client";

import React, { useState, useEffect } from 'react';
import { firestoreDB } from '../firebase/config.js';
import { bebas } from "../ui/fonts.js";
import BlogCard from './components/BlogCard';
import Link from 'next/link';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Usamos 'blogbuenplan' como nombre de colección estándar
        const postsSnapshot = await firestoreDB
          .collection('blogbuenplan')
          .orderBy('createdAt', 'desc')
          .get();
        
        const postsData = postsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setPosts(postsData);
      } catch (err) {
        console.error('Error al cargar los artículos:', err);
        setError('No se pudieron cargar los artículos. Por favor, intenta nuevamente más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Encabezado */}
        <div className="mb-12 text-center">
          <h1 className={`${bebas.className} text-4xl md:text-5xl text-[#143899] mb-4`}>
            BLOG BUEN PLAN
          </h1>
          <div className="h-1 w-24 bg-[#2694e7] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Información actualizada sobre planes de salud, consejos médicos y todo lo que necesitas saber para tomar mejores decisiones sobre tu salud.
          </p>
        </div>

        {/* Contenido */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2694e7]"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-red-700">{error}</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">No hay artículos disponibles en este momento.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}