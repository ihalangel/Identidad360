// src/app/page.tsx
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
        <meta name="description" content="Bienvenido a Identidad360, donde ofrecemos soluciones digitales profesionales y accesibles para tu negocio." />
        {/* Agrega otros metadatos como Open Graph tags aquí si es necesario */}
      </Head>
      <Hero />
      <Services />
     <Precios />
       <Portafolio />
     <Testimonios />
       <Contacto />
        <WhatsappButton />
    </>
  );
}
