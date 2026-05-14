import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  CalendarClock,
  FileText,
  Flame,
  Gauge,
  Globe,
  LifeBuoy,
  Magnet,
  Mail,
  MessageSquareQuote,
  Search,
  ShoppingBag,
  Sparkles,
  Users,
} from "lucide-react";

/* ── Data ─────────────────────────────────────────── */

export const PLATFORM_MODULES = [
  { href: "/forester-os/website", label: "Website & CMS", desc: "Bouw je site, beheer pagina's, berichten en eigen content-types", icon: Globe },
  { href: "/forester-os/lead-engine", label: "Lead Engine", desc: "Quick quoters en calculators die leads opleveren", icon: Flame },
  { href: "/forester-os/sales-engine", label: "Sales Engine", desc: "AI-trainingen en quizzes die prospects opwarmen", icon: ShoppingBag },
  { href: "/forester-os/crm", label: "CRM & Sales-pijplijn", desc: "Leads en deals visueel door je pijplijn", icon: Users },
  { href: "/forester-os/seo", label: "SEO & vindbaarheid", desc: "Search Console-koppeling, AI-suggesties, rankings", icon: Search },
  { href: "/forester-os/ai", label: "AI-content & Q", desc: "Q schrijft mee aan content, inzichten en taken", icon: Sparkles },
  { href: "/forester-os/content-publisher", label: "Automatische content publisher", desc: "AI publiceert content op je site, op schema", icon: CalendarClock },
  { href: "/forester-os/nieuwsbrieven", label: "Nieuwsbrieven", desc: "E-mailcampagnes vanuit je eigen CRM", icon: Mail },
] as const;

export const OPLOSSINGEN_DOEL = [
  { href: "/oplossingen/meer-leads", label: "Meer leads uit je site", desc: "Tools die bezoekers omzetten in afspraken", icon: Magnet },
  { href: "/oplossingen/vindbaarheid", label: "Beter gevonden worden", desc: "SEO en content zonder los bureau", icon: Search },
  { href: "/oplossingen/opvolging", label: "Klanten slim opvolgen", desc: "Eén CRM voor je hele pijplijn", icon: Users },
  { href: "/oplossingen/ai-publiceren", label: "Sneller publiceren met AI", desc: "Content live op je site in minuten", icon: Sparkles },
] as const;

export const OPLOSSINGEN_SECTOR = [
  { href: "/oplossingen/zakelijke-dienstverlening", label: "Zakelijke dienstverlening" },
  { href: "/oplossingen/creatief-design", label: "Creatief & design" },
  { href: "/oplossingen/bouw-techniek", label: "Bouw & techniek" },
  { href: "/oplossingen/zorg-praktijk", label: "Zorg & praktijk" },
  { href: "/oplossingen/mkb", label: "MKB algemeen" },
] as const;

export const HULPMIDDELEN_ONTDEK = [
  { href: "/website-apk", label: "Website APK", desc: "Gratis scan: hoe scoort jouw site?", icon: Gauge },
  { href: "/field-logs", label: "Field Logs", desc: "Bevindingen uit de praktijk", icon: FileText },
  { href: "/cases", label: "Klantverhalen", desc: "Wat we voor anderen bouwden", icon: MessageSquareQuote },
  { href: "/over", label: "Over Webgrowth", desc: "Wie we zijn, waar we voor staan", icon: Building2 },
] as const;

export const HULPMIDDELEN_HULP = [
  { href: "/help", label: "Helpcentrum", desc: "Antwoorden en handleidingen", icon: LifeBuoy },
  { href: "/contact", label: "Contact & support", desc: "Even sparren? We helpen graag", icon: Mail },
] as const;

/* ── Shared bits ─────────────────────────────────── */

function SoonBadge() {
  return (
    <span className="inline-flex shrink-0 items-center rounded bg-[color:var(--color-purple-tint)] px-1.5 py-0.5 text-[8.5px] font-bold uppercase tracking-[0.08em] text-[color:var(--color-purple)]">
      Binnenkort
    </span>
  );
}

function ModuleItem({
  href,
  label,
  desc,
  icon: Icon,
  soon,
  onNavigate,
}: {
  href: string;
  label: string;
  desc: string;
  icon: typeof Globe;
  soon?: boolean;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="group flex items-start gap-3 p-3.5 rounded-xl hover:bg-[color:var(--color-bg-muted)]/70 transition-colors"
    >
      <span
        className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white shadow-[0_6px_14px_-6px_rgba(98,59,199,0.55),0_1px_2px_rgba(98,59,199,0.18)] transition-transform duration-200 ease-out group-hover:scale-105"
        style={{ backgroundImage: "linear-gradient(140deg, #ff0096 0%, #8b5cf6 55%, #c4b5fd 100%)" }}
      >
        <span aria-hidden className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/25 via-white/0 to-white/0" />
        <span aria-hidden className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/18" />
        <Icon className="relative h-4 w-4 drop-shadow-[0_1px_1px_rgba(12,6,18,0.2)]" strokeWidth={2} />
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-1.5">
          <span className="text-[13.5px] font-semibold text-[color:var(--color-ink)] leading-snug transition-colors duration-200 ease-out group-hover:text-[color:var(--color-purple)]">{label}</span>
          {soon && <SoonBadge />}
        </span>
        <span className="block text-[11.5px] text-[color:var(--color-ink-subtle)] leading-snug mt-0.5">{desc}</span>
      </span>
    </Link>
  );
}

