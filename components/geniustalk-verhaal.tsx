"use client";

import { motion } from "framer-motion";

const EASE = [0.23, 1, 0.32, 1] as const;

/**
 * De rode draad van GeniusTalk 26, als teaser onder de save-the-date.
 *
 * Bewust zonder klantnamen: het verhaal loopt van het kleinste voorbeeld naar
 * het grootste, en wie erachter zit blijft voor het podium.
 *
 * Deze tekst staat ook in lib/geniustalk/config.ts in het platform (Forester OS
 * kan niet uit deze repo importeren). Bij een wijziging beide bijwerken.
 */
const VERHAAL = {
  eyebrow: "Waar het over gaat",
  titel: "Van een doos in de schuur naar het systeem waar een heel bedrijf op draait.",
  intro:
    "Het begon met een schuur vol dozen. Ik wist wel dát het er lag, alleen niet meer waarin. Dus bouwde ik iets kleins: een nummer op elke doos, een foto van de inhoud, en AI die herkent wat erop staat. Sindsdien zoek ik niet meer, ik typ gewoon wat ik zoek.",
  brug:
    "Dat klinkt als een speeltje. Maar precies dezelfde bouwstenen zitten inmiddels onder systemen waar complete bedrijven op draaien. Op 24 september laat ik zien hoe je van het een bij het ander komt.",
  stappen: [
    {
      titel: "De schuur",
      tekst: "Een doos, een foto, en AI die weet wat erin zit. Het simpelste voorbeeld van waar alles op rust.",
    },
    {
      titel: "Een compleet product",
      tekst:
        "Dezelfde bouwstenen, maar dan van gratis app tot betaalde begeleiding. Eén lijn waar de klant vanzelf doorheen loopt.",
    },
    {
      titel: "Een heel bedrijf",
      tekst: "Offerte, ontwerp, akkoord, productie, transport, levering. Niet in tien losse tools, maar in één systeem.",
    },
    {
      titel: "En deze middag",
      tekst: "Je uitnodiging en je aanmelding draaien er ook op. Je gebruikt het dus al voordat ik erover begin.",
    },
  ],
  afsluiter: "Wat we die middag verder gaan doen, hou ik nog even voor me.",
};

export function GeniusTalkVerhaal() {
  return (
    <section className="relative px-5 sm:px-8 py-20 sm:py-28 bg-[color:var(--color-bg-elevated)]">
      <div className="mx-auto w-full max-w-[1080px]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[color:var(--color-purple)]">
            {VERHAAL.eyebrow}
          </span>

          <h2 className="mt-5 max-w-[20ch] font-[family-name:var(--font-display)] font-bold text-[clamp(1.9rem,4.2vw,3.1rem)] leading-[1.09] tracking-[-0.02em] text-[color:var(--color-ink-strong)]">
            {VERHAAL.titel}
          </h2>

          <div className="mt-7 max-w-[62ch] space-y-4">
            <p className="text-[17px] leading-[1.65] text-[color:var(--color-ink-muted)]">{VERHAAL.intro}</p>
            <p className="text-[17px] leading-[1.65] text-[color:var(--color-ink-muted)]">{VERHAAL.brug}</p>
          </div>
        </motion.div>

        <ol className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {VERHAAL.stappen.map((stap, i) => (
            <motion.li
              key={stap.titel}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
              className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-bg)] p-6"
            >
              <span
                aria-hidden
                className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[color:var(--color-purple)] text-[13px] font-black text-white"
              >
                {i + 1}
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-[19px] font-bold leading-[1.25] text-[color:var(--color-ink-strong)]">
                {stap.titel}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-[color:var(--color-ink-muted)]">{stap.tekst}</p>
            </motion.li>
          ))}
        </ol>

        <p className="mt-8 text-[15px] italic text-[color:var(--color-ink-subtle)]">{VERHAAL.afsluiter}</p>
      </div>
    </section>
  );
}
