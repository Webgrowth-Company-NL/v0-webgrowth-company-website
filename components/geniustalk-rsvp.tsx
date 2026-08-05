"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Check, Clock, Loader2, MapPin } from "lucide-react";

const FORESTER_API_BASE =
  process.env.NEXT_PUBLIC_FORESTER_API_BASE || "https://app.webgrowth.company";

const EASE = [0.23, 1, 0.32, 1] as const;

const EVENT = {
  datumLabel: "Donderdag 24 september 2026",
  tijdLabel: "15:00 - 17:00",
  locatieLabel: "Omgeving Rotterdam",
  locatieToelichting: "De exacte locatie volgt.",
};

type Status = "invullen" | "bezig" | "klaar";

export function GeniusTalkRsvp() {
  // De token wordt bewust ná het mounten uit de URL gelezen in plaats van met
  // useSearchParams. Die hook dwingt Next.js om deze statische pagina volledig
  // client-side te renderen, waardoor er een lege pagina binnenkomt tot de
  // JavaScript geladen is. Het voorinvullen gebeurt toch pas na het mounten.
  const [token, setToken] = useState<string | null>(null);

  const [voornaam, setVoornaam] = useState("");
  const [achternaam, setAchternaam] = useState("");
  const [email, setEmail] = useState("");
  const [telefoon, setTelefoon] = useState("");
  const [status, setStatus] = useState<Status>("invullen");
  const [fout, setFout] = useState<string | null>(null);
  const [prefillGeladen, setPrefillGeladen] = useState(false);

  // Persoonlijke link: naam en e-mail alvast invullen. Telefoonnummers zitten
  // niet in de aanschrijflijst, dus die vult de bezoeker zelf in.
  useEffect(() => {
    const uitUrl = new URLSearchParams(window.location.search).get("t");
    setToken(uitUrl);

    if (!uitUrl) {
      setPrefillGeladen(true);
      return;
    }
    let geannuleerd = false;
    (async () => {
      try {
        const res = await fetch(`${FORESTER_API_BASE}/api/public/geniustalk/invitee`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: uitUrl }),
        });
        const data = await res.json();
        if (geannuleerd || !res.ok || !data?.found) return;
        setVoornaam(data.voornaam || "");
        setAchternaam(data.achternaam || "");
        setEmail(data.email || "");
        if (data.alAangemeld) setStatus("klaar");
      } catch {
        /* Prefill is een gemak, geen vereiste. Stil falen is hier prima. */
      } finally {
        if (!geannuleerd) setPrefillGeladen(true);
      }
    })();
    return () => {
      geannuleerd = true;
    };
  }, []);

  async function verstuur(e: React.FormEvent) {
    e.preventDefault();
    setFout(null);

    if (!voornaam.trim() || !email.trim()) {
      setFout("Vul in ieder geval je naam en e-mailadres in.");
      return;
    }

    setStatus("bezig");
    try {
      const res = await fetch(`${FORESTER_API_BASE}/api/public/geniustalk/rsvp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          voornaam: voornaam.trim(),
          achternaam: achternaam.trim(),
          email: email.trim(),
          telefoon: telefoon.trim() || null,
          token,
          via: "website",
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Aanmelden lukte niet");
      setStatus("klaar");
    } catch (err) {
      setStatus("invullen");
      setFout(err instanceof Error ? err.message : "Aanmelden lukte niet. Probeer het zo nog eens.");
    }
  }

  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 px-5 sm:px-8 bg-[color:var(--color-bg)]">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(98,59,199,0.16), rgba(98,59,199,0) 70%)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-48 -left-40 h-[520px] w-[520px] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(255,0,150,0.10), rgba(255,0,150,0) 70%)" }}
      />

      <div className="relative mx-auto w-full max-w-[1080px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">
          {/* Verhaal */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-line-strong)] bg-white/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[color:var(--color-purple)]">
              Save the date
            </span>

            <h1 className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2.3rem,5.3vw,4.2rem)] leading-[1.05] tracking-[-0.022em] text-[color:var(--color-ink-strong)]">
              GeniusTalk 26
            </h1>

            <p className="mt-3 text-[clamp(1.15rem,2.1vw,1.5rem)] font-medium text-[color:var(--color-purple)]">
              A Year with AI
            </p>

            <p className="mt-6 max-w-[52ch] text-[17px] leading-[1.65] text-[color:var(--color-ink-muted)]">
              Eén middag per jaar zet ik de groep stil bij wat er echt veranderd is. Zet de datum vast in je
              agenda, dan vertel ik binnenkort meer over wat we die middag gaan doen.
            </p>

            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: CalendarDays, label: "Wanneer", waarde: EVENT.datumLabel },
                { icon: Clock, label: "Hoe laat", waarde: EVENT.tijdLabel },
                { icon: MapPin, label: "Waar", waarde: EVENT.locatieLabel, extra: EVENT.locatieToelichting },
              ].map((d) => (
                <div
                  key={d.label}
                  className="rounded-2xl border border-[color:var(--color-line)] bg-white/70 p-4"
                >
                  <d.icon className="h-5 w-5 text-[color:var(--color-purple)]" aria-hidden />
                  <dt className="mt-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[color:var(--color-ink-faint)]">
                    {d.label}
                  </dt>
                  <dd className="mt-1 text-[15px] font-semibold leading-snug text-[color:var(--color-ink-strong)]">
                    {d.waarde}
                  </dd>
                  {d.extra && (
                    <dd className="mt-0.5 text-[13px] text-[color:var(--color-ink-subtle)]">{d.extra}</dd>
                  )}
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Formulier */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
            className="lg:sticky lg:top-28"
          >
            <div className="rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-bg-elevated)] p-6 sm:p-8 shadow-[0_24px_60px_-30px_rgba(12,6,18,0.35)]">
              {status === "klaar" ? (
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-purple-tint)]">
                    <Check className="h-6 w-6 text-[color:var(--color-purple)]" strokeWidth={3} />
                  </div>
                  <h2 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-bold text-[color:var(--color-ink-strong)]">
                    Je bent erbij
                  </h2>
                  <p className="mt-3 text-[15px] leading-[1.6] text-[color:var(--color-ink-muted)]">
                    Ik heb je aanmelding binnen. Je krijgt een bevestiging per mail met de agenda-uitnodiging
                    erbij. Zodra de locatie vaststaat, werk ik het event bij en zie je dat vanzelf in je agenda.
                  </p>
                </div>
              ) : (
                <form onSubmit={verstuur} noValidate>
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[color:var(--color-ink-strong)]">
                    Ben je erbij?
                  </h2>
                  <p className="mt-2 text-[15px] leading-[1.6] text-[color:var(--color-ink-muted)]">
                    Laat het even weten, dan reserveer ik een plek voor je.
                  </p>

                  <div className="mt-6 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Veld
                        id="voornaam"
                        label="Voornaam"
                        value={voornaam}
                        onChange={setVoornaam}
                        autoComplete="given-name"
                        required
                      />
                      <Veld
                        id="achternaam"
                        label="Achternaam"
                        value={achternaam}
                        onChange={setAchternaam}
                        autoComplete="family-name"
                      />
                    </div>
                    <Veld
                      id="email"
                      label="E-mailadres"
                      type="email"
                      value={email}
                      onChange={setEmail}
                      autoComplete="email"
                      required
                    />
                    <Veld
                      id="telefoon"
                      label="Telefoonnummer"
                      type="tel"
                      value={telefoon}
                      onChange={setTelefoon}
                      autoComplete="tel"
                      placeholder="06 12345678"
                    />
                  </div>

                  {fout && (
                    <p role="alert" className="mt-4 text-[14px] text-[#c0104f]">
                      {fout}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "bezig" || !prefillGeladen}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--color-purple)] px-6 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-[color:var(--color-purple-hover)] disabled:opacity-50"
                  >
                    {status === "bezig" ? (
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                    ) : (
                      <Check className="h-4 w-4" strokeWidth={3} aria-hidden />
                    )}
                    Ja, ik ben erbij
                  </button>

                  <p className="mt-4 text-center text-[12px] leading-relaxed text-[color:var(--color-ink-faint)]">
                    Je gegevens gebruik ik alleen voor dit event.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Veld({
  id,
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  placeholder,
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="block text-[12px] font-bold uppercase tracking-[0.1em] text-[color:var(--color-ink-faint)]">
        {label}
        {!required && <span className="ml-1 normal-case tracking-normal font-normal">(optioneel)</span>}
      </span>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-xl border border-[color:var(--color-line-strong)] bg-white px-4 py-3 text-[15px] text-[color:var(--color-ink)] outline-none transition-colors placeholder:text-[color:var(--color-ink-faint)] focus:border-[color:var(--color-purple)]"
      />
    </label>
  );
}
