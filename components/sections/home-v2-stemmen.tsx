"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const stemmen = [
  {
    citaat:
      "Placeholder: vervang door een citaat van een klant. Maximaal twee regels, concreet over het resultaat, niet over hoe leuk de samenwerking was.",
    naam: "Naam klant",
    rol: "Rol, Kantoornaam",
    accent: "#ff0096",
  },
  {
    citaat:
      "Placeholder: tweede klantcitaat hier. Idealiter met een getal erin, bijvoorbeeld over leads, tijdswinst of besparing.",
    naam: "Naam klant",
    rol: "Rol, Kantoornaam",
    accent: "#623bc7",
  },
  {
    citaat:
      "Placeholder: derde klantcitaat. Focus op het verschil met een traditioneel bureau of de vorige situatie.",
    naam: "Naam klant",
    rol: "Rol, Kantoornaam",
    accent: "#8b5cf6",
  },
]

export function HomeV2Stemmen() {
  return (
    <section className="relative py-24 px-5 sm:px-8 overflow-hidden" style={{ background: "#fafafb" }}>
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(26,26,46,1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-3xl"
        >
          <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">Stemmen uit het veld</p>
          <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2rem,4.5vw,3.6rem)] font-black text-[#1a1a2e] leading-[1.06] tracking-tight">
            Wat klanten zeggen die{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              geen bureau meer nodig hebben.
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {stemmen.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col rounded-2xl bg-white p-6 overflow-hidden"
              style={{
                border: "1px solid #e5e5ea",
                boxShadow: "0 10px 30px -15px rgba(26,26,46,0.08)",
              }}
            >
              <Quote className="w-8 h-8 absolute top-4 right-4" style={{ color: `${s.accent}20` }} />

              <p className="text-[#1a1a2e]/85 text-base leading-relaxed mb-6 relative z-10 flex-1">
                {s.citaat}
              </p>

              <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid #f0f0f5" }}>
                <div
                  className="w-10 h-10 rounded-full shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${s.accent}, ${s.accent}99)`,
                  }}
                />
                <div>
                  <p className="text-[#1a1a2e] text-sm font-semibold">{s.naam}</p>
                  <p className="text-[#1a1a2e]/55 text-xs">{s.rol}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
