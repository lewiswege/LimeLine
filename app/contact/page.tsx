import type { Metadata } from "next";
import Link from "next/link";

import { GetInTouch } from "@/components/contact/get-in-touch";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name} — phone, WhatsApp, email, and working hours.`,
};

/**
 * Contact page — Get In Touch details (moved off the quote form page).
 */
export default function ContactPage() {
  return (
    <section className="bg-gradient-to-b from-muted/60 via-background to-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-xl">
          <GetInTouch />
          <p className="mt-10 text-sm text-muted-foreground">
            Prefer a formal quote?{" "}
            <Link
              href={siteConfig.quoteHref}
              className="font-semibold text-brand-blue hover:underline"
            >
              Request a free quote
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
