/**
 * Bewegende scènes met Q, ter vervanging van de oude illustraties (Martijn 6-11-2026:
 * "de oude Q mag vervangen worden door animaties van de nieuwe").
 *
 * Alleen SVG en CSS, geen JavaScript: Q wiebelt, knippert en per onderwerp beweegt er iets
 * mee. De stilstaande toestand is het eindbeeld, zodat wie minder beweging wil (of een
 * browser zonder animaties) gewoon een af plaatje ziet.
 *
 * Q is dezelfde tekening als in het merk: een tekstballon met een gezicht, roze rand en
 * een harde schaduw in inkt.
 */

const INKT = "#1a1523";
const ROZE = "#ff0096";
const PAARS = "#623bc7";
const KARTON = "#f5f0e5";
const VEL = "#fffdf8";
const GEEL = "#f5b94a";

const BALLON = "M72 61 A30 30 0 1 0 61 72 L84 84 Z";

export type QSceneNaam =
  | "business-growth"
  | "biz-finance"
  | "communication"
  | "digital-inspiration"
  | "digital-writing"
  | "growth"
  | "innovation-ideas"
  | "multitasking"
  | "not-found"
  | "take-on-the-project"
  | "writing";

/** Q zelf, op (x, y) met breedte w, in een bepaalde stemming. */
function Q({ x, y, w, stemming, id, mond = stemming !== "mist", spiegel = false }: { x: number; y: number; w: number; stemming: "rust" | "denkt" | "klaar" | "mist"; id: string; mond?: boolean; spiegel?: boolean }) {
  const s = w / 90;
  return (
    <g transform={spiegel ? `translate(${x + w} ${y}) scale(${-s} ${s}) translate(-6 -6)` : `translate(${x} ${y}) scale(${s}) translate(-6 -6)`}>
      <g className="qs-wieg">
        <defs>
          <mask id={id} maskUnits="userSpaceOnUse" x="-50" y="-50" width="250" height="250">
            <rect x="-50" y="-50" width="250" height="250" fill="#fff" />
            <path d={BALLON} fill="#000" />
            <path d={BALLON} fill="none" stroke="#000" strokeWidth="15" strokeLinejoin="round" />
          </mask>
        </defs>
        <g mask={`url(#${id})`}>
          <path d={BALLON} transform="translate(5 5)" fill="none" stroke={INKT} strokeWidth="9" strokeLinejoin="round" />
        </g>
        <path d={BALLON} fill={KARTON} />
        <path d={BALLON} fill="none" stroke={stemming === "mist" ? GEEL : ROZE} strokeWidth="9" strokeLinejoin="round" />
        <g className="qs-ogen">
          {stemming === "klaar" ? (
            <>
              <path d="M30 47 Q36 38 42 47" fill="none" stroke={INKT} strokeWidth="6" strokeLinecap="round" />
              <path d="M50 47 Q56 38 62 47" fill="none" stroke={INKT} strokeWidth="6" strokeLinecap="round" />
            </>
          ) : stemming === "mist" ? (
            <>
              <path d="M36 40 V50" stroke={INKT} strokeWidth="7" strokeLinecap="round" />
              <path d="M56 36 V50" stroke={INKT} strokeWidth="7" strokeLinecap="round" />
            </>
          ) : stemming === "denkt" ? (
            <>
              <path d="M41 33 V41" stroke={INKT} strokeWidth="7" strokeLinecap="round" />
              <path d="M59 33 V41" stroke={INKT} strokeWidth="7" strokeLinecap="round" />
            </>
          ) : (
            <>
              <path d="M36 38 V50" stroke={INKT} strokeWidth="7" strokeLinecap="round" />
              <path d="M56 38 V50" stroke={INKT} strokeWidth="7" strokeLinecap="round" />
            </>
          )}
        </g>
        {mond && <path d="M38 58 Q46 64 54 58" fill="none" stroke={INKT} strokeWidth="5" strokeLinecap="round" />}
      </g>
    </g>
  );
}

