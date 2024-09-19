"use client"; // Esta línea permite usar hooks del cliente

import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import { Advertisement } from '@type/index'; // Ajusta el path según la ubicación de tu archivo de tipos
import Image from 'next/image';


const advertisements: Advertisement[] = [
  {
    title: 'Menús Digitales Interactivos con Código QR',
    description: 'Transforma la manera en que presentas tus platos con menús digitales personalizados accesibles por código QR.',
    ImageUrl: '/Images/publicidad/s-menus-digitales-interactivos-qr.webp',
    link: '#'
  },
  {
    title: 'Desarrollo Profesional de Sitios Web en WordPress: Flexibilidad, Control Total y Bajo Costo',
    description: 'Descubre cómo el desarrollo profesional de sitios web en WordPress te permite tener control absoluto sobre tu presencia en línea. A diferencia de plataformas de terceros que imponen tarifas crecientes y limitaciones, WordPress te ofrece flexibilidad total, optimización avanzada de SEO, y costos significativamente menores a largo plazo. Ideal para emprendedores y empresas que buscan una solución poderosa y económica para el crecimiento en línea.',
    ImageUrl: '/Images/publicidad/desarrollo-profesional-sitios-web-wordpress.webp',
    link: '#'
  },
  {
    title: 'Landing Page Sencilla y Poderosa en React',
    description: 'Convierte más visitantes con landing pages rápidas, optimizadas y personalizadas en React. Ideales para potenciar tus campañas de marketing y maximizar tu ROI.',
    ImageUrl: '/Images/publicidad/s-landing-page-sencilla-react-next.webp',
    link: '#'
  }
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const adIndex = Math.floor(scrollY / 400) % advertisements.length;
      setCurrentAdIndex(adIndex);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const advertisement = advertisements[currentAdIndex];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": advertisement.title,
    "description": advertisement.description,
    "Image": advertisement.ImageUrl,
    "url": advertisement.link
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <button
        className={`fixed top-1/2 right-2 md:right-4 transform -translate-y-1/2 z-20 p-2 rounded-full shadow-md transition-colors duration-300 ${isOpen ? 'bg-accent text-primary' : 'bg-primary text-accent'}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Cerrar Sidebar' : 'Abrir Sidebar'}
      >
        {isOpen ? '→' : '←'}
      </button>

<aside className={`fixed top-1/2 right-0 w-2/3 md:w-1/3 transform -translate-y-1/2 bg-background shadow-md z-10 transition-transform duration-300 ease-in-out mt-4 mb-4 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        <div className="flex flex-row h-full justify-center p-4 space-y-4">
          <div className="flex flex-col space-y-2 border-b border-gray-200 pb-4">
            <a href={advertisement.link} target="_blank" rel="noopener noreferrer" className="block">
              <h3 className="text-lg font-semibold mt-2">{advertisement.title}</h3>
         
             <Image
  src={advertisement.ImageUrl}
  alt={`Publicidad sobre ${advertisement.title}: ${advertisement.description}`}
  width={200} // Ancho fijo de la imagen
  height={250} // Altura fija de la imagen
  className="object-cover rounded-lg shadow-md" // Tailwind para estilos adicionales
  layout="intrinsic" // Esto permite que la imagen respete sus dimensiones originales
/>


              <p className="text-gray-600 mt-2">{advertisement.description}</p>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;






