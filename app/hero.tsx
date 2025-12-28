import Image from "next/image";

export default function Hero() {
	return (
		<section className="h-screen relative">
			<div className="absolute w-full h-full overflow-hidden">
				<Image src="/hero.png" alt="" width={1536} height={1024} className="h-full w-auto lg:h-auto lg:w-full object-cover" />
			</div>
			<div className="h-full w-full px-4 flex flex-col justify-center items-center-safe absolute bg-[rgba(0,0,0,0.4)] text-iceblue!">
				<h2 className="font-bold lg:text-5xl! font-[Arial,Helvetica,sans-serif]!">Elsk dine brugere lidt mere.</h2>
				<p className="text-center font-semibold">Få UX-indsigter og tilgængelighed i din indbakke &ndash; én gang om måneden.</p>
				<form data-netlify="true" className="text-center">
					<div className="mb-4 flex flex-col gap-4 lg:flex-row items-center">
						<label>
							<span>E-mail&nbsp;</span>
							<input type="email" name="email" className="bg-snowwhite px-1 py-1 text-nordicink" placeholder="din@email.dk" required />
						</label>
						<button type="submit" className="bg-fjordblue text-iceblue border-none relative py-2 px-4 font-bold after:absolute after:border-2 after:border-iceblue after:top-0 after:right-0 after:bottom-0 after:left-0 after:m-[.2rem]">Ja tak, send mig nyhedsbrevet</button>
					</div>
					<input type="hidden" name="form-name" value="newsletter-signup-form" />
				</form>
			</div>
		</section>
	);
}
