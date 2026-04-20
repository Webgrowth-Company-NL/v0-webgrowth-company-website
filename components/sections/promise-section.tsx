"use client"

import { motion } from "framer-motion"
import { Globe, TrendingUp, Target, BarChart2, FileText, Zap } from "lucide-react"
import Image from "next/image"

const steps = [
  {
    step: "01",
    icon: Globe,
    title: "Website bouwen",
    description: "We bouwen een snelle, conversiegerichte website die er professioneel uitziet en technisch perfect staat.",
    accent: "#623bc7",
  },
  {
    step: "02",
    icon: TrendingUp,
    title: "SEO fundament",
    description: "Je wordt gevonden door de juiste mensen. Q legt het fundament zodat Google je website begrijpt.",
    accent: "#ff0096",
  },
  {
    step: "03",
    icon: Target,
    title: "Leads genereren",
    description: "Bezoekers worden aanvragen. We optimaliseren elke stap in het pad van bezoeker naar klant.",
    accent: "#623bc7",
  },
  {
    step: "04",
    icon: BarChart2,
    title: "Live inzicht",
    description: "Jouw persoonlijk dashboard toont realtime wie je website bezoekt, waar ze vandaan komen en wat ze doen.",
    accent: "#ff0096",
  },
  {
    step: "05",
    icon: FileText,
    title: "Momentum Reports",
    description: "Elke maand een helder overzicht van wat er is gebeurd, wat het heeft opgeleverd en wat we volgende maand doen.",
    accent: "#623bc7",
  },
  {
    step: "06",
    icon: Zap,
    title: "Q verbetert door",
    description: "Q stopt nooit. Elke maand nieuwe kansen spotten, testen en verbeteren. Zonder dat jij erom hoeft te vragen.",
    accent: "#ff0096",
  },
]

export function PromiseSection() {
  return (
    <section className="relative py-24 md:py-32 px-4 sm:px-6 bg-[#0d0015] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#623bc7]/15 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#ff0096]/8 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-[#ff0096] text-sm font-semibold tracking-widest uppercase mb-3">
            Alles inbegrepen
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="font-[family-name:var(--font-gottak)] text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight max-w-2xl">
              Wij combineren website bouw, optimalisatie en live inzicht in{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #ff0096 0%, #c060ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                één systeem.
              </span>
            </h2>
            <p className="text-white/50 text-base max-w-sm lg:text-right">
              Jij bent de ondernemer. Wij zijn Q. Eén systeem dat bouwt, meet en elke maand verbetert.
            </p>
          </div>
        </motion.div>

        {/* Q intro card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <div className="group relative rounded-3xl overflow-hidden border border-white/10 h-[400px] md:h-[460px]">
            <div className="absolute inset-0 bg-[#0d0015]" />
            <div className="absolute right-0 top-0 h-full w-[65%]">
              <Image
                src="/images/developer-character.jpg"
                alt="Q aan het werk"
                fill
                className="object-cover opacity-90"
                style={{ objectPosition: "60% 20%" }}
              />
            </div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(13,0,21,1) 0%, rgba(13,0,21,1) 30%, rgba(13,0,21,0.85) 45%, rgba(13,0,21,0.5) 60%, rgba(13,0,21,0.1) 80%, rgba(13,0,21,0) 95%)",
              }}
            />
            <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-14 max-w-2xl">
              <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">
                Maak kennis met Q
              </p>
              <h3 className="font-[family-name:var(--font-gottak)] text-white font-black text-3xl md:text-5xl leading-tight mb-5">
                Q is niet een bureau.<br />Q is jouw groeisysteem.
              </h3>
              <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-lg">
                Andere bureaus bouwen en verdwijnen. Q blijft. Elke maand meet Q wat er werkt, verbetert wat kan en rapporteert wat het oplevert. Jij hoeft er niet naar te vragen.
              </p>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 h-px opacity-50"
              style={{ background: "linear-gradient(90deg, transparent, #ff0096, #623bc7, transparent)" }}
            />
          </div>
        </motion.div>

        {/* Step cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <StepCard step={step} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fade to light lavender at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 0%, #f7f5ff 100%)" }}
      />
    </section>
  )
}

function StepCard({ step }: { step: (typeof steps)[0] }) {
  const Icon = step.icon
  return (
    <div
      className="group relative h-full min-h-[200px] rounded-3xl p-7 border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/20"
      style={{ background: "rgba(255,255,255,0.04)" }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
        style={{
          background: `radial-gradient(400px circle at 50% 0%, ${step.accent}20, transparent 65%)`,
        }}
      />
      <div className="flex items-center gap-3 mb-5">
        <span className="text-xs font-black tabular-nums" style={{ color: step.accent }}>
          {step.step}
        </span>
        <div
          className="w-10 h-10 rounded-2xl flex items-center justify-center border border-white/10"
          style={{ background: `${step.accent}20` }}
        >
          <Icon className="w-4 h-4" style={{ color: step.accent }} />
        </div>
      </div>
      <h3 className="font-[family-name:var(--font-gottak)] text-white font-black text-lg mb-2">
        {step.title}
      </h3>
      <p className="text-white/55 text-sm leading-relaxed">{step.description}</p>
    </div>
  )
}