function MegaPanel({ width, children }: { width: string; children: React.ReactNode }) {
  return (
    <div
      className={`${width} rounded-2xl border border-[color:var(--color-line)] bg-white shadow-[0_30px_80px_-24px_rgba(12,6,18,0.22)] overflow-hidden`}
    >
      {children}
    </div>
  );
}

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-3.5 pt-3.5 pb-2 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-ink-subtle)]">
      {children}
    </div>
  );
}

/* ── Mega 1: Platform ────────────────────────────── */

export function PlatformMega({ onNavigate }: { onNavigate: () => void }) {
  return (
    <MegaPanel width="w-[720px]">
      <div className="grid grid-cols-[1fr_240px]">
        <div className="p-3 grid grid-cols-2 gap-1">
          {PLATFORM_MODULES.map((m) => (
            <ModuleItem key={m.href} {...m} onNavigate={onNavigate} />
          ))}
        </div>

        <div className="relative border-l border-[color:var(--color-line)] bg-[color:var(--color-bg-muted)]/40 p-5 flex flex-col">
          <div
            aria-hidden
            className="absolute -top-10 -right-10 h-40 w-40 rounded-full"
            style={{ background: "radial-gradient(closest-side, rgba(98,59,199,0.22), rgba(98,59,199,0) 70%)" }}
          />
          <span className="relative text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-ink-subtle)]">Forester OS</span>
          <p className="relative mt-1.5 text-[13.5px] leading-snug text-[color:var(--color-ink)]">
            Negen losse leveranciers, samengebracht tot één login. Inclusief Momentum-rapporten en Genius-sessies.
          </p>

          <div className="relative mt-4 flex-1 rounded-xl border border-[color:var(--color-line)] bg-white p-3 shadow-[0_10px_24px_-16px_rgba(12,6,18,0.18)]">
            <div className="flex items-center gap-1.5 mb-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-ink-faint)]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-ink-faint)]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-ink-faint)]" />
            </div>
            <div className="h-2 w-12 rounded-full bg-[color:var(--color-purple)]/40 mb-2" />
            <div className="space-y-1.5">
              <div className="h-1.5 w-full rounded bg-[color:var(--color-ink-faint)]" />
              <div className="h-1.5 w-[78%] rounded bg-[color:var(--color-ink-faint)]" />
            </div>
            <div className="mt-2.5 flex items-end gap-[3px] h-7">
              {[28, 40, 34, 50, 58, 48, 66, 74].map((h, i) => (
                <span key={i} className="block w-[5px] rounded-[1.5px] bg-[color:var(--color-purple)]/80" style={{ height: `${h}%`, opacity: 0.4 + (i / 8) * 0.6 }} />
              ))}
            </div>
          </div>

          <Link
            href="/forester-os"
            onClick={onNavigate}
            className="btn-press relative mt-4 inline-flex items-center justify-between gap-2 px-3.5 py-2 rounded-full bg-[color:var(--color-ink-strong)] hover:bg-[color:var(--color-purple)] text-white text-[12.5px] font-semibold group shadow-[0_8px_20px_-10px_rgba(12,6,18,0.4)] hover:shadow-[0_12px_28px_-10px_rgba(98,59,199,0.55)]"
          >
            Bekijk het platform
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </MegaPanel>
  );
}

/* ── Mega 2: Oplossingen ─────────────────────────── */

export function OplossingenMega({ onNavigate }: { onNavigate: () => void }) {
  return (
    <MegaPanel width="w-[680px]">
      <div className="grid grid-cols-[1fr_244px]">
        <div className="p-4">
          <ColumnHeading>Naar doel</ColumnHeading>
          <div className="grid grid-cols-1 gap-0.5">
            {OPLOSSINGEN_DOEL.map((m) => (
              <ModuleItem key={m.href} {...m} onNavigate={onNavigate} />
            ))}
          </div>
        </div>

        <div className="border-l border-[color:var(--color-line)] bg-[color:var(--color-bg-muted)]/40 p-4 flex flex-col">
          <ColumnHeading>Naar sector</ColumnHeading>
          <div className="flex flex-col">
            {OPLOSSINGEN_SECTOR.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={onNavigate}
                className="px-3.5 py-2.5 rounded-lg text-[13px] font-medium text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)] hover:bg-white transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>
          <Link
            href="/website-apk"
            onClick={onNavigate}
            className="btn-press mt-auto inline-flex items-center justify-between gap-2 mx-1 mt-4 px-3.5 py-2.5 rounded-full bg-[color:var(--color-purple)] hover:bg-[color:var(--color-purple-hover)] text-white text-[12px] font-semibold group shadow-[0_8px_20px_-10px_rgba(98,59,199,0.5)] hover:shadow-[0_12px_28px_-10px_rgba(98,59,199,0.7)]"
          >
            Niet zeker? Doe de APK
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </MegaPanel>
  );
}

/* ── Mega 3: Hulpmiddelen ────────────────────────── */

export function HulpmiddelenMega({ onNavigate }: { onNavigate: () => void }) {
  return (
    <MegaPanel width="w-[620px]">
      <div className="grid grid-cols-2">
        <div className="p-4">
          <ColumnHeading>Ontdek</ColumnHeading>
          <div className="grid grid-cols-1 gap-0.5">
            {HULPMIDDELEN_ONTDEK.map((m) => (
              <ModuleItem key={m.href} {...m} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
        <div className="p-4 border-l border-[color:var(--color-line)] bg-[color:var(--color-bg-muted)]/40">
          <ColumnHeading>Hulp</ColumnHeading>
          <div className="grid grid-cols-1 gap-0.5">
            {HULPMIDDELEN_HULP.map((m) => (
              <ModuleItem key={m.href} {...m} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      </div>
    </MegaPanel>
  );
}
