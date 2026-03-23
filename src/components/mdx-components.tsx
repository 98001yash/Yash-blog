import type { MDXComponents } from 'mdx/types';

export const mdxComponents: MDXComponents = {
  a: (props) => <a className="text-zinc-100 underline underline-offset-4" {...props} />,
  code: (props) => <code className="rounded bg-zinc-900 px-1.5 py-0.5 text-[0.9em]" {...props} />,
  pre: (props) => <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-4" {...props} />,
};
