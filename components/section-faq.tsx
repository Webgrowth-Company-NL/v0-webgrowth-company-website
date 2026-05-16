"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQS, type FaqItem } from "@/lib/faq";
import { useKennismakingModal } from "@/components/kennismaking-modal-provider";

const EASE = [0.23, 1, 0.32, 1] as const;

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
});

type SectionFaqProps = {
  items?: FaqItem[];
  eyebrow?: string;
  title?: string;
  intro?: React.ReactNode;
};

export function SectionFaq({
  items = FAQS,
  eyebrow = "Veelgestelde vragen",
  title = "Vragen die je waarschijnlijk hebt.",
  intro,
}: SectionFaqProps = {}) {
  const [open, setOpen] = useState(0);
  const { open: openKennismaking } = useKennismakingModal();

  return (
    <section className="relative px-5 sm:px-8 pt-16 sm:pt-24 pb-28 sm:pb-40 bg-[#e9e4f7]">
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="text-center"
        >
          <motion.span variants={fadeUp(0)} className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-bg-elevated)] text-[12.5px] font-medium text-[color:var(--color-ink-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
            {eyebrow}
          </motion.span>
          <motion.h2 variants={fadeUp(0.05)} className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.06] tracking-[-0.02em] text-[color:var(--color-ink-strong)]">
            {title}
          </motion.h2>
          <motion.p variants={fadeUp(0.1)} className="mt-5 text-[16px] sm:text-[17px] leading-[1.6] text-[color:var(--color-ink-muted)]">
            {intro ?? (
              <>
                Staat je vraag er niet bij?{" "}
                <button
                  type="button"
                  onClick={openKennismaking}
                  className="font-semibold text-[color:var(--color-purple)] hover:text-[color:var(--color-purple-hover)] transition-colors underline underline-offset-2"
                >
                  Boek een kennismaking
                </button>
                , dan beantwoorden we 'm direct.
              </>
            )}
          </motion.p>
        </motion.div>

        {/* Accordion */}
        <div className="mt-12 sm:mt-14 flex flex-col gap-3">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.05 }}
                className={[
                  "rounded-2xl border bg-[color:var(--color-bg-elevated)] transition-colors duration-200",
                  isOpen ? "border-[color:var(--color-purple)]/35 shadow-[0_14px_34px_-18px_rgba(98,59,199,0.25)]" : "border-[color:var(--color-line)]",
                ].join(" ")}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[15px] sm:text-[16px] font-semibold text-[color:var(--color-ink)]">{f.q}</span>
                  <span className={["inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-200", isOpen ? "bg-[color:var(--color-purple)] text-white" : "bg-[color:var(--color-bg-muted)] text-[color:var(--color-ink-subtle)]"].join(" ")}>
                    <ChevronDown className={["h-4 w-4 transition-transform duration-200 ease-out", isOpen ? "rotate-180" : ""].join(" ")} strokeWidth={2.5} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-[14.5px] leading-relaxed text-[color:var(--color-ink-muted)]">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
