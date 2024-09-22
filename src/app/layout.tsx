"use client";

import '../styles/globals.css';
import '../styles/base.css';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CookieConsent from 'react-cookie-consent';
import Cookies from 'js-cookie'; // Para manejar cookies de forma fácil
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [cookiesAccepted, setCookiesAccepted] = useState(false); // Estado para manejar si las cookies han sido aceptadas

  // Función gtag solo se ejecutará si las cookies son aceptadas
  const gtag = (...args: any[]) => {
    if (typeof window !== 'undefined' && cookiesAccepted) {
      console.log('gtag called with args:', args);
      window.dataLayer.push(args);
    }
  };

  useEffect(() => {
    // Verificar si el usuario ya ha aceptado las cookies previamente
    const consent = Cookies.get('user-consent'); // Leer la cookie 'user-consent'

    if (consent === 'true') {
      setCookiesAccepted(true); // Si ya aceptó, actualizar el estado
    }

    if (cookiesAccepted && typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];

      // Definir gtag como una función global en window
      window.gtag = gtag; // Usar la función gtag definida arriba
      console.log('Google Analytics initialized');

      // Inicializar Google Analytics
      window.gtag('js', new Date());
      window.gtag('config', 'G-7SGN0GSQB7', { cookie_flags: 'SameSite=None;Secure' });

      // Inicializar AOS solo después de la aceptación de cookies
      AOS.init();
    }
  }, [cookiesAccepted]); // Se ejecuta solo si las cookies han sido aceptadas

  // Función para manejar la aceptación de cookies
  const handleAcceptCookies = () => {
    console.log('Cookies accepted, initializing Google Analytics');
    setCookiesAccepted(true); // Actualizar el estado cuando se acepten las cookies
    Cookies.set('user-consent', 'true', { expires: 365 }); // Guardar el consentimiento en una cookie
  };

  return (
    <html lang="es">
      <head>
        {/* Meta y otros scripts necesarios */}
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Cookie Consent */}
        <CookieConsent
          buttonText="Acepto"
          cookieName="user-consent"
          style={{ background: "#000", color: "#fff", padding: "10px" }}
          buttonStyle={{ color: "#000", background: "#fff", fontSize: "13px" }}
          expires={365}
          onAccept={handleAcceptCookies} // Aquí manejamos la aceptación
        >
          Este sitio usa cookies para mejorar la experiencia. Al continuar navegando, aceptas su uso.
        </CookieConsent>
      </body>
    </html>
  );
}
