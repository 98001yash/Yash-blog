import type { Metadata } from 'next';

import { BlogCard } from '@/components/blog-card';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { SectionHeading } from '@/components/section-heading';
import { getAllBlogs } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Long-form writing on frontend architecture, product engineering, and scalable systems.',
};

export default function BlogPage() {
  const posts = getAllBlogs();

  return (
    <LayoutWrapper>
      <section className="pb-14 pt-10">
        <SectionHeading
          eyebrow="Blog"
          title="Engineering deep dives & system design notes"
          description="Writing that explores backend systems, scalability, system design decisions, and real-world engineering challenges.ience."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} slug={post.slug} frontmatter={post.frontmatter} />
          ))}
        </div>
      </section>
    </LayoutWrapper>
  );
}
