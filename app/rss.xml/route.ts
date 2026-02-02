import { getAllPosts } from "@/lib/blog";

export async function GET(request: Request) {
	const posts = await getAllPosts();

	const postsInRSSFormat = posts.map(post => (`<item>
			<title>${post.title}</title>
			<creator>${post.author}</creator>
			<description>${post.excerpt}</description>
			<link>https://www.topshelf.dk/artikler/${post.slug}</link>
			<pubDate>${new Date(post.date).toISOString()}</pubDate>
	 </item>`)).join("");

	const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
	<title>Topshelf Artikler</title>
	<description>Tekniske artikler og indsigter om webudvikling og tilgængelighed</description>
	<link>https://www.topshelf.dk/artikler</link>
	<copyright>2026 by Topshelf</copyright>
	${postsInRSSFormat}
	<atom:link href="https://www.topshelf.dk/rss.xml" rel="self" type="application/rss+xml" />
</channel>
</rss>`;


	const headers = new Headers({ 'content-type': 'application/xml' });

	return new Response(rssFeed, { headers });
}