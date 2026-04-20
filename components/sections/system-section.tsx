"use client"

import { motion } from "framer-motion"
import { BarChart2, Mail, Users, Zap, FileText, Globe } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: BarChart2,
    title: "Live dashboard",
    description: "Bezoekers, leads, conversies. Alles realtime. Geen rapport nodig.",
    accent: "#623bc7",
  },
  {
    icon: Users,
    title: "CRM ingebouwd",
    description: "Contacten, bedrijven en deals. Klein Hubspot voor klein MKB.",
    accent: "#ff0096",
  },
  {
    icon: Mail,
    title: "E-mail & communicatie",
    description: "Stuur campagnes, follow-ups en nieuwsbrieven rechtstreeks vanuit Forester.",
    accent: "#623bc7",
  },
  {
    icon: FileText,
    title: "Momentum Reports",
    description: "Elke maand een persoonlijk bericht over wat er is gebeurd en wat er beter kan.",
    accent: "#ff0096",
  },
  {
    icon: Zap,
    title: "Automations",
    description: "Leads die automatisch worden opgevolgd. Workflows die voor jou werken.",
    accent: "#623bc7",
  },
  {
    icon: Globe,
    title: "Jouw website als kern",
    description: "Forester OS is gebouwd rondom jouw website. Alles werkt samen.",
    accent: "#ff0096",
  },
]

export function SystemSection() {
  return (
    <section className="py-24 md:py-36 px-5 sm:px-8 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-4">
            Inbegrepen. Altijd.
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2.2rem,5vw,3.8rem)] font-black text-white leading-[1.06] tracking-tight max-w-2xl">
              Je bestelt een website.<br />
              <span style={{
                background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Je krijgt een platform.
              </span>
            </h2>
            <p className="text-white/40 text-base max-w-xs lg:text-right shrink-0">
              Forester OS zit er gewoon bij. Inbegrepen. Altijd.
            </p>
          </div>
        </motion.div>

        {/* Forester OS intro card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-2xl overflow-hidden h-[360px] md:h-[440px] mb-3 border border-white/8"
        >
          <div className="absolute inset-0 bg-[#0d0015]" />
          <div className="absolute right-0 top-0 h-full w-[60%]">
            <Image
              src="/images/developer-character.jpg"
              alt="Martijn aan het werk"
              fill
              className="object-cover"
              style={{ objectPosition: "58% 20%" }}
            />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #0d0015 0%, #0d0015 28%, rgba(13,0,21,0.85) 44%, rgba(13,0,21,0.4) 62%, rgba(13,0,21,0) 82%)",
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-16 max-w-xl">
            <p className="text-[#ff0096] text-[11px] font-semibold tracking-widest uppercase mb-4">
              Forester OS
            </p>
            <h3 className="font-[family-name:var(--font-gottak)] text-white font-black text-3xl md:text-[2.6rem] leading-tight mb-4">
              Jouw eigen HQ.<br />Inbegrepen bij elke website.
            </h3>
            <p className="text-white/55 text-base leading-relaxed">
              Andere bureaus bouwen en sturen een factuur. Wij geven je toegang tot Forester OS. Een platform waar je jouw website, leads, contacten en resultaten in één overzicht ziet.
            </p>
          </div>
        </motion.div>

        {/* Feature bento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group rounded-2xl p-6 border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-200"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${f.accent}18` }}
                >
                  <Icon className="w-4 h-4" style={{ color: f.accent }} />
                </div>
                <p className="text-white font-semibold text-sm mb-1.5">{f.title}</p>
                <p className="text-white/45 text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
