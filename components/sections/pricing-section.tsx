"use client"

import { motion } from "framer-motion"
import { Check, Globe, Zap, Rocket, BarChart2, Users, Shield, Wrench } from "lucide-react"
import Link from "next/link"
import { CtaButton } from "@/components/ui/cta-button"

const plans = [
  {
    name: "Core",
    icon: Globe,
    price: "399",
    tagline: "Jij hebt een website nodig. Wij geven je een platform.",
    description: "Een uitzonderlijk goede website, gebouwd om te groeien. Plus Forester OS: jouw eigen HQ om alles te zien en bij te houden.",
    features: [
      "Professionele website op maat",
      "Forester OS toegang",
      "Live dashboard",
      "CRM voor contacten en leads",
      "Maandelijkse Momentum Report",
      "Continu geoptimaliseerd",
    ],
    cta: "Start met Core",
    ctaLink: "/contact?plan=core",
    popular: false,
    accent: "#623bc7",
  },
  {
    name: "Growth",
    icon: Zap,
    badge: "Meest gekozen",
    price: "699",
    tagline: "Jouw website, jouw tools, jouw automations. Alles verbonden.",
    description: "Alles van Core, plus slimme automations die jouw website koppelen aan je bestaande platforms. Leads worden automatisch opgevolgd.",
    features: [
      "Alles van Core",
      "Koppelingen met externe tools",
      "Marketing automations",
      "Automatische lead opvolging",
      "E-mail campagnes vanuit Forester",
      "Priority support",
    ],
    cta: "Start met Growth",
    ctaLink: "/contact?plan=growth",
    popular: true,
    accent: "#ff0096",
  },
  {
    name: "Scale",
    icon: Rocket,
    price: "999",
    tagline: "Jij hebt een idee voor een platform of app. Wij bouwen het.",
    description: "Voor bedrijven die verder willen gaan dan een website. Wij bouwen van scratch een platform of app, volledig op jouw missie afgestemd.",
    features: [
      "Custom platform of app",
      "Van scratch gebouwd",
      "Volledig op maat",
      "Forester OS als basis",
      "Dedicated development team",
      "Strategisch partnership",
    ],
    cta: "Vertel ons je idee",
    ctaLink: "/contact?plan=scale",
    popular: false,
    accent: "#8b5cf6",
  },
]

const included = [
  { icon: BarChart2, label: "Live dashboard" },
  { icon: Users,    label: "CRM ingebouwd" },
  { icon: Wrench,   label: "Maandelijkse optimalisaties" },
  { icon: Shield,   label: "SSL & hosting" },
]

export function PricingSection() {
  return (
    <div className="bg-[#0d0818]">

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 px-5 sm:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#623bc7]/10 blur-[180px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#ff0096]/6 blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <span className="absolute -top-4 right-4 font-[family-name:var(--font-gottak)] font-black text-[20vw] leading-none text-white/[0.025]">€</span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">Prijzen</p>
            <h1 className="font-[family-name:var(--font-gottak)] text-[clamp(2.8rem,7vw,5.5rem)] font-black text-white leading-[1.02] tracking-tight mb-6">
              Drie pakketten.{" "}
              <span style={{
                background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Één systeem.
              </span>
            </h1>
            <p className="text-white/65 text-xl leading-relaxed max-w-lg">
              Altijd inclusief Forester OS, Q als jouw vaste aanspreekpunt en maandelijkse optimalisaties. Geen verborgen kosten.
            </p>
          </motion.div>

          {/* Always included strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            {included.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="flex items-center gap-2.5 rounded-full border border-white/8 px-4 py-2"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <Icon className="w-3.5 h-3.5 text-[#a78bfa]" />
                  <span className="text-white/70 text-xs font-medium">Altijd inbegrepen: {item.label}</span>
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Pricing cards ───────────────────────────────────────────── */}
      <section className="relative px-5 sm:px-8 pb-24 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4 items-stretch">
            {plans.map((plan, i) => {
              const Icon = plan.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex flex-col rounded-2xl overflow-hidden"
                  style={plan.popular ? {
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,0,150,0.35)",
                    boxShadow: "0 0 60px rgba(255,0,150,0.12), 0 0 0 1px rgba(255,0,150,0.15)",
                  } : {
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {/* Accent top bar */}
                  <div
                    className="h-1 w-full shrink-0"
                    style={{ background: `linear-gradient(90deg, ${plan.accent}, transparent)` }}
                  />

                  {plan.badge && (
                    <div
                      className="absolute top-5 right-5 text-white text-[10px] font-black px-3 py-1 rounded-full"
                      style={{ background: plan.accent }}
                    >
                      {plan.badge}
                    </div>
                  )}

                  <div className="p-7 flex flex-col flex-1">
                    {/* Icon + name */}
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${plan.accent}20` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: plan.accent }} />
                      </div>
                      <span className="text-white/50 text-[11px] font-semibold tracking-widest uppercase">{plan.name}</span>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-[family-name:var(--font-gottak)] text-5xl font-black text-white">€{plan.price}</span>
                        <span className="text-white/55 text-sm">/maand</span>
                      </div>
                    </div>

                    <p className="text-sm font-semibold mb-3 leading-snug" style={{ color: plan.accent }}>
                      {plan.tagline}
                    </p>
                    <p className="text-white/55 text-sm mb-6 leading-relaxed">{plan.description}</p>

                    <div className="h-px bg-white/8 mb-5" />

                    <ul className="space-y-3 flex-1 mb-8">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2.5">
                          <div
                            className="w-4 h-4 rounded-full shrink-0 flex items-center justify-center"
                            style={{ background: `${plan.accent}20` }}
                          >
                            <Check className="w-2.5 h-2.5" style={{ color: plan.accent }} />
                          </div>
                          <span className="text-white/80 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <CtaButton
                      href={plan.ctaLink}
                      variant={plan.popular ? "primary" : "outline"}
                      withIcon={plan.popular}
                      className="w-full"
                    >
                      {plan.cta}
                    </CtaButton>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          >
            <p className="text-white/55 text-xs">Alle prijzen zijn excl. BTW. Minimale looptijd 1 jaar, daarna maandelijks opzegbaar.</p>
            <Link href="/hoe-het-werkt" className="text-[#a78bfa] text-xs font-semibold hover:text-white transition-colors duration-200 shrink-0">
              Hoe werkt het proces? →
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
