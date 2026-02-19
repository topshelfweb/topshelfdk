import type { Metadata } from "next";
import { Comfortaa, Funnel_Display } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/ui/site-header";
import SiteFooter from "@/components/ui/site-footer";
import { BannerController } from "@/components/ui/cookie-consent/banner-controller";
import { GA4Consent } from "@/components/ui/analytics/ga4-consent";

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
});

const funnelDisplay = Funnel_Display({
  variable: "--font-funnelDisplay",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    template: "%s | Topshelf Konsulentservices",
    default: "Topshelf Konsulentservices"
  },
  description: "UX- og tilgængelighedskonsulent for web-bureauer. Jeg hjælper med brugertest, usability og WCAG-compliance, så jeres løsninger virker for alle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" data-scroll-behavior="smooth">
      <body
        className={`${comfortaa.variable} ${funnelDisplay.variable} antialiased`}
      >
        <SiteHeader />
        <main>
          {children}
        </main>
        <SiteFooter />
        <BannerController />
        {/* Analytics will load on client only if allowed */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GA4Consent gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
