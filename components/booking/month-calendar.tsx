"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WEEKDAYS = ["ma", "di", "wo", "do", "vr", "za", "zo"];
const MONTHS = [
  "januari", "februari", "maart", "april", "mei", "juni",
  "juli", "augustus", "september", "oktober", "november", "december",
];

/** YYYY-MM-DD uit losse delen, zonder tijdzone-omweg (anders schuift de dag). */
function keyOf(year: number, month: number, day: number): string {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

/** Aantal lege cellen vóór de 1e, met maandag als eerste kolom. */
function leadingBlanks(year: number, month: number): number {
  const jsDay = new Date(year, month, 1).getDay(); // 0 = zondag
  return (jsDay + 6) % 7;
}

function monthIndex(year: number, month: number): number {
  return year * 12 + month;
}

export function MonthCalendar({
  availableDates,
  selected,
  onSelect,
  disabled = false,
}: {
  availableDates: string[];
  selected: string;
  onSelect: (iso: string) => void;
  disabled?: boolean;
}) {
  const available = useMemo(() => new Set(availableDates), [availableDates]);

  const today = useMemo(() => new Date(), []);
  const [cursor, setCursor] = useState({ y: today.getFullYear(), m: today.getMonth() });

  // Zodra de beschikbare dagen binnen zijn: spring naar de eerste maand waar
  // écht iets vrij is. Anders opent de kalender op een lege huidige maand.
  useEffect(() => {
    if (availableDates.length === 0) return;
    const first = availableDates[0];
    const y = Number(first.slice(0, 4));
    const m = Number(first.slice(5, 7)) - 1;
    setCursor((prev) =>
      monthIndex(y, m) > monthIndex(prev.y, prev.m) ? { y, m } : prev,
    );
  }, [availableDates]);

  const { bounds, cells } = useMemo(() => {
    const indices = availableDates.map((d) => monthIndex(Number(d.slice(0, 4)), Number(d.slice(5, 7)) - 1));
    const min = Math.min(monthIndex(today.getFullYear(), today.getMonth()), ...(indices.length ? indices : [Infinity]));
    const max = Math.max(monthIndex(today.getFullYear(), today.getMonth()), ...(indices.length ? indices : [-Infinity]));

    const total = new Date(cursor.y, cursor.m + 1, 0).getDate();
    const list: (string | null)[] = Array.from({ length: leadingBlanks(cursor.y, cursor.m) }, () => null);
    for (let d = 1; d <= total; d++) list.push(keyOf(cursor.y, cursor.m, d));
    return { bounds: { min, max }, cells: list };
  }, [cursor, availableDates, today]);

  const current = monthIndex(cursor.y, cursor.m);
  const canPrev = current > bounds.min;
  const canNext = current < bounds.max;

  const shift = (delta: number) => {
    setCursor((prev) => {
      const next = new Date(prev.y, prev.m + delta, 1);
      return { y: next.getFullYear(), m: next.getMonth() };
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => shift(-1)}
          disabled={!canPrev}
          aria-label="Vorige maand"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--color-line)] bg-white text-[color:var(--color-ink)] transition-colors hover:border-[color:var(--color-purple)]/45 hover:text-[color:var(--color-purple)] disabled:opacity-30 disabled:pointer-events-none"
        >
          <ChevronLeft className="h-4 w-4" strokeWidth={2.4} />
        </button>
        <span className="text-[14.5px] font-semibold text-[color:var(--color-ink-strong)] capitalize tabular-nums">
          {MONTHS[cursor.m]} {cursor.y}
        </span>
        <button
          type="button"
          onClick={() => shift(1)}
          disabled={!canNext}
          aria-label="Volgende maand"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--color-line)] bg-white text-[color:var(--color-ink)] transition-colors hover:border-[color:var(--color-purple)]/45 hover:text-[color:var(--color-purple)] disabled:opacity-30 disabled:pointer-events-none"
        >
          <ChevronRight className="h-4 w-4" strokeWidth={2.4} />
        </button>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1 text-center">
        {WEEKDAYS.map((d) => (
          <span
            key={d}
            className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-ink-faint)]"
          >
            {d}
          </span>
        ))}
      </div>

      <div className="mt-1.5 grid grid-cols-7 gap-1">
        {cells.map((iso, i) => {
          if (!iso) return <span key={`blank-${i}`} />;
          const isAvailable = available.has(iso);
          const isSelected = selected === iso;
          const day = Number(iso.slice(8, 10));
          return (
            <button
              key={iso}
              type="button"
              onClick={() => isAvailable && onSelect(iso)}
              disabled={!isAvailable || disabled}
              aria-pressed={isSelected}
              className={[
                "aspect-square rounded-xl text-[14px] font-semibold tabular-nums transition-all",
                isSelected
                  ? "bg-[color:var(--color-purple)] text-white shadow-[0_10px_22px_-10px_rgba(98,59,199,0.75)]"
                  : isAvailable
                    ? "bg-[color:var(--color-purple-soft)] text-[color:var(--color-purple)] hover:bg-[color:var(--color-purple-tint)]"
                    : "text-[color:var(--color-ink-faint)] cursor-default",
              ].join(" ")}
            >
              {day}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11.5px] text-[color:var(--color-ink-subtle)]">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-[4px] bg-[color:var(--color-purple-tint)]" />
          Vrij
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-[4px] bg-[color:var(--color-purple)]" />
          Gekozen
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-[4px] bg-[color:var(--color-bg-muted)]" />
          Vol of dicht
        </span>
      </div>
    </div>
  );
}
