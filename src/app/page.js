import Header from './components/client/header';
import Hero from './components/client/hero';
import Services from './components/client/services';
import ComoFunciona from './components/client/comofunciona';
import Testimonials from './components/client/testimonials';
import Isapres from './components/client/isapres';
import About from './components/client/about';
import Contact from './components/client/contact';
import WspButton from './components/client/WspButton';
import Banner from './components/client/banner';
import Comofunciona from './components/client/comofunciona';


export default function Home() {
  return (
    <div className="grid grid-rows-min">
      <main className="grid grid-rows-min items-center sm:items-start w-full h-full bg-white">
      <Header/>
      <Hero />
      <Banner/>
      <Comofunciona/>
      <Isapres/>
      <Contact />
      <About />      
      <WspButton />      
      <Testimonials />
      <Services />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    {/* footer clasico */}

        
      </footer>
    </div>
  );
}
