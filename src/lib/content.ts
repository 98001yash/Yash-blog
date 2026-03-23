import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';

import type { BlogFrontmatter, ContentEntry, ProjectFrontmatter } from '@/lib/types';

const contentRoot = path.join(process.cwd(), 'src', 'content');

function readDirectory(directory: string) {
  return fs.readdirSync(directory).filter((file) => file.endsWith('.mdx'));
}

function readMdxFile<TFrontmatter>(directory: string, slug: string): ContentEntry<TFrontmatter> {
  const filePath = path.join(directory, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(source);

  return {
    slug,
    frontmatter: data as TFrontmatter,
    content,
  };
}

function getCollection<TFrontmatter>(folder: 'blogs' | 'projects') {
  const directory = path.join(contentRoot, folder);
  const entries = readDirectory(directory).map((file) => {
    const slug = file.replace(/\.mdx$/, '');
    return readMdxFile<TFrontmatter>(directory, slug);
  });

  return entries
    .filter((entry) => entry.frontmatter.published !== false)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime(),
    );
}

export function getAllBlogs() {
  return getCollection<BlogFrontmatter>('blogs');
}

export function getAllProjects() {
  return getCollection<ProjectFrontmatter>('projects');
}

export function getBlogBySlug(slug: string) {
  return readMdxFile<BlogFrontmatter>(path.join(contentRoot, 'blogs'), slug);
}

export function getProjectBySlug(slug: string) {
  return readMdxFile<ProjectFrontmatter>(path.join(contentRoot, 'projects'), slug);
}

export function getFeaturedProjects() {
  return getAllProjects().filter((project) => project.frontmatter.featured);
}

export function getAllTags() {
  const tags = new Set<string>();

  [...getAllBlogs(), ...getAllProjects()].forEach((entry) => {
    entry.frontmatter.tags.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort((a, b) => a.localeCompare(b));
}
