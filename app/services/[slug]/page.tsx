import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { OtherServices } from "@/components/services/other-services";
import { ServiceHero } from "@/components/services/service-hero";
import { ServiceSubList } from "@/components/services/service-sub-list";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  getServiceById,
  getServiceEnquiryMessage,
  getWhatsAppHref,
  serviceCategories,
} from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

/** Pre-render all three pillars at build time (static HTML, no server work per request). */
export function generateStaticParams() {
  return serviceCategories.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceById(slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceById(slug);

  if (!service) {
    notFound();
  }

  const whatsappHref = getWhatsAppHref(
    getServiceEnquiryMessage(service.title)
  );

  return (
    <>
      <ServiceHero service={service} />
      <ServiceSubList service={service} />
      <OtherServices currentId={service.id} />

      <section className="border-t border-border bg-primary text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 py-14 sm:flex-row sm:items-center sm:px-6 sm:py-16">
          <SectionHeading
            as="h2"
            size="lg"
            inverted
            className="max-w-xl"
            eyebrow="Next step"
            title={
              <>
                Did you find what you&apos;re{" "}
                <SectionHeading.Accent>looking for?</SectionHeading.Accent>
              </>
            }
            description="Tell us, and we will get it done."
            descriptionClassName="text-lg sm:text-xl"
          />

          {/* WhatsApp only — prefilled enquiry for this service pillar */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat on WhatsApp about ${service.title}`}
            className={
              "inline-flex size-14 shrink-0 items-center justify-center rounded-full " +
              "bg-[#25D366] text-white shadow-lg shadow-black/20 " +
              "ring-2 ring-white/20 transition-transform duration-200 " +
              "hover:scale-105 hover:bg-[#20BD5A] focus-visible:outline-none " +
              "focus-visible:ring-4 focus-visible:ring-[#25D366]/50 sm:size-16"
            }
          >
            <WhatsAppIcon className="size-7 sm:size-8" />
          </a>
        </div>
      </section>
    </>
  );
}
