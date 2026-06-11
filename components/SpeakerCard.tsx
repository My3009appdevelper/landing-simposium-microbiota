import type { Speaker } from "@/data/event-data";

type SpeakerCardProps = {
  speaker: Speaker;
};

export default function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <article
      className="group relative flex min-h-[360px] overflow-hidden rounded-3xl border border-white/70 bg-[#E2E8F0] bg-cover bg-center p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#D71920]/60 hover:shadow-xl"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(248,250,252,0.98) 0%, rgba(248,250,252,0.9) 45%, rgba(248,250,252,0.18) 100%), url("${speaker.photo}")`,
      }}
    >
      <div className="mt-auto">
        <p className="mb-3 inline-flex rounded-full border border-white/80 bg-white/80 px-3 py-1 text-xs font-semibold text-[#0F172A] shadow-sm backdrop-blur-md">
          {speaker.degree}
        </p>
        <h3 className="text-lg font-semibold text-[#0F172A]">
          {speaker.name}
        </h3>
        <p className="mt-1 text-sm text-[#0F172A]">{speaker.institution}</p>
        <p className="mt-1 text-sm text-[#334155]">{speaker.location}</p>
        <p className="mt-3 text-sm leading-6 text-[#475569]">
          {speaker.specialization}
        </p>
        {speaker.hasProfile ? (
          <button
            type="button"
            className="mt-4 rounded-full border border-[#C8104A]/40 bg-white/75 px-4 py-2 text-sm text-[#C8104A] backdrop-blur-md transition hover:bg-white"
          >
            Ver semblanza
          </button>
        ) : null}
      </div>
    </article>
  );
}
