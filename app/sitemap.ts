import { getAllPosts } from "@/lib/blog";
import { MetadataRoute } from "next";

async function getBlogPosts() {
	const blogPosts = await getAllPosts();

	return blogPosts.map(post => ({
		url: "https://www.topshelf.dk/artikler/" + post.slug,
		lastModified: new Date(post.date),
		changeFrequency: "weekly" as const,
		priority: 0.8,
	}));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const posts = await getBlogPosts();


	return [
		{
			url: "https://www.topshelf.dk",
			lastModified: posts[0].lastModified,
			changeFrequency: "weekly",
			priority: 1
		},
		/* {
			url: "https://www.topshelf.dk/brugeroplevelse",
			lastModified: "2026-01-01",
			changeFrequency: "yearly",
			priority: 0.9
		},
		{
			url: "https://www.topshelf.dk/tilgaengelighed",
			lastModified: "2026-01-01",
			changeFrequency: "yearly",
			priority: 0.9
		},
		{
			url: "https://www.topshelf.dk/sparring",
			lastModified: "2026-01-01",
			changeFrequency: "yearly",
			priority: 0.9
		}, */
		...posts,
		{
			url: "https://www.topshelf.dk/artikler",
			lastModified: posts[0].lastModified,
			changeFrequency: "weekly",
			priority: 0.7
		},
		{
			url: "https://www.topshelf.dk/privatliv",
			lastModified: "2025-12-29",
			changeFrequency: "yearly",
			priority: 0.6
		}
	];
}