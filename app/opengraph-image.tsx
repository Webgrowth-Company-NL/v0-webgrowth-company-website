import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Webgrowth Company: Eén abonnement, negen tools minder. Meer groei.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
        {/* glow accents */}
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

        {/* eyebrow */}
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
          Premium groeiplatform · Sinds 2016
        </div>

        {/* headline + brand */}
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
            <div style={{ display: "flex" }}>Eén abonnement,</div>
            <div style={{ display: "flex" }}>negen tools minder.</div>
            <div style={{ display: "flex", color: "#c4b5fd" }}>Meer groei.</div>
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
              Webgrowth Company
            </span>
            <span style={{ color: "rgba(255,255,255,0.55)" }}>webgrowth.company</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
