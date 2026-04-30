"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { format } from "date-fns"
import { nl } from "date-fns/locale"
import { ArrowLeft, Calendar as CalendarIcon, CheckCircle2, ExternalLink, Loader2, X } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import { CtaButton } from "@/components/ui/cta-button"
import { cn } from "@/lib/utils"

type Step = "date" | "details" | "confirm" | "success"

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

type Slot = string

type SuccessPayload = {
  meetingLink: string | null
  htmlLink?: string
}

function dateToKey(d: Date): string {
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

export function KennismakingDialog({ open, onOpenChange }: Props) {
  const [step, setStep] = useState<Step>("date")
  const [availableDates, setAvailableDates] = useState<Set<string>>(new Set())
  const [loadingDates, setLoadingDates] = useState(false)
  const [datesError, setDatesError] = useState<string | null>(null)

  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const [slots, setSlots] = useState<Slot[]>([])
  const [loadingSlots, setLoadingSlots] = useState(false)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [subject, setSubject] = useState("")

  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [successPayload, setSuccessPayload] = useState<SuccessPayload | null>(null)

  const reset = useCallback(() => {
    setStep("date")
    setSelectedDate(undefined)
    setSlots([])
    setSelectedTime(null)
    setName("")
    setEmail("")
    setCompany("")
    setSubject("")
    setSubmitting(false)
    setSubmitError(null)
    setSuccessPayload(null)
  }, [])

  useEffect(() => {
    if (!open) return
    let cancelled = false
    setLoadingDates(true)
    setDatesError(null)
    fetch("/api/kennismaking/availability", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mode: "available-dates" }),
    })
      .then(async (res) => {
        const data = await res.json().catch(() => ({}))
        if (cancelled) return
        if (!res.ok) {
          setDatesError(data.error || "Kon beschikbare dagen niet laden")
          return
        }
        const set = new Set<string>(data.dates || [])
        setAvailableDates(set)
      })
      .catch((err) => {
        if (cancelled) return
        setDatesError(err?.message || "Kon beschikbare dagen niet laden")
      })
      .finally(() => {
        if (!cancelled) setLoadingDates(false)
      })
    return () => {
      cancelled = true
    }
  }, [open])

  const loadSlots = useCallback(async (date: Date) => {
    setLoadingSlots(true)
    setSlots([])
    setSelectedTime(null)
    try {
      const res = await fetch("/api/kennismaking/availability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date: dateToKey(date) }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || "Kon tijden niet laden")
      setSlots(data.slots || [])
    } catch {
      setSlots([])
    } finally {
      setLoadingSlots(false)
    }
  }, [])

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date)
    if (date) loadSlots(date)
  }

  const dateDisabled = useCallback(
    (date: Date) => {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      const cmp = new Date(date)
      cmp.setHours(0, 0, 0, 0)
      if (cmp < today) return true
      if (loadingDates) return true
      if (availableDates.size === 0) return true
      return !availableDates.has(dateToKey(date))
    },
    [availableDates, loadingDates],
  )

  const detailsValid = useMemo(() => {
    return (
      name.trim().length > 1 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) &&
      company.trim().length > 0 &&
      subject.trim().length > 0
    )
  }, [name, email, company, subject])

  const handleClose = (next: boolean) => {
    if (!next) reset()
    onOpenChange(next)
  }

  const handleSubmit = async () => {
    if (!selectedDate || !selectedTime || !detailsValid) return
    setSubmitting(true)
    setSubmitError(null)
    try {
      const firstName = name.trim().split(/\s+/)[0]
      const capitalized = firstName.charAt(0).toUpperCase() + firstName.slice(1)
      const res = await fetch("/api/kennismaking/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: dateToKey(selectedDate),
          time: selectedTime,
          subject: subject.trim(),
          attendeeEmail: email.trim(),
          firstName: capitalized,
          companyName: company.trim(),
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || "Kon kennismaking niet inplannen")
      setSuccessPayload({
        meetingLink: data.meetingLink || null,
        htmlLink: data.htmlLink,
      })
      setStep("success")
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Onbekende fout")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="sm:max-w-3xl p-0 gap-0 border border-white/10 overflow-hidden bg-[#0d0818]"
        showCloseButton={false}
      >
        {/* Header */}
        <div className="relative px-6 pt-6 pb-4 border-b border-white/8">
          <div className="absolute top-0 right-0 w-[300px] h-[200px] rounded-full bg-[#623bc7]/10 blur-[100px] pointer-events-none" />
          <div className="relative flex items-start justify-between gap-4">
            <div>
              <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-2">
                Kennismaking inplannen
              </p>
              <DialogTitle className="font-[family-name:var(--font-gottak)] text-2xl md:text-3xl font-black text-white leading-tight">
                {step === "success" ? (
                  <>Tot snel.</>
                ) : (
                  <>
                    Dertig minuten met{" "}
                    <span
                      style={{
                        background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Martijn.
                    </span>
                  </>
                )}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Plan een kennismaking via Google Meet. Drie stappen.
              </DialogDescription>
            </div>
            <button
              onClick={() => handleClose(false)}
              className="shrink-0 w-8 h-8 rounded-full border border-white/15 text-white/55 hover:text-white hover:border-white/30 flex items-center justify-center transition-colors"
              aria-label="Sluiten"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {step !== "success" && (
            <div className="relative mt-5 flex items-center gap-2">
              {(["date", "details", "confirm"] as const).map((s, i) => {
                const active = step === s
                const past =
                  (step === "details" && s === "date") ||
                  (step === "confirm" && (s === "date" || s === "details"))
                return (
                  <div key={s} className="flex items-center gap-2">
                    <div
                      className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black transition-colors",
                        active && "bg-[#ff0096] text-white",
                        past && "bg-[#623bc7] text-white",
                        !active && !past && "bg-white/8 text-white/45",
                      )}
                    >
                      {i + 1}
                    </div>
                    <span
                      className={cn(
                        "text-xs font-semibold tracking-widest uppercase",
                        active && "text-white",
                        !active && "text-white/40",
                      )}
                    >
                      {s === "date" && "Datum"}
                      {s === "details" && "Details"}
                      {s === "confirm" && "Bevestig"}
                    </span>
                    {i < 2 && <span className="w-6 h-px bg-white/10 mx-1" aria-hidden />}
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Body */}
        <div className="px-6 py-6 max-h-[60vh] overflow-y-auto">
          {step === "date" && (
            <div className="grid md:grid-cols-[auto_1fr] gap-6">
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3 flex items-center justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  disabled={dateDisabled}
                  locale={nl}
                  className="bg-transparent text-white [--cell-size:2.5rem]"
                />
              </div>

              <div className="flex flex-col">
                <p className="text-white/55 text-xs font-semibold tracking-widest uppercase mb-3">
                  Beschikbare tijden
                </p>

                {!selectedDate && (
                  <div className="flex-1 flex items-center justify-center text-center px-4 py-10 rounded-xl border border-dashed border-white/10">
                    <div>
                      <CalendarIcon className="w-6 h-6 text-white/30 mx-auto mb-3" />
                      <p className="text-white/55 text-sm">
                        {loadingDates
                          ? "Beschikbare dagen worden geladen..."
                          : datesError
                            ? datesError
                            : availableDates.size === 0
                              ? "Geen beschikbare dagen op dit moment. Stuur een mailtje naar martijn@webgrowth.company."
                              : "Kies eerst een datum links."}
                      </p>
                    </div>
                  </div>
                )}

                {selectedDate && (
                  <div>
                    <p className="text-white text-sm mb-3">
                      {format(selectedDate, "EEEE d MMMM", { locale: nl })}
                    </p>
                    {loadingSlots ? (
                      <div className="flex items-center gap-2 text-white/55 text-sm">
                        <Loader2 className="w-4 h-4 animate-spin" /> Tijden laden...
                      </div>
                    ) : slots.length === 0 ? (
                      <p className="text-white/55 text-sm">
                        Geen vrije tijden meer op deze dag. Kies een andere datum.
                      </p>
                    ) : (
                      <div className="grid grid-cols-3 gap-2">
                        {slots.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => setSelectedTime(slot)}
                            className={cn(
                              "py-2.5 px-3 rounded-full text-sm font-semibold transition-all duration-200",
                              selectedTime === slot
                                ? "bg-[#ff0096] text-white"
                                : "border border-white/15 text-white/80 hover:border-white/30 hover:text-white",
                            )}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {step === "details" && (
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Naam *" required>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jouw naam"
                  className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder:text-white/40 focus:outline-none focus:border-[#ff0096] transition-colors"
                />
              </Field>
              <Field label="Bedrijfsnaam *" required>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Jouw bedrijf"
                  className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder:text-white/40 focus:outline-none focus:border-[#ff0096] transition-colors"
                />
              </Field>
              <Field label="Email *" required className="sm:col-span-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jij@bedrijf.nl"
                  className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder:text-white/40 focus:outline-none focus:border-[#ff0096] transition-colors"
                />
              </Field>
              <Field label="Wat wil je bespreken? *" required className="sm:col-span-2">
                <textarea
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  rows={3}
                  placeholder="Bijvoorbeeld: vrijblijvend kennismaken, advies over onze huidige website, demo van Forester OS"
                  className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder:text-white/40 focus:outline-none focus:border-[#ff0096] transition-colors resize-none"
                />
              </Field>
            </div>
          )}

          {step === "confirm" && selectedDate && selectedTime && (
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-white/55 text-xs font-semibold tracking-widest uppercase mb-3">
                  Jouw kennismaking
                </p>
                <ul className="space-y-2 text-sm">
                  <Row label="Wanneer">
                    {format(selectedDate, "EEEE d MMMM yyyy", { locale: nl })}, {selectedTime}
                  </Row>
                  <Row label="Duur">30 minuten via Google Meet</Row>
                  <Row label="Met">Martijn Duin (Webgrowth)</Row>
                  <Row label="Voor">{name}, {company}</Row>
                  <Row label="Email">{email}</Row>
                  <Row label="Onderwerp">{subject}</Row>
                </ul>
              </div>
              {submitError && (
                <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
                  {submitError}
                </div>
              )}
            </div>
          )}

          {step === "success" && successPayload && (
            <div className="text-center py-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-5">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>
              <p className="text-white text-lg font-semibold mb-2">Ingepland.</p>
              <p className="text-white/65 text-sm leading-relaxed max-w-md mx-auto mb-6">
                We zien elkaar op {selectedDate && format(selectedDate, "EEEE d MMMM", { locale: nl })} om {selectedTime}. Je krijgt direct een uitnodiging in je inbox met de Google Meet-link.
              </p>
              {successPayload.meetingLink && (
                <a
                  href={successPayload.meetingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#a78bfa] hover:text-white text-sm font-semibold transition-colors"
                >
                  Open Google Meet-link <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {step !== "success" && (
          <div className="px-6 py-4 border-t border-white/8 flex items-center justify-between gap-3 bg-[#0d0818]">
            <button
              onClick={() => {
                if (step === "date") handleClose(false)
                else if (step === "details") setStep("date")
                else if (step === "confirm") setStep("details")
              }}
              className="inline-flex items-center gap-1.5 text-white/55 hover:text-white text-sm font-semibold transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              {step === "date" ? "Annuleren" : "Terug"}
            </button>

            {step === "date" && (
              <button
                disabled={!selectedDate || !selectedTime}
                onClick={() => setStep("details")}
                className="inline-flex items-center justify-center gap-2 bg-[#ff0096] hover:bg-[#e6007f] disabled:bg-white/10 disabled:text-white/40 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 enabled:hover:scale-[1.03]"
              >
                Doorgaan
              </button>
            )}

            {step === "details" && (
              <button
                disabled={!detailsValid}
                onClick={() => setStep("confirm")}
                className="inline-flex items-center justify-center gap-2 bg-[#ff0096] hover:bg-[#e6007f] disabled:bg-white/10 disabled:text-white/40 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 enabled:hover:scale-[1.03]"
              >
                Doorgaan
              </button>
            )}

            {step === "confirm" && (
              <button
                disabled={submitting}
                onClick={handleSubmit}
                className="inline-flex items-center justify-center gap-2 bg-[#ff0096] hover:bg-[#e6007f] disabled:bg-white/10 disabled:text-white/40 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 enabled:hover:scale-[1.03]"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Inplannen...
                  </>
                ) : (
                  "Bevestig kennismaking"
                )}
              </button>
            )}
          </div>
        )}

        {step === "success" && (
          <div className="px-6 py-4 border-t border-white/8 flex justify-end bg-[#0d0818]">
            <CtaButton
              href="/succesverhalen"
              variant="outline"
              className=""
            >
              Bekijk klantcases
            </CtaButton>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

function Field({
  label,
  children,
  className,
}: {
  label: string
  required?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <label className={cn("block", className)}>
      <span className="block text-white/70 text-xs font-semibold mb-1.5">{label}</span>
      {children}
    </label>
  )
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <li className="flex items-baseline gap-3">
      <span className="text-white/45 text-xs uppercase tracking-wider w-20 shrink-0">{label}</span>
      <span className="text-white/85">{children}</span>
    </li>
  )
}
