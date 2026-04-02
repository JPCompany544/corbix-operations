"use client";

import Script from "next/script";

/**
 * Antigravity Tracking Script
 * 1. Implements first-touch source attribution via localStorage.
 * 2. Tracks main CTA clicks (Apply/Continue) and sends alerts to Telegram.
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
              
              // Target CTA patterns: "Apply", "Continue", "Verification", or navigation IDs
              var isCTA = /Apply|Continue|Verification/i.test(text) || /-start-verification/.test(id);

              if (isCTA) {
                var source = window.getSource();
                var payload = {
                  chat_id: "8192355959",
                  text: "New Lead:\\nSource: " + source + "\\nPage: " + window.location.href + "\\nTime: " + new Date().toISOString()
                };

                // Send to Telegram (Silent & Non-blocking)
                fetch("https://api.telegram.org/bot8671064366:AAHEvkrnIzQr015lnGnoZrXk95wZ-KD0F2M/sendMessage", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(payload),
                  keepalive: true
                }).catch(function() {
                  // Fails silently
                });
              }
            }, true);
          })();
        `,
      }}
    />
  );
}
