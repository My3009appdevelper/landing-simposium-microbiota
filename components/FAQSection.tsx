import { eventData } from "@/data/event-data";

export default function FAQSection() {
  return (
    <section id="faq" className="mx-auto mt-16 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-3xl font-semibold text-[#0F172A] sm:text-4xl md:text-5xl">
        Preguntas frecuentes
      </h2>
      <div className="space-y-4">
        {eventData.faq.map((item) => (
          <details
            key={item.question}
            className="symbi-card-subtle rounded-3xl p-4 shadow-sm transition hover:border-[#C8104A]/50 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="cursor-pointer list-none text-left text-lg font-semibold text-[#0F172A]">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-[#475569]">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
