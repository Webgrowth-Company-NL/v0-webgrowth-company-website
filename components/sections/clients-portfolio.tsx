"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Sparkles } from "lucide-react"
import { portfolioClients, type PortfolioClient } from "@/lib/clients-portfolio-data"
import { cn } from "@/lib/utils"

/**
 * Forester OS interne plan-namen → publieke pakket-namen op de site.
 * - pro      → Core
 * - premium  → Growth
 * - scale    → Scale
 * - essential / hosting blijven zoals ze zijn (legacy / hosting-only)
 */
const PLAN_STYLES: Record<string, { label: string; className: string }> = {
  scale: {
    label: "Scale",
    className: "bg-[#ff0096]/15 text-[#ff0096] border-[#ff0096]/30",
  },
  premium: {
    label: "Growth",
    className: "bg-[#a78bfa]/15 text-[#a78bfa] border-[#a78bfa]/30",
  },
  pro: {
    label: "Core",
    className: "bg-white/[0.06] text-white/70 border-white/15",
  },
  essential: {
    label: "Essential",
    className: "bg-white/[0.04] text-white/55 border-white/10",
  },
  hosting: {
    label: "Hosting",
    className: "bg-white/[0.04] text-white/45 border-white/10",
  },
}

function getInitials(name: string): string {
  const words = name.split(/\s+/).filter(Boolean)
  if (words.length === 0) return "?"
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[words.length - 1][0]).toUpperCase()
}

function ClientCard({ client }: { client: PortfolioClient }) {
  const planStyle = PLAN_STYLES[client.plan] || PLAN_STYLES.pro

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="group relative rounded-2xl border border-white/8 hover:border-white/20 p-5 flex flex-col h-full transition-colors"
      style={{ background: "rgba(255,255,255,0.03)" }}
    >
      <div className="flex items-start gap-4 mb-4">
        {/* Logo of letter-avatar */}
        {client.logo ? (
          <div className="bg-white rounded-xl p-2 flex items-center justify-center w-14 h-14 shrink-0">
            <Image
              src={client.logo}
              alt={`${client.name} logo`}
              width={56}
              height={36}
              className="max-h-9 w-auto object-contain"
            />
          </div>
        ) : (
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 font-[family-name:var(--font-gottak)] text-white font-black text-base"
            style={{
              background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
            }}
          >
            {getInitials(client.name)}
          </div>
        )}

        <div className="flex-1 min-w-0">
          <p className="font-[family-name:var(--font-gottak)] text-white font-black text-lg leading-tight truncate">
            {client.name}
          </p>
          <p className="text-white/55 text-xs mt-0.5 truncate">{client.industry}</p>
        </div>

        {client.caseSlug && (
          <span
            className="shrink-0 inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
            title="Lees het uitgebreide klantverhaal"
          >
            <Sparkles className="w-2.5 h-2.5" />
            Case
          </span>
        )}
      </div>

      <p className="text-white/65 text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
        {client.shortDesc}
      </p>

      <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/8">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center px-2 py-0.5 rounded-full border text-[10px] font-semibold tracking-wider uppercase",
              planStyle.className,
            )}
          >
            {planStyle.label}
          </span>
          {client.since && (
            <span className="text-white/45 text-xs">sinds {client.since}</span>
          )}
        </div>
        {client.caseSlug ? (
          <Link
            href={`/succesverhalen/${client.caseSlug}`}
            className="inline-flex items-center gap-1 text-[#a78bfa] hover:text-white text-xs font-semibold transition-colors"
          >
            Lees verhaal
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        ) : (
          <a
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-white/55 hover:text-white text-xs font-semibold transition-colors"
          >
            Bekijk live
            <ArrowUpRight className="w-3 h-3" />
          </a>
        )}
      </div>
    </motion.article>
  )
}

export function ClientsPortfolio() {
  return (
    <section className="relative py-24 px-5 sm:px-8 bg-[#0d0818] overflow-hidden border-t border-white/6">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#623bc7]/8 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">
            Volledig klantenportfolio
          </p>
          <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2rem,4.5vw,3.4rem)] font-black text-white leading-[1.06] tracking-tight">
            {portfolioClients.length} bedrijven werken{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              op Forester OS.
            </span>
          </h2>
          <p className="text-white/65 text-base md:text-lg leading-relaxed mt-5">
            Van ZZP'er tot internationaal handelsbedrijf, van advocatenkantoor tot zorgvastgoed. Hieronder elk bedrijf dat we momenteel bedienen, met live link en pakket.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioClients.map((client) => (
            <ClientCard key={client.name} client={client} />
          ))}
        </div>
      </div>
    </section>
  )
}
