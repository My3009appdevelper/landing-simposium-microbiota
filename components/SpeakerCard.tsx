import type { Speaker } from "@/data/event-data";

type SpeakerCardProps = {
  speaker: Speaker;
};

export default function SpeakerCard({ speaker }: SpeakerCardProps) {
  const initials = speaker.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  return (
    <article className="symbi-card rounded-3xl p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C8104A] to-[#9B1B5A] text-2xl font-bold text-white">
        {initials || speaker.photoPlaceholder}
      </div>
      <h3 className="text-lg font-semibold text-[#0F172A]">{speaker.name}</h3>
      <p className="text-sm text-[#475569]">{speaker.degree}</p>
      <p className="mt-1 text-sm text-[#0F172A]">{speaker.institution}</p>
      <p className="mt-1 text-sm text-[#0F172A]">{speaker.location}</p>
      <p className="mt-3 text-sm leading-6 text-[#475569]">
        {speaker.specialization}
      </p>
      {speaker.hasProfile ? (
        <button
          type="button"
          className="mt-4 rounded-full border border-[#C8104A]/40 px-4 py-2 text-sm text-[#C8104A] transition hover:bg-[#C8104A]/10"
        >
          Ver semblanza
        </button>
      ) : null}
    </article>
  );
}
