export const locations = [
  {
    id: "hoppers-crossing",
    name: "Hoppers Crossing",
    kind: "in-person",
    address: "Unit 14/89 Elm Park Drive, Hoppers Crossing VIC 3029",
  },
  {
    id: "south-yarra",
    name: "South Yarra",
    kind: "in-person",
    address: "681 Chapel Street, South Yarra VIC 3141",
  },
  {
    id: "online",
    name: "Online Classes",
    kind: "online",
    address: null,
  },
] as const;

export type Location = (typeof locations)[number];
