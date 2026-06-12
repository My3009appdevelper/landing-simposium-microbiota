import { eventData } from "@/data/event-data";
import SectionHeader from "./SectionHeader";
import SpeakerCard from "./SpeakerCard";

export default function SpeakersSection() {
  return (
    <section id="speakers" className="mx-auto mt-16 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Conoce a los expertos"
        title="Speakers invitados"
        description="Perfiles profesionales de referencia, con datos actualizables en un solo archivo."
      />
      <div className="flex flex-wrap justify-center gap-4">
        {eventData.speakers.map((speaker) => (
          <div
            key={speaker.id}
            className="basis-full md:basis-[calc((100%_-_1rem)/2)] xl:basis-[calc((100%_-_2rem)/3)]"
          >
            <SpeakerCard speaker={speaker} />
          </div>
        ))}
      </div>
    </section>
  );
}
