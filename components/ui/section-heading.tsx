import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Small uppercase label with gold dash, e.g. "CONTACT US" */
  eyebrow: string;
  /**
   * Main title. Put the gold word(s) in:
   *   <>Get In <SectionHeading.Accent>Touch</SectionHeading.Accent></>
   */
  title: ReactNode;
  description?: ReactNode;
  as?: "h1" | "h2" | "h3";
  id?: string;
  /** Larger type for page heroes */
  size?: "lg" | "md";
  /** White/light text for navy bands */
  inverted?: boolean;
  className?: string;
  descriptionClassName?: string;
  align?: "left" | "center";
};

/**
 * Site-wide title block from brand text design (assets screenshot):
 *   — EYEBROW
 *   Title Accent
 *
 * Navy title + brand-gold accent word(s). Use on every major page section.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Tag = "h2",
  id,
  size = "md",
  inverted = false,
  className,
  descriptionClassName,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3 sm:space-y-4",
        align === "center" && "text-center",
        className
      )}
    >
      <p
        className={cn(
          "flex items-center gap-2.5 text-xs font-semibold tracking-[0.14em] uppercase",
          align === "center" && "justify-center",
          inverted ? "text-white/70" : "text-muted-foreground"
        )}
      >
        <span
          className="inline-block h-0.5 w-6 shrink-0 rounded-full bg-brand-gold"
          aria-hidden
        />
        {eyebrow}
      </p>

      <Tag
        id={id}
        className={cn(
          "font-semibold tracking-tight text-balance",
          size === "lg" && "text-4xl sm:text-5xl",
          size === "md" && "text-2xl sm:text-3xl",
          inverted ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </Tag>

      {description ? (
        <div
          className={cn(
            "max-w-xl text-pretty",
            size === "lg" ? "text-base sm:text-lg" : "text-sm sm:text-base",
            inverted ? "text-white/80" : "text-muted-foreground",
            align === "center" && "mx-auto",
            descriptionClassName
          )}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}

/** Gold highlight for the key word(s) in a title — use as SectionHeading.Accent */
function SectionHeadingAccent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("text-brand-gold", className)}>{children}</span>
  );
}

SectionHeading.Accent = SectionHeadingAccent;

export type { SectionHeadingProps };
