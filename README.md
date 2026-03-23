# 🚀 Devfolio MDX

A modern **developer portfolio + blog platform** built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **MDX**.

It was designed as a clean, scalable foundation for developers who want one place to showcase projects, publish technical writing, and maintain content with a code-first workflow.

## ✨ Features

- **MDX-powered blog system** for writing posts with frontmatter, rich formatting, headings, and code blocks
- **Project showcase** with dynamic case study pages for detailed engineering write-ups
- **Dynamic routing** with slug-based pages like `/blog/[slug]` and `/projects/[slug]`
- **Clean dark UI** optimized for developer portfolios and technical content
- **Reusable architecture** with clear separation across app routes, components, content, and utilities
- **SEO-ready metadata** for static and dynamic pages

## 🛠 Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **MDX**
- **React**
- **gray-matter** for frontmatter parsing
- **next-mdx-remote** for MDX rendering

## 📦 Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd Yash-blog
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧭 Usage

### Add a new blog post

Create a new `.mdx` file inside:

```bash
src/content/blogs/
```

Example frontmatter:

```mdx
---
title: My New Blog Post
description: A short summary of the article.
date: 2026-03-23
tags:
  - Next.js
  - MDX
readingTime: 5 min read
published: true
---

## Start writing here
```

### Add a new project

Create a new `.mdx` file inside:

```bash
src/content/projects/
```

Example frontmatter:

```mdx
---
title: My New Project
description: A concise project overview.
date: 2026-03-23
tags:
  - TypeScript
  - Architecture
role: Frontend Engineer
platform: Web App
website: https://example.com
repository: https://github.com/example/repo
featured: true
published: true
---

## Problem
## Solution
## Tech Stack
## Architecture
## Challenges
## Engineering Decisions
```

Once added, the new content is automatically available through its slug-based route.

## 🗂 Folder Structure

```bash
src/
├── app/          # App Router pages, layouts, and route segments
├── components/   # Reusable UI building blocks
├── content/      # MDX content collections
│   ├── blogs/    # Blog posts
│   └── projects/ # Project case studies
└── lib/          # Content loaders, site config, types, and utilities
```

### Key directories

- **`src/app`** — Route definitions for pages like home, blog, projects, and about
- **`src/components`** — Shared UI components such as cards, navbar, and MDX render helpers
- **`src/content`** — Source-of-truth MDX files for blogs and projects
- **`src/lib`** — Data access logic, helpers, metadata config, and shared types

## 🖼 Screenshots

> Add product screenshots, blog detail previews, and project detail pages here.

- `docs/homepage.png`
- `docs/blog-page.png`
- `docs/project-page.png`

## 🛣 Future Improvements

- Add tag archive and filtering pages
- Add search across blog posts and projects
- Add RSS feed and sitemap generation
- Add syntax highlighting themes for code blocks
- Add CMS or remote content support if needed
- Add analytics and reading metrics

## 👨‍💻 Author

Built for developers who want a polished, extensible personal platform for **showcasing work** and **sharing ideas**.

**Author:** Yash  
**Focus:** Frontend engineering, product systems, and developer experience

---

If you use this project as a starter, feel free to customize the branding, content model, and styling to match your own portfolio. ✨
