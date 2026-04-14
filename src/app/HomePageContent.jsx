"use client";
import React, { Suspense, lazy } from 'react'

const Hero = lazy(() => import('./components/client/hero'))
const Testimonials = lazy(() => import('./components/client/testimonials'))
const Isapres = lazy(() => import('./components/client/isapres'))
const About = lazy(() => import('./components/client/about'))
const Contact = lazy(() => import('./components/client/contact'))
const WspButton = lazy(() => import('./components/client/WspButton'))
const Banner = lazy(() => import('./components/client/banner'))
const Comofunciona = lazy(() => import('./components/client/comofunciona'))
const Carrusel = lazy(() => import('./components/client/carrusel'))
const BotonBlog = lazy(() => import('./components/client/BotonBlog'))

export default function HomePageContent() {
  return (
    <div className="grid grid-rows-min">
      <main className="grid grid-rows-min items-center sm:items-start w-full h-full bg-white">
        <Suspense fallback={<div>Cargando...</div>}>
          <Hero />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <Banner />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <BotonBlog />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <Comofunciona />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <Isapres />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <Contact />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <Carrusel interval={2000} />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <WspButton />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <Testimonials />
        </Suspense>
      </main>
    </div>
  )
}
