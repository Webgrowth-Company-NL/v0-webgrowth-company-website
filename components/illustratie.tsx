import Image from "next/image";
import { QScene, qSceneVoor } from "@/components/q-scene";

/**
 * Een illustratie op de site. Is er een bewegende Q-scène voor (zie q-scene.tsx), dan die;
 * anders het oude plaatje. Zo vervangt de nieuwe Q de oude illustraties overal tegelijk.
 */
export function Illustratie({ src, className, priority }: { src: string; className?: string; priority?: boolean }) {
  const naam = qSceneVoor(src);
  if (naam) return <QScene naam={naam} className={className} />;
  return <Image src={src} alt="" width={520} height={520} className={className} priority={priority} />;
}
