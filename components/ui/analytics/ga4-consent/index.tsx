"use client";
import { useEffect, useState } from "react";
import Script from "next/script";
import { shouldShowAnalytics } from "@/lib/client-cookie-utils";

declare global {
	interface Window {
		dataLayer: unknown[];
		gtag: (...args: unknown[]) => void;
	}
}

interface GA4ConsentProps {
	gaId: string;
	hasAnalyticsConsent?: boolean;
}

export function GA4Consent({ gaId }: GA4ConsentProps) {
	const [consentState, setConsentState] = useState(false);

	useEffect(() => {
		setConsentState(shouldShowAnalytics());
	}, []);

	useEffect(() => {
		const handleConsentChange = () => {
			setConsentState(shouldShowAnalytics());
		};
		window.addEventListener('storage', handleConsentChange);
		window.addEventListener('consentUpdated', handleConsentChange);
		return () => {
			window.removeEventListener('storage', handleConsentChange);
			window.removeEventListener('consentUpdated', handleConsentChange);
		};
	}, []);

	useEffect(() => {
		if (!gaId) return;
		window.dataLayer = window.dataLayer || [];
		window.gtag = function () {
			window.dataLayer.push(arguments);
		};
		window.gtag("consent", "default", {
			analytics_storage: consentState ? "granted" : "denied",
			ad_storage: "denied",
		});
	}, [gaId, consentState]);

	if (!gaId) return null;
	return (
		<>
			<Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
			<Script id="ga4-init" strategy="afterInteractive" dangerouslySetInnerHTML={{
				__html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}', { send_page_view: false });
`
			}} />
		</>
	);
}