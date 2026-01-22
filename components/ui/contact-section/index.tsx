import ContactForm from "@/components/forms/contact-form";
import Container from "@/components/ui/container";

export default function Contact() {
	return (
		<section id="kontakt" className="py-16">
			<Container className="lg:grid gap-8 lg:grid-cols-3">
				<div className="col-span-2">
					<h2 className="text-3xl font-heading">Kontakt</h2>
					<p>Kontakt mig gerne via formularen nedenfor.</p>
					<p>Jeg læser alle henvendelser og vender tilbage hurtigst muligt. Har din henvendelse behov for en samtale,
						aftaler vi et tidspunkt, der passer begge parter.</p>
				</div>
				<ContactForm />
			</Container>
		</section>
	);
}