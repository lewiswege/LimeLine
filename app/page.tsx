import Link from "next/link";

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { HomeFaqs } from "@/components/sections/home-faqs";
import { HowWeHandleBusiness } from "@/components/sections/how-we-handle-business";
import { ServiceCategoryCards } from "@/components/sections/service-category-cards";
import { ServicesNewsTicker } from "@/components/sections/services-news-ticker";
import { SectionHeading } from "@/components/ui/section-heading";
import { getWhatsAppHref, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Shared sizing for the two hero CTAs — equally large, pill-shaped */
const heroCtaClass =
  "inline-flex h-12 min-w-[10.5rem] items-center justify-center rounded-full px-8 text-base font-semibold sm:h-14 sm:min-w-[12rem] sm:px-10 sm:text-lg " +
  "transition-all duration-200 ease-out " +
  "motion-reduce:transition-none motion-reduce:hover:translate-y-0";

/** Primary quote CTA — lifts + stronger shadow on hover */
const quoteCtaHover =
  "hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 " +
  "active:translate-y-0 active:shadow-md";

const contactActionClass =
  "group inline-flex items-center gap-2.5 rounded-full border px-4 py-2.5 text-sm font-semibold " +
  "shadow-md transition-all duration-200 " +
  "hover:-translate-y-0.5 hover:shadow-lg " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 " +
  "motion-reduce:transition-none motion-reduce:hover:translate-y-0";

export default function HomePage() {
  const whatsappHref = getWhatsAppHref(
    "Hello LimeLine, I found you on your website and would like more information / a quote. Thank you."
  );

  return (
    <>
      {/* Hero — light brand wash (single gradient; avoid stacked paint layers) */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.75_0.17_62_/_0.10),_transparent_55%)] max-md:opacity-70" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-20 sm:px-6 sm:py-28">
          <SectionHeading
            as="h1"
            size="lg"
            eyebrow={siteConfig.tagline}
            title={
              <>
                We Light up{" "}
                <SectionHeading.Accent>Your Smile.</SectionHeading.Accent>
              </>
            }
            description={siteConfig.slogan}
            descriptionClassName="text-lg"
          />
          <div className="flex flex-wrap items-center gap-4">
            {/* Plain links — no Base UI Button client boundary on the home LCP path */}
            <Link
              href={siteConfig.quoteHref}
              prefetch={false}
              className={
                heroCtaClass +
                " " +
                quoteCtaHover +
                " bg-primary text-primary-foreground " +
                "ring-2 ring-brand-gold/40 " +
                "shadow-lg shadow-primary/20 " +
                "hover:bg-primary/90 hover:ring-brand-gold/70"
              }
            >
              Get a free quote
            </Link>
            <Link
              href="/projects"
              prefetch={false}
              className={
                heroCtaClass +
                " border-2 border-primary/30 bg-background/80 text-foreground " +
                "hover:border-brand-blue/50 hover:bg-primary/5 hover:text-brand-blue " +
                "hover:-translate-y-0.5 hover:shadow-md"
              }
            >
              Our work
            </Link>
          </div>
        </div>
      </section>

      {/* News-style sub-service headlines between hero and What we do */}
      <ServicesNewsTicker />

      {/* Three pillars — link to /services/{id} */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          className="mb-10 max-w-xl"
          eyebrow="What we do"
          title={
            <>
              Expert Electrical Services{" "}
              <SectionHeading.Accent>Across Kenya</SectionHeading.Accent>
            </>
          }
          description="Checkout our areas of expertise — electrical, security, and solar."
        />
        <ServiceCategoryCards />
      </section>

      {/* About us — process + stats (between lineup and FAQs) */}
      <HowWeHandleBusiness />

      {/* FAQs — before contact CTA so answers land before Call / WhatsApp / Email */}
      <HomeFaqs />

      {/* Bottom CTA — contact actions (call / WhatsApp / email) */}
      <section className="border-t border-border bg-primary text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 py-14 sm:flex-row sm:items-center sm:px-6">
          <SectionHeading
            as="h3"
            inverted
            eyebrow="Get started"
            title={
              <>
                Ready to begin your{" "}
                <SectionHeading.Accent>dream project?</SectionHeading.Accent>
              </>
            }
            description="Let LimeLine turn it into reality."
          />

          <div
            className="flex flex-wrap items-center gap-3"
            aria-label="Contact LimeLine"
          >
            <a
              href={siteConfig.phoneHref}
              className={cn(
                contactActionClass,
                "border-white/20 bg-white text-primary hover:bg-brand-gold hover:text-primary hover:border-brand-gold"
              )}
              aria-label={`Call ${siteConfig.phone}`}
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/15">
                <PhoneIcon className="size-5" />
              </span>
              <span className="pr-1">Call</span>
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                contactActionClass,
                "border-[#25D366]/40 bg-[#25D366] text-white hover:bg-[#20BD5A] hover:border-[#20BD5A]"
              )}
              aria-label="Chat on WhatsApp"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-white/20">
                <WhatsAppIcon className="size-5 text-white" title="" />
              </span>
              <span className="pr-1">WhatsApp</span>
            </a>

            <a
              href={siteConfig.emailHref}
              className={cn(
                contactActionClass,
                "border-white/25 bg-white/10 text-white hover:bg-white hover:text-primary"
              )}
              aria-label={`Email ${siteConfig.email}`}
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-white/15 group-hover:bg-primary/10">
                <MailIcon className="size-5" />
              </span>
              <span className="pr-1">Email</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

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

function MailIcon({ className }: { className?: string }) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