function Ster({ x, y, r, kleur = GEEL, vertraging = 0 }: { x: number; y: number; r: number; kleur?: string; vertraging?: number }) {
  return (
    <path
      className="qs-ster"
      style={{ animationDelay: `${vertraging}s` }}
      transform={`translate(${x} ${y}) scale(${r / 12})`}
      d="M0 -11 L2 -2 L11 0 L2 2 L0 11 L-2 2 L-11 0 L-2 -2 Z"
      fill={kleur}
      stroke={INKT}
      strokeWidth={1.4}
      strokeLinejoin="round"
    />
  );
}

/** Een vel met harde schaduw, zoals de kaartjes in de huisstijl. */
function Vel({ x, y, w, h, kleur = VEL, className, style }: { x: number; y: number; w: number; h: number; kleur?: string; className?: string; style?: React.CSSProperties }) {
  return (
    <g className={className} style={style}>
      <rect x={x + 6} y={y + 6} width={w} height={h} fill={INKT} />
      <rect x={x} y={y} width={w} height={h} fill={kleur} stroke={INKT} strokeWidth={3.5} />
    </g>
  );
}

const CSS = `
.qs { overflow: visible; }
.qs .qs-wieg { animation: qs-wieg 3.2s ease-in-out infinite; transform-box: fill-box; transform-origin: 50% 100%; }
.qs .qs-ogen { animation: qs-knipper 4.6s infinite; transform-box: fill-box; transform-origin: 50% 50%; }
.qs .qs-ster { animation: qs-glim 2.4s ease-in-out infinite; transform-box: fill-box; transform-origin: 50% 50%; }
.qs .qs-staaf { animation: qs-groei 0.9s cubic-bezier(0.23,1,0.32,1) both; transform-box: fill-box; transform-origin: 50% 100%; }
.qs .qs-staaf-top { animation: qs-groei 0.9s cubic-bezier(0.23,1,0.32,1) both, qs-adem 2.8s ease-in-out 1.4s infinite; transform-box: fill-box; transform-origin: 50% 100%; }
.qs .qs-pijl { stroke-dasharray: 420; animation: qs-teken 6s cubic-bezier(0.23,1,0.32,1) infinite; }
.qs .qs-badge { animation: qs-plop 6s cubic-bezier(0.34,1.56,0.64,1) infinite; transform-box: fill-box; transform-origin: 50% 50%; }
@keyframes qs-wieg { 0%,100% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-6px) rotate(2deg); } }
@keyframes qs-knipper { 0%,90%,96%,100% { transform: scaleY(1); } 93% { transform: scaleY(0.12); } }
@keyframes qs-glim { 0%,100% { transform: scale(1) rotate(0deg); opacity: 1; } 50% { transform: scale(0.6) rotate(20deg); opacity: 0.55; } }
@keyframes qs-groei { from { transform: scaleY(0); } to { transform: scaleY(1); } }
@keyframes qs-adem { 0%,100% { transform: scaleY(1); } 50% { transform: scaleY(1.06); } }
@keyframes qs-teken { 0% { stroke-dashoffset: 420; opacity: 1; } 30%,80% { stroke-dashoffset: 0; opacity: 1; } 92% { stroke-dashoffset: 0; opacity: 0; } 100% { stroke-dashoffset: 420; opacity: 0; } }
@keyframes qs-plop { 0%,24% { transform: scale(0) rotate(-12deg); } 34% { transform: scale(1.12) rotate(6deg); } 40%,80% { transform: scale(1) rotate(6deg); } 90%,100% { transform: scale(0) rotate(6deg); } }
.qs .qs-stapel { animation: qs-groei 0.6s cubic-bezier(0.23,1,0.32,1) both; transform-box: fill-box; transform-origin: 50% 100%; }
.qs .qs-val { animation: qs-val 3.3s cubic-bezier(0.55,0,1,0.45) infinite; opacity: 0; }
.qs .qs-beurt { animation: qs-beurt 4s cubic-bezier(0.34,1.56,0.64,1) infinite; transform-box: fill-box; transform-origin: 20% 100%; }
.qs .qs-typ { animation: qs-typ 1.1s ease-in-out infinite; }
.qs .qs-wiebel { animation: qs-wiebel 2.6s ease-in-out infinite; transform-box: fill-box; transform-origin: 50% 100%; }
.qs .qs-regel { animation: qs-regel 5s cubic-bezier(0.23,1,0.32,1) infinite; transform-box: fill-box; transform-origin: 0 50%; }
.qs .qs-vink { animation: qs-plop 5s cubic-bezier(0.34,1.56,0.64,1) infinite; transform-box: fill-box; transform-origin: 50% 50%; }
.qs .qs-gloed { animation: qs-gloed 2.2s ease-in-out infinite; transform-box: fill-box; transform-origin: 50% 50%; }
.qs .qs-straal { animation: qs-straal 2.2s ease-in-out infinite; }
.qs .qs-draai { animation: qs-draai 7s linear infinite; transform-box: fill-box; transform-origin: 50% 50%; }
.qs .qs-draai-terug { animation: qs-draai 5s linear infinite reverse; transform-box: fill-box; transform-origin: 50% 50%; }
.qs .qs-cursor { animation: qs-cursor 1s steps(1) infinite; }
.qs .qs-schiet { animation: qs-schiet 3.6s cubic-bezier(0.23,1,0.32,1) infinite; }
.qs .qs-vlieg { animation: qs-vlieg 3.6s cubic-bezier(0.45,0,0.55,1) infinite; opacity: 0; }
.qs .qs-vraag { animation: qs-vraag 3s ease-in-out infinite; }
.qs .qs-zoek { animation: qs-zoek 4s ease-in-out infinite; transform-box: fill-box; transform-origin: 50% 100%; }
.qs .qs-schuif { animation: qs-schuif 4.2s cubic-bezier(0.23,1,0.32,1) infinite both; }
.qs .qs-pen { animation: qs-pen 1.4s ease-in-out infinite; }
@keyframes qs-val { 0% { transform: translateY(-120px); opacity: 0; } 12% { opacity: 1; } 55% { transform: translateY(70px); opacity: 1; } 62%,100% { transform: translateY(70px); opacity: 0; } }
@keyframes qs-beurt { 0% { transform: scale(0); } 10%,45% { transform: scale(1); } 55%,100% { transform: scale(0); } }
@keyframes qs-typ { 0%,100% { transform: translateY(0); opacity: 0.45; } 40% { transform: translateY(-5px); opacity: 1; } }
@keyframes qs-wiebel { 0%,100% { transform: rotate(-4deg); } 50% { transform: rotate(4deg); } }
@keyframes qs-regel { 0% { transform: scaleX(0); } 14%,85% { transform: scaleX(1); } 95%,100% { transform: scaleX(0); } }
@keyframes qs-gloed { 0%,100% { transform: scale(0.85); opacity: 0.2; } 50% { transform: scale(1.1); opacity: 0.5; } }
@keyframes qs-straal { 0%,100% { opacity: 0.25; } 50% { opacity: 1; } }
@keyframes qs-draai { to { transform: rotate(360deg); } }
@keyframes qs-cursor { 0%,50% { opacity: 1; } 51%,100% { opacity: 0; } }
@keyframes qs-schiet { 0% { transform: translateX(-160px); opacity: 0; } 8% { opacity: 1; } 28% { transform: translateX(0); } 32% { transform: translateX(-6px); } 36%,85% { transform: translateX(0); opacity: 1; } 100% { transform: translateX(0); opacity: 0; } }
@keyframes qs-vlieg { 0% { transform: translate(0,0) rotate(0deg) scale(0.7); opacity: 0; } 10% { opacity: 1; } 80% { transform: translate(220px,-130px) rotate(14deg) scale(1); opacity: 1; } 100% { transform: translate(250px,-150px) rotate(16deg) scale(1); opacity: 0; } }
@keyframes qs-vraag { 0% { transform: translateY(14px); opacity: 0; } 30%,70% { opacity: 1; } 100% { transform: translateY(-24px); opacity: 0; } }
@keyframes qs-zoek { 0%,100% { transform: rotate(-6deg); } 50% { transform: rotate(6deg); } }
@keyframes qs-schuif { 0% { transform: translate(120px,-40px) rotate(8deg); opacity: 0; } 20%,85% { transform: translate(0,0) rotate(0deg); opacity: 1; } 100% { transform: translate(0,0); opacity: 0; } }
@keyframes qs-pen { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-10px,6px); } }
@media (prefers-reduced-motion: reduce) { .qs * { animation: none !important; } .qs .qs-pijl { stroke-dasharray: none; } .qs .qs-schuif { opacity: 1; } }
`;

