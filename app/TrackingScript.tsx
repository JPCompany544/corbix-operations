"use client";

import Script from "next/script";

/**
 * Antigravity Tracking Script (Cleaned)
 * Implements first-touch source attribution via localStorage.
 */
export default function TrackingScript() {
  return (
    <Script
      id="source-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            // Define global helper
            window.getSource = function() {
              try {
                return localStorage.getItem("ag_src") || "direct";
              } catch (e) {
                return "direct";
              }
            };

            // Capture source from URL
            var urlParams = new URLSearchParams(window.location.search);
            var src = urlParams.get("src");

            // Apply first-touch attribution
            if (src) {
              try {
                if (!localStorage.getItem("ag_src")) {
                  localStorage.setItem("ag_src", src);
                }
              } catch (e) {
                // Silently handle storage errors (e.g. Incognito mode)
              }
            }
          })();
        `,
      }}
    />
  );
}
