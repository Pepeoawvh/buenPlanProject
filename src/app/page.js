import HomePageContent from './HomePageContent'

export const metadata = {
  title: {
    absolute: 'Buen Plan | Asesorías Gratuitas en Planes de Isapres',
  },
  description: 'Encuentra el mejor plan de Isapres para ti y tu familia con asesoría personalizada 100% gratuita. Profesionales certificados por la Superintendencia de Salud de Chile.',
  alternates: {
    canonical: 'https://www.buenplansalud.cl',
  },
  openGraph: {
    url: 'https://www.buenplansalud.cl',
  },
}

export default function Home() {
  return <HomePageContent />
}