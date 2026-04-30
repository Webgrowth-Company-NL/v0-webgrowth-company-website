"use client"

import { motion } from "framer-motion"
import { TrendingDown } from "lucide-react"
import { CtaButton } from "@/components/ui/cta-button"

export function HomeV2RoiPreview() {
  return (
    <section className="relative py-24 md:py-32 px-5 sm:px-8 bg-[#0d0818] overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#ff0096]/8 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#623bc7]/8 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">Reken je besparing</p>
          <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2rem,4.5vw,3.6rem)] font-black text-white leading-[1.06] tracking-tight mb-4">
            Transparant. Op papier.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              In euro's.
            </span>
          </h2>
          <p className="text-white/65 text-lg leading-relaxed">
            Een kantoor van 5 medewerkers met HubSpot en een bureau-website betaalt nu dit:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-3xl p-6 sm:p-10 overflow-hidden border border-white/8"
          style={{
            background: "rgba(255,255,255,0.03)",
            boxShadow: "0 30px 80px -30px rgba(255,0,150,0.25)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-30"
            style={{ background: "#ff0096", filter: "blur(120px)" }}
          />

          <div className="relative z-10 grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-center">
            {/* Status quo */}
            <div className="text-center md:text-right">
              <p className="text-white/55 text-[11px] font-semibold tracking-widest uppercase mb-2">Wat je nu betaalt</p>
              <p className="font-[family-name:var(--font-gottak)] text-5xl sm:text-6xl font-black text-white/70 line-through decoration-white/25 tabular-nums">
                €27.420
              </p>
              <p className="text-white/45 text-sm mt-1">per jaar, alles bij elkaar</p>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-full bg-[#ff0096]/40 blur-xl" />
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#ff0096] to-[#623bc7] flex items-center justify-center shadow-lg">
                  <TrendingDown className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            </div>

            {/* Forester OS */}
            <div className="text-center md:text-left">
              <p className="text-[#ff0096] text-[11px] font-semibold tracking-widest uppercase mb-2">Met Forester OS Growth</p>
              <p className="font-[family-name:var(--font-gottak)] text-5xl sm:text-6xl font-black text-[#ff0096] tabular-nums">
                €8.388
              </p>
              <p className="text-white/45 text-sm mt-1">per jaar, alles inbegrepen</p>
            </div>
          </div>

          <div
            className="relative z-10 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div>
              <p className="text-white/55 text-sm">Je bespaart</p>
              <p className="font-[family-name:var(--font-gottak)] text-3xl font-black text-white">
                €19.032 per jaar <span className="text-[#a78bfa] text-xl">(69%)</span>
              </p>
            </div>
            <CtaButton href="/hubspot-alternatief#calculator" variant="secondary">
              Reken je eigen besparing
            </CtaButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
