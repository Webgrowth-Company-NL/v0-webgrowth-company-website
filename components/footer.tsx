"use client"

import Link from "next/link"
import { Zap } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-12 px-4 sm:px-6 bg-[#0d0015] border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#ff0096] fill-[#ff0096]" />
            <span className="text-white font-[family-name:var(--font-display)] font-bold text-xl">
              Forester OS
            </span>
          </Link>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/voorwaarden" className="hover:text-white transition-colors">Voorwaarden</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          
          <p className="text-white/40 text-sm">
            © 2024 Webgrowth Company. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  )
}
