"use client"

import Link from "next/link"

const nav = [
  {
    heading: "Diensten",
    links: [
      { label: "Website bouwen", href: "/website-bouwen" },
      { label: "SEO & vindbaarheid", href: "/seo" },
      { label: "Momentum Reports", href: "/momentum-reports" },
      { label: "Live dashboard", href: "/dashboard" },
    ],
  },
  {
    heading: "Bedrijf",
    links: [
      { label: "Over ons", href: "/over-ons" },
      { label: "Hoe het werkt", href: "/hoe-het-werkt" },
      { label: "Cases", href: "/cases" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Starten",
    links: [
      { label: "Gratis website APK", href: "/website-apk" },
      { label: "Momentum Scan", href: "/momentum-scan" },
      { label: "Prijzen", href: "/#prijzen" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-[#0d0818] border-t border-white/8 px-5 sm:px-8 pt-16 pb-10">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-[1fr_repeat(3,_auto)] gap-10 mb-14">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-[family-name:var(--font-gottak)] text-white font-black text-xl tracking-tight">
                Webgrowth
              </span>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              Websites voor het MKB die blijven groeien. Gebouwd, gemeten en elke maand verbeterd door Q.
            </p>
            <p className="text-white/20 text-xs mt-5">
              team@webgrowth.nl
            </p>
          </div>

          {/* Nav columns */}
          {nav.map((col) => (
            <div key={col.heading}>
              <p className="text-white/25 text-[11px] font-semibold tracking-widest uppercase mb-4">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/80 text-sm hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} Webgrowth Company. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-white/20 text-xs hover:text-white/80 transition-colors">
              Privacybeleid
            </Link>
            <Link href="/voorwaarden" className="text-white/20 text-xs hover:text-white/80 transition-colors">
              Algemene voorwaarden
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
