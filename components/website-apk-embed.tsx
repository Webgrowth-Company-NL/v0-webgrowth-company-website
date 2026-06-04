"use client";

import { useEffect, useRef, useState } from "react";
import { APK_EMBED_URL } from "@/lib/website-apk";
import { getStoredUtm } from "@/lib/utm";
import { fireLeadConversion } from "@/lib/ads-conversion";

/** Beste-gok hoogte vóór de eerste postMessage uit Forester OS arriveert. */
const INITIAL_HEIGHT = 640;

export function WebsiteApkEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number>(INITIAL_HEIGHT);
  const [src, setSrc] = useState<string>(APK_EMBED_URL);
  // Eén keer vuren: de scan-iframe kan het submitted-bericht meerdere keren sturen.
  const conversionFired = useRef(false);

  // Geef de UTM-herkomst van de bezoeker door aan de scan-iframe, zodat een
  // APK-aanvraag uit een advertentie als prospect in de ads-funnel telt.
  useEffect(() => {
    const here = new URLSearchParams(window.location.search);
    const stored = getStoredUtm();
    const source = here.get("utm_source") || stored.source || "";
    const medium = here.get("utm_medium") || stored.medium || "";
    const campaign = here.get("utm_campaign") || stored.campaign || "";
    if (!source && !medium && !campaign) return;
    const u = new URL(APK_EMBED_URL);
    if (source) u.searchParams.set("utm_source", source);
    if (medium) u.searchParams.set("utm_medium", medium);
    if (campaign) u.searchParams.set("utm_campaign", campaign);
    setSrc(u.toString());
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data;
      if (
        data &&
        typeof data === "object" &&
        data.type === "website-scan-height" &&
        typeof data.height === "number" &&
        Number.isFinite(data.height) &&
        data.height > 100
      ) {
        // Trust the embed — geen extra floor, anders staat er witte ruimte
        // onder de scan-content op de eerste (URL-)stap.
        setHeight(Math.round(data.height));
      } else if (
        data &&
        typeof data === "object" &&
        data.type === "website-scan-submitted" &&
        !conversionFired.current
      ) {
        // Een ingevulde APK uit de iframe (ander domein) → vuur hier op de
        // marketingsite de Google Ads-conversie, want de gclid-cookie staat hier.
        conversionFired.current = true;
        fireLeadConversion();
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section
      id="scan"
      className="relative px-5 sm:px-8 pt-16 sm:pt-20 pb-20 sm:pb-28 bg-[#e9e4f7] scroll-mt-24"
    >
      <div className="mx-auto max-w-5xl">
        <div
          className="relative overflow-hidden rounded-[2rem] ring-1 ring-[color:var(--color-line-strong)] shadow-[0_30px_72px_-22px_rgba(46,24,106,0.55)]"
          style={{ backgroundColor: "#2E186A" }}
        >
          <iframe
            ref={iframeRef}
            src={src}
            title="Gratis Website APK"
            className="block w-full transition-[height] duration-300 ease-out"
            style={{ height: `${height}px`, border: 0, backgroundColor: "#2E186A" }}
            allow="clipboard-write"
          />
        </div>
        <p className="mt-5 text-center text-[12.5px] text-[color:var(--color-ink-subtle)]">
          De scan draait in Forester OS, je gegevens komen direct in onze beveiligde Nederlandse omgeving terecht.
        </p>
      </div>
    </section>
  );
}