/** SEO en groei: staafjes groeien, de pijl tekent omhoog en "#1" ploft erbij. */
function Groei() {
  const staven = [60, 100, 140, 190];
  return (
    <>
      <ellipse cx="200" cy="318" rx="170" ry="14" fill={INKT} opacity="0.07" />
      {staven.map((h, i) => (
        <Vel
          key={i}
          x={196 + i * 46}
          y={300 - h}
          w={32}
          h={h}
          kleur={i === staven.length - 1 ? PAARS : VEL}
          className={i === staven.length - 1 ? "qs-staaf-top" : "qs-staaf"}
          style={{ animationDelay: `${0.15 + i * 0.12}s` }}
        />
      ))}
      <path className="qs-pijl" d="M150 250 C 210 236, 270 190, 362 86" fill="none" stroke={ROZE} strokeWidth="9" strokeLinecap="round" />
      <path className="qs-pijl" d="M334 84 L364 82 L360 112" fill="none" stroke={ROZE} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <g className="qs-badge">
        <circle cx="318" cy="50" r="30" fill={INKT} transform="translate(5 5)" />
        <circle cx="318" cy="50" r="30" fill={ROZE} stroke={INKT} strokeWidth="3.5" />
        <text x="318" y="61" textAnchor="middle" fontFamily="Gottak, sans-serif" fontWeight="700" fontSize="30" fill="#fff">#1</text>
      </g>
      <Q x={20} y={130} w={150} stemming="klaar" id="qs-groei-q" />
      <Ster x={46} y={112} r={12} vertraging={0} />
      <Ster x={176} y={150} r={8} kleur={ROZE} vertraging={0.8} />
      <Ster x={250} y={70} r={10} vertraging={1.4} />
    </>
  );
}


