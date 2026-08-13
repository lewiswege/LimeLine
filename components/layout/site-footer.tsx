import Link from "next/link";

import { Logo } from "@/components/layout/logo";
import { countiesCovered, mainNav, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    key: "facebook" as const,
    label: "Facebook",
    href: siteConfig.social.facebook,
  },
  {
    key: "instagram" as const,
    label: "Instagram",
    href: siteConfig.social.instagram,
  },
  {
    key: "linkedin" as const,
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
  },
  {
    key: "tiktok" as const,
    label: "TikTok",
    href: siteConfig.social.tiktok,
  },
  {
    key: "twitter" as const,
    label: "X (Twitter)",
    href: siteConfig.social.twitter,
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-muted/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm text-muted-foreground">
            {siteConfig.tagline}
          </p>

          {/* Social — Facebook first; fill URLs in siteConfig.social */}
          <ul className="flex flex-wrap items-center gap-2" aria-label="Social media">
            {socialLinks.map((item) => (
              <li key={item.key}>
                <SocialIconLink
                  label={item.label}
                  href={item.href}
                  network={item.key}
                />
              </li>
            ))}
          </ul>

          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPinIcon className="size-4 shrink-0 text-brand-gold" />
            <span>{siteConfig.locations}</span>
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold tracking-wide text-foreground uppercase">
            Explore
          </h2>
          <ul className="space-y-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  prefetch={false}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold tracking-wide text-foreground uppercase">
            Counties we cover
          </h2>
          <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5">
            {countiesCovered.map((county) => (
              <li
                key={county}
                className="text-sm text-muted-foreground"
              >
                {county}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">
            And more across Kenya — ask if your area isn&apos;t listed.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold tracking-wide text-foreground uppercase">
            Contact
          </h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={siteConfig.phoneHref} className="hover:text-foreground">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={siteConfig.emailHref} className="hover:text-foreground">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-muted-foreground sm:px-6 sm:text-left">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function SocialIconLink({
  label,
  href,
  network,
}: {
  label: string;
  href: string;
  network: "facebook" | "instagram" | "linkedin" | "tiktok" | "twitter";
}) {
  const className = cn(
    "inline-flex size-9 items-center justify-center rounded-full",
    "border border-border bg-background text-muted-foreground",
    "transition-colors duration-200",
    "hover:border-primary/30 hover:bg-primary/5 hover:text-foreground",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
    !href &&
      "cursor-default opacity-70 hover:border-border hover:bg-background hover:text-muted-foreground"
  );

  const icon =
    network === "facebook" ? (
      <FacebookIcon className="size-4" />
    ) : network === "instagram" ? (
      <InstagramIcon className="size-4" />
    ) : network === "linkedin" ? (
      <LinkedInIcon className="size-4" />
    ) : network === "twitter" ? (
      <TwitterIcon className="size-4" />
    ) : (
      <TikTokIcon className="size-4" />
    );

  if (!href) {
    return (
      <span
        className={className}
        title={`${label} — link coming soon`}
        aria-label={`${label} (coming soon)`}
      >
        {icon}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.48h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.9h-2.34V22c4.78-.75 8.44-4.91 8.44-9.93z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52V6.8a4.84 4.84 0 0 1-1-.11z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.725-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
