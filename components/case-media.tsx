import Image from "next/image";
import type { CaseStudy } from "@/lib/cases";

/**
 * Rendert de case-hero als auto-loopende video (als c.videoSrc gezet is) of als
 * Image. Bedoeld voor alle plekken waar een case-thumbnail of -hero getoond
 * wordt: homepage SectionCases, /cases-overzicht en /cases/[slug].
 *
 * Bij videoSrc wordt c.img als poster gebruikt, zodat er direct iets te zien
 * is voordat de video laadt.
 */
export function CaseMedia({
  c,
  sizes,
  priority,
  className,
  forceImage = false,
}: {
  c: CaseStudy;
  /** Wordt alleen gebruikt op de <Image>-variant. */
  sizes: string;
  /** Wordt alleen gebruikt op de <Image>-variant. */
  priority?: boolean;
  /** Aanvullende classnames voor positie en hover-effect. */
  className?: string;
  /**
   * Forceer de Image-variant ook als c.videoSrc gezet is. Bedoeld voor
   * overzicht-thumbnails (homepage, /cases overview) waar een autoplay-video
   * van enkele MB's de mobile-LCP omlaag trekt. Op de detail-page laten we
   * de video gewoon draaien.
   */
  forceImage?: boolean;
}) {
  const objectPosition = c.imgPosition ?? "center";
  const baseClass = `object-cover ${className ?? ""}`.trim();

  if (c.videoSrc && !forceImage) {
    return (
      // eslint-disable-next-line jsx-a11y/media-has-caption
      <video
        src={c.videoSrc}
        poster={c.img}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className={`absolute inset-0 h-full w-full ${baseClass}`}
        style={{ objectPosition }}
        aria-label={c.imgAlt}
      />
    );
  }

  return (
    <Image
      src={c.img}
      alt={c.imgAlt}
      fill
      sizes={sizes}
      className={baseClass}
      style={{ objectPosition }}
      priority={priority}
    />
  );
}
