import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs } from '@/utils/posts';
import BlogPost from '@/components/blog/BlogPost';
// import { BlogPostType } from '@type/index.d.ts';
import type { BlogPostType } from '@type/index.d.ts'; // Ajusta la ruta según la ubicación de tu archivo de tipos


interface Params {
  slug: string;
}

// Genera rutas estáticas en el momento de la construcción
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs(); // Obtiene todos los slugs disponibles

  return slugs.map(({ slug }: { slug: string }) => ({
    slug,
  }));
}

// Genera los metadatos para la página estática
export async function generateMetadata({ params }: { params: Params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return {
      title: 'Post not found',
      description: 'No description available',
    };
  }

  return {
    title: post.title,
    description: post.description || 'Descripción por defecto',
    keywords: post.keywords ? post.keywords.join(', ') : 'default, keywords',
  };
}

// Tu componente de página
const BlogPostPage = async ({ params }: { params: Params }) => {
  const post: BlogPostType | null = await getPostBySlug(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <BlogPost
      title={post.title}
      description={post.description}
      image={post.image}
      url={post.url}
      hashtags={post.hashtags}
      content={post.content}
      date={post.date || 'Fecha no disponible'}
      alt={post.alt}
    />
  );
};

export default BlogPostPage;
