import { useEffect, useMemo, useState } from "react";
import { WorkoutService } from "../services/workoutService";
import type { Workout } from "../../types/workout";

interface FilterOptions {
  search: string;
  favoritesOnly: boolean;
}

export function useWorkouts() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

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
      setSuccess("New Workout added!");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const updateWorkout = async (id: string, updates: Partial<Workout>) => {
    try {
      const updated = await WorkoutService.updateWorkout(id, updates);
      setWorkouts((prev) =>
        prev.map((w) => (w.id === id ? { ...w, ...updated } : w))
      );
      setSuccess("Workout updated!");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const removeWorkout = async (id: string) => {
    try {
      await WorkoutService.removeWorkout(id);
      setWorkouts((prev) => prev.filter((w) => w.id !== id));
      setSuccess("Workout removed!");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const toggleFavorite = async (id: string) => {
    try {
      await WorkoutService.toggleFavorite(id);
      setWorkouts((prev) =>
        prev.map((w) =>
          w.id === id ? { ...w, favorite: !w.favorite } : w
        )
      );
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
          String(w.date).toLowerCase().includes(search)
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
  }, []);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return {
    workouts,
    filteredWorkouts,
    error,
    success,
    addWorkout,
    updateWorkout,
    removeWorkout,
    toggleFavorite,
    setSearchoption,
    setFavoritesOnly,
    filters,
  };
}
