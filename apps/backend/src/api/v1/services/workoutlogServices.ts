import {WorkoutLog} from "@prisma/client";
import prisma from "../../../../prisma/client";


export const fetchAllWorkouts = async (userId: string | null): Promise<WorkoutLog[]> => {
  if (!userId) return []; 
  return prisma.workoutLog.findMany({
     where: userId ? { userId } : {},
    orderBy: { date: "desc" },
  });
};


export const getWorkoutById = async (
  id: string,
  userId: string
): Promise<WorkoutLog | null> => {
  return prisma.workoutLog.findFirst({
    where: { id, userId },
  });
};

export const createWorkout = async (userId:string, workoutData: {
  date: string;
  exercise: string;
  reps: string;
  favorite?: boolean;
}): Promise<WorkoutLog> => {
  const newWorkout: WorkoutLog = await prisma.workoutLog.create({
    data: {
      favorite: workoutData.favorite ?? false,
      date: new Date(workoutData.date),
      exercise: workoutData.exercise,
      reps: workoutData.reps,
      userId,
    },
  });

  return newWorkout;
};

export const updateWorkout = async (
  id: string,
  userId:string,
  workout: {
    date?: string;
    exercise?: string;
    reps?: string;
    favorite?: boolean;
  }
): Promise<WorkoutLog> => {
  const updatedWorkout = await prisma.workoutLog.update({
    where: { id, userId },
    data: {
      ...workout,
      ...(workout.date ? { date: new Date(workout.date) } : {}),
    },
  });
  return updatedWorkout;
};

export const deleteWorkout = async (id: string, userId:string): Promise<void> => {
  await prisma.workoutLog.delete({
    where: { id, userId },
  });
};

export const toggleFavoriteWorkout = async (id: string, userId: string): Promise<WorkoutLog> => {
  const workout = await prisma.workoutLog.findFirst({ where: { id, userId } });

  if (!workout) throw new Error("Workout not found or unauthorized");

  return prisma.workoutLog.update({
    where: { id },
    data: { favorite: !workout.favorite },
  });
};