import ArticleCard from "@/components/ui/article-card";
import Container from "@/components/ui/container";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export default async function Articles() {
	const articles = (await getAllPosts()).slice(0, 3);

	const ldJson = {
		"@context": "https://schema.org",
		"@type": "Blog",
		"name": "Topshelf Artikler",
		"description": "Tekniske artikler og indsigter om webudvikling og tilgængelighed",
		"url": `${process.env.NEXT_PUBLIC_SITE_URL}/artikler`,
		"blogPost": articles.map((post) => ({
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
		<section id="artikler" className="bg-fjordblue py-16">
			<Container>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(ldJson).replace(/</g, '\\u003c'),
					}}
				/>
				<h2 className="text-3xl font-heading text-iceblue">Seneste artikler</h2>
				<Link href="/artikler" className="text-iceblue">Se alle</Link>
				<ul className="flex flex-col lg:flex-row gap-8">
					{articles.map((article, index) => <li className="flex-[1_1_0]" key={index}><ArticleCard article={article} /></li>)}
				</ul>
			</Container>
		</section>
	);
}
