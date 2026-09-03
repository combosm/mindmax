export const programs = [
  {
    id: "online-live",
    name: "Online Live Classes",
    format: "online",
    description:
      "Live, structured teaching students can join from home, with the same ongoing support beyond each lesson.",
    details: ["Live teaching", "Structured sessions", "Learn from home", "Ongoing support"],
    image: "/images/mindmax-online-live-classes.png",
    imageAlt: "A primary school student completing written work during a live online lesson",
    ctaLabel: "Enquire about online",
  },
  {
    id: "face-to-face",
    name: "Face-to-Face Classes",
    format: "in-person",
    description:
      "A focused classroom setting where students learn directly with their teacher and alongside their peers.",
    details: [
      "Direct teacher interaction",
      "Classroom learning",
      "Collaborative environment",
      "Melbourne locations",
    ],
    image: "/images/mindmax-face-to-face-classes.png",
    imageAlt: "A teacher guiding three primary school students through a classroom activity",
    ctaLabel: "Enquire about in-person",
  },
] as const;

export type Program = (typeof programs)[number];
