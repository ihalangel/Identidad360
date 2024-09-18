'use client'; // Directiva para indicar que este componente es del lado del cliente

import React from 'react';
import Image from 'next/image'; // Usar el componente Image de Next.js
import styles from '@/styles/Portfolio.module.css'; // Importa el CSS como módulo
import LadingImg from '../../public/images/planes/landing.png';
import BussinesImg from '../../public/images/planes/bussines.png';
import EcommerceImg from '../../public/images/planes/ecommerce.png';

const projects = [
  {
    id: 1,
    href: "/landing.html",
    imgSrc: LadingImg,
    altText: "Proyecto de Landing Page",
    title: "Landing Page",
    description: "Página de aterrizaje venta de un producto específico.",
    quote: '"La página superó nuestras expectativas y aumentó las ventas."'
  },
  {
    id: 2,
    href: "/bussines.html",
    imgSrc: BussinesImg,
    altText: "Proyecto de Barbería",
    title: "Sitio Web para Contadores",
    description: "Diseño responsivo para una firma de contadores.",
    quote: '"Increíble diseño que captó la esencia de nuestro agencia."'
  },
  {
    id: 3,
    href: "/ecommerce.html",
    imgSrc: EcommerceImg,
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
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestros Ejemplos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <a
              href={project.href}
              className={styles.portfolioItem}
              key={project.id}
              onClick={() => handleClick(project.title)}
            >
              <Image 
                src={project.imgSrc} 
                alt={project.altText} 
                className="w-full h-64 object-cover mb-4" 
                layout="responsive"
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
