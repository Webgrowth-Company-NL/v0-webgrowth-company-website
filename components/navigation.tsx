"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Lock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { href: "/hoe-het-werkt", label: "Hoe het werkt" },
  { href: "/prijzen", label: "Prijzen" },
  { href: "/succesverhalen", label: "Succesverhalen" },
  { href: "/field-logs", label: "Field logs" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#080808]/95 backdrop-blur-xl border-b border-white/8" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">

          <Link href="/" className="flex items-center shrink-0">
            <Image src="/images/logo.png" alt="Q" width={40} height={40} className="w-10 h-10" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/inloggen"
              className="flex items-center gap-1.5 text-white/50 hover:text-white text-sm font-medium transition-colors"
            >
              Inloggen
              <Lock className="w-3 h-3" />
            </Link>
            <Link
              href="/momentum-scan"
              className="bg-[#ff0096] hover:bg-[#ff0096]/90 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
            >
              Start je Momentum Scan
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-1.5"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden mx-5 mb-4 bg-[#111111] rounded-2xl border border-white/8 overflow-hidden"
        >
          <div className="p-4 space-y-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-white/70 hover:text-white hover:bg-white/5 py-3 px-3 rounded-xl text-sm font-medium transition-all"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="px-4 pb-4 pt-0 border-t border-white/8 flex flex-col gap-2 mt-2">
            <Link
              href="/inloggen"
              className="flex items-center gap-2 text-white/50 hover:text-white py-2 px-3 text-sm font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              Inloggen <Lock className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/momentum-scan"
              className="block bg-[#ff0096] text-white px-5 py-2.5 rounded-full text-sm font-semibold text-center"
              onClick={() => setOpen(false)}
            >
              Start je Momentum Scan
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
