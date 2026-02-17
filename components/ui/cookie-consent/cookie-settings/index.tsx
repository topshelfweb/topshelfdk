"use client";
import { useState, useEffect, useRef } from "react";
import { setCookieConsent, getCookieConsent } from "@/lib/client-cookie-utils";
import Container from "../../container";

interface CookieSettingsProps {
	onBack: () => void;
	onClose: () => void;
}

export function CookieSettings({ onBack, onClose }: CookieSettingsProps) {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const [analytics, setAnalytics] = useState(false);
	const [isProcessing, setIsProcessing] = useState(false);

	useEffect(() => {
		const consent = getCookieConsent();
		if (consent) {
			setAnalytics(consent.analytics || false);
		}
	}, []);

	useEffect(() => {
		dialogRef.current?.showModal();
	}, []);

	const handleSave = () => {
		setIsProcessing(true);
		setCookieConsent({
			essential: true,
			analytics,
			consentGiven: true,
		});
		setIsProcessing(false);
		dialogRef.current?.close();
		onClose();
	};

	const handleBack = () => {
		dialogRef.current?.close();
		onBack();
	};

	return (
		<dialog ref={dialogRef} className="w-full max-w-2xl rounded-lg shadow-lg p-8 backdrop:bg-black/50 m-auto">
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-2xl font-bold">Cookie Indstillinger</h2>
				<button
					onClick={handleBack}
					className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
				>
					✕
				</button>
			</div>

			<div className="space-y-6 mb-8">
				{/* Essential Cookies */}
				<div className="flex items-center justify-between border-b pb-4">
					<div>
						<h3 className="font-semibold text-lg">Nødvendige Cookies</h3>
						<p className="text-sm text-gray-600">Påkrævet for webstedets funktionalitet</p>
					</div>
					<input
						type="checkbox"
						checked={true}
						disabled
						className="w-6 h-6 cursor-not-allowed opacity-50"
					/>
				</div>

				{/* Analytics Cookies */}
				<div className="flex items-center justify-between border-b pb-4">
					<div>
						<h3 className="font-semibold text-lg">Google Analytics</h3>
						<p className="text-sm text-gray-600">Hjælper mig med at forbedre din oplevelse</p>
					</div>
					<input
						type="checkbox"
						checked={analytics}
						onChange={(e) => setAnalytics(e.target.checked)}
						disabled={isProcessing}
						className="w-6 h-6 cursor-pointer"
					/>
				</div>
			</div>

			<div className="flex gap-4 justify-end">
				<button
					onClick={handleBack}
					disabled={isProcessing}
					className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
				>
					Tilbage
				</button>
				<button
					onClick={handleSave}
					disabled={isProcessing}
					className="px-6 py-2 bg-fjordblue text-white rounded hover:bg-opacity-90 disabled:opacity-50"
				>
					Gem Indstillinger
				</button>
			</div>
		</dialog>
	);
}