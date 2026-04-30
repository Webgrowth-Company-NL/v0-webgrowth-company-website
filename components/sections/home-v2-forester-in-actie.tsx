"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Eye, Zap, Phone, Mail, MessageSquare, Sparkles, Check } from "lucide-react"

export function HomeV2ForesterInActie() {
  return (
    <section className="relative py-24 px-5 sm:px-8 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#623bc7]/8 blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-3xl"
        >
          <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-4">Forester OS in actie</p>
          <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2rem,4.5vw,3.6rem)] font-black text-white leading-[1.06] tracking-tight">
            Geen brochure-platform.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Een werkend product.
            </span>
          </h2>
          <p className="text-white/60 text-lg mt-4 leading-relaxed max-w-2xl">
            Drie dingen die Forester OS elke dag voor je doet. Geen screenshots van een pitch-deck, echte schermen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {/* Snippet 1: Live dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10" style={{ boxShadow: "0 0 50px rgba(255,0,150,0.08)" }}>
              {/* Header donker */}
              <div className="flex items-center justify-between px-5 py-4" style={{ background: "#0d0015" }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff0096] to-[#623bc7] flex items-center justify-center shrink-0">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Live dashboard</p>
                    <p className="text-white/55 text-xs">Vandaag, 14:32</p>
                  </div>
                </div>
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full text-white shrink-0" style={{ background: "rgba(255,0,150,0.25)", border: "1px solid rgba(255,0,150,0.3)" }}>Live</span>
              </div>

              {/* Body wit */}
              <div className="bg-white px-5 py-5 space-y-3">
                {[
                  { icon: Eye, label: "Bezoekers", value: "2.847", delta: "+18%", color: "#16a34a" },
                  { icon: Users, label: "Leads deze maand", value: "23", delta: "+6", color: "#16a34a" },
                  { icon: TrendingUp, label: "Conversieratio", value: "4,2%", delta: "+0,4%", color: "#16a34a" },
                  { icon: Zap, label: "Momentum score", value: "87", delta: "van 100", color: "#8b5cf6" },
                ].map((kpi, i) => {
                  const Icon = kpi.icon
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.25 + i * 0.1 }}
                      className="flex items-center justify-between py-2 border-b border-[#f0f0f5] last:border-0"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-3.5 h-3.5 text-[#1a1a2e]/45" />
                        <span className="text-[#1a1a2e]/70 text-sm">{kpi.label}</span>
                      </div>
                      <div className="flex items-baseline gap-1.5 shrink-0 ml-3">
                        <span className="text-[#1a1a2e] text-sm font-bold tabular-nums">{kpi.value}</span>
                        <span className="text-xs font-semibold tabular-nums" style={{ color: kpi.color }}>{kpi.delta}</span>
                      </div>
                    </motion.div>
                  )
                })}

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.75 }}
                  className="pt-1"
                >
                  <svg viewBox="0 0 200 40" className="w-full h-10" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="dashSnippet" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#ff0096" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#ff0096" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,32 L20,28 L40,24 L60,26 L80,20 L100,16 L120,18 L140,12 L160,10 L180,7 L200,5 L200,40 L0,40 Z" fill="url(#dashSnippet)" />
                    <path d="M0,32 L20,28 L40,24 L60,26 L80,20 L100,16 L120,18 L140,12 L160,10 L180,7 L200,5" fill="none" stroke="#ff0096" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <p className="text-[#1a1a2e]/45 text-[10px] text-center mt-1">Bezoekers laatste 30 dagen</p>
                </motion.div>
              </div>
            </div>

            <div>
              <p className="text-white/45 text-[10px] font-semibold tracking-widest uppercase mb-1.5">01 Dashboard</p>
              <p className="text-white/70 text-sm leading-relaxed">
                KPI's, trends en Momentum-score. Altijd actueel. Geen Google Analytics-puzzel meer.
              </p>
            </div>
          </motion.div>

          {/* Snippet 2: CRM met Q suggestie */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10" style={{ boxShadow: "0 0 50px rgba(98,59,199,0.12)" }}>
              {/* Header donker */}
              <div className="flex items-center justify-between px-5 py-4" style={{ background: "#0d0015" }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#623bc7] to-[#8b5cf6] flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Lead binnen</p>
                    <p className="text-white/55 text-xs">21 april, 09:14</p>
                  </div>
                </div>
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full text-white shrink-0" style={{ background: "rgba(255,0,150,0.25)", border: "1px solid rgba(255,0,150,0.3)" }}>Hot</span>
              </div>

              {/* Body wit */}
              <div className="bg-white px-5 py-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#623bc7] to-[#8b5cf6] flex items-center justify-center shrink-0">
                    <span className="text-white text-xs font-black">MJ</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#1a1a2e] text-sm font-semibold">Marieke Jansen</p>
                    <p className="text-[#1a1a2e]/55 text-xs">Aanvraag via formulier: erfbelasting advies</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  {[
                    { icon: Phone, label: "Gebeld", done: true },
                    { icon: Mail, label: "Mail", done: true },
                    { icon: MessageSquare, label: "Afspraak", done: false },
                  ].map((stap, i) => {
                    const Icon = stap.icon
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.25 + i * 0.1 }}
                        className={`flex-1 rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 ${
                          stap.done ? "bg-[#ecfdf5] border border-[#a7f3d0]" : "bg-[#f0f0f5] border border-[#f0f0f5]"
                        }`}
                      >
                        <Icon className={`w-3 h-3 ${stap.done ? "text-[#16a34a]" : "text-[#1a1a2e]/35"}`} />
                        <span className={`text-[10px] font-medium ${stap.done ? "text-[#16a34a]" : "text-[#1a1a2e]/45"}`}>
                          {stap.label}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="rounded-xl px-4 py-3.5 space-y-2"
                  style={{ background: "#fff0f9" }}
                >
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#ff0096]" />
                    <p className="text-[#ff0096] text-[10px] font-semibold tracking-wide uppercase">Q stelt voor</p>
                  </div>
                  <p className="text-[#1a1a2e]/75 text-xs leading-relaxed">
                    Stuur morgen 10:00 een persoonlijke mail met je artikel over erfbelasting 2026. Conversiekans: 72%.
                  </p>
                  <div className="flex gap-1.5 pt-1">
                    <button className="text-[10px] font-semibold text-white bg-[#ff0096] hover:bg-[#e6007f] px-3 py-1 rounded-full transition-colors">
                      Akkoord
                    </button>
                    <button className="text-[10px] font-semibold text-[#1a1a2e]/55 bg-white border border-[#e5e5ea] hover:border-[#1a1a2e]/20 px-3 py-1 rounded-full transition-colors">
                      Later
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>

            <div>
              <p className="text-white/45 text-[10px] font-semibold tracking-widest uppercase mb-1.5">02 Slimme CRM</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Q leest elke lead, herkent de intentie en stelt de volgende stap voor. Jij klikt akkoord.
              </p>
            </div>
          </motion.div>

          {/* Snippet 3: Editor met Q voorstel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10" style={{ boxShadow: "0 0 50px rgba(139,92,246,0.1)" }}>
              {/* Header donker */}
              <div className="flex items-center justify-between px-5 py-4" style={{ background: "#0d0015" }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8b5cf6] to-[#ff0096] flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Content editor</p>
                    <p className="text-white/55 text-xs">Homepage secties</p>
                  </div>
                </div>
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full text-white shrink-0" style={{ background: "rgba(139,92,246,0.25)", border: "1px solid rgba(139,92,246,0.3)" }}>Concept</span>
              </div>

              {/* Body wit */}
              <div className="bg-white px-5 py-5 space-y-2">
                {[
                  { titel: "Hero", sub: "Titel, subtitel, CTA", done: true },
                  { titel: "Diensten overzicht", sub: "Vier specialismen, icons", done: true },
                  { titel: "Contactformulier", sub: "Met dossier-intake", done: true },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.25 + i * 0.08 }}
                    className="flex items-start gap-3 rounded-lg border border-[#e5e5ea] bg-[#fafafb] px-3.5 py-2.5"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#ecfdf5] border border-[#a7f3d0] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#16a34a]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#1a1a2e] text-xs font-semibold">{item.titel}</p>
                      <p className="text-[#1a1a2e]/50 text-[11px] truncate">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.55 }}
                  className="relative rounded-lg px-3.5 py-3 space-y-2"
                  style={{ background: "#fff0f9", border: "1px dashed rgba(255,0,150,0.4)" }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#ff0096]" />
                      <p className="text-[#ff0096] text-[10px] font-semibold tracking-wide uppercase">Q stelt voor</p>
                    </div>
                    <span className="text-[9px] font-black text-white bg-[#ff0096] px-1.5 py-0.5 rounded">Nieuw</span>
                  </div>
                  <p className="text-[#1a1a2e] text-xs font-semibold">FAQ over erfbelasting</p>
                  <p className="text-[#1a1a2e]/65 text-[11px] leading-snug">
                    6 veelgestelde vragen met antwoorden uit jouw artikelen. Klaar in 2 minuten.
                  </p>
                  <div className="flex gap-1.5 pt-1">
                    <button className="text-[10px] font-semibold text-white bg-[#ff0096] hover:bg-[#e6007f] px-3 py-1 rounded-full transition-colors">
                      Toevoegen
                    </button>
                    <button className="text-[10px] font-semibold text-[#1a1a2e]/55 bg-white border border-[#e5e5ea] hover:border-[#1a1a2e]/20 px-3 py-1 rounded-full transition-colors">
                      Bekijken
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>

            <div>
              <p className="text-white/45 text-[10px] font-semibold tracking-widest uppercase mb-1.5">03 Content editor</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Q bouwt, jij beslist per sectie. Geen WordPress-editor, geen technische mist.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
