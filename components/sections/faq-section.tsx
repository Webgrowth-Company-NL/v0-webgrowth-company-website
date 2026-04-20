"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "Hoe lang duurt het voordat mijn website live is?",
    a: "Gemiddeld zijn we binnen 4 tot 6 weken live. We starten met een intake, daarna bouwen we en jij geeft feedback. Geen ellenlange trajecten.",
  },
  {
    q: "Wat heb ik zelf nodig om te leveren?",
    a: "Teksten, je logo en een paar foto's van je bedrijf. Heb je die nog niet? We helpen je op weg. Het hoeft niet perfect te zijn voor we starten.",
  },
  {
    q: "Wat kost het als ik later iets wil aanpassen?",
    a: "Niets extra. Aanpassingen zijn gewoon onderdeel van de samenwerking. Geen offerte, geen verrekening achteraf.",
  },
  {
    q: "Ik heb al een website. Kunnen jullie die overnemen?",
    a: "Ja. We kijken samen wat er staat, wat goed werkt en wat beter kan. In veel gevallen bouwen we iets nieuws op basis van wat al werkt.",
  },
  {
    q: "Wat als ik niet tevreden ben?",
    a: "Dan lossen we het op. Geen smallprint, geen discussie. We blijven net zo lang door totdat het goed zit.",
  },
  {
    q: "Is dit ook geschikt voor mijn branche?",
    a: "We werken voor uiteenlopende MKB-bedrijven: van installatiebedrijven tot adviesbureaus, van fysiotherapeuten tot logistiek. Als jij klanten wil aantrekken via je website, is dit voor jou.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="relative py-24 md:py-32 px-5 sm:px-8 bg-[#0d0818] overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#623bc7]/8 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">Veelgestelde vragen</p>
          <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2.2rem,5vw,3.8rem)] font-black text-white leading-[1.06] tracking-tight">
            De vragen{" "}
            <span style={{
              background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              die iedereen stelt.
            </span>
          </h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="rounded-2xl border border-white/8 overflow-hidden"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-white font-semibold text-sm leading-snug">{faq.q}</span>
                <div className="shrink-0 w-6 h-6 rounded-full border border-white/15 flex items-center justify-center">
                  {open === i
                    ? <Minus className="w-3 h-3 text-[#ff0096]" />
                    : <Plus className="w-3 h-3 text-white/50" />
                  }
                </div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-white/70 text-sm leading-relaxed border-t border-white/6 pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
