import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { fieldLogs } from "@/lib/field-logs-data"

export const metadata: Metadata = {
  title: "Field Logs — Website tips voor MKB ondernemers | Webgrowth",
  description: "Praktische inzichten over website bouwen, vindbaarheid verbeteren en meer leads genereren voor het MKB. Geen theorie, maar wat echt werkt.",
  keywords: ["website bouwen MKB", "website tips ondernemer", "SEO voor MKB", "meer leads via website", "webgrowth blog"],
  openGraph: {
    title: "Field Logs — Website tips voor MKB ondernemers | Webgrowth",
    description: "Praktische inzichten over website bouwen, vindbaarheid verbeteren en meer leads genereren voor het MKB.",
    type: "website",
    locale: "nl_NL",
    siteName: "Webgrowth",
  },
  alternates: {
    canonical: "https://webgrowth.company/field-logs",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Webgrowth Field Logs",
  "description": "Praktische website- en groeiadviezen voor MKB ondernemers",
  "url": "https://webgrowth.company/field-logs",
  "publisher": {
    "@type": "Organization",
    "name": "Webgrowth",
    "url": "https://webgrowth.company",
  },
  "blogPost": fieldLogs.map(log => ({
    "@type": "BlogPosting",
    "headline": log.title,
    "description": log.excerpt,
    "datePublished": log.dateTime,
    "url": `https://webgrowth.company/field-logs/${log.slug}`,
  })),
}

export default function FieldLogsPage() {
  return (
    <div className="bg-[#0d0818] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navigation />

      <main>
        {/* Header */}
        <section className="relative pt-36 pb-16 px-5 sm:px-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#623bc7]/10 blur-[150px] pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">Field Logs</p>
            <h1 className="font-[family-name:var(--font-gottak)] text-[clamp(2.8rem,7vw,5rem)] font-black text-white leading-[1.02] tracking-tight mb-6">
              Website tips die{" "}
              <span style={{
                background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                echt werken voor MKB.
              </span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-xl">
              Uit de praktijk, niet van een bureau. Eerlijke inzichten over website bouwen, vindbaarheid en meer leads genereren voor het MKB.
            </p>
          </div>
        </section>

        {/* Logs */}
        <section className="px-5 sm:px-8 pb-24" aria-label="Artikelen">
          <div className="max-w-4xl mx-auto space-y-4">
            {fieldLogs.map((log, i) => (
              <article
                key={i}
                className="group rounded-2xl border border-white/8 hover:border-white/15 transition-all duration-200 overflow-hidden flex flex-col md:flex-row"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                {/* Image */}
                <div className="relative w-full md:w-64 shrink-0 h-48 md:h-auto overflow-hidden">
                  <Image
                    src={log.img}
                    alt={log.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    style={{ objectPosition: "center 20%" }}
                  />
                  <span className="absolute top-4 left-4 text-[#ff0096] text-xs font-semibold tracking-widest uppercase bg-[#0d0818]/70 backdrop-blur-sm px-3 py-1 rounded-full border border-[#ff0096]/20">
                    {log.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <time dateTime={log.dateTime} className="text-white/40 text-xs">{log.date}</time>
                    <span className="text-white/20 text-xs" aria-hidden>·</span>
                    <span className="text-white/40 text-xs">{log.readTime} leestijd</span>
                  </div>
                  <h2 className="font-[family-name:var(--font-gottak)] text-xl md:text-2xl font-black text-white mb-3 leading-snug">
                    {log.title}
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed mb-5">{log.excerpt}</p>
                  <Link
                    href={`/field-logs/${log.slug}`}
                    className="inline-flex items-center gap-1.5 text-[#a78bfa] text-sm font-semibold hover:text-white transition-colors duration-200"
                  >
                    Lees verder <span className="text-base leading-none" aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