/** Een munt. */
function Munt({ x, y, r = 20, className, style }: { x: number; y: number; r?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <g className={className} style={style}>
      <ellipse cx={x + 4} cy={y + 4} rx={r} ry={r * 0.42} fill={INKT} />
      <ellipse cx={x} cy={y} rx={r} ry={r * 0.42} fill={GEEL} stroke={INKT} strokeWidth={3} />
      <ellipse cx={x} cy={y - 1} rx={r * 0.55} ry={r * 0.2} fill="none" stroke={INKT} strokeWidth={1.6} opacity={0.5} />
    </g>
  );
}

/** Een tekstballon met drie typpuntjes. */
function Praatwolk({ x, y, w = 110, h = 62, kleur = VEL, staart = "links", className, style, puntKleur = INKT }: { x: number; y: number; w?: number; h?: number; kleur?: string; staart?: "links" | "rechts"; className?: string; style?: React.CSSProperties; puntKleur?: string }) {
  const sx = staart === "links" ? x + 18 : x + w - 18;
  const d = staart === "links" ? `M${sx} ${y + h} l-6 18 l22 -18 Z` : `M${sx} ${y + h} l6 18 l-22 -18 Z`;
  return (
    <g className={className} style={style}>
      <rect x={x + 6} y={y + 6} width={w} height={h} rx={18} fill={INKT} />
      <path d={d} transform="translate(6 6)" fill={INKT} />
      <rect x={x} y={y} width={w} height={h} rx={18} fill={kleur} stroke={INKT} strokeWidth={3.5} />
      <path d={d} fill={kleur} stroke={INKT} strokeWidth={3.5} strokeLinejoin="round" />
      <rect x={sx - 12} y={y + h - 4} width={26} height={7} fill={kleur} />
      {[0, 1, 2].map((i) => (
        <circle key={i} className="qs-typ" style={{ animationDelay: `${i * 0.18}s` }} cx={x + w / 2 - 22 + i * 22} cy={y + h / 2} r={6} fill={puntKleur} />
      ))}
    </g>
  );
}

