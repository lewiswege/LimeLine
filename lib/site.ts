/**
 * Company facts from the LimeLine flyer + contact details.
 * Edit here → header, footer, and pages stay in sync.
 */
export const siteConfig = {
  name: "LimeLine Power Systems",
  shortName: "LimeLine",
  tagline: "Stop chasing fundis, Get expert service you can trust",
  headline: "We Light up Your Smile.",
  description:
    "LimeLine Power Systems delivers complete electrical and security solutions — solar, wiring, CCTV, and more — for homes, businesses, and institutions.",
  phone: "0740 528 989",
  phoneHref: "tel:+254740528989",
  /** E.164 without + for wa.me links */
  whatsappNumber: "254740528989",
  email: "limelineke@gmail.com",
  emailHref: "mailto:limelineke@gmail.com",
  /** Edit when you have a public address */
  address: "Nairobi, Kenya",
  /** Shown under footer social icons */
  locations: "Syokimau, Ruiru",
  workingHours: "Mon–Sat: 7:00 AM – 7:00 PM | Emergency: 24/7",
  /** Shared path for every “Get a quote” CTA */
  quoteHref: "/quote",
  /** Served from /public — URL path is just /filename */
  logoSrc: "/limelinelogo.webp",
  /** Contact page agent photo (optimized webp avatar) */
  customerCareSrc: "/general/customer_care.webp",
  slogan: "LimeLine is the line between a problem and peace of mind. We restore power, protect what matters, harness the sun, and take care of the essential jobs that keep your world moving. Anywhere",
  /**
   * Social profile URLs — leave empty until accounts are ready.
   * Footer icons still render; empty values show as inactive placeholders.
   */
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    tiktok: "",
    twitter: "",
  },
} as const;

/**
 * Major counties we cover — edit in one place for footer / marketing.
 * Matches the “24+ counties covered” claim on the About stats bar.
 */
export const countiesCovered = [
  "Nairobi",
  "Kiambu",
  "Machakos",
  "Kajiado",
  "Nakuru",
  "Mombasa",
  "Kilifi",
  "Kwale",
  "Kisumu",
  "Siaya",
  "Kakamega",
  "Bungoma",
  "Uasin Gishu",
  "Trans Nzoia",
  "Nyeri",
  "Murang'a",
  "Kirinyaga",
  "Meru",
  "Embu",
  "Tharaka-Nithi",
  "Nyandarua",
  "Laikipia",
  "Narok",
  "Bomet",
] as const;

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Our work" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/**
 * Services page SEO copy — natural language with Kenya search terms
 * (electrician Nairobi, solar, CCTV, house wiring, etc.).
 */
export const servicesPageCopy = {
  metaTitle: "Electrical, Solar & CCTV Services in Kenya | LimeLine",
  metaDescription:
    "Electrician Nairobi & Kenya: house wiring, solar installation, CCTV, electric fence, inverter & battery, alarm systems. Free quote — LimeLine Power Systems.",
  description:
    "Looking for a reliable electrician in Nairobi or across Kenya? LimeLine handles house wiring, electrical installation and repairs, solar panel and inverter installation, CCTV camera installation, electric fence, alarm and access control — residential and commercial. Book a free site survey and quote.",
} as const;

/** About / process section — “How we handle Business” (4-step + stats). */
export const businessProcess = {
  eyebrow: "About us",
  titleStart: "How we handle",
  titleAccent: "Business",
  description:
    "Every project follows a clear process so you get safety, quality, and no fundi headaches — from first visit to final handover.",
  steps: [
    {
      step: "01",
      title: "Site Survey & Quote",
      description:
        "We visit, assess your needs, and provide a clear itemised quote — completely free.",
    },
    {
      step: "02",
      title: "Design & Planning",
      description:
        "We design the layout, select quality materials, and schedule work around your timeline.",
    },
    {
      step: "03",
      title: "Professional Installation",
      description:
        "Certified team completes the work to high standards with minimal disruption to your routine.",
    },
    {
      step: "04",
      title: "Test & Handover",
      description:
        "Full safety testing, certification, and documentation. We only leave when you're satisfied.",
    },
  ],
  stats: [
    { value: "50", label: "Projects completed" },
    { value: "100+", label: "Clients satisfied" },
    { value: "3+", label: "Years of experience" },
    { value: "24+", label: "Counties covered" },
  ],
} as const;

/**
 * Three main pillars (flyer). Used by home cards + /services/[slug] pages.
 * heroSrc / imageSrc: paths under /public — leave null until you drop real images in.
 * When null, the UI shows a light placeholder (no heavy assets).
 */
