export const locations = [
  {
    id: "hoppers-crossing",
    name: "Hoppers Crossing",
    kind: "in-person",
  },
  {
    id: "south-yarra",
    name: "South Yarra",
    kind: "in-person",
  },
  {
    id: "online",
    name: "Online Classes",
    kind: "online",
  },
] as const;

export type Location = (typeof locations)[number];
