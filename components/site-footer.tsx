import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import {
  HULPMIDDELEN_ONTDEK,
  OPLOSSINGEN_DOEL,
  PLATFORM_MODULES,
} from "@/components/header-megas";

const BEDRIJF = [
  { href: "/prijzen", label: "Prijzen" },
  { href: "/contact", label: "Contact" },
  { href: "/inloggen", label: "Inloggen" },
];

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45 mb-4">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-[13.5px] text-white/70 hover:text-white transition-colors">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#2c1d5e] text-white/70 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Webgrowth Company home">
              <Image src="/logo-bolt.png" alt="" width={32} height={32} className="object-contain" />
              <span className="font-[family-name:var(--font-display)] text-[16px] font-bold text-white">Webgrowth Company</span>
            </Link>
            <p className="mt-4 text-[13.5px] leading-relaxed max-w-xs">
              Eén platform voor je website, CRM, marketing en AI. Negen losse leveranciers, samengebracht tot Forester OS.
            </p>
            <a
              href="https://www.google.com/search?q=Webgrowth+Company+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 group"
            >
              <span className="flex gap-[2px]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[color:var(--color-amber)] text-[color:var(--color-amber)]" strokeWidth={0} />
                ))}
              </span>
              <span className="text-[12.5px] font-semibold text-white">9,4</span>
              <span className="text-[12px] text-white/55 group-hover:text-white/75 transition-colors">op Google</span>
            </a>
          </div>

          <FooterCol title="Forester OS" links={PLATFORM_MODULES.map((m) => ({ href: m.href, label: m.label }))} />
          <FooterCol title="Oplossingen" links={OPLOSSINGEN_DOEL.map((m) => ({ href: m.href, label: m.label }))} />
          <FooterCol title="Hulpmiddelen & bedrijf" links={[...HULPMIDDELEN_ONTDEK.map((m) => ({ href: m.href, label: m.label })), ...BEDRIJF]} />
        </div>

        <div className="mt-12 pt-7 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-[12.5px] text-white/55 space-y-1">
            <p>© {new Date().getFullYear()} Webgrowth Company · Gebouwd in Nederland</p>
            <p className="text-white/45">
              <span className="font-semibold text-white/65">KvK</span> 64809536
              <span className="mx-2 text-white/30">·</span>
              <span className="font-semibold text-white/65">BTW</span> NL001363277B13
            </p>
          </div>
          <p className="text-[12.5px] text-white/40">Privacy · Cookies · Voorwaarden</p>
        </div>
      </div>
    </footer>
  );
}
