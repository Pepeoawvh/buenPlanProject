import Header from './components/client/header';
import Hero from './components/client/hero';
import Services from './components/client/services';
import Testimonials from './components/client/testimonials';
import About from './components/client/about';
import Contact from './components/client/contact';
import Banner from './components/client/banner';


export default function Home() {
  return (
    <div className="grid grid-rows-min">
      <main className="grid grid-rows-min items-center sm:items-start w-full h-full bg-white">
      <Header/>
      <Hero />
      <Services />
      <Banner/>
      <Testimonials />
      <About />
      <Contact />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    {/* footer clasico */}

        
      </footer>
    </div>
  );
}
