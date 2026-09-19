export type Testimonial = {
  quote: string;
  attribution: string;
  context?: string;
};

// Add only supplied and verified MindMax testimonials.
export const testimonials: readonly Testimonial[] = [];
