import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/utils/posts';
import BlogPost from '@/components/blog/BlogPost';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  return {
    title: post.title,
    description: post.description || 'Descripción por defecto',
    keywords: post.keywords ? post.keywords.join(', ') : 'default, keywords',
  };
}

// Tu componente de página
const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getPostBySlug(params.slug);

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