/** Een envelop. */
function Envelop({ x, y, w = 70, className, style }: { x: number; y: number; w?: number; className?: string; style?: React.CSSProperties }) {
  const h = w * 0.64;
  return (
    <g className={className} style={style}>
      <rect x={x + 5} y={y + 5} width={w} height={h} fill={INKT} />
      <rect x={x} y={y} width={w} height={h} fill={VEL} stroke={INKT} strokeWidth={3.2} />
      <path d={`M${x} ${y} L${x + w / 2} ${y + h * 0.58} L${x + w} ${y}`} fill="none" stroke={INKT} strokeWidth={3.2} strokeLinejoin="round" />
      <circle cx={x + w / 2} cy={y + h * 0.58} r={5} fill={ROZE} stroke={INKT} strokeWidth={2} />
    </g>
  );
}

/** Een browservenster met regels die zich vullen. */
function Venster({ x, y, w, h, regels = 4 }: { x: number; y: number; w: number; h: number; regels?: number }) {
  return (
    <g>
      <rect x={x + 7} y={y + 7} width={w} height={h} fill={INKT} />
      <rect x={x} y={y} width={w} height={h} fill={VEL} stroke={INKT} strokeWidth={3.5} />
      <rect x={x} y={y} width={w} height={26} fill={PAARS} stroke={INKT} strokeWidth={3.5} />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={x + 16 + i * 16} cy={y + 13} r={4.5} fill={i === 0 ? ROZE : VEL} stroke={INKT} strokeWidth={1.6} />
      ))}
      {Array.from({ length: regels }).map((_, i) => (
        <rect
          key={i}
          className="qs-regel"
          style={{ animationDelay: `${0.3 + i * 0.45}s` }}
          x={x + 18}
          y={y + 46 + i * 24}
          width={(w - 36) * (i % 3 === 2 ? 0.6 : i % 2 ? 0.85 : 1)}
          height={9}
          rx={4.5}
          fill={i === 0 ? INKT : "#c9c2d6"}
        />
      ))}
    </g>
  );
}

/** Een gloeilamp die oplicht. */
function Lamp({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  const peer = "M0 -30 C 18 -30 28 -16 28 -2 C 28 10 20 16 16 24 L -16 24 C -20 16 -28 10 -28 -2 C -28 -16 -18 -30 0 -30 Z";
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <circle className="qs-gloed" cx="0" cy="0" r="46" fill={GEEL} opacity="0.35" />
      <path d={peer} transform="translate(4 4)" fill={INKT} />
      <path d={peer} fill={GEEL} stroke={INKT} strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M-8 8 L0 -6 L8 8" fill="none" stroke={INKT} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="-14" y="24" width="28" height="12" rx="3" fill={VEL} stroke={INKT} strokeWidth="3.2" />
      <rect x="-10" y="36" width="20" height="8" rx="3" fill={INKT} />
      {[-60, -20, 20, 60].map((a, i) => (
        <path key={i} className="qs-straal" style={{ animationDelay: `${i * 0.15}s` }} d="M0 -44 V -58" stroke={INKT} strokeWidth="4" strokeLinecap="round" transform={`rotate(${a})`} />
      ))}
    </g>
  );
}

