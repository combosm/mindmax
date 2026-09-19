type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems = [
  {
    question: "What year levels does MindMax tutor?",
    answer: "MindMax tutoring is designed for students in Grades 3–6.",
  },
  {
    question: "What subjects are covered?",
    answer:
      "The Regular Program covers Mathematics and English. Selective Entry and Scholarship preparation also develops reading, writing, numerical or quantitative reasoning, and verbal reasoning.",
  },
  {
    question: "How do online classes work?",
    answer:
      "Online Live Classes provide structured, live teaching from home, with ongoing support beyond each lesson.",
  },
  {
    question: "What support is available outside class?",
    answer:
      "Support includes graded Maths testing, writing tasks with teacher correction, teacher-led weekend homework support and a Selective School mentor buddy.",
  },
  {
    question: "How is progress tracked?",
    answer:
      "Graded work, assessment outcomes and teacher feedback help make development visible and keep parents informed.",
  },
  {
    question: "Where are face-to-face classes held?",
    answer: "Face-to-face classes are offered in Hoppers Crossing and South Yarra.",
  },
  {
    question: "How do I choose the right program?",
    answer:
      "The best starting point depends on whether your child needs ongoing Maths and English learning or focused Selective Entry or Scholarship exam preparation. Enquire with MindMax to discuss the appropriate pathway.",
  },
  {
    question: "How do I enquire?",
    answer: "Use an Enquire Now link on this page to contact MindMax about the right learning option.",
  },
] as const satisfies readonly FaqItem[];
