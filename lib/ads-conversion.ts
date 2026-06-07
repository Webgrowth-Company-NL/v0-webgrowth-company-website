/**
 * Google Ads conversie-actie ("Forester Lead — online") voor Webgrowth Company.
 * Wordt afgevuurd via gtag bij een geslaagde lead-engine-inzending
 * (kennismaking + Website APK), zodat PMax een online conversie-signaal krijgt.
 *
 * Aangemaakt via scripts/provision-webgrowth-online-conversion.mjs in de
 * platform-repo; resourceName customers/2301238639/conversionActions/7628998473.
 *
 * LET OP: het Google Ads conversie-tracking-ID (AW-10995475278) is NIET gelijk
 * aan het klant-ID (2301238639). Het komt uit het event-snippet van Google Ads
 * (send_to = AW-10995475278/<label>). Eerder stond hier ten onrechte het
 * klant-ID, waardoor conversies naar een niet-bestaand tag-ID gingen en Google
 * niets registreerde.
 */
export const ADS_CONVERSION_ID = "AW-10995475278";
export const ADS_LEAD_CONVERSION_LABEL = "AiyyCMmO5bUcEM7Ghvso";
export const ADS_LEAD_SEND_TO = `${ADS_CONVERSION_ID}/${ADS_LEAD_CONVERSION_LABEL}`;

/** Vuurt de lead-engine-conversie af (geen-op als gtag niet geladen is). */
export function fireLeadConversion(): void {
  if (typeof window === "undefined") return;
  try {
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    w.gtag?.("event", "conversion", { send_to: ADS_LEAD_SEND_TO });
  } catch {
    // analytics nooit blokkerend
  }
}
