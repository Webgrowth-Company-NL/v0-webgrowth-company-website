"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, Cell,
} from "recharts"
import {
  Home, Globe, FileText, FileMinusCorner, MonitorCheck,
  CheckSquare, Flame, BanknoteArrowUp, TrendingUp, MicVocal,
  Vault, CalendarFold, ArrowRight, Bell, Search, ChevronDown,
  TrendingDown,
} from "lucide-react"

/* ── Color palette: pink + purple only ─────────────────────────── */
// #ff0096  hot pink
// #e6007f  dark pink
// #ff4db8  light pink
// #d946ef  fuchsia
// #623bc7  deep purple
// #7c4ddb  mid purple
// #8b5cf6  violet
// #a78bfa  soft violet
// #c4b5fd  lavender

/* ── Nav config ─────────────────────────────────────────────────── */
const navSections = [
  {
    label: "Management",
    items: [
      { title: "Dashboard", href: "#", icon: Home },
      { title: "Websites", href: "#", icon: Globe },
    ],
  },
  {
    label: "Web",
    items: [
      { title: "Pagina's", href: "#", icon: FileText },
      { title: "Berichten", href: "#", icon: FileMinusCorner },
    ],
  },
  {
    label: "Growth",
    items: [
      { title: "SEO", href: "#", icon: MonitorCheck },
      { title: "Taken", href: "#", icon: CheckSquare },
      { title: "Lead Engine", href: "#", icon: Flame },
      { title: "Sales", href: "#", icon: BanknoteArrowUp },
      { title: "Momentum", href: "#", icon: TrendingUp },
    ],
  },
  {
    label: "Genius",
    items: [
      { title: "Talks", href: "#", icon: MicVocal },
      { title: "Vault", href: "#", icon: Vault },
      { title: "1 op 1", href: "#", icon: CalendarFold },
    ],
  },
]

/* ── Mock data ──────────────────────────────────────────────────── */
const kpis = [
  { label: "Bezoekers", value: "2.847", delta: "+12%", up: true, sub: "vs vorige periode" },
  { label: "Leads", value: "1.204", delta: "+8%", up: true, sub: "engaged bezoekers" },
  { label: "Prospects", value: "34", delta: "-2", up: false, sub: "formulier ingevuld" },
  { label: "Taken open", value: "7", delta: "3 nieuw", up: null, sub: "deze week" },
]

const trendData = [
  { date: "14 apr", current: 142, prev: 98 },
  { date: "15 apr", current: 189, prev: 112 },
  { date: "16 apr", current: 167, prev: 145 },
  { date: "17 apr", current: 221, prev: 134 },
  { date: "18 apr", current: 198, prev: 167 },
  { date: "19 apr", current: 243, prev: 189 },
  { date: "20 apr", current: 287, prev: 201 },
  { date: "21 apr", current: 312, prev: 223 },
  { date: "22 apr", current: 278, prev: 198 },
  { date: "23 apr", current: 334, prev: 245 },
  { date: "24 apr", current: 356, prev: 267 },
  { date: "25 apr", current: 389, prev: 289 },
  { date: "26 apr", current: 412, prev: 312 },
  { date: "27 apr", current: 445, prev: 334 },
]

const trafficData = [
  { label: "Zoeken",     value: 1243, fill: "#ff0096" },
  { label: "Direct",     value: 678,  fill: "#8b5cf6" },
  { label: "Social",     value: 423,  fill: "#d946ef" },
  { label: "E-mail",     value: 234,  fill: "#a78bfa" },
  { label: "Verwijzing", value: 156,  fill: "#623bc7" },
  { label: "Ads",        value: 113,  fill: "#ff4db8" },
]

const visitorTypeData = [
  { label: "Leads",     value: 1204, fill: "#a78bfa" },
  { label: "Prospects", value: 34,   fill: "#ff0096" },
  { label: "Waste",     value: 1609, fill: "#623bc7" },
]

const deviceData = [
  { label: "Desktop", value: 1567, fill: "#ff0096" },
  { label: "Mobile",  value: 1189, fill: "#8b5cf6" },
  { label: "Tablet",  value: 91,   fill: "#623bc7" },
]

