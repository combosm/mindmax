export const programs = [
  {
    id: "online-live",
    name: "Online Live Classes",
    format: "online",
  },
  {
    id: "face-to-face",
    name: "Face-to-Face Classes",
    format: "in-person",
  },
] as const;

export type Program = (typeof programs)[number];
