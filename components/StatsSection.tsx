import { eventData } from "@/data/event-data";
import SectionHeader from "./SectionHeader";

export default function StatsSection() {
  return (
    <section className="mx-auto mt-16 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Números del simposium"
        title="Highlights de la jornada"
        description="Indicadores de alcance y formato de esta edición académica."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {eventData.highlights.map((item) => (
          <article
            key={item.label}
            className="symbi-card rounded-3xl p-6 shadow-sm transition hover:translate-y-[-4px] hover:shadow-md"
          >
            <p className="text-4xl font-semibold text-[#C8104A]">{item.value}</p>
            <p className="mt-3 text-lg font-semibold text-[#0F172A]">{item.label}</p>
            <p className="mt-2 text-sm leading-6 text-[#475569]">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
