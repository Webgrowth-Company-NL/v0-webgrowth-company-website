"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

export function CTASection() {
  const { scrollYProgress } = useScroll()
  const glowIntensity = useTransform(scrollYProgress, [0.7, 0.9, 1], [0.6, 1, 1])

  return (
    <section id="website-apk" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-24 overflow-hidden">
      {/* Mountain/forest parallax background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Sky gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, #0d0015 0%, #1a0030 30%, #623bc7 60%, #3d1a7a 80%, #1a0030 100%)"
          }}
        />
        
        {/* Maximum intensity glow - brightest moment on the page */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300%] h-[100%]"
          style={{
            opacity: glowIntensity,
            background: "radial-gradient(ellipse 70% 50% at 50% 100%, #ff0096 0%, rgba(255, 0, 150, 0.7) 20%, rgba(255, 0, 150, 0.4) 40%, rgba(98, 59, 199, 0.3) 60%, transparent 80%)",
            filter: "blur(60px)",
          }}
        />
        
        {/* Mountain silhouettes */}
        <svg className="absolute bottom-0 left-0 w-full h-[50%]" viewBox="0 0 1440 400" preserveAspectRatio="none">
          <path
            fill="#3d1a7a"
            d="M0,400 L0,280 L60,280 L120,180 L180,260 L240,160 L280,220 L380,120 L420,180 L520,80 L580,150 L680,60 L720,110 L820,40 L880,100 L980,120 L1080,80 L1180,160 L1280,120 L1380,180 L1440,140 L1440,400 Z"
          />
          <path
            fill="#1a0030"
            d="M0,400 L0,320 L70,250 L140,300 L230,180 L320,260 L420,140 L520,220 L620,100 L720,180 L820,80 L920,160 L1020,120 L1120,180 L1220,140 L1320,200 L1440,160 L1440,400 Z"
          />
        </svg>
        
        {/* Forest silhouette */}
        <svg className="absolute bottom-0 left-0 w-full h-[30%]" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path
            fill="#0a0010"
            d="M0,200 L0,140 L20,140 L35,80 L50,120 L70,60 L90,100 L110,140 
               L140,140 L160,90 L180,50 L200,90 L220,140 
               L250,140 L270,80 L290,40 L310,80 L330,140 
               L360,140 L380,100 L400,60 L420,100 L440,140 
               L470,140 L490,70 L510,30 L530,70 L550,140 
               L580,140 L600,90 L620,50 L640,90 L660,140 
               L690,140 L710,80 L730,40 L750,80 L770,140 
               L800,140 L820,100 L840,60 L860,100 L880,140 
               L910,140 L930,70 L950,30 L970,70 L990,140 
               L1020,140 L1040,90 L1060,50 L1080,90 L1100,140 
               L1130,140 L1150,80 L1170,40 L1190,80 L1210,140 
               L1240,140 L1260,100 L1280,60 L1300,100 L1320,140 
               L1350,140 L1370,70 L1390,30 L1410,70 L1440,140 
               L1440,200 Z"
          />
        </svg>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-3xl mx-auto"
      >
        <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 text-balance">
          Klaar om te groeien?
        </h2>
        
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 text-pretty">
          Start met een gratis website APK. We kijken samen wat er beter kan en wat het je oplevert. Geen verplichtingen.
        </p>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href="/website-apk"
            className="inline-block bg-[#ff0096] hover:bg-[#ff0096]/90 text-white text-lg md:text-xl px-10 py-5 rounded-full font-bold transition-all shadow-[0_0_50px_rgba(255,0,150,0.6)] hover:shadow-[0_0_70px_rgba(255,0,150,0.8)]"
          >
            Doe de gratis website APK
          </Link>
        </motion.div>
        
        <p className="mt-6 text-white/50 text-sm">
          Gratis en vrijblijvend. Geen verkooppraatje.
        </p>
      </motion.div>
    </section>
  )
}
