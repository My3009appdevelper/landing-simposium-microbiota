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
            className="w-full max-w-sm rounded-3xl border border-[rgba(15,23,42,0.12)] bg-[rgba(255,255,255,0.97)] p-6 text-center shadow-sm transition hover:translate-y-[-4px] hover:border-[#D71920]/60 hover:shadow-md"
          >
            <p className="text-4xl font-semibold text-[#C8104A]">{item.value}</p>
            <p className="mt-3 text-lg font-semibold text-[#0F172A]">{item.label}</p>
          </article>
        ))}
      </div>
      <div className="grid justify-items-center gap-8 md:grid-cols-2">
        {eventData.about.modalityCards.map((card) => (
          <article
            key={card.title}
            className="w-full rounded-3xl border border-white bg-white/90 p-6 text-base leading-7 text-[#475569] shadow-sm"
          >
            <strong className="block text-lg font-semibold text-[#0F172A]">
              {card.title}
            </strong>
            <p className="mt-2 text-justify">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
