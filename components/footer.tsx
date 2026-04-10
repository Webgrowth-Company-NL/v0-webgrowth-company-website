"use client"

export function Footer() {
  return (
    <footer className="relative py-12 px-4 sm:px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-xl">Forester OS</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Voorwaarden</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          
          <p className="text-white/40 text-sm">
            © 2024 Webgrowth Company. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  )
}
