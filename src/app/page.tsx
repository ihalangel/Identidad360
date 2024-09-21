import Head from 'next/head';
import Hero from '../components/Hero';
import Services from '../components/Servicios';
import Precios from '../components/Precios';
import Portafolio from '../components/Portafolio';
import Testimonios from '../components/Testimonios';
import Contacto from '../components/Contacto';
import WhatsappButton from '../components/botones/WhatsappButton';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Identidad360 - Tu solución digital</title>
        <meta
          name="description"
          content="Bienvenido a Identidad360, donde ofrecemos soluciones digitales profesionales y accesibles para tu negocio."
        />
        <meta property="og:title" content="Identidad360 - Tu solución digital" />
        <meta
          property="og:description"
          content="Bienvenido a Identidad360, donde ofrecemos soluciones digitales profesionales y accesibles para tu negocio."
        />
        <meta property="og:image" content="/path-to-image.jpg" />
        <meta property="og:url" content="https://www.identidad360.com" />
        <meta
          name="keywords"
          content="diseño web, soluciones digitales, branding, marketing"
        />
        {/* Agrega otros metadatos aquí si es necesario */}
      </Head>

      <div className="container mx-auto max-w-screen-lg px-4">
        <Hero />
        <Services />
        <Precios />
        <Portafolio />
        <Testimonios />
        <Contacto />
        <WhatsappButton />
      </div>
    </>
  );
}


