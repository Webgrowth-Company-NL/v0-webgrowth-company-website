import { ImageResponse } from "next/og";
import { fieldLogBySlug } from "@/lib/field-logs";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Webgrowth Field Log";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const l = fieldLogBySlug(slug);

  const title = l?.metaTitle ?? l?.title ?? "Webgrowth Field Logs";
  const tag = l?.tag ?? "Field Logs";
  const dateLabel = l?.dateLabel ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#231653",
          color: "white",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* purple glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -260,
            right: -260,
            width: 780,
            height: 780,
            borderRadius: 9999,
            background:
              "radial-gradient(closest-side, rgba(139,92,246,0.55), rgba(139,92,246,0))",
            display: "flex",
          }}
        />
        {/* purple glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -300,
            left: -260,
            width: 780,
            height: 780,
            borderRadius: 9999,
            background:
              "radial-gradient(closest-side, rgba(124,58,237,0.42), rgba(124,58,237,0))",
            display: "flex",
          }}
        />
        {/* subtle notebook-lined background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent 0, transparent 39px, rgba(196,181,253,0.08) 39px, rgba(196,181,253,0.08) 40px)",
            display: "flex",
          }}
        />

        {/* Top row: tag chip + date */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 20px",
              borderRadius: 9999,
              backgroundColor: "rgba(196,181,253,0.18)",
              border: "1px solid rgba(196,181,253,0.35)",
              fontSize: 22,
              fontWeight: 600,
              color: "#e9d5ff",
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
            {tag}
          </div>
          {dateLabel && (
            <div
              style={{
                fontSize: 22,
                color: "rgba(255,255,255,0.6)",
                display: "flex",
              }}
            >
              · {dateLabel}
            </div>
          )}
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: title.length > 70 ? 56 : 68,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "white",
            zIndex: 1,
            maxWidth: 1040,
          }}
        >
          {title}
        </div>

        {/* Footer: brand + url */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 28,
            borderTop: "1px solid rgba(255,255,255,0.18)",
            fontSize: 24,
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ color: "white", fontWeight: 700, letterSpacing: "0.01em" }}>
              Webgrowth Field Logs
            </span>
          </div>
          <span style={{ color: "rgba(255,255,255,0.6)" }}>
            webgrowth.company/field-logs
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
