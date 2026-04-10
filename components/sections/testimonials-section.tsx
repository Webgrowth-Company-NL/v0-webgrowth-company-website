"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Ik hoef er niet meer over na te denken. Elke maand krijg ik een berichtje en weet dat het goed zit.",
    author: "Mark de Vries",
    role: "eigenaar InterDam",
  },
  {
    quote: "We stonden op pagina 4. Nu staan we bovenaan voor de zoekterm die ons de meeste klanten oplevert.",
    author: "Sandra Mol",
    role: "MOL Logistics",
  },
  {
    quote: "Ik had drie bureaus daarvoor. Die bouwden en verdwenen. Dit voelt fundamenteel anders.",
    author: "Peter van den Berg",
    role: "Roll Group",
  },
]

const logos = Array(5).fill(null)

export function TestimonialsSection() {
  return (
    <section id="succesverhalen" className="relative py-24 md:py-32 px-4 sm:px-6 bg-[#623bc7]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-gottak)] text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Wat onze klanten zeggen
          </h2>
        </div>
        
        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0d0015] rounded-2xl p-6 md:p-8 border-t-4 border-[#ff0096]"
            >
              <p className="text-white text-base md:text-lg mb-6 text-pretty">
                {`"${testimonial.quote}"`}
              </p>
              <div className="mb-4">
                <p className="text-white font-semibold">{testimonial.author}</p>
                <p className="text-white/60 text-sm">{testimonial.role}</p>
              </div>
              {/* 5 pink stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#ff0096] fill-[#ff0096]" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Logo row */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-12">
          {logos.map((_, index) => (
            <div
              key={index}
              className="w-20 h-8 md:w-24 md:h-10 bg-white/20 rounded"
            />
          ))}
        </div>
        
        {/* Stats */}
        <div className="text-center">
          <p className="font-[family-name:var(--font-gottak)] text-5xl md:text-6xl lg:text-7xl font-bold text-[#ff0096]">300+</p>
          <p className="text-white/90 text-base md:text-lg mt-2">
            websites gebouwd en geoptimaliseerd sinds 2010
          </p>
        </div>
      </motion.div>
    </section>
  )
}
