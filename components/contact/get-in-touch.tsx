import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { getWhatsAppHref, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const infoCardClass =
  "flex gap-3.5 rounded-2xl bg-card p-4 shadow-sm ring-1 ring-foreground/6 sm:p-5";

const actionBtnClass =
  "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold " +
  "transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50";

/**
 * Get In Touch block — contact details + quick actions.
 * Lives on /contact (not on the quote form page).
 */
export function GetInTouch() {
  const whatsappHref = getWhatsAppHref(
    "Hello LimeLine, I found you on your website and would like to get in touch. Thank you."
  );

  return (
    <div className="space-y-8">
      {/* Avatar + heading row */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
        <div
          className={
            "relative mx-auto size-28 shrink-0 overflow-hidden rounded-full " +
            "bg-muted shadow-md ring-4 ring-brand-gold/30 sm:mx-0 sm:size-32"
          }
        >
          <Image
            src={siteConfig.customerCareSrc}
            alt="LimeLine customer care"
            fill
            sizes="128px"
            className="object-cover object-top"
            loading="eager"
          />
        </div>

        <SectionHeading
          as="h1"
          size="lg"
          className="min-w-0 flex-1"
          eyebrow="Contact us"
          title={
            <>
              Get In <SectionHeading.Accent>Touch</SectionHeading.Accent>
            </>
          }
          description={
            <>
              Ready to start your project? Contact {siteConfig.shortName} today for
              a free site visit and no-obligation quote.
            </>
          }
          descriptionClassName="max-w-md text-base leading-relaxed sm:text-lg"
        />
      </div>

      <ul className="space-y-3">
        <li className={infoCardClass}>
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
            <Phone className="size-5" aria-hidden />
          </span>
          <div className="min-w-0 space-y-0.5">
            <p className="text-sm font-semibold text-foreground">Phone / WhatsApp</p>
            <p>
              <a
                href={siteConfig.phoneHref}
                className="font-medium text-brand-gold hover:underline"
              >
                {siteConfig.phone}
              </a>
            </p>
            <p className="text-xs text-muted-foreground">Call or WhatsApp — 24/7 emergency</p>
          </div>
        </li>

        <li className={infoCardClass}>
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
            <MapPin className="size-5" aria-hidden />
          </span>
          <div className="min-w-0 space-y-0.5">
            <p className="text-sm font-semibold text-foreground">Address</p>
            <p className="text-sm text-muted-foreground">{siteConfig.address}</p>
          </div>
        </li>

        <li className={infoCardClass}>
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
            <Mail className="size-5" aria-hidden />
          </span>
          <div className="min-w-0 space-y-0.5">
            <p className="text-sm font-semibold text-foreground">Email</p>
            <p>
              <a
                href={siteConfig.emailHref}
                className="font-medium text-brand-gold hover:underline"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>
        </li>

        <li className={infoCardClass}>
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
            <Clock className="size-5" aria-hidden />
          </span>
          <div className="min-w-0 space-y-0.5">
            <p className="text-sm font-semibold text-foreground">Working hours</p>
            <p className="text-sm text-muted-foreground">{siteConfig.workingHours}</p>
          </div>
        </li>
      </ul>

      <div className="flex flex-wrap gap-2.5">
        <a
          href={siteConfig.phoneHref}
          className={cn(actionBtnClass, "bg-primary text-primary-foreground hover:bg-primary/90")}
        >
          <Phone className="size-4" aria-hidden />
          Call Now
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            actionBtnClass,
            "border border-border bg-card text-foreground hover:border-[#25D366]/50 hover:bg-[#25D366]/10"
          )}
        >
          <WhatsAppIcon className="size-4 text-[#25D366]" title="" />
          WhatsApp
        </a>
        <a
          href={siteConfig.emailHref}
          className={cn(
            actionBtnClass,
            "border border-border bg-card text-foreground hover:bg-muted"
          )}
        >
          <Mail className="size-4" aria-hidden />
          Email
        </a>
      </div>
    </div>
  );
}
