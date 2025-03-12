"use client";
import React, { Suspense, lazy } from 'react'
import Head from 'next/head'
import "tw-elements-react/dist/css/tw-elements-react.min.css"

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

export default function Home() {
  return (
    <>
      <Head>
        <title>Buen Plan - Asesoría en Isapres</title>
        <meta name="description" content="Encuentra el mejor plan de Isapres para ti y tu familia, te ayudamos." />
        <meta name="keywords" content="Isapres, asesoría, salud, planes de salud, cambio de isapre, seguro de salud" />
        <meta name="author" content="Buen Plan Salud Chile" />
        <meta property="og:title" content="Buen Plan - Asesoría en Isapres" />
        <meta property="og:description" content="Encuentra el mejor plan de Isapres para ti y tu familia, te ayudamos." />
        <meta property="og:image" content="/img/BPlogo1.svg" />
        <meta property="og:url" content="https://www.buenplansalud.cl" />
      </Head>
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
    </>
  )
}