import type { ServiceCategory } from "@/lib/site";
import { MediaSlot } from "@/components/services/media-slot";
import { SectionHeading } from "@/components/ui/section-heading";

type ServiceSubListProps = {
  service: ServiceCategory;
};

/**
 * Flyer sub-services as alternating image + copy rows.
 * Sits under the hero blend — slightly negative top margin so content
 * flows through the gradient (no hard section break).
 */
export function ServiceSubList({ service }: ServiceSubListProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <SectionHeading
        className="mb-10 max-w-xl sm:mb-12"
        eyebrow={service.title}
        title={
          <>
            What we <SectionHeading.Accent>cover</SectionHeading.Accent>
          </>
        }
        description={
          <>
            Every item below is part of our {service.title.toLowerCase()} lineup
            — from first fix to final finish.
          </>
        }
      />

      <ul className="flex flex-col">
        {service.items.map((item, index) => {
          const imageOnRight = index % 2 === 1;
          const isLast = index === service.items.length - 1;

          return (
            <li
              key={item.title}
              className={
                "grid items-center gap-6 py-10 md:grid-cols-2 md:gap-10 md:py-12 lg:gap-14 " +
                // Thin light rule between each sub-service (not after the last)
                (isLast ? "" : "border-b border-border/60")
              }
            >
              <div className={imageOnRight ? "md:order-2" : "md:order-1"}>
                <MediaSlot
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  aspectClassName="aspect-[4/3]"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  quality={60}
                  placeholderLabel="Photo coming soon"
                />
              </div>

              <div
                className={
                  imageOnRight
                    ? "md:order-1 space-y-3"
                    : "md:order-2 space-y-3"
                }
              >
                <p className="text-sm font-semibold tracking-wide text-brand-blue uppercase">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  {item.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
