import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { markdownToHtml } from './markdown';

const postsDirectory = "content/blog";

export interface BlogPost {
	slug: string;
	title: string;
	excerpt: string;
	content: string;
	date: string;
	tags: string[];
	readingTime: {
		text: string;
		words: number;
		minutes: number;
		time: number;
	};
	featured?: boolean;
	author?: string;
}

export function getPostSlugs() {
	const files = fs.readdirSync(path.join(postsDirectory));
	const convertedToSlugs = files.map(file => file.replace(".md", ""));
	return process.env.NODE_ENV === "production" ? convertedToSlugs.filter(slug => !slug.startsWith("_")) : convertedToSlugs;
}

export async function getAllPosts(): Promise<BlogPost[]> {
	const slugs = getPostSlugs();
	const posts = await Promise.all(
		slugs.map(slug => getPostBySlug(slug))
	);

	return posts
		.filter((post): post is BlogPost => post !== null)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
	try {
		const fullPath = path.join(postsDirectory, `${slug}.md`);
		if (!fs.existsSync(fullPath)) return null;

		const fileContents = fs.readFileSync(fullPath, 'utf8');
		const { data, content } = matter(fileContents);
		const stats = readingTime(content);

		return {
			slug,
			title: data.title || '',
			excerpt: data.excerpt || '',
			content: await markdownToHtml(content),
			date: data.date || '',
			tags: data.tags || [],
			readingTime: stats,
			featured: data.featured || false,
			author: data.author || 'Brian Emilius',
		};
	} catch (error) {
		console.error(`Error reading post ${slug}:`, error);
		return null;
	}
}

export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
	const allPosts = await getAllPosts();
	return allPosts.filter(post => post.tags.includes(tag));
}

export async function getAllTags(): Promise<string[]> {
	const allPosts = await getAllPosts();
	const allTags = allPosts.map(post => post.tags);
	return [...new Set(allTags.flat())];
}
