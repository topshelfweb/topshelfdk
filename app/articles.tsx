import ArticleCard from "@/components/ui/article-card";
import Container from "@/components/ui/container";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export default async function Articles() {
	const articles = (await getAllPosts()).slice(0, 3);

	return (
		<section id="artikler" className="bg-fjordblue py-16">
			<Container>
				<h2 className="text-3xl font-heading text-iceblue">Seneste artikler</h2>
				<Link href="/artikler" className="text-iceblue">Se alle</Link>
				<ul className="flex flex-col lg:flex-row gap-8">
					{articles.map((article, index) => <li className="flex-[1_1_0]" key={index}><ArticleCard article={article} /></li>)}
				</ul>
			</Container>
		</section>
	);
}
