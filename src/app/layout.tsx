"use client";

import '../styles/globals.css';
import '../styles/base.css';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CookieConsent from 'react-cookie-consent';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [cookiesAccepted, setCookiesAccepted] = useState(false); // Estado para rastrear la aceptación de cookies

  const gtag = (...args: any[]) => {
    if (typeof window !== 'undefined' && cookiesAccepted) {
      console.log('gtag called with args:', args);
      window.dataLayer.push(args);
    }
  };

  // Este efecto sólo se activará cuando las cookies sean aceptadas
  useEffect(() => {
    if (cookiesAccepted && typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];

      // Definir gtag como una función global
      window.gtag = (...args: any[]) => {
        window.dataLayer.push(args);
      };

      console.log('Google Analytics initialized');
      window.gtag('js', new Date());
      window.gtag('config', 'G-9R4Q3DF83V', { cookie_flags: 'SameSite=None;Secure' });

      AOS.init(); // Inicializar animaciones AOS
    }
  }, [cookiesAccepted]); // Solo ejecutar si las cookies son aceptadas

  // Manejar la aceptación de cookies
  const handleAcceptCookies = () => {
    console.log('Cookies accepted, updating gtag config');
    setCookiesAccepted(true); // Actualizar el estado cuando las cookies sean aceptadas
  };

  return (
    <html lang="es">
      <head>
        {/* El script de Google Analytics sólo se cargará si se aceptan las cookies */}
        {cookiesAccepted && (
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
              `,
            }}
          />
        )}
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Consentimiento de cookies */}
        <CookieConsent
          buttonText="Acepto"
          cookieName="user-consent"
          style={{ background: "#000", color: "#fff", padding: "10px" }}
          buttonStyle={{ color: "#000", background: "#fff", fontSize: "13px" }}
          expires={365}
          onAccept={handleAcceptCookies}
        >
          Este sitio usa cookies para mejorar la experiencia. Al continuar navegando, aceptas su uso.
        </CookieConsent>
      </body>
    </html>
  );
}
