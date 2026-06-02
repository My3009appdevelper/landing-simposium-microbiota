import { eventData } from "@/data/event-data";
import SectionHeader from "./SectionHeader";
import SmoothScrollLink from "./SmoothScrollLink";

export default function RegistrationSection() {
  return (
    <section
      id="registro"
      className="mx-auto mt-16 w-full max-w-6xl px-4 sm:px-6 lg:px-8"
    >
      <SectionHeader
        eyebrow="Acceso y registro"
        title="Cómo inscribirte"
        description="Proceso simple, claro y escalable para la convocatoria científica."
      />
      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="symbi-card-subtle rounded-3xl p-6 shadow-sm">
          <ol className="grid gap-4 sm:grid-cols-2">
            {eventData.registration.steps.map((step, index) => (
              <li
                key={step}
                className="relative rounded-2xl border border-[#C8104A]/20 bg-[#F8FAFC] p-4"
              >
                <span className="absolute left-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#C8104A] text-xs font-bold text-white">
                  {index + 1}
                </span>
                <p className="pl-8 text-sm leading-7 text-[#0F172A]">{step}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex flex-wrap gap-4">
            <SmoothScrollLink
              href={eventData.event.registrationLink}
              className="rounded-full bg-[#C8104A] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              {eventData.registration.primaryCta}
            </SmoothScrollLink>
            <a
              href={`mailto:${eventData.event.contactEmail}`}
              className="rounded-full border border-[#172554] px-6 py-3 text-sm font-semibold text-[#172554] transition hover:bg-[#172554] hover:text-white"
            >
              {eventData.registration.secondaryCta}
            </a>
          </div>
        </div>
        <div className="rounded-3xl border border-white bg-gradient-to-br from-[#D71920] to-[#172554] p-6 text-white">
          <h3 className="text-2xl font-semibold">Accesos y costos</h3>
          <p className="mt-2 text-sm text-white/90">
            Tarifa y condiciones en confirmación. Mantener editable para actualización de comité.
          </p>
          <div className="mt-5 space-y-3">
            {eventData.accessOptions.map((option) => (
              <article
                key={option.name}
                className="rounded-2xl border border-white/20 bg-white/15 p-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-base font-semibold">{option.name}</h4>
                    <p className="mt-1 text-sm text-white/80">{option.description}</p>
                  </div>
                  <span className="text-sm font-semibold text-[#22D3EE]">
                    {option.price}
                  </span>
                </div>
              </article>
            ))}
          </div>
          <SmoothScrollLink
            href="#registro"
            className="mt-6 inline-flex rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#172554]"
          >
            Registrarme a mi acceso
          </SmoothScrollLink>
        </div>
      </div>
    </section>
  );
}
