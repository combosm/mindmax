export const regularProgram = {
  name: "Regular Program",
  label: "Core learning",
  description:
    "Ongoing Maths and English classes that strengthen the skills students use at school every week.",
  subjects: ["Mathematics", "English"],
} as const;

export const examPreparationPrograms = [
  {
    id: "selective-entry",
    name: "Selective Entry Program",
    description:
      "Focused preparation workshops for students working towards selective entry exams.",
  },
  {
    id: "scholarship",
    name: "Scholarship Program",
    description: "Focused preparation workshops for students working towards scholarship exams.",
  },
] as const;

export const examFormats = ["ACER", "EduTest"] as const;

export const examSubjectGroups = [
  {
    name: "Numeracy",
    subjects: ["Numerical / Quantitative Reasoning"],
  },
  {
    name: "Literacy and Reasoning",
    subjects: ["Reading", "Writing", "Verbal Reasoning"],
  },
] as const;
