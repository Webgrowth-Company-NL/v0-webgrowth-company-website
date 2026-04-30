"use client"

import { createContext, useCallback, useContext, useState, type ReactNode } from "react"
import { KennismakingDialog } from "@/components/kennismaking-dialog"

type Ctx = {
  open: () => void
}

const KennismakingContext = createContext<Ctx | null>(null)

export function KennismakingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])

  return (
    <KennismakingContext.Provider value={{ open }}>
      {children}
      <KennismakingDialog open={isOpen} onOpenChange={setIsOpen} />
    </KennismakingContext.Provider>
  )
}

export function useKennismaking(): Ctx | null {
  return useContext(KennismakingContext)
}
