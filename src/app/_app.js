// import '../styles/globals.css';
// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import CookieConsent from 'react-cookie-consent';

// function MyApp({ Component, pageProps }) {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <>
//       <CookieConsent
//         buttonText="Acepto"
//         cookieName="user-consent"
//         style={{ background: "#000", color: "#fff", padding: "10px" }}
//         buttonStyle={{ color: "#000", background: "#fff", fontSize: "13px" }}
//         expires={365}
//         onAccept={() => {
//           window.gtag = function () { window.dataLayer.push(arguments); };
//           window.gtag('js', new Date());
//           window.gtag('config', 'G-XXXXXXXXXX', { 'cookie_flags': 'SameSite=None;Secure' });
//         }}
//       >
//         Este sitio usa cookies para mejorar la experiencia. Al continuar navegando, aceptas su uso.
//       </CookieConsent>
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default MyApp;
