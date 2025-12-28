import Link from "next/link";
import Container from "../container";
import Image from "next/image";

export default function SiteHeader() {
	return (
		<header className="bg-fjordblue py-4" id="top">
			<Container className="flex justify-between">
				<Link href="/" className="text-iceblue">
					<Image src="/logo_small.png" alt="" width="128" height="128" className="inline h-6 w-auto leading-[175%] align-middle mb-1" />
					<span className="sr-only lg:not-sr-only">&nbsp;Topshelf Konsulentservices</span>
				</Link>
				<nav>
					<ul className="flex gap-8">
						<li><Link href="/#services" className="text-iceblue">Services</Link></li>
						<li><Link href="/#artikler" className="text-iceblue">Artikler</Link></li>
						<li><Link href="/#kontakt" className="text-iceblue">Kontakt</Link></li>
					</ul>
				</nav>
			</Container>
		</header>
	);
}