type ProgressSignal = {
  label: string;
  detail: string;
};

export const parentProgressSignals = [
  {
    label: "Graded work",
    detail: "Maths testing and completed tasks provide concrete points for review.",
  },
  {
    label: "Teacher feedback",
    detail: "Correction and guidance show students what to strengthen next.",
  },
  {
    label: "Visible development",
    detail: "Assessment outcomes help parents follow progress over time.",
  },
] as const satisfies readonly ProgressSignal[];
