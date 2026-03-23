import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { LayoutWrapper } from '@/components/layout-wrapper';
import { MdxRenderer } from '@/components/mdx-renderer';
import { TagList } from '@/components/tag-list';
import { getAllProjects, getProjectBySlug } from '@/lib/content';
import { formatDate } from '@/lib/utils';

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const project = getProjectBySlug(slug);
    return {
      title: project.frontmatter.title,
      description: project.frontmatter.description,
    };
  } catch {
    return {};
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  try {
    const project = getProjectBySlug(slug);

    return (
      <LayoutWrapper>
        <article className="pb-20 pt-10">
          <div className="panel p-8 md:p-10">
            <div className="space-y-5 border-b border-white/10 pb-8">
              <p className="eyebrow">Project case study</p>
              <div className="space-y-3">
                <h1 className="max-w-4xl text-4xl font-semibold md:text-5xl">{project.frontmatter.title}</h1>
                <p className="max-w-3xl text-lg leading-8 text-slate-300">{project.frontmatter.description}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                <span>{project.frontmatter.role}</span>
                <span className="h-1 w-1 rounded-full bg-slate-500" />
                <span>{project.frontmatter.platform}</span>
                <span className="h-1 w-1 rounded-full bg-slate-500" />
                <span>{formatDate(project.frontmatter.date)}</span>
              </div>
              <TagList tags={project.frontmatter.tags} />
            </div>
            <div className="pt-8">
              <MdxRenderer source={project.content} />
            </div>
          </div>
        </article>
      </LayoutWrapper>
    );
  } catch {
    notFound();
  }
}
