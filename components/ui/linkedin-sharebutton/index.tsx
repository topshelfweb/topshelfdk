"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

declare global {
  interface Window {
    IN?: any;
  }
}

export default function LinkedinShareButton({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hvis scriptet allerede er loaded, så (re)render knappen
    if (window.IN?.parse && containerRef.current) {
      window.IN.parse(containerRef.current);
    }
  }, [url]);

  return (
    <>
      <Script
        src="https://platform.linkedin.com/in.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.IN?.parse && containerRef.current) {
            window.IN.parse(containerRef.current);
          }
        }}
      >
        {"lang: da_DK"}
      </Script>

      {/* React-stabil container (samme SSR/CSR markup) */}
      <div ref={containerRef} suppressHydrationWarning>
        <script type="IN/Share" data-url={url}></script>
      </div>
    </>
  );
}
