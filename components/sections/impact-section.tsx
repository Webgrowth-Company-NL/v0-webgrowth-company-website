"use client"

import { motion } from "framer-motion"
import { Users, Zap, BarChart2 } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "300+",
    label: "MKB bedrijven groeiden mee",
    description: "Van startende ondernemer tot gevestigd bedrijf. Q past zich aan jouw tempo aan.",
    color: "#623bc7",
  },
  {
    icon: Zap,
    value: "100%",
    label: "Proactief, zonder dat je erom vraagt",
    description: "Wij sturen jou het bericht. Niet andersom. Zo hoort het te werken.",
    color: "#ff0096",
  },
  {
    icon: BarChart2,
    value: "Live",
    label: "Inzicht in je eigen dashboard",
    description: "Geen PDF die je nooit opent. Alles wat er gebeurt, staat realtime voor je klaar.",
    color: "#623bc7",
  },
]

export function ImpactSection() {
  return (
    <section className="relative py-24 md:py-32 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[#ff0096] text-sm font-semibold tracking-widest uppercase mb-4">
            Powered by Q
          </p>
          <h2 className="font-[family-name:var(--font-gottak)] text-4xl sm:text-5xl lg:text-6xl font-black text-[#0d0015] leading-tight max-w-3xl">
            Wij combineren website bouw,{" "}
            <span style={{ color: "#623bc7" }}>optimalisatie</span>{" "}
            en{" "}
            <span style={{ color: "#ff0096" }}>live inzicht</span>{" "}
            in één systeem.
          </h2>
        </motion.div>

        {/* Stat cards */}
        <div className="grid md:grid-cols-3 gap-6 border-t-2 border-gray-100 pt-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group p-8 rounded-3xl border border-gray-100 hover:border-[#623bc7]/20 transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-5">
                <span
                  className="text-6xl lg:text-7xl font-black leading-none"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </span>
              </div>
              <p className="text-[#0d0015] font-black text-base mb-2">{stat.label}</p>
              <p className="text-[#0d0015]/45 text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
