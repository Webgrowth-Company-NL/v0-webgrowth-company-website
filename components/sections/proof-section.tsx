"use client"

import { motion } from "framer-motion"

const floatingSnippets = [
  {
    text: "1.636 bezoekers in 10 dagen",
    position: "top-0 left-0 md:-left-4 md:top-4",
    style: "bg-white text-[#0d0015] border-l-4 border-[#ff0096]",
    rotate: -3,
    delay: 0,
  },
  {
    text: "98% engagement",
    position: "top-0 right-0 md:-right-4 md:top-8",
    style: "bg-[#623bc7] text-white",
    rotate: 2,
    delay: 0.5,
  },
  {
    text: "66 nieuwe prospects",
    position: "bottom-24 left-0 md:-left-8 md:bottom-32",
    style: "bg-white text-[#0d0015] border-l-4 border-[#623bc7]",
    rotate: -2,
    delay: 1,
  },
  {
    text: "Automation live",
    position: "bottom-16 right-0 md:-right-6 md:bottom-24",
    style: "bg-[#ff0096] text-white",
    rotate: 3,
    delay: 1.5,
  },
]

export function ProofSection() {
  return (
    <section className="relative py-24 md:py-32 px-4 sm:px-6 bg-[#0d0015]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-[family-name:var(--font-gottak)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
            Geen verhalen.
          </h2>
          <h2 className="font-[family-name:var(--font-gottak)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#ff0096] mb-6">
            Gewoon resultaat.
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto text-pretty">
            Elke maand krijgen onze klanten een persoonlijk bericht van ons. Geen automatisch rapport. Geen dashboard-dump. Gewoon een helder verhaal over wat er is gebeurd en wat we hebben gedaan.
          </p>
        </div>
        
        {/* Email preview with floating snippets */}
        <div className="relative max-w-2xl mx-auto pt-8 md:pt-4">
          {/* Floating snippets */}
          {floatingSnippets.map((snippet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                opacity: { duration: 0.5, delay: 0.3 + index * 0.1 },
                scale: { duration: 0.5, delay: 0.3 + index * 0.1 },
                y: {
                  duration: 3 + snippet.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: snippet.delay,
                },
              }}
              className={`absolute z-10 px-4 py-2 rounded-lg text-sm font-semibold shadow-xl ${snippet.position} ${snippet.style}`}
              style={{ rotate: `${snippet.rotate}deg` }}
            >
              {snippet.text}
            </motion.div>
          ))}
          
          {/* Email card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden mt-12 md:mt-8"
          >
            {/* Email header with subject line */}
            <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
              <p className="text-[#0d0015] font-semibold text-sm mb-2">
                Jouw website in april — hier is wat er is gebeurd
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#623bc7] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">WG</span>
                </div>
                <div>
                  <p className="text-[#0d0015] font-semibold text-sm">Webgrowth Team</p>
                  <p className="text-gray-500 text-xs">team@webgrowth.nl</p>
                </div>
              </div>
            </div>
            
            {/* Email body */}
            <div className="px-6 py-6 text-[#0d0015]">
              <p className="text-base leading-relaxed">
                <span className="font-semibold">Hoi [naam],</span>
                <br /><br />
                Ik wilde even kort laten weten hoe jullie website het de eerste tien dagen van april heeft gedaan, want de cijfers zien er goed uit.
                <br /><br />
                In de periode van 1 t/m 10 april hebben <span className="font-semibold text-[#623bc7]">1.636 bezoekers</span> de website gevonden...
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-gray-400 text-sm">...</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
