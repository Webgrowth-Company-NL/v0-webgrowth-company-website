"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

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

const logos = Array(6).fill(null)

export function TestimonialsSection() {
  return (
    <section id="succesverhalen" className="relative py-24 md:py-32 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {/* Light panel */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0d0015] mb-4">
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
                className="bg-[#0d0015] rounded-2xl p-6 md:p-8"
              >
                <Quote className="w-8 h-8 text-[#ff0096] mb-4" />
                <p className="text-white text-base md:text-lg mb-6 text-pretty">
                  {`"${testimonial.quote}"`}
                </p>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Logo row */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-12 opacity-40">
            {logos.map((_, index) => (
              <div
                key={index}
                className="w-20 h-8 md:w-24 md:h-10 bg-gray-300 rounded"
              />
            ))}
          </div>
          
          {/* Stats */}
          <div className="text-center">
            <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#623bc7]">300+</p>
            <p className="text-[#0d0015]/70 text-base md:text-lg mt-2">
              websites gebouwd en geoptimaliseerd sinds 2010
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
