import { useState } from "react";
import { Button } from "../../../../ui/Button";
import "./Workoutlog.css";

export interface Workout {
  id: number;
  date: string;
  exercise: string;
  reps: string;
}
interface WorkoutFormProps {
  onAddWorkout: (newWorkout: Omit<Workout, "id">) => void;
}

/* Adding workout form*/
export default function WorkoutForm({ onAddWorkout }: WorkoutFormProps) {
  const [newWorkout, setNewWorkout] = useState({
    date: "",
    exercise: "",
    reps: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWorkout.date || !newWorkout.exercise || !newWorkout.reps) {
      alert("Please fill in the Required fields!!!!");
      return;
    }
    onAddWorkout(newWorkout); 
    setNewWorkout({ date: "", exercise: "", reps: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="workout-form">
      <h3>Add a New Workout Set </h3>

      <input
        type="date"
        value={newWorkout.date}
        onChange={(e) => setNewWorkout({ ...newWorkout, date: e.target.value })}
        className="form-input"
        required
      />

      <input
        type="text"
        placeholder="Name of Exercise"
        value={newWorkout.exercise}
        onChange={(e) => setNewWorkout({ ...newWorkout, exercise: e.target.value })}
        className="form-input"
        required
      />

      <input
        type="text"
        placeholder="Duration"
        value={newWorkout.reps}
        onChange={(e) => setNewWorkout({ ...newWorkout, reps: e.target.value })}
        className="form-input"
        required
      />

      <Button type="submit" className="add-button">Add Workout</Button>
    </form>
  );
}
