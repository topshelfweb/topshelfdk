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

	return (
		<section className="py-8 min-h-screen">
			<Container>
				<h2>Artikler</h2>
				<ul className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{posts.map((post, index) => <li className="flex-[1_1_0]" key={index}><ArticleCard article={post} /></li>)}
				</ul>
			</Container>
		</section>
	);
}