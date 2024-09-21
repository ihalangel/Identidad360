'use client'
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Modal from './Modal';


const Header: React.FC = () => {
 const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false); // Cierra el menú móvil al hacer clic en un enlace
  };



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


  return (<>
    <header className="bg-primary text-white w-full box-border p-4">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image 
            src="/Identidad360/images/logoIdentidad360_25px.png" 
            alt="Logo de IdentidadDigital360" 
            className="w-20 h-auto" // Aquí ajustas el tamaño del logo
            width={30} // Ancho de la imagen en proporción
            height={30} // Altura de la imagen en proporción
          />
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href={`/blog/`}>
            <span className="text-white hover:text-gray-300 transition-colors duration-300">Blog</span>
          </Link>
          <a href={`${basePath}#servicios`} className="text-white hover:text-gray-300 transition-colors duration-300">Servicios</a>
          <a href={`${basePath}/#precios`} className="text-white hover:text-gray-300 transition-colors duration-300">Precios</a>
          <a href={`${basePath}/#`} className="text-white hover:text-gray-300 transition-colors duration-300" 
          onClick={openModal} >Contacto</a>
        </nav>
        <button 
          id="mobile-menu-btn" 
          className="text-3xl md:hidden bg-none border-none text-white cursor-pointer"
          onClick={toggleMobileMenu}
        >
          &#9776;
        </button>
      </div>
      <nav 
        ref={mobileMenuRef}
        id="nav-menu" 
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute top-16 right-0 bg-primary w-full p-4 z-50`}
      >
         <Link href={`/blog/`}>
            <span className="block py-2 text-white hover:text-gray-300">Blog</span>
          </Link>
        <Link href={`${basePath}#servicios`}>
          <span className="block py-2 text-white hover:text-gray-300" onClick={handleNavLinkClick}>Servicios</span>
        </Link>
        <Link href={`${basePath}/#precios`}>
          <span className="block py-2 text-white hover:text-gray-300" onClick={handleNavLinkClick}>Precios</span>
        </Link>
        <Link href={`${basePath}#contacto`}>
          <span className="block py-2 text-white hover:text-gray-300" onClick={handleNavLinkClick}>Contacto</span>
        </Link>
      </nav>
    </header>
    <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Header;
