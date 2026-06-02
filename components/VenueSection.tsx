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
      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
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
          <p className="mt-5 rounded-2xl bg-white p-4 text-sm text-[#475569] shadow-sm">
            {eventData.venue.checkIn}
          </p>
        </div>
        <ul className="mt-4 space-y-2 rounded-3xl border border-white bg-white p-6 text-sm shadow-sm lg:grid lg:grid-cols-3 lg:gap-4 xl:col-span-2 xl:mt-6 xl:order-3 xl:space-y-0">
          <li className="flex gap-2 text-[#0F172A]">
            <span className="mt-1 h-2 w-2 rounded-full bg-[#C8104A]" />
            Llegar con anticipación.
          </li>
          <li className="flex gap-2 text-[#0F172A]">
            <span className="mt-1 h-2 w-2 rounded-full bg-[#9B1B5A]" />
            Llevar confirmación de registro.
          </li>
          <li className="flex gap-2 text-[#0F172A]">
            <span className="mt-1 h-2 w-2 rounded-full bg-[#22D3EE]" />
            Revisar modalidad seleccionada antes de asistir.
          </li>
        </ul>
        <div className="h-64 overflow-hidden rounded-3xl border border-white bg-white/90 p-6 shadow-inner xl:order-2">
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
