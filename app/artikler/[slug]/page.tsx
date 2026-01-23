import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';
import Container from "@/components/ui/container";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

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

	return (
		<>
			<Container className="py-8">
				<p><Link href="/">Hjem</Link> <FaChevronRight className="inline align-middle mb-1" /> <Link href="/artikler">Artikler</Link> <FaChevronRight className="inline align-middle mb-1" /> {post.title}</p>
				<article id="blogPost">
					<header>
						<h1 className="font-heading text-3xl">{post.title}</h1>
						<p>Af {post.author}, <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("da-DK", { day: "numeric", weekday: "long", month: "long", year: "numeric" })}</time></p>
						<p>{post.readingTime.words} ord, ca. {Math.round(post.readingTime.minutes)} minutter</p>
					</header>
					<div dangerouslySetInnerHTML={{ __html: post.content }} className="pt-8" />
				</article>
				<hr />
				<p><Link href="#top">Tilbage til toppen</Link></p>
				<script>hljs.highlightAll()</script>
			</Container>
		</>
	);
}