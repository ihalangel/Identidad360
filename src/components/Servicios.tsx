'use client'; // Directiva para indicar que este componente es del lado del cliente

import React, { useEffect, useRef, useState } from 'react';
import styles from '@/styles/Service.module.css'; // Asegúrate de que el CSS se importa como un módulo

const Services: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (window.gtag) {
            window.gtag('event', 'view', {
              'event_category': 'Section',
              'event_label': 'Servicios',
              'value': 1
            });
          }
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = servicesRef.current; // Guarda el valor actual del ref

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="servicios" className={styles.services + ' bg-gray-100 py-12'} ref={servicesRef}>
      <div className="container mx-auto">
        <h3 className={styles.title + ' text-2xl font-bold text-center mb-6'} data-aos="fade-up">
          Nuestros Servicios
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className={styles.item + ' bg-white p-6 rounded-lg shadow-md'} data-aos="zoom-in">
            <i className="services__icon fas fa-laptop-code text-4xl text-blue-900"></i>
            <h4 className={styles.title + ' mt-2 text-xl font-bold'}>Landing Page</h4>
            <p className={styles.description}>Diseño web rápido y efectivo para captar clientes.</p>
          </div>
          <div className={styles.item + ' bg-white p-6 rounded-lg shadow-md'} data-aos="zoom-in" data-aos-delay="100">
            <i className="services__icon fas fa-building text-4xl text-blue-900"></i>
            <h4 className={styles.title + ' mt-2 text-xl font-bold'}>Sitio Corporativo</h4>
            <p className={styles.description}>Presencia profesional en línea con múltiples secciones.</p>
          </div>
          <div className={styles.item + ' bg-white p-6 rounded-lg shadow-md'} data-aos="zoom-in" data-aos-delay="200">
            <i className="services__icon fas fa-shopping-cart text-4xl text-blue-900"></i>
            <h4 className={styles.title + ' mt-2 text-xl font-bold'}>E-commerce</h4>
            <p className={styles.description}>Tu tienda en línea con todas las funcionalidades que necesitas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
