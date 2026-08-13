import Image from "next/image";

import { cn } from "@/lib/utils";

type MediaSlotProps = {
  src: string | null;
  alt: string;
  /** Fixed aspect so layout never shifts when images are added later */
  aspectClassName?: string;
  className?: string;
  /**
   * True only for LCP heroes. Uses Next 16 `preload` (not deprecated `priority`).
   * Do not combine with loading="lazy".
   */
  preload?: boolean;
  sizes?: string;
  /** Default 70 — lighter than Next default 75 for gallery/body photos */
  quality?: number;
  /** Label shown only on empty placeholder (not in final product photos) */
  placeholderLabel?: string;
};

/**
 * Renders next/image when src is set; otherwise a light placeholder.
 * Avoids shipping heavy assets and keeps CLS stable (fixed aspect box).
 */
export function MediaSlot({
  src,
  alt,
  aspectClassName = "aspect-[16/10]",
  className,
  preload = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  quality = 60,
  placeholderLabel,
}: MediaSlotProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-muted ring-1 ring-foreground/10",
        aspectClassName,
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          preload={preload}
          loading={preload ? "eager" : "lazy"}
          sizes={sizes}
          quality={quality}
          className="object-cover"
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 via-muted to-accent/15"
          role="img"
          aria-label={alt}
        >
          {placeholderLabel ? (
            <span className="px-4 text-center text-xs font-medium tracking-wide text-muted-foreground uppercase">
              {placeholderLabel}
            </span>
          ) : null}
        </div>
      )}
    </div>
  );
}
