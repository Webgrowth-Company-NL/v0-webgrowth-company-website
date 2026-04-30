"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"
import { useKennismaking } from "@/components/kennismaking-provider"

export type CtaVariant = "primary" | "secondary" | "outline"

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-200"

const sizeClasses = {
  md: "px-5 py-2.5",
  sm: "px-4 py-2",
}

const variantClasses: Record<CtaVariant, string> = {
  primary:
    "bg-[#ff0096] hover:bg-[#e6007f] text-white hover:scale-[1.03]",
  secondary:
    "bg-[#623bc7] hover:bg-[#7c5be0] text-white hover:scale-[1.03]",
  outline:
    "border border-white/20 hover:border-white/40 text-white/85 hover:text-white bg-transparent",
}

type Props = {
  href: string
  children: ReactNode
  variant?: CtaVariant
  size?: keyof typeof sizeClasses
  external?: boolean
  withIcon?: boolean
  className?: string
}

const KENNISMAKING_HREFS = new Set([
  "/contact",
  "/contact?plan=core",
  "/contact?plan=growth",
  "/contact?plan=scale",
])

export function CtaButton({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  withIcon,
  className,
}: Props) {
  const ctx = useKennismaking()
  const showIcon = withIcon ?? variant !== "outline"
  const classes = cn(base, sizeClasses[size], variantClasses[variant], className)

  const isKennismaking = KENNISMAKING_HREFS.has(href) && ctx !== null

  const content = (
    <>
      <span>{children}</span>
      {showIcon && <ArrowRight className="w-4 h-4" />}
    </>
  )

  if (isKennismaking) {
    return (
      <button
        type="button"
        onClick={ctx.open}
        className={classes}
      >
        {content}
      </button>
    )
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  )
}
