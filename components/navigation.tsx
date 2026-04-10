"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#hoe-het-werkt", label: "Hoe het werkt" },
  { href: "#prijzen", label: "Prijzen" },
  { href: "#succesverhalen", label: "Succesverhalen" },
  { href: "#field-logs", label: "Field logs" },
  { href: "#inloggen", label: "Inloggen" },
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
        isScrolled ? "bg-[#0d0015]/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-white font-bold text-xl md:text-2xl tracking-tight">
              Forester OS
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#website-apk"
              className="bg-[#ff0096] hover:bg-[#ff0096]/90 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
            >
              Website APK
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
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
              <a
                key={link.href}
                href={link.href}
                className="block text-white/80 hover:text-white py-3 text-base font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#website-apk"
              className="block bg-[#ff0096] hover:bg-[#ff0096]/90 text-white px-5 py-3 rounded-full text-base font-semibold text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Website APK
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
