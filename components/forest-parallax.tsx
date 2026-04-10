"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function ForestParallax() {
  const { scrollYProgress } = useScroll()
  
  // Y transforms - closer layers move more (multiplier × 200px)
  const layer1Y = useTransform(scrollYProgress, [0, 1], [0, 20])   // 0.1x
  const layer2Y = useTransform(scrollYProgress, [0, 1], [0, 40])   // 0.2x
  const layer3Y = useTransform(scrollYProgress, [0, 1], [0, 60])   // 0.3x
  const layer4Y = useTransform(scrollYProgress, [0, 1], [0, 80])   // 0.4x
  const layer5Y = useTransform(scrollYProgress, [0, 1], [0, 120])  // 0.6x
  const layer6Y = useTransform(scrollYProgress, [0, 1], [0, 160])  // 0.8x
  
  // X transforms - subtle horizontal movement, closer = more
  const layer1X = useTransform(scrollYProgress, [0, 1], [0, -5])
  const layer2X = useTransform(scrollYProgress, [0, 1], [0, -8])
  const layer3X = useTransform(scrollYProgress, [0, 1], [0, -12])
  const layer4X = useTransform(scrollYProgress, [0, 1], [0, -16])
  const layer5X = useTransform(scrollYProgress, [0, 1], [0, -24])
  const layer6X = useTransform(scrollYProgress, [0, 1], [0, -32])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Sky gradient - deep space to purple horizon */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, #0d0015 0%, #0d0015 30%, #1a0830 50%, #2a1050 65%, #3d1a7a 80%, #4a2090 90%, #3d1a7a 100%)"
        }}
      />
      
      {/* Atmospheric fog - white at 3% opacity, covers bottom third */}
      <div 
        className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.02) 30%, transparent 100%)",
          filter: "blur(20px)"
        }}
      />

      {/* Layer 1 - Furthest back mountain outline, very faint */}
      <motion.svg
        className="absolute bottom-0 left-0 w-[120%] -ml-[10%]"
        style={{ y: layer1Y, x: layer1X }}
        viewBox="0 0 1600 500"
        preserveAspectRatio="none"
      >
        <path
          fill="#3d1a7a"
          fillOpacity="0.3"
          d="M0,500 L0,380 
             L80,380 L120,340 L180,360 L220,310 L280,350 L350,280 
             L420,320 L480,270 L540,300 L620,220 L680,260 L750,190 
             L820,240 L880,180 L960,220 L1020,160 L1100,200 
             L1180,150 L1240,190 L1320,140 L1380,180 L1450,130 
             L1520,170 L1600,140 L1600,500 Z"
        />
      </motion.svg>

      {/* Layer 2 - Slightly larger range, opacity 0.5, #3d1a7a */}
      <motion.svg
        className="absolute bottom-0 left-0 w-[115%] -ml-[7%]"
        style={{ y: layer2Y, x: layer2X }}
        viewBox="0 0 1600 500"
        preserveAspectRatio="none"
      >
        <path
          fill="#3d1a7a"
          fillOpacity="0.5"
          d="M0,500 L0,350 
             L50,350 L100,290 L160,330 L200,260 L270,300 L330,230 
             L400,280 L450,200 L530,250 L590,170 L670,220 L720,150 
             L810,200 L870,130 L950,180 L1010,110 L1100,160 
             L1150,100 L1240,150 L1300,90 L1380,140 L1440,80 
             L1520,130 L1580,100 L1600,120 L1600,500 Z"
        />
      </motion.svg>

      {/* Layer 3 - Main peaks, jagged and irregular, #4a2090 */}
      <motion.svg
        className="absolute bottom-0 left-0 w-[112%] -ml-[6%]"
        style={{ y: layer3Y, x: layer3X }}
        viewBox="0 0 1600 500"
        preserveAspectRatio="none"
      >
        <path
          fill="#4a2090"
          d="M0,500 L0,320 
             L40,320 L70,280 L110,300 L150,240 L190,270 L240,190 L280,230 
             L340,160 L380,200 L430,130 L490,180 L530,100 L600,160 
             L650,80 L720,140 L780,60 L830,120 L900,50 L960,110 
             L1030,70 L1090,130 L1160,80 L1220,140 L1290,90 
             L1350,150 L1420,100 L1480,160 L1540,120 L1600,180 
             L1600,500 Z"
        />
      </motion.svg>

      {/* Pulsing glow between layers 3 and 4 - #ff0096 at 60%, blurred 80px */}
      <motion.div
        className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[200%] h-[60%] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 35% at 50% 90%, rgba(255, 0, 150, 0.6) 0%, rgba(255, 0, 150, 0.3) 30%, rgba(255, 0, 150, 0.1) 50%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Layer 4 - Foreground mountains, darker #2a0f5a */}
      <motion.svg
        className="absolute bottom-0 left-0 w-[110%] -ml-[5%]"
        style={{ y: layer4Y, x: layer4X }}
        viewBox="0 0 1600 500"
        preserveAspectRatio="none"
      >
        <path
          fill="#2a0f5a"
          d="M0,500 L0,300 
             L30,300 L60,250 L100,280 L140,210 L190,250 L250,170 L300,220 
             L360,140 L420,190 L470,110 L540,170 L590,90 L660,150 
             L710,70 L790,130 L840,50 L920,120 L980,60 L1050,110 
             L1120,80 L1180,130 L1250,70 L1320,120 L1390,90 
             L1450,140 L1520,100 L1580,150 L1600,130 L1600,500 Z"
        />
      </motion.svg>

      {/* Layer 5 - Near forest tree line, #1a0830 */}
      <motion.svg
        className="absolute bottom-0 left-0 w-[108%] -ml-[4%]"
        style={{ y: layer5Y, x: layer5X }}
        viewBox="0 0 1600 400"
        preserveAspectRatio="none"
      >
        <path
          fill="#1a0830"
          d="M0,400 L0,280 
             L20,280 L40,220 L55,250 L75,180 L95,230 L120,160 L140,210 
             L170,140 L190,190 L220,120 L250,170 L280,100 L310,160 
             L340,90 L380,150 L410,80 L450,140 L480,70 L520,130 
             L560,90 L600,140 L640,80 L680,130 L720,70 L760,120 
             L800,90 L840,140 L880,80 L920,130 L960,90 L1000,140 
             L1040,80 L1080,130 L1120,70 L1160,120 L1200,90 
             L1240,140 L1280,80 L1320,130 L1360,90 L1400,140 
             L1440,80 L1480,130 L1520,100 L1560,150 L1600,120 
             L1600,400 Z"
        />
      </motion.svg>

      {/* Layer 6 - Dense pine silhouettes, near-black #0d0515 */}
      <motion.svg
        className="absolute bottom-0 left-0 w-[105%] -ml-[2.5%]"
        style={{ y: layer6Y, x: layer6X }}
        viewBox="0 0 1600 350"
        preserveAspectRatio="none"
      >
        <path
          fill="#0d0515"
          d="M0,350 L0,250 
             L15,250 L25,180 L35,210 L45,140 L55,190 L65,120 L80,170 L95,250 
             L110,250 L125,160 L135,200 L150,110 L165,170 L180,90 L195,150 L210,250 
             L230,250 L245,140 L255,190 L270,100 L285,160 L300,80 L315,140 L330,250 
             L350,250 L365,170 L380,120 L395,180 L410,90 L425,150 L440,250 
             L460,250 L475,130 L490,180 L505,100 L520,160 L535,70 L550,140 L565,250 
             L585,250 L600,150 L615,200 L630,110 L645,170 L660,80 L675,150 L690,250 
             L710,250 L725,140 L740,190 L755,100 L770,160 L785,90 L800,150 L815,250 
             L835,250 L850,160 L865,120 L880,180 L895,90 L910,150 L925,250 
             L945,250 L960,130 L975,180 L990,100 L1005,160 L1020,70 L1035,140 L1050,250 
             L1070,250 L1085,150 L1100,200 L1115,110 L1130,170 L1145,80 L1160,150 L1175,250 
             L1195,250 L1210,140 L1225,190 L1240,100 L1255,160 L1270,90 L1285,150 L1300,250 
             L1320,250 L1335,160 L1350,120 L1365,180 L1380,90 L1395,150 L1410,250 
             L1430,250 L1445,130 L1460,180 L1475,100 L1490,160 L1505,70 L1520,140 L1535,250 
             L1555,250 L1570,150 L1585,200 L1600,140 L1600,350 Z"
        />
      </motion.svg>
    </div>
  )
}
