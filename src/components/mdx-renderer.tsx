import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

import { mdxComponents } from '@/components/mdx-components';

export async function MdxRenderer<TFrontmatter>({
  source,
}: {
  source: string;
  frontmatter?: TFrontmatter;
}) {
  const { content } = await compileMDX<TFrontmatter>({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return <div className="prose prose-invert max-w-none">{content}</div>;
}
