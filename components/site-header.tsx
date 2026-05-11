"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Lock, Menu, Star, X } from "lucide-react";

const navLinks = [
  { href: "#platform", label: "Platform" },
  { href: "#diensten", label: "Diensten" },
  { href: "#cases", label: "Cases" },
  { href: "#over", label: "Over" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
      className={[
        "fixed top-0 left-0 right-0 z-50",
        "transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300 ease-out",
        scrolled
          ? "bg-[color:var(--color-bg)]/85 backdrop-blur-xl border-b border-[color:var(--color-line)] shadow-[0_1px_0_rgba(12,6,18,0.02),0_8px_24px_-12px_rgba(12,6,18,0.08)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="inline-flex shrink-0 group"
            aria-label="Webgrowth Company home"
          >
            <span
              className="
                relative inline-flex h-9 w-9 items-center justify-center
                transition-transform duration-200 ease-out
                group-hover:scale-[1.05]
              "
            >
              <Image
                src="/logo-bolt.png"
                alt="Webgrowth Company"
                width={36}
                height={36}
                priority
                className="object-contain"
              />
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  relative text-[14px] font-medium
                  text-[color:var(--color-ink-muted)]
                  hover:text-[color:var(--color-ink)]
                  transition-colors duration-200 ease-out
                "
              >
                {link.label}
              </Link>
            ))}

            {/* Stars rating badge */}
            <a
              href="https://www.google.com/search?q=Webgrowth+Company+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group inline-flex items-center gap-2
                pl-2.5 pr-3 py-1.5 rounded-full
                border border-[color:var(--color-line)]
                bg-white/60 hover:bg-white
                transition-[background-color,border-color,transform] duration-200 ease-out
                hover:border-[color:var(--color-line-strong)]
              "
              aria-label="Google reviews: 9,4 van de 10"
            >
              <span className="flex gap-[2px]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-[13px] w-[13px] fill-[color:var(--color-amber)] text-[color:var(--color-amber)]"
                    strokeWidth={0}
                  />
                ))}
              </span>
              <span className="text-[12.5px] font-semibold text-[color:var(--color-ink)] tabular-nums">
                9,4
              </span>
              <span className="text-[11px] text-[color:var(--color-ink-subtle)] -ml-0.5">
                /10
              </span>
            </a>
          </nav>

          {/* CTA group */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/inloggen"
              className="
                inline-flex items-center gap-1.5 text-[13.5px] font-medium
                text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)]
                transition-colors duration-200 ease-out
              "
            >
              Inloggen
              <Lock className="h-3 w-3 opacity-60" strokeWidth={2.5} />
            </Link>
            <Link
              href="/website-apk"
              className="
                btn-press group
                inline-flex items-center gap-2 pl-5 pr-1.5 py-1.5
                rounded-full
                bg-[color:var(--color-purple)] hover:bg-[color:var(--color-purple-hover)]
                text-white text-[13.5px] font-semibold
                shadow-[0_1px_2px_rgba(98,59,199,0.28),0_8px_24px_-8px_rgba(98,59,199,0.6)]
              "
            >
              Doe gratis APK
              <span
                className="
                  inline-flex h-7 w-7 items-center justify-center
                  rounded-full bg-white/18
                  transition-transform duration-200 ease-out
                  group-hover:translate-x-0.5 group-hover:bg-white/24
                "
              >
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
            </Link>
          </div>

          {/* Mobile rating + hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/70 border border-[color:var(--color-line)]">
              <Star
                className="h-3 w-3 fill-[color:var(--color-amber)] text-[color:var(--color-amber)]"
                strokeWidth={0}
              />
              <span className="text-[11px] font-semibold text-[color:var(--color-ink)] tabular-nums">
                9,4
              </span>
            </span>
            <button
              onClick={() => setOpen((v) => !v)}
              className="
                btn-press
                inline-flex h-9 w-9 items-center justify-center
                rounded-full border border-[color:var(--color-line)]
                bg-white/60 hover:bg-white
                text-[color:var(--color-ink)]
              "
              aria-label={open ? "Sluit menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={17} strokeWidth={2.25} /> : <Menu size={17} strokeWidth={2.25} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.99 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="
              lg:hidden mx-5 mb-4 origin-top
              bg-white rounded-2xl border border-[color:var(--color-line)]
              shadow-[0_20px_60px_-20px_rgba(12,6,18,0.18)]
              overflow-hidden
            "
            style={{ transformOrigin: "top center" }}
          >
            <div className="flex flex-col p-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-[15px] font-medium text-[color:var(--color-ink)] hover:bg-[color:var(--color-bg-muted)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/inloggen"
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-[15px] font-medium text-[color:var(--color-ink-muted)] hover:bg-[color:var(--color-bg-muted)] transition-colors inline-flex items-center gap-2"
              >
                Inloggen
                <Lock className="h-3 w-3 opacity-60" strokeWidth={2.5} />
              </Link>
              <Link
                href="/website-apk"
                onClick={() => setOpen(false)}
                className="
                  btn-press group mt-2 mx-1 mb-1
                  inline-flex items-center justify-center gap-2 pl-5 pr-2 py-2
                  rounded-full
                  bg-[color:var(--color-purple)] hover:bg-[color:var(--color-purple-hover)]
                  text-white text-[14px] font-semibold
                  shadow-[0_8px_24px_-8px_rgba(98,59,199,0.6)]
                "
              >
                Doe gratis APK
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/18 group-hover:translate-x-0.5 transition-transform duration-200 ease-out">
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
