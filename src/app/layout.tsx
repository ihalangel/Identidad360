"use client"; // Esta línea permite usar hooks del cliente

import '../styles/globals.css'; // Estilos globales
import '../styles/base.css'; // Estilos de base
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CookieConsent from 'react-cookie-consent';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init();
  }, []);

  // Función que se ejecuta cuando el usuario acepta las cookies
  const handleAcceptCookies = () => {
    if (typeof window !== 'undefined') {
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      window.gtag('config', 'G-9R4Q3DF83V', { 'cookie_flags': 'SameSite=None;Secure' });
    }
  };

  return (
    <html lang="es">
      <head>
        {/* Google Analytics Script */}
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
          onAccept={handleAcceptCookies}
        >
          Este sitio usa cookies para mejorar la experiencia. Al continuar navegando, aceptas su uso.
        </CookieConsent>

      </body>
    </html>
  );
}
