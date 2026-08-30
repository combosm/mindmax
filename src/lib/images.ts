import type { ImageProps } from "next/image";

/**
 * Shared image defaults. Use `sizes` that reflect the rendered layout, preserve
 * meaningful alt text, and reserve `priority` for genuinely above-fold imagery.
 */
export const responsiveImageDefaults = {
  quality: 85,
  loading: "lazy",
} satisfies Pick<ImageProps, "quality" | "loading">;

export const imageSizes = {
  full: "100vw",
  half: "(max-width: 767px) 100vw, 50vw",
  third: "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw",
} as const;
