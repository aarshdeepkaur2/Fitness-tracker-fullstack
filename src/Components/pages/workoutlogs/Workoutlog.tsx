import { useState } from "react";
import { Button } from "../../../../ui/Button";
import workoutsData from "../../../assets/workoutdata.json";
import WorkoutForm from "./Workoutform";
import { Star, Share } from "lucide-react";
import type { Workout } from "../../types/workout"
import "./Workoutlog.css";


interface WorkoutLogProps {
  workoutsCompleted: number;
  setWorkoutsCompleted: React.Dispatch<React.SetStateAction<number>>;
}

export default function WorkoutLog({ workoutsCompleted, setWorkoutsCompleted }: WorkoutLogProps) {
  const [workouts, setWorkouts] = useState<Workout[]>(workoutsData);
  const [filterText, setFilterText] = useState("");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const handleAddWorkout = (newWorkout: Omit<Workout, "id">) => {
    const workoutWithId: Workout = { ...newWorkout, id: workouts.length + 1, favorite: false };
    setWorkouts([...workouts, workoutWithId]);
  };

  const handleRemoveWorkout = (id: number) => {
    setWorkouts(workouts.filter((w) => w.id !== id));
  };

  const toggleFavorite = (id: number) => {
    setWorkouts(
      workouts.map((w) => (w.id === id ? { ...w, favorite: !w.favorite } : w))
    );
  };

  const filteredWorkouts = workouts.filter((w) => {
    const matchesText =
      w.exercise.toLowerCase().includes(filterText.toLowerCase()) ||
      w.reps.toLowerCase().includes(filterText.toLowerCase()) ||
      w.date.toLowerCase().includes(filterText.toLowerCase());
    const matchesFavorite = showFavoritesOnly ? w.favorite : true;
    return matchesText && matchesFavorite;
  });

  return (
    <section className="workoutlog">
      <h2><i><b>My Workout Log</b></i></h2>


      <p><i>No of Today's Workouts Goal Completed: <strong>{workoutsCompleted}</strong></i></p>
      <Button onClick={() => setWorkoutsCompleted(workoutsCompleted + 1)} className="add-button">
        Complete a Workout
      </Button>

      <WorkoutForm onAddWorkout={handleAddWorkout} />

      <div className="flex gap-2 my-2">
        <input
          type="text"
          placeholder="Filter by exercise, date, or reps"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="form-input"
        />
        <Button onClick={() => setShowFavoritesOnly(!showFavoritesOnly)} className="add-button">
          {showFavoritesOnly ? "All Workouts" : "Get Favourite list!!!"}
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

            <div className="flex gap-2">
              <Button onClick={() => toggleFavorite(workout.id)}>
                {workout.favorite ? <Star fill="Yellow" /> : <Star />}
              </Button>
              <Button>
                <Share />
              </Button>
              <Button onClick={() => handleRemoveWorkout(workout.id)}>Remove</Button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
