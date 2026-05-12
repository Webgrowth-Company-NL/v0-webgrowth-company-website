"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Compass, LayoutGrid, Lock, Menu, Star, Tag, Target, X } from "lucide-react";
import {
  HULPMIDDELEN_HULP,
  HULPMIDDELEN_ONTDEK,
  HulpmiddelenMega,
  OPLOSSINGEN_DOEL,
  OPLOSSINGEN_SECTOR,
  OplossingenMega,
  PLATFORM_MODULES,
  PlatformMega,
} from "@/components/header-megas";

const EASE = [0.23, 1, 0.32, 1] as const;

type MegaKey = "platform" | "oplossingen" | "hulpmiddelen";

const MEGA_TRIGGERS: {
  key: MegaKey;
  label: string;
  icon: typeof LayoutGrid;
  render: (p: { onNavigate: () => void }) => React.ReactNode;
}[] = [
  { key: "platform", label: "Forester OS", icon: LayoutGrid, render: (p) => <PlatformMega {...p} /> },
  { key: "oplossingen", label: "Oplossingen", icon: Target, render: (p) => <OplossingenMega {...p} /> },
  { key: "hulpmiddelen", label: "Hulpmiddelen", icon: Compass, render: (p) => <HulpmiddelenMega {...p} /> },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<MegaKey | null>(null);
  const [activeMega, setActiveMega] = useState<MegaKey | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMega = () => setActiveMega(null);
  const elevated = scrolled || !!activeMega;

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: EASE }}
      className="fixed top-3 sm:top-5 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* The floating pill */}
        <div
          className={[
            "relative rounded-2xl border bg-[color:var(--color-bg-elevated)]/85 backdrop-blur-xl",
            "transition-[box-shadow,border-color,background-color] duration-300 ease-out",
            elevated
              ? "border-[color:var(--color-line-strong)] shadow-[0_2px_4px_rgba(12,6,18,0.04),0_18px_44px_-16px_rgba(12,6,18,0.18)]"
              : "border-[color:var(--color-line)] shadow-[0_1px_2px_rgba(12,6,18,0.03),0_12px_32px_-18px_rgba(12,6,18,0.12)]",
          ].join(" ")}
        >
          <div className="flex items-center justify-between gap-3 px-4 sm:px-5 h-14">
            {/* Logo */}
            <Link href="/" className="inline-flex shrink-0 group" aria-label="Webgrowth Company home">
              <span className="relative inline-flex h-9 w-9 items-center justify-center transition-transform duration-200 ease-out group-hover:scale-[1.05]">
                <Image src="/logo-bolt.png" alt="Webgrowth Company" width={34} height={34} priority className="object-contain" />
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {MEGA_TRIGGERS.map(({ key, label, icon: Icon, render }) => {
                const open = activeMega === key;
                return (
                  <div
                    key={key}
                    className="relative"
                    onMouseEnter={() => setActiveMega(key)}
                    onMouseLeave={() => setActiveMega(null)}
                  >
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-haspopup="true"
                      onClick={() => setActiveMega((v) => (v === key ? null : key))}
                      className={[
                        "inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-[14px] font-medium transition-colors duration-200 ease-out",
                        open
                          ? "text-[color:var(--color-ink)] bg-[color:var(--color-purple-soft)]"
                          : "text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)] hover:bg-[color:var(--color-bg-muted)]/60",
                      ].join(" ")}
                    >
                      <Icon className={open ? "h-4 w-4 text-[color:var(--color-purple)]" : "h-4 w-4 text-[color:var(--color-ink-subtle)]"} strokeWidth={2.25} />
                      {label}
                      <ChevronDown className={["h-3.5 w-3.5 opacity-60 transition-transform duration-200 ease-out", open ? "rotate-180" : ""].join(" ")} strokeWidth={2.5} />
                    </button>

                    <AnimatePresence>
                      {open && (
                        <motion.div
                          initial={{ opacity: 0, y: -6, scale: 0.985 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -4, scale: 0.99 }}
                          transition={{ duration: 0.18, ease: EASE }}
                          style={{ transformOrigin: "top left" }}
                          className="absolute top-full left-0 pt-3 z-50"
                        >
                          {render({ onNavigate: closeMega })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              <Link
                href="/prijzen"
                className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-[14px] font-medium text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)] hover:bg-[color:var(--color-bg-muted)]/60 transition-colors duration-200 ease-out"
              >
                <Tag className="h-4 w-4 text-[color:var(--color-ink-subtle)]" strokeWidth={2.25} />
                Prijzen
              </Link>
            </nav>

            {/* Right: rating + login + CTA */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href="https://www.google.com/search?q=Webgrowth+Company+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 pl-2 pr-2.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-bg-elevated)]/70 hover:bg-[color:var(--color-bg-elevated)] hover:border-[color:var(--color-line-strong)] transition-[background-color,border-color] duration-200 ease-out"
                aria-label="Google reviews: 9,4 van de 10"
              >
                <span className="flex gap-[1.5px]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-[color:var(--color-amber)] text-[color:var(--color-amber)]" strokeWidth={0} />
                  ))}
                </span>
                <span className="text-[12px] font-semibold text-[color:var(--color-ink)] tabular-nums">9,4</span>
              </a>
              <Link
                href="/inloggen"
                className="inline-flex items-center gap-1 text-[13px] font-medium text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)] transition-colors duration-200 ease-out px-1"
              >
                Inloggen
                <Lock className="h-3 w-3 opacity-60" strokeWidth={2.5} />
              </Link>
              <Link
                href="/website-apk"
                className="btn-press group inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-[color:var(--color-purple)] hover:bg-[color:var(--color-purple-hover)] text-white text-[13.5px] font-semibold shadow-[0_1px_2px_rgba(98,59,199,0.28),0_8px_22px_-8px_rgba(98,59,199,0.55)] hover:shadow-[0_6px_14px_rgba(98,59,199,0.36),0_18px_40px_-10px_rgba(98,59,199,0.75)]"
              >
                Doe gratis APK
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/18 transition-[transform,background-color] duration-200 ease-out group-hover:translate-x-0.5 group-hover:bg-white/30">
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
              </Link>
            </div>

            {/* Mobile: rating + hamburger */}
            <div className="lg:hidden flex items-center gap-2">
              <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-[color:var(--color-bg-elevated)]/70 border border-[color:var(--color-line)]">
                <Star className="h-3 w-3 fill-[color:var(--color-amber)] text-[color:var(--color-amber)]" strokeWidth={0} />
                <span className="text-[11px] font-semibold text-[color:var(--color-ink)] tabular-nums">9,4</span>
              </span>
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="btn-press inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-bg-elevated)]/70 hover:bg-[color:var(--color-bg-elevated)] text-[color:var(--color-ink)]"
                aria-label={mobileOpen ? "Sluit menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={17} strokeWidth={2.25} /> : <Menu size={17} strokeWidth={2.25} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile sheet (below the pill) */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.99 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="lg:hidden mt-2.5 bg-[color:var(--color-bg-elevated)] rounded-2xl border border-[color:var(--color-line)] shadow-[0_20px_60px_-20px_rgba(12,6,18,0.2)] overflow-hidden max-h-[78vh] overflow-y-auto"
              style={{ transformOrigin: "top center" }}
            >
              <div className="flex flex-col p-2">
                <MobileAccordion mkey="platform" label="Forester OS" open={openAccordion === "platform"} onToggle={setOpenAccordion} items={PLATFORM_MODULES} onClose={() => setMobileOpen(false)} />
                <MobileAccordion mkey="oplossingen" label="Oplossingen" open={openAccordion === "oplossingen"} onToggle={setOpenAccordion} items={OPLOSSINGEN_DOEL} extraLinks={OPLOSSINGEN_SECTOR} onClose={() => setMobileOpen(false)} />
                <MobileAccordion mkey="hulpmiddelen" label="Hulpmiddelen" open={openAccordion === "hulpmiddelen"} onToggle={setOpenAccordion} items={[...HULPMIDDELEN_ONTDEK, ...HULPMIDDELEN_HULP]} onClose={() => setMobileOpen(false)} />

                <Link href="/prijzen" onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-xl text-[15px] font-medium text-[color:var(--color-ink)] hover:bg-[color:var(--color-bg-muted)] transition-colors">
                  Prijzen
                </Link>
                <Link href="/inloggen" onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-xl text-[15px] font-medium text-[color:var(--color-ink-muted)] hover:bg-[color:var(--color-bg-muted)] transition-colors inline-flex items-center gap-2">
                  Inloggen
                  <Lock className="h-3 w-3 opacity-60" strokeWidth={2.5} />
                </Link>
                <Link
                  href="/website-apk"
                  onClick={() => setMobileOpen(false)}
                  className="btn-press group mt-2 mx-1 mb-1 inline-flex items-center justify-center gap-2 pl-5 pr-2 py-2 rounded-full bg-[color:var(--color-purple)] hover:bg-[color:var(--color-purple-hover)] text-white text-[14px] font-semibold shadow-[0_8px_24px_-8px_rgba(98,59,199,0.6)]"
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
      </div>
    </motion.header>
  );
}

function MobileAccordion({
  mkey,
  label,
  open,
  onToggle,
  items,
  extraLinks,
  onClose,
}: {
  mkey: MegaKey;
  label: string;
  open: boolean;
  onToggle: (k: MegaKey | null) => void;
  items: readonly { href: string; label: string; desc?: string; soon?: boolean }[];
  extraLinks?: readonly { href: string; label: string }[];
  onClose: () => void;
}) {
  return (
    <>
      <button
        type="button"
        onClick={() => onToggle(open ? null : mkey)}
        className="flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-medium text-[color:var(--color-ink)] hover:bg-[color:var(--color-bg-muted)] transition-colors"
        aria-expanded={open}
      >
        {label}
        <ChevronDown className={["h-4 w-4 opacity-60 transition-transform duration-200 ease-out", open ? "rotate-180" : ""].join(" ")} strokeWidth={2.5} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="pl-2 pr-1 pb-1 flex flex-col gap-0.5">
              {items.map((m) => (
                <Link key={m.href} href={m.href} onClick={onClose} className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-[color:var(--color-bg-muted)] transition-colors">
                  <span className="min-w-0">
                    <span className="flex items-center gap-1.5">
                      <span className="text-[13.5px] font-semibold text-[color:var(--color-ink)] leading-snug">{m.label}</span>
                      {m.soon && (
                        <span className="inline-flex shrink-0 items-center rounded bg-[color:var(--color-purple-tint)] px-1.5 py-0.5 text-[8.5px] font-bold uppercase tracking-[0.08em] text-[color:var(--color-purple)]">
                          Binnenkort
                        </span>
                      )}
                    </span>
                    {m.desc && <span className="block text-[11.5px] text-[color:var(--color-ink-subtle)] leading-snug mt-0.5">{m.desc}</span>}
                  </span>
                </Link>
              ))}
              {extraLinks?.map((s) => (
                <Link key={s.href} href={s.href} onClick={onClose} className="px-3 py-2 rounded-lg text-[13px] font-medium text-[color:var(--color-ink-muted)] hover:bg-[color:var(--color-bg-muted)] transition-colors">
                  {s.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
