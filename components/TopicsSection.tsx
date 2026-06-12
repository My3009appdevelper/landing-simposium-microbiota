import { eventData } from "@/data/event-data";
import SectionHeader from "./SectionHeader";

const topicImages = [
  "/images/temas/tema1.jpg",
  "/images/temas/tema2.png",
  "/images/temas/tema3.png",
  "/images/temas/tema4.png",
  "/images/temas/tema5.jpg",
  "/images/temas/tema6.jpg",
  "/images/temas/tema7.jpg",
  "/images/temas/tema8.jpg",
];

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
        {eventData.topics.map((topic, index) => {
          const topicImage = topicImages[index % topicImages.length];

          return (
            <article
              key={topic.title}
              className="group relative flex min-h-62.5 overflow-hidden rounded-3xl border border-white/70 bg-white bg-cover bg-center p-5 text-[#0F172A] shadow-sm transition hover:-translate-y-1 hover:border-[#D71920]/60 hover:shadow-xl"
              style={{
                backgroundImage: `radial-gradient(ellipse at bottom right, rgba(248,250,252,0.98) 0%, rgba(248,250,252,0.92) 32%, rgba(248,250,252,0.58) 52%, rgba(248,250,252,0) 72%), url("${topicImage}")`,
              }}
            >
              <div className="relative z-10 ml-auto mt-auto max-w-[86%] text-right">
                <h3 className="text-lg font-semibold text-[#0F172A]">
                  {topic.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#334155]">
                  {topic.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
