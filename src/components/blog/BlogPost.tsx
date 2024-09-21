"use client"; // Esta línea permite usar hooks del cliente

import Image from 'next/image';
import Sidebar from '@/components/blog/Sidebar';
import RelatedLinks from '@/components/blog/components/RelatedLinks'; // Importamos el nuevo módulo

// Definimos los enlaces relacionados fuera del componente
const defaultRelatedLinks = [
  { title: 'Impulsa tu negocio con una Landing Page efectiva', url: '/blog/impulsa-tu-negocio-con-una-landing-page-efectiva' },
  { title: 'Desarrolla tu sitio web corporativo', url: '/blog/desarrolla-tu-sitio-web-corporativo-profesional' },
  { title: 'Lanza tu tienda online de manera efectiva', url: '/blog/lanza-tu-tienda-online-de-manera-efectiva' },
  { title: 'Incrementa tu visibilidad con marketing digital', url: '/blog/incrementa-tu-visibilidad-con-marketing-digital' },
  { title: 'Cómo utilizar Google Analytics para mejorar tu sitio web', url: '/blog/utilizar-google-analytics-mejorar-sitio-web' },
];

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

interface BlogPostProps {
  title: string;
  description: string;
  image: string;
  url: string;
  hashtags?: string[];
  content: string[]; // Cambiado a array de strings
  date: string;
  alt: string;
  relatedLinks?: { title: string; url: string }[]; // Nueva prop para enlaces relacionados
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  description,
  image,
  url,
  hashtags = [],
  content,
  date,
  alt,
  relatedLinks = defaultRelatedLinks, // Usamos el array definido por defecto
}) => {
  return (
    <div className="w-[95%] mx-auto px-4 py-8 bg-gray-100 flex flex-col gap-8">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">{title}</h1>

      <div className="flex flex-col lg:flex-row lg:gap-8">
        <div className="w-full lg:flex-1 flex flex-col">
          <div className="flex flex-col lg:flex-row lg:gap-8 mb-8">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <Image
                src={`${basePath}${image}`}
                alt={alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">{description}</h2>
              <div
                className="prose prose-lg max-w-full text-gray-800 leading-loose overflow-hidden"
                dangerouslySetInnerHTML={{ __html: content.slice(0, 1).join('') }} // Muestra solo el primer bloque
              />
            </div>
          </div>
          <div className="prose prose-lg max-w-full text-gray-800 leading-loose mt-4">
            {content.slice(1).map((block, index) => (
              <div
                key={index}
                dangerouslySetInnerHTML={{ __html: block }}
              />
            ))}
          </div>
        </div>

        <aside>
          <Sidebar />
        </aside>
      </div>

      {relatedLinks.length > 0 && <RelatedLinks links={relatedLinks} />}

      {Array.isArray(hashtags) && hashtags.length > 0 && (
        <div className="mt-4 w-full">
          {hashtags.map((hashtag, index) => (
            <span
              key={index}
              className="inline-block text-white px-3 py-1 rounded-full text-xs font-semibold mr-2 mb-2"
              style={{
                backgroundColor: 'var(--color-primary)', // Usando la variable CSS para el color de fondo
                color: 'var(--color-background)' // Usando la variable CSS para el color del texto
              }}
            >
              {hashtag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPost;
