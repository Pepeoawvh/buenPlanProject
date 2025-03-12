import 'dotenv/config';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'drive.google.com',
      'lh3.googleusercontent.com', // Para las imágenes servidas por Google
      'firebasestorage.googleapis.com', // Para Firebase Storage
      'storage.googleapis.com',
      'img.freepik.com',
      'cdn.pixabay.com',
      'images.unsplash.com', 
      'i.imgur.com',
      'res.cloudinary.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    API_KEY: process.env.API_KEY,
    // Agrega aquí otras variables de entorno que necesites
  },
  // Agregar transpilePackages para React-Quill
  transpilePackages: ['react-quill'],
  // Configurar webpack para manejar correctamente los estilos CSS de React-Quill
  webpack: (config) => {
    // Asegurarse de que React-Quill se cargue correctamente en el lado del cliente
    config.resolve.alias = {
      ...config.resolve.alias,
      'quill$': 'quill/dist/quill.js',
    }
    return config;
  },
};

export default nextConfig;