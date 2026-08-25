"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CalendarDays, Check, Clock, ExternalLink, Loader2, X } from "lucide-react";
import { MonthCalendar } from "./month-calendar";
import { BOOKING_TYPES, type BookingTypeId } from "./meeting-types";
import { getStoredUtm } from "@/lib/utm";
import { fireLeadConversion } from "@/lib/ads-conversion";

const EASE = [0.23, 1, 0.32, 1] as const;

type Step = "when" | "subject" | "contact" | "success";
const ORDER: Step[] = ["when", "subject", "contact"];

function formatDate(iso: string): string {
  if (!iso) return "";
  return new Date(`${iso}T12:00:00`).toLocaleDateString("nl-NL", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

/**
 * De boekingsflow van alle drie de afspraaktypes: dag én tijd op één scherm,
 * daarna het onderwerp en de gegevens.
 *
 * `chrome="modal"` levert de kop met sluitknop voor de kennismaking-modal,
 * `chrome="inline"` dezelfde flow als kaart op een eigen pagina.
 */
export function BookingFlow({
  type,
  chrome = "inline",
  onClose,
}: {
  type: BookingTypeId;
  chrome?: "modal" | "inline";
  onClose?: () => void;
}) {
  const cfg = BOOKING_TYPES[type];

  const [step, setStep] = useState<Step>("when");

  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [loadingDates, setLoadingDates] = useState(true);
  const [datesError, setDatesError] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState("");

  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [loadingTimes, setLoadingTimes] = useState(false);
  const [timesError, setTimesError] = useState<string | null>(null);
  const [timesReason, setTimesReason] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState("");

  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [meetingLink, setMeetingLink] = useState<string | null>(null);

  // Beschikbare dagen ophalen zodra de flow op het scherm staat.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoadingDates(true);
      setDatesError(null);
      try {
        const res = await fetch(cfg.availabilityUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mode: "available-dates" }),
        });
        if (!res.ok) throw new Error("Beschikbare dagen konden niet geladen worden");
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
  }, [cfg.availabilityUrl]);

  // Tijden ophalen bij een gekozen dag.
  useEffect(() => {
    if (!selectedDate) return;
    let cancelled = false;
    (async () => {
      setLoadingTimes(true);
      setTimesError(null);
      setTimesReason(null);
      setAvailableTimes([]);
      try {
        const res = await fetch(cfg.availabilityUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ date: selectedDate }),
        });
        if (!res.ok) throw new Error("Tijdsloten konden niet geladen worden");
        const data = await res.json();
        if (!cancelled) {
          setAvailableTimes(data.slots ?? []);
          setTimesReason(data.reason ?? null);
        }
      } catch (err) {
        if (!cancelled) setTimesError(err instanceof Error ? err.message : "Onbekende fout");
      } finally {
        if (!cancelled) setLoadingTimes(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [selectedDate, cfg.availabilityUrl]);

  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch(cfg.createUrl, {
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
          ...(cfg.tracksConversion ? { utm: getStoredUtm() } : {}),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Kon de afspraak niet inplannen");
      if (cfg.tracksConversion) {
        // Analytics mag de bevestiging nooit blokkeren.
        try {
          (window as unknown as { fathom?: { trackEvent?: (n: string) => void } }).fathom?.trackEvent?.(
            "Lead engine: Kennismaking",
          );
        } catch {
          /* stil */
        }
        fireLeadConversion();
      }
      setMeetingLink(data.meetingLink ?? null);
      setStep("success");
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Onbekende fout");
    } finally {
      setSubmitting(false);
    }
  };

  const stepIndex = ORDER.indexOf(step as (typeof ORDER)[number]);
  const canGoNext = (() => {
    if (step === "when") return !!selectedDate && !!selectedTime;
    if (step === "subject") return subject.trim().length > 3;
    if (step === "contact")
      return !!name.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !!company.trim();
    return false;
  })();

  const goBack = () => {
    if (step === "subject") setStep("when");
    else if (step === "contact") setStep("subject");
  };

  const goNext = () => {
    if (step === "when" && selectedDate && selectedTime) setStep("subject");
    else if (step === "subject" && subject.trim().length > 3) setStep("contact");
    else if (step === "contact") void handleSubmit();
  };

  const isModal = chrome === "modal";

  return (
    <div
      className={[
        "flex flex-col bg-white overflow-hidden",
        isModal
          ? "relative w-full sm:max-w-3xl max-h-[92vh] sm:max-h-[88vh] rounded-t-3xl sm:rounded-3xl shadow-[0_30px_80px_-20px_rgba(12,6,18,0.5)]"
          : "relative w-full rounded-3xl border border-[color:var(--color-line)] shadow-[0_24px_60px_-30px_rgba(12,6,18,0.35)]",
      ].join(" ")}
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
            {cfg.eyebrow}
          </div>
          <h2 className="mt-1 font-[family-name:var(--font-display)] font-bold text-[20px] sm:text-[22px] leading-[1.2] tracking-[-0.01em] text-[color:var(--color-ink-strong)]">
            {step === "success" ? cfg.title.success : cfg.title[step]}
          </h2>
        </div>
        {isModal && onClose && (
          <button
            onClick={onClose}
            aria-label="Sluiten"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full hover:bg-[color:var(--color-bg-muted)] transition-colors"
          >
            <X className="h-5 w-5 text-[color:var(--color-ink-muted)]" strokeWidth={2.25} />
          </button>
        )}
      </div>

      {/* Voortgang */}
      {step !== "success" && (
        <div className="flex items-center gap-1.5 px-6 sm:px-8 pt-3 pb-2 shrink-0">
          {ORDER.map((s, i) => (
            <span
              key={s}
              className={[
                "h-1.5 rounded-full transition-all duration-300",
                i === stepIndex
                  ? "w-8 bg-[color:var(--color-purple)]"
                  : i < stepIndex
                    ? "w-4 bg-[color:var(--color-purple)]/55"
                    : "w-4 bg-[color:var(--color-bg-muted)]",
              ].join(" ")}
            />
          ))}
          <span className="ml-2 text-[11.5px] font-medium text-[color:var(--color-ink-faint)]">
            Stap {stepIndex + 1} van {ORDER.length}
          </span>
        </div>
      )}

      {/* Body */}
      <div className={["flex-1 px-6 sm:px-8 py-5", isModal ? "overflow-y-auto" : ""].join(" ")}>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            {step === "when" && (
              <div>
                <p className="text-[14px] text-[color:var(--color-ink-muted)] leading-[1.55]">
                  {cfg.intro}
                </p>

                {datesError && (
                  <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[13.5px] text-red-700">
                    {datesError}
                  </div>
                )}

                {!datesError && !loadingDates && availableDates.length === 0 && (
                  <div className="mt-6 rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-bg)]/50 px-4 py-3 text-[13.5px] text-[color:var(--color-ink-muted)]">
                    {cfg.emptyState}
                  </div>
                )}

                {!datesError && (loadingDates || availableDates.length > 0) && (
                  <div className="mt-5 grid gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] sm:gap-8">
                    {/* Kalender */}
                    <div>
                      {loadingDates ? (
                        <div className="flex items-center gap-2 py-10 text-[14px] text-[color:var(--color-ink-muted)]">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Beschikbare dagen laden…
                        </div>
                      ) : (
                        <MonthCalendar
                          availableDates={availableDates}
                          selected={selectedDate}
                          onSelect={(iso) => {
                            setSelectedDate(iso);
                            setSelectedTime("");
                          }}
                        />
                      )}
                    </div>

                    {/* Tijden */}
                    <div className="sm:border-l sm:border-[color:var(--color-line)] sm:pl-8">
                      <div className="flex items-center gap-2 text-[13px] font-semibold text-[color:var(--color-ink)]">
                        <Clock className="h-4 w-4 text-[color:var(--color-purple)]" strokeWidth={2.25} />
                        {cfg.meta}
                      </div>
                      <div className="mt-4 h-px bg-[color:var(--color-line)]" />

                      {!selectedDate && (
                        <p className="mt-4 text-[13.5px] leading-[1.55] text-[color:var(--color-ink-subtle)]">
                          Kies eerst een dag in de kalender, dan verschijnen hier de vrije tijden.
                        </p>
                      )}

                      {selectedDate && (
                        <>
                          <div className="mt-4 flex items-center gap-2">
                            <CalendarDays className="h-4 w-4 text-[color:var(--color-purple)]" strokeWidth={2.25} />
                            <span className="text-[14px] font-semibold first-letter:uppercase text-[color:var(--color-ink-strong)]">
                              {formatDate(selectedDate)}
                            </span>
                          </div>

                          {loadingTimes && (
                            <div className="mt-4 flex items-center gap-2 text-[13.5px] text-[color:var(--color-ink-muted)]">
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Tijden laden…
                            </div>
                          )}

                          {timesError && (
                            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[13.5px] text-red-700">
                              {timesError}
                            </div>
                          )}

                          {!loadingTimes && !timesError && availableTimes.length === 0 && (
                            <p className="mt-4 text-[13.5px] leading-[1.55] text-[color:var(--color-ink-muted)]">
                              {timesReason || "Geen vrije tijden op deze dag."} Kies een andere dag.
                            </p>
                          )}

                          {availableTimes.length > 0 && (
                            <div className="mt-4 grid grid-cols-3 gap-2">
                              {availableTimes.map((time) => (
                                <button
                                  key={time}
                                  type="button"
                                  onClick={() => setSelectedTime(time)}
                                  className={[
                                    "rounded-xl border px-2 py-2.5 text-[14px] font-semibold tabular-nums transition-all",
                                    selectedTime === time
                                      ? "border-[color:var(--color-purple)] bg-[color:var(--color-purple)] text-white"
                                      : "border-[color:var(--color-line)] bg-white text-[color:var(--color-ink)] hover:border-[color:var(--color-purple)]/45 hover:bg-[color:var(--color-purple-soft)]",
                                  ].join(" ")}
                                >
                                  {time}
                                </button>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {step === "subject" && (
              <div>
                <p className="text-[14px] text-[color:var(--color-ink-muted)] leading-[1.55]">
                  {cfg.subjectIntro}
                </p>
                <label className="sr-only" htmlFor="booking-subject">
                  {cfg.subjectLabel}
                </label>
                <textarea
                  id="booking-subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder={cfg.subjectPlaceholder}
                  rows={5}
                  className="mt-5 w-full rounded-xl border border-[color:var(--color-line)] bg-white px-4 py-3 text-[14px] leading-[1.55] text-[color:var(--color-ink)] placeholder:text-[color:var(--color-ink-faint)] focus:outline-none focus:border-[color:var(--color-purple)]/55 focus:ring-2 focus:ring-[color:var(--color-purple)]/15 transition-colors resize-none"
                />
              </div>
            )}

            {step === "contact" && (
              <div>
                <p className="text-[14px] text-[color:var(--color-ink-muted)] leading-[1.55]">
                  {cfg.contactIntro}
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
                  <span className="font-semibold first-letter:uppercase text-[color:var(--color-ink)]">
                    {formatDate(selectedDate)}
                  </span>{" "}
                  om{" "}
                  <span className="font-semibold tabular-nums text-[color:var(--color-ink)]">{selectedTime}</span>. Tot dan!
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

      {/* Footer */}
      {step !== "success" && (
        <div className="flex items-center justify-between gap-3 px-6 sm:px-8 py-4 border-t border-[color:var(--color-line)] bg-[color:var(--color-bg)]/40 shrink-0">
          <button
            type="button"
            onClick={goBack}
            disabled={step === "when"}
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13.5px] font-semibold text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)] disabled:opacity-0 disabled:pointer-events-none transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2.5} />
            Terug
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={!canGoNext || submitting}
            className="btn-press group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-[color:var(--color-purple)] hover:bg-[color:var(--color-purple-hover)] text-white text-[14px] font-semibold disabled:opacity-40 disabled:hover:bg-[color:var(--color-purple)] shadow-[0_2px_4px_rgba(98,59,199,0.28),0_14px_28px_-10px_rgba(98,59,199,0.5)] transition-all"
          >
            {step === "contact" ? (submitting ? "Bezig…" : "Bevestigen") : "Doorgaan"}
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/18 transition-[transform,background-color] duration-200 ease-out group-hover:translate-x-0.5 group-hover:scale-105 group-hover:bg-white/30">
              {submitting ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              )}
            </span>
          </button>
        </div>
      )}
    </div>
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
