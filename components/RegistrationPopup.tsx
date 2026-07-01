"use client";

import { useCallback, useEffect, useState } from "react";
import { eventData } from "@/data/event-data";
import SmoothScrollLink from "./SmoothScrollLink";

const ENTRY_PROMPT_KEY = "yakult-registration-entry-prompt-dismissed";
const SCROLL_PROMPT_KEY = "yakult-registration-scroll-prompt-dismissed";

function getSessionFlag(key: string) {
  if (typeof window === "undefined") return true;
  return window.sessionStorage.getItem(key) === "true";
}

function setSessionFlag(key: string) {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(key, "true");
}

export default function RegistrationPopup() {
  const [entryOpen, setEntryOpen] = useState(false);
  const [scrollOpen, setScrollOpen] = useState(false);
  const [entryPromptSettled, setEntryPromptSettled] = useState(false);

  const closeEntryPrompt = useCallback(() => {
    setEntryOpen(false);
    setEntryPromptSettled(true);
    setSessionFlag(ENTRY_PROMPT_KEY);
  }, []);

  const closeScrollPrompt = useCallback(() => {
    setScrollOpen(false);
    setSessionFlag(SCROLL_PROMPT_KEY);
  }, []);

  const closeAllPrompts = useCallback(() => {
    closeEntryPrompt();
    closeScrollPrompt();
  }, [closeEntryPrompt, closeScrollPrompt]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (!getSessionFlag(ENTRY_PROMPT_KEY)) {
        setEntryOpen(true);
      }
      setEntryPromptSettled(true);
    }, 700);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (
      !entryPromptSettled ||
      entryOpen ||
      getSessionFlag(SCROLL_PROMPT_KEY)
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      setScrollOpen(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [entryOpen, entryPromptSettled]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (entryOpen) closeEntryPrompt();
      if (scrollOpen) closeScrollPrompt();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeEntryPrompt, closeScrollPrompt, entryOpen, scrollOpen]);

  const paymentHref = eventData.event.paymentLink;

  return (
    <>
      {entryOpen ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[#0F172A]/45 px-4 py-6 backdrop-blur-[2px]"
          role="presentation"
        >
          <section
            aria-labelledby="registration-entry-title"
            aria-modal="true"
            role="dialog"
            className="relative w-full max-w-md rounded-3xl border border-white bg-white p-6 text-[#0F172A] shadow-[0_24px_80px_rgba(15,23,42,0.32)]"
          >
            <button
              type="button"
              aria-label="Cerrar aviso de registro"
              onClick={closeEntryPrompt}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#CBD5E1] bg-white text-sm font-semibold text-[#475569] transition hover:border-[#C8104A]/50 hover:text-[#C8104A]"
            >
              X
            </button>
            <p className="pr-10 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8104A]">
              Registro abierto
            </p>
            <h2
              id="registration-entry-title"
              className="mt-3 max-w-sm text-2xl font-semibold leading-tight"
            >
              Aparta tu lugar para la Jornada Académica 2026
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#475569]">
              Regístrate ahora para apartar tu lugar y formar parte de nuestra 2da Jornada Académica.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <SmoothScrollLink
                href={paymentHref}
                onClick={closeAllPrompts}
                className="inline-flex justify-center rounded-full bg-[#C8104A] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#9B1B5A]"
              >
                Registrarme ahora
              </SmoothScrollLink>
              <SmoothScrollLink
                href="#registro"
                onClick={closeAllPrompts}
                className="inline-flex justify-center rounded-full border border-[#172554] px-5 py-3 text-sm font-semibold text-[#172554] transition hover:bg-[#172554] hover:text-white"
              >
                Ver detalles
              </SmoothScrollLink>
            </div>
          </section>
        </div>
      ) : null}

      {scrollOpen ? (
        <section
          aria-labelledby="registration-scroll-title"
          role="dialog"
          className="fixed inset-x-4 bottom-4 z-[60] rounded-3xl border border-white bg-white p-5 text-[#0F172A] shadow-[0_20px_60px_rgba(15,23,42,0.24)] sm:left-auto sm:right-6 sm:w-full sm:max-w-sm"
        >
          <button
            type="button"
            aria-label="Cerrar recordatorio de registro"
            onClick={closeScrollPrompt}
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#CBD5E1] bg-white text-xs font-semibold text-[#475569] transition hover:border-[#C8104A]/50 hover:text-[#C8104A]"
          >
            X
          </button>
          <p className="pr-10 text-xs font-semibold uppercase tracking-[0.16em] text-[#C8104A]">
            Continúa tu registro
          </p>
          <h2
            id="registration-scroll-title"
            className="mt-2 pr-8 text-lg font-semibold"
          >
            ¿Quieres apartar tu lugar?
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#475569]">
            Se parte de nuestra 2da Jornada Académica.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <SmoothScrollLink
              href={paymentHref}
              onClick={closeAllPrompts}
              className="inline-flex rounded-full bg-[#C8104A] px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#9B1B5A]"
            >
              Registrarme ahora
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#registro"
              onClick={closeScrollPrompt}
              className="inline-flex rounded-full border border-[#172554] px-4 py-2.5 text-sm font-semibold text-[#172554] transition hover:bg-[#172554] hover:text-white"
            >
              Ver detalles
            </SmoothScrollLink>
          </div>
        </section>
      ) : null}
    </>
  );
}
