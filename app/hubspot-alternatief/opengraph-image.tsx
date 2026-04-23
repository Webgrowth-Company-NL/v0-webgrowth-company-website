import { ImageResponse } from "next/og"

export const alt = "HubSpot alternatief Nederland — Forester OS vanaf €399 per maand"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0d0818",
          position: "relative",
          padding: 80,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -150,
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,0,150,0.35) 0%, rgba(255,0,150,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -250,
            left: -200,
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(98,59,199,0.35) 0%, rgba(98,59,199,0) 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 40,
            position: "relative",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 99,
              background: "#ff0096",
            }}
          />
          <div
            style={{
              color: "#ff0096",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            HubSpot alternatief Nederland
          </div>
        </div>

        <div
          style={{
            color: "white",
            fontSize: 92,
            fontWeight: 900,
            lineHeight: 1.02,
            letterSpacing: -2,
            maxWidth: 1040,
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Je betaalt nu negen rekeningen.</span>
          <span
            style={{
              background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Wij sturen er één.
          </span>
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: 28,
              fontWeight: 500,
              maxWidth: 720,
              lineHeight: 1.3,
              display: "flex",
            }}
          >
            Website, CRM, marketing en AI in één platform. Vanaf €399 per maand, alles inbegrepen.
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: 18,
                letterSpacing: 3,
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: 4,
              }}
            >
              Webgrowth
            </div>
            <div
              style={{
                color: "white",
                fontSize: 32,
                fontWeight: 900,
                letterSpacing: -0.5,
              }}
            >
              Forester OS
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
