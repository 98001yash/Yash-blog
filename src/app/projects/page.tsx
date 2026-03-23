import type { Metadata } from 'next';

import { LayoutWrapper } from '@/components/layout-wrapper';
import { ProjectCard } from '@/components/project-card';
import { SectionHeading } from '@/components/section-heading';
import { getAllProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Case studies covering product architecture, frontend engineering, and developer experience.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <LayoutWrapper>
      <section className="pb-14 pt-10">
        <SectionHeading
          eyebrow="Projects"
          title="A library of product and platform work"
          description="Detailed case studies showing the why behind the work—not just the interface, but the engineering strategy that made it robust."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} slug={project.slug} frontmatter={project.frontmatter} />
          ))}
        </div>
      </section>
    </LayoutWrapper>
  );
}
