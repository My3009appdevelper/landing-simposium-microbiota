import type { ProgramDay } from "@/data/event-data";

type ProgramTimelineProps = {
  days: ProgramDay[];
};

type TimelineTheme = {
  accent: string;
  bar: string;
  soft: string;
  text: string;
};

const timelineThemes: TimelineTheme[] = [
  {
    accent: "#C8104A",
    bar: "bg-[#C8104A]",
    soft: "bg-[#C8104A]/10",
    text: "text-[#C8104A]",
  },
  {
    accent: "#172554",
    bar: "bg-[#172554]",
    soft: "bg-[#172554]/10",
    text: "text-[#172554]",
  },
];

function getItemNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

export default function ProgramTimeline({ days }: ProgramTimelineProps) {
  const currentDay = days[0];

  if (!currentDay) {
    return null;
  }

  const items = currentDay.items;

  return (
    <div className="overflow-hidden rounded-3xl border border-[#172554]/15 bg-[#F1F5F9] p-4 shadow-sm sm:p-5">
      <ol className="relative mx-auto max-w-5xl space-y-4 md:space-y-3">
        <span
          className="absolute bottom-6 left-1/2 top-6 hidden w-1 -translate-x-1/2 rounded-full bg-[#CBD5E1] md:block"
          aria-hidden
        />
        {items.map((item, index) => {
          const theme = timelineThemes[index % timelineThemes.length];
          const isReversed = index % 2 === 1;

          return (
            <li
              key={`${item.time}-${item.title}`}
              className="relative grid gap-3 md:grid-cols-[1fr_76px_1fr] md:items-center md:gap-0"
            >
              <div
                className={`col-start-1 row-start-1 ml-16 md:ml-0 md:row-start-1 ${
                  isReversed
                    ? "md:col-start-3"
                    : "md:col-start-1 md:w-[92%] md:justify-self-end"
                }`}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl ${theme.bar} px-4 py-3 text-white shadow-sm md:flex md:min-h-16 md:items-center md:px-5 ${
                    isReversed
                      ? "md:rounded-l-full md:rounded-r-2xl md:pl-10"
                      : "md:justify-end md:rounded-l-2xl md:rounded-r-full"
                  }`}
                >
                  <p
                    className={`text-xl font-semibold leading-none tracking-wide md:text-2xl ${
                      isReversed ? "" : "md:text-right"
                    }`}
                  >
                    {item.time}
                  </p>
                </div>
              </div>

              <div className="col-start-1 row-start-1 z-10 flex md:col-start-2 md:row-start-1 md:justify-center">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[5px] border-white text-center text-white shadow-md md:h-16 md:w-16 md:border-[6px]"
                  style={{ backgroundColor: theme.accent }}
                >
                  <span className="text-2xl font-semibold leading-none md:text-3xl">
                    {getItemNumber(index)}
                  </span>
                </div>
              </div>

              <article
                className={`row-start-2 rounded-3xl border border-white bg-white px-4 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[#C8104A]/60 hover:shadow-md md:row-start-1 md:min-h-33 md:px-5 md:py-4 ${
                  isReversed ? "md:col-start-1 md:row-start-1" : "md:col-start-3"
                }`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${theme.soft} ${theme.text}`}
                  >
                    {item.type}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#94A3B8]">
                    {item.room}
                  </span>
                </div>
                <h3 className="mt-2 text-base font-semibold text-[#0F172A]">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#475569]">
                  {item.description}
                </p>
                <p className="mt-2 text-sm font-semibold text-[#172554]">
                  {item.speaker}
                </p>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
