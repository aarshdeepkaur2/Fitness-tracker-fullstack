import { useEffect, useMemo, useState } from "react";
import { WorkoutService } from "../sevices/workoutService";
import type { Workout } from "../types/workout";

interface FilterOptions {
  search: string;
  favoritesOnly: boolean;
}

export function useWorkouts(dependencies: unknown[] = []) {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterOptions>({
    search: "",
    favoritesOnly: false,
  });

  const fetchWorkouts = async () => {
    try {
      const data = await WorkoutService.fetchWorkouts();
      setWorkouts(data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const addWorkout = async (newWorkout: Omit<Workout, "id" | "favorite">) => {
    try {
      await WorkoutService.addWorkout(newWorkout);
      await fetchWorkouts();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const removeWorkout = async (id: number) => {
    try {
      await WorkoutService.removeWorkout(id);
      await fetchWorkouts();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const toggleFavorite = async (id: number) => {
    try {
      await WorkoutService.toggleFavorite(id);
      await fetchWorkouts();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const filteredWorkouts = useMemo(() => {
    let result = [...workouts];
    if (filters.search) {
      const search = filters.search.toLowerCase();
      result = result.filter(
        (w) =>
          w.exercise.toLowerCase().includes(search) ||
          w.reps.toLowerCase().includes(search) ||
          w.date.toLowerCase().includes(search)
      );
    }
    if (filters.favoritesOnly) {
      result = result.filter((w) => w.favorite);
    }
    return result;
  }, [workouts, filters]);

  const setSearchoption = (term: string) =>
    setFilters((prev) => ({ ...prev, search: term }));

  const setFavoritesOnly = (fav: boolean) =>
    setFilters((prev) => ({ ...prev, favoritesOnly: fav }));

  useEffect(() => {
    fetchWorkouts();
  }, dependencies);

  return {
    workouts,
    filteredWorkouts,
    error,
    addWorkout,
    removeWorkout,
    toggleFavorite,
    setSearchoption,
    setFavoritesOnly,
    filters,
  };
}
