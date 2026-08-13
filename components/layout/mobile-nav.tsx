import Link from "next/link";

import { mainNav, siteConfig } from "@/lib/site";

/**
 * CSS-only mobile menu (no "use client").
 * Uses <details>/<summary> so we ship zero hydration JS for the nav island.
 */
export function MobileNav() {
  return (
    <details className="group md:hidden">
      <summary
        className={
          "flex size-10 list-none cursor-pointer items-center justify-center rounded-md " +
          "text-foreground outline-none transition-colors " +
          "hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 " +
          "[&::-webkit-details-marker]:hidden"
        }
        aria-label="Menu"
      >
        {/* Hamburger → X via group-open */}
        <span className="relative block size-5" aria-hidden>
          <span
            className={
              "absolute left-0 top-[4px] block h-0.5 w-5 rounded-full bg-current " +
              "origin-center transition-transform duration-200 " +
              "group-open:top-1/2 group-open:-translate-y-1/2 group-open:rotate-45"
            }
          />
          <span
            className={
              "absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded-full bg-current " +
              "transition-opacity duration-200 group-open:opacity-0"
            }
          />
          <span
            className={
              "absolute left-0 top-[14px] block h-0.5 w-5 rounded-full bg-current " +
              "origin-center transition-transform duration-200 " +
              "group-open:top-1/2 group-open:-translate-y-1/2 group-open:-rotate-45"
            }
          />
        </span>
      </summary>

      {/* Positions against SiteHeader's relative flex container (full bar width) */}
      <div className="absolute inset-x-0 top-full z-50 border-b border-border bg-background shadow-md">
        <nav
          className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3"
          aria-label="Mobile"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex h-9 items-center justify-center rounded-md border border-border bg-background px-3 text-sm font-medium shadow-xs hover:bg-muted"
            >
              {siteConfig.phone}
            </a>
            <Link
              href={siteConfig.quoteHref}
              prefetch={false}
              className={
                "inline-flex h-9 items-center justify-center rounded-md bg-primary px-3 " +
                "text-sm font-medium text-primary-foreground shadow-md shadow-primary/20 " +
                "transition-all duration-200 ease-out " +
                "hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 " +
                "motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              }
            >
              Get a quote
            </Link>
          </div>
        </nav>
      </div>
    </details>
  );
}
