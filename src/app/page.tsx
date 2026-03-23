import Link from 'next/link';

import { BlogCard } from '@/components/blog-card';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { ProjectCard } from '@/components/project-card';
import { SectionHeading } from '@/components/section-heading';
import { getAllBlogs, getFeaturedProjects, getAllTags } from '@/lib/content';

export default function HomePage() {
  const featuredProjects = getFeaturedProjects().slice(0, 2);
  const latestPosts = getAllBlogs().slice(0, 3);
  const tags = getAllTags().slice(0, 8);

  return (
    <LayoutWrapper>
      <section className="grid gap-10 pb-20 pt-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div className="space-y-6">
        <p className="eyebrow">Engineering Blog · System Design · Backend</p>
          <div className="space-y-5">
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-6xl">
  Engineering systems, not just features.
</h1>

<p className="max-w-2xl text-lg leading-8 text-slate-300">
  I write deep dives on backend architecture, system design, scalability, and real-world engineering challenges.
</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              Explore projects
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-300/50 hover:text-sky-100"
            >
              Read the blog
            </Link>
          </div>
        </div>

        <div className="panel p-6">
        <p className="eyebrow">What I write about</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
  'System design and scalable architectures',
  'Backend engineering patterns and trade-offs',
  'Real-world project breakdowns and case studies',
  'Lessons from building production systems',
].map((item) => (
              <div key={item} className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-sm text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <SectionHeading
          eyebrow="Case Studies"
title="Deep dives into real-world systems"
          description="A curated set of projects that emphasize architecture clarity, product thinking, and implementation depth."
          action={<Link href="/projects" className="text-sm font-medium text-sky-300">See all projects →</Link>}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} slug={project.slug} frontmatter={project.frontmatter} />
          ))}
        </div>
      </section>

      <section className="pb-20">
        <SectionHeading
          eyebrow="Latest writing"
          title="Essays on frontend systems, DX, and shipping quality"
          description="Writing that breaks down engineering tradeoffs, implementation patterns, and maintainable product architecture."
          action={<Link href="/blog" className="text-sm font-medium text-sky-300">Browse archive →</Link>}
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} slug={post.slug} frontmatter={post.frontmatter} />
          ))}
        </div>
      </section>

      <section className="panel p-8">
        <SectionHeading
          eyebrow="Taxonomy"
          title="What this platform covers"
          description="An extensible tagging system that makes it straightforward to organize new writing and case studies as the site grows."
        />
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200">
              {tag}
            </span>
          ))}
        </div>
      </section>
    </LayoutWrapper>
  );
}
