import type { ReactNode } from 'react';

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl space-y-3">
        <p className="eyebrow">{eyebrow}</p>
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
          <p className="text-base leading-7 text-slate-300">{description}</p>
        </div>
      </div>
      {action}
    </div>
  );
}
