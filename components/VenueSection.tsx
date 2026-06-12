import { eventData } from "@/data/event-data";
import SectionHeader from "./SectionHeader";

const venueMapQuery = encodeURIComponent(
  `${eventData.venue.address}, ${eventData.venue.city}`
);

const venueMapEmbedSrc = `https://www.google.com/maps?q=${venueMapQuery}&output=embed`;

export default function VenueSection() {
  return (
    <section id="sede" className="mx-auto mt-16 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Sede y logística"
        title="Lugar de celebración"
        description="Detalles de referencia de la sede para facilitar tu asistencia."
      />
      <div className="grid items-stretch gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="symbi-card rounded-3xl p-6 shadow-sm xl:order-1">
          <h3 className="text-2xl font-semibold text-[#0F172A]">{eventData.venue.name}</h3>
          <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-[#475569]">Dirección</dt>
              <dd className="mt-1 font-medium text-[#0F172A]">{eventData.venue.address}</dd>
            </div>
            <div>
              <dt className="text-[#475569]">Ciudad</dt>
              <dd className="mt-1 font-medium text-[#0F172A]">{eventData.venue.city}</dd>
            </div>
            <div>
              <dt className="text-[#475569]">Modalidad</dt>
              <dd className="mt-1 font-medium text-[#0F172A]">{eventData.venue.modality}</dd>
            </div>
            <div>
              <dt className="text-[#475569]">Fecha y horario</dt>
              <dd className="mt-1 font-medium text-[#0F172A]">
                {eventData.event.date} — {eventData.event.time}
              </dd>
            </div>
          </dl>
        </div>
        <div className="h-64 overflow-hidden rounded-3xl border border-white bg-white/90 p-6 shadow-inner xl:h-full xl:order-2">
          <iframe
            title="Mapa del espacio del evento"
            src={venueMapEmbedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full rounded-2xl border border-[#94A3B8]"
          />
        </div>
      </div>
    </section>
  );
}
