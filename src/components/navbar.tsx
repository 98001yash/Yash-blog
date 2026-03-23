import Link from 'next/link';

import { siteConfig } from '@/lib/site-config';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="shell flex items-center justify-between py-4">
        <Link href="/" className="text-sm font-semibold tracking-[0.3em] text-slate-100 uppercase">
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-5 text-sm text-slate-300">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
