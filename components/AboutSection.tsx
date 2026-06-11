import { eventData } from "@/data/event-data";
import SectionHeader from "./SectionHeader";

export default function AboutSection() {
  return (
    <section id="acerca" className="mx-auto mt-16 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Qué es"
        title={eventData.about.title}
        description={eventData.about.description}
      />
      <div className="mb-8 grid justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {eventData.highlights.map((item) => (
          <article
            key={item.label}
            className="symbi-card w-full max-w-sm rounded-3xl p-6 text-center shadow-sm transition hover:translate-y-[-4px] hover:shadow-md"
          >
            <p className="text-4xl font-semibold text-[#C8104A]">{item.value}</p>
            <p className="mt-3 text-lg font-semibold text-[#0F172A]">{item.label}</p>
          </article>
        ))}
      </div>
      <div className="grid justify-items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <p className="w-full rounded-3xl border border-white bg-white/90 p-6 text-justify text-base leading-7 text-[#475569] shadow-sm">
          {eventData.audience}
        </p>
        <ul className="w-full symbi-card-subtle grid gap-3 rounded-3xl border border-white bg-white/95 p-6 text-justify shadow-sm">
          {eventData.about.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 text-justify text-sm text-[#0F172A]">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#22D3EE]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
