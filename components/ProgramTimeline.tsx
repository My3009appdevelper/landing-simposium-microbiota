"use client";

import { useMemo, useState } from "react";
import type { ProgramDay, ProgramItem } from "@/data/event-data";

type ProgramTimelineProps = {
  days: ProgramDay[];
};

const typeColors: Record<ProgramItem["type"], string> = {
  Registro: "bg-[#22D3EE]/20 text-[#0F172A]",
  Inauguración: "bg-[#C8104A]/20 text-[#0F172A]",
  Conferencia: "bg-[#9B1B5A]/20 text-[#0F172A]",
  Panel: "bg-[#172554]/20 text-[#0F172A]",
  Break: "bg-[#475569]/20 text-[#0F172A]",
  Comida: "bg-[#F97316]/20 text-[#0F172A]",
  Clausura: "bg-[#0F172A]/20 text-white",
};

export default function ProgramTimeline({ days }: ProgramTimelineProps) {
  const [activeDay, setActiveDay] = useState(0);
  const currentDay = useMemo(() => days[activeDay], [activeDay, days]);

  return (
    <div className="rounded-3xl border border-white bg-white p-4 shadow-sm">
      <div className="mb-4 flex flex-wrap gap-2">
        {days.map((day, index) => (
          <button
            key={day.day}
            type="button"
            onClick={() => setActiveDay(index)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              activeDay === index
                ? "border-[#C8104A] bg-[#C8104A] text-white"
                : "border-[#C8104A]/30 text-[#0F172A] hover:bg-[#C8104A]/10"
            }`}
            aria-pressed={activeDay === index}
          >
            {day.day}
          </button>
        ))}
      </div>
      <p className="mb-4 text-sm text-[#475569]">Agenda editable para: {currentDay.date}</p>
      <div className="space-y-4">
        {currentDay.items.map((item) => (
          <article
            key={`${item.time}-${item.title}`}
            className="symbi-card-subtle relative overflow-hidden rounded-2xl border border-[#172554]/20 p-4"
          >
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#C8104A] via-[#9B1B5A] to-[#22D3EE]" />
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div className="sm:w-1/5">
                <p className="text-sm font-semibold text-[#0F172A]">{item.time}</p>
                <span
                  className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                    typeColors[item.type]
                  }`}
                >
                  {item.type}
                </span>
              </div>
              <div className="sm:w-3/5">
                <h3 className="text-lg font-semibold text-[#172554]">{item.title}</h3>
                <p className="mt-1 text-sm text-[#475569]">{item.description}</p>
              </div>
              <div className="sm:w-1/5 text-sm">
                <p className="font-semibold text-[#0F172A]">{item.speaker}</p>
                <p className="text-[#475569]">{item.room}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
