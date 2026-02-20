"use client";
import Container from "@/components/ui/container";
import ServiceCard from "@/components/ui/sevice-card";

const serviceInfo = [
	{
		title: "Brugertest, Usability &amp; <abbr title=\"User Experience\">UX</abbr>",
		image: {
			src: "/ux.png",
			alt: "Man med høretelefoner sidder ved skrivebord. Computer skærm på skrivebordet viser et video-opkald.",
			width: 1536,
			height: 1014
		},
		text: "Jeg hjælper web-bureauer med at sikre, at løsningerne fungerer for rigtige brugere, ikke kun på papiret. Gennem brugertest og usability-gennemgange finder jeg friktion, misforståelser og forbedringsmuligheder, så I kan levere løsninger, der er intuitive, effektive og nemme at bruge.",
		link: "/brugeroplevelse",
	},
	{
		title: "Accessibility &amp; Tilgængelighed",
		image: {
			src: "/a11y.png",
			alt: "Kviden med sorte solbriller og høretelefoner sidder ved skrivebord og taster på et tastatur.",
			width: 1536,
			height: 1014
		},
		text: "Jeg hjælper med at gøre websites og webapps tilgængelige for alle, særligt brugere med funktionsnedsættelse. Med fokus på <abbr title=\"Web Content Accessibility Guidelines\">WCAG</abbr> og praktisk implementering identificerer jeg problemer og guider jer til løsninger, der både forbedrer tilgængeligheden og den generelle brugeroplevelse.",
		link: "/tilgaengelighed",
	},
	{
		title: "Sparring om implementation",
		image: {
			src: "/sparring.png",
			alt: "Man peger på TV skærm med Power Point præsentation. To mænd og en kvinde sidder ned ved konferencebord og ser på.",
			width: 1536,
			height: 1014
		},
		text: "Jeg hjælper web-bureauer med at omsætte UX- og tilgængelighedsindsigter til konkrete løsninger. Sparring og kvalitetssikring, så forbedringerne bliver implementeret rigtigt.",
		link: "/sparring",
	},
];



export default function Services() {
	return (
		<section id="services" className="py-16">
			<Container>
				<h2 className="text-3xl font-heading">Hvad kan jeg tilbyde jer?</h2>
				<p>Med næsten 30 års erfaring i udvikling af websites og apps, og over 11 år som underviser,
					hjælper jeg web-bureauer med at styrke brugeroplevelsen og sikre tilgængelighed i deres løsninger. Mit fokus
					er praktisk, jordnær rådgivning, der kan omsættes direkte i projekterne.</p>
				<ul className="mt-8 flex flex-col lg:flex-row gap-8">
					{serviceInfo.map((service, index) => <ServiceCard key={index} service={service} />)}
				</ul>
			</Container>
		</section>
	);
}