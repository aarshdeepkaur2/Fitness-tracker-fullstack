import type { Workout } from "../types/workout";
import * as workoutRepository from "../../apis/workoutRepo";

/* Handles all  logic for working with workout.*/
export const WorkoutService = {
 
  async fetchWorkouts(): Promise<Workout[]> {
    return await workoutRepository.getAll();
  },


  async addWorkout(workout: Omit<Workout, "id" | "favorite">): Promise<Workout> {
    const validationErrors = this.validateWorkout(workout);

    if (validationErrors.size > 0) {
      const errorMessage = Array.from(validationErrors.values()).join("\n");
      throw new Error(errorMessage);
    }

    return await workoutRepository.create(workout);
  },

 
  async updateWorkout(id: number, updates: Partial<Workout>): Promise<Workout | null> {
    return await workoutRepository.update(id, updates);
  },


 
  async removeWorkout(id: number): Promise<boolean> {
    return await workoutRepository.remove(id);
  },

  
  async toggleFavorite(id: number): Promise<void> {
    return await workoutRepository.toggleFavorite(id);
  },

  /*Addinng some validations*/
  validateWorkout(workout: Partial<Workout>): Map<string, string> {
    const validationErrors = new Map<string, string>();

    if (!workout.date?.trim()) {
      validationErrors.set("date", "Date is required.");
    } else {
      const datePattern = /^\d{4}-\d{2}-\d{2}$/;
      if (!datePattern.test(workout.date)) {
        validationErrors.set("date", "Date must be in YYYY-MM-DD format.");
      }
    }

   
    if (!workout.exercise?.trim()) {
      validationErrors.set("exercise", "Exercise name is required.");
    } else if (workout.exercise.trim().length < 3) {
      validationErrors.set("exercise", "Exercise name must be at least 3 characters long.");
    }

    if (!workout.reps?.trim()) {
      validationErrors.set("reps", "Repetitions detail is required.");
    } else if (!/\d+/.test(workout.reps)) {
      validationErrors.set("reps", "Repetitions must include a numeric value (e.g., '3 sets of 10').");
    }

    return validationErrors;
  },
};
