"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function ForestParallax() {
  const { scrollY } = useScroll()
  
  // Each layer moves at different speed - closer = faster
  // Using scrollY directly for pixel-based movement like CodePen
  const layer1Y = useTransform(scrollY, [0, 1000], [0, -30])   // sky glow, slowest
  const layer2Y = useTransform(scrollY, [0, 1000], [0, -60])   // far mountains
  const layer3Y = useTransform(scrollY, [0, 1000], [0, -100])  // mid mountains  
  const layer4Y = useTransform(scrollY, [0, 1000], [0, -150])  // near mountains
  const layer5Y = useTransform(scrollY, [0, 1000], [0, -200])  // far trees
  const layer6Y = useTransform(scrollY, [0, 1000], [0, -280])  // near trees, fastest

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0d0015]">
      {/* Single SVG with all layers as motion.g groups */}
      <svg 
        viewBox="0 0 1440 900" 
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          {/* Sky gradient - radial from bottom center */}
          <radialGradient id="skyGradient" cx="50%" cy="100%" r="80%" fx="50%" fy="100%">
            <stop offset="0%" stopColor="#ff0096" stopOpacity="0.8" />
            <stop offset="35%" stopColor="#623bc7" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#1a0535" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0d0015" stopOpacity="1" />
          </radialGradient>
        </defs>

        {/* Layer 1: Sky with glow - slowest */}
        <motion.g style={{ y: layer1Y }}>
          <rect x="0" y="0" width="1440" height="900" fill="url(#skyGradient)" />
        </motion.g>

        {/* Layer 2: Far mountains - #1a0535 */}
        <motion.g style={{ y: layer2Y }}>
          <path 
            fill="#1a0535"
            d="M0,700 
               Q80,650 160,680 
               Q240,620 320,660 
               Q400,580 480,630 
               Q560,550 640,600 
               Q720,520 800,570 
               Q880,490 960,550 
               Q1040,480 1120,530 
               Q1200,470 1280,520 
               Q1360,460 1440,510 
               L1440,900 L0,900 Z"
          />
        </motion.g>

        {/* Layer 3: Mid mountains - #2d1060 */}
        <motion.g style={{ y: layer3Y }}>
          <path 
            fill="#2d1060"
            d="M0,750 
               Q60,700 120,730 
               Q180,660 260,700 
               Q340,620 420,670 
               Q500,590 580,640 
               Q660,560 740,620 
               Q820,540 900,600 
               Q980,530 1060,580 
               Q1140,510 1220,560 
               Q1300,500 1380,540 
               Q1420,520 1440,540 
               L1440,900 L0,900 Z"
          />
        </motion.g>

        {/* Layer 4: Near mountains - #4a1d8a */}
        <motion.g style={{ y: layer4Y }}>
          <path 
            fill="#4a1d8a"
            d="M0,800 
               Q50,750 100,780 
               Q150,720 220,760 
               Q290,680 360,730 
               Q430,660 500,710 
               Q570,640 640,690 
               Q710,620 780,680 
               Q850,610 920,660 
               Q990,590 1060,650 
               Q1130,580 1200,630 
               Q1270,570 1340,620 
               Q1390,590 1440,610 
               L1440,900 L0,900 Z"
          />
        </motion.g>

        {/* Layer 5: Front mountains - #623bc7 */}
        <motion.g style={{ y: layer4Y }}>
          <path 
            fill="#623bc7"
            d="M0,830 
               Q40,790 80,810 
               Q120,760 180,790 
               Q240,730 300,770 
               Q360,710 420,750 
               Q480,700 540,740 
               Q600,680 660,720 
               Q720,670 780,710 
               Q840,660 900,700 
               Q960,650 1020,690 
               Q1080,640 1140,680 
               Q1200,630 1260,670 
               Q1320,620 1380,660 
               Q1410,640 1440,660 
               L1440,900 L0,900 Z"
          />
        </motion.g>

        {/* Layer 6: Far tree line - #160428 - sharp triangles */}
        <motion.g style={{ y: layer5Y }}>
          {/* Dense forest of narrow pine triangles */}
          <path fill="#160428" d="M0,900 L0,850 L15,800 L30,850 L30,900 Z" />
          <path fill="#160428" d="M25,900 L25,840 L45,780 L65,840 L65,900 Z" />
          <path fill="#160428" d="M55,900 L55,845 L75,790 L95,845 L95,900 Z" />
          <path fill="#160428" d="M85,900 L85,835 L110,770 L135,835 L135,900 Z" />
          <path fill="#160428" d="M120,900 L120,850 L145,785 L170,850 L170,900 Z" />
          <path fill="#160428" d="M155,900 L155,840 L180,775 L205,840 L205,900 Z" />
          <path fill="#160428" d="M190,900 L190,845 L215,780 L240,845 L240,900 Z" />
          <path fill="#160428" d="M225,900 L225,838 L250,772 L275,838 L275,900 Z" />
          <path fill="#160428" d="M260,900 L260,848 L285,782 L310,848 L310,900 Z" />
          <path fill="#160428" d="M295,900 L295,835 L320,768 L345,835 L345,900 Z" />
          <path fill="#160428" d="M330,900 L330,842 L355,778 L380,842 L380,900 Z" />
          <path fill="#160428" d="M365,900 L365,850 L390,788 L415,850 L415,900 Z" />
          <path fill="#160428" d="M400,900 L400,838 L425,772 L450,838 L450,900 Z" />
          <path fill="#160428" d="M435,900 L435,845 L460,780 L485,845 L485,900 Z" />
          <path fill="#160428" d="M470,900 L470,835 L495,770 L520,835 L520,900 Z" />
          <path fill="#160428" d="M505,900 L505,848 L530,785 L555,848 L555,900 Z" />
          <path fill="#160428" d="M540,900 L540,840 L565,775 L590,840 L590,900 Z" />
          <path fill="#160428" d="M575,900 L575,845 L600,782 L625,845 L625,900 Z" />
          <path fill="#160428" d="M610,900 L610,838 L635,772 L660,838 L660,900 Z" />
          <path fill="#160428" d="M645,900 L645,850 L670,788 L695,850 L695,900 Z" />
          <path fill="#160428" d="M680,900 L680,835 L705,770 L730,835 L730,900 Z" />
          <path fill="#160428" d="M715,900 L715,842 L740,778 L765,842 L765,900 Z" />
          <path fill="#160428" d="M750,900 L750,848 L775,785 L800,848 L800,900 Z" />
          <path fill="#160428" d="M785,900 L785,838 L810,772 L835,838 L835,900 Z" />
          <path fill="#160428" d="M820,900 L820,845 L845,780 L870,845 L870,900 Z" />
          <path fill="#160428" d="M855,900 L855,850 L880,788 L905,850 L905,900 Z" />
          <path fill="#160428" d="M890,900 L890,835 L915,770 L940,835 L940,900 Z" />
          <path fill="#160428" d="M925,900 L925,842 L950,778 L975,842 L975,900 Z" />
          <path fill="#160428" d="M960,900 L960,848 L985,785 L1010,848 L1010,900 Z" />
          <path fill="#160428" d="M995,900 L995,838 L1020,772 L1045,838 L1045,900 Z" />
          <path fill="#160428" d="M1030,900 L1030,845 L1055,780 L1080,845 L1080,900 Z" />
          <path fill="#160428" d="M1065,900 L1065,850 L1090,788 L1115,850 L1115,900 Z" />
          <path fill="#160428" d="M1100,900 L1100,835 L1125,770 L1150,835 L1150,900 Z" />
          <path fill="#160428" d="M1135,900 L1135,842 L1160,778 L1185,842 L1185,900 Z" />
          <path fill="#160428" d="M1170,900 L1170,848 L1195,785 L1220,848 L1220,900 Z" />
          <path fill="#160428" d="M1205,900 L1205,838 L1230,772 L1255,838 L1255,900 Z" />
          <path fill="#160428" d="M1240,900 L1240,845 L1265,780 L1290,845 L1290,900 Z" />
          <path fill="#160428" d="M1275,900 L1275,850 L1300,788 L1325,850 L1325,900 Z" />
          <path fill="#160428" d="M1310,900 L1310,835 L1335,770 L1360,835 L1360,900 Z" />
          <path fill="#160428" d="M1345,900 L1345,842 L1370,778 L1395,842 L1395,900 Z" />
          <path fill="#160428" d="M1380,900 L1380,848 L1405,785 L1430,848 L1430,900 Z" />
          <path fill="#160428" d="M1415,900 L1415,838 L1440,772 L1440,900 Z" />
        </motion.g>

        {/* Layer 7: Near tree line - #0a0015, closest and fastest */}
        <motion.g style={{ y: layer6Y }}>
          {/* Larger, denser trees in foreground */}
          <path fill="#0a0015" d="M-20,900 L-20,860 L10,790 L40,860 L40,900 Z" />
          <path fill="#0a0015" d="M20,900 L20,850 L55,770 L90,850 L90,900 Z" />
          <path fill="#0a0015" d="M70,900 L70,865 L105,795 L140,865 L140,900 Z" />
          <path fill="#0a0015" d="M115,900 L115,855 L155,775 L195,855 L195,900 Z" />
          <path fill="#0a0015" d="M170,900 L170,870 L210,800 L250,870 L250,900 Z" />
          <path fill="#0a0015" d="M225,900 L225,858 L265,778 L305,858 L305,900 Z" />
          <path fill="#0a0015" d="M280,900 L280,865 L320,795 L360,865 L360,900 Z" />
          <path fill="#0a0015" d="M335,900 L335,852 L375,772 L415,852 L415,900 Z" />
          <path fill="#0a0015" d="M390,900 L390,868 L430,798 L470,868 L470,900 Z" />
          <path fill="#0a0015" d="M445,900 L445,860 L485,780 L525,860 L525,900 Z" />
          <path fill="#0a0015" d="M500,900 L500,870 L540,800 L580,870 L580,900 Z" />
          <path fill="#0a0015" d="M555,900 L555,855 L595,775 L635,855 L635,900 Z" />
          <path fill="#0a0015" d="M610,900 L610,862 L650,782 L690,862 L690,900 Z" />
          <path fill="#0a0015" d="M665,900 L665,868 L705,798 L745,868 L745,900 Z" />
          <path fill="#0a0015" d="M720,900 L720,858 L760,778 L800,858 L800,900 Z" />
          <path fill="#0a0015" d="M775,900 L775,865 L815,795 L855,865 L855,900 Z" />
          <path fill="#0a0015" d="M830,900 L830,852 L870,772 L910,852 L910,900 Z" />
          <path fill="#0a0015" d="M885,900 L885,868 L925,798 L965,868 L965,900 Z" />
          <path fill="#0a0015" d="M940,900 L940,860 L980,780 L1020,860 L1020,900 Z" />
          <path fill="#0a0015" d="M995,900 L995,870 L1035,800 L1075,870 L1075,900 Z" />
          <path fill="#0a0015" d="M1050,900 L1050,855 L1090,775 L1130,855 L1130,900 Z" />
          <path fill="#0a0015" d="M1105,900 L1105,862 L1145,782 L1185,862 L1185,900 Z" />
          <path fill="#0a0015" d="M1160,900 L1160,868 L1200,798 L1240,868 L1240,900 Z" />
          <path fill="#0a0015" d="M1215,900 L1215,858 L1255,778 L1295,858 L1295,900 Z" />
          <path fill="#0a0015" d="M1270,900 L1270,865 L1310,795 L1350,865 L1350,900 Z" />
          <path fill="#0a0015" d="M1325,900 L1325,852 L1365,772 L1405,852 L1405,900 Z" />
          <path fill="#0a0015" d="M1380,900 L1380,868 L1420,798 L1460,868 L1460,900 Z" />
        </motion.g>
      </svg>

      {/* Pulsing glow overlay - positioned between layers */}
      <motion.div
        className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[120%] h-[40%] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 50% 100%, rgba(255, 0, 150, 0.6) 0%, rgba(255, 0, 150, 0.2) 40%, transparent 70%)",
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
    </div>
  )
}
