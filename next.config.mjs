import 'dotenv/config';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
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
  transpilePackages: ['react-quill'],
  turbopack: {},
};

export default nextConfig;