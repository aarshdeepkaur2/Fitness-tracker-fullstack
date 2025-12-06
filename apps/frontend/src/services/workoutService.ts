import type { Workout } from "../../types/workout";
const API_URL = import.meta.env.VITE_API_URL;

export const WorkoutService = {
  fetchWorkouts: async (): Promise<Workout[]> => {
    const res = await fetch(`${API_URL}/workouts`, {
      credentials: "include",
    });
    const data = await res.json();
    return data.data;
  },

  addWorkout: async (workout: Omit<Workout, "id" | "favorite">): Promise<Workout> => {
    const res = await fetch(`${API_URL}/workouts`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(workout),
    });
    const data = await res.json();
    return data.data;
  },

  updateWorkout: async (id: string, updates: Partial<Workout>): Promise<Workout> => {
    const res = await fetch(`${API_URL}/workouts/${id}`, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    const data = await res.json();
    return data.data;
  },

  removeWorkout: async (id: string): Promise<void> => {
    await fetch(`${API_URL}/workouts/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
  },

  toggleFavorite: async (id: string): Promise<Workout> => {
    const res = await fetch(`${API_URL}/workouts/${id}/favorite`, {
      method: "PATCH",
      credentials: "include",
    });
    const data = await res.json();
    return data.data;
  },
};