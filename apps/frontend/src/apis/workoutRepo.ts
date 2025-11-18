import type { Workout } from "../Components/types/workout";

type WorkoutsResponseJSON = { message: string; data: Workout[] };
type WorkoutResponseJSON = { message: string; data: Workout };

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const WORKOUT_ENDPOINT = "/workouts";

export async function fetchWorkouts(): Promise<Workout[]> {
  const workoutResponse: Response = await fetch(`${BASE_URL}${WORKOUT_ENDPOINT}`);
  if (!workoutResponse.ok) {
    throw new Error("Failed to fetch workouts");
  }
  const json: WorkoutsResponseJSON = await workoutResponse.json();
  return json.data;
}

export async function getWorkoutById(workoutId: number): Promise<Workout> {
  const workoutResponse: Response = await fetch(`${BASE_URL}${WORKOUT_ENDPOINT}/${workoutId}`);
  if (!workoutResponse.ok) {
    throw new Error(`Failed to fetch workout with id ${workoutId}`);
  }
  const json: WorkoutResponseJSON = await workoutResponse.json();
  return json.data;
}

export async function createWorkout(workout: Omit<Workout, "id">): Promise<Workout> {
  const createResponse: Response = await fetch(`${BASE_URL}${WORKOUT_ENDPOINT}`, {
    method: "POST",
    body: JSON.stringify({ ...workout }),
    headers: { "Content-Type": "application/json" },
  });
  if (!createResponse.ok) {
    throw new Error("Failed to create workout");
  }
  const json: WorkoutResponseJSON = await createResponse.json();
  return json.data;
}

export async function updateWorkout(workout: Workout) {
  const updateResponse: Response = await fetch(`${BASE_URL}${WORKOUT_ENDPOINT}/${workout.id}`, {
    method: "PUT",
    body: JSON.stringify({ ...workout }),
    headers: { "Content-Type": "application/json" },
  });
  if (!updateResponse.ok) {
    throw new Error(`Failed to update workout with id ${workout.id}`);
  }
  const json: WorkoutResponseJSON = await updateResponse.json();
  return json.data;
}

export async function deleteWorkout(id: number): Promise<boolean> {
  const deleteResponse: Response = await fetch(`${BASE_URL}${WORKOUT_ENDPOINT}/${id}`, {
    method: "DELETE",
  });
  if (!deleteResponse.ok) {
    throw new Error(`Failed to delete workout with id ${id}`);
  }
  return true;
}

export async function toggleFavoriteWorkout(id: string): Promise<Workout> {
  const response = await fetch(`${BASE_URL}/workouts/${id}/favorite`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Failed to toggle favorite for workout ${id}`);
  }

  const json = await response.json();
  return json.data;
}
