 /** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'; // Detecta si estás en producción

const nextConfig = {
  // Otras configuraciones
  output: 'export',  // Asegura que el sitio se exporte de manera estática
  images: {
    unoptimized: true,  // Las imágenes deben estar desoptimizadas para exportación estática
  },
  assetPrefix: isProd ? '/' : '',  // Prefijo para servir los activos estáticos correctamente en producción
  basePath: isProd ? '' : '',  // Base path para rutas correctas en producción
  // Otros ajustes opcionales
};

export default nextConfig;




