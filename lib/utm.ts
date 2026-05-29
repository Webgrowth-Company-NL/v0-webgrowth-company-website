/**
 * Vangt UTM-parameters van de landingspagina op en bewaart ze in sessionStorage,
 * zodat ze bij een latere lead-engine-inzending (bijv. kennismaking) meegestuurd
 * kunnen worden. Zo worden ad-leads als prospect toegerekend in de Forester
 * ads-funnel.
 */

export type Utm = { source?: string; medium?: string; campaign?: string };

const KEY = "wgc_utm";

export function captureUtmFromUrl(): void {
  if (typeof window === "undefined") return;
  try {
    const p = new URLSearchParams(window.location.search);
    const utm: Utm = {};
    const src = p.get("utm_source");
    const med = p.get("utm_medium");
    const camp = p.get("utm_campaign");
    if (src) utm.source = src.slice(0, 100);
    if (med) utm.medium = med.slice(0, 100);
    if (camp) utm.campaign = camp.slice(0, 150);
    // Alleen overschrijven als er daadwerkelijk UTM in de URL staat (eerste klik wint).
    if (utm.source || utm.medium || utm.campaign) {
      window.sessionStorage.setItem(KEY, JSON.stringify(utm));
    }
  } catch {
    // sessionStorage kan geblokkeerd zijn; nooit de pagina breken.
  }
}

export function getStoredUtm(): Utm {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.sessionStorage.getItem(KEY) || "{}") as Utm;
  } catch {
    return {};
  }
}
