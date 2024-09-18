import React from 'react';
import styles from '@/styles/Footer.module.css'; // Cambia a módulos de CSS

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container mx-auto">
        <nav className="footer__nav flex justify-center">
          <a href="#" className="footer__nav-item">Inicio</a>
          <a href="#servicios" className="footer__nav-item">Servicios</a>
          <a href="#precios" className="footer__nav-item">Precios</a>
          <a href="#contacto" className="footer__nav-item">Contacto</a>
        </nav>
        <p className="text-sm text-gray-300 mt-4">© 2024 Identidad360. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
