"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

export function ProcessSection() {
  return (
    <div className="bg-[#0d0818]">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-28 px-5 sm:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#623bc7]/10 blur-[180px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#ff0096]/6 blur-[140px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">Hoe het werkt</p>
            <h1 className="font-[family-name:var(--font-gottak)] text-[clamp(2.8rem,7vw,5.5rem)] font-black text-white leading-[1.02] tracking-tight mb-6">
              Van eerste gesprek{" "}
              <span style={{
                background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                tot website die groeit.
              </span>
            </h1>
            <p className="text-white/65 text-xl leading-relaxed max-w-lg mb-10">
              In 6 tot 8 weken bouwen we samen iets goeds. Daarna bouwen we verder aan iets grandioos.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-black text-white transition-all duration-200 hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)" }}
              >
                Boek een kennismaking <span className="text-base leading-none">→</span>
              </Link>
              <Link
                href="/website-apk"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-semibold transition-colors duration-200"
              >
                Of doe eerst de gratis website APK
              </Link>
            </div>
            <p className="mt-6 text-white/30 text-xs">Vanaf €399/maand · alles inbegrepen · <Link href="/prijzen" className="underline underline-offset-2 hover:text-white/60 transition-colors">bekijk de pakketten</Link></p>
          </motion.div>

          {/* Timeline bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 grid grid-cols-3 sm:grid-cols-5 gap-2"
          >
            {[
              { week: "Week 1", label: "Kick-off", color: "#ff0096" },
              { week: "Week 2–3", label: "Sprint 1", color: "#8b5cf6" },
              { week: "Week 4–5", label: "Sprint 2", color: "#623bc7" },
              { week: "Week 6–7", label: "Sprint 3", color: "#8b5cf6" },
              { week: "Week 8", label: "Test + Live", color: "#ff0096" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl px-4 py-3 border border-white/8 flex flex-col gap-1"
                style={{ background: `${item.color}10` }}
              >
                <span className="text-white/35 text-[10px] font-semibold tracking-widest uppercase">{item.week}</span>
                <span className="text-white font-bold text-sm" style={{ color: item.color }}>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Kick-off ─────────────────────────────────────────────────── */}
      <section className="relative py-24 px-5 sm:px-8 overflow-hidden border-t border-white/6">
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <span className="absolute -top-8 right-4 font-[family-name:var(--font-gottak)] font-black text-[20vw] leading-none text-white/[0.025]">01</span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">Week 1</p>
              <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2.2rem,4.5vw,3.8rem)] font-black text-white leading-[1.06] tracking-tight mb-6">
                Eén uur.<br />
                <span style={{
                  background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  En we weten genoeg.
                </span>
              </h2>
              <p className="text-white/65 text-lg leading-relaxed">
                Alles begint met een uur samen. We willen weten wie jouw klant is, waarom ze voor jou kiezen en wat je wil bereiken. Dat gesprek bepaalt alles wat daarna komt.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="space-y-3"
            >
              {[
                { label: "Jouw klant", body: "Wie is die persoon, wat zoekt die en wat weerhoudt hem van contact opnemen?" },
                { label: "Jouw concurrenten", body: "Q analyseert wat er al staat. Wat werkt, wat ontbreekt en waar jij het verschil kunt maken." },
                { label: "Jouw doel", body: "Meer aanvragen, betere vindbaarheid of minder handmatig werk. We bouwen naar dat doel toe." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="flex gap-4 rounded-2xl border border-white/8 px-5 py-4"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[#ff0096] shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">{item.label}</p>
                    <p className="text-white/55 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3 Sprints ────────────────────────────────────────────────── */}
      <section className="relative py-24 px-5 sm:px-8 overflow-hidden border-t border-white/6">
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <span className="absolute -top-8 right-4 font-[family-name:var(--font-gottak)] font-black text-[20vw] leading-none text-white/[0.025]">02</span>
        </div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#623bc7]/8 blur-[150px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-14"
          >
            <p className="text-[#a78bfa] text-xs font-semibold tracking-widest uppercase mb-5">Week 2 tot 7</p>
            <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2.2rem,4.5vw,3.8rem)] font-black text-white leading-[1.06] tracking-tight">
              Drie sprints.<br />
              <span style={{
                background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Elke twee weken iets om op te reageren.
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                nr: "Sprint 1",
                week: "Week 2 en 3",
                title: "Het fundament",
                body: "Design, paginastructuur en technische basis. Na twee weken ontvang je een preview-link en zie je voor het eerst hoe het eruitziet.",
                accent: "#ff0096",
                detail: "Design · Structuur · SEO-basis",
              },
              {
                nr: "Sprint 2",
                week: "Week 4 en 5",
                title: "De vulling",
                body: "Content staat op de juiste plek, teksten zijn geoptimaliseerd en de eerste koppelingen met externe tools worden gelegd.",
                accent: "#8b5cf6",
                detail: "Content · Teksten · Koppelingen",
              },
              {
                nr: "Sprint 3",
                week: "Week 6 en 7",
                title: "De afwerking",
                body: "Formulieren, automations, snelheidsoptimalisatie en de laatste details. Na sprint 3 staat er een website die klaar is om getest te worden.",
                accent: "#623bc7",
                detail: "Formulieren · Snelheid · Details",
              },
            ].map((sprint, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative rounded-2xl border border-white/8 overflow-hidden flex flex-col"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                {/* Accent top bar */}
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${sprint.accent}, transparent)` }} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-black tracking-widest uppercase" style={{ color: sprint.accent }}>{sprint.nr}</span>
                    <span className="text-white/25 text-xs">{sprint.week}</span>
                  </div>
                  <p className="font-[family-name:var(--font-gottak)] text-white font-black text-xl mb-3">{sprint.title}</p>
                  <p className="text-white/55 text-sm leading-relaxed flex-1 mb-6">{sprint.body}</p>
                  <div className="pt-4 border-t border-white/6">
                    <p className="text-white/30 text-xs">{sprint.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-4 rounded-2xl border border-[#a78bfa]/20 px-6 py-4 flex items-center gap-4"
            style={{ background: "rgba(167,139,250,0.06)" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#a78bfa] shrink-0 animate-pulse" />
            <p className="text-white/60 text-sm">
              Na elke sprint ontvang je een preview-link. Jij geeft feedback. Wij bouwen verder. Geen verrassingen aan het einde.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Test + Livegang ───────────────────────────────────────────── */}
      <section className="relative py-24 px-5 sm:px-8 overflow-hidden border-t border-white/6">
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <span className="absolute -top-8 right-4 font-[family-name:var(--font-gottak)] font-black text-[20vw] leading-none text-white/[0.025]">03</span>
        </div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-[#ff0096]/6 blur-[150px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">Week 8</p>
              <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2.2rem,4.5vw,3.8rem)] font-black text-white leading-[1.06] tracking-tight mb-6">
                Eerst alles checken.<br />
                <span style={{
                  background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  Dan live.
                </span>
              </h2>
              <p className="text-white/65 text-lg leading-relaxed">
                Voor we live gaan controleren we alles. Snelheid, mobiel, formulieren, SEO. Jij test op je eigen telefoon en laptop. Pas als beide partijen tevreden zijn, gaan we live.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="space-y-3"
            >
              {[
                { check: "Snelheid", detail: "Lighthouse Performance boven de 90 op mobiel en desktop." },
                { check: "Mobiel", detail: "Elke pagina getest op iOS en Android op meerdere schermformaten." },
                { check: "Formulieren", detail: "Elk formulier ingevuld en gecontroleerd of de data op de juiste plek aankomt." },
                { check: "SEO", detail: "Title tags, meta descriptions, structured data en sitemap zijn in orde." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="flex items-start gap-4 rounded-xl border border-white/8 px-5 py-4"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-emerald-400" fill="none" viewBox="0 0 12 12">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">{item.check}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{item.detail}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.35 }}
                className="rounded-xl border border-[#623bc7]/30 px-5 py-4"
                style={{ background: "linear-gradient(135deg, rgba(98,59,199,0.15) 0%, rgba(98,59,199,0.07) 100%)" }}
              >
                <p className="text-white font-semibold text-sm mb-1">Na de livegang</p>
                <p className="text-white/55 text-xs leading-relaxed">DNS overgezet, SSL actief. We monitoren de eerste 48 uur. Bolt en Google Search Console worden gekoppeld zodat Q direct begint met meten.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Maandelijkse verbeteringen ───────────────────────────────── */}
      <section className="relative py-24 px-5 sm:px-8 overflow-hidden border-t border-white/6">
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <span className="absolute -top-8 right-4 font-[family-name:var(--font-gottak)] font-black text-[20vw] leading-none text-white/[0.025]">04</span>
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#623bc7]/8 blur-[160px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-14"
          >
            <p className="text-[#a78bfa] text-xs font-semibold tracking-widest uppercase mb-5">Elke maand</p>
            <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2.2rem,4.5vw,3.8rem)] font-black text-white leading-[1.06] tracking-tight">
              Elke maand beter.<br />
              <span style={{
                background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Zonder dat jij er iets voor doet.
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="md:col-span-2 lg:col-span-2 rounded-2xl border border-white/8 p-7"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <p className="text-white/35 text-xs font-semibold tracking-widest uppercase mb-4">Hoe het eruitziet</p>
              <p className="font-[family-name:var(--font-gottak)] text-white font-black text-xl md:text-2xl leading-snug mb-4">
                Dit is het deel waar de meeste bureaus vertrekken. Wij niet.
              </p>
              <p className="text-white/60 text-sm leading-relaxed max-w-lg">
                Q analyseert elke maand wat er gebeurt op je website en zet de inzichten om in concrete aanpassingen. Geen vergadering. Geen agenda. Geen aanbevelingen die in een rapport verdwijnen. Wij voeren het uit. Jij ziet het verschil.
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                { label: "Data", body: "Q bekijkt verkeersbronnen, paginagedrag en conversies via Bolt. Elke maand opnieuw.", accent: "#ff0096" },
                { label: "Kansen", body: "SEO-kansen, trage pagina's, formulieren die niet converteren.", accent: "#8b5cf6" },
                { label: "Actie", body: "Wij voeren het uit. Geen rapport, gewoon resultaat.", accent: "#623bc7" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="rounded-xl border border-white/8 px-4 py-4"
                  style={{ background: "rgba(255,255,255,0.025)" }}
                >
                  <p className="text-xs font-semibold tracking-widest uppercase mb-1.5" style={{ color: item.accent }}>{item.label}</p>
                  <p className="text-white/55 text-sm leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA + Testimonial ────────────────────────────────────────── */}
      <section className="relative py-20 px-5 sm:px-8 overflow-hidden border-t border-white/6">
        <div className="relative z-10 max-w-7xl mx-auto space-y-4">

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-white/8 px-7 py-6"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#ff0096] text-[#ff0096]" />
              ))}
            </div>
            <p className="text-white/80 text-base leading-relaxed mb-4">
              "Dankzij Webgrowth Company hebben we nu een website die niet alleen mooi is, maar actief bijdraagt aan onze groei en processen automatiseert."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-white/10">
                <Image src="/images/testimonials/gil-lont.webp" alt="Gil Lont" width={36} height={36} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Gil Lont</p>
                <p className="text-emerald-400 text-xs">Meer leads via de website, minder handmatig werk</p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 rounded-2xl border border-white/8 px-8 py-7"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            <div>
              <p className="font-[family-name:var(--font-gottak)] text-white font-black text-2xl md:text-3xl leading-snug mb-1">
                Klinkt dit als wat jij nodig hebt?
              </p>
              <p className="text-white/45 text-sm">30 minuten kennismaken. Gratis en online, geen verplichtingen.</p>
            </div>
            <div className="flex flex-col gap-1.5 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-black text-white transition-all duration-200 hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)" }}
              >
                Boek een kennismaking <span className="text-base leading-none">→</span>
              </Link>
              <span className="text-white/25 text-xs text-center">Vanaf €399/maand · alles inbegrepen</span>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="grid md:grid-cols-3 gap-3"
          >
            {[
              {
                q: "Hoeveel tijd kost dit mij?",
                a: "Reken op een uur voor de kick-off en een halfuur feedback per sprint. Meer vragen we niet. Jij focust op jouw werk, wij bouwen.",
              },
              {
                q: "Wat als ik na de bouw wil stoppen?",
                a: "We werken met een minimale looptijd van één jaar. Daarna kun je per maand opzeggen. Zo weten we allebei waar we aan toe zijn.",
              },
              {
                q: "Wat als ik niet tevreden ben?",
                a: "We gaan niet live totdat jij het goedkeurt. Na elke sprint geef jij feedback. Er zijn nooit verrassingen aan het einde.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/6 px-5 py-5"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <p className="text-white font-semibold text-sm mb-2">{item.q}</p>
                <p className="text-white/50 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── Gewoon een bericht ───────────────────────────────────────── */}
      <section className="relative py-24 px-5 sm:px-8 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full bg-[#ff0096]/6 blur-[140px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Divider with label */}
          <div className="flex items-center gap-4 mb-16">
            <div className="flex-1 h-px bg-white/8" />
            <span className="text-white/30 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full border border-white/8" style={{ background: "rgba(255,255,255,0.03)" }}>
              Goed om te weten
            </span>
            <div className="flex-1 h-px bg-white/8" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">Altijd bereikbaar</p>
              <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2.2rem,4.5vw,3.8rem)] font-black text-white leading-[1.06] tracking-tight mb-6">
                Jij stuurt een appje.<br />
                <span style={{
                  background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  Q regelt het.
                </span>
              </h2>
              <p className="text-white/65 text-lg leading-relaxed mb-8">
                Heb je een vraag, wil je iets aanpassen of valt er iets op? Stuur Q een appje. Geen ticket, geen wachtrij, geen uur debriefing plannen. Stuur een bericht en het is geregeld.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#a78bfa] text-sm font-semibold hover:text-white transition-colors duration-200"
              >
                Stuur ons een bericht <span className="text-base leading-none">→</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              {/* Chat mockup */}
              <div className="rounded-2xl border border-white/8 p-6" style={{ background: "rgba(255,255,255,0.03)" }}>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/6">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff0096] to-[#623bc7] flex items-center justify-center text-white text-xs font-black">Q</div>
                  <div>
                    <p className="text-white text-sm font-semibold">Q</p>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-white/40 text-xs">Online</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { from: "jij", text: "Kunnen we de openingstijden aanpassen op de contactpagina? We zijn volgende week dinsdag dicht, thanks!" },
                    { from: "q", text: "Geregeld. Dinsdag staat als gesloten, en de structured data heb ik ook bijgewerkt zodat Google het direct overneemt." },
                    { from: "jij", text: "Wauw dat was snel 👍" },
                    { from: "q", text: "Altijd. Laat het weten als er meer is." },
                  ].map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className={`flex ${msg.from === "jij" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-xl px-4 py-2.5 text-sm leading-relaxed ${
                          msg.from === "jij"
                            ? "text-white/80 border border-white/10"
                            : "text-white border border-[#623bc7]/25"
                        }`}
                        style={{
                          background: msg.from === "jij"
                            ? "rgba(255,255,255,0.05)"
                            : "linear-gradient(135deg, rgba(98,59,199,0.2) 0%, rgba(98,59,199,0.1) 100%)",
                        }}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  )
}
