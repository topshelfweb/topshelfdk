import { getAllPosts } from "@/lib/blog";

export async function GET(request: Request) {
	const posts = await getAllPosts();

	const postsInRSSFormat = posts.map(post => (`<item>
			<title>${post.title}</title>
			<author>${post.author}</author>
			<description>${post.excerpt}</description>
			<link>https://www.topshelf.dk/artikler/${post.slug}</link>
			<pubDate>${post.date}</pubDate>
	 </item>`)).join("");

	const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
	<title>Topshelf Artikler</title>
	<description>Tekniske artikler og indsigter om webudvikling og tilgængelighed</description>
	<link>https://www.topshelf.dk/artikler</link>
	<copyright>2026 by Topshelf</copyright>
	${postsInRSSFormat}
</channel>
</rss>
 `;


	const headers = new Headers({ 'content-type': 'application/xml' })

	return new Response(rssFeed, { headers })
}