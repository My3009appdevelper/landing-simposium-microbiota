import { eventData } from "@/data/event-data";
import CountdownTimer from "./CountdownTimer";

export default function HeroSection() {
  const { brand, hero, heroStats } = eventData;

  return (
    <section id="inicio" className="relative overflow-hidden">
      <div
        className="isolate relative flex min-h-[90vh] flex-col justify-center overflow-hidden bg-[#172554] bg-cover bg-center bg-no-repeat px-6 py-24 text-white shadow-[0_40px_80px_rgba(15,23,42,0.35)] sm:px-10 sm:py-28 lg:min-h-[90vh] lg:bg-fixed lg:px-12"
        style={{
          backgroundImage: 'url("/images/hero/hero.jpg")',
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(105deg,rgba(15,23,42,0.74),rgba(23,37,84,0.32)_48%,rgba(34,211,238,0.16)),linear-gradient(to_bottom,rgba(15,23,42,0.16),rgba(15,23,42,0.06)_54%,rgba(15,23,42,0.52))]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto mt-12 w-full max-w-6xl sm:mt-16 lg:mt-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-white/90 drop-shadow-sm">
            {hero.eyebrow}
          </p>
          <h1 className="max-w-5xl text-4xl font-semibold leading-tight drop-shadow-[0_6px_24px_rgba(15,23,42,0.55)] sm:text-5xl md:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-3 text-lg font-medium text-white/95 drop-shadow-sm sm:text-xl">
            {brand.subtitle}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/95 drop-shadow-sm sm:text-lg">
            {hero.intro}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-2xl border border-white/25 bg-white/10 p-4 text-white shadow-lg shadow-black/15 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/16"
              >
                <p className="text-sm uppercase tracking-wider text-white/75">
                  {stat.label}
                </p>
                <p className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-white/78">{stat.description}</p>
              </article>
            ))}
          </div>

          <CountdownTimer variant="hero" />
        </div>
      </div>
    </section>
  );
}
