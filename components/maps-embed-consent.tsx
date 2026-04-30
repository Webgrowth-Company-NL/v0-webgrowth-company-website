"use client"

import { useState } from "react"
import { MapPin, Shield } from "lucide-react"

type Props = {
  src: string
  title: string
}

export function MapsEmbedConsent({ src, title }: Props) {
  const [loaded, setLoaded] = useState(false)

  if (loaded) {
    return (
      <iframe
        title={title}
        src={src}
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="group relative w-full h-full flex flex-col items-center justify-center gap-4 px-6 py-10 text-center transition-colors hover:bg-white/[0.02]"
      style={{
        background:
          "radial-gradient(circle at 50% 40%, rgba(167,139,250,0.12) 0%, transparent 60%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative w-14 h-14 rounded-full bg-[#a78bfa]/15 border border-[#a78bfa]/30 flex items-center justify-center">
        <MapPin className="w-6 h-6 text-[#a78bfa]" strokeWidth={2} />
      </div>
      <div className="relative max-w-md">
        <p className="font-[family-name:var(--font-gottak)] text-white text-xl md:text-2xl font-black mb-2 leading-tight">
          Klik om Google Maps te laden
        </p>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Google Maps plaatst cookies en deelt jouw gegevens met Google. Wij laden de kaart pas als jij dat wil.
        </p>
        <span className="inline-flex items-center gap-2 bg-[#ff0096] group-hover:bg-[#e6007f] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors">
          Toon de kaart
        </span>
      </div>
      <p className="relative flex items-center gap-1.5 text-white/40 text-[11px]">
        <Shield className="w-3 h-3" />
        Je keuze geldt alleen voor deze pagina
      </p>
    </button>
  )
}
