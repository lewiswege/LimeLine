import { businessProcess } from "@/lib/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

/**
 * About us process section — layout from assets process screenshot:
 * centered heading → 4 step cards → brand stats bar.
 * id="about" so header nav About can deep-link here (/#about).
 */
export function HowWeHandleBusiness() {
  const { eyebrow, titleStart, titleAccent, description, steps, stats } =
    businessProcess;

  return (
    <section
      id="about"
      aria-labelledby="how-we-handle-business-heading"
      /* scroll-mt clears fixed desktop header when landing via /#about */
      className="scroll-mt-28 border-t border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          id="how-we-handle-business-heading"
          as="h2"
          size="lg"
          align="center"
          className="mx-auto mb-12 max-w-2xl sm:mb-14"
          eyebrow={eyebrow}
          title={
            <>
              {titleStart}{" "}
              <SectionHeading.Accent>{titleAccent}</SectionHeading.Accent>
            </>
          }
          description={description}
          descriptionClassName="mx-auto text-center text-base sm:text-lg"
        />

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {steps.map((item, index) => (
            <li
              key={item.step}
              className={cn(
                "flex flex-col gap-3 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-foreground/8",
                "lg:rounded-none lg:shadow-none lg:ring-0 lg:bg-muted/40",
                index === 0 && "lg:rounded-l-2xl",
                index === steps.length - 1 && "lg:rounded-r-2xl",
                index > 0 && "lg:border-l lg:border-border/70"
              )}
            >
              <span
                className={
                  "flex size-10 items-center justify-center rounded-full " +
                  "bg-primary/10 text-sm font-semibold tabular-nums text-foreground " +
                  "ring-1 ring-primary/15"
                }
                aria-hidden
              >
                {item.step}
              </span>
              <h3 className="text-base font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>

      {/* Stats bar — hard visual end of About (separates from FAQs below) */}
      <div className="bg-primary text-primary-foreground">
        <ul
          className="mx-auto grid max-w-6xl grid-cols-2 divide-y divide-primary-foreground/15 sm:grid-cols-4 sm:divide-x sm:divide-y-0"
          aria-label="LimeLine at a glance"
        >
          {stats.map((stat) => (
            <li
              key={stat.label}
              className="flex flex-col items-center justify-center gap-1 px-4 py-10 text-center sm:py-12"
            >
              <span className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-xs font-medium tracking-wide text-white/75 uppercase">
                {stat.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
