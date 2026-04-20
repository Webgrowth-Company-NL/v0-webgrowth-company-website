"use client"

import { motion } from "framer-motion"
import { BarChart2, Mail, Users, Zap, FileText, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const features = [
  {
    icon: BarChart2,
    title: "Live dashboard",
    description: "Q houdt bij wat er op jouw website gebeurt. Bezoekers, leads, conversies. Jij ziet het realtime, zonder één rapport te hoeven lezen.",
    accent: "#623bc7",
  },
  {
    icon: Users,
    title: "CRM ingebouwd",
    description: "Q bewaart al je contacten, bedrijven en deals op één plek. Zo weet je altijd waar een gesprek staat.",
    accent: "#ff0096",
  },
  {
    icon: Mail,
    title: "E-mail & communicatie",
    description: "Q stuurt campagnes, follow-ups en nieuwsbrieven voor je. Jij schrijft het één keer, Q zorgt dat het aankomt.",
    accent: "#623bc7",
  },
  {
    icon: FileText,
    title: "Momentum Reports",
    description: "Elke maand een persoonlijk bericht van Q. Wat er is gebeurd, wat het heeft opgeleverd en wat we volgende maand aanpakken.",
    accent: "#ff0096",
  },
  {
    icon: Zap,
    title: "Automations",
    description: "Q volgt leads automatisch op en zet workflows voor je klaar. Jij hoeft er niet aan te denken.",
    accent: "#623bc7",
  },
  {
    icon: Globe,
    title: "Taken en verbeteringen",
    description: "Q pakt elke maand nieuwe taken op en voert verbeteringen door. Zonder reminder, zonder vergadering. Het wordt gedaan.",
    accent: "#ff0096",
  },
]

export function SystemSection() {
  return (
    <section className="relative py-24 md:py-36 px-5 sm:px-8 bg-[#0d0818] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">

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
            <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-4">Inbegrepen. Altijd.</p>
            <h2 className="font-[family-name:var(--font-gottak)] text-white font-black text-[clamp(1.8rem,4vw,3rem)] leading-[1.06] tracking-tight mb-4">
              Je bestelt een website.{" "}
              <span style={{
                background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Je krijgt een platform.
              </span>
            </h2>
            <p className="text-white/80 text-base leading-relaxed">
              Maak kennis met Q. Jouw vaste aanspreekpunt, dag en nacht. Q bouwt, meet en verbetert. En als je een vraag hebt, stuur je gewoon een appje.
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
                <p className="text-white/80 text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3"
        >
          <p className="text-white text-sm">Benieuwd hoe Q dit in de praktijk doet?</p>
          <Link href="/hoe-het-werkt" className="inline-flex items-center gap-1.5 text-[#a78bfa] text-sm font-semibold hover:text-white transition-colors duration-200">
            Bekijk hoe het werkt <span className="text-base leading-none">→</span>
          </Link>
        </motion.div>

      </div>

      {/* Gradient bridge to integrations section */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 0%, #1a1040 60%, #2d1b66 100%)" }} />
    </section>
  )
}
