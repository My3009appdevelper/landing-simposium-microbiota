import { eventData } from "@/data/event-data";
import SmoothScrollLink from "./SmoothScrollLink";

export default function Footer() {
  const quickMap = {
    Inicio: "#inicio",
    Acerca: "#acerca",
    Temas: "#temas",
    Speakers: "#speakers",
    Programa: "#programa",
    Sede: "#sede",
    Registro: "#registro",
    FAQ: "#faq",
  };

  return (
    <footer className="mt-20 bg-[#0F172A] py-14 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h3 className="text-xl font-semibold">{eventData.brand.eventName}</h3>
            <p className="mt-3 text-sm text-white/80">{eventData.brand.subtitle}</p>
            <p className="mt-1 text-sm text-white/80">
              Organiza: {eventData.brand.organizer}
            </p>
            <p className="mt-1 text-sm text-white/80">
              Contacto: {eventData.event.contactEmail}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {eventData.footer.quickLinks.map((link) => (
              <SmoothScrollLink
                key={link}
                href={quickMap[link as keyof typeof quickMap]}
                className="text-sm text-white/90 hover:text-[#22D3EE]"
              >
                {link}
              </SmoothScrollLink>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-4 border-t border-white/15 pt-6">
          {eventData.footer.social.map((item) => (
            <SmoothScrollLink
              key={item.name}
              href={item.url}
              className="text-sm text-white/80 hover:text-[#22D3EE]"
            >
              {item.name}
            </SmoothScrollLink>
          ))}
        </div>
        <p className="text-xs text-white/60">
          © {new Date().getFullYear()} {eventData.brand.eventName}. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
