import Link from 'next/link';
import { BlogPostType } from '@type/index'; // Ajusta el path según la ubicación de tu archivo de tipos

interface BlogListProps {
  posts: BlogPostType[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map(post => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link href={`/blog/${post.url}`} className="block">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover" 
                loading="lazy" // Mejora el rendimiento al cargar imágenes solo cuando están en el viewport
              />
              <div className="p-4">
                <header>
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                </header>
                <p className="text-gray-600">{post.description}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogList;


