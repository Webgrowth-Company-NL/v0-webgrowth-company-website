"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ForestParallax() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  
  // Parallax transforms for each layer - faster scroll = more movement
  const skyY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const mountain1Y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const mountain2Y = useTransform(scrollYProgress, [0, 1], [0, 250])
  const mountain3Y = useTransform(scrollYProgress, [0, 1], [0, 350])
  const forest1Y = useTransform(scrollYProgress, [0, 1], [0, 450])
  const forest2Y = useTransform(scrollYProgress, [0, 1], [0, 550])
  
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.6, 1, 0.8, 0.4])
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.4, 1.1])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, #0d0015 0%, #623bc7 50%, #3d1a7a 70%, #1a0030 100%)"
          }}
        />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Sky gradient - dark purple at top, brighter in middle */}
      <motion.div 
        className="absolute inset-0"
        style={{
          y: skyY,
          background: "linear-gradient(to bottom, #0d0015 0%, #1a0030 20%, #623bc7 50%, #3d1a7a 70%, #1a0030 90%, #0d0015 100%)"
        }}
      />
      
      {/* Neon glow behind mountain peaks - intense #ff0096 radial gradient */}
      <motion.div
        className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[300%] h-[80%]"
        style={{
          opacity: glowOpacity,
          scale: glowScale,
          background: "radial-gradient(ellipse 60% 40% at 50% 80%, #ff0096 0%, rgba(255, 0, 150, 0.6) 20%, rgba(255, 0, 150, 0.3) 40%, rgba(98, 59, 199, 0.2) 60%, transparent 80%)",
          filter: "blur(40px)",
        }}
      />
      
      {/* Mountain Layer 1 - Furthest back, lightest purple #623bc7 */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full"
        style={{ y: mountain1Y }}
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          fill="#623bc7"
          d="M0,400 L0,280 
             L60,280 L120,180 L180,260 L200,240 L240,160 L280,220 L320,200 
             L380,120 L420,180 L460,160 L520,80 L580,150 L620,130 
             L680,60 L720,110 L760,90 L820,40 L880,100 L920,70 
             L980,120 L1040,80 L1080,140 L1140,100 L1180,160 
             L1240,120 L1300,180 L1360,140 L1400,200 L1440,160 
             L1440,400 Z"
        />
      </motion.svg>
      
      {/* Mountain Layer 2 - Middle, darker purple #3d1a7a */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full"
        style={{ y: mountain2Y }}
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          fill="#3d1a7a"
          d="M0,400 L0,300 
             L40,300 L80,220 L120,260 L160,200 L200,240 L260,160 L300,200 
             L360,140 L400,180 L460,100 L500,150 L560,80 L600,130 
             L660,60 L700,100 L760,50 L800,90 L860,30 L900,80 
             L960,60 L1000,110 L1060,70 L1100,120 L1160,90 
             L1200,150 L1260,110 L1320,170 L1380,130 L1440,180 
             L1440,400 Z"
        />
      </motion.svg>
      
      {/* Mountain Layer 3 - Closest mountains, darkest purple #1a0030 */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full"
        style={{ y: mountain3Y }}
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          fill="#1a0030"
          d="M0,400 L0,320 
             L30,320 L70,250 L100,280 L140,220 L180,260 L230,180 L270,230 
             L320,160 L360,200 L420,120 L460,170 L520,100 L560,150 
             L620,80 L660,130 L720,60 L760,110 L820,50 L860,100 
             L920,70 L960,120 L1020,80 L1060,130 L1120,90 
             L1160,140 L1220,100 L1280,160 L1340,120 L1400,180 L1440,150 
             L1440,400 Z"
        />
      </motion.svg>
      
      {/* Forest Layer 1 - Back row of pine trees, very dark #0a0010 */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full"
        style={{ y: forest1Y }}
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
      >
        <path
          fill="#0a0010"
          d="M0,300 L0,200 
             L15,200 L25,120 L35,160 L45,100 L55,150 L65,200 
             L85,200 L100,130 L110,170 L125,90 L140,140 L155,200 
             L175,200 L190,110 L200,160 L215,80 L230,130 L245,200 
             L265,200 L280,140 L295,100 L310,150 L325,200 
             L345,200 L360,120 L375,80 L390,130 L405,200 
             L425,200 L440,100 L455,150 L470,70 L485,120 L500,200 
             L520,200 L535,130 L550,90 L565,140 L580,200 
             L600,200 L615,110 L630,160 L645,80 L660,130 L675,200 
             L695,200 L710,140 L725,100 L740,150 L755,200 
             L775,200 L790,120 L805,80 L820,130 L835,200 
             L855,200 L870,100 L885,150 L900,70 L915,120 L930,200 
             L950,200 L965,130 L980,90 L995,140 L1010,200 
             L1030,200 L1045,110 L1060,160 L1075,80 L1090,130 L1105,200 
             L1125,200 L1140,140 L1155,100 L1170,150 L1185,200 
             L1205,200 L1220,120 L1235,80 L1250,130 L1265,200 
             L1285,200 L1300,100 L1315,150 L1330,70 L1345,120 L1360,200 
             L1380,200 L1395,130 L1410,90 L1425,140 L1440,200 
             L1440,300 Z"
        />
      </motion.svg>
      
      {/* Forest Layer 2 - Front row of pine trees, near-black #050508 */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full"
        style={{ y: forest2Y }}
        viewBox="0 0 1440 250"
        preserveAspectRatio="none"
      >
        <path
          fill="#050508"
          d="M0,250 L0,180 
             L20,180 L35,90 L45,130 L60,60 L75,110 L90,180 
             L115,180 L130,100 L145,60 L160,110 L175,180 
             L200,180 L220,80 L235,130 L255,50 L275,100 L295,180 
             L320,180 L340,90 L355,140 L375,70 L395,120 L415,180 
             L440,180 L460,100 L480,55 L500,110 L520,180 
             L545,180 L565,80 L580,130 L600,60 L620,110 L640,180 
             L665,180 L685,90 L705,50 L725,100 L745,180 
             L770,180 L790,100 L810,140 L830,70 L850,120 L870,180 
             L895,180 L915,80 L935,130 L955,55 L975,110 L995,180 
             L1020,180 L1040,90 L1060,140 L1080,65 L1100,120 L1120,180 
             L1145,180 L1165,100 L1185,55 L1205,110 L1225,180 
             L1250,180 L1270,80 L1290,130 L1310,60 L1330,110 L1350,180 
             L1375,180 L1395,90 L1415,140 L1440,180 
             L1440,250 Z"
        />
      </motion.svg>
    </div>
  )
}
