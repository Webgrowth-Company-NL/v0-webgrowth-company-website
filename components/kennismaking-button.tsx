"use client";

import { ArrowRight } from "lucide-react";
import { useKennismakingModal } from "@/components/kennismaking-modal-provider";

type Variant = "primary" | "secondary" | "secondary-on-dark" | "full" | "inline";

const VARIANTS: Record<Variant, { wrapper: string; arrowWrapper: string; arrowColor?: string }> = {
  primary: {
    wrapper:
      "btn-press group inline-flex items-center gap-2 pl-6 pr-2 py-2.5 rounded-full bg-[color:var(--color-purple)] hover:bg-[color:var(--color-purple-hover)] text-white text-[15px] font-semibold shadow-[0_2px_4px_rgba(98,59,199,0.28),0_18px_40px_-12px_rgba(98,59,199,0.55)] hover:shadow-[0_8px_18px_rgba(98,59,199,0.36),0_28px_56px_-12px_rgba(98,59,199,0.78)]",
    arrowWrapper:
      "inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/18 transition-[transform,background-color] duration-200 ease-out group-hover:translate-x-0.5 group-hover:scale-105 group-hover:bg-white/30",
  },
  secondary: {
    wrapper:
      "btn-press group inline-flex items-center gap-2 pl-6 pr-2 py-2.5 rounded-full bg-white hover:bg-[color:var(--color-purple-soft)] border border-[color:var(--color-line-strong)] hover:border-[color:var(--color-purple)]/35 text-[color:var(--color-ink)] hover:text-[color:var(--color-purple)] text-[15px] font-semibold shadow-[0_1px_2px_rgba(12,6,18,0.04)] hover:shadow-[0_10px_24px_-10px_rgba(98,59,199,0.3)]",
    arrowWrapper:
      "inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-ink-strong)]/6 transition-[transform,background-color] duration-200 ease-out group-hover:translate-x-0.5 group-hover:scale-105 group-hover:bg-[color:var(--color-purple)]/15",
    arrowColor: "text-[color:var(--color-ink)] group-hover:text-[color:var(--color-purple)]",
  },
  "secondary-on-dark": {
    wrapper:
      "btn-press group inline-flex items-center gap-2 pl-6 pr-2 py-2 rounded-full bg-white/[0.08] hover:bg-white/[0.14] backdrop-blur-sm border border-white/20 hover:border-white/30 text-white text-[14.5px] font-semibold",
    arrowWrapper:
      "inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/12 transition-[transform,background-color] duration-200 ease-out group-hover:translate-x-0.5 group-hover:scale-105 group-hover:bg-white/20",
  },
  full: {
    wrapper:
      "btn-press group inline-flex items-center justify-between gap-2 w-full pl-5 pr-2 py-2.5 rounded-full bg-[color:var(--color-purple)] hover:bg-[color:var(--color-purple-hover)] text-white text-[15px] font-semibold shadow-[0_2px_4px_rgba(98,59,199,0.28),0_18px_40px_-12px_rgba(98,59,199,0.55)] hover:shadow-[0_8px_18px_rgba(98,59,199,0.36),0_28px_56px_-12px_rgba(98,59,199,0.78)]",
    arrowWrapper:
      "inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/18 transition-[transform,background-color] duration-200 ease-out group-hover:translate-x-0.5 group-hover:scale-105 group-hover:bg-white/30",
  },
  inline: {
    wrapper:
      "btn-press inline-flex items-center px-6 py-3 rounded-full border border-white/25 hover:border-white/45 hover:bg-white/5 text-white text-[15px] font-semibold transition-colors",
    arrowWrapper: "",
  },
};

/** Click-trigger voor de kennismaking-modal, vervangt overal `<Link href="/contact">Boek een kennismaking</Link>`. */
export function KennismakingButton({
  variant = "primary",
  label = "Boek een kennismaking",
  className,
}: {
  variant?: Variant;
  label?: string;
  className?: string;
}) {
  const { open } = useKennismakingModal();
  const v = VARIANTS[variant];
  const showArrow = variant !== "inline";

  return (
    <button
      type="button"
      onClick={open}
      className={[v.wrapper, className ?? ""].join(" ")}
    >
      {label}
      {showArrow && (
        <span className={v.arrowWrapper}>
          <ArrowRight className={`h-4 w-4 ${v.arrowColor ?? ""}`} strokeWidth={2.5} />
        </span>
      )}
    </button>
  );
}
