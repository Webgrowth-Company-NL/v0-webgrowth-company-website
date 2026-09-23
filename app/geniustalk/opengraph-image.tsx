import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GeniusTalk 26: A Year with AI. Donderdag 5 november 2026, Restaurant Chung Rotterdam.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Eigen OG-kaart voor de aanmeldpagina. De homepage-kaart praat over het
 * abonnement; wie deze link deelt wil dat datum en plek meteen zichtbaar zijn.
 */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#231653",
          color: "white",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -240,
            right: -240,
            width: 760,
            height: 760,
            borderRadius: 9999,
            background: "radial-gradient(closest-side, rgba(139,92,246,0.55), rgba(139,92,246,0))",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -280,
            left: -240,
            width: 760,
            height: 760,
            borderRadius: 9999,
            background: "radial-gradient(closest-side, rgba(124,58,237,0.42), rgba(124,58,237,0))",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 24,
            fontWeight: 500,
            color: "rgba(255,255,255,0.78)",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 9999,
              backgroundColor: "#c4b5fd",
              display: "flex",
            }}
          />
          Middag over AI in de praktijk · Vierde editie
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 36, zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 88,
              fontWeight: 800,
              letterSpacing: "-0.025em",
              lineHeight: 1.04,
              color: "white",
            }}
          >
            <div style={{ display: "flex" }}>GeniusTalk 26</div>
            <div style={{ display: "flex", color: "#c4b5fd" }}>A Year with AI</div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: 26,
              borderTop: "1px solid rgba(255,255,255,0.18)",
              paddingTop: 26,
            }}
          >
            <span style={{ color: "white", fontWeight: 700, letterSpacing: "0.01em" }}>
              Donderdag 5 november 2026 · 15:00 tot 17:00
            </span>
            <span style={{ color: "rgba(255,255,255,0.55)" }}>Restaurant Chung, Rotterdam</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
