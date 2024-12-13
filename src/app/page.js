"use client"
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
    <div className="grid grid-rows-min ">
      <main className="grid grid-rows-min items-center sm:items-start w-full h-full bg-white">

      <Hero />
      <Banner/>
      <Comofunciona />
      <Isapres/>
      <Contact />
      <Carrusel interval={2000}/>
      <About />      
      <WspButton />      
      <Testimonials />

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    {/* footer clasico */}

        
      </footer>
    </div>
  );
}
