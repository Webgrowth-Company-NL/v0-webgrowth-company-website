"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { cases } from "@/lib/cases-data"
import { testimonials, clients, trustSignals } from "@/lib/testimonials-data"
import { CtaButton } from "@/components/ui/cta-button"

const padNum = (n: number) => String(n).padStart(2, "0")

export function SuccessStoriesSection() {
  return (
    <div className="bg-[#0d0818]">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative pt-24 sm:pt-36 pb-14 sm:pb-24 px-5 sm:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#623bc7]/10 blur-[180px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#ff0096]/6 blur-[140px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">Succesverhalen</p>
            <h1 className="font-[family-name:var(--font-gottak)] text-[clamp(2.4rem,7vw,5.5rem)] font-black text-white leading-[1.02] tracking-tight mb-5">
              Wat wij bouwen.{" "}
              <span style={{
                background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                En wat het oplevert.
              </span>
            </h1>
            <p className="text-white/65 text-lg sm:text-xl leading-relaxed max-w-lg mb-8">
              Geen mooie praatjes, maar een blik onder de motorkap. Concrete cases, echte tools en wat ze de klant elke dag opleveren.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <CtaButton href="/contact" variant="primary">Boek een kennismaking</CtaButton>
              <CtaButton href="/website-apk" variant="secondary">Doe de gratis website APK</CtaButton>
            </div>
            <p className="mt-5 text-white/55 text-xs">Vanaf €399/maand · alles inbegrepen · <Link href="/prijzen" className="underline underline-offset-2 hover:text-white/60 transition-colors">bekijk de pakketten</Link></p>
          </motion.div>
        </div>
      </section>

      {/* ── Cases ────────────────────────────────────────────────────── */}
      {cases.map((c, i) => {
        const eyebrowColor = i % 2 === 0 ? "#ff0096" : "#a78bfa"
        return (
          <section
            key={c.slug}
            id={`case-${c.slug}`}
            className="relative py-14 sm:py-24 px-5 sm:px-8 overflow-hidden border-t border-white/6 scroll-mt-20"
          >
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
              <span className="absolute -top-8 right-4 font-[family-name:var(--font-gottak)] font-black text-[20vw] leading-none text-white/[0.025]">
                {padNum(i + 1)}
              </span>
            </div>
            {i % 2 === 1 && (
              <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#623bc7]/8 blur-[150px] pointer-events-none" />
            )}
            {i % 2 === 0 && (
              <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-[#ff0096]/6 blur-[150px] pointer-events-none" />
            )}

            <div className="relative z-10 max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
                {/* Left, tekst */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                >
                  <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: eyebrowColor }}>
                    Klantcase {padNum(i + 1)} · {c.sector}
                  </p>
                  <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2.2rem,4.5vw,3.8rem)] font-black text-white leading-[1.06] tracking-tight mb-5">
                    {c.titleLead}<br />
                    <span style={{
                      background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}>
                      {c.titleHighlight}
                    </span>
                  </h2>
                  <p className="text-white/65 text-base sm:text-lg leading-relaxed mb-7">
                    {c.intro}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {c.pillars.map((p) => (
                      <span
                        key={p}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(255,0,150,0.14) 0%, rgba(98,59,199,0.14) 100%)",
                        }}
                      >
                        <span
                          style={{
                            background: "linear-gradient(135deg, #ff0096 0%, #a78bfa 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          {p}
                        </span>
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-5">
                    <CtaButton href={`/succesverhalen/${c.slug}`} variant="outline" withIcon>
                      Lees het volledige verhaal
                    </CtaButton>
                    <a
                      href={c.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-white/55 hover:text-white text-xs font-semibold transition-colors"
                    >
                      Bekijk live: {c.liveLabel}
                      <span aria-hidden>↗</span>
                    </a>
                  </div>
                </motion.div>

                {/* Right, visual + features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.1 }}
                  className="space-y-3"
                >
                  <Link
                    href={`/succesverhalen/${c.slug}`}
                    className="block relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-white/8 hover:border-white/20 transition-colors group"
                  >
                    <Image
                      src={c.img}
                      alt={c.imgAlt}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 600px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0818]/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white rounded-2xl p-2 shadow-lg">
                        <Image
                          src={c.logo}
                          alt={`${c.client} logo`}
                          width={c.logoIsIcon ? 44 : 110}
                          height={c.logoIsIcon ? 44 : 36}
                          className={c.logoIsIcon ? "w-11 h-11 object-contain rounded-lg" : "h-9 w-auto object-contain"}
                        />
                      </div>
                    </div>
                  </Link>

                  {c.features.map((f, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.15 + j * 0.08 }}
                      className="flex gap-4 rounded-2xl border border-white/10 px-5 py-4 bg-white"
                    >
                      <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[#ff0096] shrink-0" />
                      <div>
                        <p className="text-[#0d0818] font-semibold text-sm mb-0.5">{f.label}</p>
                        <p className="text-[#0d0818]/65 text-sm leading-relaxed">{f.body}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        )
      })}

      {/* ── Wat klanten zeggen ───────────────────────────────────────── */}
      <section className="relative py-14 sm:py-24 px-5 sm:px-8 overflow-hidden border-t border-white/6">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#623bc7]/8 blur-[160px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-10 sm:mb-14">
            <div className="flex-1 h-px bg-white/8" />
            <span
              className="text-white/55 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full border border-white/8 whitespace-nowrap"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              Wat klanten zeggen
            </span>
            <div className="flex-1 h-px bg-white/8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="rounded-2xl p-7 border border-white/8 flex flex-col"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-[#ff0096] text-[#ff0096]" />
                    ))}
                  </div>
                  {t.source === "google" && (
                    <span className="text-white/45 text-[10px] font-semibold tracking-widest uppercase">
                      Google review
                    </span>
                  )}
                </div>
                <p className="text-white/85 text-base md:text-lg leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                {t.result && (
                  <div className="mt-5 mb-4 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <p className="text-emerald-400 text-xs font-semibold">
                      Resultaat: {t.result}
                    </p>
                  </div>
                )}
                <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                  {t.img && (
                    <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 border border-white/10">
                      <Image
                        src={t.img}
                        alt={t.name}
                        width={44}
                        height={44}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    {(t.role || t.company) && (
                      <p className="text-white/55 text-xs leading-snug truncate">
                        {[t.role, t.company].filter(Boolean).join(" · ")}
                        {t.industry && (
                          <span className="text-white/35"> ({t.industry})</span>
                        )}
                      </p>
                    )}
                  </div>
                  {t.logo && (
                    <div className="bg-white rounded-md p-1.5 shrink-0">
                      <Image
                        src={t.logo}
                        alt={`${t.company || t.name} logo`}
                        width={60}
                        height={20}
                        className="h-5 w-auto object-contain"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-12 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href={trustSignals.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 hover:border-white/30 bg-white/[0.04] hover:bg-white/[0.07] px-4 py-2.5 transition-colors"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white text-sm font-semibold">
                {trustSignals.googleRating}/10 op Google
              </span>
              <span className="text-[#a78bfa] text-xs font-semibold">Lees alle reviews →</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-t border-white/8 pt-10"
          >
            <p className="text-white/55 text-xs font-semibold tracking-widest uppercase mb-6">Werken al samen met Q</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {clients.map((cl, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="bg-white rounded-[18px] flex flex-col items-center justify-center gap-2 px-5 py-5"
                >
                  <Image src={cl.logo} alt={cl.name} width={150} height={50} className="h-10 w-auto object-contain" />
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-black/35 text-xs font-light">sinds {cl.since}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Eind-CTA ─────────────────────────────────────────────────── */}
      <section className="relative py-14 sm:py-20 px-5 sm:px-8 overflow-hidden border-t border-white/6">
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full bg-[#ff0096]/6 blur-[140px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 rounded-2xl border border-white/8 px-5 sm:px-8 py-6 sm:py-7"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            <div>
              <p className="font-[family-name:var(--font-gottak)] text-white font-black text-2xl sm:text-3xl leading-snug mb-1">
                Wil jij de volgende klantcase zijn?
              </p>
              <p className="text-white/55 text-sm">30 minuten kennismaken. Gratis en online, geen verplichtingen.</p>
            </div>
            <div className="flex flex-col gap-1.5 shrink-0">
              <CtaButton href="/contact" variant="primary">Boek een kennismaking</CtaButton>
              <span className="text-white/55 text-xs text-center">Vanaf €399/maand · alles inbegrepen</span>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
