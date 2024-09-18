import { getAllPosts } from '@/utils/posts';
import BlogList from '@/components/blog/BlogList';
import Sidebar from '@/components/blog/Sidebar';

const BlogPage = async () => {
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Artículos Publicados</h1>
        <BlogList posts={posts} />
      </main>
      <aside className="w-full max-w-xs p-4 bg-gray-100 rounded-lg shadow-md lg:sticky lg:top-0 lg:bottom-0 lg:h-screen lg:w-64">
        <Sidebar />
      </aside>
    </div>
  );
};

export default BlogPage;


