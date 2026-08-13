import { redirect } from "next/navigation";

/**
 * /about → home About section (#about).
 * Keeps a clean URL if someone types /about or shares the link.
 */
export default function AboutPage() {
  redirect("/#about");
}
