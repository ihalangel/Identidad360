import React from 'react';
import styles from './../styles/Precios.module.css'; // Asegúrate de que la ruta es correcta

const Precios: React.FC = () => {
  return (
    <section id="precios" className={`${styles.precios} py-12 bg-gray-100`}>
      <div className="container mx-auto">
        <h3 className={`${styles.precios__title} text-3xl font-bold text-center mb-8`} data-aos="fade-up">
          Nuestros Planes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={styles.precios__item} data-aos="fade-right">
            <div className={styles.precios__content}>
              {/* Descomentar e importar las imágenes si las tienes en Next.js */}
              {/* <Image
                src="/assets/images/planes/joven-apoyado-nbgr.webp"
                alt="Landing Page"
                className={styles.precios__image}
                layout="responsive"
                width={500}
                height={500}
              /> */}
              <h4 className={styles.precios__planTitle}>Landing Page </h4>
              <ul className={styles.precios__list}>
                <li className={styles.precios__listItem}>Certificado de Seguridad SSL</li>
                <li className={styles.precios__listItem}>Diseño web a medida basado en bloques de contenido</li>
                <li className={styles.precios__listItem}>Formulario de contacto</li>
                <li className={styles.precios__listItem}>Página responsive</li>
                <li className={styles.precios__listItem}>Adaptación para compartir en RRSS</li>
                <li className={styles.precios__listItem}>Hosting por 1 año</li>
                <li className={styles.precios__listItem}>Dominio por 1 año</li>
              </ul>
              <button className={styles.precios__button}>Solicita tu Landing Page</button>
            </div>
          </div>
          <div className={styles.precios__item} data-aos="fade-up" data-aos-delay="100">
            <div className={styles.precios__content}>
              {/* <Image
                src="/assets/images/planes/maquetaweb.jpg"
                alt="Corporativa"
                className={styles.precios__image}
                layout="responsive"
                width={500}
                height={500}
              /> */}
              <h4 className={styles.precios__planTitle}>Corporativa </h4>
              <ul className={styles.precios__list}>
                <li className={styles.precios__listItem}>5 secciones o páginas</li>
                <li className={styles.precios__listItem}>15 correos electrónicos corporativos</li>
                <li className={styles.precios__listItem}>Formulario de contacto</li>
                <li className={styles.precios__listItem}>Página responsive</li>
                <li className={styles.precios__listItem}>Adaptación para compartir en RRSS</li>
                <li className={styles.precios__listItem}>Página SEO optimizada</li>
                <li className={styles.precios__listItem}>Adaptación con Google Analytics</li>
                <li className={styles.precios__listItem}>Sistema de contenidos</li>
                <li className={styles.precios__listItem}>Hosting por 1 año</li>
                <li className={styles.precios__listItem}>Dominio por 1 año</li>
              </ul>
              <button className={styles.precios__button}>Crea tu Sitio Corporativo</button>
            </div>
          </div>
          <div className={styles.precios__item} data-aos="fade-left" data-aos-delay="200">
            <div className={styles.precios__content}>
              {/* <Image
                src="/assets/images/planes/presentador.gif"
                alt="E-commerce"
                className={styles.precios__image}
                layout="responsive"
                width={500}
                height={500}
              /> */}
              <h4 className={styles.precios__planTitle}>E-commerce</h4>
              <ul className={styles.precios__list}>
                <li className={styles.precios__listItem}>7 secciones</li>
                <li className={styles.precios__listItem}>Correos electrónicos corporativos ilimitados</li>
                <li className={styles.precios__listItem}>Formulario de contacto</li>
                <li className={styles.precios__listItem}>Página responsive</li>
                <li className={styles.precios__listItem}>Adaptación para compartir en RRSS</li>
                <li className={styles.precios__listItem}>Página SEO optimizada</li>
                <li className={styles.precios__listItem}>Adaptación con Google Analytics</li>
                <li className={styles.precios__listItem}>Sistema de contenidos</li>
                <li className={styles.precios__listItem}>Integración con pasarela de pago</li>
                <li className={styles.precios__listItem}>Hosting por 1 año</li>
                <li className={styles.precios__listItem}>Dominio por 1 año</li>
                <li className={styles.precios__listItem}>Certificado de seguridad SSL</li>
                <li className={styles.precios__listItem}>Carga de 20 productos</li>
              </ul>
              <button className={styles.precios__button}>Tu Tienda en Línea</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Precios;
