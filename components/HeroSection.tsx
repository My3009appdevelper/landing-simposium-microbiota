"use client";

import { useEffect, useRef, useState } from "react";
import { eventData } from "@/data/event-data";
import DecorativeBioticsPattern from "./DecorativeBioticsPattern";

type TimeLayerStyle = {
  transform: string;
  willChange: string;
};

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

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default function HeroSection() {
  const { brand, hero, heroStats } = eventData;
  const heroRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId = 0;

    const update = () => {
      const section = heroRef.current;
      if (!section) {
        return;
      }

      const top = section.offsetTop;
      const height = Math.max(section.offsetHeight, 1);
      const delta = (window.scrollY - top) / height;
      setProgress(clamp(delta, 0, 1));
      rafId = 0;
    };

    const handleScroll = () => {
      if (rafId !== 0) return;
      rafId = requestAnimationFrame(update);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const backgroundLayer: TimeLayerStyle = {
    transform: `translate3d(0, ${-progress * 20}px, 0px)`,
    willChange: "transform",
  };

  const frontLayer: TimeLayerStyle = {
    transform: `translate3d(0, ${-progress * 190}px, 0px)`,
    willChange: "transform",
  };

  return (
    <section id="inicio" ref={heroRef} className="relative overflow-hidden">
      <div
        className="isolate relative flex min-h-[86vh] flex-col justify-center overflow-hidden bg-gradient-to-br from-[#D71920] via-[#C8104A] to-[#172554] px-6 py-12 text-white shadow-[0_40px_80px_rgba(15,23,42,0.35)] sm:px-10 lg:min-h-[84vh] lg:px-12"
        style={{ perspective: "1000px" }}
      >
        <div
          className="absolute inset-0 -z-20"
          style={backgroundLayer}
          aria-hidden
        >
          <DecorativeBioticsPattern
            className="pointer-events-none relative h-full w-full"
            density="regular"
          />
        </div>

        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.35),rgba(15,23,42,0.05)_45%,rgba(15,23,42,0.02))]"
          style={backgroundLayer}
          aria-hidden
        />

        <div
          className="relative z-10 mx-auto mt-16 w-full max-w-6xl pt-6 sm:mt-20 sm:pt-8 lg:mt-24"
          style={frontLayer}
        >
          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-5 backdrop-blur-xl sm:p-7">
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
        </div>
      </div>
    </section>
  );
}
