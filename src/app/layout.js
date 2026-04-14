import React, { Suspense, lazy } from 'react'
import './globals.css'
import { AuthProvider } from './context/authProvider'

const Header = lazy(() => import('./components/client/header'))
const Footer = lazy(() => import('./components/client/footer'))

export const metadata = {
  metadataBase: new URL('https://www.buenplansalud.cl'),
  title: {
    default: 'Buen Plan | Asesorías en Planes de Isapres',
    template: '%s | Buen Plan',
  },
  description: 'Asesores certificados por la Superintendencia de Salud. Comparamos y evaluamos todos los planes de Isapres de Chile. Asesoría personalizada 100% gratuita.',
  authors: [{ name: 'Buen Plan Salud' }],
  creator: 'Buen Plan Salud',
  openGraph: {
    type: 'website',
    siteName: 'Buen Plan Salud',
    locale: 'es_CL',
    url: 'https://www.buenplansalud.cl',
    title: 'Buen Plan | Asesorías en Planes de Isapres',
    description: 'Asesores certificados por la Superintendencia de Salud. Comparamos todos los planes de Isapres de Chile. Servicio 100% gratuito.',
    images: [
      {
        url: '/img/BPlogo1.svg',
        alt: 'Buen Plan Salud - Asesorías en Planes de Isapres Chile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buen Plan | Asesorías en Planes de Isapres',
    description: 'Asesores certificados por la Superintendencia de Salud. Servicio 100% gratuito.',
    images: ['/img/BPlogo1.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Buen Plan Salud',
  url: 'https://www.buenplansalud.cl',
  description: 'Asesorías en planes de Isapres en Chile. Profesionales certificados por la Superintendencia de Salud. Servicio 100% gratuito.',
  priceRange: 'Gratis',
  areaServed: {
    '@type': 'Country',
    name: 'Chile',
  },
  serviceType: 'Asesoría en Planes de Salud',
}

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className='antialiased bg-white'>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <AuthProvider>
          <Suspense fallback={<div>Cargando...</div>}>
            <Header />
          </Suspense>
          <main>{children}</main>
          <Suspense fallback={<div>Cargando...</div>}>
            <Footer />
          </Suspense>
        </AuthProvider>
      </body>
    </html>
  )
}