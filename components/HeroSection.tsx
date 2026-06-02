import { eventData } from "@/data/event-data";
import DecorativeBioticsPattern from "./DecorativeBioticsPattern";

const statAccentStyles = [
  {
    card: "border-[#C8104A]/35 bg-[#FBE8EC]",
    label: "text-[#A10D35]",
    value: "text-[#C8104A]",
  },
  {
    card: "border-[#7E3A9D]/35 bg-[#F3ECFB]",
    label: "text-[#6A2F87]",
    value: "text-[#7E3A9D]",
  },
  {
    card: "border-[#1E40AF]/35 bg-[#E6F0FF]",
    label: "text-[#1E3A8A]",
    value: "text-[#1E40AF]",
  },
] as const;

export default function HeroSection() {
  const { brand, hero, heroStats } = eventData;
  return (
    <section id="inicio" className="relative overflow-hidden">
      <DecorativeBioticsPattern
        className="isolate relative flex min-h-[86vh] flex-col justify-center overflow-hidden bg-gradient-to-br from-[#D71920] via-[#C8104A] to-[#172554] px-6 py-12 text-white shadow-[0_40px_80px_rgba(15,23,42,0.35)] sm:px-10 lg:min-h-[84vh] lg:px-12"
        density="regular"
      >
        <div className="pointer-events-none absolute -left-24 -top-14 h-56 w-96 rounded-full bg-[#22D3EE]/25 blur-3xl md:h-64 md:w-[28rem]" />
        <div className="pointer-events-none absolute right-0 top-8 h-40 w-72 rounded-full bg-white/35 blur-3xl md:h-52 md:w-[24rem]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 left-0 h-full bg-[linear-gradient(to_bottom,rgba(15,23,42,0.2),rgba(15,23,42,0)_40%)]" />

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <p className="mb-4 inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold tracking-wider text-white backdrop-blur">
            {hero.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold leading-tight drop-shadow-sm sm:text-5xl md:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-3 text-lg font-medium text-white/95 drop-shadow-sm sm:text-xl">
            {brand.subtitle}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/95 sm:text-lg">
            {hero.intro}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {heroStats.map((stat, index) => {
              const accent = statAccentStyles[index % statAccentStyles.length];
              return (
                <article
                  key={stat.label}
                  className={`rounded-2xl border p-4 shadow-lg shadow-black/10 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white ${accent.card}`}
                >
                  <p className={`text-sm uppercase tracking-wider ${accent.label}`}>
                    {stat.label}
                  </p>
                  <p className={`mt-1 text-xl font-semibold sm:text-2xl ${accent.value}`}>
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-[#475569]">{stat.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </DecorativeBioticsPattern>
    </section>
  );
}
