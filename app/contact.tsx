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
				<form data-netlify="true" className="col-span-1">
					<div className="mb-4">
						<label className="flex justify-between">
							<span className="after:content-['_*']">Navn</span>
							<input type="text" name="name" required className="bg-snowwhite border border-fjordblue text-nordicink py-[.1rem] px-[.2rem] min-w-[70%]" />
						</label>
					</div>
					<div className="mb-4">
						<label className="flex justify-between">
							<span className="after:content-['_*']">E-mail</span>
							<input type="email" name="email" required className="bg-snowwhite border border-fjordblue text-nordicink py-[.1rem] px-[.2rem] min-w-[70%]" />
						</label>
					</div>
					<div className="mb-4">
						<label className="flex justify-between">
							<span className="after:content-['_*']">Telefon</span>
							<input type="tel" name="telephone" required className="bg-snowwhite border border-fjordblue text-nordicink py-[.1rem] px-[.2rem] min-w-[70%]" />
						</label>
					</div>
					<div className="mb-4">
						<label className="flex justify-between flex-col">
							<span className="after:content-['_*']">Jeg vil gerne kontaktes om</span>
							<textarea name="message" required className="bg-snowwhite border border-fjordblue text-nordicink py-[.1rem] px-[.2rem] min-w-full resize-none"></textarea>
						</label>
					</div>
					<button type="submit" className="bg-fjordblue text-iceblue border-none relative py-2 px-4 font-bold after:absolute after:border-2 after:border-iceblue after:top-0 after:right-0 after:bottom-0 after:left-0 after:m-[.2rem]">Send</button>
					<input type="hidden" name="form-name" value="contact-form" />
					<p className="text-sm">Felter markeret med * er påkrævet</p>
				</form>
			</Container>
		</section>
	);
}