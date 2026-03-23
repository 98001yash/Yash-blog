import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { LayoutWrapper } from '@/components/layout-wrapper';
import { MdxRenderer } from '@/components/mdx-renderer';
import { getAllBlogs, getBlogBySlug } from '@/lib/content';
import { formatDate } from '@/lib/utils';

export async function generateStaticParams() {
  return getAllBlogs().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = getBlogBySlug(slug);

    return {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
    };
  } catch {
    return {};
  }
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  try {
    const post = getBlogBySlug(slug);

    return (
      <LayoutWrapper>
        <article className="mx-auto max-w-reading space-y-8">
          <header className="space-y-4">
            <h1 className="font-serif text-4xl leading-tight text-zinc-50 md:text-5xl">
              {post.frontmatter.title}
            </h1>
            <div className="text-sm text-zinc-500">
              <time dateTime={post.frontmatter.date}>{formatDate(post.frontmatter.date)}</time>
              {post.frontmatter.readingTime ? ` · ${post.frontmatter.readingTime}` : ''}
            </div>
            <p className="text-base leading-8 text-zinc-400">{post.frontmatter.description}</p>
          </header>

          <MdxRenderer source={post.content} />
        </article>
      </LayoutWrapper>
    );
  } catch {
    notFound();
  }
}
