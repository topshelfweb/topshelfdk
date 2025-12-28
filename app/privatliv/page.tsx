import Container from "@/components/ui/container";

export default function PrivacyPage() {
	return (
		<section id="blogPost" className="py-8">
			<Container>
				<h2>Privatlivspolitik</h2>

				<h3>1. Generelt</h3>
				<p>Denne privatlivspolitik beskriver, hvordan Topshelf indsamler og behandler personoplysninger, når du besøger min hjemmeside eller tilmelder dig mit nyhedsbrev.</p>
				<p>Jeg behandler dine personoplysninger i overensstemmelse med databeskyttelsesforordningen (GDPR) og den danske databeskyttelseslov.</p>

				<h3>2. Dataansvarlig</h3>
				<p><strong>Dataansvarlig:</strong><br />
					Topshelf (enkeltmandsvirksomhed)<br />
					CVR: 28629729<br />
					E-mail: gdpr@topshelf.dk<br />
					Hjemmeside: www.topshelf.dk</p>

				<h3>3. Hvilke personoplysninger indsamler jeg?</h3>
				<h4>3.1 Nyhedsbrev</h4>
				<p>Når du tilmelder dig mit nyhedsbrev, indsamler jeg:</p>
				<ul>
					<li>E-mailadresse</li>
				</ul>
				<p>Formålet er at kunne sende:</p>
				<ul>
					<li>Nyhedsbreve</li>
					<li>Fagligt indhold</li>
					<li>Information om ydelser og opdateringer</li>
				</ul>

				<p><strong>Retsgrundlag:</strong><br />
					Samtykke (GDPR artikel 6, stk. 1, litra a)</p>
				<p>Du kan til enhver tid trække dit samtykke tilbage via afmeldingslinket i nyhedsbrevet.</p>

				<h4>3.2 Cookies og statistik</h4>
				<p>Jeg anvender Google Analytics til at indsamle anonymiseret statistik om brugen af hjemmesiden, herunder:</p>
				<ul>
					<li>Besøgte sider</li>
					<li>Tidspunkt for besøg</li>
					<li>Enhedstype og browser</li>
					<li>Overordnet geografisk placering (land/by)</li>
				</ul>
				<p>Disse oplysninger bruges udelukkende til at forbedre hjemmesidens indhold og brugeroplevelse.</p>
				<p><strong>Google Analytics bruger cookies</strong>, som er små tekstfiler gemt på din enhed.</p>
				<p><strong>Retsgrundlag:</strong><br />
					Samtykke (GDPR artikel 6, stk. 1, litra a)</p>

				<h3>4. Tredjeparter</h3>
				<p>Jeg deler kun oplysninger med tredjeparter, når det er nødvendigt for driften af hjemmesiden:</p>
				<ul>
					<li><strong>Google LLC</strong> (Google Analytics)</li>
				</ul>
				<p>Google kan overføre data til lande uden for EU/EØS. Overførslen sker på baggrund af gyldige overførselsgrundlag, fx EU-Kommissionens standardkontraktbestemmelser.</p>

				<h3>5. Opbevaring af data</h3>
				<ul>
					<li>E-mailadresser til nyhedsbrev opbevares, så længe du er tilmeldt.</li>
					<li>Data slettes, når du afmelder dig nyhedsbrevet.</li>
					<li>Statistikdata opbevares i henhold til Google Analytics' standardindstillinger.</li>
				</ul>

				<h3>6. Dine rettigheder</h3>
				<p>Du har ret til:</p>
				<ul>
					<li>At få indsigt i de oplysninger, jeg har om dig</li>
					<li>At få rettet urigtige oplysninger</li>
					<li>At få slettet dine oplysninger</li>
					<li>At gøre indsigelse mod behandling</li>
					<li>At trække dit samtykke tilbage</li>
				</ul>
				<p>Henvendelser vedrørende dine rettigheder kan ske via e-mailadressen angivet ovenfor.</p>

				<h3>7. Klage</h3>
				<p>Hvis du ønsker at klage over min behandling af dine personoplysninger, kan du kontakte:</p>
				<p><strong>Datatilsynet:</strong><br />
					<a href="https://www.datatilsynet.dk" target="_blank" rel="noopener">www.datatilsynet.dk</a></p>

				<h3>8. Ændringer</h3>
				<p>Jeg forbeholder mig retten til at opdatere denne privatlivspolitik. Den nyeste version vil altid være tilgængelig på hjemmesiden.</p>
				<p><strong>Senest opdateret</strong>: <time dateTime="2025-12-26">2025-12-29</time></p>
			</Container>
		</section>
	);
}