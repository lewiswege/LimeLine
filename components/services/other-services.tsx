import Image from "next/image";
import Link from "next/link";

import { serviceIcons } from "@/components/services/service-icons";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  serviceCategories,
  type ServiceCategory,
  type ServiceCategoryId,
} from "@/lib/site";
import { cn } from "@/lib/utils";

type OtherServicesProps = {
  currentId: ServiceCategoryId;
};

/**
 * Cross-links to the other service pillars — same layout on mobile & desktop.
 * Cover image = that service’s heroSrc (same asset as the service hero page).
 * Decorative blur orbs removed (GPU paint cost on mobile).
 */
export function OtherServices({ currentId }: OtherServicesProps) {
  const others = serviceCategories.filter((s) => s.id !== currentId);

  return (
    <section
      aria-labelledby="other-services-heading"
      className="relative overflow-hidden border-t border-border bg-gradient-to-br from-primary/[0.04] via-background to-brand-gold/[0.06]"
    >
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="other-services-heading"
            className="max-w-lg"
            eyebrow="Continue exploring"
            title={
              <>
                LimeLine is more than{" "}
                <SectionHeading.Accent>one line of work</SectionHeading.Accent>
              </>
            }
            description="Power, protection, and the sun — jump to another pillar without leaving the flow."
          />
          <p className="text-sm text-muted-foreground">
            {others.length} more service
            {others.length === 1 ? "" : "s"}
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2">
          {others.map((service) => (
            <li key={service.id}>
              <OtherServiceCard service={service} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function OtherServiceCard({ service }: { service: ServiceCategory }) {
  const Icon = serviceIcons[service.id];

  return (
    <Link
      href={service.href}
      prefetch={false}
      className={cn(
        "group relative flex h-full min-h-[9.5rem] overflow-hidden rounded-2xl",
        "bg-card ring-1 ring-foreground/10",
        "outline-none transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 hover:ring-brand-blue/35",
        "focus-visible:ring-3 focus-visible:ring-ring/50",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      )}
    >
      <div className="relative w-[6.5rem] shrink-0 bg-muted sm:w-[7.5rem] md:w-36">
        {service.heroSrc ? (
          <Image
            src={service.heroSrc}
            alt=""
            fill
            sizes="(max-width: 640px) 104px, 144px"
            quality={60}
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        ) : (
          <div className="absolute inset-0 bg-muted" aria-hidden />
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between gap-3 p-4 sm:gap-4 sm:p-6">
        <div className="space-y-2.5 sm:space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-accent/20 ring-1 ring-brand-gold/20 sm:size-11">
              <Icon className="size-5 text-brand-gold" aria-hidden />
            </div>
            <span
              className={cn(
                "inline-flex size-8 items-center justify-center rounded-full sm:size-9",
                "border border-primary/15 bg-primary/5 text-foreground",
                "transition-all duration-300",
                "group-hover:border-brand-blue/40 group-hover:bg-brand-blue group-hover:text-white"
              )}
              aria-hidden
            >
              <ArrowUpRightIcon className="size-4" />
            </span>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-xl">
              {service.title}
            </h3>
            <p className="line-clamp-2 text-sm text-muted-foreground text-pretty leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>

        <span className="text-sm font-medium text-brand-blue transition-colors group-hover:text-foreground">
          Explore this line
        </span>
      </div>
    </Link>
  );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
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
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}
