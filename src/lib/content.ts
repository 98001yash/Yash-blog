import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';

import type { BlogEntry, BlogFrontmatter } from '@/lib/types';

const blogsDirectory = path.join(process.cwd(), 'src', 'content', 'blogs');

function readBlogFile(slug: string): BlogEntry {
  const filePath = path.join(blogsDirectory, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(source);

  return {
    slug,
    content,
    frontmatter: data as BlogFrontmatter,
  };
}

export function getAllBlogs(): BlogEntry[] {
  return fs
    .readdirSync(blogsDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => readBlogFile(file.replace(/\.mdx$/, '')))
    .filter((post) => post.frontmatter.published !== false)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime(),
    );
}

export function getBlogBySlug(slug: string): BlogEntry {
  return readBlogFile(slug);
}
