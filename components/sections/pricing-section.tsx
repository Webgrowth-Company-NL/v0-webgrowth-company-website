"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Core",
    price: "399",
    description: "Q meet, rapporteert en optimaliseert. Jij hoeft niks te doen.",
    features: [
      "Website monitoring",
      "Maandelijks Momentum Report",
      "Continu optimaliseren",
      "Live dashboard",
    ],
    cta: "Start met Core",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "699",
    description: "Alles van Core, plus slimmere automations en diepere integraties.",
    features: [
      "Alles van Core",
      "Marketing automations",
      "CRM integratie",
      "Priority support",
    ],
    cta: "Start met Growth",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "999",
    description: "Maatwerk op maat van jouw groeiambities.",
    features: [
      "Alles van Growth",
      "Custom features",
      "Dedicated Q-sessies",
      "Strategisch partnership",
    ],
    cta: "Neem contact op",
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="prijzen" className="relative py-24 md:py-32 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {/* Dark purple background panel */}
        <div className="bg-[#623bc7] rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Kies je plan
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              Begin vandaag en laat je website groeien
            </p>
          </div>
          
          {/* Pricing cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl p-6 md:p-8 ${
                  plan.highlighted
                    ? "bg-[#0d0015] border-2 border-[#ff0096] scale-105 shadow-[0_0_40px_rgba(255,0,150,0.3)]"
                    : "bg-[#0d0015]/60 backdrop-blur-sm border border-white/20"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff0096] text-white text-xs font-bold px-4 py-1 rounded-full">
                    Populair
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-white">€{plan.price}</span>
                  <span className="text-white/60">/maand</span>
                </div>
                <p className="text-white/70 text-sm mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-white text-sm">
                      <Check className="w-5 h-5 text-[#ff0096] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="#contact"
                  className={`block w-full text-center py-3 px-6 rounded-full font-semibold transition-all hover:scale-105 ${
                    plan.highlighted
                      ? "bg-[#ff0096] text-white hover:bg-[#ff0096]/90"
                      : "border-2 border-white/40 text-white hover:bg-white/10 hover:border-white"
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
