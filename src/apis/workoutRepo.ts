import { workoutData } from "../Components/mockdata/Workoutdata";
import type { Workout } from "../Components/types/workout";

export function getAll(): Workout[] {
  return workoutData;
}

export function getById(id: number): Workout {
  const foundWorkout = workoutData.find((w) => w.id === id);
  if (!foundWorkout) {
    throw new Error(`Failed to fetch workout with ID ${id}`);
  }
  return foundWorkout;
}


export async function create(workout: Omit<Workout, "id" | "favorite">): Promise<Workout> {
  const newWorkout: Workout = {
    id: Date.now(), 
    favorite: false,
    ...workout,
  };
  workoutData.push(newWorkout);
  return newWorkout;
}


export async function update(id: number, updates: Partial<Workout>): Promise<Workout | null> {
  const index = workoutData.findIndex((w) => w.id === id);
  if (index === -1) {
    throw new Error(`Failed to update workout with ID ${id}`);
  }

  workoutData[index] = { ...workoutData[index], ...updates };
  return workoutData[index];
}

export async function remove(id: number): Promise<boolean> {
  const index = workoutData.findIndex((w) => w.id === id);
  if (index === -1) return false;

  workoutData.splice(index, 1);
  return true;
}

export async function toggleFavorite(id: number): Promise<void> {
  const foundWorkout = workoutData.find((w) => w.id === id);
  if (!foundWorkout) {
    throw new Error(`Failed to find workout with ID ${id}`);
  }

  foundWorkout.favorite = !foundWorkout.favorite;
}
