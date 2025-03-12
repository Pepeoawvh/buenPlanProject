import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogCard = ({ post }) => {
  // Verificar si el post existe
  if (!post || !post.id) {
    return null;
  }

  // Formatear la fecha
  const formattedDate = post.createdAt?.toDate 
    ? new Date(post.createdAt.toDate()).toLocaleDateString('es-CL', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }) 
    : post.createdAt instanceof Date
      ? post.createdAt.toLocaleDateString('es-CL', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      : 'Fecha no disponible';

  // Truncar el contenido para la vista previa
  const getPreviewText = (htmlContent) => {
    if (!htmlContent) return '';
    // Eliminar etiquetas HTML y limitar a 150 caracteres
    const plainText = htmlContent.replace(/<[^>]*>/g, '');
    return plainText.length > 150 ? plainText.substring(0, 150) + '...' : plainText;
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link href={`/blog/post/${post.id}`} className="block">
        <div className="relative h-42 w-full">
          <Image 
            src={post.imageUrl || '/img/BPlogo1.svg'} 
            alt={post.title} 
            width={800}
            height={400}
            className="object-cover"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/blog/post/${post.id}`} className="block">
          <h3 className="text-xl font-semibold text-[#143899] mb-2 hover:text-[#2694e7] transition-colors">
            {post.title}
          </h3>
        </Link>
        {post.subtitle && (
          <h4 className="text-lg text-gray-700 font-medium mb-2">
            {post.subtitle}
          </h4>
        )}
        <p className="text-gray-500 text-sm mb-2">{formattedDate}</p>
        <p className="text-gray-700 mb-4">{getPreviewText(post.content)}</p>
        <Link href={`/blog/post/${post.id}`} className="text-[#2694e7] font-medium hover:text-[#143899] transition-colors">
          Leer más →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;