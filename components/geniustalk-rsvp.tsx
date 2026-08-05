"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

const FORESTER_API_BASE =
  process.env.NEXT_PUBLIC_FORESTER_API_BASE || "https://app.webgrowth.company";

const EVENT = {
  datum: "Donderdag 24 september 2026",
  tijd: "15:00 tot 17:00",
  locatie: "Omgeving Rotterdam",
};

type Status = "invullen" | "bezig" | "klaar";

export function GeniusTalkRsvp() {
  // De token wordt na het mounten uit de URL gelezen in plaats van met
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

  useEffect(() => {
    const uitUrl = new URLSearchParams(window.location.search).get("t");
    setToken(uitUrl);
    if (!uitUrl) return;

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
        /* Voorinvullen is een gemak, geen vereiste. Stil falen is hier prima. */
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
    <section className="relative isolate overflow-hidden bg-[color:var(--color-bg)] px-5 sm:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:min-h-[100dvh] lg:flex lg:items-center">
      {/* Eén zachte purple gloed. Pink is op deze site rare-highlight, niet decoratie. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-52 right-[-12rem] h-[640px] w-[640px] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(98,59,199,0.15), rgba(98,59,199,0) 70%)" }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        {/* Uitnodiging */}
        <div className="hero-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-bg-elevated)] py-1.5 pl-2 pr-3 text-[12.5px] font-bold uppercase tracking-[0.18em] text-[color:var(--color-purple)] shadow-[0_1px_2px_rgba(12,6,18,0.04),0_18px_40px_-18px_rgba(12,6,18,0.18)]">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)] motion-safe:animate-pulse"
            />
            Save the date
          </span>

          <h1 className="mt-7 font-[family-name:var(--font-display)] font-bold text-[clamp(2.6rem,6.2vw,5rem)] leading-[1.02] tracking-[-0.025em] text-[color:var(--color-ink-strong)]">
            GeniusTalk 26
          </h1>

          <p className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.35rem,2.6vw,1.9rem)] font-normal leading-[1.2] text-[color:var(--color-purple)]">
            A Year with AI
          </p>

          <p className="mt-7 max-w-[54ch] text-[18px] leading-[1.6] text-[color:var(--color-ink-muted)]">
            Eén middag per jaar zetten we de groep stil bij wat er in een jaar echt veranderd is. Zet de datum
            vast, de rest volgt.
          </p>

          <div className="mt-10 border-t border-[color:var(--color-line)] pt-6">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[16px] text-[color:var(--color-ink-muted)]">
              <span className="font-semibold text-[color:var(--color-ink-strong)]">{EVENT.datum}</span>
              <span aria-hidden className="h-1 w-1 rounded-full bg-[color:var(--color-ink-faint)]" />
              <span className="tabular-nums">{EVENT.tijd}</span>
              <span aria-hidden className="h-1 w-1 rounded-full bg-[color:var(--color-ink-faint)]" />
              <span>{EVENT.locatie}</span>
            </p>
            <p className="mt-2 text-[14.5px] text-[color:var(--color-ink-subtle)]">
              De exacte locatie volgt.
            </p>
          </div>
        </div>

        {/* Aanmelden, direct op fold-niveau */}
        <div className="rounded-[2rem] bg-[color:var(--color-ink)]/[0.03] p-1.5 ring-1 ring-[color:var(--color-line)]">
          <div className="rounded-[calc(2rem-0.375rem)] bg-[color:var(--color-bg-elevated)] p-7 sm:p-9 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_28px_70px_-40px_rgba(12,6,18,0.45)]">
            {status === "klaar" ? (
              <div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-purple-tint)]">
                  <Check className="h-6 w-6 text-[color:var(--color-purple)]" strokeWidth={2} />
                </span>
                <h2 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(1.5rem,2.5vw,2rem)] font-bold leading-[1.15] text-[color:var(--color-ink-strong)]">
                  Je bent erbij
                </h2>
                <p className="mt-3 text-[16px] leading-[1.6] text-[color:var(--color-ink-muted)]">
                  Je krijgt een bevestiging per mail, met de agenda-uitnodiging erbij. Zodra de locatie
                  vaststaat werken we het bij en zie je dat vanzelf in je agenda.
                </p>
              </div>
            ) : (
              <form onSubmit={verstuur} noValidate>
                <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,2.5vw,2rem)] font-bold leading-[1.15] text-[color:var(--color-ink-strong)]">
                  Ben je erbij?
                </h2>
                <p className="mt-2.5 text-[16px] leading-[1.6] text-[color:var(--color-ink-muted)]">
                  Laat het weten, dan reserveren we een plek voor je.
                </p>

                <div className="mt-7 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Veld id="voornaam" label="Voornaam" value={voornaam} onChange={setVoornaam} autoComplete="given-name" required />
                    <Veld id="achternaam" label="Achternaam" value={achternaam} onChange={setAchternaam} autoComplete="family-name" />
                  </div>
                  <Veld id="email" label="E-mailadres" type="email" value={email} onChange={setEmail} autoComplete="email" required />
                  <Veld id="telefoon" label="Telefoonnummer" type="tel" value={telefoon} onChange={setTelefoon} autoComplete="tel" placeholder="06 12345678" />
                </div>

                {fout && (
                  <p role="alert" className="mt-4 text-[14.5px] text-[#b00b5a]">
                    {fout}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "bezig"}
                  className="btn-press group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[color:var(--color-purple)] px-6 py-3.5 text-[14.5px] font-semibold text-white shadow-[0_2px_4px_rgba(98,59,199,0.28),0_18px_40px_-12px_rgba(98,59,199,0.6)] hover:bg-[color:var(--color-purple-hover)] disabled:pointer-events-none disabled:opacity-60"
                >
                  Ja, ik ben erbij
                  <span
                    aria-hidden
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:scale-105"
                  >
                    {status === "bezig" ? (
                      <Loader2 className="h-3.5 w-3.5 animate-spin" strokeWidth={2} />
                    ) : (
                      <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                    )}
                  </span>
                </button>
              </form>
            )}
          </div>
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
    <div>
      <label
        htmlFor={id}
        className="block text-[12.5px] font-bold uppercase tracking-[0.14em] text-[color:var(--color-ink-subtle)]"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 h-11 w-full rounded-xl border border-[color:var(--color-line-strong)] bg-[color:var(--color-bg-muted)] px-4 text-[16px] text-[color:var(--color-ink)] outline-none transition-colors placeholder:text-[color:var(--color-ink-faint)] focus-visible:border-[color:var(--color-purple)] focus-visible:ring-2 focus-visible:ring-[color:var(--color-purple)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-bg-elevated)]"
      />
    </div>
  );
}
