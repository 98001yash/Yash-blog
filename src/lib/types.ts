export type BlogFrontmatter = {
  title: string;
  date: string;
  description: string;
  tags?: string[];
  readingTime?: string;
  published?: boolean;
};

export type BlogEntry = {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
};
