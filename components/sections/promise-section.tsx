"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Target } from "lucide-react"

export function PromiseSection() {
  return (
    <section className="relative py-24 md:py-32 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Light clearing panel */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 lg:p-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0d0015] leading-tight mb-6 text-balance">
            Jij bent de ondernemer. Wij zijn Q.
          </h2>
          
          <p className="text-[#0d0015]/80 text-base md:text-lg max-w-2xl mx-auto mb-12 text-pretty">
            Q houdt je website in de gaten, spot wat beter kan en pakt het op. Elke maand krijg je van ons een persoonlijk bericht met wat er is gebeurd en wat het heeft opgeleverd. Wil je meer weten? Alles staat live in je dashboard.
            <br /><br />
            <strong className="text-[#0d0015]">Jij hoeft niks te doen. Maar je ziet alles.</strong>
          </p>
          
          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#0d0015] rounded-2xl p-6 md:p-8 border border-[#623bc7]/30 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-white/60 text-sm">Live Dashboard</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-xs">Live</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {/* Visitors */}
              <div className="bg-[#1a0a2e] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-[#ff0096]" />
                  <span className="text-white/60 text-xs">Bezoekers</span>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-white">2.847</p>
                <div className="mt-2 h-8">
                  <svg viewBox="0 0 100 30" className="w-full h-full">
                    <path
                      d="M0,25 Q20,20 30,22 T50,15 T70,18 T100,8"
                      fill="none"
                      stroke="#ff0096"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
              
              {/* Leads */}
              <div className="bg-[#1a0a2e] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-[#623bc7]" />
                  <span className="text-white/60 text-xs">Leads</span>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-white">156</p>
                <div className="mt-2 h-8">
                  <svg viewBox="0 0 100 30" className="w-full h-full">
                    <path
                      d="M0,20 Q25,22 40,15 T60,12 T80,8 T100,5"
                      fill="none"
                      stroke="#623bc7"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
              
              {/* Prospects */}
              <div className="bg-[#1a0a2e] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-white/60 text-xs">Prospects</span>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-white">89</p>
                <div className="mt-2 h-8">
                  <svg viewBox="0 0 100 30" className="w-full h-full">
                    <path
                      d="M0,22 Q15,24 30,18 T50,14 T75,10 T100,6"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
