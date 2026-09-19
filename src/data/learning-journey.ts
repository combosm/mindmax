type LearningStep = {
  title: string;
  description: string;
};

export const learningJourney = [
  { title: "Learn", description: "Build understanding through teacher-led instruction." },
  { title: "Practise", description: "Strengthen skills with structured weekly work." },
  { title: "Apply", description: "Put learning into practice through tests, writing and reasoning tasks." },
  { title: "Receive feedback", description: "Use teacher correction and guidance to understand what to improve." },
  { title: "Get support", description: "Work through questions with teacher-led weekend homework support." },
  { title: "Track progress", description: "Graded work and teacher feedback help keep parents informed." },
] as const satisfies readonly LearningStep[];
