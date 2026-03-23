import type { PropsWithChildren } from 'react';

export function LayoutWrapper({ children }: PropsWithChildren) {
  return <div className="shell pb-24 pt-8 md:pt-12">{children}</div>;
}
