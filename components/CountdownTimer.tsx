"use client";

import { useEffect, useMemo, useState } from "react";
import { eventData } from "@/data/event-data";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function CountdownTimer() {
  const eventDate = useMemo(
    () => new Date(eventData.event.countdownTargetDate).getTime(),
    [],
  );
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    if (Number.isNaN(eventDate)) {
      setTimeLeft(null);
      return;
    }

    const calculate = () => {
      const now = Date.now();
      const diff = eventDate - now;
      if (diff <= 0) {
        setTimeLeft(null);
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculate();
    const id = window.setInterval(calculate, 1000);
    return () => window.clearInterval(id);
  }, [eventDate]);

  if (timeLeft === null) {
    if (Number.isNaN(eventDate)) {
      return (
        <section className="mx-auto mt-6 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#9B1B5A]/30 bg-white/80 p-5 text-center text-sm font-semibold text-[#9B1B5A] shadow-lg">
            Fecha del simposium por confirmar.
          </div>
        </section>
      );
    }

    return (
      <section className="mx-auto mt-6 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#9B1B5A]/30 bg-white/80 p-5 text-center text-lg font-semibold text-[#9B1B5A] shadow-lg">
          El Simposium ha comenzado.
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto mt-6 max-w-6xl px-4 sm:px-6 lg:px-8" aria-label="Cuenta regresiva del evento">
      <div className="rounded-3xl border border-[#172554]/10 bg-white/75 p-5 shadow-lg backdrop-blur">
        <h2 className="mb-4 text-center text-xl font-semibold text-[#0F172A]">
          Comienza en:
        </h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {([
            { label: "Días", value: timeLeft.days },
            { label: "Horas", value: timeLeft.hours },
            { label: "Minutos", value: timeLeft.minutes },
            { label: "Segundos", value: timeLeft.seconds },
          ] as const).map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[#172554]/15 bg-[#172554]/5 p-4 text-center"
            >
              <p className="text-3xl font-semibold text-[#C8104A]">
                {String(item.value).padStart(2, "0")}
              </p>
              <p className="text-sm uppercase tracking-wide text-[#0F172A]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
