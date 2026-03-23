import Link from 'next/link';

import { LayoutWrapper } from '@/components/layout-wrapper';
import { getAllBlogs } from '@/lib/content';
import { formatDate } from '@/lib/utils';

export default function HomePage() {
  const posts = getAllBlogs().slice(0, 5);

  return (
    <LayoutWrapper>
      <section className="space-y-12">
        <div className="space-y-5">
          <h1 className="font-serif text-4xl text-zinc-50 md:text-5xl">Yash</h1>
          <p className="max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
            I write about frontend architecture, engineering systems, and the day-to-day craft of
            building software with care.
          </p>
        </div>

        <section className="space-y-6">
          <h2 className="font-serif text-2xl text-zinc-100">Latest writing</h2>
          <ul className="space-y-6">
            {posts.map((post) => (
              <li key={post.slug} className="space-y-1">
                <Link href={`/blog/${post.slug}`} className="text-lg text-zinc-100 hover:underline">
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

          <Link href="/blog" className="inline-block text-sm text-zinc-300 hover:underline">
            View all posts
          </Link>
        </section>
      </section>
    </LayoutWrapper>
  );
}
