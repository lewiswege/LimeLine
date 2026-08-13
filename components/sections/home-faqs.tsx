import { SectionHeading } from "@/components/ui/section-heading";
import { homeFaqs } from "@/lib/faqs";

/**
 * Home FAQ accordion — native <details> (no client JS / hydration).
 * `name` keeps only one item open at a time (same as the old useState version).
 */
export function HomeFaqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="home-faqs-heading"
      className="scroll-mt-28 border-t-0 bg-muted/50"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          id="home-faqs-heading"
          className="mb-10 max-w-xl"
          eyebrow="FAQs"
          title={
            <>
              Questions we{" "}
              <SectionHeading.Accent>hear often</SectionHeading.Accent>
            </>
          }
          description="Straight answers on safety, timelines, solar, and CCTV — so you can decide with confidence before you call."
        />

        <div className="w-full divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-md ring-1 ring-foreground/8">
          {homeFaqs.map((faq) => (
            <details key={faq.question} name="home-faqs" className="group">
              <summary
                className={
                  "flex w-full cursor-pointer list-none items-start justify-between gap-4 px-5 py-5 sm:px-8 sm:py-6 " +
                  "text-left text-base font-semibold tracking-tight text-foreground sm:text-lg " +
                  "outline-none transition-colors " +
                  "hover:bg-muted/50 " +
                  "focus-visible:bg-muted/50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/40 " +
                  "[&::-webkit-details-marker]:hidden"
                }
              >
                <h3 className="m-0 min-w-0 flex-1 text-pretty text-base font-semibold tracking-tight text-foreground sm:text-lg">
                  {faq.question}
                </h3>
                <span
                  className={
                    "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full " +
                    "border border-border bg-background text-muted-foreground " +
                    "transition-transform duration-200 " +
                    "group-open:rotate-45 group-open:border-brand-blue/30 group-open:text-brand-blue"
                  }
                  aria-hidden
                >
                  <PlusIcon className="size-4" />
                </span>
              </summary>
              <div className="px-5 pb-5 sm:px-8 sm:pb-6">
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base sm:leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlusIcon({ className }: { className?: string }) {
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
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}
