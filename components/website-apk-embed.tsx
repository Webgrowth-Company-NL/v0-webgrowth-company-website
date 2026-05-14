"use client";

import { useEffect, useRef, useState } from "react";
import { APK_EMBED_URL } from "@/lib/website-apk";

/** Beste-gok hoogte vóór de eerste postMessage uit Forester OS arriveert. */
const INITIAL_HEIGHT = 640;

export function WebsiteApkEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number>(INITIAL_HEIGHT);

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
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section
      id="scan"
      className="relative px-5 sm:px-8 pt-16 sm:pt-20 pb-20 sm:pb-28 bg-[#f2effb] scroll-mt-24"
    >
      <div className="mx-auto max-w-5xl">
        <div
          className="relative overflow-hidden rounded-[2rem] ring-1 ring-[color:var(--color-line-strong)] shadow-[0_30px_72px_-22px_rgba(46,24,106,0.55)]"
          style={{ backgroundColor: "#2E186A" }}
        >
          <iframe
            ref={iframeRef}
            src={APK_EMBED_URL}
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
