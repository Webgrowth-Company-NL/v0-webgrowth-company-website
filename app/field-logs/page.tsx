import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Field Logs | Forester OS",
  description: "Inzichten en updates rechtstreeks uit het bos. Lees onze laatste field logs.",
}

const logs = [
  {
    date: "April 2024",
    title: "Hoe we de laadtijd van klantwebsites met 40% hebben verbeterd",
    excerpt: "Een diepgaande kijk op onze recente performance optimalisaties en wat dit betekent voor conversies.",
  },
  {
    date: "Maart 2024",
    title: "Q leert: automatische contentoptimalisatie",
    excerpt: "We hebben Q getraind om automatisch SEO-kansen te spotten. Hier is wat we hebben geleerd.",
  },
  {
    date: "Februari 2024",
    title: "Van 0 naar 1.000 bezoekers in 30 dagen",
    excerpt: "Case study: hoe een lokale ondernemer zijn online zichtbaarheid transformeerde.",
  },
]

export default function FieldLogsPage() {
  return (
    <div className="bg-[#0d0015] min-h-screen">
      <Navigation />
      <main className="pt-32 pb-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-[family-name:var(--font-gottak)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Field Logs
          </h1>
          <p className="text-white/70 text-lg mb-12 max-w-2xl">
            Inzichten en updates rechtstreeks uit het bos. Hier delen we wat we leren, bouwen en verbeteren.
          </p>
          
          <div className="space-y-8">
            {logs.map((log, index) => (
              <article 
                key={index}
                className="bg-[#1a0a2e] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#ff0096]/50 transition-colors"
              >
                <p className="text-[#ff0096] text-sm font-medium mb-2">{log.date}</p>
                <h2 className="font-[family-name:var(--font-gottak)] text-xl md:text-2xl font-bold text-white mb-3">
                  {log.title}
                </h2>
                <p className="text-white/70 mb-4">{log.excerpt}</p>
                <Link 
                  href="#" 
                  className="text-[#ff0096] font-medium hover:underline"
                >
                  Lees verder
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
