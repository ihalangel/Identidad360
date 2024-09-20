'use client'; // Directiva para indicar que este componente es del lado del cliente

import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Hero.module.css';
import Modal from './Modal';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    const customLabel = 'H Solicitar Cotización';
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Botón',
        event_label: customLabel,
        value: 1,
      });
    }
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <section className={styles.hero}>
     <Image
      src="/images/cliente-feliz-disfrutando-pagina-web.webp"
      alt="Cliente feliz disfrutando de su página web"
      layout="fill"
      className={styles.heroImg}
      priority
    />
      <div className={styles.heroContent}>
        <h2 className="hero__title text-3xl font-bold" data-aos="fade-up">
          Diseños Web Profesionales a Precios Accesibles
        </h2>
        <p className="hero__subtitle mt-4" data-aos="fade-up" data-aos-delay="100">
          Transforma tu presencia digital con nuestras soluciones personalizadas
        </p>
        <button
          className="hero__button mt-6 px-6 py-3 bg-yellow-500 text-gray-900 rounded-md hover:bg-yellow-600 transition duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
          onClick={openModal}
        >
          Solicita una Cotización
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Hero;

