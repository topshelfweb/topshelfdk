import { BlogPost, getAllPosts, getPostBySlug, getPostsByTag } from "@/lib/blog";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/container";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import ArticleCard from "@/components/ui/article-card";
import LinkedinShareButton from "@/components/ui/linkedin-sharebutton";
import HighlightAll from "@/components/ui/highlight-all";

export async function generateStaticParams() {
	const posts = await getAllPosts();
	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export interface BlogPostPageProps {
	params: {
		slug: string
	}
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
	const { slug } = await params;
	const post = await getPostBySlug(slug);

	if (!post) {
		return notFound();
	}

	const baseUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL!);
  	const ogImageUrl = new URL(`/artikler/${slug}/opengraph-image`, baseUrl);

	return {
		title: post.title,
		description: post.excerpt,
		openGraph: {
			url: new URL(`/artikler/${slug}`, baseUrl).toString(),
			title: post.title.slice(0, 60),
			description: post.excerpt.slice(0, 155),
			type: 'article',
			publishedTime: post.date,
			authors: [post.author || 'Brian Emilius'],
			tags: post.tags,
			images: [{
				url: ogImageUrl.toString(),
				width: 1200,
				height: 630,
				alt: post.title,
			}],
		},
	};
}

export default async function BlogPage({ params }: BlogPostPageProps) {
	const { slug } = await params;
	const post = await getPostBySlug(slug);
		
	if (!post) {
		return notFound();
	}

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Article",
		name: post.title,
		author: post.author || "Brian Emilius",
		"datePublished": post.date,
		keywords: post.tags.join(", "),
		wordCount: post.readingTime.words,
	};

	const relatedPostsSet = new Set<BlogPost>();
	for (const tag of post.tags) {
		const postsWithTag = await getPostsByTag(tag);
		for (const relatedPost of postsWithTag) {
			if (relatedPost.slug !== post.slug) {
				relatedPostsSet.add(relatedPost);
			}
			if (relatedPostsSet.size >= 3) {
				break;
			}
		}
		if (relatedPostsSet.size >= 3) {
			break;
		}
	}
	const relatedPosts = Array.from(relatedPostsSet).slice(0, 3);

	const formatedDate = new Date(post.date).toLocaleDateString("da-DK", { day: "numeric", weekday: "long", month: "long", year: "numeric", timeZone: "Europe/Copenhagen" });
	
	return (
		<>
			<Container className="py-8">
				<HighlightAll />
				<p><Link href="/">Hjem</Link> <FaChevronRight className="inline align-middle mb-1" /> <Link href="/artikler">Artikler</Link> <FaChevronRight className="inline align-middle mb-1" /> {post.title}</p>
				<div className="xl:flex xl:gap-32">
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
						__html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
						}}
					/>
					<article id="blogPost" className="xl:flex-2">
						<header>
							<h1 className="font-heading text-3xl">{post.title}</h1>
							<p>Af {post.author}, <time dateTime={post.date}>{formatedDate}</time></p>
							<LinkedinShareButton url={new URL(`/artikler/${slug}`, new URL(process.env.NEXT_PUBLIC_SITE_URL!)).toString()} />
							<p><span>{post.readingTime.words}</span> ord, ca. {Math.round(post.readingTime.minutes)} minutter</p>
						</header>
						<div dangerouslySetInnerHTML={{ __html: post.content }} className="pt-8" />
					</article>
					<aside className="xl:flex-1">
						<h2 className="font-heading text-2xl mt-12 mb-4">Relaterede artikler</h2>
						<ul className="flex flex-col gap-4">
							{relatedPosts.map((relatedPost: BlogPost) => (
								<ArticleCard key={relatedPost.slug} article={relatedPost} />
							))}
						</ul>
					</aside>
				</div>
				<hr />
				<p><Link href="#top">Tilbage til toppen</Link></p>
			</Container>
		</>
	);
}