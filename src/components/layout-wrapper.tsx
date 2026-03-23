import type { PropsWithChildren } from 'react';

export function LayoutWrapper({ children }: PropsWithChildren) {
  return <div className="mx-auto w-full max-w-3xl px-6 py-16 md:px-8">{children}</div>;
}
