"use client"

import { motion } from "framer-motion"
import { Sparkles, TrendingUp, Target, Lightbulb } from "lucide-react"

export function HomeV2QKarakter() {
  return (
    <section className="relative py-24 px-5 sm:px-8 overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#ff0096]/8 blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
        {/* Linker: tekst */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-4">Maak kennis met Q</p>
          <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2rem,4.5vw,3.6rem)] font-black text-white leading-[1.04] tracking-tight mb-6">
            Q is geen chatbot.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Q is je marketeer die nooit afwezig is.
            </span>
          </h2>
          <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-xl">
            Q woont in Forester OS. Q leest elke dag je data, herkent wat werkt en wat niet, en doet concrete voorstellen. Geen vage dashboards, gewoon drie paragrafen in mensentaal.
          </p>

          <div className="space-y-3">
            {[
              { icon: TrendingUp, label: "Meet wat gaat goed", tekst: "Welke paginas converteren, welke leads zijn heet." },
              { icon: Lightbulb, label: "Spot wat kan beter", tekst: "Trage paginas, verloren bezoekers, gemiste kansen." },
              { icon: Target, label: "Doet concrete voorstellen", tekst: "Van nieuwe landingspagina tot opvolg-mail. Jij akkoord, Q bouwt." },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#ff0096]/12 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-[#ff0096]" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{item.label}</p>
                    <p className="text-white/55 text-sm leading-relaxed mt-0.5">{item.tekst}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Rechter: Momentum insight kaart */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden border border-white/10" style={{ boxShadow: "0 0 60px rgba(255,0,150,0.1), 0 0 0 1px rgba(255,255,255,0.05)" }}>
            {/* Header donker */}
            <div className="flex items-center justify-between px-5 py-4" style={{ background: "#0d0015" }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#ff0096] to-[#623bc7] flex items-center justify-center shrink-0">
                  <span className="text-white text-sm font-black">Q</span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Momentum Report</p>
                  <p className="text-white/55 text-xs">Week 17, 21 apr 2026</p>
                </div>
              </div>
              <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full text-white shrink-0" style={{ background: "rgba(255,0,150,0.25)", border: "1px solid rgba(255,0,150,0.3)" }}>
                Nieuw
              </span>
            </div>

            {/* Body wit */}
            <div className="bg-white px-5 py-5 space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1 h-4 rounded-full bg-[#16a34a]" />
                  <p className="text-[#16a34a] text-[10px] font-semibold tracking-widest uppercase">Wat gaat goed</p>
                </div>
                <p className="text-[#1a1a2e]/75 text-sm leading-relaxed">
                  Je blog over erfbelasting 2026 trekt deze week 2x zoveel lezers. Drie bezoekers vroegen een gesprek aan na het lezen. De landingspagina voor testamenten blijft je sterkste kaart.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.45 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1 h-4 rounded-full bg-[#f59e0b]" />
                  <p className="text-[#f59e0b] text-[10px] font-semibold tracking-widest uppercase">Wat kan beter</p>
                </div>
                <p className="text-[#1a1a2e]/75 text-sm leading-relaxed">
                  De tarievenpagina wordt vaak geopend maar bijna niemand klikt door. Twaalf blog-bezoekers keken ook naar tarieven zonder actie.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="rounded-xl px-4 py-3.5 space-y-2"
                style={{ background: "#fff0f9" }}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-[#ff0096]" />
                  <p className="text-[#ff0096] text-[10px] font-semibold tracking-widest uppercase">Kans voor deze week</p>
                </div>
                <p className="text-[#1a1a2e]/80 text-sm leading-relaxed">
                  Ik stel voor: een specifieke landingspagina voor erfbelasting-advies met jouw tarief erin verwerkt. Klaar in een dag. Akkoord?
                </p>
                <div className="flex gap-1.5 pt-1.5">
                  <button className="text-[11px] font-semibold text-white bg-[#ff0096] hover:bg-[#e6007f] px-3.5 py-1.5 rounded-full transition-colors">
                    Akkoord, Q bouwt het
                  </button>
                  <button className="text-[11px] font-semibold text-[#1a1a2e]/55 bg-white border border-[#e5e5ea] hover:border-[#1a1a2e]/20 px-3.5 py-1.5 rounded-full transition-colors">
                    Later
                  </button>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 1 }}
                className="text-[#1a1a2e]/45 text-xs pt-1"
              >
                Volgend rapport verschijnt automatisch op 28 april.
              </motion.p>
            </div>
          </div>

          {/* Floating Q bubble */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute -top-6 -right-6 rounded-2xl border border-[#ff0096]/30 bg-[#141024]/95 backdrop-blur px-4 py-3 shadow-xl max-w-xs hidden sm:block"
          >
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#ff0096] to-[#623bc7] flex items-center justify-center shrink-0">
                <span className="text-white text-[11px] font-black">Q</span>
              </div>
              <div>
                <p className="text-white text-xs font-semibold leading-tight mb-0.5">Q</p>
                <p className="text-white/70 text-[11px] leading-snug">Zal ik deze week twee blogs schrijven over testamenten?</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
