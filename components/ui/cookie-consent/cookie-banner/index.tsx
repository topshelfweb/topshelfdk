"use client";
import { useState } from "react";
import { setCookieConsent } from "@/lib/client-cookie-utils";
import { CookieSettings } from "../cookie-settings";
import Container from "../../container";
import { motion } from "motion/react";

interface CookieBannerProps {
	showBanner: boolean;
}

export function CookieBanner({ showBanner }: CookieBannerProps) {
	const [showSettings, setShowSettings] = useState(false);
	const [isProcessing, setIsProcessing] = useState(false);

	if (!showBanner) return null;

	const handleAcceptAll = () => {
		setIsProcessing(true);
		setCookieConsent({
			essential: true,
			analytics: true,
			consentGiven: true,
		});
		setIsProcessing(false);
	};

	const handleRejectAll = () => {
		setIsProcessing(true);
		setCookieConsent({
			essential: true,
			analytics: false,
			consentGiven: true,
		});
		setIsProcessing(false);
	};

	if (showSettings) {
		return (
			<CookieSettings
				onBack={() => setShowSettings(false)}
				onClose={() => setShowSettings(false)}
			/>
		);
	}

	return (
		<motion.div initial={{ transform: "translateY(200px)" }} animate={{ transform: "translateY(0)" }} className="fixed bottom-0 left-0 w-full min-h-32">
			<div className="bg-huskyfur h-12">
				<Container>
					<h2 className="leading-12">Cookies</h2>
				</Container>
			</div>
			<div className="bg-snowwhite text-nordicink py-8">
				<Container>
					<p>
						Vi bruger cookies til funktionalitet og analyse. Du kan acceptere alle, afvise alle eller justere dine præferencer individuelt.
					</p>
					<div className="flex gap-8">
						<button onClick={handleAcceptAll} disabled={isProcessing} className="bg-pinegreen text-iceblue border-none relative py-2 px-4 font-bold after:absolute after:border-2 after:border-iceblue after:top-0 after:right-0 after:bottom-0 after:left-0 after:m-[.2rem]">Accepter alle</button>
						<button onClick={handleRejectAll} disabled={isProcessing} className="bg-huskyfur text-nordicink border-none relative py-2 px-4 after:absolute after:border after:border-nordicink after:top-0 after:right-0 after:bottom-0 after:left-0 after:m-[.2rem]">Afvis alle</button>
						<button onClick={() => setShowSettings(true)} disabled={isProcessing} className="bg-huskyfur text-nordicik border-none relative py-2 px-4 after:absolute after:border after:border-nordicink after:top-0 after:right-0 after:bottom-0 after:left-0 after:m-[.2rem]">Cookie-indstillinger</button>
					</div>
				</Container>
			</div>
		</motion.div>
	);
}
