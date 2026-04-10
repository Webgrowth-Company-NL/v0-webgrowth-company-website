"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Zap, Lock } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { href: "/hoe-het-werkt", label: "Hoe het werkt" },
  { href: "/prijzen", label: "Prijzen" },
  { href: "/succesverhalen", label: "Succesverhalen" },
  { href: "/field-logs", label: "Field logs" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0d0015]/90 backdrop-blur-xl" : "bg-[#0d0015]/50 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with lightning bolt */}
          <Link href="/" className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-[#ff0096] fill-[#ff0096]" />
            <span className="text-white font-[family-name:var(--font-gottak)] font-bold text-xl md:text-2xl tracking-tight">
              Forester OS
            </span>
          </Link>

          {/* Desktop Navigation - Center links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#ff0096] text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Navigation - Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/inloggen"
              className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              Inloggen
              <Lock className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/momentum-scan"
              className="bg-[#ff0096] hover:bg-[#ff0096]/90 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,150,0.4)]"
            >
              Start je Momentum Scan
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label={mobileMenuOpen ? "Sluit menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-[#0d0015]/95 backdrop-blur-xl rounded-2xl mt-2 p-4 border border-white/10"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-white hover:text-[#ff0096] py-3 text-base font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-white/10 mt-3 pt-3">
              <Link
                href="/inloggen"
                className="flex items-center gap-1.5 text-white/70 hover:text-white py-3 text-base font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inloggen
                <Lock className="w-4 h-4" />
              </Link>
            </div>
            <Link
              href="/momentum-scan"
              className="block bg-[#ff0096] hover:bg-[#ff0096]/90 text-white px-5 py-3 rounded-full text-base font-semibold text-center mt-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start je Momentum Scan
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
