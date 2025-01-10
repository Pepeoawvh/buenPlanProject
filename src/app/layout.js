import React, { Suspense, lazy } from 'react'
import './globals.css'
import { AuthProvider } from './context/authProvider'

const Header = lazy(() => import('./components/client/header'))
const Footer = lazy(() => import('./components/client/footer'))

export const metadata = {
  title: 'Buen Plan, Asesorías en planes de Isapres',
  description: 'Te ayudamos a encontrar el mejor plan de Isapres para ti y tu familia.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <AuthProvider>
        <head>
          <meta charSet='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta name='description' content={metadata.description} />
          <meta name='keywords' content='Isapres, asesoría, salud, planes de salud, cambiar isapre' />
          <meta name='author' content='Buen Plan' />
          <meta property='og:title' content={metadata.title} />
          <meta property='og:description' content={metadata.description} />
          <meta property='og:image' content='/img/BPlogo1.svg' />
          <meta property='og:url' content='https://www.buenplansalud.cl' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:image' content='/img/BPlogo1.svg' />
          <title>{metadata.title}</title>
        </head>
        <body className='antialiased bg-white'>
          <Suspense fallback={<div>Cargando...</div>}>
            <Header />
          </Suspense>
          <main>{children}</main>
          <Suspense fallback={<div>Cargando...</div>}>
            <Footer />
          </Suspense>
        </body>
      </AuthProvider>
    </html>
  )
}