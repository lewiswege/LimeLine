import Link from "next/link";

import { Logo } from "@/components/layout/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { mainNav, siteConfig } from "@/lib/site";

/**
 * Server header shell — no scroll listeners, no backdrop-blur paint tax.
 * Only MobileNav is a client island.
 *
 * Layout:
 * - Mobile: sticky solid bar
 * - Desktop (md+): fixed solid bar (main is padded in layout)
 */
export function SiteHeader() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-border/70 bg-background md:fixed">
      <div className="relative mx-auto flex h-24 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={siteConfig.phoneHref}
            className={
              "inline-flex h-10 items-center justify-center gap-1.5 rounded-md border border-border " +
              "bg-background px-3 text-sm font-medium text-foreground shadow-md shadow-primary/10 " +
              "transition-all duration-200 ease-out " +
              "hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/5 hover:shadow-xl hover:shadow-primary/20 " +
              "active:translate-y-0 active:shadow-md " +
              "motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            }
          >
            <PhoneIcon className="size-4 shrink-0" />
            Call
          </a>
          <Link
            href={siteConfig.quoteHref}
            className={
              "inline-flex h-10 items-center justify-center rounded-md bg-primary px-3 " +
              "text-sm font-medium text-primary-foreground shadow-md shadow-primary/20 " +
              "transition-all duration-200 ease-out " +
              "hover:-translate-y-1 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/35 " +
              "active:translate-y-0 active:shadow-md " +
              "motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            }
          >
            Get a quote
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}

/** Inline SVG — avoids lucide client/server import weight in the header shell */
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
