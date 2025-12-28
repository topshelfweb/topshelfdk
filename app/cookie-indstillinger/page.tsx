"use client";
import Container from "@/components/ui/container";
import { CookieSettings } from "@/components/ui/cookie-consent/cookie-settings";
import { useState } from "react";

export default function CookieSettingsPage() {
	const [showSettings, setShowSettings] = useState(false);

	const showBanner = true;

	if (!showBanner) return null;

	return (
		<section>
			<Container>
				<h2>Cookie-indstillinger</h2>
				<CookieSettings onBack={() => setShowSettings(false)} onClose={() => setShowSettings(false)} />
			</Container>
		</section>
	);
}