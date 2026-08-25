"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookingFlow } from "@/components/booking/booking-flow";
import { captureUtmFromUrl } from "@/lib/utm";
import { fireLeadConversion } from "@/lib/ads-conversion";

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

  // Vang UTM van de landingspagina op (ad-herkomst) voor lead-attributie.
  useEffect(() => { captureUtmFromUrl(); }, []);

  // Luister op een succesvolle APK-inzending uit de Forester-iframe; vuur de
  // Google Ads-conversie af op het marketing-domein (waar de gclid-cookie staat).
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== "https://app.webgrowth.company") return;
      const data = event.data;
      if (data && typeof data === "object" && data.type === "website-scan-submitted") {
        fireLeadConversion();
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <KennismakingCtx.Provider value={{ isOpen, open, close }}>
      {children}
      <KennismakingModal open={isOpen} onClose={close} />
    </KennismakingCtx.Provider>
  );
}

/**
 * De schil om de boekingsflow heen. De stappen zelf staan in BookingFlow, die
 * ook de kick-off en de sprint meeting op hun eigen pagina's aanstuurt.
 */
function KennismakingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  // Escape sluit
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Achtergrond niet mee laten scrollen
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

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
            className="w-full sm:max-w-3xl"
            role="dialog"
            aria-modal="true"
            aria-label="Boek een kennismaking"
          >
            <BookingFlow type="kennismaking" chrome="modal" onClose={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
