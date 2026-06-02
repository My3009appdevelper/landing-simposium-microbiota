import { eventData } from "@/data/event-data";
import SectionHeader from "./SectionHeader";

export default function TopicsSection() {
  return (
    <section
      id="temas"
      className="mx-auto mt-16 w-full max-w-6xl px-4 sm:px-6 lg:px-8"
    >
      <SectionHeader
        eyebrow="Temas principales"
        title="Áreas científicas y de innovación"
        description="Una selección temática para actualizar, debatir y conectar teoría con aplicación clínica y nutricional."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {eventData.topics.map((topic) => (
          <article
            key={topic.title}
            className="symbi-card-subtle group rounded-3xl p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#C8104A]/45 hover:shadow-lg"
          >
            <p className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C8104A]/10 text-xl">
              {topic.icon}
            </p>
            <h3 className="text-lg font-semibold text-[#0F172A] group-hover:text-[#C8104A]">
              {topic.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#475569]">{topic.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
