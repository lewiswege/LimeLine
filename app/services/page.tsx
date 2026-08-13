import type { Metadata } from "next";

import { ServiceCategoryCards } from "@/components/sections/service-category-cards";
import { SectionHeading } from "@/components/ui/section-heading";
import { servicesPageCopy } from "@/lib/site";

export const metadata: Metadata = {
  title: servicesPageCopy.metaTitle,
  description: servicesPageCopy.metaDescription,
  keywords: [
    "electrician Nairobi",
    "electrician Kenya",
    "house wiring Nairobi",
    "electrical installation Kenya",
    "solar installation Nairobi",
    "solar panels Kenya",
    "inverter installation Kenya",
    "CCTV installation Nairobi",
    "CCTV camera installation Kenya",
    "electric fence Kenya",
    "alarm system installation",
    "security systems Nairobi",
    "TV mounting Nairobi",
  ],
};

/**
 * Hub at /services — the nav "Services" link lands here.
 * Description + meta tuned for Kenya search intent.
 */
export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <SectionHeading
            as="h1"
            size="lg"
            eyebrow="What we do"
            title={
              <>
                Our{" "}
                <SectionHeading.Accent>Services</SectionHeading.Accent>
              </>
            }
            description={servicesPageCopy.description}
            descriptionClassName="max-w-2xl"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <ServiceCategoryCards />
      </section>
    </>
  );
}
