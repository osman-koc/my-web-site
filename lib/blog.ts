import { getAllMediumPosts } from './medium';
import externalPosts from '@/data/external-posts.json';
import { type Post } from '@/types/post';

export interface BlogFeed {
  posts: Post[];
  total: number;
}

export async function getBlogPosts(limit = 10, page = 1): Promise<BlogFeed> {
  const mediumPosts = await getAllMediumPosts();
  const staticPosts: Post[] = externalPosts;

  const merged = [...mediumPosts, ...staticPosts]
    .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  const total = merged.length;
  const start = (page - 1) * limit;
  return { posts: merged.slice(start, start + limit), total };
}
