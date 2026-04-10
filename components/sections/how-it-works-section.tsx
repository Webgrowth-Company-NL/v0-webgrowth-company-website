"use client"

import { motion } from "framer-motion"
import { Hammer, Eye, TrendingUp, Rocket } from "lucide-react"

const steps = [
  {
    icon: Hammer,
    title: "We bouwen je fundament",
    description: "Een uitzonderlijk goede website. Snel, scherp en gebouwd om te groeien.",
    accent: false,
  },
  {
    icon: Eye,
    title: "Q gaat aan het werk",
    description: "Vanaf dag één meet Q wat er gebeurt op je website. Bezoekers, gedrag, conversies. Alles.",
    accent: false,
  },
  {
    icon: TrendingUp,
    title: "We optimaliseren continu",
    description: "Q spot kansen en pakt ze op. Elke maand beter. Zonder dat jij erom hoeft te vragen.",
    accent: false,
  },
  {
    icon: Rocket,
    title: "Jij groeit",
    description: "Meer bezoekers, meer leads, meer klanten. En jij ziet het live in je dashboard.",
    accent: true,
  },
]

export function HowItWorksSection() {
  return (
    <section id="hoe-het-werkt" className="relative py-24 md:py-32 px-4 sm:px-6 bg-[#0d0015]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-gottak)] text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Van nul naar groei. In vier stappen.
          </h2>
        </div>
        
        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Connecting dashed line */}
          <div className="absolute top-16 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-[#ff0096]" />
          
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
                {/* Icon circle */}
                <div className={`relative z-10 w-14 h-14 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  step.accent 
                    ? "bg-[#ff0096]" 
                    : "bg-[#623bc7]"
                }`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Content card */}
                <div className="bg-[#0d0015]/60 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center h-full">
                  <h3 className="font-[family-name:var(--font-gottak)] text-white font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-white/70 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Mobile Timeline */}
        <div className="md:hidden relative">
          {/* Vertical connecting dashed line */}
          <div className="absolute left-7 top-7 bottom-7 w-[2px] border-l-2 border-dashed border-[#ff0096]" />
          
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
                {/* Icon circle */}
                <div className={`relative z-10 w-14 h-14 flex-shrink-0 rounded-full flex items-center justify-center ${
                  step.accent 
                    ? "bg-[#ff0096]" 
                    : "bg-[#623bc7]"
                }`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-[#0d0015]/60 backdrop-blur-xl rounded-2xl p-5 border border-white/10">
                  <h3 className="font-[family-name:var(--font-gottak)] text-white font-bold text-lg mb-2">{step.title}</h3>
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
