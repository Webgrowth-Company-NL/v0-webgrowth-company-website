"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

const FORESTER_API_BASE =
  process.env.NEXT_PUBLIC_FORESTER_API_BASE || "https://app.webgrowth.company";

type Status = "invullen" | "bezig" | "klaar";

/**
 * Het aanmeldformulier voor GeniusTalk 26. Post naar dezelfde endpoints als de
 * pagina in Forester OS, zodat alle aanmeldingen in één lijst landen.
 *
 * De omliggende pagina (app/geniustalk/page.tsx) levert de hero en het verhaal;
 * hier blijft alleen het stuk staan dat state nodig heeft.
 */
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
    <div className="rounded-[2rem] bg-[color:var(--color-ink)]/[0.03] p-1.5 ring-1 ring-[color:var(--color-line)]">
      <div className="rounded-[calc(2rem-0.375rem)] bg-[color:var(--color-bg-elevated)] p-7 sm:p-9 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_28px_70px_-40px_rgba(12,6,18,0.45)]">
        {status === "klaar" ? (
          <div>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-purple-tint)]">
              <Check className="h-6 w-6 text-[color:var(--color-purple)]" strokeWidth={2} />
            </span>
            <h3 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(1.5rem,2.5vw,2rem)] font-bold leading-[1.15] text-[color:var(--color-ink-strong)]">
              Je bent erbij
            </h3>
            <p className="mt-3 text-[16px] leading-[1.6] text-[color:var(--color-ink-muted)]">
              Je krijgt een bevestiging per mail, met de agenda-uitnodiging erbij. Verandert er iets, dan zie je
              dat vanzelf in je agenda.
            </p>
          </div>
        ) : (
          <form onSubmit={verstuur} noValidate>
            <h3 className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,2.5vw,2rem)] font-bold leading-[1.15] text-[color:var(--color-ink-strong)]">
              Ben je erbij?
            </h3>
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
