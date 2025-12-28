import { BlogPost } from "@/lib/blog";
import Link from "next/link";

export default function ArticleCard({ article }: { article: BlogPost }) {
	return (
		<Link href={`/artikler/${article.slug}`}>
			<div className="dark:bg-iceblue bg-snowwhite p-8 rounded-md min-h-full text-nordicink">
				<h2 dangerouslySetInnerHTML={{ __html: article.title }} className="text-3xl font-heading" />
				<time dateTime={article.date} className="capitalize text-sm">{new Date(article.date).toLocaleDateString("da-DK", { day: "numeric", weekday: "long", month: "long", year: "numeric" })}</time>
				<p dangerouslySetInnerHTML={{ __html: article.excerpt }} />
			</div>
		</Link>
	);
}
