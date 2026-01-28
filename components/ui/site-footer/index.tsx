import Link from "next/link";
import Container from "../container";
import { FaGlasses, FaLinkedin, FaRss, FaSitemap } from "react-icons/fa";

export default function SiteFooter() {
	const ldJson = {
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "Topshelf Konsulentservices",
		"url": "https://topshelf.dk",
		"sameAs": [
			"https://www.linkedin.com/company/topshelfweb"
		],
		"logo": "https://topshelf.dk/logo.png",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "Slagelsevej 10, 2.th.",
			"addressLocality": "Kalundborg",
			"postalCode": "4400",
			"addressCountry": "DK"
		},
	};

	return (
		<footer className="bg-black py-8 text-iceblue">
			<Container className="lg:flex justify-between">
				<div className="mb-8 lg:mb-0">
					<h2>Socials</h2>
					<ul>
						<li>
							<Link href="https://www.linkedin.com/company/topshelfweb" target="_blank" rel="noopener" aria-label="Link til LinkedIn">
								<FaLinkedin size={32} />
							</Link>
						</li>
					</ul>
				</div>
				<div className="mb-8 lg:mb-0">
					<h2>Links</h2>
					<ul>
						<li>
							<Link href="/artikler" className="flex gap-2 items-center"><FaGlasses /> Artikler</Link>
						</li>
						<li>
							<Link href="/sitemap.xml" className="flex gap-2 items-center"><FaSitemap /> Sitemap</Link>
						</li>
						<li>
							<Link href="/rss.xml" className="flex gap-2 items-center"><FaRss /> RSS feed</Link>
						</li>
					</ul>
				</div>
				<div className="mb-8 lg:mb-0">
					<h2>Politiker</h2>
					<ul>
						<li>
							<Link href="/privatliv">Privatlivspolitik</Link>
						</li>
						<li>
							<Link href="/cookie-indstillinger">Cookie-indstillinger</Link>
						</li>
					</ul>
				</div>
				<div className="mb-8 lg:mb-0">
					<h2>Kontakt</h2>
					Topshelf Konsulentservices
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify(ldJson).replace(/</g, '\\u003c'),
						}}
					/>
					<address className="not-italic">Slagelsevej 10, 2.th.<br />4400 Kalundborg<br /></address>
					CVR: 28629729
				</div>
			</Container>
			<Container>
				<p className="text-center text-sm">Copyright &copy; 2026</p>
			</Container>
		</footer>
	);
}