// components/RelatedLinks.tsx
import React, { useEffect, useState } from 'react';

interface RelatedLinksProps {
  links: { title: string; url: string }[];
}

// Función para mezclar el array de enlaces de forma aleatoria
const shuffleArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const RelatedLinks: React.FC<RelatedLinksProps> = ({ links }) => {
  const [randomLinks, setRandomLinks] = useState<{ title: string; url: string }[]>([]);

  useEffect(() => {
    const shuffled = shuffleArray([...links]); // Mezcla los enlaces
    setRandomLinks(shuffled.slice(0, 3)); // Selecciona los primeros 3
  }, [links]);

  return (
    <div className="mt-8 p-6 bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-lg shadow-lg">
      <h3 className="text-2xl font-extrabold text-gray-800 mb-4">Te puede interesar:</h3>
      <ul className="space-y-4">
        {randomLinks.map((link, index) => (
          <li key={index} className="transition-transform transform hover:scale-105">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 ease-in-out hover:bg-gray-50"
            >
              <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
              <span className="text-sm font-semibold text-primary hover:text-blue-900 transition-colors duration-200 ease-in-out">
                {link.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedLinks;
