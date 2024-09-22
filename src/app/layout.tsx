"use client";

import '../styles/globals.css';
import '../styles/base.css';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CookieConsent from 'react-cookie-consent';
import Cookies from 'js-cookie';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('user-consent');

    if (consent === 'true') {
      setCookiesAccepted(true);
    }

    if (cookiesAccepted && typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.gtag = (...args: any[]) => {
        console.log('gtag called with args:', args);
        window.dataLayer.push(args);
      };

      console.log('Google Analytics initialized');
      window.gtag('js', new Date());
      window.gtag('config', 'G-7SGN0GSQB7', { cookie_flags: 'SameSite=None;Secure' });
      AOS.init();
    }
  }, [cookiesAccepted]);

  const handleAcceptCookies = () => {
    console.log('Cookies accepted, initializing Google Analytics');
    setCookiesAccepted(true);
    Cookies.set('user-consent', 'true', { expires: 365 });
  };

  return (
    <html lang="es">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7SGN0GSQB7"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `}
        </script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
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


 