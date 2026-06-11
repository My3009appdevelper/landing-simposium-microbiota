"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { eventData } from "@/data/event-data";
import SmoothScrollLink from "./SmoothScrollLink";

const navItemIds = eventData.navItems.map((item) => item.id);

export default function Navbar() {
  const firstSectionId = navItemIds[0] ?? "";

  const getHeaderHeight = () => {
    if (typeof window === "undefined") return 0;
    const header = document.querySelector<HTMLElement>("[data-site-header='true']");
    return header?.offsetHeight ?? 0;
  };

  const normalizeHash = () => {
    if (typeof window === "undefined") return firstSectionId;
    const hash = window.location.hash.replace("#", "");
    const normalized = hash ? hash.split("?")[0].split("#")[0] : "";
    const exists = normalized ? navItemIds.includes(normalized) : false;
    return exists ? normalized : firstSectionId;
  };

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window === "undefined") return firstSectionId;
    return normalizeHash() || firstSectionId;
  });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const navScrollRef = useRef<HTMLDivElement>(null);

  const syncActiveByScroll = useCallback(() => {
    if (typeof window === "undefined") return;

    const trigger = window.scrollY + getHeaderHeight() + 24;
    let nextSection = firstSectionId;

    for (let i = navItemIds.length - 1; i >= 0; i--) {
      const sectionId = navItemIds[i];
      const section = document.getElementById(sectionId);
      if (!section) continue;

      if (section.offsetTop <= trigger) {
        nextSection = sectionId;
        break;
      }
    }

    setActiveSection((current) => (current === nextSection ? current : nextSection));
  }, [firstSectionId]);

  const selectSection = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
  }, []);

  const updateScrollButtons = () => {
    const el = navScrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth + 4 < el.scrollWidth);
  };

  const scrollByAmount = (amount: number) => {
    const el = navScrollRef.current;
    if (!el) return;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      syncActiveByScroll();
    };

    const syncSectionByHash = () => {
      const normalized = normalizeHash();
      setActiveSection(normalized);
      syncActiveByScroll();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", syncSectionByHash);
    window.addEventListener("popstate", syncSectionByHash);

    const el = navScrollRef.current;
    if (el) {
      updateScrollButtons();
      el.addEventListener("scroll", updateScrollButtons);
    }
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", syncSectionByHash);
      window.removeEventListener("popstate", syncSectionByHash);
      window.removeEventListener("resize", updateScrollButtons);
      if (el) {
        el.removeEventListener("scroll", updateScrollButtons);
      }
    };
  }, [syncActiveByScroll]);

  const baseTabClass =
    "rounded-full px-2.5 py-2 text-sm font-semibold transition-colors border";
  const inactiveTabClass =
    "text-[#0F172A] border-[#C8104A]/25 hover:bg-[#C8104A]/10 hover:border-[#C8104A]/45 hover:text-[#C8104A]";
  const activeTabClass =
    "border-[#C8104A] bg-[#C8104A] text-white shadow-[0_8px_18px_rgba(200,16,74,0.35)]";

  return (
    <header
      role="banner"
      data-site-header="true"
      className={`fixed inset-x-0 top-0 z-50 w-full border-b transition-all ${
        scrolled
          ? "border-[#cbd5e1] bg-white shadow-[0_12px_30px_rgba(15,23,42,0.22)]"
          : "border-[#cbd5e1] bg-white"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-3 py-3 sm:px-6 lg:flex-row lg:items-center lg:gap-4 lg:px-8">
        <div className="flex w-full items-center justify-between gap-2 lg:w-auto lg:shrink-0">
          <SmoothScrollLink
            href="#inicio"
            className="shrink-0 text-sm font-bold tracking-wide text-[#C8104A] sm:text-base"
            aria-label="Inicio del simposium"
          >
            {eventData.brand.logoTitle}
          </SmoothScrollLink>
          <div className="flex min-w-0 gap-2 lg:hidden">
            <SmoothScrollLink
              href={eventData.event.registrationLink}
              className="inline-flex min-w-0 shrink-0 rounded-full bg-[#C8104A] px-3 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#9B1B5A]"
            >
              {eventData.hero.ctaPrimary}
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#programa"
              className="inline-flex min-w-0 shrink-0 rounded-full border border-[#C8104A] bg-white px-3 py-2 text-xs font-semibold text-[#C8104A] transition hover:-translate-y-0.5 hover:bg-[#C8104A]/10"
            >
              {eventData.hero.ctaSecondary}
            </SmoothScrollLink>
          </div>
        </div>
        <div className="relative hidden min-w-0 lg:flex lg:flex-1 lg:items-center lg:justify-center">
          <nav className="items-center gap-1 lg:flex">
            {eventData.navItems.map((item) => (
              <SmoothScrollLink
                key={item.id}
                href={item.href}
                onClick={() => selectSection(item.id)}
                className={`${baseTabClass} ${
                  activeSection === item.id ? activeTabClass : inactiveTabClass
                }`}
              >
                {item.label}
              </SmoothScrollLink>
            ))}
          </nav>
        </div>
        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <SmoothScrollLink
            href={eventData.event.registrationLink}
            className="inline-flex rounded-full bg-[#C8104A] px-4 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#9B1B5A] sm:text-sm"
          >
            {eventData.hero.ctaPrimary}
          </SmoothScrollLink>
          <SmoothScrollLink
            href="#programa"
            className="inline-flex rounded-full border border-[#C8104A] bg-white px-4 py-2 text-xs font-semibold text-[#C8104A] transition hover:-translate-y-0.5 hover:bg-[#C8104A]/10 sm:text-sm"
          >
            {eventData.hero.ctaSecondary}
          </SmoothScrollLink>
        </div>

        <div className="relative flex min-w-0 items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => scrollByAmount(-200)}
            aria-label="Ver pestañas anteriores"
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-lg font-bold transition ${
              canScrollLeft
                ? "text-[#172554] opacity-100"
                : "cursor-default text-[#cbd5e1] opacity-40"
            }`}
            disabled={!canScrollLeft}
          >
            ‹
          </button>

          <div className="relative min-w-0 flex-1">
            <div
              aria-hidden
              className={`pointer-events-none absolute inset-y-0 left-0 w-6 rounded-l-full bg-gradient-to-r from-white to-transparent transition-opacity duration-200 ${
                canScrollLeft ? "opacity-100" : "opacity-0"
              }`}
            />
            <div
              aria-hidden
              className={`pointer-events-none absolute inset-y-0 right-0 w-6 rounded-r-full bg-gradient-to-l from-white to-transparent transition-opacity duration-200 ${
                canScrollRight ? "opacity-100" : "opacity-0"
              }`}
            />
            <div
              ref={navScrollRef}
              className="nav-scrollbar-hidden flex flex-nowrap items-center gap-2 overflow-x-auto overflow-y-hidden pr-1 overscroll-x-contain scroll-smooth touch-pan-x snap-x snap-mandatory"
              onScroll={updateScrollButtons}
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {eventData.navItems.map((item) => (
                <SmoothScrollLink
                  key={item.id}
                  href={item.href}
                  onClick={() => selectSection(item.id)}
                  className={`shrink-0 snap-start ${baseTabClass} ${
                    activeSection === item.id ? activeTabClass : inactiveTabClass
                  }`}
                >
                  {item.label}
                </SmoothScrollLink>
              ))}
            </div>
          </div>

          <style jsx>{`
            .nav-scrollbar-hidden::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          <button
            type="button"
            onClick={() => scrollByAmount(200)}
            aria-label="Ver más pestañas"
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-lg font-bold transition ${
              canScrollRight
                ? "text-[#172554] opacity-100"
                : "cursor-default text-[#cbd5e1] opacity-40"
            }`}
            disabled={!canScrollRight}
          >
            ›
          </button>
        </div>

      </div>
    </header>
  );
}
