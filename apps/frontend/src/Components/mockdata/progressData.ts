export type ProgressItem = {
  id: number;
  date: string;
  goal: string;
  status: string;
};

// pre-made list of goals
export const progressData: ProgressItem[] = [
  { id: 1, date: "2025-09-01", goal: "Go for a 2 km run", status: "Completed" },
  { id: 2, date: "2025-09-03", goal: "30 push-ups", status: "Completed" },
  { id: 3, date: "2025-09-05", goal: "Yoga 20 min", status: "In Progress" },
  { id: 4, date: "2025-09-07", goal: "Drink 2L water", status: "Not Started" },
  { id: 5, date: "2025-09-09", goal: "Walk 5 km", status: "Completed" },
  { id: 6, date: "2025-09-11", goal: "Stretch 15 min", status: "In Progress" },
  { id: 7, date: "2025-09-13", goal: "Eat healthy meals", status: "Completed" },
  { id: 8, date: "2025-09-15", goal: "Cycle 10 km", status: "Not Started" },
  { id: 9, date: "2025-09-17", goal: "Meditate 10 min", status: "Completed" },
  { id: 10, date: "2025-09-19", goal: "Sleep 8 hrs", status: "Completed" }
];
