import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tree-shake barrel imports if any remain
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    // Prefer modern formats when the browser supports them
    formats: ["image/avif", "image/webp"],
    // Drop ultra-wide breakpoints we never serve (sources top out ~1400px)
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    // Allow slightly lower quality for lighter LCP / gallery bytes
    qualities: [60, 70, 75],
  },
};

export default nextConfig;
