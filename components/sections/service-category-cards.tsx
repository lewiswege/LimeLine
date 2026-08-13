import Image from "next/image";
import Link from "next/link";

import { serviceIcons } from "@/components/services/service-icons";
import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { serviceCategories } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Service pillar cards → /services/{id}.
 * Used on home services lineup and the /services hub.
 * Cover image on top, title + copy below, rounded "View service" CTA.
 * Server-rendered links only.
 */
export function ServiceCategoryCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {serviceCategories.map((category) => {
        const Icon = serviceIcons[category.id];
        const coverSrc = category.heroSrc;

        return (
          <Link
            key={category.id}
            href={category.href}
            className="group block h-full rounded-2xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <Card
              className={cn(
                "h-full gap-0 overflow-hidden rounded-2xl py-0",
                "transition-all duration-300 ease-out",
                "group-hover:-translate-y-1.5 group-hover:shadow-lg group-hover:shadow-primary/10",
                "group-hover:ring-2 group-hover:ring-brand-blue/30",
                "motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
              )}
            >
              {/* Cover image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                {coverSrc ? (
                  <Image
                    src={coverSrc}
                    alt={category.heroAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                    quality={60}
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                ) : (
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary/15 via-muted to-accent/20"
                    aria-hidden
                  >
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-background/70 ring-1 ring-foreground/10">
                      <Icon className="size-7 text-brand-gold" />
                    </div>
                    <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      Photo coming soon
                    </span>
                  </div>
                )}
              </div>

              {/* Text + CTA below image */}
              <div className="flex flex-1 flex-col gap-3 px-6 py-6 sm:px-7 sm:py-7">
                <CardTitle className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                  {category.title}
                </CardTitle>
                <CardDescription className="flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {category.description}
                </CardDescription>

                <span
                  className={cn(
                    "mt-2 inline-flex w-fit items-center justify-center",
                    "rounded-full border border-primary/20 bg-primary/5",
                    "px-4 py-2 text-sm font-medium text-foreground",
                    "transition-colors duration-200",
                    "group-hover:border-brand-blue/40 group-hover:bg-brand-blue/10 group-hover:text-brand-blue"
                  )}
                >
                  View service
                </span>
              </div>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
