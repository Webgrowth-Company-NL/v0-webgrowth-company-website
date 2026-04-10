"use client"

import { motion } from "framer-motion"
import { Hammer, Eye, TrendingUp, Rocket } from "lucide-react"

const steps = [
  {
    icon: Hammer,
    number: "01",
    title: "We bouwen je fundament",
    description: "Een uitzonderlijk goede website. Snel, scherp en gebouwd om te groeien.",
  },
  {
    icon: Eye,
    number: "02",
    title: "Q gaat aan het werk",
    description: "Vanaf dag één meet Q wat er gebeurt op je website. Bezoekers, gedrag, conversies. Alles.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "We optimaliseren continu",
    description: "Q spot kansen en pakt ze op. Elke maand beter. Zonder dat jij erom hoeft te vragen.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Jij groeit",
    description: "Meer bezoekers, meer leads, meer klanten. En jij ziet het live in je dashboard.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="hoe-het-werkt" className="relative py-24 md:py-32 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Hoe het werkt
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Van fundament tot groei in vier stappen
          </p>
        </div>
        
        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Connecting line */}
          <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-[#623bc7] via-[#ff0096] to-[#623bc7]" />
          
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Node */}
                <div className="relative z-10 w-12 h-12 mx-auto mb-6 bg-[#0d0015] border-4 border-[#ff0096] rounded-full flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-[#ff0096]" />
                </div>
                
                {/* Content */}
                <div className="bg-[#0d0015]/60 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center h-full">
                  <span className="text-[#ff0096] font-mono text-sm">{step.number}</span>
                  <h3 className="text-white font-bold text-lg mt-2 mb-3">{step.title}</h3>
                  <p className="text-white/70 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Mobile Timeline */}
        <div className="md:hidden relative">
          {/* Vertical connecting line */}
          <div className="absolute left-6 top-6 bottom-6 w-1 bg-gradient-to-b from-[#623bc7] via-[#ff0096] to-[#623bc7]" />
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-6"
              >
                {/* Node */}
                <div className="relative z-10 w-12 h-12 flex-shrink-0 bg-[#0d0015] border-4 border-[#ff0096] rounded-full flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-[#ff0096]" />
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-[#0d0015]/60 backdrop-blur-xl rounded-2xl p-5 border border-white/10">
                  <span className="text-[#ff0096] font-mono text-sm">{step.number}</span>
                  <h3 className="text-white font-bold text-lg mt-1 mb-2">{step.title}</h3>
                  <p className="text-white/70 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
