"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Check, ExternalLink, Loader2, X } from "lucide-react";

const FORESTER_API_BASE =
  process.env.NEXT_PUBLIC_FORESTER_API_BASE || "https://app.webgrowth.company";

const EASE = [0.23, 1, 0.32, 1] as const;

type ModalCtx = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};
const KennismakingCtx = createContext<ModalCtx | null>(null);

export function useKennismakingModal(): ModalCtx {
  const ctx = useContext(KennismakingCtx);
  if (!ctx) throw new Error("useKennismakingModal must be used inside KennismakingModalProvider");
  return ctx;
}

export function KennismakingModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <KennismakingCtx.Provider value={{ isOpen, open, close }}>
      {children}
      <KennismakingModal open={isOpen} onClose={close} />
    </KennismakingCtx.Provider>
  );
}

/* ────────────────────────────────────────────────────────────
   Modal flow: dates → times → subject → contact → success
   ──────────────────────────────────────────────────────────── */

type Step = "dates" | "times" | "subject" | "contact" | "success";

function KennismakingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState<Step>("dates");

  // Data state
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [loadingDates, setLoadingDates] = useState(false);
  const [datesError, setDatesError] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");

  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [loadingTimes, setLoadingTimes] = useState(false);
  const [timesError, setTimesError] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");

  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [meetingLink, setMeetingLink] = useState<string | null>(null);

  // Reset on close
  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setStep("dates");
        setSelectedDate("");
        setSelectedTime("");
        setSubject("");
        setName("");
        setEmail("");
        setCompany("");
        setSubmitError(null);
        setMeetingLink(null);
      }, 250);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Load available dates on first open
  useEffect(() => {
    if (!open) return;
    if (availableDates.length > 0) return;
    let cancelled = false;
    (async () => {
      setLoadingDates(true);
      setDatesError(null);
      try {
        const res = await fetch(`${FORESTER_API_BASE}/api/public/kennismaking/availability`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mode: "available-dates" }),
        });
        if (!res.ok) throw new Error("Beschikbare data konden niet geladen worden");
        const data = await res.json();
        if (!cancelled) setAvailableDates(data.dates ?? []);
      } catch (err) {
        if (!cancelled) setDatesError(err instanceof Error ? err.message : "Onbekende fout");
      } finally {
        if (!cancelled) setLoadingDates(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [open, availableDates.length]);

  // Load times when date is selected
  useEffect(() => {
    if (!selectedDate) return;
    let cancelled = false;
    (async () => {
      setLoadingTimes(true);
      setTimesError(null);
      setAvailableTimes([]);
      try {
        const res = await fetch(`${FORESTER_API_BASE}/api/public/kennismaking/availability`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ date: selectedDate }),
        });
        if (!res.ok) throw new Error("Tijdsloten konden niet geladen worden");
        const data = await res.json();
        if (!cancelled) setAvailableTimes(data.slots ?? []);
      } catch (err) {
        if (!cancelled) setTimesError(err instanceof Error ? err.message : "Onbekende fout");
      } finally {
        if (!cancelled) setLoadingTimes(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [selectedDate]);

  // Escape to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Body scroll lock
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const formatDate = (iso: string) => {
    const d = new Date(`${iso}T12:00:00`);
    return d.toLocaleDateString("nl-NL", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch(`${FORESTER_API_BASE}/api/public/kennismaking/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: selectedDate,
          time: selectedTime,
          subject,
          attendeeEmail: email.trim(),
          attendeeName: name.trim(),
          firstName: name.trim().split(" ")[0],
          companyName: company.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Kon kennismaking niet inplannen");
      setMeetingLink(data.meetingLink ?? null);
      setStep("success");
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Onbekende fout");
    } finally {
      setSubmitting(false);
    }
  };

  const stepIndex = (["dates", "times", "subject", "contact"] as const).indexOf(step as "dates");
  const canGoNext = (() => {
    if (step === "dates") return !!selectedDate;
    if (step === "times") return !!selectedTime;
    if (step === "subject") return subject.trim().length > 3;
    if (step === "contact") return name.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && company.trim();
    return false;
  })();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: EASE }}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-[rgba(12,6,18,0.55)] backdrop-blur-sm px-0 sm:px-6 py-0 sm:py-8"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="relative w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[88vh] flex flex-col bg-white rounded-t-3xl sm:rounded-3xl shadow-[0_30px_80px_-20px_rgba(12,6,18,0.5)] overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="kennismaking-title"
          >
            {/* Gradient accent top */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-1"
              style={{ backgroundImage: "linear-gradient(90deg, #ff0096 0%, #8b5cf6 55%, #c4b5fd 100%)" }}
            />

            {/* Header */}
            <div className="flex items-center justify-between px-6 sm:px-8 pt-7 pb-5 border-b border-[color:var(--color-line)] shrink-0">
              <div>
                <div className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[color:var(--color-purple)]">
                  Boek een kennismaking
                </div>
                <h2 id="kennismaking-title" className="mt-1 font-[family-name:var(--font-display)] font-bold text-[20px] sm:text-[22px] leading-[1.2] tracking-[-0.01em] text-[color:var(--color-ink-strong)]">
                  {step === "dates" && "Kies een dag"}
                  {step === "times" && "Kies een tijd"}
                  {step === "subject" && "Waar wil je het over hebben?"}
                  {step === "contact" && "Jouw gegevens"}
                  {step === "success" && "Meeting ingepland"}
                </h2>
              </div>
              <button
                onClick={onClose}
                aria-label="Sluiten"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full hover:bg-[color:var(--color-bg-muted)] transition-colors"
              >
                <X className="h-5 w-5 text-[color:var(--color-ink-muted)]" strokeWidth={2.25} />
              </button>
            </div>

            {/* Progress dots (hidden on success) */}
            {step !== "success" && (
              <div className="flex items-center gap-1.5 px-6 sm:px-8 pt-3 pb-2 shrink-0">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className={[
                      "h-1.5 rounded-full transition-all duration-300",
                      i === stepIndex ? "w-8 bg-[color:var(--color-purple)]" : i < stepIndex ? "w-4 bg-[color:var(--color-purple)]/55" : "w-4 bg-[color:var(--color-bg-muted)]",
                    ].join(" ")}
                  />
                ))}
              </div>
            )}

            {/* Body — scrollable */}
            <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.25, ease: EASE }}
                >
                  {step === "dates" && (
                    <div>
                      <p className="text-[14px] text-[color:var(--color-ink-muted)] leading-[1.55]">
                        Leuk dat je een gesprek wilt plannen. Kies hieronder een dag die jou uitkomt, daarna kijken we samen naar een tijdstip. Het gesprek duurt 30 minuten en is geheel vrijblijvend.
                      </p>
                      {loadingDates && (
                        <div className="mt-6 flex items-center gap-2 text-[14px] text-[color:var(--color-ink-muted)]">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Beschikbare dagen laden…
                        </div>
                      )}
                      {datesError && (
                        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[13.5px] text-red-700">
                          {datesError}
                        </div>
                      )}
                      {!loadingDates && !datesError && availableDates.length === 0 && (
                        <div className="mt-6 rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-bg)]/50 px-4 py-3 text-[13.5px] text-[color:var(--color-ink-muted)]">
                          Geen Sales & Meetings-blokken in de komende 30 dagen. Stuur in dat geval een mail naar{" "}
                          <a href="mailto:martijn@webgrowth.company" className="font-semibold text-[color:var(--color-purple)] underline underline-offset-2">
                            martijn@webgrowth.company
                          </a>.
                        </div>
                      )}
                      {availableDates.length > 0 && (
                        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {availableDates.map((iso) => (
                            <button
                              key={iso}
                              onClick={() => {
                                setSelectedDate(iso);
                                setSelectedTime("");
                                setStep("times");
                              }}
                              className={[
                                "group inline-flex items-center justify-between rounded-xl border px-4 py-3 text-left transition-all",
                                selectedDate === iso
                                  ? "border-[color:var(--color-purple)] bg-[color:var(--color-purple-soft)]"
                                  : "border-[color:var(--color-line)] bg-white hover:border-[color:var(--color-purple)]/45 hover:bg-[color:var(--color-purple-soft)]/40",
                              ].join(" ")}
                            >
                              <span className="flex items-center gap-2.5">
                                <Calendar className="h-4 w-4 text-[color:var(--color-purple)]" strokeWidth={2.25} />
                                <span className="text-[14px] font-semibold text-[color:var(--color-ink)] capitalize">
                                  {formatDate(iso)}
                                </span>
                              </span>
                              <ArrowRight className="h-4 w-4 text-[color:var(--color-ink-subtle)] group-hover:text-[color:var(--color-purple)] transition-colors" strokeWidth={2.25} />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {step === "times" && (
                    <div>
                      <p className="text-[14px] text-[color:var(--color-ink-muted)] leading-[1.55]">
                        Top, je hebt{" "}
                        <span className="font-semibold text-[color:var(--color-ink)] capitalize">{formatDate(selectedDate)}</span>{" "}
                        gekozen. Welk tijdstip past het beste? Elk gesprek duurt 30 minuten.
                      </p>
                      {loadingTimes && (
                        <div className="mt-6 flex items-center gap-2 text-[14px] text-[color:var(--color-ink-muted)]">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Tijdsloten laden…
                        </div>
                      )}
                      {timesError && (
                        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[13.5px] text-red-700">
                          {timesError}
                        </div>
                      )}
                      {!loadingTimes && !timesError && availableTimes.length === 0 && (
                        <div className="mt-6 rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-bg)]/50 px-4 py-3 text-[13.5px] text-[color:var(--color-ink-muted)]">
                          Geen vrije sloten op deze dag. Kies een andere dag.
                        </div>
                      )}
                      {availableTimes.length > 0 && (
                        <div className="mt-5 grid grid-cols-3 sm:grid-cols-4 gap-2">
                          {availableTimes.map((time) => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={[
                                "rounded-xl border px-3 py-3 text-[14px] font-semibold tabular-nums transition-all",
                                selectedTime === time
                                  ? "border-[color:var(--color-purple)] bg-[color:var(--color-purple)] text-white"
                                  : "border-[color:var(--color-line)] bg-white text-[color:var(--color-ink)] hover:border-[color:var(--color-purple)]/45 hover:bg-[color:var(--color-purple-soft)]/40",
                              ].join(" ")}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {step === "subject" && (
                    <div>
                      <p className="text-[14px] text-[color:var(--color-ink-muted)] leading-[1.55]">
                        Een korte omschrijving zodat Martijn weet wat de richting is. Geen sales-pitch nodig, gewoon: waar zit je nu, wat wil je verbeteren?
                      </p>
                      <textarea
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Bijvoorbeeld: 'We hebben een verouderde site, willen meer leads en zijn benieuwd of jullie platform past.'"
                        rows={5}
                        className="mt-5 w-full rounded-xl border border-[color:var(--color-line)] bg-white px-4 py-3 text-[14px] leading-[1.55] text-[color:var(--color-ink)] placeholder:text-[color:var(--color-ink-faint)] focus:outline-none focus:border-[color:var(--color-purple)]/55 focus:ring-2 focus:ring-[color:var(--color-purple)]/15 transition-colors resize-none"
                      />
                    </div>
                  )}

                  {step === "contact" && (
                    <div>
                      <p className="text-[14px] text-[color:var(--color-ink-muted)] leading-[1.55]">
                        We sturen een agenda-uitnodiging met Google Meet-link naar je e-mailadres.
                      </p>
                      <div className="mt-5 space-y-3">
                        <FormInput label="Naam" type="text" value={name} onChange={setName} placeholder="Jouw naam" autoComplete="name" />
                        <FormInput label="E-mailadres" type="email" value={email} onChange={setEmail} placeholder="jij@bedrijf.nl" autoComplete="email" inputMode="email" />
                        <FormInput label="Bedrijfsnaam" type="text" value={company} onChange={setCompany} placeholder="Bedrijf B.V." autoComplete="organization" />
                      </div>
                      {submitError && (
                        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[13.5px] text-red-700">
                          {submitError}
                        </div>
                      )}
                    </div>
                  )}

                  {step === "success" && (
                    <div className="text-center py-8">
                      <motion.div
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: EASE }}
                        className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-white shadow-[0_18px_36px_-10px_rgba(16,185,129,0.55)]"
                      >
                        <Check className="h-8 w-8" strokeWidth={2.5} />
                      </motion.div>
                      <h3 className="mt-5 font-[family-name:var(--font-display)] font-bold text-[20px] text-[color:var(--color-ink-strong)]">
                        Top, geregeld!
                      </h3>
                      <p className="mt-2 text-[14.5px] leading-[1.6] text-[color:var(--color-ink-muted)] max-w-md mx-auto">
                        Je hebt een uitnodiging ontvangen in je mailbox voor{" "}
                        <span className="font-semibold text-[color:var(--color-ink)] capitalize">{formatDate(selectedDate)}</span> om{" "}
                        <span className="font-semibold text-[color:var(--color-ink)] tabular-nums">{selectedTime}</span>. Tot dan!
                      </p>
                      {meetingLink && (
                        <a
                          href={meetingLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-line-strong)] bg-white px-5 py-2.5 text-[14px] font-semibold text-[color:var(--color-ink)] hover:border-[color:var(--color-purple)]/45 hover:text-[color:var(--color-purple)] transition-colors"
                        >
                          Open Google Meet-link
                          <ExternalLink className="h-3.5 w-3.5" strokeWidth={2.25} />
                        </a>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer actions */}
            {step !== "success" && (
              <div className="flex items-center justify-between gap-3 px-6 sm:px-8 py-4 border-t border-[color:var(--color-line)] bg-[color:var(--color-bg)]/40 shrink-0">
                <button
                  onClick={() => {
                    if (step === "times") setStep("dates");
                    else if (step === "subject") setStep("times");
                    else if (step === "contact") setStep("subject");
                  }}
                  disabled={step === "dates"}
                  className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13.5px] font-semibold text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)] disabled:opacity-0 disabled:pointer-events-none transition-colors"
                >
                  <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2.5} />
                  Terug
                </button>
                <button
                  onClick={() => {
                    if (step === "dates") {
                      if (selectedDate) setStep("times");
                    } else if (step === "times") {
                      if (selectedTime) setStep("subject");
                    } else if (step === "subject") {
                      if (subject.trim().length > 3) setStep("contact");
                    } else if (step === "contact") {
                      void handleSubmit();
                    }
                  }}
                  disabled={!canGoNext || submitting}
                  className="btn-press group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-[color:var(--color-purple)] hover:bg-[color:var(--color-purple-hover)] text-white text-[14px] font-semibold disabled:opacity-40 disabled:hover:bg-[color:var(--color-purple)] shadow-[0_2px_4px_rgba(98,59,199,0.28),0_14px_28px_-10px_rgba(98,59,199,0.5)] transition-all"
                >
                  {step === "contact" ? (submitting ? "Bezig…" : "Bevestigen") : "Doorgaan"}
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/18 transition-[transform,background-color] duration-200 ease-out group-hover:translate-x-0.5 group-hover:scale-105 group-hover:bg-white/30">
                    {submitting ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />}
                  </span>
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function FormInput({
  label,
  type,
  value,
  onChange,
  placeholder,
  autoComplete,
  inputMode,
}: {
  label: string;
  type: "text" | "email";
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "email";
}) {
  return (
    <label className="block">
      <span className="block text-[12px] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-ink-muted)] mb-1.5">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="w-full rounded-xl border border-[color:var(--color-line)] bg-white px-4 py-2.5 text-[14px] text-[color:var(--color-ink)] placeholder:text-[color:var(--color-ink-faint)] focus:outline-none focus:border-[color:var(--color-purple)]/55 focus:ring-2 focus:ring-[color:var(--color-purple)]/15 transition-colors"
      />
    </label>
  );
}
