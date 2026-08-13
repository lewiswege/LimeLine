import type { Metadata } from "next";

import { QuoteRequestForm } from "@/components/quote/quote-request-form";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free quote from LimeLine Power Systems — electrical, security, and solar solutions.",
};

/**
 * Quote-only page — form for requesting a free quote.
 * Contact details live on /contact (Get In Touch).
 */
export default function QuotePage() {
  return (
    <section className="bg-gradient-to-b from-muted/60 via-background to-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading
          as="h1"
          size="lg"
          className="mx-auto mb-10 max-w-xl text-center sm:mb-12"
          align="center"
          eyebrow="Free quote"
          title={
            <>
              Request a{" "}
              <SectionHeading.Accent>Free Quote</SectionHeading.Accent>
            </>
          }
          description="Tell us about your project and we'll get back to you with clear next steps."
          descriptionClassName="mx-auto text-center"
        />

        <div className="mx-auto max-w-lg">
          <QuoteRequestForm />
        </div>
      </div>
    </section>
  );
}
