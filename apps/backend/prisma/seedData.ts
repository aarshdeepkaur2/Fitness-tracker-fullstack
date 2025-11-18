import {WorkoutLog}  from "@prisma/client";

export const workoutSeedData: Omit<WorkoutLog, "id" | "createdAt" | "updatedAt" | "userId">[] = [

  { date: new Date("2025-09-09"), exercise: "Push-ups", reps: "3 sets of 15", favorite: false },
  { date: new Date("2025-09-08"), exercise: "Squats", reps: "4 sets of 20", favorite: false },
  { date: new Date("2025-09-07"), exercise: "Plank", reps: "3 sets of 60s", favorite: false },
  { date: new Date("2025-09-06"), exercise: "Burpees", reps: "3 sets of 12", favorite: false },
  { date: new Date("2025-09-05"), exercise: "Lunges", reps: "3 sets of 10 each leg", favorite: false },
  { date: new Date("2025-09-04"), exercise: "Bicep Curls", reps: "4 sets of 12", favorite: false },
  { date: new Date("2025-09-03"), exercise: "Jumping Jacks", reps: "5 sets of 30s", favorite: false },
  { date: new Date("2025-09-02"), exercise: "Bench Press", reps: "3 sets of 8", favorite: false },
  { date: new Date("2025-09-01"), exercise: "Deadlift", reps: "4 sets of 6", favorite: false },
  { date: new Date("2025-08-31"), exercise: "Pull-ups", reps: "3 sets of 10", favorite: false },
  { date: new Date("2025-08-30"), exercise: "Mountain Climbers", reps: "4 sets of 40", favorite: false },
  { date: new Date("2025-08-29"), exercise: "Sit-ups", reps: "3 sets of 25", favorite: false },
  { date: new Date("2025-08-28"), exercise: "Shoulder Press", reps: "3 sets of 10", favorite: false },
  { date: new Date("2025-08-27"), exercise: "Tricep Dips", reps: "3 sets of 12", favorite: false },
  { date: new Date("2025-08-26"), exercise: "Running", reps: "30 minutes at medium pace", favorite: false },
];

