"use client"

import { motion } from "framer-motion"
import { Check, Globe, Zap, Rocket } from "lucide-react"
import Link from "next/link"

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
    price: "Op maat",
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
    accent: "#623bc7",
  },
]

export function PricingSection() {
  return (
    <section id="prijzen" className="py-24 md:py-36 px-5 sm:px-8 bg-[#080808]">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-4">
            Prijzen
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2.2rem,5vw,3.8rem)] font-black text-white leading-[1.06] tracking-tight">
              Simpel.<br />Drie pakketten.
            </h2>
            <p className="text-white/40 text-base max-w-xs lg:text-right shrink-0">
              Altijd inclusief Forester OS. Geen verborgen kosten.
            </p>
          </div>
        </motion.div>

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
                className={`relative flex flex-col rounded-2xl p-7 border transition-colors duration-200 ${
                  plan.popular
                    ? "border-[#ff0096]/40 bg-white/[0.06]"
                    : "border-white/8 bg-white/[0.03] hover:bg-white/[0.05] hover:border-white/15"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ff0096] text-white text-[11px] font-black px-4 py-1 rounded-full whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: `${plan.accent}18` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: plan.accent }} />
                  </div>
                  <span className="text-white/50 text-[11px] font-semibold tracking-widest uppercase">
                    {plan.name}
                  </span>
                </div>

                <div className="mb-2">
                  {plan.price === "Op maat" ? (
                    <span className="text-4xl font-black text-white">Op maat</span>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black text-white">€{plan.price}</span>
                      <span className="text-white/35 text-sm">/maand</span>
                    </div>
                  )}
                </div>

                <p
                  className="text-sm font-semibold mb-2 leading-snug"
                  style={{ color: plan.accent }}
                >
                  {plan.tagline}
                </p>

                <p className="text-white/40 text-sm mb-6 leading-relaxed">{plan.description}</p>

                <div className="border-t border-white/8 mb-5" />

                <ul className="space-y-3 flex-1 mb-7">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2.5">
                      <div
                        className="w-4 h-4 rounded-full shrink-0 flex items-center justify-center"
                        style={{ background: `${plan.accent}20` }}
                      >
                        <Check className="w-2.5 h-2.5" style={{ color: plan.accent }} />
                      </div>
                      <span className="text-white text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaLink}
                  className={`block w-full text-center py-2.5 px-5 rounded-full font-semibold text-sm transition-all duration-200 ${
                    plan.popular
                      ? "bg-[#ff0096] text-white hover:bg-[#e6007f]"
                      : "border border-white/20 text-white hover:bg-white/8 hover:border-white/40"
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-white/25 text-sm mt-8"
        >
          Alle prijzen zijn excl. BTW. Forester OS altijd inbegrepen.
        </motion.p>

      </div>
    </section>
  )
}
