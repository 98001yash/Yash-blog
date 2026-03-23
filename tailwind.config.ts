import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#050816',
        surface: '#0b1120',
        muted: '#94a3b8',
        accent: '#38bdf8',
        border: 'rgba(148, 163, 184, 0.18)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(56, 189, 248, 0.08), 0 18px 60px rgba(15, 23, 42, 0.45)',
      },
      backgroundImage: {
        radial:
          'radial-gradient(circle at top, rgba(56, 189, 248, 0.16), rgba(5, 8, 22, 0) 42%)',
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};

export default config;
