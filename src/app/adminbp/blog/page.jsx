"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { firestoreDB } from '@/app/firebase/config';
import { useAuth } from '@/app/context/authProvider';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import AdminBlog from '@/app/blog/components/AdminBlog';
import Login from "@/app/components/client/login";

export default function BlogAdminPage() {
  const { currentUser, logout } = useAuth();
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('list'); // 'list', 'create', 'edit'
  const [selectedPost, setSelectedPost] = useState(null);

  // Obtener los posts existentes
  useEffect(() => {
    if (currentUser) {
      const fetchPosts = async () => {
        try {
          const snapshot = await firestoreDB.collection('blogbuenplan').orderBy('createdAt', 'desc').get();
          const postsData = [];
          snapshot.forEach(doc => {
            postsData.push({
              id: doc.id,
              ...doc.data()
            });
          });
          setPosts(postsData);
          setLoading(false);
        } catch (error) {
          console.error("Error al obtener los posts:", error);
          setLoading(false);
        }
      };

      fetchPosts();
    }
  }, [currentUser, activeSection]);

  if (!currentUser) {
    return <Login />;
  }

  // Eliminar un post
  const handleDeletePost = async (postId) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este artículo? Esta acción no se puede deshacer.")) {
      try {
        await firestoreDB.collection('blogbuenplan').doc(postId).delete();
        setPosts(posts.filter(post => post.id !== postId));
        alert("Artículo eliminado correctamente");
      } catch (error) {
        console.error("Error al eliminar el artículo:", error);
        alert("Error al eliminar el artículo");
      }
    }
  };

  // Editar un post
  const handleEditPost = (post) => {
    setSelectedPost(post);
    setActiveSection('edit');
  };

  // Cancelar edición
  const handleCancelEdit = () => {
    setSelectedPost(null);
    setActiveSection('list');
  };

  return (
    <div className="bg-white text-blue-900 min-h-screen">
      <header className="flex items-center justify-evenly bg-[#2694e7] text-white py-4 shadow-md">
        <div className="flex w-full px-12 justify-between items-center">
          <h1 className="text-1xl md:text-2xl font-bold">Panel Administración Blog Buen Plan</h1>
          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-md shadow-md text-sm transition-colors"
          >
            Cerrar sesión
          </button>
        </div>
      </header>
      
      {/* Navegación del admin */}
      <div className="px-4 py-4">
        <nav className="flex h-full bg-gray-100 p-4 rounded-lg w-full">
          <ul className="flex flex-row gap-4">
            <li>
              <Link 
                href="/adminbp" 
                className="px-4 py-2 bg-[#2694e7] text-white rounded-md hover:bg-blue-700 hover:text-yellow-600 transition-colors"
              >
                Formularios
              </Link>
            </li>
            <li>
              <Link 
                href="/adminbp/blog" 
                className="px-4 py-2 border bg-blue-700 text-white rounded-md transition-colors"
              >
                Administrar Blog
              </Link>
            </li>
          </ul>
        </nav>

        {/* Tabs para gestionar el blog */}
        <div className="mb-6">
          <div className="border-b border-gray-200 mb-6">
            <ul className="flex flex-wrap -mb-px">
              <li className="mr-2">
                <button
                  onClick={() => {
                    setActiveSection('list');
                    setSelectedPost(null);
                  }}
                  className={`inline-block py-3 px-4 ${
                    activeSection === 'list'
                      ? 'text-[#2694e7] border-b-2 border-[#2694e7]'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Listar Artículos
                </button>
              </li>
              <li className="mr-2">
                <button
                  onClick={() => {
                    setActiveSection('create');
                    setSelectedPost(null);
                  }}
                  className={`inline-block py-3 px-4 ${
                    activeSection === 'create'
                      ? 'text-[#2694e7] border-b-2 border-[#2694e7]'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Crear Nuevo Artículo
                </button>
              </li>
              {activeSection === 'edit' && (
                <li className="mr-2">
                  <div className="inline-block py-3 px-4 text-[#2694e7] border-b-2 border-[#2694e7]">
                    Editar Artículo
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
        
        {/* Contenido de la sección activa */}
        {activeSection === 'list' ? (
          <div>
            <h2 className="text-xl font-semibold mb-4">Artículos publicados</h2>
            
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2694e7]"></div>
              </div>
            ) : posts.length === 0 ? (
              <div className="bg-gray-50 p-8 text-center rounded-lg">
                <p className="text-gray-600">No hay artículos publicados aún.</p>
                <button 
                  onClick={() => setActiveSection('create')}
                  className="mt-4 px-6 py-2 bg-[#2694e7] text-white rounded-md hover:bg-blue-700"
                >
                  Crear primer artículo
                </button>
              </div>
            ) : (
              <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Título
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Plantilla
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Fecha
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Autor
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {posts.map((post) => {
                      // Obtener nombre de la plantilla
                      const templateNames = {
                        1: "Estándar",
                        2: "Imagen lateral",
                        3: "Visual con secciones",
                        4: "Compacta"
                      };
                      
                      // Formatear fecha
                      const formattedDate = post.createdAt?.toDate ? 
                        new Date(post.createdAt.toDate()).toLocaleDateString('es-CL') : 
                        'Fecha no disponible';
                      
                      return (
                        <tr key={post.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 relative">
                                {post.imageUrl ? (
                                  <Image
                                    src={post.imageUrl}
                                    alt={post.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="rounded-md"
                                  />
                                ) : (
                                  <div className="h-10 w-10 rounded-md bg-gray-200 flex items-center justify-center">
                                    <span className="text-gray-500 text-xs">Sin img</span>
                                  </div>
                                )}
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{post.title}</div>
                                <div className="text-sm text-gray-500 truncate max-w-xs">{post.subtitle || "Sin subtítulo"}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {templateNames[post.templateId] || "Desconocida"}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formattedDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {post.author || "Admin"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex justify-end space-x-2">
                              <a 
                                href={`/blog/post/${post.id}`} 
                                target="_blank"
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                Ver
                              </a>
                              <button 
                                onClick={() => handleEditPost(post)}
                                className="text-blue-600 hover:text-blue-900"
                              >
                                Editar
                              </button>
                              <button 
                                onClick={() => handleDeletePost(post.id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                Eliminar
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ) : activeSection === 'create' ? (
          <AdminBlog />
        ) : activeSection === 'edit' && selectedPost ? (
          <div>
            <div className="flex justify-between mb-6">
              <h2 className="text-xl font-semibold">Editar artículo: {selectedPost.title}</h2>
              <button
                onClick={handleCancelEdit}
                className="text-gray-600 hover:text-gray-800"
              >
                Cancelar edición
              </button>
            </div>
            <AdminBlog postToEdit={selectedPost} />
          </div>
        ) : null}
      </div>
    </div>
  );
}