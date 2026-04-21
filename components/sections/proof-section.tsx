"use client"

import { motion } from "framer-motion"

const snippets = [
  { text: "1.636 bezoekers in 10 dagen", style: "bg-white text-[#0a0a0a] border-l-4 border-[#ff0096]", rotate: -2, top: "4%", left: "-6%" },
  { text: "98% engagement", style: "bg-[#623bc7] text-white", rotate: 2, top: "2%", right: "-4%" },
  { text: "66 nieuwe prospects", style: "bg-white text-[#0a0a0a] border-l-4 border-[#623bc7]", rotate: -1.5, bottom: "28%", left: "-8%" },
  { text: "Automation live", style: "bg-[#ff0096] text-white", rotate: 2.5, bottom: "22%", right: "-5%" },
]

export function ProofSection() {
  return (
    <section className="py-24 md:py-36 px-5 sm:px-8 bg-[#0d0818] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">Elke maand een persoonlijk bericht.</p>
            <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2.2rem,5vw,3.8rem)] font-black text-white leading-[1.06] tracking-tight">
              Elke maand{" "}
              <span style={{
                background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                meetbare groei.
              </span>
            </h2>
            <p className="mt-6 text-white/80 text-lg leading-relaxed max-w-md">
              Elke maand sturen wij jou een persoonlijk bericht, direct in je inbox. Een helder verhaal over wat er is gebeurd en wat we volgende maand aanpakken.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { value: "1.636", label: "bezoekers in 10 dagen" },
                { value: "98%", label: "engagement rate" },
                { value: "66", label: "nieuwe prospects" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl px-4 py-3.5 border border-white/8 bg-white/[0.04]"
                >
                  <p className="text-2xl font-black text-white">{stat.value}</p>
                  <p className="text-white/45 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — email card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            {snippets.map((s, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                className={`absolute z-10 px-3.5 py-2 rounded-lg text-xs font-semibold shadow-xl whitespace-nowrap ${s.style}`}
                style={{
                  rotate: `${s.rotate}deg`,
                  top: s.top,
                  left: s.left,
                  right: s.right,
                  bottom: s.bottom,
                }}
              >
                {s.text}
              </motion.div>
            ))}

            <div className="rounded-2xl overflow-hidden border border-white/10 mt-10" style={{ boxShadow: "0 0 60px rgba(98,59,199,0.15)" }}>
              <div className="bg-[#111118] border-b border-white/8 px-5 py-4">
                <p className="text-white font-semibold text-sm mb-3">
                  Jouw website in april — hier is wat er is gebeurd
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#623bc7] flex items-center justify-center shrink-0">
                    <span className="text-white font-black text-xs">WG</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Webgrowth Team</p>
                    <p className="text-white/45 text-xs">team@webgrowth.nl</p>
                  </div>
                </div>
              </div>
              <div className="bg-white px-5 py-5 text-[#0a0a0a]">
                <p className="text-sm leading-relaxed">
                  <span className="font-black">Hoi Peter,</span>
                  <br /><br />
                  Ik wilde even kort laten weten hoe jullie website het de eerste tien dagen van april heeft gedaan, want de cijfers zien er goed uit.
                  <br /><br />
                  In de periode van 1 t/m 10 april hebben{" "}
                  <span className="font-black text-[#623bc7]">1.636 bezoekers</span>{" "}
                  de website gevonden...
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-400 text-xs">Lees het volledige rapport...</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
