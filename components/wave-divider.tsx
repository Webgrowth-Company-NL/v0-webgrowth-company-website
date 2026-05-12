/**
 * Wavy transition between two stacked sections (tikkie-style).
 * `top` = color of the section above, `bottom` = color of the section below.
 * Render between two sections in the page flow.
 */
export function WaveDivider({
  top,
  bottom,
  height = "h-14 sm:h-20 lg:h-28",
}: {
  top: string;
  bottom: string;
  height?: string;
}) {
  return (
    <div className={`relative w-full ${height}`} style={{ backgroundColor: top }} aria-hidden>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        focusable="false"
      >
        <path
          d="M0 58 C 200 96 380 18 600 50 C 800 80 980 22 1200 54 C 1320 70 1390 44 1440 56 L 1440 120 L 0 120 Z"
          fill={bottom}
        />
      </svg>
    </div>
  );
}
