"use client";

import {
  AnchorHTMLAttributes,
  MouseEvent,
  PropsWithChildren,
  useCallback,
} from "react";

type SmoothScrollLinkProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  }
>;

function getSectionIdFromHref(href: string): string | null {
  if (!href || !href.startsWith("#")) return null;

  const fragment = href.slice(1);
  if (!fragment || fragment === "#") return null;

  const normalized = fragment.split("?")[0].split("#")[0];
  return normalized ? normalized : null;
}

function scrollToSection(sectionId: string): boolean {
  if (typeof window === "undefined") return false;
  const target = document.getElementById(sectionId);
  if (!target) {
    console.warn(`SmoothScrollLink: no se encontró la sección #${sectionId}`);
    return false;
  }

  const header = document.querySelector<HTMLElement>("[data-site-header='true']");
  const headerHeight = header?.getBoundingClientRect().height ?? 0;
  const targetY = Math.max(
    target.getBoundingClientRect().top + window.scrollY - headerHeight - 16,
    0,
  );

  requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: "auto", block: "start" });
    const needsScroll = Math.abs(window.scrollY - targetY) > 0.5;
    window.scrollTo({
      top: needsScroll ? targetY : targetY + 1,
      behavior: needsScroll ? "smooth" : "auto",
    });
    if (!needsScroll) {
      requestAnimationFrame(() => {
        window.scrollTo({ top: targetY, behavior: "smooth" });
      });
    }
  });
  return true;
}

function getCurrentNormalizedHash(): string | null {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash;
  if (!hash || hash === "#") return null;
  const normalized = hash.slice(1).split("?")[0].split("#")[0];
  return normalized || null;
}

function syncHash(sectionId: string) {
  if (typeof window === "undefined") return;
  window.history.replaceState(null, "", `#${sectionId}`);
}

function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

export default function SmoothScrollLink({
  href,
  onClick,
  children,
  target,
  rel,
  ...props
}: SmoothScrollLinkProps) {
  const external = isExternalHref(href);
  const safeTarget = target ?? (external ? "_blank" : undefined);
  const safeRel =
    external && safeTarget === "_blank" ? (rel ?? "noreferrer") : rel;

  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (onClick) {
        onClick(event);
      }

      if (event.defaultPrevented) return;

      const isModifiedClick =
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        event.button !== 0;

      if (isModifiedClick) return;

      const sectionId = getSectionIdFromHref(href);
      if (!sectionId) {
        if (href === "#") {
          event.preventDefault();
        }
        return;
      }

      event.preventDefault();
      const didScroll = scrollToSection(sectionId);
      if (didScroll) {
        const currentHash = getCurrentNormalizedHash();
        if (currentHash !== sectionId) {
          syncHash(sectionId);
        }
      }
    },
    [href, onClick],
  );

  return (
    <a
      href={href}
      onClick={handleClick}
      target={safeTarget}
      rel={safeRel}
      {...props}
    >
      {children}
    </a>
  );
}
