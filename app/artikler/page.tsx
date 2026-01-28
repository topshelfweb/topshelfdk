import ArticleCard from "@/components/ui/article-card";
import Container from "@/components/ui/container";
import { getAllPosts } from "@/lib/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Artikler',
	description: 'Tekniske artikler og indsigter om webudvikling og tilgængelighed',
	openGraph: {
		title: 'Artikler | Topshelf',
		description: 'Tekniske artikler og indsigter',
		type: 'website',
	},
};

export default async function BlogPage() {
	const posts = await getAllPosts();

	const ldJson = {
		"@context": "https://schema.org",
		"@type": "Blog",
		"name": "Topshelf Artikler",
		"description": "Tekniske artikler og indsigter om webudvikling og tilgængelighed",
		"url": `${process.env.NEXT_PUBLIC_SITE_URL}/artikler`,
		"blogPost": posts.map((post) => ({
			"@type": "BlogPosting",
			"headline": post.title,
			"author": {
				"@type": "Person",
				"name": post.author || "Brian Emilius",
				"url": "https://www.brianemilius.com/about"
			},
			"datePublished": new Date(post.date).toISOString(),
			"wordCount": post.readingTime.words,
			"keywords": post.tags.join(", "),
			"url": `${process.env.NEXT_PUBLIC_SITE_URL}/artikler/${post.slug}`,
			"image": `${process.env.NEXT_PUBLIC_SITE_URL}/artikler/${post.slug}/opengraph-image`
		})),
	};

	return (
		<section className="py-8 min-h-screen">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
				__html: JSON.stringify(ldJson).replace(/</g, '\\u003c'),
				}}
			/>
			<Container>
				<h2>Artikler</h2>
				<ul className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{posts.map((post, index) => <li className="flex-[1_1_0]" key={index}><ArticleCard article={post} /></li>)}
				</ul>
			</Container>
		</section>
	);
}