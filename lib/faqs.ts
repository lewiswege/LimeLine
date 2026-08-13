/**
 * Home FAQ content — edit here; HomeFaqs section stays in sync.
 */
export const homeFaqs = [
  {
    question: "What safety standards do you follow?",
    answer:
      "We design and install to Kenyan electrical practice and applicable EPRA requirements. Work uses certified materials such as KEBS-marked cables, MCBs, and RCDs where required, and we test and inspect systems before handover so your installation is safe, reliable, and ready for day-to-day use.",
  },
  {
    question: "Can I view my cameras on my phone?",
    answer:
      "Yes. Most modern CCTV and NVR/DVR systems we install support mobile apps for live view and playback over Wi‑Fi or mobile data. You’ll need a stable internet connection on site; for smooth remote viewing we typically recommend a reliable broadband link (roughly 5 Mbps upload or better for multi-camera viewing — we’ll size this with you during survey).",
  },
  {
    question: "How long does installation take?",
    answer:
      "Timelines depend on scope and site readiness. As a guide: small house wiring is often measured in days (not weeks) once materials and access are sorted; CCTV jobs commonly take 1–3 days; home solar is typically 1–5 days depending on system size, roof work, and grid connection steps. We’ll give a clear schedule after a site assessment.",
  },
  {
    question: "Can I expand my solar system later?",
    answer:
      "Yes — we design with growth in mind where possible. You can often add panels or batteries later, subject to inverter capacity, available roof space, structural limits, cable sizing, and the original system design. Tell us your future plans at quote stage so we leave headroom for a clean upgrade path.",
  },
  {
    question: "Will solar reduce my KPLC bill, and by how much?",
    answer:
      "Solar offsets the energy you would otherwise buy from the grid, so most homes and businesses see a lower KPLC bill. How much depends on your load profile, system size, and how much you use while the sun is up. Grid-tied systems can export excess power where regulations and metering allow; hybrid and backup-focused systems mainly cut outages and generator use while still reducing daytime grid draw. We’ll estimate expected savings from your actual usage.",
  },
  {
    question: "What types of CCTV systems do you install?",
    answer:
      "We install IP and analog systems for homes, shops, offices, compounds, and farms. Options include indoor and outdoor cameras, night vision, motion detection, and remote viewing on phones. For farms and off-grid sites we can also advise on 4G and solar-powered camera setups where mains power or wired internet isn’t available.",
  },
  {
    question: "Do you mount TVs?",
    answer:
      "Yes. We mount flat-screen TVs on walls for homes, offices, and commercial spaces — including bracket supply or fit-only when you already have a mount. We check wall type and load, hide or tidy cables where possible, and can add power or data points if the install needs them. Tell us the TV size and room layout when you request a quote.",
  },
] as const;

export type HomeFaq = (typeof homeFaqs)[number];
