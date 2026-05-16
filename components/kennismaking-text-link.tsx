"use client";

import { useKennismakingModal } from "@/components/kennismaking-modal-provider";

/** Inline tekstlink-stijl trigger voor de kennismaking-modal. Bruikbaar binnen
 *  een lopende zin op server- of client-pagina's. */
export function KennismakingTextLink({
  children = "Boek een kennismaking",
}: {
  children?: React.ReactNode;
}) {
  const { open } = useKennismakingModal();
  return (
    <button
      type="button"
      onClick={open}
      className="font-semibold text-[color:var(--color-purple)] hover:text-[color:var(--color-purple-hover)] transition-colors underline underline-offset-2"
    >
      {children}
    </button>
  );
}
