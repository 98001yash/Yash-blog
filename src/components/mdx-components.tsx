import type { MDXComponents } from 'mdx/types';

export const mdxComponents: MDXComponents = {
  h2: (props) => <h2 className="mt-12 text-2xl font-semibold" {...props} />,
  h3: (props) => <h3 className="mt-8 text-xl font-semibold" {...props} />,
  p: (props) => <p className="mt-4 leading-8 text-slate-300" {...props} />,
  ul: (props) => <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-300" {...props} />,
  ol: (props) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-slate-300" {...props} />,
  li: (props) => <li className="pl-1" {...props} />,
  a: (props) => <a className="text-sky-300 underline decoration-sky-500/50 underline-offset-4" {...props} />,
  code: (props) => <code className="rounded bg-white/5 px-1.5 py-0.5 text-sm text-sky-100" {...props} />,
  pre: (props) => (
    <pre
      className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-slate-950/80 p-5 text-sm text-sky-100"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote className="mt-6 border-l-2 border-sky-400/50 pl-4 italic text-slate-300" {...props} />
  ),
};
