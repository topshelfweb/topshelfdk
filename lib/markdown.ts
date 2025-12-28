import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';

export async function markdownToHtml(markdown: string): Promise<string> {
	const result = await remark()
		.use(remarkGfm)                               // GitHub Flavored Markdown
		.use(remarkRehype, { allowDangerousHtml: true })  // Markdown → HTML
		.use(rehypeHighlight)                         // Syntax highlighting
		.use(rehypeStringify, { allowDangerousHtml: true }) // HTML output
		.process(markdown);

	return result.toString();
}

export function addIdsToHeadings(html: string): string {
	return html.replace(
		/<h([1-6])([^>]*)>([^<]+)<\/h[1-6]>/g,
		(match, level, attributes, content) => {
			const id = content
				.toLowerCase()
				.replace(/[^\w\s-]/g, '')
				.replace(/\s+/g, '-')
				.replace(/-+/g, '-')
				.trim();

			return `<h${level}${attributes} id="${id}">${content}</h${level}>`;
		}
	);
}