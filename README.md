# ✍️ Yash Blog

A minimal, writing-first personal engineering blog built with **Next.js App Router**, **TypeScript**, **Tailwind CSS**, and **MDX**.

The project is intentionally quiet in its design: no cards, no decorative UI, and no marketing-style layout. It was built to prioritize clarity, readability, and long-form technical writing.

## ✨ Features

- MDX-based blog posts stored in `src/content/blogs`
- Dynamic blog routing with `/blog/[slug]`
- Minimal homepage with latest writing
- Typography-driven blog detail pages using `prose prose-invert`
- Simple content loader helpers: `getAllBlogs()` and `getBlogBySlug()`
- Clean, centered layout optimized for reading

## 🛠 Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- MDX
- `gray-matter`
- `next-mdx-remote`
- `remark-gfm`
- `@tailwindcss/typography`

## 📦 Installation

```bash
git clone <your-repo-url>
cd Yash-blog
npm install
npm run dev
```

Then open `http://localhost:3000`.

## 🧭 Usage

Add a new post by creating a `.mdx` file in `src/content/blogs`.

Example:

```mdx
---
title: My New Post
date: 2026-03-23
description: A short summary of the post.
tags:
  - Engineering
  - Notes
published: true
---

## Start writing
```

The filename becomes the slug. For example:

- `src/content/blogs/my-new-post.mdx` → `/blog/my-new-post`

## 🗂 Folder Structure

```bash
src/
├── app/            # App Router pages and layouts
├── components/     # Minimal shared UI and MDX renderer
├── content/blogs/  # MDX blog posts
└── lib/            # Content loading, utilities, config, and types
```

## 🖼 Screenshots

_Placeholder: add homepage and blog detail screenshots here._

## 🛣 Future Improvements

- Tag archive pages
- RSS feed generation
- Sitemap support
- Syntax highlighting improvements
- Search across posts

## 👨‍💻 Author

Built by **Yash** for thoughtful engineering writing.
