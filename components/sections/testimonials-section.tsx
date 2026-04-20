"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    quote: "Voorheen had ik geen idee wat mijn website deed. Nu weet ik elke maand precies hoeveel bezoekers er zijn geweest en waar ze vandaan kwamen. Dat voelt als grip.",
    name: "Thomas van der Berg",
    role: "Directeur, Van der Berg Installatiebedrijf",
    initials: "TB",
    color: "#623bc7",
  },
  {
    quote: "In drie maanden tijd staan we op de eerste pagina van Google voor onze belangrijkste zoekterm. Dat lukte ons in vijf jaar met het vorige bureau niet.",
    name: "Sandra Hoekstra",
    role: "Eigenaar, Hoekstra Fysiotherapie",
    initials: "SH",
    color: "#ff0096",
  },
  {
    quote: "Het persoonlijke bericht dat we elke maand krijgen is goud. Geen Excel, geen jargon. Gewoon: dit is wat er is gebeurd, en dit doen we er volgende maand aan.",
    name: "Rick Janssen",
    role: "Zaakvoerder, Janssen Bouwgroep",
    initials: "RJ",
    color: "#4a2b9e",
  },
  {
    quote: "Ik had al twee websites laten bouwen die niks opleverden. Dit is de eerste keer dat ik echt zie dat mijn website voor mij werkt. De leads komen binnen via de site.",
    name: "Marieke de Vos",
    role: "Eigenaar, De Vos Accountancy",
    initials: "MV",
    color: "#c0007a",
  },
  {
    quote: "Ze bouwen niet alleen en verdwijnen. Q blijft actief. Elke maand een verbetering, elke maand beter vindbaar. Dat is precies wat ik nodig had.",
    name: "Erik Smit",
    role: "Directeur, Smit Techniek BV",
    initials: "ES",
    color: "#623bc7",
  },
  {
    quote: "Het dashboard is zo helder dat ik het ook aan mijn compagnon kan laten zien. Die snapt het meteen. En dat zegt wat, want die snapt niks van marketing.",
    name: "Laura Visser",
    role: "Mede-eigenaar, Visser & Partners Advocaten",
    initials: "LV",
    color: "#ff0096",
  },
]

export function TestimonialsSection() {
  return (
    <section id="succesverhalen" className="py-24 md:py-36 px-5 sm:px-8 bg-[#f8f6f1]">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-4">
            Wat klanten zeggen
          </p>
          <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2.2rem,5vw,3.8rem)] font-black text-[#0a0a0a] leading-[1.06] tracking-tight max-w-2xl">
            Geen belofte.<br />Gewoon wat mensen zeggen.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="bg-white rounded-2xl p-6 border border-black/6 shadow-sm flex flex-col"
            >
              <p className="text-[#0a0a0a]/70 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-black/6">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[11px] font-black shrink-0"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-[#0a0a0a] font-semibold text-sm">{t.name}</p>
                  <p className="text-[#0a0a0a]/40 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
