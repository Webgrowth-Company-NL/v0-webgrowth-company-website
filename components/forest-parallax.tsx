"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ForestParallax() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  
  const layer1Y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const layer2Y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const layer3Y = useTransform(scrollYProgress, [0, 1], [0, 400])
  const layer4Y = useTransform(scrollYProgress, [0, 1], [0, 500])
  const layer5Y = useTransform(scrollYProgress, [0, 1], [0, 600])
  
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.4, 0.8, 0.6, 0.3])
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 1])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, #623bc7 0%, #2d1b4e 30%, #1a0a2e 60%, #0d0015 100%)"
          }}
        />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Sky gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, #623bc7 0%, #2d1b4e 30%, #1a0a2e 60%, #0d0015 100%)"
        }}
      />
      
      {/* Neon glow behind treeline */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[60%]"
        style={{
          opacity: glowOpacity,
          scale: glowScale,
          background: "radial-gradient(ellipse at center bottom, #ff0096 0%, rgba(255, 0, 150, 0.3) 30%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      
      {/* Forest layers - furthest back */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full"
        style={{ y: layer1Y }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#1a1a2e"
          d="M0,320 L0,200 Q60,150 120,180 Q180,200 240,160 Q300,120 360,150 Q420,180 480,140 Q540,100 600,130 Q660,160 720,120 Q780,80 840,110 Q900,140 960,100 Q1020,60 1080,90 Q1140,120 1200,80 Q1260,40 1320,70 Q1380,100 1440,60 L1440,320 Z"
        />
      </motion.svg>
      
      {/* Layer 2 */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full"
        style={{ y: layer2Y }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#151525"
          d="M0,320 L0,220 Q80,180 160,200 Q240,220 320,180 Q400,140 480,170 Q560,200 640,160 Q720,120 800,150 Q880,180 960,140 Q1040,100 1120,130 Q1200,160 1280,120 Q1360,80 1440,100 L1440,320 Z"
        />
      </motion.svg>
      
      {/* Layer 3 */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full"
        style={{ y: layer3Y }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#10101c"
          d="M0,320 L0,240 Q100,200 200,230 Q300,260 400,220 Q500,180 600,210 Q700,240 800,200 Q900,160 1000,190 Q1100,220 1200,180 Q1300,140 1440,160 L1440,320 Z"
        />
      </motion.svg>
      
      {/* Layer 4 - Trees silhouette */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full"
        style={{ y: layer4Y }}
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          fill="#0a0a14"
          d="M0,400 L0,280 
             L40,280 L60,200 L80,280 
             L120,280 L150,180 L180,280 
             L220,280 L260,150 L300,280 
             L340,280 L370,190 L400,280 
             L440,280 L480,160 L520,280 
             L560,280 L600,140 L640,280 
             L680,280 L710,200 L740,280 
             L780,280 L820,170 L860,280 
             L900,280 L940,130 L980,280 
             L1020,280 L1050,210 L1080,280 
             L1120,280 L1160,150 L1200,280 
             L1240,280 L1280,180 L1320,280 
             L1360,280 L1400,160 L1440,280 
             L1440,400 Z"
        />
      </motion.svg>
      
      {/* Layer 5 - Closest trees */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full"
        style={{ y: layer5Y }}
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          fill="#050508"
          d="M0,400 L0,300 
             L30,300 L50,220 L70,300 
             L110,300 L140,200 L170,300 
             L210,300 L250,180 L290,300 
             L330,300 L360,220 L390,300 
             L430,300 L470,190 L510,300 
             L550,300 L590,170 L630,300 
             L670,300 L700,230 L730,300 
             L770,300 L810,200 L850,300 
             L890,300 L930,160 L970,300 
             L1010,300 L1040,240 L1070,300 
             L1110,300 L1150,180 L1190,300 
             L1230,300 L1270,210 L1310,300 
             L1350,300 L1390,190 L1440,300 
             L1440,400 Z"
        />
      </motion.svg>
    </div>
  )
}
