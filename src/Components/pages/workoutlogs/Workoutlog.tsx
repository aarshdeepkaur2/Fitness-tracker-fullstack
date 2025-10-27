import { useState } from "react";
import { Button } from "../../../../ui/Button";
import WorkoutForm from "./Workoutform";
import { Star, Pencil, Trash } from "lucide-react";
import "./Workoutlog.css";
import { useWorkouts } from "../../hooks/useWorkout";
import type { Workout } from "../../types/workout";

export default function WorkoutLog() {
  const {
    filteredWorkouts,
    addWorkout,
    removeWorkout,
    toggleFavorite,
    setSearchoption,
    setFavoritesOnly,
    updateWorkout,
    filters,
    error,
    success,
  } = useWorkouts();

  const [editingWorkout, setEditingWorkout] = useState<Workout | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleAddOrUpdateWorkout = (newWorkout: Omit<Workout, "id" | "favorite">) => {
    if (editingWorkout) {
      updateWorkout(editingWorkout.id, newWorkout);
      setEditingWorkout(null);
    } else {
      addWorkout(newWorkout);
    }
    setShowForm(false);
  };

  const handleEditClick = (workout: Workout) => {
    setEditingWorkout(workout);
    setShowForm(true);
  };

  const handleAddClick = () => {
    setEditingWorkout(null);
    setShowForm(true);
  };

  const handleRemoveWorkout = (id: number) => {
    removeWorkout(id);
  };

  return (
    <section className="workoutlog">
      <h2><b>My Workout Log</b></h2>

      <div className="filter-section">
        <input
          type="text"
          placeholder="Filter by exercise, date, or reps"
          value={filters.search}
          onChange={(e) => setSearchoption(e.target.value)}
          className="form-input"
        />

        <Button onClick={handleAddClick} className="add-button">
         Add New Workout Data
        </Button> 
       
        <Button onClick={() => setFavoritesOnly(!filters.favoritesOnly)} className="add-button">
          {filters.favoritesOnly ? "All Workouts" : "Get Favourite list!!!"}
        </Button>
      </div>

      <ul>
        {filteredWorkouts.map((workout) => (
          <li key={workout.id}>
            <div>
              <p><strong>Date:</strong> {workout.date}</p>
              <p><strong>Exercise:</strong> {workout.exercise}</p>
              <p><strong>Detailed Timings:</strong> {workout.reps}</p>
            </div>
            <div className="button-group">
              <Button onClick={() => toggleFavorite(workout.id)}>
                {workout.favorite ? <Star fill="yellow" /> : <Star />}
              </Button>
              <Button onClick={() => handleEditClick(workout)}>
                <Pencil />
              </Button>
              <Button onClick={() => handleRemoveWorkout(workout.id)}>
                <Trash />
              </Button>
            </div>
          </li>
        ))}
      </ul>

      {showForm && (
        <div className="Edit-outside">
          <div className="content">
            <WorkoutForm
              onAddWorkout={handleAddOrUpdateWorkout}
              editingWorkout={editingWorkout}
            />
            <Button onClick={() => setShowForm(false)}>Exit</Button>
          </div>
        </div>
      )}

      {(error || success) && (
        <div className={`message ${error ? "error" : "success"}`}>
          {error || success}
        </div>
      )}
    </section>
  );
}
