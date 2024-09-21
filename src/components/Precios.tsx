import React from 'react';

const Precios: React.FC = () => {
  return (
    <section id="precios" className="py-6 bg-gray-100">
      <div className="container mx-auto max-w-screen-lg">

        <h3 className="text-3xl font-bold text-center text-blue-800 mb-8" data-aos="fade-up">
          Nuestros Planes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan Landing Page */}
          <div className="bg-white rounded-lg shadow-lg p-8" data-aos="fade-right">
            <div>
              <h4 className="text-xl font-bold text-blue-800 mb-4">Landing Page</h4>
              <ul className="space-y-3 mb-6">
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> Certificado de Seguridad SSL
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> Diseño web a medida basado en bloques de contenido
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> Formulario de contacto
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> Página responsive
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> Adaptación para compartir en RRSS
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> Hosting por 1 año
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> Dominio por 1 año
                </li>
              </ul>
              <button className="bg-blue-800 text-white py-3 px-6 rounded-lg hover:bg-blue-900 transition transform hover:translate-y-[-2px]">
                Solicita tu Landing Page
              </button>
            </div>
          </div>

          {/* Plan Corporativa */}
          <div className="bg-white rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="100">
            <div>
              <h4 className="text-xl font-bold text-blue-800 mb-4">Corporativa</h4>
              <ul className="space-y-3 mb-6">
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> 5 secciones o páginas
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> 15 correos electrónicos corporativos
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> Formulario de contacto
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> Página responsive
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> Adaptación para compartir en RRSS
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> Página SEO optimizada
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> Adaptación con Google Analytics
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> Sistema de contenidos
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> Hosting por 1 año
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> Dominio por 1 año
                </li>
              </ul>
              <button className="bg-blue-800 text-white py-3 px-6 rounded-lg hover:bg-blue-900 transition transform hover:translate-y-[-2px]">
                Crea tu Sitio Corporativo
              </button>
            </div>
          </div>

          {/* Plan E-commerce */}
          <div className="bg-white rounded-lg shadow-lg p-8" data-aos="fade-left" data-aos-delay="200">
            <div>
              <h4 className="text-xl font-bold text-blue-800 mb-4">Tienda Online</h4>
              <ul className="space-y-3 mb-6">
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> 7 secciones
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> Correos electrónicos corporativos ilimitados
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> Formulario de contacto
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> Página responsive
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> Adaptación para compartir en RRSS
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> Página SEO optimizada
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> Adaptación con Google Analytics
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> Sistema de contenidos
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> Integración con pasarela de pago
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> Hosting por 1 año
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> Dominio por 1 año
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> Certificado de seguridad SSL
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0">✅</span> Carga de 20 productos
                </li>
              </ul>
              <button className="bg-blue-800 text-white py-3 px-6 rounded-lg hover:bg-blue-900 transition transform hover:translate-y-[-2px]">
                Tu Tienda en Línea
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Precios;