const countriesData = [
  { code: "nl", name: "Nederland",          visitors: 2134, pct: 75 },
  { code: "be", name: "België",             visitors: 312,  pct: 11 },
  { code: "de", name: "Duitsland",          visitors: 198,  pct: 7  },
  { code: "gb", name: "Verenigd Koninkrijk",visitors: 87,   pct: 3  },
  { code: "us", name: "Verenigde Staten",   visitors: 56,   pct: 2  },
]

const kpiExplanations: Record<string, string> = {
  "Bezoekers": "De +12% groei is consistent met de verbeterde organische rankings na de recente content-updates. Geen bijzondere pieken of dalen die wijzen op externe factoren — dit is gezonde, structurele groei.",
  "Leads": "Met een leadratio van 44,3% scoor je boven het branchegemiddelde van 42% voor B2B dienstverlening. Leads zijn bezoekers die actief je site verkennen zonder te bouncen — een positief signaal.",
  "Prospects": "34 prospects dit periode. Je conversieratio van 1,2% ligt licht onder het gemiddelde van 1,5%. Overweeg het contactformulier prominenter te plaatsen of een directe CTA toe te voegen op de meest bezochte pagina's.",
  "Taken open": "7 openstaande taken, waarvan 3 nieuw binnengekomen deze week. De meeste taken zijn al ingepland in je werkschema. Geen actie nodig tenzij je een deadline wil vervroegen.",
}

const recentLeads = [
  { name: "Jan de Vries",     source: "Organisch", time: "2 min geleden",  stage: "Nieuw" },
  { name: "Sandra Pietersen", source: "LinkedIn",  time: "14 min geleden", stage: "In behandeling" },
  { name: "Mark Hofman",      source: "Direct",    time: "1 uur geleden",  stage: "Gewonnen" },
  { name: "Roos Bakker",      source: "Organisch", time: "3 uur geleden",  stage: "Nieuw" },
]

const recentTasks = [
  { title: "H1 homepage herschrijven",        type: "Momentum",  done: true  },
  { title: "Contactformulier boven de fold",   type: "Momentum",  done: true  },
  { title: "Snelheid mobiel optimaliseren",    type: "Deep work", done: false },
  { title: "Blog artikel SEO controleren",     type: "Adhoc",     done: false },
]

const stageColor: Record<string, string> = {
  Nieuw:              "bg-[#ff0096]/15 text-[#ff4db8]",
  "In behandeling":   "bg-[#623bc7]/20 text-[#a78bfa]",
  Gewonnen:           "bg-emerald-500/15 text-emerald-400",
}

/* ── Tooltip style ──────────────────────────────────────────────── */
const tooltipStyle = {
  background: "#0d0015",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 10,
  color: "rgba(255,255,255,0.85)",
  fontSize: 12,
  boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
}

