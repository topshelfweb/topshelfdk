"use client";
import { useEffect, useState } from "react";
import { CookieBanner } from "../cookie-banner";
import { shouldShowBanner } from "@/lib/client-cookie-utils";

export function BannerController() {
	const [showBanner, setShowBanner] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setShowBanner(shouldShowBanner());
		setIsLoaded(true);
	}, []);

	useEffect(() => {
		const handleConsentChange = () => {
			setShowBanner(shouldShowBanner());
		};
		window.addEventListener('storage', handleConsentChange);
		window.addEventListener('consentUpdated', handleConsentChange);
		return () => {
			window.removeEventListener('storage', handleConsentChange);
			window.removeEventListener('consentUpdated', handleConsentChange);
		};
	}, []);

	if (!isLoaded) return null;
	return <CookieBanner showBanner={showBanner} />;
}