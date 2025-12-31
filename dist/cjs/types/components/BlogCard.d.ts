import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from '../types/IFrontMatter.js';
type IBlogCardProps = {
    instance: MarkdownInstance<IFrontmatter>;
};
declare const BlogCard: (props: IBlogCardProps) => import("react/jsx-runtime").JSX.Element;
export { BlogCard };
