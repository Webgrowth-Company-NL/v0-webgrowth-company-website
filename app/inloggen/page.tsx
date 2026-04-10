import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Inloggen | Forester OS",
  description: "Log in op je Forester OS dashboard.",
}

export default function LoginPage() {
  return (
    <div className="bg-[#0d0015] min-h-screen">
      <Navigation />
      <main className="pt-32 pb-24 px-4 sm:px-6 flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="w-full max-w-md">
          <div className="bg-[#1a0a2e] border border-white/10 rounded-2xl p-8">
            <h1 className="font-[family-name:var(--font-gottak)] text-2xl md:text-3xl font-bold text-white mb-2 text-center">
              Welkom terug
            </h1>
            <p className="text-white/60 text-center mb-8">
              Log in op je dashboard
            </p>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                  E-mailadres
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#0d0015] border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#ff0096] transition-colors"
                  placeholder="naam@bedrijf.nl"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-white text-sm font-medium mb-2">
                  Wachtwoord
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full bg-[#0d0015] border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#ff0096] transition-colors"
                  placeholder="••••••••"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#ff0096] hover:bg-[#ff0096]/90 text-white py-3 rounded-full font-semibold transition-all hover:scale-105"
              >
                Inloggen
              </button>
            </form>
            
            <p className="mt-6 text-center text-white/60 text-sm">
              Nog geen account?{" "}
              <Link href="/momentum-scan" className="text-[#ff0096] hover:underline">
                Start je Momentum Scan
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
