import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Intrinsic pixel size of /public/limelinelogo.webp */
const LOGO_WIDTH = 200;
const LOGO_HEIGHT = 80;

type LogoProps = {
  className?: string;
};

/**
 * Plain <img> for the logo — not next/image.
 *
 * Why: next/image was preloading / oversizing a 200×80 asset (srcset up to 640w)
 * and competing with real LCP (service heroes). The file is already tiny and
 * served from /public at the exact display size.
 */
export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("flex items-center", className)}
      aria-label={`${siteConfig.name} home`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- intentional: static ~4KB logo */}
      <img
        src={siteConfig.logoSrc}
        alt={siteConfig.name}
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        className="h-20 w-auto"
        decoding="async"
        fetchPriority="low"
      />
    </Link>
  );
}
