import {WorkoutLog} from "@prisma/client";
import prisma from "../../../../prisma/client";


export const fetchAllWorkouts = async (): Promise<WorkoutLog[]> => {
  return prisma.workoutLog.findMany({
    orderBy: { date: "desc" },
  });
};

export const getWorkoutById = async (id: string): Promise<WorkoutLog | null> => {
  try {
    const workout = await prisma.workoutLog.findUnique({
      where: { id },
    });

    if (!workout) {
      return null;
    } else {
      return workout;
    }
  } catch (error) {
    throw new Error(`Failed to fetch workout with id ${id}`);
  }
};

export const createWorkout = async (workoutData: {
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
    },
  });

  return newWorkout;
};

export const updateWorkout = async (
  id: string,
  workout: {
    date?: string;
    exercise?: string;
    reps?: string;
    favorite?: boolean;
  }
): Promise<WorkoutLog> => {
  const updatedWorkout = await prisma.workoutLog.update({
    where: { id },
    data: {
      ...workout,
      ...(workout.date ? { date: new Date(workout.date) } : {}),
    },
  });
  return updatedWorkout;
};

export const deleteWorkout = async (id: string): Promise<void> => {
  await prisma.workoutLog.delete({
    where: { id },
  });
};

