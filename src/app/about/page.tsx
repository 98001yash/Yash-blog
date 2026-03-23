import type { Metadata } from 'next';

import { LayoutWrapper } from '@/components/layout-wrapper';
import { SectionHeading } from '@/components/section-heading';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'About',
  description: 'About the engineer behind this portfolio platform and the systems approach behind the work.',
};

const principles = [
  {
    title: 'System-first thinking',
    copy: 'I design interfaces as connected systems: components, content workflows, and engineering decisions all need to scale together.',
  },
  {
    title: 'Product-aware engineering',
    copy: 'Strong frontend architecture only matters when it serves clarity, iteration speed, and measurable product outcomes.',
  },
  {
    title: 'Sustainable shipping',
    copy: 'The best codebases optimize for long-term maintainability with pragmatic abstractions and well-defined boundaries.',
  },
];

export default function AboutPage() {
  return (
    <LayoutWrapper>
      <section className="pb-20 pt-10">
        <SectionHeading
          eyebrow="About"
          title="Frontend engineer, system designer, and builder of reliable digital products"
          description="This portfolio is structured like the kind of codebase I prefer to work in: calm, consistent, and ready for growth."
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="panel p-8">
            <div className="space-y-5 text-slate-300">
              <p>
                I focus on product-facing frontend engineering where design quality, developer experience,
                and scalable architecture all intersect. My preferred environments value thoughtful systems,
                strong execution, and measurable outcomes.
              </p>
              <p>
                This site demonstrates a content-driven architecture using MDX collections, typed data access,
                reusable UI primitives, and static generation patterns that stay fast as content volume grows.
              </p>
              <p>
                Outside of implementation details, I care deeply about editing loops, system clarity, and
                reducing friction for teams who need to ship confidently.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            {principles.map((principle) => (
              <article key={principle.title} className="panel p-6">
                <h3 className="text-xl font-semibold text-white">{principle.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{principle.copy}</p>
              </article>
            ))}
            <article className="panel p-6 text-sm text-slate-300">
              <p className="font-medium text-white">Reach out</p>
              <div className="mt-3 space-y-2">
                <a href={siteConfig.social.email} className="block hover:text-sky-200">
                  {siteConfig.social.email.replace('mailto:', '')}
                </a>
                <a href={siteConfig.social.github} className="block hover:text-sky-200">
                  GitHub
                </a>
                <a href={siteConfig.social.linkedin} className="block hover:text-sky-200">
                  LinkedIn
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
