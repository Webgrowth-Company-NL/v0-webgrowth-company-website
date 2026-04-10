"use client"

import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section id="website-apk" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-24">
      {/* Enhanced glow effect for this section */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[80%]"
          style={{
            background: "radial-gradient(ellipse at center bottom, #ff0096 0%, rgba(255, 0, 150, 0.4) 25%, rgba(255, 0, 150, 0.1) 50%, transparent 70%)",
            filter: "blur(80px)",
            opacity: 0.8,
          }}
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 text-balance">
          Klaar om te groeien?
        </h2>
        
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 text-pretty">
          Start met een gratis website APK. We kijken samen wat er beter kan en wat het je oplevert. Geen verplichtingen.
        </p>
        
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-[#ff0096] hover:bg-[#ff0096]/90 text-white text-lg md:text-xl px-10 py-5 rounded-full font-bold transition-all shadow-[0_0_40px_rgba(255,0,150,0.5)] hover:shadow-[0_0_60px_rgba(255,0,150,0.6)]"
        >
          Doe de gratis website APK
        </motion.a>
      </motion.div>
    </section>
  )
}
