import { serviceCategories } from "@/lib/site";

/** Flat list of every sub-service for the home “news” headline strip. */
const subServiceHeadlines = serviceCategories.flatMap((category) =>
  category.items.map((item) => ({
    title: item.title,
    href: category.href,
  }))
);

const tickerItemClass =
  "inline-flex items-center gap-2 whitespace-nowrap px-4 text-sm font-medium " +
  "text-primary-foreground/90 transition-colors hover:text-brand-gold sm:px-5 sm:text-[0.9375rem]";

/**
 * News-style headline band between hero and “What we do”.
 * Pure CSS marquee (no client JS). Respects prefers-reduced-motion.
 *
 * Visual track uses plain <a> (not next/link) so we don't serialize 28
 * client Link boundaries into the homepage RSC payload. A second clone
 * list is decorative only — real links live in the sr-only list.
 */
export function ServicesNewsTicker() {
  return (
    <section
      aria-label="Services we offer"
      className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground"
    >
      <div className="mx-auto flex max-w-6xl items-stretch">
        <div
          className={
            "z-10 flex shrink-0 items-center gap-2 border-r border-primary-foreground/20 " +
            "bg-brand-gold px-3 py-3 sm:px-5 sm:py-3.5"
          }
        >
          <span
            className="size-1.5 shrink-0 rounded-full bg-primary sm:size-2"
            aria-hidden
          />
          <span className="text-[10px] font-bold tracking-[0.16em] text-primary uppercase sm:text-xs">
            Now offering
          </span>
        </div>

        <div className="relative min-w-0 flex-1 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-8 bg-gradient-to-r from-primary to-transparent sm:w-12"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-8 bg-gradient-to-l from-primary to-transparent sm:w-12"
            aria-hidden
          />

          <div className="flex overflow-hidden py-3 sm:py-3.5">
            <div className="services-ticker-track flex w-max items-center">
              <TickerVisualList />
              <TickerVisualList clone />
            </div>
          </div>
        </div>
      </div>

      <ul className="sr-only">
        {subServiceHeadlines.map((item) => (
          <li key={item.title}>
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function TickerVisualList({ clone = false }: { clone?: boolean }) {
  return (
    <ul
      className={
        clone
          ? "services-ticker-clone flex w-max items-center gap-0"
          : "flex w-max items-center gap-0"
      }
      aria-hidden
    >
      {subServiceHeadlines.map((item) => (
        <li key={item.title} className="flex items-center">
          <a href={item.href} tabIndex={-1} className={tickerItemClass}>
            <span className="text-brand-gold" aria-hidden>
              ◆
            </span>
            <span>{item.title}</span>
          </a>
          <span
            className="hidden h-3 w-px bg-primary-foreground/25 sm:block"
            aria-hidden
          />
        </li>
      ))}
    </ul>
  );
}
