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
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {eventData.speakers.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </div>
    </section>
  );
}

