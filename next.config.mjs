 /** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'; // Detecta si estás en producción
console.log("isProd", isProd);

const nextConfig = {
  // Otras configuraciones
  output: 'export',  // Asegura que el sitio se exporte de manera estática
  images: {
    unoptimized: true,  // Las imágenes deben estar desoptimizadas para exportación estática
  },
  assetPrefix: isProd ? '/Identidad360/' : '',  // Prefijo para servir los activos estáticos correctamente en producción
  basePath: isProd ? '/Identidad360' : '',  // Base path para rutas correctas en producción
  // Otros ajustes opcionales
   publicRuntimeConfig: {
    basePath: isProd ? '/Identidad360' : '',  // Hacer accesible basePath a los componentes
  },
};

export default nextConfig;




