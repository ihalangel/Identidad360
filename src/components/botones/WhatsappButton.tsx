'use client'
import React, { useEffect, useState } from 'react';

const WhatsappButton: React.FC = () => {
  const whatsappNumber = '+34661054031'; // Reemplaza con tu número o enlace al grupo de WhatsApp
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  // Estado para manejar si el usuario está al final de la página
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Verifica si el usuario está a 100px del final de la página
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 100;
      if (scrollPosition >= threshold) {
        setIsNearBottom(true);
      } else {
        setIsNearBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
   <a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-green-500 rounded-full p-3 md:p-4 shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700
    transition-transform duration-500 ease-in-out 
    ${isNearBottom ? 'translate-y-[-5rem] translate-x-[-5rem]' : ''}`} // Mueve el botón cuando está al final
  aria-label="Contactar por WhatsApp"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="white"
    className="w-6 h-6 md:w-8 md:h-8"
  >
    <path d="M17.472 14.281c-.297-.149-1.758-.867-2.029-.967-.271-.1-.471-.149-.671.15-.2.297-.771.967-.946 1.165-.174.199-.348.224-.646.075-.297-.149-1.255-.463-2.39-1.475-.883-.789-1.48-1.761-1.653-2.059-.174-.297-.018-.458.13-.607.134-.134.297-.348.446-.522.149-.174.2-.298.3-.497.099-.199.05-.373-.025-.522-.075-.149-.671-1.611-.922-2.211-.241-.579-.487-.5-.671-.51-.173-.008-.372-.01-.571-.01-.199 0-.522.075-.796.373-.273.297-1.042 1.017-1.042 2.479 0 1.462 1.066 2.875 1.213 3.074.149.199 2.1 3.204 5.079 4.492.709.307 1.262.489 1.694.626.711.226 1.357.194 1.868.118.57-.085 1.758-.719 2.006-1.411.248-.692.248-1.287.174-1.411-.074-.124-.271-.198-.571-.347zM12.005 2C6.486 2 2 6.486 2 12.005c0 2.117.617 4.083 1.685 5.732L2 22l4.396-1.654A9.956 9.956 0 0 0 12.005 22C17.523 22 22 17.514 22 12.005 22 6.486 17.523 2 12.005 2zm0 18c-1.822 0-3.523-.528-4.965-1.432l-.352-.224-2.611.982.932-2.535-.231-.363C4.601 15.56 4 13.83 4 12.005 4 7.589 7.589 4 12.005 4 16.411 4 20 7.589 20 12.005c0 4.411-3.589 8-7.995 8z" />
  </svg>
</a>

  );
};

export default WhatsappButton;
