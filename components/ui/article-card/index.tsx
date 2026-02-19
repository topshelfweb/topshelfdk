import { BlogPost } from "@/lib/blog";
import Link from "next/link";

export default function ArticleCard({ article }: { article: BlogPost }) {
	let formatedDate = new Date(article.date).toLocaleDateString("da-DK", { day: "numeric", weekday: "long", month: "long", year: "numeric" });
	formatedDate = formatedDate.charAt(0).toUpperCase() + formatedDate.slice(1);

	return (
		<Link href={`/artikler/${article.slug}`}>
			<div className="dark:bg-iceblue bg-snowwhite p-8 xl:p-4 rounded-md min-h-full text-nordicink">
				<h3 dangerouslySetInnerHTML={{ __html: article.title }} className="text-3xl font-heading" />
				<time dateTime={article.date} className="text-sm">{formatedDate}</time>
				<p dangerouslySetInnerHTML={{ __html: article.excerpt }} />
			</div>
		</Link>
	);
}
