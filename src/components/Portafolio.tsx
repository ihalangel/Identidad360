'use client'; // Directiva para indicar que este componente es del lado del cliente

import React from 'react';
import Image from 'next/image'; // Usar el componente Image de Next.js
import styles from '@/styles/Portfolio.module.css'; // Importa el CSS como módulo
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const projects = [
  {
    id: 1,
    href: "/landing.html",
    imgSrc: `/images/planes/landing.webp`,
    altText: "Proyecto de Landing Page",
    title: "Landing Page",
    description: "Página de aterrizaje venta de un producto específico.",
    quote: '"La página superó nuestras expectativas y aumentó las ventas."'
  },
  {
    id: 2,
    href: "/bussines.html",
    imgSrc: `/images/planes/bussines.webp`,
    altText: "Proyecto de Barbería",
    title: "Sitio Web para Contadores",
    description: "Diseño responsivo para una firma de contadores.",
    quote: '"Increíble diseño que captó la esencia de nuestro agencia."'
  },
  {
    id: 3,
    href: "/ecommerce.html",
    imgSrc: `/images/planes/ecommerce.webp`,
    altText: "Proyecto de E-commerce",
    title: "Tienda en Línea de Mascotas",
    description: "Plataforma e-commerce completa con catálogo y pasarela de pago.",
    quote: '"Nuestras ventas en línea se aumentaron gracias a este sitio."'
  }
];

const Portfolio: React.FC = () => {
  const handleClick = (title: string) => {
    if (window.gtag) {
      window.gtag('event', 'click', {
        'event_category': 'Portfolio',
        'event_label': title,
        'value': 1
      });
    }
  };

  return (
    <section className={styles.portfolioSection}>
    <div className="container mx-auto max-w-screen-lg">
      {/*<div className="container mx-auto">*/}
        <h2 className="text-3xl font-bold text-center mb-8">Nuestros Ejemplos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map(project => (
            <a
              href={`${basePath}${project.href}`}
              className={styles.portfolioItem}
              key={project.id}
              onClick={() => handleClick(project.title)}
            >
              <Image 
                src={`${ basePath}${project.imgSrc}`} 
                alt={project.altText} 
                className="w-full  object-cover mb-4" 
               width={1920} 
        height={1080} 
        layout="responsive" // Hace que la imagen sea responsive
        priority
      />
              <h3 className="text-2xl font-semibold text-blue-900">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
              <blockquote className="mt-4 italic text-gray-600">{project.quote}</blockquote>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
