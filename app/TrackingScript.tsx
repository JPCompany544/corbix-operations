"use client";

import Script from "next/script";

/**
 * Antigravity Tracking Script
 * 1. Implements first-touch source attribution via localStorage.
 * 2. Tracks main CTA clicks (Apply/Continue) and routes alerts to secure backend.
 */
export default function TrackingScript() {
  return (
    <Script
      id="source-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            // 1. Define global getter for source
            window.getSource = function() {
              try {
                return localStorage.getItem("ag_src") || "direct";
              } catch (e) {
                return "direct";
              }
            };

            // 2. Capture source from URL (First-touch attribution)
            var urlParams = new URLSearchParams(window.location.search);
            var src = urlParams.get("src");
            if (src) {
              try {
                if (!localStorage.getItem("ag_src")) {
                  localStorage.setItem("ag_src", src);
                }
              } catch (e) {}
            }

            // 3. Click Tracking System
            document.addEventListener("click", function(e) {
              var target = e.target.closest("a, button");
              if (!target) return;

              var text = (target.innerText || target.textContent || "").trim();
              var id = target.id || "";
              
              var isCTA = /Apply|Continue|Verification/i.test(text) || /-start-verification/.test(id);

              if (isCTA) {
                var source = window.getSource();
                
                // Append source to the URL of the link before the browser navigates
                if (target.tagName.toLowerCase() === "a" && target.href) {
                  try {
                    var url = new URL(target.href);
                    if (!url.searchParams.has("src") && source !== "direct") {
                      url.searchParams.set("src", source);
                      target.href = url.toString();
                    }
                  } catch (err) {}
                }
                
                // Secure Backend Notification (Routing handled server-side)
                fetch("/api/track", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    source: source,
                    page: window.location.href
                  }),
                  keepalive: true
                }).catch(function() {
                  // Silent fail
                });
              }
            }, true);
          })();
        `,
      }}
    />
  );
}
