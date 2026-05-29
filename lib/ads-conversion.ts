/**
 * Google Ads conversie-actie ("Forester Lead — online") voor Webgrowth Company.
 * Wordt afgevuurd via gtag bij een geslaagde lead-engine-inzending
 * (kennismaking + Website APK), zodat PMax een online conversie-signaal krijgt.
 *
 * Aangemaakt via scripts/provision-webgrowth-online-conversion.mjs in de
 * platform-repo; resourceName customers/2301238639/conversionActions/7628998473.
 */
export const ADS_CONVERSION_ID = "AW-2301238639";
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
