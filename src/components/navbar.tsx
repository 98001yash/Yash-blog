import Link from 'next/link';

import { siteConfig } from '@/lib/site-config';

export function Navbar() {
  return (
    <header className="mx-auto w-full max-w-3xl px-6 pt-8 md:px-8 md:pt-10">
      <nav className="flex items-center gap-6 text-sm text-zinc-400">
        {siteConfig.nav.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-zinc-100">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
