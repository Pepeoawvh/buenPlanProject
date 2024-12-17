"use client"
import Head from 'next/head';
import Hero from './components/client/hero';
import Testimonials from './components/client/testimonials';
import Isapres from './components/client/isapres';
import About from './components/client/about';
import Contact from './components/client/contact';
import WspButton from './components/client/WspButton';
import Banner from './components/client/banner';
import Comofunciona from './components/client/comofunciona';
import Carrusel from './components/client/carrusel';
import "tw-elements-react/dist/css/tw-elements-react.min.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Buen Plan - Asesoría en Isapres</title>
        <meta name="description" content="Te ayudamos a encontrar el mejor plan de Isapres para ti y tu familia." />
        <meta name="keywords" content="Isapres, asesoría, salud, planes de salud" />
        <meta name="author" content="Buen Plan" />
        <meta property="og:title" content="Buen Plan - Asesoría en Isapres" />
        <meta property="og:description" content="Te ayudamos a encontrar el mejor plan de Isapres para ti y tu familia." />
        <meta property="og:image" content="/img/BPlogo1.svg" />
        <meta property="og:url" content="https://www.buenplansalud.cl" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/img/BPlogo1.svg" />
      </Head>
      <div className="grid grid-rows-min">
        <main className="grid grid-rows-min items-center sm:items-start w-full h-full bg-white">
          <Hero />
          <Banner />
          <Comofunciona />
          <Isapres />
          <Contact />
          <Carrusel interval={2000} />
          <About />
          <WspButton />
          <Testimonials />
        </main>
      </div>
    </>
  );
}