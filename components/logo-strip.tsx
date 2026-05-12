const CLIENTS = [
  { name: "Mind Movement", src: "/images/clients/mind-movement.png" },
  { name: "Adalace", src: "/images/clients/adalace.png" },
  { name: "Tornado Rent", src: "/images/clients/tornado-rent.png" },
  { name: "Roll Group", src: "/images/clients/roll-group.webp" },
  { name: "MOL Logistics", src: "/images/clients/mol-logistics.png" },
  { name: "VQ Advocaten", src: "/images/clients/vq-advocaten.webp" },
  { name: "Interdam", src: "/images/clients/interdam.png" },
  { name: "The Africa Experience", src: "/images/clients/the-africa-experience.png" },
];

export function LogoStrip() {
  return (
    <section className="relative px-5 sm:px-8 pt-4 pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ink-subtle)]">
          Al gekozen door ambitieuze organisaties
        </p>
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-9 gap-y-6 sm:gap-x-12">
          {CLIENTS.map((c) => (
            <li key={c.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.src}
                alt={c.name}
                loading="lazy"
                className="h-6 sm:h-7 w-auto object-contain grayscale opacity-55 transition-[filter,opacity] duration-300 ease-out hover:grayscale-0 hover:opacity-100"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