/** Een tandwiel dat draait. */
function Tandwiel({ x, y, r = 30, kleur = PAARS, linksom = false }: { x: number; y: number; r?: number; kleur?: string; linksom?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className={linksom ? "qs-draai-terug" : "qs-draai"}>
        {Array.from({ length: 8 }).map((_, i) => (
          <rect key={i} x={-r * 0.2} y={-r * 1.22} width={r * 0.4} height={r * 0.5} rx={3} fill={kleur} stroke={INKT} strokeWidth={3} transform={`rotate(${i * 45})`} />
        ))}
        <circle r={r} fill={kleur} stroke={INKT} strokeWidth={3.5} />
        <circle r={r * 0.38} fill={VEL} stroke={INKT} strokeWidth={3} />
      </g>
    </g>
  );
}

/** Sales: munten vallen op een stapel. */
function Geld() {
  return (
    <>
      <ellipse cx="210" cy="318" rx="170" ry="14" fill={INKT} opacity="0.07" />
      {[0, 1, 2, 3, 4].map((i) => (
        <Munt key={i} x={290} y={292 - i * 18} r={34} className="qs-stapel" style={{ animationDelay: `${i * 0.12}s` }} />
      ))}
      {[0, 1, 2].map((i) => (
        <Munt key={`v${i}`} x={290 + (i - 1) * 14} y={140} r={30} className="qs-val" style={{ animationDelay: `${i * 1.1}s` }} />
      ))}
      <Vel x={196} y={44} w={108} h={52} />
      <text x="250" y="80" textAnchor="middle" fontFamily="Gottak, sans-serif" fontWeight="700" fontSize="30" fill={PAARS}>+ €</text>
      <Q x={24} y={150} w={150} stemming="klaar" id="qs-geld-q" />
      <Ster x={60} y={130} r={12} />
      <Ster x={360} y={120} r={9} kleur={ROZE} vertraging={0.7} />
    </>
  );
}

/** CRM en contact: twee wolkjes praten om beurten. */
function Gesprek() {
  return (
    <>
      <ellipse cx="200" cy="318" rx="170" ry="14" fill={INKT} opacity="0.07" />
      <Praatwolk x={176} y={60} w={130} staart="links" className="qs-beurt" style={{ animationDelay: "0s" }} />
      <Praatwolk x={226} y={160} w={130} staart="rechts" kleur={PAARS} puntKleur={VEL} className="qs-beurt" style={{ animationDelay: "2s" }} />
      <Envelop x={300} y={262} w={64} className="qs-wiebel" />
      <Q x={30} y={150} w={150} stemming="rust" id="qs-gesprek-q" />
      <Ster x={150} y={52} r={10} />
      <Ster x={370} y={130} r={8} kleur={ROZE} vertraging={0.9} />
    </>
  );
}

/** Lead engine: een formulier vult zich, de lamp gaat aan. */
function Inspiratie() {
  return (
    <>
      <ellipse cx="200" cy="318" rx="170" ry="14" fill={INKT} opacity="0.07" />
      <Venster x={176} y={110} w={200} h={160} regels={4} />
      <g className="qs-vink">
        <circle cx="352" cy="110" r="24" transform="translate(5 5)" fill={INKT} />
        <circle cx="352" cy="110" r="24" fill={ROZE} stroke={INKT} strokeWidth="3.5" />
        <path d="M341 110 L349 118 L364 101" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <Lamp x={96} y={66} s={0.85} />
      <Q x={20} y={150} w={150} stemming="denkt" id="qs-insp-q" mond={false} />
      <Ster x={190} y={70} r={10} vertraging={0.4} />
    </>
  );
}

