import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Topshelf Konsulentservices",
		short_name: "Topshelf",
		description: "UX- og tilgængelighedskonsulent for web-bureauer. Jeg hjælper med brugertest, usability og WCAG-compliance, så jeres løsninger virker for alle.",
		start_url: "/",
		display: "standalone",
		background_color: "#111418",
		theme_color: "#375A7F",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "16x16 32x32 48x48",
			},
			{
				src: "/favicon_180.png",
				sizes: "180x180",
			},
			{
				src: "/favicon_192.png",
				sizes: "192x192",
			},
			{
				src: "/favicon_512.png",
				sizes: "512x512",
			},
		],
		shortcuts: [
			{
				name: "Artikler",
				url: "/artikler",
			}
		]
	}
}