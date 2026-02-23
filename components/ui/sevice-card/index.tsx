"use client";
import Image from "next/image";
import { motion, stagger } from "motion/react"

export interface Service {
	title: string;
	image: {
		src: string;
		alt: string;
		width: number;
		height: number;
	};
	text: string;
	link: string;
}

export default function ServiceCard({ service }: { service: Service }) {
	return (
		<li className="flex-[1_1_0]">
			{/* <Link href={service.link}> */}
			<article className="p-8 rounded-md min-h-full bg-snowwhite drop-shadow-xl ">
				<h3 dangerouslySetInnerHTML={{ __html: service.title }} className="text-3xl font-heading" />
				<Image src={service.image.src} width={service.image.width} height={service.image.height} alt={service.image.alt} priority />
				<p dangerouslySetInnerHTML={{ __html: service.text }} />
			</article>
			{/* </Link> */}
		</li>
	)
}
