"use client"

import { motion } from "framer-motion"
import { Check, Minus } from "lucide-react"
import { CtaButton } from "@/components/ui/cta-button"

type Cell = boolean | string

type Row = {
  label: string
  detail?: string
  values: [Cell, Cell, Cell]
}

type Group = {
  title: string
  rows: Row[]
}

const groups: Group[] = [
  {
    title: "Website en hosting",
    rows: [
      {
        label: "Professionele website op maat",
        detail: "Custom design en techniek, geen template",
        values: [true, true, true],
      },
      {
        label: "Hosting, SSL en domein",
        detail: "Inclusief, geen losse facturen",
        values: [true, true, true],
      },
      {
        label: "Continu geoptimaliseerd",
        detail: "Snelheid, SEO en mobiele ervaring",
        values: [true, true, true],
      },
      {
        label: "100% SEO Proof opgeleverd",
        detail: "Metadata, structured data en sitemap on point",
        values: [true, true, true],
      },
    ],
  },
  {
    title: "Forester OS dashboard",
    rows: [
      {
        label: "Live dashboard",
        detail: "KPI's, trends, conversies in één scherm",
        values: [true, true, true],
      },
      {
        label: "CRM voor contacten en leads",
        detail: "Centraal, geen losse HubSpot-licentie",
        values: [true, true, true],
      },
      {
        label: "Maandelijkse Momentum Report",
        detail: "Wat werkt, wat kan beter, wat hebben wij gedaan",
        values: [true, true, true],
      },
      {
        label: "Q, jouw AI-assistent",
        detail: "Anthropic Claude en Google Gemini, ingebakken",
        values: [true, true, true],
      },
    ],
  },
  {
    title: "Marketing en automations",
    rows: [
      {
        label: "Koppelingen met externe tools",
        detail: "Mailchimp, Pipedrive, HubSpot, Mollie, etc.",
        values: [false, true, true],
      },
      {
        label: "Marketing automations",
        detail: "Lead-scoring, drip-campagnes, opvolgflows",
        values: [false, true, true],
      },
      {
        label: "Automatische lead-opvolging",
        detail: "E-mail, WhatsApp of Slack zodra een lead binnenkomt",
        values: [false, true, true],
      },
      {
        label: "E-mailcampagnes vanuit Forester",
        detail: "Geen losse Mailchimp-rekening meer nodig",
        values: [false, true, true],
      },
    ],
  },
  {
    title: "Custom development",
    rows: [
      {
        label: "Custom platform of app",
        detail: "Reserveringen, klantportaal, Quickscan, leadtool",
        values: [false, false, true],
      },
      {
        label: "Koppelingen met overheidsdata",
        detail: "BAG, Kadaster, KvK, Mollie, Google Calendar, WhatsApp",
        values: [false, false, true],
      },
      {
        label: "Dedicated development",
        detail: "Sprints van twee weken met werkende demo",
        values: [false, false, true],
      },
      {
        label: "Strategisch partnership",
        detail: "Maandelijks review van product en roadmap",
        values: [false, false, true],
      },
    ],
  },
  {
    title: "Support en garantie",
    rows: [
      {
        label: "Reactie binnen één werkdag",
        values: [true, true, true],
      },
      {
        label: "Priority support",
        detail: "Reactie binnen vier kantooruren",
        values: [false, true, true],
      },
      {
        label: "99,99% uptime-inspanningsverplichting",
        values: [true, true, true],
      },
      {
        label: "Eigen omgeving op Forester OS",
        values: [true, true, true],
      },
    ],
  },
]

const plans = [
  {
    name: "Core",
    price: "€399",
    suffix: "per maand",
    accent: "#623bc7",
    href: "/contact?plan=core",
    cta: "Start met Core",
  },
  {
    name: "Growth",
    price: "€699",
    suffix: "per maand",
    accent: "#ff0096",
    popular: true,
    href: "/contact?plan=growth",
    cta: "Start met Growth",
  },
  {
    name: "Scale",
    price: "€999",
    suffix: "vanaf, per maand",
    accent: "#8b5cf6",
    href: "/contact?plan=scale",
    cta: "Vertel ons je idee",
  },
] as const

function ValueCell({ value }: { value: Cell }) {
  if (typeof value === "string") {
    return <span className="text-white/85 text-sm">{value}</span>
  }
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/30">
        <Check className="w-3.5 h-3.5 text-emerald-400" strokeWidth={2.5} />
      </span>
    )
  }
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-white/10">
      <Minus className="w-3.5 h-3.5 text-white/30" strokeWidth={2} />
    </span>
  )
}

