import Link from 'next/link';

import { TagList } from '@/components/tag-list';
import type { ProjectFrontmatter } from '@/lib/types';
import { formatDate } from '@/lib/utils';

export function ProjectCard({
  slug,
  frontmatter,
}: {
  slug: string;
  frontmatter: ProjectFrontmatter;
}) {
  return (
    <article className="panel group h-full p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="flex h-full flex-col gap-5">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
            <span>{frontmatter.platform}</span>
            <span className="h-1 w-1 rounded-full bg-slate-500" />
            <span>{frontmatter.role}</span>
            <span className="h-1 w-1 rounded-full bg-slate-500" />
            <span>{formatDate(frontmatter.date)}</span>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-white group-hover:text-sky-200">
              <Link href={`/projects/${slug}`}>{frontmatter.title}</Link>
            </h3>
            <p className="text-sm leading-6 text-slate-300">{frontmatter.description}</p>
          </div>
        </div>
        <div className="mt-auto space-y-5">
          <TagList tags={frontmatter.tags} />
          <Link href={`/projects/${slug}`} className="inline-flex text-sm font-medium text-sky-300">
            View case study →
          </Link>
        </div>
      </div>
    </article>
  );
}
