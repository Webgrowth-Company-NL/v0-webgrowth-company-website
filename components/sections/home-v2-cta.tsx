"use client"

import { motion } from "framer-motion"
import { CtaButton } from "@/components/ui/cta-button"

export function HomeV2Cta() {
  return (
    <section className="relative py-32 px-5 sm:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full bg-[#ff0096]/10 blur-[200px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#623bc7]/10 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-6">Twintig minuten met Q</p>

          <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2.4rem,5.5vw,4.6rem)] font-black text-white leading-[1.02] tracking-tight mb-6">
            Klaar om te stoppen met{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              negen facturen per maand?
            </span>
          </h2>

          <p className="text-white/65 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Je loopt naar buiten met een vergelijking op maat: jouw huidige stack versus Forester OS, op papier, in euro's.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <CtaButton href="/contact" variant="primary">Plan een demo bij Q</CtaButton>
            <CtaButton href="/hubspot-alternatief#calculator" variant="secondary">Reken je besparing</CtaButton>
          </div>

          <p className="text-white/40 text-xs mt-6">
            Geen verkoopgesprek. Eén gesprek met Martijn, concreet advies op papier.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
