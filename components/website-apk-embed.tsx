"use client";

import { useEffect, useRef, useState } from "react";
import { APK_EMBED_URL } from "@/lib/website-apk";

const INITIAL_HEIGHT = 820;
const MIN_HEIGHT = 600;

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
        Number.isFinite(data.height)
      ) {
        const next = Math.max(MIN_HEIGHT, Math.round(data.height));
        setHeight((prev) => (Math.abs(prev - next) > 4 ? next : prev));
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section
      id="scan"
      className="relative px-5 sm:px-8 pb-20 sm:pb-28 bg-[color:var(--color-bg)] scroll-mt-24"
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
            className="block w-full"
            style={{ height: `${height}px`, border: 0, backgroundColor: "#2E186A" }}
            loading="lazy"
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