export function PlanComparison() {
  return (
    <section className="relative py-24 px-5 sm:px-8 bg-[#0d0818] overflow-hidden border-t border-white/6">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#623bc7]/8 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">
            Volledige vergelijking
          </p>
          <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2rem,4.5vw,3.4rem)] font-black text-white leading-[1.06] tracking-tight">
            Wat zit er waar in,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              wat niet.
            </span>
          </h2>
          <p className="text-white/65 text-base md:text-lg leading-relaxed mt-5">
            De cijfertjes naast elkaar voor wie het zelf wil afwegen. Vink wat je nodig hebt.
          </p>
        </motion.div>

        {/* Desktop: tabel */}
        <div className="hidden md:block">
          <div
            className="rounded-2xl border border-white/8 overflow-hidden"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            {/* Plan-headers */}
            <div className="grid grid-cols-[2fr_repeat(3,1fr)] border-b border-white/8">
              <div className="p-5 md:p-6">
                <p className="text-white/45 text-[11px] font-semibold tracking-widest uppercase">
                  Per pakket
                </p>
              </div>
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`p-5 md:p-6 text-center relative ${
                    plan.popular ? "bg-[#ff0096]/5" : ""
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute top-3 left-1/2 -translate-x-1/2 text-[9px] font-black text-white bg-[#ff0096] px-2 py-0.5 rounded-full whitespace-nowrap">
                      MEEST GEKOZEN
                    </span>
                  )}
                  <p
                    className="font-[family-name:var(--font-gottak)] text-2xl font-black text-white mt-3"
                    style={{ color: plan.accent }}
                  >
                    {plan.name}
                  </p>
                  <p className="font-[family-name:var(--font-gottak)] text-3xl font-black text-white mt-2">
                    {plan.price}
                  </p>
                  <p className="text-white/55 text-xs mt-1">{plan.suffix}</p>
                </div>
              ))}
            </div>

            {/* Groepen */}
            {groups.map((group, gi) => (
              <div key={gi}>
                <div className="grid grid-cols-[2fr_repeat(3,1fr)] bg-white/[0.02] border-b border-white/5">
                  <div className="p-4 md:p-5 col-span-4">
                    <p className="text-[#a78bfa] text-[11px] font-semibold tracking-widest uppercase">
                      {group.title}
                    </p>
                  </div>
                </div>
                {group.rows.map((row, ri) => (
                  <div
                    key={ri}
                    className="grid grid-cols-[2fr_repeat(3,1fr)] border-b border-white/5 last:border-b-0"
                  >
                    <div className="p-4 md:p-5">
                      <p className="text-white text-sm font-semibold">{row.label}</p>
                      {row.detail && (
                        <p className="text-white/45 text-xs mt-0.5 leading-snug">{row.detail}</p>
                      )}
                    </div>
                    {row.values.map((value, vi) => (
                      <div
                        key={vi}
                        className={`p-4 md:p-5 flex items-center justify-center ${
                          plans[vi].popular ? "bg-[#ff0096]/5" : ""
                        }`}
                      >
                        <ValueCell value={value} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}

            {/* Plan-footer met CTA per kolom */}
            <div className="grid grid-cols-[2fr_repeat(3,1fr)] border-t border-white/8 bg-white/[0.02]">
              <div className="p-5 md:p-6" />
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`p-5 md:p-6 flex items-center justify-center ${
                    plan.popular ? "bg-[#ff0096]/5" : ""
                  }`}
                >
                  <CtaButton
                    href={plan.href}
                    variant={plan.popular ? "primary" : "outline"}
                    size="sm"
                    withIcon={plan.popular}
                  >
                    {plan.cta}
                  </CtaButton>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobiel: cards per pakket */}
        <div className="md:hidden space-y-6">
          {plans.map((plan, pi) => (
            <div
              key={plan.name}
              className={`rounded-2xl border overflow-hidden ${
                plan.popular ? "border-[#ff0096]/35" : "border-white/10"
              }`}
              style={{
                background: plan.popular
                  ? "rgba(255,0,150,0.05)"
                  : "rgba(255,255,255,0.03)",
              }}
            >
              <div className="p-5 border-b border-white/8 flex items-baseline justify-between">
                <div>
                  <p
                    className="font-[family-name:var(--font-gottak)] text-xl font-black"
                    style={{ color: plan.accent }}
                  >
                    {plan.name}
                  </p>
                  <p className="font-[family-name:var(--font-gottak)] text-2xl font-black text-white mt-1">
                    {plan.price}
                  </p>
                  <p className="text-white/55 text-xs">{plan.suffix}</p>
                </div>
                {plan.popular && (
                  <span className="text-[9px] font-black text-white bg-[#ff0096] px-2 py-0.5 rounded-full">
                    MEEST GEKOZEN
                  </span>
                )}
              </div>
              <div className="p-5 space-y-4">
                {groups.map((group, gi) => {
                  const rows = group.rows.filter((r) => r.values[pi] === true)
                  if (rows.length === 0) return null
                  return (
                    <div key={gi}>
                      <p className="text-[#a78bfa] text-[10px] font-semibold tracking-widest uppercase mb-2">
                        {group.title}
                      </p>
                      <ul className="space-y-2">
                        {rows.map((row, ri) => (
                          <li key={ri} className="flex items-start gap-2.5">
                            <Check
                              className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"
                              strokeWidth={2.5}
                            />
                            <span className="text-white/80 text-sm">{row.label}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
              <div className="p-5 border-t border-white/8">
                <CtaButton
                  href={plan.href}
                  variant={plan.popular ? "primary" : "outline"}
                  withIcon={plan.popular}
                  className="w-full"
                >
                  {plan.cta}
                </CtaButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
