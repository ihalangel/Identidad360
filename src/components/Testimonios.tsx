// 'use client'; // No es necesario en este caso, pero se puede agregar si el componente usa hooks como useState
import React from 'react';
import styles from '@/styles/Testimonios.module.css'; // Importa el CSS como un módulo

const Testimonios: React.FC = () => {
  return (
    <section className={styles.testimonials}>
      <div className="container mx-auto">
        <h3 className={styles.testimonials__title} data-aos="fade-up">
          Testimonios
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={styles.testimonials__item} data-aos="fade-right">
            <p className={styles.testimonials__quote}>
              &quot;Mi experiencia fue muy positiva, recomendaría sus servicios a cualquiera que busque calidad y buen precio.&quot;
            </p>
            <p className={styles.testimonials__author}>María Gutiérrez</p>
          </div>
          <div className={styles.testimonials__item} data-aos="fade-up" data-aos-delay="100">
            <p className={styles.testimonials__quote}>
              &quot;Los recomiendo totalmente, hicieron un trabajo increíble en mi página web.&quot;
            </p>
            <p className={styles.testimonials__author}>Carlos Pérez</p>
          </div>
          <div className={styles.testimonials__item} data-aos="fade-left" data-aos-delay="200">
            <p className={styles.testimonials__quote}>
              &quot;Excelente servicio al cliente, siempre dispuestos a ayudar y resolver dudas.&quot;
            </p>
            <p className={styles.testimonials__author}>Ana López</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
