export type ContentKind = 'blog' | 'project';

export type ContentFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  published?: boolean;
};

export type BlogFrontmatter = ContentFrontmatter & {
  readingTime: string;
};

export type ProjectFrontmatter = ContentFrontmatter & {
  role: string;
  platform: string;
  website?: string;
  repository?: string;
  featured?: boolean;
};

export type ContentEntry<TFrontmatter> = {
  slug: string;
  frontmatter: TFrontmatter;
  content: string;
};
