import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Heart, MapPin, Sparkles, Users, Zap } from "lucide-react";
import Link from "next/link";
import { KennismakingButton } from "@/components/kennismaking-button";
import { MorphPhoto } from "@/components/morph-photo";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WaveDivider } from "@/components/wave-divider";

const HERO_PURPLE = "#231653";
const CREAM = "#faf6f0";
const WHITE = "#ffffff";
const DEEP = "#2c1d5e";
const LAVENDER = "#e9e4f7";

export const metadata: Metadata = {
  title: "Over Webgrowth Company: het verhaal achter het platform",
  description:
    "Sinds de middelbare school bezig met websites. Sinds 2016 als Webgrowth Company. Dit is hoe we hier kwamen, en waar we naartoe willen.",
  alternates: { canonical: "/over" },
};

export default function OverPage() {
  return (
    <>
      <SiteHeader dark />
      <main className="flex-1">
        {/* ───────────────────────── Hero ───────────────────────── */}
        <section
          className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 px-5 sm:px-8 text-white"
          style={{ backgroundColor: HERO_PURPLE }}
        >
          <div
            aria-hidden
            className="absolute -top-48 -right-48 h-[680px] w-[680px] rounded-full"
            style={{ background: "radial-gradient(closest-side, rgba(139,92,246,0.42), rgba(139,92,246,0) 70%)" }}
          />
          <div
            aria-hidden
            className="absolute -bottom-60 -left-48 h-[680px] w-[680px] rounded-full"
            style={{ background: "radial-gradient(closest-side, rgba(124,58,237,0.30), rgba(124,58,237,0) 70%)" }}
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-40 sm:h-52 pointer-events-none"
            style={{ background: `linear-gradient(to bottom, transparent, ${HERO_PURPLE})` }}
          />

          <div className="relative mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.07] backdrop-blur-sm text-[12.5px] font-medium text-white/75">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-lavender)]" />
                  Ons verhaal
                  <span className="text-white/35">·</span>
                  <span className="text-white font-semibold">Sinds 2016</span>
                </span>
                <h1 className="mt-7 font-[family-name:var(--font-display)] font-bold text-[clamp(2.3rem,5.3vw,4.2rem)] leading-[1.05] tracking-[-0.022em] text-white">
                  We bouwen websites die{" "}
                  <span
                    className="inline bg-clip-text text-transparent"
                    style={{
                      backgroundImage: "linear-gradient(110deg, #ff0096 0%, #8b5cf6 50%, #c4b5fd 100%)",
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    hun werk doen.
                  </span>
                </h1>
                <p className="mt-6 max-w-xl text-[17px] sm:text-[18px] leading-[1.65] text-white/70">
                  Wij bouwen geen digitale visitekaartjes die na de livegang stof staan te happen, maar platforms die leads binnenbrengen, content publiceren, klanten opvolgen en bijschuren waar dat nodig is. Hieronder vertellen we hoe we daar terechtkwamen.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <KennismakingButton variant="secondary-on-dark" />
                  <Link
                    href="/forester-os"
                    className="inline-flex items-center gap-2 text-[14.5px] font-semibold text-white/75 hover:text-white transition-colors"
                  >
                    Bekijk Forester OS
                    <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                  </Link>
                </div>
              </div>

              {/* Portret rechts — morph tussen 1997 en nu, met bliksem-flash */}
              <div className="relative flex items-center justify-center lg:justify-end">
                <MorphPhoto />
              </div>
            </div>
          </div>
        </section>

        <WaveDivider top={HERO_PURPLE} bottom={CREAM} />

        {/* ───────────────────────── Het begin ───────────────────────── */}
        <section className="relative px-5 sm:px-8 pt-16 sm:pt-24 pb-28 sm:pb-36 bg-[#faf6f0]">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-white text-[12.5px] font-medium text-[color:var(--color-ink-muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
              Hoe het begon
            </span>
            <h2 className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.08] tracking-[-0.02em] text-[color:var(--color-ink-strong)]">
              Van middelbare-school-knutselen tot eigen platform.
            </h2>

            <div className="mt-7 space-y-6 text-[16.5px] sm:text-[17.5px] leading-[1.75] text-[color:var(--color-ink-muted)]">
              <p>
                Martijn bouwt al websites sinds de middelbare school en is daarvoor altijd al met computers
                bezig geweest, gedreven door nieuwsgierigheid naar hoe iets werkt en hoe het beter kan. Wat hem
                destijds stoorde, en eigenlijk nu nog steeds, was dat bedrijven veel geld uitgaven aan een
                website om er vervolgens niets meer mee te doen, alsof het een duur digitaal visitekaartje was.
              </p>
              <p>
                Een website kan zoveel meer zijn als je hem laat groeien, leads laat binnenbrengen en op data
                laat sturen, en die overtuiging is nooit weggegaan. Met de opkomst van AI is dat idee de
                laatste jaren in een stroomversnelling geraakt, waardoor meten en analyseren van een bijzaak
                naar de kern van ons werk is geschoven.
              </p>
              <p>
                Voordat Webgrowth Company er was, werkte Martijn bij een bedrijfsadvies-organisatie en
                daar leerde hij denken als consultant: patronen herkennen, niet in beperkingen maar in
                mogelijkheden denken, en kansen pakken voordat ze wegvliegen. Die manier van kijken zit nu in
                elke offerte, elke sprint en elke beslissing die we in Forester OS nemen.
              </p>
            </div>

            {/* Naam-block */}
            <div className="mt-12 rounded-3xl border border-[color:var(--color-line)] bg-white p-7 sm:p-9 shadow-[0_18px_44px_-22px_rgba(12,6,18,0.12)]">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-purple-tint)]">
                  <Sparkles className="h-5 w-5 text-[color:var(--color-purple)]" strokeWidth={2.25} />
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[20px] sm:text-[22px] text-[color:var(--color-ink-strong)] tracking-[-0.01em]">
                    Waarom Webgrowth Company?
                  </h3>
                  <p className="mt-3 text-[15.5px] leading-[1.7] text-[color:var(--color-ink-muted)]">
                    Het bedrijf heette eerst <strong className="text-[color:var(--color-ink)]">Marketing Genius</strong>,
                    vanuit de gedachte dat onze klanten (vaak marketeers) gezien moesten worden als superhelden,
                    als echte marketing genius. Op een dag begonnen mensen Martijn zo te noemen en dat voelde
                    niet kloppen, want hij wilde juist dat de klant in het middelpunt stond en dat de naam ging
                    over waar het écht om draait, namelijk dat klanten groeien op het web. Zo werd het
                    Webgrowth Company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WaveDivider top={CREAM} bottom={WHITE} />

        {/* ───────────────────────── Wat we anders doen ───────────────────────── */}
        <section className="relative px-5 sm:px-8 pt-16 sm:pt-24 pb-28 sm:pb-36 bg-white">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-bg)] text-[12.5px] font-medium text-[color:var(--color-ink-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
                Waar we voor staan
              </span>
              <h2 className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.08] tracking-[-0.02em] text-[color:var(--color-ink-strong)]">
                Loopt de concurrentie de extra mile? Wij lopen een marathon erbij.
              </h2>
              <p className="mt-5 text-[16.5px] sm:text-[17.5px] leading-[1.7] text-[color:var(--color-ink-muted)]">
                Wij vinden value for buck absurd belangrijk en daarom krijgt niemand bij Webgrowth Company een
                extra rekening voor een aanpassing, een belletje of een hulpvraag. Wat we vooraf afspreken is wat
                je betaalt, en daar houden we ons aan.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <PrincipleCard
                icon={Heart}
                title="Geen extra rekening."
                body="Of het nu vijf minuten of een uur is dat we voor je werken, je krijgt er nooit een factuur achteraan. Wat we vooraf hebben afgesproken is wat je betaalt."
              />
              <PrincipleCard
                icon={Zap}
                title="Marathon, geen mile."
                body="Het bureau om de hoek loopt voor zijn klanten The Extra Mile, en wij lopen daar een marathon overheen. Niet voor de show, maar omdat we het zelf zo zouden willen krijgen."
              />
              <PrincipleCard
                icon={Sparkles}
                title="Bouwen mét data."
                body="We meten, analyseren en passen aan op basis van wat de cijfers laten zien. AI helpt ons nu in een paar uur dingen voor elkaar te krijgen waar we vroeger een week aan kwijt waren, en dat voordeel geven we direct aan je door."
              />
            </div>

            {/* Q manifest */}
            <div className="relative mt-16 sm:mt-20 rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#1d1340] via-[#2c1d5e] to-[#3f2a8f] text-white shadow-[0_30px_72px_-24px_rgba(28,12,80,0.55)]">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_55%_at_70%_30%,black,transparent)]"
                style={{
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
                  backgroundSize: "26px 26px",
                }}
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full"
                style={{ background: "radial-gradient(closest-side, rgba(139,92,246,0.4), rgba(139,92,246,0) 70%)" }}
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full"
                style={{ background: "radial-gradient(closest-side, rgba(255,0,150,0.18), rgba(255,0,150,0) 70%)" }}
              />

              <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 items-center px-7 sm:px-10 py-12 sm:py-16">
                <div>
                  <span className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.07] backdrop-blur-sm text-[12.5px] font-medium text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c4b5fd]" />
                    Onze rol
                  </span>
                  <h3 className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.05] tracking-[-0.02em]">
                    Jij bent James Bond.{" "}
                    <span
                      className="inline bg-clip-text text-transparent"
                      style={{
                        backgroundImage: "linear-gradient(110deg, #ff0096 0%, #8b5cf6 55%, #c4b5fd 100%)",
                        WebkitBackgroundClip: "text",
                      }}
                    >
                      Wij zijn Q.
                    </span>
                  </h3>
                  <div className="mt-6 space-y-4 text-[16px] sm:text-[17px] leading-[1.7] text-white/80 max-w-xl">
                    <p>
                      Je weet wel, die met de geniale technische snufjes. Wij vreten data om de beste website
                      voor jou te bouwen, om hem door te ontwikkelen en om jouw leven een stuk makkelijker te
                      maken.
                    </p>
                    <p>
                      En het mooie is dat onze AI in Forester OS óók Q heet, en dat is geen toeval maar een
                      knipoog. Hij schrijft je content, beantwoordt vragen van bezoekers en houdt je SEO in de
                      gaten, terwijl jij ondertussen aan het werk bent.
                    </p>
                  </div>
                </div>

                {/* Bolt + Q monogram */}
                <div className="relative flex items-center justify-center">
                  <div className="relative aspect-square w-full max-w-[320px] rounded-[2rem] bg-white/[0.06] border border-white/12 backdrop-blur-sm overflow-hidden flex items-center justify-center">
                    <span aria-hidden className="pointer-events-none absolute -top-16 -right-12 h-44 w-44 rounded-full bg-[#ff0096]/20 blur-3xl" />
                    <span aria-hidden className="pointer-events-none absolute -bottom-16 -left-12 h-44 w-44 rounded-full bg-[#8b5cf6]/30 blur-3xl" />
                    <span
                      className="relative font-[family-name:var(--font-display)] font-bold text-[180px] sm:text-[220px] leading-none tracking-[-0.04em]"
                      style={{
                        backgroundImage: "linear-gradient(135deg, #ffffff 0%, #c4b5fd 55%, #8b5cf6 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Q
                    </span>
                    <span className="absolute bottom-5 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-white/12 backdrop-blur-sm px-3 py-1.5 text-[11.5px] font-medium text-white">
                      <Image src="/logo-bolt.png" alt="" width={14} height={14} className="object-contain" />
                      Powered by Forester OS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WaveDivider top={WHITE} bottom={DEEP} />

        {/* ───────────────────────── Forester OS ───────────────────────── */}
        <section className="relative isolate overflow-hidden px-5 sm:px-8 pt-16 sm:pt-24 pb-28 sm:pb-36 bg-[#2c1d5e] text-white">
          <div
            aria-hidden
            className="absolute -top-32 -right-20 h-[520px] w-[520px] rounded-full"
            style={{ background: "radial-gradient(closest-side, rgba(139,92,246,0.32), rgba(139,92,246,0) 70%)" }}
          />
          <div
            aria-hidden
            className="absolute -bottom-40 -left-24 h-[560px] w-[560px] rounded-full"
            style={{ background: "radial-gradient(closest-side, rgba(124,58,237,0.22), rgba(124,58,237,0) 70%)" }}
          />

          <div className="relative mx-auto max-w-5xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-white/15 bg-white/10 text-[12.5px] font-medium text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c4b5fd]" />
                Waar Forester OS vandaan komt
              </span>
              <h2 className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.08] tracking-[-0.02em]">
                Een bos, drie kinderen en Dr. Squatch.
              </h2>
              <div className="mt-7 space-y-5 text-[16.5px] sm:text-[17.5px] leading-[1.75] text-white/80">
                <p>
                  De naam Forester OS heeft een persoonlijk verhaal achter zich. Onze dochters Soof en Bo zijn
                  gek van paars en roze, terwijl onze zoon Kick juist gek is van groen. Combineer dat met onze
                  liefde voor het merk{" "}
                  <strong className="text-white">Dr. Squatch</strong>, dat zo rauw, eerlijk en vol karakter is,
                  en je krijgt iets als Forester OS.
                </p>
                <p>
                  We wilden een platform met de standvastigheid van het bos, dat traag groeit waar het moet en
                  snel als het kan. Paars werd de hoofdkleur omdat dat letterlijk de kleur is van thuis, en in
                  het logo zit een bolt-symbool dat staat voor de snelheid waarmee we voor onze klanten op iets
                  reageren.
                </p>
                <p>
                  Forester OS is daarmee geen marketing-stunt geworden, maar gewoon de manier waarop we het
                  wilden bouwen, met de mensen om ons heen voortdurend in gedachten.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_30px_72px_-24px_rgba(98,59,199,0.55)] border border-white/12">
              <Image
                src="/images/about/martijn-gezin.jpg"
                alt="Martijn op het strand met zijn partner, Bo, Soof en Kick"
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover"
              />
              <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/12" />
              <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[rgba(12,6,18,0.65)] via-[rgba(12,6,18,0.15)] to-transparent" />
              <figcaption className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-[13px] font-semibold">Soof, Bo, Kick en het thuisfront</div>
                <div className="mt-0.5 text-[11.5px] text-white/70">Paars, roze en groen. Daar begint Forester OS.</div>
              </figcaption>
            </div>
          </div>
        </section>

        <WaveDivider top={DEEP} bottom={CREAM} />

        {/* ───────────────────────── Wie zijn onze klanten ───────────────────────── */}
        <section className="relative px-5 sm:px-8 pt-16 sm:pt-24 pb-28 sm:pb-36 bg-[#faf6f0]">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-white text-[12.5px] font-medium text-[color:var(--color-ink-muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
              Onze klanten
            </span>
            <h2 className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.08] tracking-[-0.02em] text-[color:var(--color-ink-strong)]">
              Mensen met inspiratie. Klanten die willen scoren.
            </h2>
            <div className="mt-7 space-y-6 text-[16.5px] sm:text-[17.5px] leading-[1.75] text-[color:var(--color-ink-muted)]">
              <p>
                Onze favoriete klanten zijn enthousiast en ze hoeven helemaal niet héél veel marketing-kennis
                in huis te hebben. Ze willen verder, ze willen scoren en ze willen gáán, en op die energie
                springen wij dan vol bovenop.
              </p>
              <p>
                We krijgen veel complimenten van die klanten, en het meeste komt in plat Rotterdams, Haags of
                Brabants binnen, puur en zonder opsmuk, en dát maakt ons blij. De mooiste zinnen zijn nog
                steeds de varianten op &ldquo;niet te geloven dat je dit voor elkaar krijgt&rdquo;, omdat wat
                vroeger maanden en tienduizenden euro&apos;s kostte, nu in weken voor een fractie kan. Daar
                staan we voor.
              </p>
            </div>

            <blockquote className="mt-10 rounded-3xl bg-white border border-[color:var(--color-line)] p-7 sm:p-8 shadow-[0_18px_44px_-22px_rgba(12,6,18,0.12)]">
              <p className="font-[family-name:var(--font-display)] text-[19px] sm:text-[22px] leading-[1.45] text-[color:var(--color-ink-strong)] italic">
                &ldquo;Er zijn behoorlijk wat periodes geweest waarop het misschien wel te zwaar was. Weinig
                inkomsten, veel stress. Maar we zijn blijven geloven in wat ons doel was. En we komen verdomd
                dichtbij.&rdquo;
              </p>
              <footer className="mt-5 flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-purple-tint)] text-[color:var(--color-purple)] font-bold text-[13px]">
                  MD
                </span>
                <span className="text-[13.5px] font-semibold text-[color:var(--color-ink)]">Martijn Duin</span>
                <span className="text-[12.5px] text-[color:var(--color-ink-subtle)]">Founder</span>
              </footer>
            </blockquote>
          </div>
        </section>

        <WaveDivider top={CREAM} bottom={LAVENDER} />

        {/* ───────────────────────── Het team ───────────────────────── */}
        <section className="relative px-5 sm:px-8 pt-16 sm:pt-24 pb-28 sm:pb-36 bg-[#e9e4f7]">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-white text-[12.5px] font-medium text-[color:var(--color-ink-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
                Het team
              </span>
              <h2 className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.08] tracking-[-0.02em] text-[color:var(--color-ink-strong)]">
                Klein van binnen, groot van buiten.
              </h2>
              <p className="mt-5 text-[16.5px] sm:text-[17.5px] leading-[1.7] text-[color:var(--color-ink-muted)]">
                Webgrowth Company wordt gerund door Martijn, met een vaste club specialisten om hem heen die
                we inschakelen wanneer een project daarom vraagt. Designers, copywriters, ontwikkelaars en
                sparring-partners die we kennen en vertrouwen, zonder overhead en zonder tussenlagen tussen
                jou en wie het echte werk doet.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-3 gap-5 sm:gap-6">
              <TeamCard
                icon={Users}
                title="Eén aanspreekpunt."
                body="Je belt of mailt Martijn, en hij zorgt dat de juiste mensen erbij komen wanneer dat nodig is. Op die manier heb je nooit een account-manager tussen jou en de mensen die het echte werk doen."
              />
              <TeamCard
                icon={Sparkles}
                title="Specialisten op afroep."
                body="Of je nu een designer voor een nieuwe huisstijl of een copywriter voor een lange tekst nodig hebt, we schakelen precies wie er bij die klus past, in plaats van een vast bureau-team dat overal automatisch komt binnenwandelen."
              />
              <TeamCard
                icon={MapPin}
                title="Gebouwd in Nederland."
                body="We staan met onze voeten in Breda en daarmee heb je korte lijnen en zijn we snel ter plekke. Voor data, hosting en AVG-compliance is het bovendien fijn dat alles in Nederland staat."
              />
            </div>
          </div>
        </section>

        <WaveDivider top={LAVENDER} bottom={DEEP} />

        {/* ───────────────────────── Droom + CTA ───────────────────────── */}
        <section className="relative isolate overflow-hidden px-5 sm:px-8 pt-20 sm:pt-28 pb-20 sm:pb-28 bg-[#2c1d5e] text-white">
          <div
            aria-hidden
            className="absolute -top-32 left-1/4 h-[560px] w-[560px] rounded-full"
            style={{ background: "radial-gradient(closest-side, rgba(139,92,246,0.36), rgba(139,92,246,0) 70%)" }}
          />
          <div
            aria-hidden
            className="absolute -bottom-40 right-1/4 h-[600px] w-[600px] rounded-full"
            style={{ background: "radial-gradient(closest-side, rgba(124,58,237,0.26), rgba(124,58,237,0) 70%)" }}
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-white/15 bg-white/10 text-[12.5px] font-medium text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c4b5fd]" />
              De droom
            </span>
            <h2 className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.06] tracking-[-0.02em]">
              Het marketing-platform voor het klein-MKB. En daarna Montana.
            </h2>
            <p className="mt-6 text-[16.5px] sm:text-[18px] leading-[1.65] text-white/75 max-w-xl mx-auto">
              Eerst bouwen we hét marketing-platform voor het klein-MKB in Nederland, en zodra dat draait
              hebben we onze pijlen op Amerika gericht. Ooit, als alles loopt, zou Martijn dat het liefst
              vanaf een ranch in Montana of Wyoming doen. Tot die tijd zitten we hier in Breda, en jij
              mag mee.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <KennismakingButton variant="secondary-on-dark" />
              <Link
                href="/forester-os"
                className="inline-flex items-center gap-2 text-[14.5px] font-semibold text-white/75 hover:text-white transition-colors"
              >
                Wat we bouwen
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function PrincipleCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Heart;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-bg)] p-6 sm:p-7 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-22px_rgba(12,6,18,0.18)]">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-purple-tint)]">
        <Icon className="h-5 w-5 text-[color:var(--color-purple)]" strokeWidth={2.25} />
      </span>
      <h3 className="mt-5 font-[family-name:var(--font-display)] font-bold text-[18px] sm:text-[19px] tracking-[-0.01em] text-[color:var(--color-ink-strong)]">
        {title}
      </h3>
      <p className="mt-3 text-[14.5px] leading-[1.65] text-[color:var(--color-ink-muted)]">{body}</p>
    </div>
  );
}

function TeamCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Users;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-[color:var(--color-line)] bg-white p-6 sm:p-7 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-22px_rgba(12,6,18,0.16)]">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-purple-tint)]">
        <Icon className="h-5 w-5 text-[color:var(--color-purple)]" strokeWidth={2.25} />
      </span>
      <h3 className="mt-5 font-[family-name:var(--font-display)] font-bold text-[17px] sm:text-[18px] tracking-[-0.01em] text-[color:var(--color-ink-strong)]">
        {title}
      </h3>
      <p className="mt-3 text-[14.5px] leading-[1.65] text-[color:var(--color-ink-muted)]">{body}</p>
    </div>
  );
}