export const serviceCategories = [
  {
    id: "electrical",
    title: "Electrical Solutions",
    description:
      "From building pipework to smart home automation — safe, professional installs.",
    /** URL segment: /services/electrical */
    href: "/services/electrical",
    /**
     * Full-width hero (title/icon baked into the image).
     * Optimized from hero.png → hero-v2.webp (cache-busted filename).
     */
    heroSrc: "/services/electrical/hero-v2.webp",
    heroAlt: "Modern home with professional exterior lighting by LimeLine",
    items: [
      {
        title: "Building Pipework Installation",
        description:
          "Conduit and pipework laid out for clean, protectable cable runs in new builds and renovations — ready for safe wiring and future expansion.",
        imageSrc: "/services/electrical/pipework_installation.webp",
        imageAlt: "Building pipework and conduit installation",
      },
      {
        title: "Electrical Wiring",
        description:
          "Full wiring for homes, offices, and commercial spaces: distribution boards, circuits, and power points to modern standards.",
        imageSrc: "/services/electrical/wiring-v2.webp",
        imageAlt: "Electrical wiring and distribution boards",
      },
      {
        title: "Lighting Installation",
        description:
          "Indoor and outdoor lighting design and fit-out — energy-efficient fittings, switches, and controls tailored to each room or site.",
        imageSrc: "/services/electrical/lighting.webp",
        imageAlt: "Indoor and outdoor lighting installation",
      },
      {
        title: "Maintenance & Repair Service",
        description:
          "Fault finding, board work, and ongoing maintenance so your electrical system stays reliable and safe day to day.",
        imageSrc: "/services/electrical/repair_maintenance.webp",
        imageAlt: "Electrical maintenance and repair",
      },
      {
        title: "Smart Home Automation",
        description:
          "Connected lighting, power, and control systems so you can manage comfort and efficiency from apps or smart switches.",
        imageSrc: "/services/electrical/automation.webp",
        imageAlt: "Smart home automation controls",
      },
    ],
  },
  {
    id: "security",
    title: "Security Solutions",
    description:
      "Protect property and people with modern monitoring and access control.",
    href: "/services/security",
    /** Hero + sub-service media under /public/services/security/ */
    heroSrc: "/services/security/hero.webp",
    heroAlt: "Security Solutions — LimeLine Power Systems",
    items: [
      {
        title: "CCTV Installations",
        description:
          "Camera placement, recording, and remote viewing setups for homes, shops, offices, and compounds — day and night coverage.",
        imageSrc: "/services/security/cctv-install.webp",
        imageAlt: "Dome CCTV camera installed in a building corridor",
      },
      {
        title: "Electric Fences",
        description:
          "Perimeter electric fencing designed and installed for effective deterrence, with proper earthing and warning signage.",
        imageSrc: "/services/security/electric_fence.webp",
        imageAlt: "Electric fence perimeter security",
      },
      {
        title: "Alarm Systems",
        description:
          "Intruder alarms with sensors and alert options so you know quickly if something is wrong on site.",
        imageSrc: "/services/security/alarm_system.webp",
        imageAlt: "Intruder alarm system",
      },
      {
        title: "Intercom Systems",
        description:
          "Audio and video intercoms so visitors can be identified and granted entry without compromising security.",
        imageSrc: "/services/security/intercom.webp",
        imageAlt: "Video intercom system",
      },
      {
        title: "Door & Gate Access Control",
        description:
          "Controlled entry for doors and gates — keypads, cards, remotes, or integrated access suited to residential and commercial sites.",
        imageSrc: "/services/security/door_gate_access.webp",
        imageAlt: "Door and gate access control",
      },
    ],
  },
  {
    id: "solar",
    title: "Solar Solutions",
    description:
      "Solar systems, storage, and backup for homes and commercial sites.",
    href: "/services/solar",
    heroSrc: "/services/solar/hero.webp",
    heroAlt: "Solar panel system installed by LimeLine Power Systems",
    items: [
      {
        title: "Solar Systems Installation",
        description:
          "End-to-end solar PV install: panels, mounting, and integration so you generate clean power on site.",
        imageSrc: "/services/solar/solar_installation.webp",
        imageAlt: "Solar panel installation",
      },
      {
        title: "Inverter & Battery Setup",
        description:
          "Inverters and battery storage sized for your loads — smooth conversion and stored energy when the grid is down or expensive.",
        imageSrc: "/services/solar/inverter_battery.webp",
        imageAlt: "Solar inverter and battery setup",
      },
      {
        title: "Solar Backup Solutions",
        description:
          "Backup configurations that keep critical circuits running during outages, tailored to homes and businesses.",
        imageSrc: "/services/solar/solar_backup-solution.webp",
        imageAlt: "Solar backup power solution",
      },
      {
        title: "Residential & Commercial Systems",
        description:
          "Scalable designs for houses, apartments, offices, and larger commercial roofs — from modest arrays to multi-kW systems.",
        imageSrc: "/services/solar/residential_commercial.webp",
        imageAlt: "Residential and commercial solar systems",
      },
    ],
  },
] as const;

export type ServiceCategory = (typeof serviceCategories)[number];
export type ServiceCategoryId = ServiceCategory["id"];
export type ServiceItem = ServiceCategory["items"][number];

/** Look up a pillar by URL slug (e.g. "electrical"). */
export function getServiceById(id: string): ServiceCategory | undefined {
  return serviceCategories.find((s) => s.id === id);
}

/** WhatsApp deep link with optional prefilled enquiry message. */
export function getWhatsAppHref(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function getServiceEnquiryMessage(serviceTitle: string): string {
  return `Hello LimeLine, I am enquiring about ${serviceTitle}. I found this on your website and would like more information / a quote. Thank you.`;
}
