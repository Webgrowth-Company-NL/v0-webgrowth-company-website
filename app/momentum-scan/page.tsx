import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Start je Momentum Scan | Forester OS",
  description: "Ontdek wat er beter kan aan je website. Gratis en vrijblijvend.",
}

export default function MomentumScanPage() {
  return (
    <div className="bg-[#0d0015] min-h-screen">
      <Navigation />
      <main className="pt-32 pb-24 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#ff0096] text-sm font-semibold tracking-wider uppercase mb-4">
              Gratis Website APK
            </p>
            <h1 className="font-[family-name:var(--font-gottak)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Start je Momentum Scan
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Vul je gegevens in en wij analyseren je website. Je ontvangt binnen 48 uur een persoonlijk rapport.
            </p>
          </div>
          
          <div className="bg-[#1a0a2e] border border-white/10 rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                    Naam
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-[#0d0015] border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/55 focus:outline-none focus:border-[#ff0096] transition-colors"
                    placeholder="Je naam"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-white text-sm font-medium mb-2">
                    Bedrijfsnaam
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full bg-[#0d0015] border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/55 focus:outline-none focus:border-[#ff0096] transition-colors"
                    placeholder="Je bedrijf"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                  E-mailadres
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#0d0015] border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/55 focus:outline-none focus:border-[#ff0096] transition-colors"
                  placeholder="naam@bedrijf.nl"
                />
              </div>
              
              <div>
                <label htmlFor="website" className="block text-white text-sm font-medium mb-2">
                  Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  className="w-full bg-[#0d0015] border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/55 focus:outline-none focus:border-[#ff0096] transition-colors"
                  placeholder="https://jouwwebsite.nl"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                  Wat wil je graag verbeteren? (optioneel)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-[#0d0015] border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/55 focus:outline-none focus:border-[#ff0096] transition-colors resize-none"
                  placeholder="Vertel ons meer over je doelen..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#ff0096] hover:bg-[#ff0096]/90 text-white py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,150,0.4)]"
              >
                Start mijn gratis scan
              </button>
              
              <p className="text-white/50 text-sm text-center">
                Gratis en vrijblijvend. Geen verkooppraatje.
              </p>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
