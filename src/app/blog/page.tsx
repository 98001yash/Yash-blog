import type { Metadata } from 'next';
import Link from 'next/link';

import { LayoutWrapper } from '@/components/layout-wrapper';
import { getAllBlogs } from '@/lib/content';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Essays on engineering, frontend architecture, and building software with clarity.',
};

export default function BlogPage() {
  const posts = getAllBlogs();

  return (
    <LayoutWrapper>
      <section className="space-y-10">
        <div className="space-y-3">
          <h1 className="font-serif text-4xl text-zinc-50">Blog</h1>
          <p className="text-base leading-8 text-zinc-400">
            Notes on engineering, systems thinking, and the craft of making software easier to work in.
          </p>
        </div>

        <ul className="space-y-8">
          {posts.map((post) => (
            <li key={post.slug} className="space-y-1">
              <Link href={`/blog/${post.slug}`} className="text-xl text-zinc-100 hover:underline">
                {post.frontmatter.title}
              </Link>
              <div className="text-sm text-zinc-500">
                <time dateTime={post.frontmatter.date}>{formatDate(post.frontmatter.date)}</time>
                {post.frontmatter.readingTime ? ` · ${post.frontmatter.readingTime}` : ''}
              </div>
              <p className="max-w-2xl text-sm leading-7 text-zinc-400">
                {post.frontmatter.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </LayoutWrapper>
  );
}