/* ── NavDropdown ────────────────────────────────────────────────── */
function NavDropdown({ section, activeNav, setActiveNav }: {
  section: typeof navSections[0]
  activeNav: string
  setActiveNav: (v: string) => void
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const hasActive = section.items.some(i => i.title === activeNav)

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
          open || hasActive
            ? "text-white bg-white/8"
            : "text-white/55 hover:text-white hover:bg-white/5"
        }`}
      >
        {section.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-2 min-w-[190px] rounded-xl border border-white/10 overflow-hidden z-50"
            style={{ background: "#0d0015", boxShadow: "0 16px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)" }}
          >
            <div className="p-2">
              {section.items.map((item) => {
                const Icon = item.icon
                const isActive = activeNav === item.title
                return (
                  <button
                    key={item.title}
                    onClick={() => { setActiveNav(item.title); setOpen(false) }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-100 ${
                      isActive ? "bg-white/8 text-white" : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-[#ff0096]" : "text-white/35"}`} />
                    {item.title}
                    {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#ff0096]" />}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ── ChartCard ──────────────────────────────────────────────────── */
function ChartCard({ title, description, children, className = "" }: {
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-2xl border border-white/8 overflow-hidden ${className}`}
      style={{ background: "rgba(255,255,255,0.025)" }}
    >
      <div className="px-6 py-5 border-b border-white/6">
        <p className="text-white font-semibold text-base">{title}</p>
        {description && <p className="text-white/40 text-sm mt-1">{description}</p>}
      </div>
      <div className="p-6">{children}</div>
    </div>
  )
}

/* ── Page ────────────────────────────────────────────────────────── */
export default function DashboardNewPage() {
  const [activeNav, setActiveNav] = useState("Dashboard")
  const [activePeriod, setActivePeriod] = useState("week")
  const [hoveredKpi, setHoveredKpi] = useState<string | null>(null)

  return (
    <div className="bg-[#0d0818] min-h-screen text-white">

      {/* ── Header ─────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-[#0d0818]/95 backdrop-blur-xl border-b border-white/8">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <div className="flex items-center gap-6 h-16">
            <Link href="/" className="shrink-0 flex items-center">
              <Image src="/images/logo.png" alt="Webgrowth" width={34} height={34} className="w-8 h-8" />
            </Link>
            <div className="w-px h-5 bg-white/10 shrink-0" />
            <nav className="flex items-center gap-0.5">
              {navSections.map((section) => (
                <NavDropdown key={section.label} section={section} activeNav={activeNav} setActiveNav={setActiveNav} />
              ))}
            </nav>
            <div className="flex items-center gap-2 ml-auto shrink-0">
              <button className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-colors">
                <Search className="w-4 h-4" />
              </button>
              <button className="relative p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-colors">
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#ff0096]" />
              </button>
              <div className="flex items-center gap-2.5 pl-3 border-l border-white/8 cursor-pointer group">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff0096] to-[#623bc7] flex items-center justify-center text-white text-[11px] font-black">
                  M
                </div>
                <span className="text-white/60 text-sm font-medium hidden md:inline group-hover:text-white transition-colors">Martijn</span>
                <ChevronDown className="w-3.5 h-3.5 text-white/30 hidden md:inline" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Website selector ───────────────────────────────────────── */}
      <div className="border-b border-white/6 bg-[#0d0015]/60">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <div className="flex items-center gap-3 h-11">
            <Globe className="w-4 h-4 text-white/25" />
            <span className="text-white/35 text-sm">Website:</span>
            <button className="flex items-center gap-1.5 text-white/75 text-sm font-medium hover:text-white transition-colors">
              webgrowth.company <ChevronDown className="w-3.5 h-3.5 text-white/30" />
            </button>
            <div className="flex items-center gap-1.5 ml-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-emerald-400/70 text-xs">Live · goed</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main ───────────────────────────────────────────────────── */}
      <main className="relative max-w-[1400px] mx-auto px-6 sm:px-10 py-14 overflow-hidden">

        {/* Background glow orbs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-[#623bc7]/8 blur-[200px] pointer-events-none" />
        <div className="absolute top-[600px] left-[-100px] w-[600px] h-[600px] rounded-full bg-[#ff0096]/5 blur-[180px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#8b5cf6]/6 blur-[160px] pointer-events-none" />

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <p className="text-[#ff4db8] text-xs font-semibold tracking-widest uppercase mb-4">Forester OS · Dashboard</p>
            <h1 className="font-[family-name:var(--font-gottak)] text-[clamp(2.2rem,5vw,3.8rem)] font-black text-white leading-[1.05] tracking-tight">
              Goedemorgen, Martijn.{" "}
              <span className="bg-gradient-to-r from-[#ff0096] via-[#8b5cf6] to-[#c4b5fd] bg-clip-text text-transparent">
                Je groeit.
              </span>
            </h1>
            <p className="text-white/40 text-base mt-3">April 2026 · webgrowth.company · alles draait goed</p>
          </div>

          {/* Period picker */}
          <div className="flex items-center gap-2 shrink-0 p-1 rounded-xl bg-white/[0.04] border border-white/8">
            {[
              { id: "week",  label: "7 dagen"       },
              { id: "month", label: "Deze maand"    },
              { id: "custom",label: "Aangepast"     },
            ].map(p => (
              <button
                key={p.id}
                onClick={() => setActivePeriod(p.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                  activePeriod === p.id
                    ? "bg-[#623bc7] text-white shadow-lg"
                    : "text-white/40 hover:text-white"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── KPI grid ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative z-[100] grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
              onMouseEnter={() => setHoveredKpi(kpi.label)}
              onMouseLeave={() => setHoveredKpi(null)}
              className="rounded-2xl border px-6 py-6 relative cursor-default transition-colors duration-200"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: hoveredKpi === kpi.label ? "rgba(255,0,150,0.3)" : "rgba(255,255,255,0.08)",
                zIndex: hoveredKpi === kpi.label ? 200 : "auto",
              }}
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                {i === 0 && <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-[#ff0096]/10 blur-[50px]" />}
                {i === 1 && <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-[#a78bfa]/12 blur-[50px]" />}
                {i === 2 && <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-[#623bc7]/12 blur-[50px]" />}
              </div>

              <p className="text-white/40 text-sm mb-3 relative z-10">{kpi.label}</p>
              <p className="font-[family-name:var(--font-gottak)] text-white font-black text-3xl sm:text-4xl leading-none mb-3 relative z-10">
                {kpi.value}
              </p>
              <div className="flex items-center gap-2 relative z-10">
                {kpi.up !== null && (
                  kpi.up
                    ? <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    : <TrendingDown className="w-3.5 h-3.5 text-[#ff4db8]" />
                )}
                <span className={`text-sm font-semibold ${kpi.up === true ? "text-emerald-400" : kpi.up === false ? "text-[#ff4db8]" : "text-white/40"}`}>
                  {kpi.delta}
                </span>
                <span className="text-white/30 text-sm">{kpi.sub}</span>
              </div>

              {/* Q tooltip */}
              <AnimatePresence>
                {hoveredKpi === kpi.label && kpiExplanations[kpi.label] && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 right-0 bottom-0 translate-y-full z-[200] pt-2.5"
                  >
                    {/* arrow */}
                    <div className="ml-6 w-3 h-3 rotate-45 border-l border-t border-[#ff0096]/30 bg-[#110020] -mb-1.5 relative z-10" />
                    <div
                      className="rounded-xl border border-[#ff0096]/30 p-4"
                      style={{
                        background: "#110020",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,0,150,0.15), inset 0 1px 0 rgba(255,255,255,0.05)"
                      }}
                    >
                      <p className="text-[#ff4db8] text-[10px] font-semibold uppercase tracking-wider mb-2">Inzicht van Q</p>
                      <p className="text-white/85 text-sm leading-relaxed">{kpiExplanations[kpi.label]}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* ── AI Insights + Area chart ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10 grid lg:grid-cols-3 gap-5 mb-5"
        >
          {/* AI Insights */}
          <div
            className="rounded-2xl p-[1px] overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(255,0,150,0.35) 0%, rgba(139,92,246,0.25) 50%, rgba(255,255,255,0.07) 100%)" }}
          >
            <div
              className="rounded-[15px] px-6 py-6 h-full flex flex-col gap-5"
              style={{ background: "#0d0015" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-white/10">
                  <Image
                    src="/images/forester-character.jpg"
                    alt="Q"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover object-top"
                    style={{ transform: "scaleX(-1)" }}
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-base">Inzicht van Q</p>
                  <p className="text-white/35 text-sm">Automatisch gegenereerd</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 flex-1">
                <p className="text-white/75 text-sm leading-relaxed">
                  Bezoekers groeiden <span className="text-emerald-400 font-semibold">+12%</span> ten opzichte van vorige periode. Organisch zoekverkeer is de grootste driver door verbeterde rankings na de content-updates van vorige maand.
                </p>
                <p className="text-white/55 text-sm leading-relaxed">
                  Prospectconversie daalde licht naar <span className="text-[#ff4db8] font-semibold">1,2%</span>. Overweeg het contactformulier hoger op de homepage te plaatsen om conversie te verhogen.
                </p>
                <p className="text-white/55 text-sm leading-relaxed">
                  De branchegemiddelde leadratio voor B2B dienstverlening ligt op 42%. Jij zit op <span className="text-[#c4b5fd] font-semibold">44,3%</span> — boven gemiddeld.
                </p>
              </div>
              <div className="pt-4 border-t border-white/8">
                <p className="text-white/25 text-xs">Gegenereerd op basis van Fathom Analytics · april 2026</p>
              </div>
            </div>
          </div>

          {/* Area chart */}
          <div
            className="lg:col-span-2 rounded-2xl border border-white/8 overflow-hidden"
            style={{ background: "rgba(255,255,255,0.025)" }}
          >
            <div className="px-6 py-5 border-b border-white/6 flex items-center justify-between">
              <div>
                <p className="text-white font-semibold text-base">Bezoekersontwikkeling</p>
                <p className="text-white/40 text-sm mt-1">Huidige periode vs vorige periode</p>
              </div>
              <div className="flex items-center gap-4 text-xs text-white/40">
                <span className="flex items-center gap-2"><span className="w-4 h-0.5 rounded bg-[#ff0096] inline-block" />Huidig</span>
                <span className="flex items-center gap-2"><span className="w-4 h-0.5 rounded bg-[#623bc7]/60 inline-block" />Vorig</span>
              </div>
            </div>
            <div className="px-6 pt-6 pb-4">
              <ResponsiveContainer width="100%" height={230}>
                <AreaChart data={trendData}>
                  <defs>
                    <linearGradient id="gradCurrent" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%"  stopColor="#ff0096" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#ff0096" stopOpacity={0}   />
                    </linearGradient>
                    <linearGradient id="gradPrev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%"  stopColor="#623bc7" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#623bc7" stopOpacity={0}   />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.04)" />
                  <XAxis dataKey="date" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip contentStyle={tooltipStyle} cursor={{ stroke: "rgba(255,255,255,0.06)" }} />
                  <Area type="monotone" dataKey="prev"    stroke="#623bc7" strokeWidth={1.5} strokeOpacity={0.5} fill="url(#gradPrev)"    dot={false} name="Vorige periode"  />
                  <Area type="monotone" dataKey="current" stroke="#ff0096" strokeWidth={2}   fill="url(#gradCurrent)" dot={false} name="Huidige periode" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        {/* ── 3 bar charts ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 mb-5"
        >
          <ChartCard title="Verkeersbronnen" description="Hoe komen bezoekers binnen?">
            <ResponsiveContainer width="100%" height={195}>
              <BarChart data={trafficData} layout="vertical" margin={{ left: -8, right: 10, top: 4, bottom: 4 }}>
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="label" tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 12 }} axisLine={false} tickLine={false} width={75} />
                <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
                <Bar dataKey="value" radius={5} name="Bezoekers">
                  {trafficData.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Type bezoekers" description="Wat voor bezoekers zijn het?">
            <ResponsiveContainer width="100%" height={195}>
              <BarChart data={visitorTypeData} layout="vertical" margin={{ left: -8, right: 10, top: 4, bottom: 4 }}>
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="label" tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 12 }} axisLine={false} tickLine={false} width={75} />
                <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
                <Bar dataKey="value" radius={5} name="Bezoekers">
                  {visitorTypeData.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Apparaatgebruik" description="Hoe bezoeken ze de website?">
            <ResponsiveContainer width="100%" height={195}>
              <BarChart data={deviceData} layout="vertical" margin={{ left: -8, right: 10, top: 4, bottom: 4 }}>
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="label" tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 12 }} axisLine={false} tickLine={false} width={75} />
                <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
                <Bar dataKey="value" radius={5} name="Bezoekers">
                  {deviceData.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </motion.div>

        {/* ── Countries + Leads + Tasks ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5"
        >
          {/* Top landen */}
          <ChartCard title="Top landen" description="Waar komen ze vandaan?">
            <div className="flex flex-col gap-5">
              {countriesData.map((c) => (
                <div key={c.code} className="flex items-center gap-4">
                  <Image
                    src={`https://flagcdn.com/${c.code}.svg`}
                    alt={c.name}
                    width={28}
                    height={28}
                    className="rounded-full object-cover w-7 h-7 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-white/65 text-sm truncate">{c.name}</span>
                      <span className="text-white/45 text-sm tabular-nums ml-2">{c.visitors}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/6 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${c.pct}%` }}
                        transition={{ duration: 0.9, delay: 0.5 }}
                        className="h-full rounded-full"
                        style={{ background: "linear-gradient(90deg, #ff0096, #8b5cf6)" }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ChartCard>

          {/* Recente leads */}
          <div
            className="rounded-2xl border border-white/8 overflow-hidden"
            style={{ background: "rgba(255,255,255,0.025)" }}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/6">
              <div className="flex items-center gap-2.5">
                <Flame className="w-5 h-5 text-[#ff0096]" />
                <p className="text-white font-semibold text-base">Recente leads</p>
              </div>
              <button className="flex items-center gap-1.5 text-white/35 hover:text-white text-sm transition-colors">
                Alle leads <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="divide-y divide-white/5">
              {recentLeads.map((lead, i) => (
                <div key={i} className="flex items-center justify-between px-6 py-4 hover:bg-white/[0.02] transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#623bc7]/30 to-[#ff0096]/20 border border-white/10 flex items-center justify-center text-white/60 text-sm font-semibold shrink-0">
                      {lead.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white/90 text-sm font-medium">{lead.name}</p>
                      <p className="text-white/30 text-xs mt-0.5">{lead.source} · {lead.time}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${stageColor[lead.stage]}`}>
                    {lead.stage}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Taken */}
          <div
            className="rounded-2xl border border-white/8 overflow-hidden"
            style={{ background: "rgba(255,255,255,0.025)" }}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/6">
              <div className="flex items-center gap-2.5">
                <CheckSquare className="w-5 h-5 text-[#8b5cf6]" />
                <p className="text-white font-semibold text-base">Taken</p>
              </div>
              <button className="flex items-center gap-1.5 text-white/35 hover:text-white text-sm transition-colors">
                Alle taken <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="divide-y divide-white/5">
              {recentTasks.map((task, i) => (
                <div key={i} className="flex items-center gap-4 px-6 py-4 hover:bg-white/[0.02] transition-colors">
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                    task.done ? "bg-emerald-500/15 border-emerald-500/35" : "border-white/20"
                  }`}>
                    {task.done && (
                      <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 12 12">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <p className={`text-sm flex-1 truncate ${task.done ? "text-white/30 line-through" : "text-white/80"}`}>
                    {task.title}
                  </p>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${
                    task.type === "Momentum" ? "bg-[#ff0096]/15 text-[#ff4db8]"
                    : task.type === "Deep work" ? "bg-[#623bc7]/20 text-[#a78bfa]"
                    : "bg-white/8 text-white/45"
                  }`}>
                    {task.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Momentum notification ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.42 }}
          className="relative z-10 rounded-2xl border border-[#ff0096]/20 px-7 sm:px-9 py-7 flex flex-col sm:flex-row sm:items-center gap-5 overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(255,0,150,0.07) 0%, rgba(98,59,199,0.05) 100%)" }}
        >
          <div className="absolute top-0 right-0 w-56 h-56 rounded-full bg-[#ff0096]/8 blur-[90px] pointer-events-none" />
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ff0096] to-[#623bc7] flex items-center justify-center text-white font-black text-base shrink-0 relative z-10">
            Q
          </div>
          <div className="flex-1 relative z-10">
            <p className="text-white font-semibold text-base mb-1">Momentum rapport april staat klaar</p>
            <p className="text-white/45 text-sm leading-relaxed">Q heeft 3 verbeterpunten gevonden en uitgevoerd. +12% organisch verkeer deze maand.</p>
          </div>
          <button className="flex items-center gap-2 bg-[#ff0096] hover:bg-[#e6007f] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-[1.02] shrink-0 relative z-10">
            Bekijk rapport <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </main>
    </div>
  )
}
