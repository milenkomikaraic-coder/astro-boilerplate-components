export interface IFrontmatter {
  title: string;
  description: string;
  pubDate: string;
  imgSrc: string;
  imgAlt: string;
  draft: boolean;
}

// Workaround to import Astro types without runtime import
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
export type Page<T extends Record<string, any>> = import('astro').Page<T>;

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
export type MarkdownInstance<T extends Record<string, any>> =
  import('astro').MarkdownInstance<T>;

export type FrontmatterPage = Page<MarkdownInstance<IFrontmatter>>;
