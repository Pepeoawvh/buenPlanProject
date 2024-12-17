import Head from 'next/head';
import Contact from '../components/client/contact';
import About from '../components/client/about';
import WspButton from '../components/client/WspButton';

export default function FAQ() {
  return (
    <>
      <Head>
        <title>Preguntas Frecuentes - Buen Plan</title>
        <meta name="description" content="Encuentra respuestas a las preguntas más frecuentes sobre nuestros servicios de asesoría en Isapres." />
        <meta name="keywords" content="Isapres, asesoría, preguntas frecuentes, salud, planes de salud" />
        <meta name="author" content="Buen Plan" />
        <meta property="og:title" content="Preguntas Frecuentes - Buen Plan" />
        <meta property="og:description" content="Encuentra respuestas a las preguntas más frecuentes sobre nuestros servicios de asesoría en Isapres." />
        <meta property="og:image" content="/img/BPlogo1.svg" />
        <meta property="og:url" content="https://www.buenplansalud.cl/faq" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/img/BPlogo1.svg" />
      </Head>
      <div className="grid grid-rows-min">
        <main className="grid grid-rows-min items-center sm:items-start w-full h-full bg-white">
          <div className="px-8 animate-fade-down animate-once animate-duration-[3000ms] animate-delay-[2700ms]">
            <h2 className="text-2xl font-semibold">
              4. ¿Recibiré asesoría personalizada?
            </h2>
            <p className="text-lg">
              Sí, nuestros ejecutivos capacitados te ofrecerán asesoría
              personalizada para ayudarte a elegir el plan más adecuado para ti y
              tu familia.
            </p>
          </div>
          <div className="px-8 animate-fade-down animate-once animate-duration-[3000ms] animate-delay-[2700ms]">
            <h2 className="text-2xl font-semibold">
              5. ¿Puedo cambiar de plan si ya cuento con uno?
            </h2>
            <p className="text-lg">
              Si ya tienes un plan de salud, puedes comparar otras opciones para
              ver si existe uno que se ajuste mejor a tus necesidades y
              presupuesto.
            </p>
          </div>
          <div className="animate-fade-down animate-once animate-duration-[3000ms] animate-delay-[2700ms]">
            <Contact />
          </div>
        </main>
        <div className="bg-white pt-8">
          <About />
        </div>
        <div className={`${bebas.className} grid w-full items-center justify-items-center h-auto text-4xl bg-gradient-to-b to-[#2694e7] from-[#96c0e1] p-4 shadow-md`}>
          <p className='h-fit items-center justify-items-center text-center'>¿Aun Tienes dudas?</p>
          <p className='h-fit items-center justify-items-center text-center text-xl'>¡Contactanos con el boton de whatsapp en la esquina inferior derecha!</p>
        </div>
        <WspButton />
      </div>
    </>
  );
}