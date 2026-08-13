import Image from "next/image";

import type { ServiceCategory } from "@/lib/site";
import { cn } from "@/lib/utils";

type ServiceHeroProps = {
  service: ServiceCategory;
};

/**
 * Service hero:
 * - Mobile: full-bleed, square corners. MUST be taller than sub-service
 *   images (those are full-width aspect-[4/3] on small screens). A 16/9
 *   hero is shorter than 4/3 at the same width — use explicit tall height.
 * - Desktop: max-w-6xl, rounded, near-native aspect (unchanged).
 *
 * Preload only the hero (true LCP). Logo is not preloaded so bandwidth
 * goes here first.
 */
export function ServiceHero({ service }: ServiceHeroProps) {
  const heroSrc = service.heroSrc as string | null;

  return (
    <section
      className={cn("w-full", "md:mx-auto md:max-w-6xl md:px-6 md:pt-8")}
      aria-label={service.title}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden bg-muted",
          "rounded-none md:rounded-2xl md:ring-1 md:ring-foreground/10",
          /*
           * Mobile only — large & dominant.
           * Sub-services ≈ 0.75 × screen width tall (4/3).
           * This hero is ~55–65vh / min 24rem so it always wins.
           */
          "h-[min(65vh,32rem)] min-h-[24rem]",
          /* Desktop — leave as before (do not inherit the mobile height trap) */
          "md:h-auto md:min-h-[28rem] md:max-h-[36rem] md:aspect-[21/10]"
        )}
      >
        {heroSrc ? (
          <Image
            src={heroSrc}
            alt={service.heroAlt}
            fill
            preload
            loading="eager"
            sizes="(max-width: 768px) 100vw, (max-width: 1152px) 100vw, 1152px"
            quality={60}
            className="object-cover object-center"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 via-muted to-accent/20"
            role="img"
            aria-label={service.heroAlt}
          >
            <span className="px-4 text-center text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Add hero → public/services/{service.id}/hero.webp
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
