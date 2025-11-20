import { useEffect, useMemo, useState } from "react";
import { WorkoutService } from "../services/workoutService";
import type { Workout } from "../Components/types/workout";

// filter Interaface options
interface FilterOptions {
  search: string;
  favoritesOnly: boolean;
}

// Custom hook to manage workout data
export function useWorkouts(dependencies: unknown[] = []) {
  // store workouts
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  // store error messages
  const [error, setError] = useState<string | null>(null);
  // store to store success messages
  const [success, setSuccess] = useState<string | null>(null);
  // search and favorites filter
  const [filters, setFilters] = useState<FilterOptions>({
    search: "",
    favoritesOnly: false,
  });

  // Fetch workouts from the service file
  const fetchWorkouts = async () => {
    try {
      const data = await WorkoutService.fetchWorkouts(); 
      setWorkouts([...data]);
    } catch (err: any) {
      // set errors
      setError(err.message); 
    }
  };

  // Add a new workout
  const addWorkout = async (newWorkout: Omit<Workout, "id" | "favorite">) => {
    try {
      await WorkoutService.addWorkout(newWorkout); 
      await fetchWorkouts(); 
      setSuccess("New Workout data has been added successfully!!!");
      setTimeout(() => setSuccess(null), 3000); 
    } catch (err: any) {
      setError(err.message);
    }
  };

  // Update an existing workout
  const updateWorkout = async (id: number, updates: Partial<Workout>) => {
    try {
      const updated = await WorkoutService.updateWorkout(id, updates);
      if (updated) {
        setWorkouts((prev) =>
          prev.map((w) => (w.id === id ? { ...w, ...updated } : w)) 
        );
        setSuccess("Workout data has been updated successfully!");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  // Remove a workout
  const removeWorkout = async (id: number) => {
    try {
      await WorkoutService.removeWorkout(id);
      setWorkouts(prev => prev.filter(w => w.id !== id)); 
      setSuccess("Workout data has been removed!");
    } catch (err: any) {
      setError(err.message);
    }
  };

  // Toggle favorite status for a workout
  const toggleFavorite = async (id: number) => {
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

  //filtered workouts based on search and favorites
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

  // Set search filter
  const setSearchoption = (term: string) =>
    setFilters((prev) => ({ ...prev, search: term }));

  // Set favorites filter
  const setFavoritesOnly = (fav: boolean) =>
    setFilters((prev) => ({ ...prev, favoritesOnly: fav }));

  // Fetch workouts at intial stage
  useEffect(() => {
    fetchWorkouts();
  }, dependencies);

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
