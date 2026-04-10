"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function ForestParallax() {
  const { scrollYProgress } = useScroll()
  
  // Y transforms - each layer moves at its specific speed × -300px
  const layer1Y = useTransform(scrollYProgress, [0, 1], [0, -30])   // 0.1x
  const layer2Y = useTransform(scrollYProgress, [0, 1], [0, -60])   // 0.2x
  const layer3Y = useTransform(scrollYProgress, [0, 1], [0, -105])  // 0.35x
  const layer4Y = useTransform(scrollYProgress, [0, 1], [0, -150])  // 0.5x
  const layer5Y = useTransform(scrollYProgress, [0, 1], [0, -210])  // 0.7x

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Layer 1: Sky with radial gradient - #ff0096 at bottom center radiating UP */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="skyGradient" cx="50%" cy="100%" r="100%" fx="50%" fy="100%">
            <stop offset="0%" stopColor="#ff0096" />
            <stop offset="25%" stopColor="#623bc7" />
            <stop offset="60%" stopColor="#2a1050" />
            <stop offset="100%" stopColor="#0d0015" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#skyGradient)" />
      </svg>

      {/* Layer 2: Far mountains - very faint, #1a0530, opacity 0.6, speed 0.1 */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full"
        style={{ y: layer1Y }}
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMax slice"
      >
        <path
          fill="#1a0530"
          fillOpacity="0.6"
          d="M0,400 L0,320 
             C40,310 60,280 100,260 
             C160,230 200,250 260,220 
             C340,180 380,200 440,170 
             C520,130 580,160 660,120 
             C740,80 800,110 880,90 
             C960,60 1020,100 1100,70 
             C1180,40 1240,80 1320,50 
             C1380,30 1420,60 1440,40 
             L1440,400 Z"
        />
      </motion.svg>

      {/* Layer 3: Mid mountains - sharper peaks, #2d0f5c, opacity 0.8, speed 0.2 */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full"
        style={{ y: layer2Y }}
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMax slice"
      >
        <path
          fill="#2d0f5c"
          fillOpacity="0.8"
          d="M0,400 L0,300 
             C30,290 50,250 80,230 
             L120,180 C150,160 170,190 200,160 
             L260,100 C290,80 320,120 360,90 
             L420,50 C460,30 500,80 560,40 
             L620,70 C680,90 720,50 780,80 
             L840,30 C900,10 940,60 1000,35 
             L1080,70 C1140,100 1180,60 1240,90 
             L1320,50 C1380,30 1420,70 1440,60 
             L1440,400 Z"
        />
      </motion.svg>

      {/* Layer 4: Near mountains - #623bc7 with gradient to #3d1a7a, speed 0.35 */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full"
        style={{ y: layer3Y }}
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="nearMountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#623bc7" />
            <stop offset="100%" stopColor="#3d1a7a" />
          </linearGradient>
        </defs>
        <path
          fill="url(#nearMountainGradient)"
          d="M0,400 L0,280 
             C20,270 40,230 70,200 
             L110,150 C140,120 160,160 200,120 
             L260,70 C300,40 340,90 400,50 
             L480,90 C540,120 580,60 640,100 
             L720,40 C780,10 830,70 900,30 
             L980,80 C1040,110 1080,50 1140,90 
             L1220,40 C1280,20 1340,70 1400,50 
             C1420,40 1440,60 1440,60 
             L1440,400 Z"
        />
      </motion.svg>

      {/* Pulsing glow - between mountain layers, #ff0096 at 60% opacity, blur 80px */}
      <motion.div
        className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[150%] h-[50%] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255, 0, 150, 0.6) 0%, rgba(255, 0, 150, 0.3) 30%, rgba(255, 0, 150, 0.1) 50%, transparent 70%)",
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

      {/* Layer 5: Far treeline - dense pines, #1a0830, speed 0.5 */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full"
        style={{ y: layer4Y }}
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMax slice"
      >
        <path
          fill="#1a0830"
          d="M0,400 L0,300 
             L20,300 L30,260 L40,280 L50,230 L65,260 L80,200 L95,240 L110,180 L125,220 L140,300 
             L160,300 L175,240 L190,270 L205,210 L220,250 L235,180 L250,230 L265,300 
             L285,300 L300,230 L315,260 L330,190 L345,240 L360,170 L375,220 L390,300 
             L410,300 L425,250 L440,280 L455,220 L470,260 L485,190 L500,240 L515,300 
             L535,300 L550,220 L565,260 L580,180 L595,230 L610,160 L625,210 L640,300 
             L660,300 L675,240 L690,270 L705,200 L720,250 L735,170 L750,220 L765,300 
             L785,300 L800,230 L815,260 L830,190 L845,240 L860,160 L875,210 L890,300 
             L910,300 L925,250 L940,280 L955,210 L970,260 L985,180 L1000,230 L1015,300 
             L1035,300 L1050,220 L1065,260 L1080,170 L1095,230 L1110,150 L1125,210 L1140,300 
             L1160,300 L1175,240 L1190,270 L1205,200 L1220,250 L1235,170 L1250,220 L1265,300 
             L1285,300 L1300,230 L1315,260 L1330,190 L1345,240 L1360,160 L1375,210 L1390,300 
             L1410,300 L1425,250 L1440,220 L1440,400 Z"
        />
      </motion.svg>

      {/* Layer 6: Near treeline - near-black pines #0a0015, tallest in center, speed 0.7 */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full"
        style={{ y: layer5Y }}
        viewBox="0 0 1440 350"
        preserveAspectRatio="xMidYMax slice"
      >
        <path
          fill="#0a0015"
          d="M0,350 L0,280 
             L15,280 L25,230 L35,260 L50,200 L65,240 L80,170 L95,220 L110,280 
             L130,280 L145,210 L160,250 L175,180 L190,230 L205,150 L220,200 L235,280 
             L255,280 L270,200 L285,240 L300,160 L315,210 L330,130 L345,190 L360,280 
             L380,280 L395,180 L410,230 L425,140 L440,200 L455,110 L470,170 L485,280 
             L505,280 L520,170 L535,220 L550,120 L565,180 L580,90 L595,160 L610,280 
             L630,280 L645,150 L660,200 L675,100 L690,160 L705,70 L720,140 L735,280 
             L755,280 L770,140 L785,190 L800,90 L815,150 L830,60 L845,130 L860,280 
             L880,280 L895,150 L910,200 L925,100 L940,160 L955,70 L970,140 L985,280 
             L1005,280 L1020,170 L1035,220 L1050,120 L1065,180 L1080,90 L1095,160 L1110,280 
             L1130,280 L1145,180 L1160,230 L1175,140 L1190,200 L1205,110 L1220,170 L1235,280 
             L1255,280 L1270,200 L1285,240 L1300,160 L1315,210 L1330,130 L1345,190 L1360,280 
             L1380,280 L1395,210 L1410,250 L1425,180 L1440,220 L1440,350 Z"
        />
      </motion.svg>
    </div>
  )
}