/** Website: Q kijkt naar een site die zich opbouwt. */
function Website() {
  return (
    <>
      <ellipse cx="200" cy="318" rx="170" ry="14" fill={INKT} opacity="0.07" />
      <Venster x={150} y={60} w={226} h={210} regels={6} />
      <rect className="qs-cursor" x="344" y="227" width="4" height="22" fill={ROZE} />
      <Q x={14} y={170} w={146} stemming="klaar" id="qs-web-q" />
      <Ster x={136} y={60} r={11} />
      <Ster x={384} y={290} r={8} kleur={ROZE} vertraging={1.1} />
    </>
  );
}

/** Advertenties: een pijl schiet in de roos. */
function Advertentie() {
  return (
    <>
      <ellipse cx="220" cy="318" rx="160" ry="14" fill={INKT} opacity="0.07" />
      <g transform="translate(290 180)">
        <circle r="96" transform="translate(6 6)" fill={INKT} />
        <circle r="96" fill={VEL} stroke={INKT} strokeWidth="3.5" />
        <circle r="66" fill={ROZE} stroke={INKT} strokeWidth="3.5" />
        <circle r="38" fill={VEL} stroke={INKT} strokeWidth="3.5" />
        <circle r="14" fill={PAARS} stroke={INKT} strokeWidth="3.5" />
      </g>
      <g className="qs-schiet">
        <path d="M150 220 L286 182" stroke={INKT} strokeWidth="7" strokeLinecap="round" />
        <path d="M286 182 l-20 -2 l8 16 Z" fill={INKT} />
        <path d="M150 220 l-16 -14 M150 220 l-6 -20 M158 218 l-16 -14 M158 218 l-6 -20" stroke={PAARS} strokeWidth="5" strokeLinecap="round" />
      </g>
      <Q x={14} y={156} w={140} stemming="klaar" id="qs-ad-q" />
      <Ster x={300} y={62} r={12} />
      <Ster x={388} y={110} r={8} kleur={ROZE} vertraging={0.6} />
    </>
  );
}

/** AI: Q denkt, de lamp gloeit en de tandwielen draaien. */
function Idee() {
  return (
    <>
      <ellipse cx="200" cy="318" rx="170" ry="14" fill={INKT} opacity="0.07" />
      <Tandwiel x={300} y={220} r={44} />
      <Tandwiel x={362} y={152} r={26} kleur={ROZE} linksom />
      <Lamp x={214} y={92} s={1.1} />
      <Q x={22} y={156} w={150} stemming="denkt" id="qs-idee-q" mond={false} />
      <Ster x={120} y={120} r={11} vertraging={0.3} />
      <Ster x={370} y={60} r={9} vertraging={1.2} />
    </>
  );
}

/** Nieuwsbrieven: enveloppen vliegen bij Q vandaan. */
function Nieuwsbrief() {
  return (
    <>
      <ellipse cx="200" cy="318" rx="170" ry="14" fill={INKT} opacity="0.07" />
      <path d="M150 200 C 230 150, 300 120, 380 60" fill="none" stroke={PAARS} strokeWidth="3" strokeDasharray="4 10" strokeLinecap="round" opacity="0.6" />
      {[0, 1, 2].map((i) => (
        <Envelop key={i} x={140} y={180} w={62} className="qs-vlieg" style={{ animationDelay: `${i * 1.2}s` }} />
      ))}
      <Q x={20} y={160} w={146} stemming="klaar" id="qs-nb-q" />
      <Ster x={250} y={250} r={11} />
      <Ster x={350} y={170} r={8} kleur={ROZE} vertraging={0.8} />
    </>
  );
}

