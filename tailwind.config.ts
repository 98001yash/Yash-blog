import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        foreground: '#f5f5f5',
        muted: '#a1a1aa',
      },
      maxWidth: {
        reading: '44rem',
      },
      typography: {
        invert: {
          css: {
            '--tw-prose-body': '#d4d4d8',
            '--tw-prose-headings': '#fafafa',
            '--tw-prose-links': '#fafafa',
            '--tw-prose-bold': '#fafafa',
            '--tw-prose-counters': '#a1a1aa',
            '--tw-prose-bullets': '#52525b',
            '--tw-prose-hr': '#27272a',
            '--tw-prose-quotes': '#e4e4e7',
            '--tw-prose-quote-borders': '#27272a',
            '--tw-prose-captions': '#a1a1aa',
            '--tw-prose-code': '#fafafa',
            '--tw-prose-pre-code': '#e4e4e7',
            '--tw-prose-pre-bg': '#111111',
            '--tw-prose-th-borders': '#27272a',
            '--tw-prose-td-borders': '#27272a',
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
