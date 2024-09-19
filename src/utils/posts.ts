import fs from 'fs';
import path from 'path';

const postsFilePath = path.join(process.cwd(), 'src/data/posts.json');

// Devuelve todos los posts
export async function getAllPosts() {
  const fileContents = fs.readFileSync(postsFilePath, 'utf8');
  const posts = JSON.parse(fileContents);
  return posts;
}

// Devuelve un post específico basado en el slug
export async function getPostBySlug(slug: string) {
  const fileContents = fs.readFileSync(postsFilePath, 'utf8');
  const posts = JSON.parse(fileContents);

  // Busca el post que tenga el slug exacto
  const post = posts.find((post: any) => post.url === slug);
  return post || null; // Devuelve null si no se encuentra el post
}

// Devuelve todos los slugs disponibles para la generación estática de rutas
export async function getAllPostSlugs() {
  const fileContents = fs.readFileSync(postsFilePath, 'utf8');
  const posts = JSON.parse(fileContents);

  // Extrae los slugs de todos los posts
  const slugs = posts.map((post: any) => ({ slug: post.url }));
  return slugs;
}