/** 404: Q mist iets en kijkt om zich heen. */
function Kwijt() {
  return (
    <>
      <ellipse cx="200" cy="318" rx="150" ry="14" fill={INKT} opacity="0.07" />
      {[0, 1, 2].map((i) => (
        <text key={i} className="qs-vraag" style={{ animationDelay: `${i}s` }} x={230 + i * 50} y={150 - (i % 2) * 30} fontFamily="Gottak, sans-serif" fontWeight="700" fontSize={54 - i * 8} fill={i === 1 ? GEEL : INKT}>
          ?
        </text>
      ))}
      <g className="qs-zoek">
        <Q x={110} y={130} w={170} stemming="mist" id="qs-kwijt-q" />
      </g>
      <Ster x={96} y={120} r={10} />
    </>
  );
}

/** Content publisher: vellen schuiven op een stapel, elk met een vinkje. */
function Publiceren() {
  return (
    <>
      <ellipse cx="220" cy="318" rx="160" ry="14" fill={INKT} opacity="0.07" />
      {[0, 1, 2].map((i) => (
        <g key={i} className="qs-schuif" style={{ animationDelay: `${i * 1.4}s` }}>
          <Vel x={200} y={150 - i * 12} w={150} h={140} />
          {[0, 1, 2, 3].map((j) => (
            <rect key={j} x={218} y={174 - i * 12 + j * 22} width={j === 0 ? 90 : 114} height={8} rx={4} fill={j === 0 ? INKT : "#c9c2d6"} />
          ))}
          <circle cx={330} cy={166 - i * 12} r={15} fill={ROZE} stroke={INKT} strokeWidth={3} />
          <path d={`M323 ${166 - i * 12} l5 5 l9 -10`} fill="none" stroke="#fff" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ))}
      <Q x={20} y={154} w={146} stemming="klaar" id="qs-pub-q" />
      <Ster x={190} y={90} r={11} />
    </>
  );
}

/** Schrijven: een pen schrijft regels op een vel. */
function Schrijven() {
  return (
    <>
      <ellipse cx="220" cy="318" rx="160" ry="14" fill={INKT} opacity="0.07" />
      <Vel x={180} y={70} w={180} h={220} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} className="qs-regel" style={{ animationDelay: `${i * 0.5}s` }} x={200} y={98 + i * 30} width={i === 5 ? 80 : 140} height={8} rx={4} fill={i === 0 ? PAARS : "#c9c2d6"} />
      ))}
      <g className="qs-pen">
        <path d="M262 200 L330 120 l18 -18 l14 14 l-18 18 L276 214 Z" transform="translate(4 4)" fill={INKT} />
        <path d="M262 200 L330 120 l18 -18 l14 14 l-18 18 L276 214 Z" fill={GEEL} stroke={INKT} strokeWidth="3.2" strokeLinejoin="round" />
        <path d="M262 200 L276 214 L256 220 Z" fill={INKT} />
      </g>
      <Q x={20} y={160} w={146} stemming="denkt" id="qs-schrijf-q" mond={false} />
      <Ster x={150} y={80} r={10} vertraging={0.5} />
    </>
  );
}

const SCENES: Record<QSceneNaam, () => React.JSX.Element> = {
  "business-growth": Groei,
  "biz-finance": Geld,
  communication: Gesprek,
  "digital-inspiration": Inspiratie,
  "digital-writing": Website,
  growth: Advertentie,
  "innovation-ideas": Idee,
  multitasking: Nieuwsbrief,
  "not-found": Kwijt,
  "take-on-the-project": Publiceren,
  writing: Schrijven,
};

/** De scène voor een oude illustratie (bestandsnaam zonder .svg), of null als er nog geen is. */
export function qSceneVoor(illustratie: string | undefined): QSceneNaam | null {
  const naam = illustratie?.split("/").pop()?.replace(/\.svg$/, "");
  return naam && naam in SCENES ? (naam as QSceneNaam) : null;
}

export function QScene({ naam, className = "" }: { naam: QSceneNaam; className?: string }) {
  const Scene = SCENES[naam];
  return (
    <svg viewBox="0 0 400 340" className={`qs ${className}`} role="img" aria-hidden>
      <style>{CSS}</style>
      <Scene />
    </svg>
  );
}
