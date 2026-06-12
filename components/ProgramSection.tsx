import { eventData } from "@/data/event-data";
import SectionHeader from "./SectionHeader";
import ProgramTimeline from "./ProgramTimeline";

export default function ProgramSection() {
  return (
    <section id="programa" className="mx-auto mt-16 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Agenda"
        title="Programa académico"
        description="Cronograma de una jornada diseñado para seguir cada bloque académico con claridad."
      />
      <ProgramTimeline days={eventData.program.days} />
    </section>
  );
}
